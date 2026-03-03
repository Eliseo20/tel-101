import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, HardDrive, Shield, Book,
    CheckCircle2, AlertTriangle, Unplug, Zap, Activity, TrendingUp, Info, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, Battery
} from 'lucide-react';

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
        <div className={`p-6 rounded-2xl border mb-6 ${colors[type]}`}>
            {title && <h5 className="font-bold text-sm uppercase mb-3 opacity-80">{title}</h5>}
            <div className="text-[15px] leading-relaxed">
                {children}
            </div>
        </div>
    );
};

const AE1View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE1 = [
        { term: "Fuente Hídrica", def: "Energía obtenida del aprovechamiento de las energías cinéticas y potenciales de la corriente del agua, saltos de agua o mareas." },
        { term: "Energía Térmica", def: "Generación de electricidad a partir del calor, generalmente quemando combustibles fósiles (carbón, gas natural, petróleo) o biomasa." },
        { term: "Energías Alternativas", def: "Fuentes de energía renovables que se consideran alternativas a los combustibles fósiles, como la solar, eólica, geotérmica, entre otras." },
        { term: "Impacto Ambiental", def: "Efecto que produce la actividad humana, en este caso la generación eléctrica, sobre el medio ambiente." },
        { term: "Central Hidroeléctrica", def: "Instalación que utiliza energía hidráulica para la generación de energía eléctrica." },
        { term: "Central Termoeléctrica", def: "Instalación empleada en la generación de energía eléctrica a partir de la energía liberada por combustibles fósiles o uranio." },
        { term: "Generación Distribuida", def: "Generación de energía eléctrica a partir de muchas pequeñas fuentes de energía." }
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
                        <span className="text-sm font-black dark:text-white uppercase">AE1: Operación e Instalación</span>
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
                                Introducción a la Industria Eléctrica: <br /> <span className="text-[#D1202F]">Sistemas de Generación Eléctrica</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>El rubro de la energía eléctrica es el pilar fundamental para el desarrollo sostenible de la sociedad moderna. Comprender cómo se genera, transmite y distribuye esta energía es esencial para dimensionar su impacto económico, legal y medioambiental. La Unidad 1 de este Módulo se centra en los Sistemas de Generación Eléctrica, una de las etapas iniciales y más críticas de toda la cadena de suministro industrial.</Paragraph>
                            <Paragraph>En este documento se caracterizan los principales sistemas de generación presentes en la industria: fuentes hídricas, térmicas y alternativas. Analizaremos sus principios de funcionamiento, sus beneficios y el consecuente impacto ambiental que cada una de estas tecnologías conlleva, adaptándose a los estándares y normativas vigentes.</Paragraph>
                        </div>

                        <ExpansionTile title="I. Generación mediante Fuentes Hídricas" icon={Power} defaultOpen={true}>
                            <SectionHeader title="1.1 Principio de funcionamiento" />
                            <Paragraph>Las centrales hidroeléctricas aprovechan la energía potencial y cinética del agua para generar electricidad. El proceso básico consiste en retener el agua en un embalse mediante una presa, y luego dejarla caer a alta presión a través de tuberías guiadas hacia una turbina. La fuerza del agua hace girar los álabes de la turbina, la cual está conectada al eje de un generador eléctrico. A medida que el generador gira, convierte la energía mecánica en energía eléctrica.</Paragraph>
                            <Paragraph>Existen diferentes tipos de centrales hídricas, como las de embalse (que almacenan grandes cantidades de agua y pueden regular la generación) y las de pasada (que utilizan el caudal natural del río sin gran capacidad de almacenamiento).</Paragraph>

                            <SectionHeader title="1.2 Ventajas y Desafíos" />
                            <List items={[
                                "Energía Renovable: Es un recurso inagotable a escala humana (mientras se mantenga el ciclo del agua).",
                                "Bajas Emisiones: Durante su operación, las emisiones de gases de efecto invernadero son mínimas en comparación con los combustibles fósiles.",
                                "Estabilidad: Proporcionan una fuente de energía constante y predecible, ideal para la carga base del sistema eléctrico.",
                                "Altos Costos Iniciales: La construcción de presas e infraestructura hidráulica exige una gran inversión de capital.",
                                "Impacto Geográfico: Requieren condiciones topográficas e hidrológicas específicas, lo que limita su ubicación."
                            ]} />

                            <SectionHeader title="1.3 Impacto Ambiental" />
                            <Paragraph>Aunque no emiten contaminantes de manera directa, las grandes centrales hidroeléctricas de embalse presentan impactos significativos:</Paragraph>
                            <List items={[
                                "Pérdida de biodiversidad por inundación de extensas áreas.",
                                "Alteración de ecosistemas acuáticos y terrestres.",
                                "Modificación del caudal y la temperatura de los ríos aguas abajo.",
                                "Posibles desplazamientos de comunidades locales.",
                                "Emisiones de metano por la descomposición de biomasa sumergida."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="II. Generación mediante Fuentes Térmicas" icon={Thermometer}>
                            <SectionHeader title="2.1 Principios de Operación" />
                            <Paragraph>Las centrales termoeléctricas generan electricidad a partir del calor. Este calor se produce generalmente mediante la quema de combustibles fósiles (carbón, gas natural, derivados del petróleo) o, en el caso de las centrales nucleares, mediante la fisión del uranio. El calor obtenido se utiliza para calentar agua en una caldera, produciendo vapor a alta presión y temperatura. Este vapor se expande en una turbina de vapor, haciéndola girar. Al igual que en las demás centrales, el eje de la turbina está acoplado a un generador eléctrico.</Paragraph>

                            <SectionHeader title="2.2 Tipos Principales" />
                            <List items={[
                                "Centrales a Carbón: Históricamente muy utilizadas por su bajo costo, pero altamente contaminantes.",
                                "Centrales a Gas Natural (Ciclo Combinado): Utilizan turbinas de gas y de vapor conjuntamente, alcanzando altas eficiencias y menores emisiones que el carbón.",
                                "Centrales a Petróleo: Su uso ha disminuido por los altos costos y el impacto ambiental, reservándose a menudo como respaldo.",
                                "Centrales Nucleares: Generan enormes cantidades de energía base sin emitir CO2, pero con el desafío de la gestión de residuos radiactivos."
                            ]} />

                            <SectionHeader title="2.3 Impacto Ambiental" />
                            <Paragraph>Las centrales térmicas convencionales (fósiles) son los principales contribuyentes al impacto ambiental en el sector eléctrico:</Paragraph>
                            <List items={[
                                "Emisiones de Gases de Efecto Invernadero (GEI): Principalmente CO2, causante del cambio climático global.",
                                "Contaminación Atmosférica: Emisión de óxidos de nitrógeno (NOx), óxidos de azufre (SOx) y material particulado, afectando la calidad del aire.",
                                "Uso y Contaminación del Agua: Requieren grandes volúmenes de agua para refrigeración, y el vertido termal puede afectar ecosistemas acuáticos locales.",
                                "Generación de Residuos Sólidos: Como cenizas volantes y de fondo en el caso del carbón, o el complejo manejo de los residuos nucleares."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="III. Generación mediante Energías Alternativas" icon={Zap}>
                            <SectionHeader title="3.1 Energía Solar (Fotovoltaica y Térmica)" />
                            <Paragraph>La energía solar se aprovecha principalmente de dos formas: mediante paneles fotovoltaicos (que convierten la luz solar directamente en electricidad mediante semiconductores) y mediante concentración solar térmica (que concentra el calor del sol para producir vapor y accionar una turbina).</Paragraph>
                            <Paragraph>Son tecnologías en rápida expansión, con cero emisiones operativas, aunque su generación es intermitente (depende de la luz solar) y requieren gran superficie para instalaciones a gran escala. El impacto ambiental se centra en la minería para la fabricación de paneles y su disposición al final de su vida útil.</Paragraph>

                            <SectionHeader title="3.2 Energía Eólica" />
                            <Paragraph>Utiliza la fuerza del viento para mover las aspas de aerogeneradores, conectados a un generador. Al igual que la solar, es limpia y renovable, pero intermitente. Requiere estudios de viento precisos para su ubicación (onshore u offshore). Los impactos ambientales incluyen el impacto visual paisajístico, el ruido acústico y los posibles daños a aves y murciélagos.</Paragraph>

                            <SectionHeader title="3.3 Otras Tecnologías Alternativas" />
                            <List items={[
                                "Geotérmica: Aprovecha el calor del interior de la corteza terrestre en zonas con actividad volcánica.",
                                "Biomasa: Quema de residuos orgánicos (silvícolas, agrícolas, urbanos) para generar calor y electricidad. Se considera neutra en carbono si se gestiona de forma sostenible.",
                                "Mareomotriz/Undimotriz: Aprovechamiento de las mareas y las olas del océano. Tecnologías emergentes con gran potencial pero altos costos y desafíos técnicos."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="IV. Consideraciones Económicas, Legales y Medioambientales" icon={Settings}>
                            <SectionHeader title="4.1 Marco Económico" />
                            <Paragraph>La elección de la matriz de generación de un país depende de sus recursos disponibles y del costo nivelado de la energía (LCOE) de cada tecnología. Históricamente, las térmicas y grandes hídricas dominaban por sus bajos costos variables o larga vida útil. Hoy en día, las energías solar y eólica han experimentado reducciones drásticas en sus costos, volviéndose competitivas incluso sin subsidios.</Paragraph>

                            <SectionHeader title="4.2 Marco Legal y Regulatorio" />
                            <Paragraph>El sector eléctrico es una industria altamente regulada en todo el mundo, dividiéndose generalmente en segmentos de Generación (competencia), Transmisión (monopolio natural) y Distribución. La legislación busca asegurar: la seguridad y continuidad del suministro a los consumidores, fomentar la libre competencia y establecer políticas de transición hacia matrices energéticas limpias y descarbonizadas, mediante cuotas de Energías Renovables No Convencionales (ERNC).</Paragraph>

                            <SectionHeader title="4.3 Integración e Impacto Social" />
                            <Paragraph>El desarrollo de grandes proyectos de generación, ya sean hidroeléctricos, parques eólicos o plantas solares extensas, siempre conlleva un componente de evaluación ambiental y social (Participación Ciudadana). La industria debe comprometerse con las normativas ambientales locales para mitigar, compensar o reparar los daños ecológicos, así como generar valor compartido con las comunidades aledañas.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">V. Conclusiones</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La generación eléctrica es el primer y vital eslabón para sostener nuestra civilización actual. Cada tecnología —ya sea hídrica, térmica o alternativa— presenta ventajas y desafíos únicos, por lo que una matriz energética robusta y segura requiere de una combinación estratégica de ellas. Al mismo tiempo, el impacto ambiental y las variables económicas y legales obligan a la industria a transitar hacia modelos más limpios y sustentables. Como técnicos e ingenieros en formación, comprender estos sistemas no solo permite operar y mantener redes eficientemente, sino que es el fundamento para participar activamente en la necesaria transición energética mundial.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Bibliografía Recomendada</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Sistemas de Energía Eléctrica</strong>
                                        <span className="text-slate-500 italic">Gómez Expósito, 2002</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Tecnología Energética y Medio Ambiente</strong>
                                        <span className="text-slate-500 italic">Varios Autores (Generación)</span>
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
                        {glossaryAE1.map((item, i) => (
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
                    <ArrowLeft size={16} /> Finalizar Sesión AE1
                </button>
            </div>

        </div>
    );
};

export default AE1View;
