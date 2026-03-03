import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, Shield, Book,
    CheckCircle2, AlertTriangle, Zap, Activity, TrendingUp, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, ShieldCheck, Flame, BookOpen, ChevronRight
} from 'lucide-react';

const SubExpansionTile = ({ title, subtitle, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`mb-4 rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white dark:bg-slate-900 border-[#002855]/20 dark:border-blue-500/30 shadow-md' : 'bg-slate-50/50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-800 hover:border-[#002855]/30 dark:hover:border-slate-600'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
            >
                <div>
                    <h5 className={`font-bold text-[15px] transition-colors ${isOpen ? 'text-[#002855] dark:text-blue-400' : 'text-slate-800 dark:text-slate-300'}`}>
                        {title}
                    </h5>
                    {subtitle && (
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{subtitle}</p>
                    )}
                </div>
                <div className={`p-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#002855]/10 dark:bg-blue-500/20 text-[#002855] dark:text-blue-400 rotate-90' : 'text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                    <ChevronRight size={18} />
                </div>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
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

const AE2View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE2 = [
        { term: "Transmisión Eléctrica", def: "Etapa del suministro eléctrico que transporta la energía a largas distancias desde las plantas generadoras hasta las subestaciones o puntos de consumo masivo, utilizando altos niveles de tensión." },
        { term: "Alta Tensión (AT)", def: "Niveles de voltaje elevados (generalmente entre 66 kV y 220 kV en Chile) utilizados para minimizar las pérdidas de energía (efecto Joule) durante el transporte a largas distancias." },
        { term: "Extra Alta Tensión (EAT)", def: "Voltajes superiores a 220 kV (típicamente 500 kV) empleados en líneas troncales para la interconexión de grandes regiones." },
        { term: "Subestación Eléctrica", def: "Instalación destinada a modificar y establecer los niveles de tensión de una infraestructura eléctrica, facilitando la transmisión y distribución." },
        { term: "Transformador", def: "Máquina eléctrica estática que transfiere energía eléctrica de un circuito a otro, elevando o reduciendo el voltaje manteniendo la frecuencia." },
        { term: "Sistema Interconectado Nacional (SEN)", def: "Infraestructura principal en Chile que concentra casi la totalidad de la generación y transmisión, extendiéndose desde Arica hasta Chiloé." },
        { term: "Centro de Despacho Económico de Carga (CEN)", def: "Entidad independiente (Coordinador Eléctrico Nacional en Chile) encargada de coordinar la operación segura y al mínimo costo del sistema eléctrico." },
        { term: "Pérdidas de Transmisión", def: "Porcentaje de energía que se disipa en forma de calor en los conductores durante su transporte, debido a la resistencia natural del material." }
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
                        <span className="text-sm font-black dark:text-white uppercase">AE2: Instalación y Mantenimiento</span>
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
                                Transmisión y <br /> <span className="text-[#D1202F]">Sistemas Interconectados</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La transmisión eléctrica es un componente fundamental dentro de la industria eléctrica global, debido a su papel en el transporte eficiente de energía desde los puntos de generación hasta las áreas de consumo. La utilización de sistemas de transmisión eléctrica trifásica es predominante y esencial para satisfacer los altos requerimientos de potencia y eficiencia de los sistemas eléctricos modernos. A su vez, estas infraestructuras se agrupan conformando un Sistema Interconectado, una red integrada que garantiza la gestión coordinada, estabilidad, seguridad y calidad del suministro a gran escala. El presente texto explora ambos conceptos clave basados en la literatura técnica ("Fuentes de energía", Roldán Viloria, 2008) y las Normas Técnicas Sector Electricidad (SEC).</Paragraph>
                        </div>

                        <ExpansionTile title="I. Sistemas de Transmisión Eléctrica Trifásica" icon={Zap} defaultOpen={false}>
                            <Paragraph>La caracterización de los sistemas de transmisión eléctrica trifásica, sus principios operativos, ventajas e impacto, los cuales constituyen la base del transporte de energía desde las centrales hasta los centros de consumo.</Paragraph>

                            <SubExpansionTile title="1. Fundamentos y Principios Operativos">
                                <SectionHeader title="1.1 Fundamentos de la Transmisión Eléctrica Trifásica" />
                                <Paragraph>El sistema de transmisión eléctrica trifásica nace de la necesidad de trasladar grandes cantidades de energía eléctrica a largas distancias con el menor nivel posible de pérdidas y con una eficiencia operativa máxima. El sistema trifásico, a diferencia del monofásico, se basa en la existencia de tres corrientes alternas generadas simultáneamente, desfasadas una de otra por 120 grados eléctricos. Esto permite que, en cualquier momento, la suma vectorial de las corrientes y tensiones proporcione una capacidad uniforme para la transmisión y utilización de la energía.</Paragraph>
                                <Paragraph>Según Roldán Viloria (2008), el desarrollo de los sistemas trifásicos responde a la necesidad de lograr dos objetivos principales: minimizar las pérdidas de energía (pérdidas Joule en líneas de transmisión) y optimizar la infraestructura, logrando transportar la misma o mayor potencia con menos material conductor y menor sección transversal que en sistemas monofásicos. Este principio ha sido adoptado globalmente, constituyendo la base del transporte de energía eléctrica de alta y media tensión.</Paragraph>

                                <SectionHeader title="1.2 Principios Operativos de la Trifásica" />
                                <Paragraph>En un sistema trifásico típico, tres conductores portan corrientes alternas de igual amplitud pero desfasadas en el tiempo. Esto permite el desarrollo de máquinas eléctricas, como transformadores y motores, mucho más eficientes y de menor tamaño para una misma potencia que sus contrapartes monofásicas. La transmisión trifásica se realiza generalmente en dos modalidades:</Paragraph>
                                <List items={[
                                    "Con neutro: Permitiendo la obtención de dos tensiones diferentes (fase-neutro y fase-fase).",
                                    "Sin neutro: Utilizada en redes de alta tensión para reducir corrientes de fuga y necesidades de aislamiento."
                                ]} />
                                <Paragraph>En la transmisión de energía eléctrica a larga distancia, se usan predominantemente configuraciones trifásicas sin neutro, debido al mejor rendimiento frente a pérdidas y a la reducción del material necesario.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="2. Configuración y Elementos del Sistema">
                                <SectionHeader title="2.1 Configuración Típica de un Sistema de Transmisión Trifásico" />
                                <Paragraph>Un sistema de transmisión eléctrico trifásico estándar incluye:</Paragraph>
                                <List items={[
                                    "Plantas generadoras: donde se produce energía en forma trifásica.",
                                    "Transformadores elevadores: situados en la subestación junto a la central generadora.",
                                    "Líneas de alta tensión: formadas generalmente por tres cables conductores, soportados en torres o postes separados por igual distancia.",
                                    "Subestaciones de rebaje: con transformadores reductores, que disminuyen la tensión para la distribución regional y urbana.",
                                    "Líneas de distribución: que pueden mantener el sistema trifásico o pasar a un suministro monofásico para usuarios residenciales."
                                ]} />
                                <Paragraph>Esta estructura modular permite la integración, el mantenimiento y la regulación del flujo eléctrico de forma eficiente y segura.</Paragraph>

                                <SectionHeader title="2.2 Principales Elementos de los Sistemas de Transmisión Trifásica" />
                                <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">Generadores Trifásicos</h5>
                                <Paragraph>La generación de energía eléctrica a gran escala se realiza mediante alternadores trifásicos, que convierten la energía mecánica —producida en turbinas hidráulicas, térmicas, nucleares o eólicas— en energía eléctrica de corriente alterna trifásica. Según Roldán Viloria (2008), la estructura de estos generadores se basa en la obtención de tensiones sinusoidales perfectamente desfasadas entre sí, lo cual resulta en un sistema inherentemente balanceado y eficiente.</Paragraph>

                                <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">Transformadores de Potencia</h5>
                                <Paragraph>Los transformadores trifásicos son fundamentales para conectar diferentes niveles de tensión dentro de los sistemas eléctricos. Permiten elevar la tensión generada en la central (habitualmente entre 11 y 25 kV) hasta decenas o cientos de kilovoltios (132, 220, 500 kV o más), lo que reduce la corriente y, por ende, las pérdidas en las líneas de transmisión. La conformidad y el diseño de estos equipos están ampliamente regulados por normativas técnicas internacionales y locales, como las publicadas por la SEC en Chile.</Paragraph>

                                <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">Líneas de Transmisión de Alta Tensión</h5>
                                <Paragraph>Las líneas de transmisión trifásicas son la "columna vertebral" del sistema eléctrico nacional e internacional. Estas líneas, construidas con conductores de aluminio reforzado con acero, aisladores, torres metálicas o postes de hormigón, están diseñadas para soportar condiciones adversas y transmitir grandes bloques de energía con un mínimo de pérdidas. La geometría tridimensional y la separación de fases son cuidadosamente determinadas para disminuir los efectos inductivos, capacitivos y el riesgo de cortocircuitos o descargas a tierra.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="3. Aspectos Técnicos y Beneficios">
                                <SectionHeader title="3.1 Aspectos Técnicos: Tensión, Corriente y Potencia en Trifásica" />
                                <Paragraph>En un sistema trifásico equilibrado, la potencia total entregada (activa, reactiva y aparente) puede ser expresada de manera sencilla. Asumiendo tensiones y corrientes de igual magnitud en cada fase:</Paragraph>
                                <List items={[
                                    "Potencia activa total: P = √3 × Vlínea × Ilínea × cos(φ)",
                                    "Potencia reactiva total: Q = √3 × Vlínea × Ilínea × sen(φ)",
                                    "Potencia aparente total: S = √3 × Vlínea × Ilínea"
                                ]} />
                                <Paragraph>Donde Vlínea es la tensión entre conductores de línea e Ilínea la corriente circulante por cada conductor. Esta relación evidencia la eficiencia del sistema, al maximizar el transporte de potencia activa y minimizar el costo en material conductor.</Paragraph>

                                <SectionHeader title="3.2 Ventajas y Desventajas de la Transmisión Trifásica" />
                                <Paragraph>Los sistemas de transmisión trifásica poseen notables ventajas sobre los monofásicos, especialmente en transmisión de energía a largas distancias y para grandes cargas. Entre sus principales ventajas se destacan:</Paragraph>
                                <List items={[
                                    "Uso más eficiente del conductor en relación a la potencia transmitida.",
                                    "Reducción de pérdidas energéticas para el mismo nivel de potencia transmitida.",
                                    "Capacidad de suministrar energía tanto a cargas monofásicas como trifásicas.",
                                    "Mayor facilidad en la generación de campos magnéticos rotatorios para motores y generadores eficientes.",
                                    "Mayor estabilidad en la transmisión y reducción de parpadeos o fluctuaciones en la tensión."
                                ]} />
                                <Paragraph>Sin embargo, también existen ciertos retos y desventajas:</Paragraph>
                                <List items={[
                                    "Sistemas más complejos: desde el punto de vista del diseño, construcción, operación y mantenimiento.",
                                    "Mayor coordinación: necesidad en la protección, control y sincronización de los equipos.",
                                    "Mayor costo inicial: de infraestructura y equipamiento especializado."
                                ]} />
                            </SubExpansionTile>

                            <SubExpansionTile title="4. Regulación, Control e Impacto Ambiental">
                                <SectionHeader title="4.1 Protección, Control y Regulación" />
                                <Paragraph>La protección y el control de los sistemas trifásicos requieren dispositivos automáticos como relés de protección, interruptores automáticos y sistemas de supervisión en tiempo real (SCADA). Esto se debe a la complejidad inherente de coordinar tres fases en ambientes de alta tensión y la criticidad de la continuidad del suministro eléctrico.</Paragraph>
                                <Paragraph>Las normativas técnicas internacionales y la regulación local, recogidas en documentos como las "Normas Técnicas Sector Electricidad" de la SEC, contemplan desde los niveles de aislamiento mínimos, distancias de seguridad y coordinación de protecciones hasta la gestión de fallas y maniobras operacionales.</Paragraph>

                                <SectionHeader title="4.2 Normativa y Regulación en Sistemas Trifásicos" />
                                <Paragraph>La operación segura, eficiente y sostenible de los sistemas de transmisión trifásica se fundamenta en diversas normativas. Estas regulan desde la construcción de las infraestructuras hasta la operación, mantenimiento y actualización tecnológica. La SEC en Chile, por ejemplo, establece mediante las "Normas Técnicas Sector Electricidad" pautas para:</Paragraph>
                                <List items={[
                                    "Criterios de diseño e instalación de líneas y subestaciones trifásicas.",
                                    "Requisitos para planes de mantenimiento preventivo y correctivo.",
                                    "Registros y reportes de incidentes y fallas.",
                                    "Gestión ambiental y social de proyectos eléctricos.",
                                    "Establecimiento de distancias mínimas a otras infraestructuras y áreas pobladas."
                                ]} />

                                <SectionHeader title="4.3 Impacto Ambiental" />
                                <Paragraph>Dada la extensión territorial de las líneas de transmisión trifásica, su impacto ambiental es un asunto prioritario. Según recoge Roldán Viloria (2008) y las "Normas Técnicas" de la SEC, los principales impactos están asociados a:</Paragraph>
                                <List items={[
                                    "Alteración de ecosistemas y suelos durante la construcción.",
                                    "Modificación del paisaje visual y riesgos para la fauna local.",
                                    "Generación de campos electromagnéticos y su posible repercusión en la salud pública.",
                                    "Emisión de ruido en subestaciones y paso de líneas por áreas habitadas."
                                ]} />
                                <Paragraph>Los marcos regulatorios establecen la obligación de realizar evaluaciones de impacto ambiental, implementar medidas de mitigación, seguimiento y compensación ambiental. Todo proyecto de transmisión trifásico debe prever adecuadas rutas de paso, minimizando zonas protegidas y promoviendo la participación de las comunidades afectadas.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="5. Gestión, Interconexión y Perspectivas Globales">
                                <SectionHeader title="5.1 Interconexión y Resiliencia de la Red" />
                                <Paragraph>Un aspecto fundamental en la transmisión eléctrica trifásica a nivel global es la interconexión de sistemas: la posibilidad de transferir energía entre diferentes regiones o países, optimizando recursos y mejorando la seguridad y la resiliencia ante contingencias. Los "sistemas interconectados" permiten, por ejemplo, compartir reservas de generación, coordinar mantenimientos y enfrentar emergencias en tiempo real, conceptos desarrollados exhaustivamente tanto por Roldán Viloria (2008) como por la normativa chilena.</Paragraph>

                                <SectionHeader title="5.2 Gestión y Optimización Contemporánea" />
                                <Paragraph>La gestión eficiente del sistema trifásico ha evolucionado gracias al desarrollo tecnológico, la digitalización y la utilización de sistemas de información geográfica, monitoreo remoto y análisis predictivo. La planificación integrada y la incorporación de tecnologías como líneas compactas, cables subterráneos y equipos de control de flujo de potencia han elevado el estándar de seguridad y eficiencia. En lo referente a la sostenibilidad, el impulso a redes inteligentes (smart grids), integración de energías renovables a gran escala y estrategias de pérdidas mínimas apuntan a sistemas trifásicos más resilientes y amigables con el medioambiente.</Paragraph>

                                <SectionHeader title="5.3 Aplicación Global de la Transmisión Trifásica" />
                                <Paragraph>La transmisión eléctrica trifásica ha sido adoptada a nivel global, normalizándose en la mayoría de los países para redes de transmisión y subtransmisión. El intercambio de energía rumbo a la transición energética, la descarbonización y la integración regional dependen en gran medida de la eficiencia y robustez de los sistemas trifásicos interconectados.</Paragraph>
                                <Paragraph>Países de Europa, América, Asia y Oceanía han estandarizado niveles de tensión y criterios de interconexión, permitiendo una cooperación energética sin precedentes en la historia. Las tendencias apuntan hacia la utilización de tensiones cada vez más elevadas (hasta 1100 kV en sistemas de corriente alterna y corriente continua) y el desarrollo de corredores transnacionales de transmisión de energía verde.</Paragraph>
                            </SubExpansionTile>
                        </ExpansionTile>

                        <ExpansionTile title="II. Sistema Interconectado" icon={Activity} defaultOpen={false}>
                            <Paragraph>La red eléctrica integrada que conecta las fuentes de generación con los centros de consumo, permitiendo el abastecimiento a gran escala de forma coordinada, estable y segura.</Paragraph>

                            <SubExpansionTile title="1. Definición y Funcionamiento">
                                <SectionHeader title="1.1 Definición del Sistema Interconectado" />
                                <Paragraph>El Sistema Interconectado se define como una red eléctrica integrada que conecta múltiples fuentes de generación con los centros de consumo, a través de líneas de transmisión y estaciones de transformación, permitiendo la gestión coordinada de la oferta y la demanda eléctrica en una amplia región geográfica (Roldán Viloria, 2008). Esta interconexión posibilita que la energía no dependa de una única central, sino que varias plantas, frecuentemente con diferentes tecnologías y fuentes primarias, trabajen en conjunto para garantizar el suministro.</Paragraph>
                                <Paragraph>Desde la perspectiva técnica, un sistema interconectado diferencia dos grandes componentes: el sistema de generación y el sistema de transmisión. El primero se compone de centrales eléctricas (hidroeléctricas, térmicas, nucleares, eólicas, solares, entre otras), mientras que el segundo está conformado por líneas de transmisión de alta tensión que transportan la energía hasta los sistemas de distribución y, finalmente, a los usuarios finales.</Paragraph>

                                <SectionHeader title="1.2 Funcionamiento General" />
                                <Paragraph>El principio fundamental bajo el cual opera un sistema interconectado es la coordinación y gestión centralizada de la generación y el consumo eléctrico, logrando mantener el equilibrio instantáneo entre ambos. Para lograr esto, el sistema incorpora centros de control o despacho, desde donde se monitorea en tiempo real el estado de la red, se ordena la entrada y salida de centrales, y se atienden contingencias para asegurar la calidad y continuidad del suministro (SEC).</Paragraph>
                                <Paragraph>En tal contexto, los sistemas interconectados suelen organizarse bajo una estructura jerárquica:</Paragraph>
                                <List items={[
                                    "Generación: Conjunto de plantas de energía (hidroeléctricas, térmicas, renovables).",
                                    "Transmisión: Red principal de líneas eléctricas de alta o extra alta tensión, y subestaciones de transformación.",
                                    "Distribución: Redes de media y baja tensión que entregan la energía a los consumidores finales.",
                                    "Centros de control: Unidades de supervisión y despacho que coordinan la operación de las distintas instalaciones."
                                ]} />
                                <Paragraph>La interconexión de sistemas eléctricos no solo ocurre dentro de un país, sino también, en muchas ocasiones, entre países vecinos con objeto de optimizar recursos, mejorar la seguridad del suministro y favorecer el intercambio comercial de energía.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="2. Estructura e Importancia">
                                <SectionHeader title="2.1 Estructura de un Sistema Interconectado" />
                                <Paragraph>De acuerdo a Roldán Viloria (2008), la estructura básica de un sistema interconectado debe cumplir con ciertas características esenciales:</Paragraph>
                                <List items={[
                                    "Red mallada: Permite múltiples rutas para el flujo de energía, incrementando la confiabilidad porque ante una falla en una parte, existen caminos alternativos.",
                                    "Transformadores de alto voltaje: Imprescindibles para adaptar los niveles de tensión y optimizar el transporte eléctrico a largas distancias, minimizando las pérdidas.",
                                    "Protecciones y sistemas de control: Para evitar sobrecargas, cuidar la integridad de los sistemas y asegurar una operación estable frente a variaciones de demanda o emergencias."
                                ]} />
                                <Paragraph>Un aspecto distintivo del sistema interconectado es su capacidad de balancear la generación y el consumo en tiempo real. Dado que la electricidad no se almacena en grandes cantidades económicamente viables, el sistema debe ajustarse constantemente para que la energía producida y la demanda coincidan en cada instante.</Paragraph>

                                <SectionHeader title="2.2 Importancia de los Sistemas Interconectados" />
                                <Paragraph>Los sistemas interconectados presentan múltiples ventajas tanto técnicas como económicas y medioambientales, según lo expuesto por Roldán Viloria (2008):</Paragraph>
                                <List items={[
                                    "Mejora de la confiabilidad: Si una central o línea falla, otras pueden suplir la energía faltante, evitando apagones generalizados.",
                                    "Optimización de recursos: La generación puede despacharse desde las plantas más eficientes, reduciendo costos globales de operación.",
                                    "Facilita la integración de energías renovables: Al sumar fuentes variables (como solar o eólica) en diferentes ubicaciones, se suavizan las fluctuaciones y se facilita su integración masiva.",
                                    "Permite el comercio de energía: Entre regiones o países, mejorando la seguridad energética.",
                                    "Impacto ambiental reducido: Al optimizar el uso de recursos y reducir la necesidad de redundancia de infraestructuras."
                                ]} />
                            </SubExpansionTile>

                            <SubExpansionTile title="3. Ejemplos Globales y Aspectos Regulatorios">
                                <SectionHeader title="3.1 Ejemplos Globales" />
                                <Paragraph>La maduración de los sistemas interconectados se observa a escala global. Países y continentes han desarrollado redes eléctricas extensas y complejas:</Paragraph>
                                <List items={[
                                    "Estados Unidos: Divide su sistema en tres grandes interconexiones: Occidental, Oriental y Texas. Cada una integrada por cientos de centrales y miles de kilómetros de líneas.",
                                    "Europa: A través de la Red Europea de Gestores de Redes de Transporte de Electricidad (ENTSO-E), coordina la operación eléctrica de la mayoría de los países europeos, permitiendo un mercado eléctrico transnacional.",
                                    "América Latina: El Sistema Interconectado Nacional (SIN) en varios países y los esfuerzos de integración regional como el SIEPAC (Sistema de Interconexión Eléctrica para los Países de América Central).",
                                    "Asia y África: Proyectos de interconexión buscan potenciar la colaboración y el desarrollo energético, en particular para facilitar el acceso en zonas remotas o con baja electrificación."
                                ]} />
                                <Paragraph>Estas experiencias internacionales muestran que la tendencia a la interconexión es clave para afrontar los desafíos de la modernización, transición energética y seguridad en el suministro eléctrico.</Paragraph>

                                <SectionHeader title="3.2 Aspectos Regulatorios y Normativos" />
                                <Paragraph>El éxito y seguridad de los sistemas interconectados depende, en gran medida, de una regulación clara y estricta. Según las Normas Técnicas Sector Electricidad (SEC), los siguientes puntos son esenciales:</Paragraph>
                                <List items={[
                                    "Estándares tecnológicos: Definición de criterios para líneas, transformadores, protecciones y sistemas de control.",
                                    "Procedimientos de operación: Normas que rigen el despacho de energía, la respuesta ante emergencias y la coordinación de mantenimientos.",
                                    "Gestión medioambiental: Evaluaciones de impacto, mitigación de riesgos y protección del entorno en la construcción y operación de infraestructuras.",
                                    "Competencia y acceso: Políticas que regulan el acceso a las redes, garantizando la libre competencia e inversiones eficientes.",
                                    "Interoperabilidad internacional: Acuerdos y normativas armonizadas para la operación de sistemas interconectados entre países."
                                ]} />
                                <Paragraph>Un marco regulatorio sólido permite un desarrollo sostenible, asegura condiciones justas para todos los actores del mercado y protege los intereses de los usuarios.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="4. Componentes Principales">
                                <SectionHeader title="4.1 Generación y Transmisión" />
                                <h5 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">Generación de Energía</h5>
                                <Paragraph>La generación se realiza en plantas de distintos tipos, las cuales aportan energía al sistema en función de su disponibilidad, costo y capacidad de respuesta. En sistemas interconectados modernos, se busca una matriz diversificada, incluyendo energías renovables y convencionales, para reducir dependencia y mejorar la resiliencia frente a eventos climáticos o contingencias técnicas.</Paragraph>

                                <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">Transmisión de Alta Tensión</h5>
                                <Paragraph>El transporte a grandes distancias requiere de elevados niveles de tensión, minimizando las pérdidas. Las redes de transmisión utilizan frecuentemente topologías malladas, y pueden integrar equipos de control avanzados —compensadores, reactores, etc.— para mantener la estabilidad del sistema.</Paragraph>

                                <SectionHeader title="4.2 Transformadores y Control" />
                                <h5 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">Transformadores de Alto Voltaje</h5>
                                <Paragraph>Situados a la salida de las plantas y en las subestaciones de transmisión, los transformadores elevan la tensión para el transporte y la reducen para la distribución. Son cruciales para adaptar la energía a los diferentes requerimientos de la red, permitiendo el correcto funcionamiento de los equipos y la seguridad del sistema.</Paragraph>

                                <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">Centros de Control</h5>
                                <Paragraph>Constituyen el núcleo operativo de la red interconectada. Procesan la información proveniente de cientos de puntos, coordinan el despacho de centrales, envían señales de control y gestionan emergencias o fallos, asegurando la estabilidad de la frecuencia y el equilibrio energético.</Paragraph>

                                <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">Sistemas de Protección y Control</h5>
                                <Paragraph>El diseño e implementación de protecciones (relés, interruptores automáticos) es imprescindible para prevenir grandes apagones (blackouts) y aislar rápidamente las secciones afectadas ante fallas, limitando el impacto y facilitando la recuperación operativa.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="5. Desafíos, Impacto y Perspectivas">
                                <SectionHeader title="5.1 Desafíos Técnicos y Soluciones" />
                                <List items={[
                                    "Integración de Energías Renovables: La inclusión masiva de energías variables (eólica, solar) plantea retos por su intermitencia. El sistema interconectado debe contar con mecanismos de almacenamiento, centrales de respaldo o estrategias de gestión de la demanda.",
                                    "Expansión y Mantenimiento de Infraestructuras: A medida que crece la demanda o se extiende la red, es necesario modernizar, reforzar y mantener las líneas y subestaciones.",
                                    "Resiliencia ante eventos extremos: Fenómenos meteorológicos, ataques cibernéticos o accidentes pueden desestabilizar el sistema. Contar con redes robustas y protocolos de emergencia es fundamental.",
                                    "Ciberseguridad: Es cada vez más vital implementar sistemas de control con altos estándares de ciberseguridad, evitando manipulaciones o sabotajes que puedan colapsar la red."
                                ]} />

                                <SectionHeader title="5.2 Impacto Medioambiental" />
                                <Paragraph>Aunque los sistemas interconectados optimizan el uso de recursos y pueden disminuir la cantidad de infraestructuras redundantes, la construcción de líneas de transmisión y subestaciones tiene un impacto significativo:</Paragraph>
                                <List items={[
                                    "Afectación de paisajes: Las torres y cables pueden alterar visualmente zonas naturales o pobladas.",
                                    "Fragmentación de hábitats: El trazado de líneas puede afectar ecosistemas, fauna y flora.",
                                    "Generación de campos electromagnéticos: Aunque los niveles suelen ser bajos, existe sensibilidad social sobre los efectos a largo plazo.",
                                    "Corrientes inducidas y ruido: Pueden afectar la calidad de vida de las comunidades cercanas."
                                ]} />
                                <Paragraph>Las legislaciones y normativas exigen realizar estudios de impacto ambiental antes del desarrollo de nuevos proyectos, e implementar medidas de mitigación como la selección de trazados que eviten zonas sensibles y el uso de tecnologías más amigables (como cables subterráneos en zonas urbanas).</Paragraph>

                                <SectionHeader title="5.3 Perspectivas Futuras" />
                                <Paragraph>La transición energética y el auge de las fuentes renovables plantean escenarios de rápida evolución para los sistemas interconectados. El reto en las próximas décadas será incorporar cantidades crecientes de generación distribuida, integrar la movilidad eléctrica, gestionar una demanda más flexible y aumentar la digitalización de todos los procesos.</Paragraph>
                                <Paragraph>Algunas tendencias globales recalcan:</Paragraph>
                                <List items={[
                                    "Desarrollo de super-redes: Interconexiones continentales que permitan el intercambio masivo de energía entre regiones distantes.",
                                    "Smart grids e inteligencia artificial: Automatización para gestionar eficientemente la complejidad creciente del sistema.",
                                    "Integración de almacenamiento: Baterías de gran escala, almacenamiento térmico e hidráulico para balancear la generación variable.",
                                    "Mayor atención a la sostenibilidad: Estrategias específicas para reducir la huella ecológica de las infraestructuras eléctricas."
                                ]} />
                            </SubExpansionTile>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones Generales</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Los sistemas de transmisión eléctrica trifásica y las redes interconectadas constituyen la piedra angular de la infraestructura energética mundial. Permiten el aprovechamiento racional de los recursos, facilitando el transporte y entrega confiable de electricidad a millones de familias, industrias y comercios. Su desarrollo busca maximizar la eficiencia y diversificar la matriz energética garantizando una transición justa y segura.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La interconexión de sistemas responde tanto a la necesidad de seguridad del suministro como a la optimización económica. Solo a través de la aplicación técnica, el diseño de infraestructuras de alta tensión y el cumplimiento riguroso de normativas (como las directrices de la SEC en Chile), estos sistemas podrán hacer frente a los enormes desafíos de integración renovable, digitalización y sostenibilidad en las décadas venideras.
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
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            )}

            {activeTab === 'glosario' && (
                <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        {glossaryAE2.map((item, i) => (
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
                    <ArrowLeft size={16} /> Finalizar Sesión AE2
                </button>
            </div>

        </div>
    );
};

export default AE2View;
