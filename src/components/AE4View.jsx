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

const AE4View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE4 = [
        { term: "Baja Tensión (BT)", def: "Instalaciones eléctricas donde la tensión nominal es igual o inferior a 1000V en corriente alterna o 1500V en corriente continua." },
        { term: "Pliego Técnico RIC", def: "Reglamento de Instalación de Consumo, documentos emitidos por la SEC que establecen los requisitos técnicos obligatorios para las instalaciones eléctricas en Chile." },
        { term: "Tablero Eléctrico", def: "Conjunto de dispositivos de protección, maniobra y medición, agrupados en una o más envolventes (cajas o gabinetes)." },
        { term: "Puesta a Tierra", def: "Conexión eléctrica directa de un circuito o equipo a la tierra física, cuyo propósito es proteger a las personas y equipos de fallas de aislamiento." }
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
                        <span className="text-sm font-black dark:text-white uppercase">AE4: Normativa Baja Tensión</span>
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
                                Normativas y Estándares: <br /> <span className="text-[#D1202F]">Instalaciones de Baja Tensión y Protección (DS 8/2019)</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>Las instalaciones de baja tensión son las más comunes y cercanas al usuario final, comprendiendo residencias, comercios y pequeñas industrias. Para garantizar la seguridad en estas instalaciones, Chile ha estructurado una sólida normativa a través del Decreto Supremo N° 8 de 2019, que aprueba el Reglamento de Seguridad de las Instalaciones de Consumo de Energía Eléctrica y sus correspondientes Pliegos Técnicos Normativos (RIC).</Paragraph>
                            <Paragraph>En esta sección abordaremos los fundamentos legales de las instalaciones eléctricas en baja tensión, enfocados especialmente en las medidas y equipos de protección (como tableros, conductores homologados y sistemas de puesta a tierra) establecidos por la SEC.</Paragraph>
                        </div>

                        <ExpansionTile title="I. Marco Legal: DS 8/2019 y los Pliegos RIC" icon={BookOpen} defaultOpen={true}>
                            <SectionHeader title="1.1 Decreto Supremo 8/2019" />
                            <Paragraph>El DS 8/2019 del Ministerio de Energía es el pilar actual de la regulación eléctrica de consumo en Chile. Este decreto reemplazó a la antigua y de larga data norma NCH 4/2003, modernizando las exigencias para adaptarlas a las nuevas tecnologías (energías renovables, electromovilidad, domótica) e incrementando significativamente los estándares de seguridad exigidos a nivel internacional.</Paragraph>

                            <SectionHeader title="1.2 Estructura de los Pliegos RIC" />
                            <Paragraph>El DS 8/2019 no contiene todo el detalle técnico en su texto principal, sino que delega estas especificaciones a la SEC, la cual dictó un conjunto de 19 Pliegos Técnicos Normativos (RIC). Cada Pliego (RIC N°1, RIC N°2, etc.) regula un aspecto específico de la instalación. Por ejemplo, el RIC N°2 rige exclusivamente a los tableros eléctricos, mientras que el RIC N°6 está dedicado a los sistemas de puesta a tierra.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="II. Requisitos Sub-Sistemas de Baja Tensión" icon={ShieldCheck}>
                            <SectionHeader title="2.1 Equipos y Materiales" />
                            <Paragraph>Según la normativa vigente, todo material eléctrico, dispositivo de protección, o conductor a utilizar en instalaciones de baja tensión debe estar previamente certificado y contar con su respectivo sello SEC. El uso de materiales no normados constituye una falta grave que inhabilita la legalización de la obra y representa un riesgo inminente de fallas e incendios.</Paragraph>

                            <SectionHeader title="2.2 Dimensionamiento y Diseño" />
                            <Paragraph>El dimensionamiento de protecciones (interruptores termomagnéticos y diferenciales) debe estar en estricta coordinación con la sección (calibre) del conductor eléctrico que protege, según las tablas de capacidad de transporte de corriente estipuladas en los Pliegos RIC N°3 y N°4.</Paragraph>
                            <HighlightBox type="info">
                                <p>Un principio fundamental establecido por la norma es que la protección debe actuar siempre ANTES de que el conductor alcance su temperatura máxima de servicio.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones Preliminares</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                El manejo, comprensión y estricta aplicación del DS 8/2019 y los Pliegos RIC es la obligación principal de todo técnico y profesional eléctrico en el país. El cumplimiento normativo no es una opción estética, sino un requerimiento legal sancionado penal y civilmente, cuya función central es salvaguardar vidas frente a los riesgos del uso masivo de energía en baja tensión.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Recursos Clave</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Superintendencia de Electricidad y Combustibles (SEC)</strong>
                                        <span className="text-slate-500 italic">Web Oficial: ds8.sec.cl</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Decreto Supremo 8/2019</strong>
                                        <span className="text-slate-500 italic">Ministerio de Energía</span>
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
