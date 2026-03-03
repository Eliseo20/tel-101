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
                            <div className="my-8 relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                                <Info size={40} className="text-slate-400 dark:text-slate-500 mb-2 opacity-50" />
                                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest opacity-70">
                                    [Espacio reservado para Video/Imagen: Represa Hidroeléctrica]
                                </span>
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
                            <div className="my-6 relative w-full aspect-[21/9] bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest opacity-70">
                                    [Video: Central de Embalse - Ralco/Colbún]
                                </span>
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
                            <div className="my-6 relative w-full aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-inner flex flex-col items-center justify-center border border-dashed border-slate-300 dark:border-slate-700">
                                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest opacity-70">
                                    [Infografía: Esquema de Partes de una Central]
                                </span>
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
