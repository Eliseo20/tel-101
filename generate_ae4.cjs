const fs = require('fs');

const rawText = fs.readFileSync('Articulos_ae4.txt', 'utf8');

// The file has 5 articles separated by "---------------- articulo X ------------------------"
const parts = rawText.split(/----------------\s*[aA]rt[ií]culo.*\s*-----------------*\r?\n/i);

const articles = [];

parts.forEach(part => {
    if (!part.trim()) return;

    const lines = part.split(/\r?\n/).map(l => l.trimRight()); // keep left indentation for list detection
    let title = "";

    // find first non-empty line over 5 chars
    let titleIdx = 0;
    while (titleIdx < lines.length && lines[titleIdx].trim().length < 5) titleIdx++;
    if (titleIdx < lines.length) title = lines[titleIdx].trim();

    const contentLines = lines.slice(titleIdx + 1);

    const article = {
        title: title,
        sections: []
    };

    let currentSection = { title: "Introducción", subsections: [] };
    let currentSubsection = { title: null, elements: [] };
    let currentList = null;
    let listContext = false;

    const pushElement = (el) => {
        currentSubsection.elements.push(el);
    };

    for (let i = 0; i < contentLines.length; i++) {
        const rawLine = contentLines[i];
        const line = rawLine.trim();
        if (!line) continue;

        // Detect major sections: "1. Introducción", "Introducción", "1. Concepto...", "Conclusión", "Bibliografía"
        const isMajorSection = /^(?:[IVX]+\.|\d+\.)?\s*(?:Introducción|Conclusión|Bibliografía|Conclusiones|Resumen|\w+.*)$/i.test(line);
        // We will be a bit more strict for major section:
        const isNumberedMajor = /^\d+\.\s+[A-Z]/.test(line); // "1. Concepto"
        const isKeyword = /^(Introducción|Conclusión|Bibliografía)$/i.test(line);

        const isSubSection = /^\d+\.\d+\.?\s+[A-Z]/.test(line); // "1.1 Concepto"

        if (isNumberedMajor || isKeyword) {
            // New Major Section (Maps to SubExpansionTile)
            if (currentSubsection.elements.length > 0 || currentSubsection.title) {
                currentSection.subsections.push(currentSubsection);
            }
            if (currentSection.subsections.length > 0) {
                article.sections.push(currentSection);
            }

            currentSection = { title: line, subsections: [] };
            currentSubsection = { title: null, elements: [] };
            continue;
        }

        if (isSubSection) {
            // New Subsection (Maps to SectionHeader inside SubExpansionTile)
            if (currentSubsection.elements.length > 0 || currentSubsection.title) {
                currentSection.subsections.push(currentSubsection);
            }
            currentSubsection = { title: line, elements: [] };
            continue;
        }

        // Handle Lists (bullets or indented lines that look like items)
        // If line is indented by >= 4 spaces OR starts with "-"
        const isIndented = rawLine.startsWith('    ') || rawLine.startsWith('\t');
        const startsWithDash = line.startsWith('-');

        if (isIndented || startsWithDash) {
            let text = line;
            if (startsWithDash) text = line.substring(1).trim();

            if (!currentList) {
                currentList = { type: 'list', items: [] };
                pushElement(currentList);
            }
            currentList.items.push(text);
            continue;
        } else {
            currentList = null;
        }

        // It's a paragraph
        pushElement({ type: 'paragraph', text: line });
    }

    if (currentSubsection.elements.length > 0 || currentSubsection.title) {
        currentSection.subsections.push(currentSubsection);
    }
    if (currentSection.subsections.length > 0) {
        article.sections.push(currentSection);
    }

    articles.push(article);
});

// Now generate AE4View.jsx
const icons = ['Shield', 'Zap', 'ShieldCheck', 'Settings', 'Power'];
let expansionTiles = '';

articles.forEach((art, idx) => {
    let icon = icons[idx % icons.length];

    let artContent = '';

    art.sections.forEach(sec => {
        let secContent = '';

        sec.subsections.forEach(subsec => {
            if (subsec.title) {
                secContent += `                                <SectionHeader title="${subsec.title.replace(/"/g, '&quot;')}" />\n`;
            }
            subsec.elements.forEach(el => {
                if (el.type === 'paragraph') {
                    secContent += `                                <Paragraph>${el.text.replace(/"/g, '&quot;')}</Paragraph>\n`;
                } else if (el.type === 'list') {
                    const itemsStr = el.items.map(it => `"${it.replace(/"/g, '\\"')}"`).join(',\n                                    ');
                    secContent += `                                <List items={[\n                                    ${itemsStr}\n                                ]} />\n`;
                }
            });
        });

        // If it's pure text without deep nesting (e.g. Introduccion), we can just put it, but let's wrap in SubExpansionTile if it's not Introduccion
        const isIntroOrConcl = /i?ntroducc|conclus|bibliograf/i.test(sec.title);
        if (isIntroOrConcl) {
            artContent += `                            <SectionHeader title="${sec.title}" />\n`;
            artContent += secContent.replace(/(<SectionHeader|<Paragraph|<List)/g, '    $1');
        } else {
            artContent += `                            <SubExpansionTile title="${sec.title.replace(/"/g, '&quot;')}">\n${secContent}                            </SubExpansionTile>\n\n`;
        }
    });

    expansionTiles += `
                        <ExpansionTile title="${art.title.replace(/"/g, '&quot;')}" icon={${icon}} defaultOpen={false}>
${artContent}
                        </ExpansionTile>
`;
});

