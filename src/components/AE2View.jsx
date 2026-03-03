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
        // Líneas de Transmisión
        { term: "Línea de transmisión", def: "Infraestructura que transporta energía eléctrica desde las centrales de generación hasta los centros de consumo." },
        { term: "Monofásica", def: "Línea con un solo circuito de fase, usada en aplicaciones rurales o de baja potencia." },
        { term: "Trifásica", def: "Estándar en transmisión de grandes potencias, con tres fases desfasadas 120°." },
        { term: "Alta tensión / Extra alta tensión", def: "Clasificación según voltaje de operación; se usan para largas distancias y grandes volúmenes de energía." },
        { term: "Efecto corona", def: "Descarga eléctrica alrededor de conductores a alto voltaje, que genera pérdidas y ruido." },
        { term: "Servidumbre eléctrica", def: "Franja de terreno destinada al paso de líneas, que implica restricciones de uso y afecta vegetación y paisaje." },
        { term: "Salvapájaros", def: "Dispositivos visuales instalados en cables para reducir colisiones de aves." },
        { term: "Campos electromagnéticos (CEM)", def: "Radiación eléctrica y magnética generada por las líneas, objeto de regulación por posibles efectos en salud y equipos." },
        // Impacto Ambiental de Líneas de Transmisión
        { term: "Fragmentación de hábitat", def: "Alteración de corredores ecológicos por la apertura de franjas de servidumbre." },
        { term: "Compactación de suelos", def: "Daño físico causado por maquinaria pesada durante la construcción." },
        { term: "Impacto paisajístico", def: "Alteración visual del entorno por torres y cables." },
        { term: "Ruido por efecto corona", def: "Sonido generado en condiciones de alta humedad o contaminación." },
        { term: "Residuos de construcción", def: "Materiales sólidos, aceites y lubricantes que requieren gestión ambiental." },
        { term: "Participación ciudadana", def: "Proceso obligatorio de consulta y diálogo con comunidades afectadas." },
        // Sistema Interconectado
        { term: "Sistema interconectado", def: "Red eléctrica que conecta múltiples fuentes de generación con centros de consumo mediante transmisión y distribución coordinada." },
        { term: "Red mallada", def: "Configuración que permite múltiples rutas de energía, aumentando confiabilidad." },
        { term: "Centro de control", def: "Unidad que supervisa y despacha la operación de centrales y líneas en tiempo real." },
        { term: "Despacho eléctrico", def: "Proceso de asignar qué centrales entran en operación para equilibrar oferta y demanda." },
        { term: "Interoperabilidad internacional", def: "Capacidad de interconectar sistemas eléctricos de distintos países." },
        { term: "Blackout", def: "Apagón masivo por falla en el sistema interconectado." },
        { term: "Resiliencia", def: "Capacidad del sistema para recuperarse frente a contingencias (climáticas, técnicas o cibernéticas)." },
        // Sistemas de Transmisión Trifásica
        { term: "Sistema trifásico", def: "Transmisión con tres corrientes alternas desfasadas 120°, más eficiente que el monofásico." },
        { term: "Generador trifásico", def: "Alternador que produce energía en tres fases equilibradas." },
        { term: "Transformador trifásico", def: "Equipo que eleva o reduce tensión en sistemas de transmisión." },
        { term: "Potencia activa (P)", def: "Energía útil entregada, calculada como P = √3 · V · I · cos(φ)." },
        { term: "Potencia reactiva (Q)", def: "Energía asociada a campos eléctricos y magnéticos, no útil directamente." },
        { term: "SCADA", def: "Sistema de supervisión y control en tiempo real para redes eléctricas." },
        // Transformadores de Alto Voltaje
        { term: "Transformador", def: "Dispositivo que modifica niveles de tensión mediante inducción electromagnética." },
        { term: "Elevador", def: "Aumenta la tensión para transmisión eficiente a largas distancias." },
        { term: "Reductor", def: "Disminuye la tensión para distribución y consumo final." },
        { term: "Núcleo magnético", def: "Parte central de acero silicio que concentra el flujo magnético." },
        { term: "Aceite dieléctrico", def: "Líquido aislante y refrigerante usado en transformadores." },
        { term: "Relé Buchholz", def: "Dispositivo de protección que detecta gases por fallas internas." },
        { term: "PCBs (bifenilos policlorados)", def: "Sustancias tóxicas usadas en transformadores antiguos, hoy prohibidas." },
        { term: "Transformador seco", def: "Tecnología moderna que utiliza aislamiento sólido, evitando aceites contaminantes." },
        // Conceptos Normativos y Técnicos Transversales
        { term: "Normas Técnicas del Sector Electricidad (SEC)", def: "Regulaciones chilenas que establecen requisitos de seguridad, eficiencia y protección ambiental." },
        { term: "Evaluación de Impacto Ambiental (EIA)", def: "Estudio obligatorio para proyectos eléctricos que analiza efectos sobre entorno natural y social." },
        { term: "Compensación ambiental", def: "Medidas para restaurar o equilibrar impactos inevitables de proyectos eléctricos." },
        { term: "Smart grid (red inteligente)", def: "Sistema eléctrico digitalizado que integra sensores, automatización y gestión eficiente de energía." }
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

                        <ExpansionTile title="III. Transformadores de Alto Voltaje" icon={Power} defaultOpen={false}>
                            <Paragraph>En el contexto global actual, la demanda de energía eléctrica continúa incrementándose debido al crecimiento poblacional, la urbanización y el desarrollo tecnológico. La energía eléctrica no solo es esencial para los procesos industriales y la vida cotidiana, sino que también es fundamental para el desarrollo sostenible. En este sistema, los transformadores de alto voltaje adquieren un papel trascendental, ya que facilitan la transmisión eficiente de la electricidad a largas distancias y con mínimas pérdidas energéticas. Entender su funcionamiento, tipos y aplicación es crucial para todos aquellos que deseen profundizar en el conocimiento del sector eléctrico, considerando las normativas técnicas, los aspectos medioambientales y económicos, y el marco legal que regula su utilización y operación.</Paragraph>

                            <SubExpansionTile title="1. Definición y Fundamentos">
                                <SectionHeader title="1.1 Definición de Transformador" />
                                <Paragraph>Un transformador es un dispositivo eléctrico estático que permite transferir energía eléctrica de un circuito a otro mediante inducción electromagnética, modificando los niveles de tensión e intensidad. Existen transformadores para diversas aplicaciones, pero en el sistema de transmisión eléctrica, los transformadores de alto voltaje son fundamentales para elevar o reducir la tensión, permitiendo así la transmisión eficiente de grandes cantidades de energía eléctrica por largas distancias (Roldán Viloria, 2008).</Paragraph>

                                <SectionHeader title="1.2 Fundamentos Operativos" />
                                <Paragraph>De manera general, un transformador de alto voltaje opera bajo los principios de la Ley de Faraday de la inducción electromagnética. Este dispositivo consta de dos bobinados, denominados primario y secundario, enrollados alrededor de un núcleo ferromagnético común. Cuando se aplica una tensión alterna al bobinado primario, se genera un flujo magnético variable en el núcleo, el cual induce una fuerza electromotriz (f.e.m.) en el bobinado secundario. Según el número de espiras de cada bobinado, la relación de transformación puede incrementar o disminuir el voltaje aplicado.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="2. Importancia y Estructura Básica">
                                <SectionHeader title="2.1 Importancia en los Sistemas de Transmisión" />
                                <Paragraph>Una vez generada la energía eléctrica en las centrales generadoras, esta debe transportarse a los centros de consumo, que suelen estar alejados de los puntos de generación. La transmisión de energía eléctrica se enfrenta a un gran desafío: las pérdidas por efecto Joule, que aumentan con la corriente. Para reducir estas pérdidas, la energía se transporta a alta tensión y baja corriente, lo cual es posible gracias a los transformadores de alto voltaje. De ahí su importancia en la arquitectura de cualquier sistema interconectado de energía eléctrica (Roldán Viloria, 2008).</Paragraph>

                                <SectionHeader title="2.2 Estructura Básica" />
                                <Paragraph>Los transformadores de alto voltaje poseen una estructura que los hace robustos y seguros para operar en condiciones críticas. Sus principales componentes son:</Paragraph>
                                <List items={[
                                    "Núcleo magnético: Generalmente fabricado con láminas de acero silicio que reducen las pérdidas magnéticas y mejoran la eficiencia.",
                                    "Bobinados: Constituidos por conductores de cobre o aluminio, correctamente aislados, que forman el devanado primario y secundario.",
                                    "Aislamiento: Materiales como papel impregnado en aceite mineral, aceites dieléctricos o compuestos líquidos sintéticos, destinados a soportar altas tensiones entre bobinados y entre los bobinados y la carcasa metálica del transformador.",
                                    "Cubierta y tanque: Generalmente fabricado con acero, su función principal es proteger los componentes internos y contener el aceite, además de proveer conexión a tierra.",
                                    "Radiadores: Dispositivos que ayudan a disipar el calor generado durante el funcionamiento.",
                                    "Accesorios de protección: Incluyen válvulas de alivio de presión, relés Buchholz, termómetros, y otros sistemas de monitoreo."
                                ]} />
                            </SubExpansionTile>

                            <SubExpansionTile title="3. Principios de Funcionamiento y Tipos">
                                <SectionHeader title="3.1 Principios de Funcionamiento" />
                                <Paragraph>El funcionamiento de los transformadores de alto voltaje se basa en la transferencia de energía sin contacto eléctrico directo entre los circuitos, utilizando el acoplamiento magnético a través del núcleo. La relación de transformación se define como la relación entre el número de espiras del devanado secundario respecto al primario. Así, la tensión y la corriente se relacionan inversamente en proporción a la relación de vueltas.</Paragraph>
                                <Paragraph>Matemáticamente, la relación de transformación se expresa como:</Paragraph>
                                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl text-center font-mono my-4 border border-slate-200 dark:border-slate-700">
                                    Vs / Vp = Ns / Np
                                </div>
                                <Paragraph>Donde Vs es Tensión secundaria, Vp Tensión primaria, Ns espiras secundarias y Np espiras primarias. Asimismo, la potencia transferida es, idealmente, la misma en ambos lados, considerando que en transformadores ideales las pérdidas internas son despreciables (Pp = Ps).</Paragraph>
                                <Paragraph>En la práctica, existen pérdidas en los transformadores, tales como las pérdidas en el núcleo (por histéresis y corrientes parásitas) y las pérdidas en los devanados (por efecto Joule), que se tienen en cuenta en el diseño y operación de estas máquinas (Roldán Viloria, 2008).</Paragraph>

                                <SectionHeader title="3.2 Tipos de Transformadores" />
                                <Paragraph>Los transformadores de alto voltaje pueden clasificarse de acuerdo a diversas características, tales como su función, nivel de tensión, y tipo de enfriamiento. Entre los más importantes se destacan:</Paragraph>
                                <List items={[
                                    "Transformadores elevadores y reductores: Los elevadores aumentan el nivel de tensión proveniente de la central generadora, mientras que los reductores disminuyen la tensión a niveles aptos para la distribución al usuario final.",
                                    "Transformadores de potencia: Son utilizados en las subestaciones principales del sistema de transmisión, manejando potencias que pueden superar los 100 MVA y tensiones de varios cientos de kilovoltios.",
                                    "Transformadores de distribución: Reducen la alta tensión a niveles apropiados para su distribución en redes secundarias, generalmente por debajo de 35 kV.",
                                    "Transformadores de medida o instrumentación: Diseñados para reducir los altos valores de tensión y corriente a rangos manejables y seguros para equipos de medición y protección.",
                                    "Transformadores de aislamiento: Utilizados para separar eléctricamente dos circuitos, garantizando la seguridad y protegiendo los equipos sensibles."
                                ]} />
                            </SubExpansionTile>

                            <SubExpansionTile title="4. Aplicaciones, Normativa y Aspectos Económicos">
                                <SectionHeader title="4.1 Aplicaciones y Uso en el Sistema Interconectado" />
                                <Paragraph>En sistemas interconectados, los transformadores de alto voltaje juegan un rol fundamental. Por ejemplo, en el Sistema Interconectado Nacional de Chile y en los grandes sistemas eléctricos globales, los transformadores de potencia son indispensables tanto en las subestaciones de generación como en las subestaciones de transmisión y distribución. Esto permite regular los niveles de tensión según las necesidades de cada tramo de la red.</Paragraph>
                                <Paragraph>La flexibilidad que ofrecen los transformadores posibilita que diferentes sistemas eléctricos, incluso con distintos valores de tensión, frecuencia y topología, puedan interconectarse, optimizando así el aprovechamiento de los recursos energéticos. Esto permite una mayor seguridad, estabilidad del sistema y redundancia en el suministro eléctrico.</Paragraph>

                                <SectionHeader title="4.2 Normativa Técnica, Estándares de Seguridad y Marco Legal" />
                                <Paragraph>El diseño, fabricación, instalación y operación de transformadores de alto voltaje está regulado por estrictas normas técnicas internacionales (IEC, IEEE) y nacionales. En Chile, la Superintendencia de Electricidad y Combustibles (SEC) es el organismo encargado de emitir las Normas Técnicas del Sector Electricidad, las cuales establecen los requisitos mínimos de calidad, seguridad y eficiencia.</Paragraph>
                                <Paragraph>Algunos de los requerimientos fundamentales incluyen:</Paragraph>
                                <List items={[
                                    "Resistencia al cortocircuito y niveles de aislamiento.",
                                    "Compatibilidad electromagnética y control de pérdidas energéticas.",
                                    "Protección contra sobrecalentamiento, incendios y explosiones.",
                                    "Sistemas de monitoreo y protección de fallas."
                                ]} />

                                <SectionHeader title="4.3 Aspectos Económicos y Gestión Empresarial" />
                                <Paragraph>La adquisición e instalación de transformadores de alto voltaje representa una inversión significativa. Es fundamental considerar no solo el costo inicial, sino también los costos de operación, mantenimiento, eficiencia energética y disposición final al término de su vida útil. Los criterios económicos se entrelazan con los criterios técnicos, legales y medioambientales, dado que la eficiencia reduce las pérdidas operacionales, y la adecuada gestión ambiental minimiza potenciales pasivos y litigios regulatorios.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="5. Impacto Ambiental, Mantenimiento e Innovaciones">
                                <SectionHeader title="5.1 Impacto Ambiental" />
                                <Paragraph>Si bien los transformadores son esenciales, también presentan impactos ambientales (Roldán Viloria, 2008). Los principales riesgos asociados incluyen:</Paragraph>
                                <List items={[
                                    "Fugas de aceites dieléctricos: Los derrames de aceite mineral pueden contaminar suelos y cursos de agua.",
                                    "PCBs (Bifenilos Policlorados): Transformadores antiguos pueden emplear estos compuestos altamente tóxicos que requieren estricto control y eliminación.",
                                    "Ruido y EMF: Generación de ruido significativo durante la operación y campos electromagnéticos que deben estar regulados.",
                                    "Impacto visual y ocupación del espacio: Las subestaciones modifican el paisaje y ocupan extensas áreas."
                                ]} />
                                <Paragraph>Para mitigar estos impactos se adoptan tecnologías limpias y mejores prácticas medioambientales, conforme a las recomendaciones de la SEC y directrices internacionales.</Paragraph>

                                <SectionHeader title="5.2 Mantenimiento y Gestión" />
                                <Paragraph>El mantenimiento preventivo y correctivo busca reducir fallas inesperadas, prolongar la vida útil y asegurar la continuidad del servicio. Entre las tareas rutinarias destacan:</Paragraph>
                                <List items={[
                                    "Monitoreo del estado del aceite (gases disueltos, humedad, acidez).",
                                    "Inspección de aislamiento y limpieza de sistemas de enfriamiento.",
                                    "Revisión de sistemas de protección (relés Buchholz, válvulas) y medición de parámetros eléctricos."
                                ]} />

                                <SectionHeader title="5.3 Innovaciones y Retos Actuales" />
                                <Paragraph>El avance tecnológico permite desarrollar transformadores más eficientes y ecológicos. Las principales tendencias incluyen:</Paragraph>
                                <List items={[
                                    "Aislamiento ecológico: Aceites dieléctricos biodegradables o sintéticos.",
                                    "Transformadores secos: Uso de aislamiento sólido, eliminando aceites.",
                                    "Optimización magnética y sistemas inteligentes: Reducción de pérdidas y monitoreo continuo.",
                                    "Diseños compactos: Nuevos materiales para equipos más ligeros y pequeños."
                                ]} />
                            </SubExpansionTile>
                        </ExpansionTile>

                        <ExpansionTile title="IV. Líneas de Transmisión" icon={Wrench} defaultOpen={false}>
                            <Paragraph>Las líneas de transmisión eléctrica representan uno de los elementos fundamentales en la industria eléctrica, cumpliendo un rol clave en el transporte de energía desde los centros de generación hasta los puntos de consumo final, ya sean estos grandes centros urbanos, industrias, o pequeñas comunidades alejadas. El correcto diseño, operación y mantenimiento de estas infraestructuras garantiza la continuidad y confiabilidad del suministro eléctrico a escala global. El estudio de las líneas de transmisión abarca diversos aspectos técnicos, reglamentarios, económicos y ambientales, configurando un espacio de conocimiento crítico para los futuros profesionales de la industria eléctrica.</Paragraph>

                            <SubExpansionTile title="1. Conceptos y Tipos Fundamentales">
                                <SectionHeader title="1.1 Conceptos Fundamentales" />
                                <Paragraph>De acuerdo con Roldán Viloria, José (2008), las líneas de transmisión eléctrica constituyen canales artificiales creados para transportar energía eléctrica mediante conductores a altas tensiones. Este sistema permite transferir energía de un sitio a otro minimizando las pérdidas de energía que se producirían si se utilizaran tensiones bajas.</Paragraph>
                                <Paragraph>Por normativa, según las Normas Técnicas del Sector Electricidad (SEC), una línea de transmisión se define como la extensión de cableado aéreo o subterráneo, junto con sus elementos auxiliares, que conecta una subestación de generación con subestaciones de distribución o consumo, operando a niveles de tensión estandarizados dependiendo de la topología y necesidades del sistema.</Paragraph>

                                <SectionHeader title="1.2 Tipos de Líneas de Transmisión" />
                                <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">Según número de fases</h5>
                                <List items={[
                                    "Líneas Monofásicas: Utilizadas principalmente en aplicaciones rurales o de baja potencia. Constan de dos conductores: uno activo y otro de retorno o neutro.",
                                    "Líneas Trifásicas: Son el estándar en la transmisión y distribución de grandes cantidades de energía. Con tres conductores activos (y ocasionalmente uno neutro), permiten el transporte eficiente y balanceado de energía."
                                ]} />

                                <h5 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">Según Nivel de Tensión</h5>
                                <List items={[
                                    "Baja tensión: menos de 1 kV, típicamente utilizado en distribución a nivel local.",
                                    "Media tensión: entre 1 kV y 69 kV, utilizada en redes urbanas e interurbanas de distribución primaria.",
                                    "Alta tensión: entre 69 kV y 230 kV, empleada para transportar grandes potencias a distancias medias.",
                                    "Extra alta y ultra alta tensión: más de 230 kV, esenciales para largas distancias y transmisión masiva a nivel regional."
                                ]} />

                                <h5 className="font-bold text-slate-900 dark:text-white mt-4 mb-2">Líneas Aéreas y Subterráneas</h5>
                                <List items={[
                                    "Líneas aéreas: Soportadas por estructuras (postes o torres), predominan por menor costo en comparación con las subterráneas para largas distancias. Están expuestas a condiciones ambientales.",
                                    "Líneas subterráneas: Más costosas, pero preferidas en zonas urbanas densas o donde hay restricciones medioambientales o estéticas. Menos vulnerables a daños meteorológicos."
                                ]} />
                            </SubExpansionTile>

                            <SubExpansionTile title="2. Estructura y Parámetros Eléctricos">
                                <SectionHeader title="2.1 Componentes de una Línea de Transmisión" />
                                <Paragraph>El diseño y construcción de las líneas de transmisión requieren una meticulosa selección y dimensionamiento de varios componentes:</Paragraph>
                                <List items={[
                                    "Conductores: Generalmente de aluminio con alma de acero (ACSR) o de cobre. Deben resistir elevadas corrientes y condiciones climáticas, y minimizar pérdidas por efecto Joule y efecto corona.",
                                    "Aislamiento: Proporcionado por aisladores de vidrio, porcelana o polímeros compuestos, que impiden el paso accidental de corriente eléctrica hacia tierra o a las estructuras de soporte.",
                                    "Estructuras de soporte: Usualmente torres metálicas, postes de hormigón o madera. Deben soportar el peso y la tensión de los conductores.",
                                    "Elementos de protección: Guardacables o cables de guarda, apartarrayos y sistemas de conexión a tierra. Protegen la integridad de la línea frente a descargas eléctricas."
                                ]} />

                                <SectionHeader title="2.2 Parámetros Eléctricos" />
                                <Paragraph>Roldán Viloria (2008) explica que las líneas de transmisión pueden ser modeladas eléctricamente mediante cuatro parámetros principales:</Paragraph>
                                <List items={[
                                    "Resistencia (R): Relacionada con la naturaleza de los conductores y su temperatura, determina la pérdida de energía en forma de calor.",
                                    "Inductancia (L): Surge por el campo magnético que se genera alrededor de los conductores al circular corriente, influye en la transferencia de energía reactiva.",
                                    "Capacitancia (C): Resulta de la diferencia de potencial entre conductores y entre estos y tierra, relevante en líneas de larga distancia.",
                                    "Conductancia (G): Representa las pérdidas por fugas a través del material dieléctrico, normalmente despreciable en líneas aéreas."
                                ]} />
                                <Paragraph>Las combinaciones de estos elementos definen el fenómeno de línea corta, media o larga, que afecta los métodos de cálculo de pérdidas y caídas de tensión.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="3. Pérdidas y Operación">
                                <SectionHeader title="3.1 Pérdidas en Líneas de Transmisión" />
                                <Paragraph>Durante la transmisión eléctrica desde los centros generadores hasta los puntos de consumo, existe una inevitable pérdida de energía, principalmente por:</Paragraph>
                                <List items={[
                                    "Pérdidas por efecto Joule: Originadas por la resistencia de los conductores.",
                                    "Pérdidas por efecto corona: Descargas eléctricas alrededor de los conductores a alto voltaje, acompañadas de ionización del aire.",
                                    "Pérdidas dieléctricas: En líneas subterráneas, por fugas de corriente a través del material aislante."
                                ]} />
                                <Paragraph>El nivel de pérdidas depende de la tensión de operación, la distancia y la naturaleza de los materiales empleados. Elevar la tensión permite transferir mayor potencia minimizando estas pérdidas.</Paragraph>

                                <SectionHeader title="3.2 Dimensión y Selección" />
                                <Paragraph>El correcto dimensionamiento de una línea requiere estudios de carga anticipada, topografía, y regulaciones. Las Normas Técnicas del Sector Electricidad (SEC) establecen las condiciones de seguridad como la separación de fases, distancias al suelo y selección de aisladores.</Paragraph>

                                <SectionHeader title="3.3 Topologías en Sistemas Interconectados" />
                                <Paragraph>Las tendencias apuntan a redes malladas en lugar de radiales, permitiendo respaldar fallas. Las topologías principales son:</Paragraph>
                                <List items={[
                                    "Radial: Una subestación principal alimenta cargas, muy vulnerable a cortes.",
                                    "Anillo: Cargas en circuito cerrado, mejora la continuidad.",
                                    "Malla: Múltiples nodos interconectados (como una red neuronal), máxima confiabilidad, estándar en transmisión."
                                ]} />
                            </SubExpansionTile>

                            <SubExpansionTile title="4. Medio Ambiente y Futuro">
                                <SectionHeader title="4.1 Impacto Ambiental y Mitigación" />
                                <Paragraph>Las líneas de transmisión requieren estudios de impacto debido a sus efectos:</Paragraph>
                                <List items={[
                                    "Fragmentación de hábitats y ocupación territorial (visual y suelo).",
                                    "Riesgos de colisión de avifauna.",
                                    "Campos electromagnéticos (regulados estrictamente por la SEC) y ruido audible (efecto corona)."
                                ]} />
                                <Paragraph>Las normativas exigen mitigaciones como el uso de líneas subterráneas en zonas sensibles, señalización de conductores para aves y revegetación de servidumbres de paso.</Paragraph>

                                <SectionHeader title="4.2 Tendencias Futuras e Innovación" />
                                <List items={[
                                    "Redes inteligentes (Smart grids): Sensores IoT y automatización para gestión en tiempo real.",
                                    "Nuevos conductores y HVDC: Expansión de la corriente continua de alta tensión para conectar continentes, limitando las pérdidas y aumentando la resiliencia climática.",
                                    "Drones y análisis predictivo: Mantenimiento mediante visión artificial para anticiparse a incendios y cortes."
                                ]} />
                            </SubExpansionTile>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones Generales</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Los sistemas de transmisión eléctrica trifásica, las redes interconectadas, los transformadores de alto voltaje y el entramado mismo de líneas de transmisión constituyen la piedra angular de la infraestructura energética mundial. Permiten el aprovechamiento racional de los recursos, facilitando el transporte y entrega confiable de electricidad a millones de familias, industrias y comercios. Su desarrollo busca maximizar la eficiencia y diversificar la matriz energética garantizando una transición justa y segura.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La interconexión de sistemas responde tanto a la necesidad de seguridad del suministro como a la optimización económica y de operación. Solo a través del modelado técnico, el diseño de infraestructuras clave soportado en materiales avanzados y el cumplimiento riguroso de normativas (como las directrices de la SEC en Chile e IEC a nivel internacional), estos sistemas podrán hacer frente a los enormes desafíos de integración renovable, digitalización y protección ambiental en las décadas venideras.
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
