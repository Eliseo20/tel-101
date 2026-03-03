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

                        <ExpansionTile title="I. Generación Hidroeléctrica" icon={Power} defaultOpen={true}>
                            <SectionHeader title="Introducción" />
                            <Paragraph>La generación de energía eléctrica es uno de los principales motores del desarrollo económico y social de cualquier país. Dentro de las fuentes de generación, la energía hidroeléctrica ocupa un papel fundamental debido a su histórica participación, su elevada capacidad instalada a nivel global y su baja producción de gases de efecto invernadero durante la operación. Este texto académico pretende caracterizar en profundidad la generación hidroeléctrica, abordando sus principios de funcionamiento, tipos de centrales, proceso de generación, aspectos tecnológicos y el impacto ambiental correspondiente, siguiendo el marco conceptual y bibliográfico propuesto por Roldán Viloria, José (2008), así como las Normas Técnicas Sector Electricidad de la Superintendencia de Electricidad y Combustibles de Chile.</Paragraph>

                            {/* Espacio para Imagen/Video de Introducción */}
                            <div className="my-8 relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/s8z9LeTsCz0"
                                    title="Generación hidroeléctrica"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <SectionHeader title="1. Principios de la Generación Hidroeléctrica" />
                            <Paragraph>La generación hidroeléctrica parte del aprovechamiento de la energía potencial del agua, contenida en sus masas almacenadas a cierta altura o en su curso a través de ríos. El principio físico central es la transformación de la energía potencial gravitatoria del agua en energía cinética y posteriormente en energía eléctrica, haciendo uso de turbinas y generadores.</Paragraph>
                            <Paragraph>Según Roldán Viloria (2008), el proceso es el siguiente: El agua, almacenada o en movimiento, se canaliza hacia unas turbinas que convierten su energía potencial en energía mecánica mediante el movimiento de un eje. Este eje, acoplado a un generador eléctrico, transforma la energía mecánica en energía eléctrica a través de la inducción electromagnética. Todo el sistema debe contemplar además elementos de control, seguridad y adaptación a la red eléctrica.</Paragraph>
                            <HighlightBox title="Potencia Desarrollada" type="info">
                                <p className="mb-2">El rendimiento del proceso depende directamente de dos factores físicos fundamentales: el caudal del agua y el desnivel que recorre (también llamado "salto"). Matemáticamente, la potencia P desarrollada por una central hidroeléctrica se puede expresar como:</p>
                                <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-blue-100 dark:border-blue-900/30 text-center my-3">
                                    <code className="text-lg font-black font-mono">P = ρ × g × Q × H × η</code>
                                </div>
                                <ul className="text-sm space-y-1 mt-2">
                                    <li><strong>ρ</strong> = densidad del agua (~1000 kg/m³)</li>
                                    <li><strong>g</strong> = aceleración de la gravedad (9,81 m/s²)</li>
                                    <li><strong>Q</strong> = caudal (m³/s)</li>
                                    <li><strong>H</strong> = altura del salto (m)</li>
                                    <li><strong>η</strong> = rendimiento global (adimensional)</li>
                                </ul>
                            </HighlightBox>
                            <Paragraph>Así, la viabilidad y el diseño de una central hidroeléctrica dependen fundamentalmente de la disponibilidad de un recurso hídrico adecuado tanto en caudal como en salto de agua, así como de las condiciones topográficas y medioambientales de la zona.</Paragraph>

                            <SectionHeader title="2. Proceso de Generación Hidroeléctrica" />
                            <Paragraph>El proceso de generación eléctrica en una central hidroeléctrica se puede dividir en los siguientes pasos clave:</Paragraph>
                            <List items={[
                                "Captación del recurso hídrico: Consiste en recolectar el agua de un embalse, río o lago, mediante una presa o toma de agua. En casos de embalses, la presa retiene agua para garantizar disponibilidad durante el año.",
                                "Conducción: El agua es guiada a través de canales, túneles o tuberías forzadas hacia la sala de máquinas. Se busca minimizar pérdidas por fricción y fugas.",
                                "Conversión de energía: El agua pasa por una turbina hidráulica, que convierte la energía potencial y cinética del fluido en energía mecánica de rotación.",
                                "Generación eléctrica: La turbina está conectada a un generador eléctrico (alternador), que produce electricidad mediante el principio de la inducción electromagnética.",
                                "Salida de agua: El agua turbina se descarga downstream, restableciéndose eventualmente su curso hacia el cauce natural.",
                                "Transformación y transmisión: La energía eléctrica generada se eleva de tensión mediante transformadores y se conecta al sistema de transmisión para su distribución."
                            ]} />
                            <div className="my-6 relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/hw5z4zSA4ZY"
                                    title="Animación en 3D de Central Hidroeléctrica"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <Paragraph>La eficiencia en cada paso depende del diseño específico, las condiciones del recurso hídrico y el mantenimiento de las instalaciones.</Paragraph>

                            <SectionHeader title="3. Tipos de Centrales Hidroeléctricas" />
                            <Paragraph>La clasificación de las centrales hidroeléctricas depende principalmente de la forma en que aprovechan el recurso hídrico. Existen dos grandes categorías: centrales de embalse y centrales de pasada.</Paragraph>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">3.1 Centrales de embalse</h5>
                            <Paragraph>Las centrales de embalse almacenan una gran cantidad de agua detrás de una presa construida transversalmente sobre un río. Dicho embalse permite regular el caudal de agua durante el año, lo cual posibilita la generación continua de electricidad independientemente del régimen natural de lluvias o deshielos. Las principales características de las centrales de embalse, según Roldán Viloria (2008), son:</Paragraph>
                            <List items={[
                                "Permiten almacenar agua para épocas de estiaje.",
                                "Ofrecen una gran flexibilidad en la operación de la central, pudiendo cubrir demandas pico de energía.",
                                "Su construcción implica importantes trabajos de infraestructura civil (presas, embalses, túneles).",
                                "Los embalses pueden afectar ampliamente el territorio aguas arriba y modificar sustancialmente el entorno ecológico."
                            ]} />

                            {/* Espacio para Imagen/Video de Central de Embalse */}
                            <div className="my-6 relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/7hoBWHPuJE8"
                                    title="Explicación de central hidroeléctrica reversible"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">3.2 Centrales de pasada</h5>
                            <Paragraph>Las centrales de pasada no almacenan grandes volúmenes de agua, sino que aprovechan directamente el caudal natural del río. Resultan adecuadas en cursos fluviales de caudal constante y significativo o donde el impacto ambiental de un embalse sería inaceptable. Sus características principales son:</Paragraph>
                            <List items={[
                                "No requieren grandes embalses ni alteran significativamente el régimen natural del río.",
                                "Pueden acompañar el régimen hidrológico natural y así su producción eléctrica varía según las fluctuaciones estacionales del caudal.",
                                "La obra civil suele ser menos impactante, aunque igualmente requiere estructuras de derivación, canales de conducción y sala de máquinas."
                            ]} />
                            <Paragraph>En la práctica, muchas centrales hidroeléctricas corresponden a soluciones intermedias entre estos dos extremos, dependiendo de las condiciones geográficas y la planificación energética local/regional.</Paragraph>

                            <SectionHeader title="4. Componentes de una Central Hidroeléctrica" />
                            <Paragraph>Tanto en centrales de embalse como de pasada, los componentes principales, según Roldán Viloria (2008) y las Normas Técnicas del Sector Electricidad, son:</Paragraph>
                            <List items={[
                                "Presa o barrera: Estructura de hormigón, tierra o materiales mixtos, destinada a retener el agua y crear el desnivel.",
                                "Aliviadero: Mecanismo para evacuar el exceso de agua y evitar el sobrepaso de la presa.",
                                "Tomas de agua: Estructuras de acceso al embalse, dotadas de compuertas y rejillas para filtrar sólidos.",
                                "Canales o túneles de aducción: Encauzan el agua desde el embalse hacia la cámara de carga.",
                                "Tuberías forzadas: Conducen el agua a presión hacia las turbinas.",
                                "Cámara de carga: Permite estabilizar el flujo antes de su ingreso a las turbinas.",
                                "Turbinas hidráulicas: Elemento mecánico que convierte la energía hidráulica en mecánica de rotación. Tipos comunes: Pelton, Francis y Kaplan, elegidas según el salto de agua y caudal disponible.",
                                "Generadores eléctricos: Acoplados a las turbinas, transforman la energía mecánica rotatoria en energía eléctrica.",
                                "Transformadores: Elevan la tensión de la energía eléctrica generada para su transmisión eficiente.",
                                "Canal de descarga (o restitución): Devuelve el agua al río o curso natural.",
                                "Sala de control: Alberga los sistemas de control y protección de la central."
                            ]} />

                            {/* Espacio para Imagen Infografía */}
                            <div className="my-6 relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/5I2CDQVz8bA"
                                    title="Técnico camina hacia la sala de máquinas"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <SectionHeader title="5. Turbinas Hidráulicas" />
                            <Paragraph>Las turbinas hidráulicas representan el corazón del proceso de generación hidroeléctrica. Según el rango de salto y caudal del recurso hídrico disponible, se selecciona entre diferentes tipos de turbinas:</Paragraph>
                            <List items={[
                                "Turbina Pelton: Adecuada para saltos elevados (generalmente superiores a 300 m) y caudales moderados o bajos. Es una turbina de acción, donde el chorro de agua impacta en los alabes tipo “cuchara”.",
                                "Turbina Francis: Utilizada para saltos y caudales medios, generalmente entre 10 y 300 m. Es una turbina de reacción y de uso muy extendido a nivel internacional.",
                                "Turbina Kaplan: Ideal para bajas caídas y altos caudales (menos de 30 m de salto). Es una turbina de reacción con álabes orientables."
                            ]} />

                            <SectionHeader title="6. Funcionamiento de un Generador Hidroeléctrico" />
                            <Paragraph>El generador hidroeléctrico es, a grandes rasgos, una gran dinamo acoplada al eje de la turbina. Su principio se fundamenta en la ley de Faraday de la inducción electromagnética: una bobina en movimiento en el seno de un campo magnético genera una fuerza electromotriz y, por tanto, una corriente eléctrica alterna.</Paragraph>
                            <Paragraph>Las centrales hidroeléctricas suelen emplear generadores síncronos, que requieren para su conexión a red un régimen de giro constante, sincronizado con la frecuencia de la red (normalmente 50 o 60 Hz). La potencia del generador dependerá directamente de la potencia hidráulica disponible y del rendimiento de acoplamiento mecánico.</Paragraph>

                            <SectionHeader title="7. Normativas y Estándares Técnicos" />
                            <Paragraph>Como documenta la Superintendencia de Electricidad y Combustibles (SEC), la construcción, operación y mantenimiento de centrales hidroeléctricas están regidas por normativas nacionales e internacionales, que consideran no sólo aspectos de seguridad eléctrica (puesta a tierra, protección de equipos, interruptores, sistemas de control), sino también la protección del medio ambiente y la seguridad hidráulica.</Paragraph>
                            <List items={[
                                "Procedimientos constructivos y mantenimiento programado de presas, canales y maquinaria.",
                                "Sistemas de protección contra sobretensión y fallas.",
                                "Mecanismos de cierre y liberación controlada de caudales para evitar inundaciones y garantizar caudales ecológicos mínimos.",
                                "Protocolos de monitoreo y respuesta ante emergencias."
                            ]} />

                            <SectionHeader title="8. Importancia y Ventajas de la Generación Hidroeléctrica" />
                            <Paragraph>La energía hidroeléctrica es, en la actualidad, la forma de energía renovable más utilizada en el mundo. Presenta las siguientes ventajas, según Roldán Viloria (2008):</Paragraph>
                            <List items={[
                                "Bajo costo operacional: Una vez construida la central, los costos de explotación y mantenimiento son considerablemente bajos respecto a otras fuentes.",
                                "Larga vida útil: Muchas centrales hidroeléctricas pueden operar por más de cincuenta años con adecuados programas de mantenimiento.",
                                "Flexibilidad operativa: Las centrales de embalse permiten almacenamiento estacional y regulación de la producción, respondiendo ágilmente a la demanda de energía.",
                                "Bajas emisiones: No emiten gases de efecto invernadero durante la operación normal, contribuyendo positivamente a los compromisos contra el cambio climático.",
                                "Multifuncionalidad: Los embalses pueden utilizarse para riego, control de inundaciones, suministro de agua potable, desarrollo turístico y generación de pesca."
                            ]} />

                            <SectionHeader title="9. Desventajas y Desafíos de la Hidroelectricidad" />
                            <Paragraph>No obstante sus muchas ventajas, la generación hidroeléctrica implica una serie de desafíos y desventajas, entre las que destacan:</Paragraph>
                            <List items={[
                                "Inversiones iniciales elevadas: Los costes de construcción de presas e infraestructuras asociadas pueden ser muy altos.",
                                "Impacto ambiental: Especialmente en grandes centrales de embalse, se modifica el ecosistema ribereño y terrestre a gran escala, impactando flora, fauna y comunidades humanas.",
                                "Dependencia del régimen hídrico: Sequías prolongadas o cambios climáticos pueden afectar significativamente la producción eléctrica.",
                                "Desplazamiento de población: Se han documentado casos emblemáticos de reasentamiento obligatorio por inundación de zonas habitadas.",
                                "Riesgos asociados a la falla de presas: El colapso de una presa puede tener consecuencias catastróficas aguas abajo."
                            ]} />

                            <SectionHeader title="10. Impacto Ambiental de la Generación Hidroeléctrica" />
                            <Paragraph>El impacto ambiental de una central hidroeléctrica es muy variable, dependiendo del tipo de central, el tamaño del embalse, las características del ecosistema intervenido y las medidas de mitigación adoptadas. Según Roldán Viloria (2008) y estándares internacionales, los principales impactos incluyen:</Paragraph>
                            <List items={[
                                "Alteración de los regímenes naturales de los cursos de agua.",
                                "Modificación de flujos sedimentológicos y geomorfología del río.",
                                "Fragmentación y pérdida de hábitats acuáticos y terrestres.",
                                "Interrupción de migraciones de especies ictícolas.",
                                "Producción de gases de efecto invernadero por descomposición de material vegetal en embalses tropicales.",
                                "Impactos sociales, culturales y económicos en comunidades desplazadas o afectadas aguas abajo."
                            ]} />

                            <SectionHeader title="11. Soluciones de Mitigación y Buenas Prácticas" />
                            <Paragraph>Ante estos desafíos, la construcción y operación de centrales hidroeléctricas modernas adoptan una serie de buenas prácticas y tecnologías de mitigación:</Paragraph>
                            <List items={[
                                "Caudales ecológicos: Garantizar descargas mínimas aguas abajo para mantener los ecosistemas.",
                                "Pantallas para peces y escaleras de migración: Facilitan el desplazamiento de especies acuáticas.",
                                "Gestión ambiental adaptativa: Monitoreo de flora, fauna y calidad del agua asociada a la central.",
                                "Reforestación y recuperación de hábitats: Esfuerzos para restaurar ecosistemas en zonas degradadas.",
                                "Rescate y protección del patrimonio cultural: Documentación y relocalización de sitios arqueológicos y culturales."
                            ]} />

                            <SectionHeader title="12. Hidroelectricidad en el Contexto Global" />
                            <Paragraph>A nivel internacional, la hidroelectricidad representa aproximadamente el 16% de la producción mundial de electricidad, superando a otras fuentes renovables. China, Brasil, Canadá, Estados Unidos y Rusia lideran en potencia instalada y producción hidroeléctrica. No obstante, el desarrollo de nuevas redes y tecnologías de almacenamiento, así como la integración de fuentes renovables variables (como la solar y la eólica), están modificando el rol de las grandes centrales hidroeléctricas, privilegiando a futuro el desarrollo de “mini” y “micro” hidros, de menor impacto ambiental y mayor flexibilidad de integración a redes distribuidas.</Paragraph>

                            <HighlightBox type="warning" title="Criterio de Evaluación 1.1">
                                <p>Al finalizar esta sección, el estudiante debiese ser capaz de identificar los principios y proceso de generación eléctrica mediante fuentes hídricas, considerando tipos de centrales hidroeléctricas, productos generados y medio de transporte de la energía eléctrica.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="II. Generación mediante Fuentes Térmicas" icon={Thermometer}>
                            <SectionHeader title="Introducción" />
                            <Paragraph>La generación eléctrica es uno de los pilares fundamentales para el desarrollo industrial, social y económico de las naciones modernas. Entre los diversos métodos de obtención de energía eléctrica, la generación mediante fuentes térmicas ha ocupado, y en muchos países aún ocupa, un rol preponderante en el sistema energético global. Según Roldán Viloria (2008), las centrales térmicas constituyen un conjunto de instalaciones industriales donde la energía química almacenada en combustibles fósiles o nucleares es transformada en energía eléctrica a través de complejos procesos de conversión.</Paragraph>
                            <Paragraph>En el presente texto se aborda de manera estructurada y académica los fundamentos de la generación eléctrica mediante fuentes térmicas, así como una descripción y análisis de los principales tipos de centrales térmicas existentes en el mundo: centrales de gas, carbón, petróleo, nucleares y de vapor. Todo este análisis se desarrolla en un contexto global, recurriendo a bibliografía especializada como el texto "Fuentes de energía" de José Roldán Viloria (2008) y las Normas Técnicas del Sector Electricidad (SEC) de Chile, para proporcionar fundamentos sólidos y actualizados.</Paragraph>

                            {/* Espacio para Imagen/Video de Introducción */}
                            <div className="my-8 relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/meZkGeqoNTo"
                                    title="¿Cómo funciona una central de energía termoeléctrica?"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <SectionHeader title="1. Principios de Generación Eléctrica Mediante Fuente Térmica" />
                            <Paragraph>El principio fundamental en la generación eléctrica por fuente térmica reside en la conversión de energía química (o nuclear) contenida en materiales combustibles, en energía térmica, y, finalmente, en energía eléctrica utilizable. El combustible –sea sólido, líquido o gaseoso– es sometido a un proceso de combustión controlada (o fisión nuclear, en su caso) para liberar calor. Esta energía térmica se utiliza para calentar agua bajo presión, generando vapor. El vapor, a su vez, mueve una turbina acoplada mecánicamente a un generador eléctrico, el cual, mediante el fenómeno de inducción electromagnética, transforma la energía mecánica en energía eléctrica.</Paragraph>
                            <Paragraph>Según Roldán Viloria (2008), este proceso puede resumirse en las siguientes etapas esenciales:</Paragraph>
                            <List items={[
                                "Combustión o fisión nuclear para la obtención de energía térmica.",
                                "Transferencia de calor al agua para producir vapor de alta presión y temperatura.",
                                "Transformación de la energía térmica del vapor en energía mecánica, gracias al movimiento de la turbina.",
                                "Conversión de la energía mecánica en energía eléctrica en el generador."
                            ]} />
                            <Paragraph>La eficiencia del proceso depende de factores tecnológicos, del tipo de combustible utilizado, del diseño de las turbinas y calderas, así como de los sistemas de refrigeración y el manejo de residuos. Las Normas Técnicas del Sector Electricidad de Chile establecen parámetros y requisitos mínimos para garantizar eficiencia y seguridad en estas instalaciones.</Paragraph>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">1.1 El Ciclo Termodinámico: Ciclo de Rankine</h5>
                            <Paragraph>La mayor parte de las centrales térmicas trabajan sobre la base del llamado Ciclo de Rankine, que describe el proceso termodinámico seguido por el fluido de trabajo (agua/vapor). Este ciclo comprende la evaporización del agua, la expansión del vapor en la turbina, la condensación del vapor y la recirculación del condensado a la caldera. La eficiencia térmica de una central está limitada por el segundo principio de la termodinámica, lo que implica que nunca es posible convertir toda la energía calorífica del combustible en energía eléctrica.</Paragraph>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">1.2 Ventajas y Limitaciones de la Generación Térmica</h5>
                            <Paragraph>Las centrales térmicas ofrecen la ventaja de poder instalarse cerca de áreas de consumo o de yacimientos de combustibles, además de su capacidad de generación estable y ajustable a la demanda. Sin embargo, presentan limitaciones en términos de conversión energética y emisión de contaminantes, lo que motiva una búsqueda constante de aumentos de eficiencia y de reducción de impactos ambientales.</Paragraph>

                            {/* Espacio para Imagen/Video sobre Ciclo Rankine */}
                            <div className="my-6 relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/8aB1xGiiP5Q"
                                    title="Ciclo de Rankine"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <SectionHeader title="2. Tipos de Centrales Térmicas" />
                            <Paragraph>Dentro de las centrales térmicas pueden reconocerse varias tipologías, según el combustible utilizado y la tecnología de conversión. De acuerdo a Roldán Viloria (2008), las principales son las centrales térmicas de gas, carbón, petróleo, nucleares y de vapor. Cada una presenta características tecnológicas y ambientales específicas.</Paragraph>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">2.1 Centrales Térmicas de Gas</h5>
                            <Paragraph>Las centrales térmicas de gas operan principalmente con gas natural, aunque en algunas regiones también pueden emplearse gases derivados del petróleo (gas licuado, gasóleo, etc.). Su funcionamiento básico se sustenta en la combustión directa del gas en una cámara, generando fluidos calientes que impulsan turbinas de gas. Alternativamente, en ciclos combinados, el calor residual permite calentar agua para sumar una turbina de vapor, aumentando así la eficiencia global del sistema.</Paragraph>
                            <Paragraph>Según Roldán Viloria (2008), su mayor ventaja radica en la rapidez de puesta en marcha, su alta eficiencia (particularmente en ciclos combinados, que alcanzan hasta un 60%), y menores emisiones contaminantes en comparación con el carbón o el petróleo. No obstante, su dependencia de la disponibilidad y el precio del gas puede limitar su desarrollo en ciertas regiones.</Paragraph>
                            <List items={[
                                "Funcionamiento: El gas se quema en una cámara de combustión. Los gases calientes resultantes hacen girar una turbina acoplada a un generador eléctrico. En ciclo combinado, los gases residuales calientan agua para accionar una turbina de vapor, mejorando el rendimiento.",
                                "Ventajas: Alta eficiencia. Emisiones menores de CO₂ y contaminantes locales respecto a otros fósiles. Flexibilidad operativa y rápida adaptación a la demanda.",
                                "Desventajas: Dependencia del suministro gasífero. Emisión de gases de efecto invernadero."
                            ]} />

                            {/* Espacio para Imagen/Video Central a Gas */}
                            <div className="my-6 relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/U9JhUlz0lIo"
                                    title="Centrales térmicas de ciclo combinado"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">2.2 Centrales Térmicas de Carbón</h5>
                            <Paragraph>Las centrales de carbón representan una de las formas más tradicionales de generación térmica. El carbón, tras ser triturado y pulverizado, se quema en calderas a alta temperatura. El vapor generado acciona turbinas para producir electricidad. A pesar de las mejoras tecnológicas, estas centrales se asocian con importantes preocupaciones ambientales por sus elevadas emisiones de dióxido de carbono, óxidos de azufre y partículas en suspensión.</Paragraph>
                            <Paragraph>Roldán Viloria (2008) señala que aún hoy el carbón sigue siendo un combustible clave debido a su abundancia y bajo coste en muchos países. Sin embargo, las crecientes exigencias normativas impulsan la adopción de tecnologías de captura y almacenamiento de carbono (CCS) para mitigar su impacto ambiental.</Paragraph>
                            <List items={[
                                "Funcionamiento: El carbón se muele hasta convertirlo en polvo. Se quema en una caldera, liberando calor. El vapor generado mueve una turbina y el generador produce electricidad.",
                                "Ventajas: Gran disponibilidad global de carbón. Costo relativamente bajo del combustible.",
                                "Desventajas: Altas emisiones de gases contaminantes y residuos sólidos. Mayores costos asociados al control de contaminación. Baja eficiencia comparativa y problemas de manejo de cenizas y escorias."
                            ]} />

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">2.3 Centrales Térmicas de Petróleo</h5>
                            <Paragraph>Las centrales térmicas de petróleo utilizan como combustible derivados líquidos del petróleo, tales como fuel oil, diésel o residuales pesados. El proceso de generación eléctrica es similar al de carbón: el combustible se quema en calderas, se produce vapor y éste acciona una turbina conectada al generador. El petróleo ha jugado un papel fundamental en la electrificación de zonas insulares o remotas donde no existen alternativas más baratas.</Paragraph>
                            <Paragraph>Según Roldán Viloria (2008), estas centrales presentan una eficiencia intermedia entre el carbón y el gas, pero sus elevados costes y altos impactos ambientales (emisión de SO₂, NOₓ, contaminantes orgánicos y polvos finos) han impulsado la tendencia mundial a reducir su uso, quedando básicas para sistemas de respaldo o regiones sin acceso a combustibles más limpios.</Paragraph>
                            <List items={[
                                "Funcionamiento: El combustible líquido se atomiza e inyecta en la caldera para combustión. El vapor generado acciona la turbina y el generador acoplado produce electricidad.",
                                "Ventajas: Flexibilidad en la ubicación de la planta. Arranque y parada relativamente rápidos.",
                                "Desventajas: Altos costos operacionales y de combustibles. Emisiones elevadas de contaminantes atmosféricos. Riesgos asociados a derrames y contaminación del agua."
                            ]} />

                            {/* Espacio para Imagen/Video Central Nuclear */}
                            <div className="my-6 relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-slate-300 dark:border-slate-700">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/e8ckW4r_mIM"
                                    title="VISITO una CENTRAL NUCLEAR de España☢️ Como funciona?"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">2.4 Centrales Nucleares</h5>
                            <Paragraph>Las centrales nucleares constituyen una categoría especial de centrales térmicas donde la fuente primaria de calor es la fisión nuclear del átomo (usualmente uranio-235 o plutonio-239) en un reactor. En el reactor, los neutrones bombardean núcleos de material fisionable, produciendo fragmentos y liberando gran cantidad de energía en forma de calor. Este calor se utiliza para generar vapor, que a su vez acciona las turbinas y permite la generación eléctrica.</Paragraph>
                            <Paragraph>Según Roldán Viloria (2008), las centrales nucleares aportan como principal ventaja la generación de grandes volúmenes de energía base, con bajas emisiones directas de gases contaminantes y de efecto invernadero. Sin embargo, presentan desafíos significativos en cuanto a la gestión de residuos radiactivos, seguridad operativa y aceptación social.</Paragraph>
                            <List items={[
                                "Funcionamiento: La fisión nuclear en el reactor genera calor. En un circuito primario cerrado, un refrigerante transmite el calor a un generador de vapor. El vapor mueve la turbina y el generador produce electricidad.",
                                "Ventajas: Alta densidad energética; grandes volúmenes de energía con poca materia prima. Bajas emisiones de CO₂ durante la operación.",
                                "Desventajas: Gestión y almacenamiento de residuos radiactivos. Riesgo de accidentes o fugas. Altos costos iniciales e infraestructuras complejas. Elevada oposición social en muchos países."
                            ]} />

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">2.5 Centrales de Vapor (Convencionales o Mixtas)</h5>
                            <Paragraph>Las centrales de vapor, también llamadas convencionales, pueden utilizar diversos combustibles (carbón, petróleo, biomasa) para calentar agua en calderas y producir vapor a alta presión. Este tipo de plantas ha sido históricamente el eje de la generación térmica, combinando distintas fuentes primarias. En la actualidad, muchas de estas centrales han adaptado sus tecnologías para operar en ciclos combinados o como plantas mixtas mediante co-combustión, integrando biomasas o residuos industriales.</Paragraph>
                            <Paragraph>El proceso se articula en torno al vapor como motor de la turbina y, por ende, del generador. Las características y eficiencia variarán según el combustible empleado, la presión y temperatura del vapor y los complementos tecnológicos aplicados.</Paragraph>
                            <List items={[
                                "Funcionamiento: El combustible (sólido, líquido o gaseoso) se quema en la caldera. El agua se transforma en vapor de alta presión. El vapor impulsa la turbina y esta al generador eléctrico.",
                                "Ventajas: Versatilidad en el uso de combustibles. Soluciones tecnológicas probadas y ampliamente disponibles.",
                                "Desventajas: Emisiones contaminantes según combustibles empleados. Baja eficiencia comparada con ciclos combinados modernos."
                            ]} />

                            <SectionHeader title="3. Consideraciones Tecnológicas y Económicas" />
                            <Paragraph>La viabilidad y selección de una u otra tecnología térmica depende de muchos factores, tales como los costos relativos de inversión y operación, la disponibilidad y precio de los combustibles, la infraestructura de transporte y almacenamiento, las normativas ambientales y los contextos regulatorios internacionales (tales como los compromisos por reducción de emisiones de gases de efecto invernadero).</Paragraph>
                            <Paragraph>La bibliografía técnica y las Normas de la SEC indican la importancia de evaluar:</Paragraph>
                            <List items={[
                                "Consumo y logística de combustibles.",
                                "Requerimientos de agua de enfriamiento y gestión de vertidos.",
                                "Sistemas de mitigación y filtración de gases y partículas.",
                                "Costos asociados a derechos de emisión de CO₂ y otros contaminantes.",
                                "Requerimientos de seguridad y planes de contingencia."
                            ]} />
                            <Paragraph>A nivel mundial, se observa una transición paulatina hacia centrales térmicas más eficientes (por ejemplo, ciclo combinado, cogeneración, centrales nucleares de nueva generación) y hacia la integración de fuentes menos contaminantes, siguiendo las directrices internacionales en favor de la reducción de emisiones y la sostenibilidad energética.</Paragraph>

                            <SectionHeader title="4. Conclusiones" />
                            <Paragraph>La generación eléctrica mediante fuentes térmicas sigue siendo un componente fundamental del mix energético mundial. A pesar de los avances tecnológicos y el desarrollo acelerado de energías renovables, la estabilidad, escalabilidad y control de carga de estas centrales justifican su permanencia, aunque bajo la presión de un marco regulatorio más estricto y la necesidad de minimizar impactos ambientales.</Paragraph>
                            <Paragraph>El estudio de los principios de transformación termodinámica, junto a la caracterización y análisis de las distintas tecnologías térmicas (gas, carbón, petróleo, nucleares, vapor) permite comprender los retos actuales y futuros en materia energética. Conforme expone Roldán Viloria (2008), el dominio técnico y normativo, combinado con una gestión responsable de los recursos y residuos, serán claves para un desarrollo energético sostenible.</Paragraph>
                            <Paragraph>Las innovaciones en eficiencia, tecnologías de captura de carbono, diversificación de combustibles y gestión de residuos son la base para una transición segura y ambientalmente responsable de las centrales térmicas. Así, su caracterización y análisis deben estar siempre presentes en los estudios de introducción a la industria eléctrica, considerando su rol presente y futuro en el contexto global.</Paragraph>

                            <HighlightBox type="warning" title="Criterio de Evaluación 1.2">
                                <p>Al finalizar esta sección, el estudiante debiese ser capaz de identificar los principios de generación eléctrica mediante fuente térmica, considerando las características, ventajas y desventajas tecnológicas de cada método, y su impacto en el entorno local y global.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="III. Generación mediante Energías Alternativas" icon={Zap}>
                            <SectionHeader title="Introducción a la Energía Geotérmica" />
                            <Paragraph>La geotermia se ha consolidado, a nivel global, como una alternativa relevante y sustentable dentro del espectro de fuentes utilizadas para la generación eléctrica. Su utilización descansa en la capacidad de aprovechar el calor interno de la Tierra, mediante tecnologías específicas que transforman esta energía térmica en electricidad. Este texto, basado principalmente en la obra "Fuentes de energía" de José Roldán Viloria (2008) y las directrices planteadas por la Superintendencia de Electricidad y Combustibles (SEC) de Chile, profundiza en los fundamentos, procesos, ventajas, desafíos y el marco regulatorio de la generación de electricidad geotérmica, con un enfoque académico, estructurado y contextualizado a nivel global.</Paragraph>

                            {/* Espacio reservado para Video/Imagen de Introducción Geotermia */}
                            <div className="my-8 relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                                <Info size={40} className="text-slate-400 dark:text-slate-500 mb-2 opacity-50" />
                                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest opacity-70">
                                    [Espacio reservado para Video/Imagen: Geotermia]
                                </span>
                            </div>

                            <SectionHeader title="1. Principios Fundamentales de la Geotermia" />
                            <Paragraph>La energía geotérmica es la energía térmica almacenada bajo la superficie terrestre. Esta se origina principalmente por la desintegración de elementos radiactivos en el interior del planeta y el calor remanente de procesos de formación de la Tierra. De acuerdo con Roldán Viloria (2008), la temperatura del subsuelo aumenta en promedio entre 25 y 30 °C por cada kilómetro de profundidad, aunque este gradiente geotérmico puede variar considerablemente según las características geológicas locales.</Paragraph>
                            <Paragraph>El aprovechamiento geotérmico para la generación de electricidad requiere de la existencia de campos o reservorios geotérmicos. Estos sistemas suelen estar constituidos por:</Paragraph>
                            <List items={[
                                "Una fuente de calor de considerable magnitud, generalmente magma o rocas a altas temperaturas.",
                                "Un reservorio poroso y permeable que almacene el agua o vapor calentado.",
                                "Una capa impermeable que retenga el fluido.",
                                "Una fuente de recarga de agua (por ejemplo, precipitaciones o infiltraciones)."
                            ]} />
                            <Paragraph>La energía geotérmica puede clasificarse en función de la temperatura de los fluidos presentes en el yacimiento: alta entalpía (más de 150 °C), media entalpía (90-150 °C) y baja entalpía (menos de 90 °C). La producción eléctrica exige, generalmente, recursos de alta o media entalpía.</Paragraph>

                            <SectionHeader title="2. Proceso de Generación Eléctrica Mediante Energía Geotérmica" />
                            <Paragraph>El proceso para la generación de electricidad a partir de energía geotérmica implica la transformación de la energía térmica en energía eléctrica a través de una serie de etapas y componentes tecnológicos que dependen del tipo de recurso geotérmico y la tecnología seleccionada para su explotación.</Paragraph>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">2.1. Extracción del Fluido Geotérmico</h5>
                            <Paragraph>El primer paso consiste en la perforación y diseño de pozos geotérmicos, que permiten acceder al reservorio subterráneo. Una vez llegado a las profundidades deseadas (que pueden oscilar entre 500 y 3.000 metros, dependiendo del campo geotérmico), los fluidos calientes (agua, vapor o una mezcla de ambos) ascienden a la superficie impulsados por su propia presión y el gradiente de temperatura.</Paragraph>

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">2.2. Tipos de Centrales Geotérmicas</h5>
                            <Paragraph>Según la naturaleza del recurso disponible y la temperatura de los fluidos, existen tres tecnologías básicas para convertir la energía térmica del fluido geotérmico en electricidad:</Paragraph>
                            <List items={[
                                "Centrales de vapor seco: Utilizan directamente el vapor extraído para accionar la turbina. Son posibles en campos geotérmicos donde el vapor existe naturalmente a presiones y temperaturas adecuadas (por encima de 150 °C, idealmente sobre 220 °C). El vapor seco es conducido a las turbinas que mueven el generador eléctrico.",
                                "Centrales de vapor flash: Apropiadas para yacimientos donde el recurso principal es agua a alta temperatura y presión (normalmente entre 150 y 350 °C). El agua caliente es despresurizada (“flash”) al llegar a la superficie, lo que genera vapor que se utiliza para accionar la turbina. El agua restante puede ser aprovechada en una segunda etapa de despresurización para obtener más vapor (doble flash) antes de su reinyección o descarte.",
                                "Centrales de ciclo binario: Empleadas en yacimientos de temperatura media o baja (generalmente entre 85 y 170 °C). El fluido geotérmico calienta, mediante un intercambiador de calor, a un segundo fluido con punto de ebullición bajo (típicamente isobutano o pentano), el cual se vaporiza y mueve la turbina. Esta tecnología no requiere que el fluido geotérmico se vaporice, ampliando así el rango de recursos aprovechables."
                            ]} />

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">2.3. Conversión y Transporte de la Electricidad</h5>
                            <Paragraph>Una vez que la turbina es accionada por el vapor o el fluido secundario, se acopla a un generador eléctrico que transforma la energía mecánica en energía eléctrica. Finalmente, la electricidad producida se ajusta mediante transformadores para ser inyectada a la red de distribución o transmisión, según las Normas Técnicas del Sector Electricidad de cada país (como las desarrolladas por la SEC en Chile).</Paragraph>

                            <SectionHeader title="3. Componentes Principales de una Central Geotérmica" />
                            <Paragraph>Tanto las centrales de vapor seco, flash o ciclo binario comparten una serie de componentes esenciales, aunque su diseño específico puede variar:</Paragraph>
                            <List items={[
                                "Pozos de producción y de reinyección.",
                                "Sistema de tuberías y separadores de vapor.",
                                "Intercambiadores de calor (en el caso de ciclo binario).",
                                "Turbina de vapor o de gas.",
                                "Generador eléctrico.",
                                "Sistemas de condensadores y de enfriamiento.",
                                "Plantas de tratamiento de aguas residuales y gases.",
                                "Sistemas de control y monitoreo."
                            ]} />
                            <Paragraph>Todo el sistema requiere de estrictos controles operacionales y ambientales, siguiendo normas internacionales y nacionales para garantizar la seguridad, eficiencia y sustentabilidad del proceso.</Paragraph>

                            <SectionHeader title="4. Distribución Geográfica de los Recursos Geotérmicos" />
                            <Paragraph>La geotermia es una fuente energética intrínsecamente ligada a la actividad tectónica global. La mayor disponibilidad de recursos geotérmicos de alta entalpía se encuentra en el llamado “Cinturón de Fuego del Pacífico”, donde la interacción de placas tectónicas ha generado abundantes manifestaciones hidrotermales (aguas termales, géiseres, fumarolas, etc.). Países como Islandia, Filipinas, Indonesia, México, Estados Unidos (especialmente California y Nevada), Nueva Zelanda, Kenia, Etiopía, Turquía, Italia, y Chile, destacan en la utilización de la energía geotérmica para producción eléctrica.</Paragraph>
                            <Paragraph>Según datos de la Agencia Internacional de Energía (AIE), a 2024 existen más de 16 GW de capacidad instalada de generación eléctrica geotérmica en el mundo, siendo Indonesia, Filipinas y Estados Unidos los principales países en términos de megavatios instalados.</Paragraph>

                            <SectionHeader title="5. Ventajas y Desafíos de la Generación Geotérmica" />
                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">5.1. Ventajas</h5>
                            <List items={[
                                "Sostenibilidad: Si el reservorio se maneja adecuadamente, la energía geotérmica es esencialmente renovable a escala humana de tiempo.",
                                "Factor de planta elevado: Las centrales geotérmicas pueden operar más de 7.500 horas al año, con factores de disponibilidad del orden del 90%, muy superiores a fuentes solares o eólicas.",
                                "Baja huella de carbono: El proceso produce emisiones netas de gases de efecto invernadero significativamente menores que las centrales térmicas convencionales.",
                                "Estabilidad en la generación: A diferencia de fuentes variables como el sol o el viento, la geotermia provee energía continua, útil como base en los sistemas eléctricos.",
                                "Uso local de recursos: Reduce la dependencia de combustibles fósiles importados, mejorando la seguridad energética."
                            ]} />

                            <h5 className="font-bold text-slate-900 dark:text-white mt-6 mb-2">5.2. Desafíos y Limitaciones</h5>
                            <List items={[
                                "Elevados costos iniciales: La exploración y perforación geotérmica es costosa y arriesgada, pues exige gran inversión antes de conocer la viabilidad económica del recurso.",
                                "Ubicación geográfica restringida: Solo las regiones con actividad geotérmica suficiente permiten la implantación rentable de centrales eléctricas.",
                                "Gestión de residuos: Las aguas geotermales pueden contener sustancias tóxicas (arsénico, boro, mercurio, sales) que requieren tratamiento especializado.",
                                "Fenómenos sísmicos: En ocasiones, la reinyección de fluidos puede inducir microsismos, requiriendo monitoreo y mitigación adecuados (SEC, 200-).",
                                "Agotamiento local: Un manejo inadecuado del reservorio puede llevar a la disminución del recurso, afectando la vida útil del proyecto."
                            ]} />

                            <SectionHeader title="6. Impactos Ambientales de la Generación Geotérmica" />
                            <Paragraph>La generación de electricidad a partir de recursos geotérmicos es, en términos generales, notablemente menos impactante que el uso de fuentes fósiles. Sin embargo, no está exenta de efectos ambientales que deben ser diagnosticados y gestionados desde la ingeniería y la regulación.</Paragraph>
                            <List items={[
                                "Emisiones Atmosféricas: En ciertos yacimientos, los fluidos geotérmicos contienen gases disueltos (CO₂, H₂S, NH₃, CH₄). Aunque las emisiones netas sean bajas, pueden ser localmente relevantes y requieren sistemas de filtrado o dispersión adecuada.",
                                "Descarga de Aguas y Sólidos: Los líquidos residuales pueden tener minerales disueltos que podrían contaminar aguas subterráneas y superficiales. La reinyección en el reservorio es la práctica recomendada para evitar contaminación y mantener la presión del yacimiento.",
                                "Fenómenos Inducidos: La reinyección significativa de fluidos puede inducir pequeños movimientos sísmicos (“sismicidad inducida”), que deben ser monitoreados conforme a normativas técnicas (SEC).",
                                "Impacto en Superficie: Aunque la huella superficial es muy inferior a la de proyectos solares, eólicos o hídricos, las instalaciones alteran localmente el paisaje y vegetación.",
                                "Ruido y Olores: Las perforaciones generan ruido, y el H₂S en algunos yacimientos posee olor a “huevo podrido” perceptible localmente."
                            ]} />

                            <SectionHeader title="7. Normativa y Regulación para Proyectos Geotérmicos" />
                            <Paragraph>De acuerdo con la Norma Técnicas Sector Electricidad (SEC), el desarrollo de proyectos geotérmicos en Chile para la generación eléctrica está sujeto a:</Paragraph>
                            <List items={[
                                "Evaluaciones de impacto ambiental obligatorias.",
                                "Permisos de exploración y concesión de explotación del recurso geotérmico.",
                                "Cumplimiento de estándares de seguridad operacional.",
                                "Planes de monitoreo de emisiones, residuos y gestión ante eventos sísmicos.",
                                "Normas de calidad del aire, agua y suelos."
                            ]} />

                            <SectionHeader title="8. Casos y Perspectivas Globales" />
                            <Paragraph>Islandia es un ejemplo paradigmático, cubriendo más del 25% de su electricidad y 90% de calefacción mediante geotermia. Estados Unidos lidera la capacidad instalada global, destacando The Geysers en California. En Chile, la planta Cerro Pabellón (2017), a más de 4.500 msnm, fue la primera en Sudamérica. Países como Indonesia y Kenia están acelerando inversiones para aprovechar entornos volcánicos y descarbonizar matrices energéticas.</Paragraph>

                            <SectionHeader title="9. Tendencias Tecnológicas y Futuro" />
                            <List items={[
                                "Perfeccionamiento de técnicas de perforación más profundas.",
                                "Centrales de ciclo binario mejoradas y fluidos de transferencia más eficientes.",
                                "Sistemas Geotérmicos Mejorados (EGS) para fracturar rocas calientes secas y crear nuevos reservorios.",
                                "Integración de la geotermia con cogeneración, desalinización y calefacción directa."
                            ]} />

                            <SectionHeader title="10. Conclusión" />
                            <Paragraph>La generación eléctrica mediante energía geotérmica constituye una alternativa estratégica y cada vez más relevante para el abastecimiento energético mundial del siglo XXI. Si bien su desarrollo está condicionado por la geología local y presenta desafíos técnicos, económicos y ambientales, la eficiencia, continuidad y baja huella ecológica de su operación la posicionan como pieza clave en la transición hacia sistemas eléctricos más sostenibles.</Paragraph>

                            <HighlightBox type="warning" title="Criterio de Evaluación 1.3">
                                <p>Al finalizar esta sección, el estudiante debiese ser capaz de caracterizar el proceso de generación eléctrica mediante fuentes alternativas como la geotermia, identificando sus principios técnicos, impactos ambientales y su viabilidad tecnológica y económica.</p>
                            </HighlightBox>

                            <SectionHeader title="Anexo: Otras Energías Alternativas" />
                            <Paragraph>Además de la geotermia, el portafolio de Energías Renovables No Convencionales (ERNC) incluye otras fuentes muy relevantes en la matriz energética moderna:</Paragraph>
                            <List items={[
                                "Energía Solar (Fotovoltaica y Térmica): Convierte la luz o calor del sol en electricidad. En rápida expansión y emisiones cero operativas, pero intermitente.",
                                "Energía Eólica: Utiliza aerogeneradores impulsados por el viento. Limpia pero intermitente. Requiere estudios precisos de vientos.",
                                "Biomasa: Quema de residuos orgánicos para generar calor y electricidad. Neutra en carbono si se gestiona sosteniblemente.",
                                "Energía Marina (Mareomotriz/Undimotriz): Aprovechamiento de mareas y olas. En vías de desarrollo comercial por sus altos costos."
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