const jsxTemplate = `import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, Shield, Book,
    CheckCircle2, AlertTriangle, Zap, Activity, TrendingUp, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, ShieldCheck, Flame, BookOpen, ChevronRight
} from 'lucide-react';

const SubExpansionTile = ({ title, subtitle, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={\`mb-4 rounded-2xl border transition-all duration-300 overflow-hidden \${isOpen ? 'bg-white dark:bg-slate-900 border-[#002855]/20 dark:border-blue-500/30 shadow-md' : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 hover:border-[#002855]/30 dark:hover:border-slate-600'}\`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
            >
                <div>
                    <h5 className={\`font-bold text-[15px] transition-colors \${isOpen ? 'text-[#002855] dark:text-blue-400' : 'text-slate-800 dark:text-slate-300'}\`}>
                        {title}
                    </h5>
                    {subtitle && (
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{subtitle}</p>
                    )}
                </div>
                <div className={\`p-1.5 rounded-full transition-all duration-300 \${isOpen ? 'bg-[#002855]/10 dark:bg-blue-500/20 text-[#002855] dark:text-blue-400 rotate-90' : 'text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}\`}>
                    <ChevronRight size={18} />
                </div>
            </button>
            <div
                className={\`transition-all duration-500 ease-in-out \${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}\`}
            >
                <div className="p-6 pt-2 border-t border-slate-100 dark:border-slate-800/50">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ExpansionTile = ({ title, icon: Icon, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className={\`mb-6 overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-800 transition-all \${isOpen ? 'shadow-xl' : 'shadow-sm'}\`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left"
            >
                <div className="flex items-center gap-4">
                    <div className={\`p-3 rounded-xl \${isOpen ? 'bg-[#002855] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}\`}>
                        <Icon size={24} />
                    </div>
                    <span className={\`font-black uppercase tracking-tight text-base dark:text-white \${isOpen ? 'text-slate-900' : 'text-slate-500'}\`}>
                        {title}
                    </span>
                </div>
                <div className={\`transition-transform duration-300 \${isOpen ? 'rotate-180' : ''}\`}>
                    <TrendingUp size={24} className="text-slate-300" />
                </div>
            </button>
            {isOpen && (
                <div className="p-8 bg-slate-50 border-t border-slate-200 dark:bg-black/20 dark:border-slate-800 animate-in fade-in duration-300 dark:text-slate-300">
                    {children}
                </div>
            )}
        </div>
    );
};

const SectionHeader = ({ title }) => (
    <h4 className="font-black text-lg text-slate-900 dark:text-white mb-4 mt-6 border-b pb-2 dark:border-slate-700 uppercase tracking-tight">{title}</h4>
);

const Paragraph = ({ children, className = "" }) => (
    <p className={\`text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed mb-5 text-justify \${className}\`}>{children}</p>
);

const List = ({ items }) => (
    <ul className="space-y-4 mb-6">
        {items.map((item, idx) => {
            const splitIndex = item.indexOf(':');
            if (splitIndex !== -1 && splitIndex < 60) {
                const boldPart = item.substring(0, splitIndex + 1);
                const restText = item.substring(splitIndex + 1);
                return (
                    <li key={idx} className="flex gap-4 text-[15px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/50">
                        <div className="mt-1 shrink-0">
                            <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-500" />
                        </div>
                        <p>
                            <strong className="text-slate-900 dark:text-white font-bold">{boldPart}</strong>
                            {restText}
                        </p>
                    </li>
                );
            }
            return (
                <li key={idx} className="flex gap-4 text-[15px] text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/50">
                    <div className="mt-1 shrink-0">
                        <CheckCircle2 size={20} className="text-blue-600 dark:text-blue-500" />
                    </div>
                    <p>{item}</p>
                </li>
            );
        })}
    </ul>
);

const HighlightBox = ({ title, children, type = "info" }) => {
    const colors = {
        info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-900/50 dark:text-blue-200",
        warning: "bg-orange-50 border-orange-200 text-orange-900 dark:bg-orange-900/20 dark:border-orange-900/50 dark:text-orange-200",
        alert: "bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-900/50 dark:text-red-200"
    };

    return (
        <div className={\`p-6 rounded-2xl border mb-6 \${colors[type]}\`}>
            {title && <h5 className="font-bold text-sm uppercase mb-3 opacity-80">{title}</h5>}
            <div className="text-[15px] leading-relaxed">
                {children}
            </div>
        </div>
    );
};

const AE4View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE4 = [
        { term: "DS 8/2019", def: "Decreto Supremo que establece los requisitos técnicos mínimos de seguridad para instalaciones eléctricas interiores de baja tensión en Chile." },
        { term: "Baja Tensión", def: "Instalaciones eléctricas conectadas a un suministro cuyo voltaje no excede los 1.000 V en corriente alterna o 1.500 V en corriente continua." },
        { term: "Tablero Eléctrico", def: "Envolvente que alberga los dispositivos de protección, maniobra y medición, encargado de distribuir la energía de forma segura." },
        { term: "Empalme", def: "Punto de conexión entre la red de distribución de la empresa eléctrica y la instalación interior del usuario." },
        { term: "Interruptor Diferencial", def: "Dispositivo de protección que corta automáticamente el suministro eléctrico al detectar fugas de corriente a tierra, protegiendo contra contactos indirectos." },
        { term: "Puesta a Tierra", def: "Conexión de las partes metálicas de un equipo o instalación a tierra, destinada a proteger a las personas derivando corrientes de fuga." },
        { term: "Contacto Directo", def: "Contacto accidental de personas o animales con partes activas de la instalación, normalmente energizadas." },
        { term: "Alimentador", def: "Conductor eléctrico que transporta la energía desde el punto de suministro o tablero general hacia tableros derivados." }
    ];

    return (
        <div className="animate-in fade-in duration-500 space-y-12 pb-20">
            {/* Header */}
            <nav className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={onBack}
                        className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:scale-110 transition border border-slate-200 dark:border-slate-700"
                    >
                        <ArrowLeft size={20} className="text-[#D1202F]" />
                    </button>
                    <div className="h-10 w-px bg-slate-200 dark:bg-slate-800" />
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Módulo TEL101</span>
                        <span className="text-sm font-black dark:text-white uppercase">AE4: Reglamentación y Normativas</span>
                    </div>
                </div>

                <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-2xl backdrop-blur-md shadow-inner">
                    {[
                        { id: 'materia', label: 'Artículo', icon: <FileText size={14} /> },
                        { id: 'glosario', label: 'Glosario', icon: <ListChecks size={14} /> }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={\`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase transition-all \${activeTab === tab.id ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-lg' : 'text-slate-500 hover:text-slate-700'}\`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Content */}
            {activeTab === 'materia' && (
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-8 space-y-6">

                        <div className="mb-12 border-l-8 border-[#D1202F] pl-8 py-2">
                            <h2 className="text-4xl font-black text-[#002855] dark:text-white uppercase tracking-tighter leading-tight">
                                Reglamentación y <br /> <span className="text-[#D1202F]">Normativas (DS 8/2019)</span>
                            </h2>
                        </div>

${expansionTiles}

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones Generales</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La normativa vigente en instalaciones de baja tensión establece las directrices fundamentales para asegurar un estándar de seguridad transversal. El diseño y montaje correcto de los sistemas de distribución, el dimensionamiento preciso de tableros y alimentadores, así como la instauración de medidas robustas contra contactos directos, constituyen la principal garantía para la protección de la vida humana y de los bienes materiales. A través de este módulo se refuerza el papel imprescindible del técnico eléctrico en el cumplimiento normativo.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Bibliografía Recomendada</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Fuentes de energía</strong>
                                        <span className="text-slate-500 italic">Roldán Viloria, José (2008), Madrid: Paraninfo.</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Normativas SEC</strong>
                                        <span className="text-slate-500 italic">Normas Técnicas Sector Electricidad. Superintendencia de Electricidad y Combustibles (SEC), Santiago de Chile.</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Pliegos Técnicos DS 8/2019</strong>
                                        <span className="text-slate-500 italic">Ministerio de Energía, Chile. Requisitos técnicos para instalaciones interiores.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            )}

            {activeTab === 'glosario' && (
                <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        {glossaryAE4.map((item, i) => (
                            <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:translate-y-[-4px]">
                                <h4 className="font-black text-[#002855] dark:text-blue-400 uppercase text-xs mb-2">{item.term}</h4>
                                <p className="text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{item.def}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="pt-10 border-t border-slate-200 dark:border-slate-800 flex justify-center opacity-70">
                <button onClick={onBack} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#002855] hover:text-[#D1202F] transition-colors dark:text-slate-400 dark:hover:text-white">
                    <ArrowLeft size={16} /> Finalizar Sesión AE4
                </button>
            </div>

        </div>
    );
};

export default AE4View;
`;

fs.writeFileSync('src/components/AE4View.jsx', jsxTemplate, 'utf8');
fs.writeFileSync('ae4_articulos.txt', jsxTemplate, 'utf8'); // Also generate the txt requested by user
console.log('Successfully generated AE4View.jsx and ae4_articulos.txt');
