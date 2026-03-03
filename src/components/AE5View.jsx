import React, { useState } from 'react';
import { ArrowLeft, BookOpen, ListChecks, ShieldCheck, Quote, TrendingUp } from 'lucide-react';

const ExpansionTile = ({ title, icon: Icon, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
        <div className={`mb-6 overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-800 transition-all ${isOpen ? 'shadow-xl' : 'shadow-sm'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-left"
            >
                <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${isOpen ? 'bg-[#002855] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                        <Icon size={24} />
                    </div>
                    <span className={`font-black uppercase tracking-tight text-base dark:text-white ${isOpen ? 'text-slate-900' : 'text-slate-500'}`}>
                        {title}
                    </span>
                </div>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
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
    <p className={`text-[15px] text-slate-700 dark:text-slate-300 leading-relaxed mb-5 text-justify ${className}`}>{children}</p>
);

const HighlightBox = ({ title, children, type = "info" }) => {
    const colors = {
        info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-900/50 dark:text-blue-200",
        warning: "bg-orange-50 border-orange-200 text-orange-900 dark:bg-orange-900/20 dark:border-orange-900/50 dark:text-orange-200",
        alert: "bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-900/50 dark:text-red-200"
    };

    return (
        <div className={`p-6 rounded-2xl border mb-6 ${colors[type]}`}>
            {title && <h5 className="font-bold text-sm uppercase mb-3 opacity-80">{title}</h5>}
            <div className="text-[15px] leading-relaxed">
                {children}
            </div>
        </div>
    );
};

const AE5View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE5 = [
        { term: "Lugares Especiales", def: "Recintos que por sus características constructivas, uso o presencia de agentes corrosivos o inflamables requieren normativas de instalación más estrictas (ej. hospitales, piscinas, servicentros)." },
        { term: "Fuerza y Potencia", def: "Circuitos y sistemas eléctricos diseñados para alimentar maquinarias, motores o sistemas de climatización con mayor demanda energética que la iluminación estándar." },
        { term: "Instalación Provisional", def: "Instalación eléctrica destinada a utilizarse por un tiempo limitado y definido, como aquellas requeridas en ferias, exposiciones o faenas de construcción." },
        { term: "Grado de Protección IP", def: "Índice que clasifica el nivel de protección que ofrece la cubierta o envolvente de un equipo eléctrico contra el ingreso de polvo (primer dígito) y líquidos (segundo dígito)." }
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
                        <span className="text-sm font-black dark:text-white uppercase">AE5: Normativa Alumbrado y Fuerza</span>
                    </div>
                </div>

                <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-2xl backdrop-blur-md shadow-inner">
                    {[
                        { id: 'materia', label: 'Artículo', icon: <BookOpen size={14} /> },
                        { id: 'glosario', label: 'Glosario', icon: <ListChecks size={14} /> }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase transition-all ${activeTab === tab.id ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-lg' : 'text-slate-500 hover:text-slate-700'}`}
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
                                Normativas y Estándares: <br /> <span className="text-[#D1202F]">Instalaciones de Alumbrado, Potencia y Lugares Especiales</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>Si bien todas las instalaciones eléctricas se rigen por un tronco normativo común, la finalidad (iluminar, calefaccionar, mover motores) y el entorno físico (hospitales, construcciones, exteriores) añaden capas significativas de complejidad técnica y requerimientos legales. Los Pliegos RIC del Decreto Supremo 8 actúan modulando estas exigencias específicas frente a los riesgos particulares que presenta cada caso.</Paragraph>
                        </div>

                        <ExpansionTile title="I. Instalaciones de Alumbrado, Fuerza y Climatización" icon={BookOpen} defaultOpen={true}>
                            <SectionHeader title="1.1 Circuitos de Alumbrado" />
                            <Paragraph>La normativa establece límites en la cantidad de centros (puntos de luz o enchufes menores) que pueden colgar de un solo circuito de alumbrado, su calibre mínimo de conductor y la obligatoriedad de uso de protecciones diferenciales de alta sensibilidad para todos los circuitos de iluminación.</Paragraph>

                            <SectionHeader title="1.2 Circuitos de Potencia (Fuerza)" />
                            <Paragraph>Al tratar con motores, ascensores o equipos industriales, actúan normas específicas que dictan la instalación de guardamotores y el sobredimensionamiento (generalmente 25% superior a la Inominal) de los conductores alimentadores para soportar los grandes peaks de corriente durante el arranque mecánico del equipo.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="II. Instalaciones Especiales y Provisionales" icon={ShieldCheck}>
                            <SectionHeader title="2.1 Lugares Especiales (Hospitales, Estaciones de Servicio)" />
                            <Paragraph>Las "instalaciones en lugares con riesgo de explosión/incendio" o "instalaciones en centros de atención de salud" tienen pliegos RIC enteramente dedicados a ellos. En un quirófano, por ejemplo, los requerimientos de la malla a tierra, el tipo de cable libre de halógenos y los generadores ininterrumpidos (UPS o Grupos Electrógenos) no son sugerencias, sino obligaciones críticas para sostener equipos de soporte vital humano.</Paragraph>

                            <SectionHeader title="2.2 Instalaciones Provisionales" />
                            <Paragraph>Los "tableros de faena" utilizados durante la construcción de un edificio están regulados. No deben ser precarios. Deben contar siempre con envolventes con altos índices IP (contra polvo y agua proyectada), y protección diferencial tetrapolar obligatoria para proteger al personal y herramientas en entornos ásperos y perjudiciales para los cables.</Paragraph>
                            <HighlightBox type="info">
                                <p>El técnico debe recordar que provisional NO significa inseguro. Una falla en un tablero de obra expuesto a la intemperie conlleva el mismo -o mayor- riesgo fatal que en una instalación definitiva.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Resumen y Aplicación</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Como hemos visto a lo largo de este AE y del módulo, el técnico capacitado debe diagnosticar las exigencias del entorno físico para seleccionar los materiales adecuados, interpretando la normativa vigente aplicable a alumbrado o fuerza, y discerniendo cuándo un lugar adquiere la categoría de "recinto especial" para implementar los más altos estándares de protección indicados por la SEC.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Recursos Clave</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Cálculo de Secciones y Corrientes</strong>
                                        <span className="text-slate-500 italic">Software / Tablas Norma Chilena</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Clasificación IP (IEC 60529)</strong>
                                        <span className="text-slate-500 italic">Guía Técnica SEC</span>
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
                        {glossaryAE5.map((item, i) => (
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
                    <ArrowLeft size={16} /> Finalizar Sesión AE5
                </button>
            </div>

        </div>
    );
};

export default AE5View;
