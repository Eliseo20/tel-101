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
                                Reglamentación y <br /> <span className="text-[#D1202F]">Normativas (DS 8/2019)</span>
                            </h2>
                        </div>


                        <ExpansionTile title="Pliegos Técnicos DS 8/2019: Fundamentos, Estructura y Aplicaciones en la Industria Eléctrica Chilena" icon={Shield} defaultOpen={false}>
                            <SectionHeader title="Introducción" />
                            <List items={[
                                "La industria eléctrica constituye uno de los pilares fundamentales para el desarrollo económico y social de los países. Su evolución y seguridad dependen, en gran medida, de la existencia de normativas y regulaciones técnicas que aseguren la adecuada instalación, operación y mantención de los sistemas eléctricos. En Chile, uno de los marcos regulatorios más relevantes en lo que respecta a las instalaciones eléctricas de baja tensión es el Decreto Supremo N° 8 del año 2019 (DS 8/2019). Este cuerpo normativo, emitido por la Superintendencia de Electricidad y Combustibles (SEC), establece los requisitos técnicos y de seguridad que deben cumplir las instalaciones eléctricas interiores, con el fin de proteger tanto a las personas como a los bienes, además de asegurar la calidad y continuidad del suministro eléctrico.",
                                "El contexto global de la energía eléctrica, caracterizado por la diversificación de fuentes, la digitalización y la sostenibilidad, impone desafíos que requieren una actualización permanente de las normativas nacionales. En este sentido, el DS 8/2019 representa una respuesta del Estado de Chile para adecuar sus estándares a las mejores prácticas internacionales y a las exigencias de una industria eléctrica moderna y segura.",
                                "El presente texto de estudio tiene como objetivo ofrecer una visión integral y detallada de los Pliegos Técnicos DS 8/2019, analizando su estructura, sus principales requerimientos y el impacto que tienen sobre el diseño, la construcción y la supervisión de instalaciones eléctricas de baja tensión. Para ello, se hace uso de la bibliografía recomendada: Fuentes de energía de Roldán Viloria, José, y las Normas Técnicas Sector Electricidad publicadas por la SEC, además de considerar el contexto global e integral en relación con los avances tecnológicos y regulatorios en el ámbito eléctrico.",
                                "Contexto y Justificación del DS 8/2019",
                                "Tradicionalmente, las instalaciones eléctricas han representado una fuente potencial de riesgos para las personas y las propiedades. Incendios, electrocuciones y fallas en los equipos son algunos de los problemas recurrentes cuando estas instalaciones no siguen los estándares de calidad y seguridad. Además, la masificación de equipos electrónicos, la automatización del hogar y la integración de energías renovables han generado nuevos desafíos técnicos, tanto en la protección de los usuarios como en la gestión de la energía.",
                                "Siguiendo las líneas recomendadas por Roldán Viloria (2008), la regulación técnica debe considerar tanto los avances tecnológicos como el contexto social y económico que rodea a la industria eléctrica. El DS 8/2019 surge como una actualización y complemento a normativas previas, buscando garantizar que las instalaciones eléctricas, especialmente las de baja tensión, respondan a los requerimientos contemporáneos en términos de seguridad, confiabilidad y eficiencia.",
                                "Objetivo y Alcance del DS 8/2019",
                                "El objetivo central del DS 8/2019 es establecer los requisitos técnicos mínimos que deben cumplir las instalaciones eléctricas interiores alimentadas en baja tensión, entendiéndose estas como aquellas conectadas a un suministro cuyo voltaje no excede los 1.000 V en corriente alterna (CA) o 1.500 V en corriente continua (CC).",
                                "Dentro del alcance de este decreto se consideran todas las obras nuevas, ampliaciones y remodelaciones de instalaciones eléctricas en edificios de viviendas, oficinas, establecimientos comerciales, industrias, hospitales, escuelas, entre otros. Quedan excluidas de este decreto las instalaciones eléctricas correspondientes a sistemas de transporte, subestaciones y redes de distribución de media y alta tensión, aunque muchas de sus disposiciones pueden servir como referencia para estos casos.",
                                "La normativa aplica tanto a instalaciones eléctricas residenciales como comerciales e industriales, estableciendo un marco uniforme de exigencias técnicas y de seguridad para todos los actores involucrados: proyectistas, instaladores eléctricos, empresas constructoras y fiscalizadores (SEC).",
                                "Estructura General del DS 8/2019",
                                "El decreto está dividido en secciones temáticas que abordan, de manera sistemática, los diferentes aspectos que caracterizan una instalación eléctrica de baja tensión desde su diseño hasta su puesta en servicio y mantención. La estructura permite abordar temas como la clasificación de las instalaciones, las protecciones contra contactos directos e indirectos, la puesta a tierra, los espacios de trabajo, los tableros eléctricos, los alimentadores, entre otros.",
                                "El DS 8/2019 parte por establecer definiciones claras y precisas para todos los conceptos técnicos relevantes, de forma que no haya ambigüedades en la aplicación de la norma. Destacan términos como circuito, interruptor diferencial, potencia máxima admisible, tablero general, toma de tierra, entre otros. La normalización del lenguaje técnico es esencial para garantizar la correcta interpretación y cumplimiento de la normativa.",
                                "Se establecen criterios generales para el diseño de las instalaciones eléctricas, considerando factores como la demanda máxima prevista, la capacidad de los conductores, la protección frente a sobreintensidades y cortocircuitos, así como las condiciones ambientales que pudieran afectar la instalación. Se destaca aquí la importancia de la calidad de los materiales y equipos eléctricos, que deben cumplir con las normativas y certificaciones vigentes del sector.",
                                "El decreto detalla los procedimientos y métodos aconsejados para la correcta ejecución del tendido de conductores, el montaje de tableros, la disposición de los alimentadores y la instalación de protecciones. Se exige, por ejemplo, que las conexiones sean accesibles para su revisión y mantención, que se utilicen materiales resistentes a la corrosión en ambientes adversos, y que se respeten las distancias mínimas de seguridad en el montaje de los equipos.",
                                "Se trata uno de los capítulos más extensos y relevantes del DS 8/2019. Aquí se abordan tanto las protecciones contra contactos directos e indirectos como la exigencia de dispositivos de corte automático, la selección y calibración de interruptores diferenciales y el dimensionado de sistemas de puesta a tierra.",
                                "El decreto precisa las exigencias técnicas para los tableros eléctricos (dimensiones, materiales, accesibilidad, señalización) y para los alimentadores (tipo de conductor, capacidad, protección contra sobrecargas y cortocircuitos). Estos elementos son considerados nodales para la seguridad y el funcionamiento de cualquier instalación.",
                                "Finalmente, el DS 8/2019 estipula los procedimientos de inspección, pruebas y certificaciones que deben cumplir las instalaciones antes de ser puestas en servicio. Se exige la intervención de instaladores eléctricos autorizados y la certificación por parte de la SEC, promoviendo el estándar de calidad y la seguridad en todo el ciclo de vida de la instalación eléctrica.",
                                "Fundamentos Técnicos del DS 8/2019",
                                "Los fundamentos técnicos del DS 8/2019 responden tanto a la experiencia nacional como a estándares internacionales de seguridad eléctrica, en especial los de la IEC. Según Roldán Viloria (2008), la adecuada protección contra los riesgos eléctricos requiere considerar variables como el tipo de tensión, la potencia instalada, la calidad de los materiales y las condiciones ambientales.",
                                "A continuación, se detallan algunos de los aspectos técnicos más relevantes que aborda el DS 8/2019:",
                                "Capacidad de los conductores: Se exige que la sección mínima de los conductores eléctricos sea suficiente para evitar el calentamiento excesivo y la caída de tensión más allá de lo permitido por la normativa, preservando así la eficiencia y durabilidad de la instalación.",
                                "Protección ante sobreintensidades: Todo circuito debe contar con dispositivos de protección que corten automáticamente la corriente en caso de sobrecarga o cortocircuito.",
                                "Dispositivos diferenciales: Se establece la obligatoriedad de instalar interruptores diferenciales en todos los circuitos que alimentan puntos de utilización en ambientes húmedos o exteriores.",
                                "Puesta a tierra: El decreto especifica los métodos y exigencias para la correcta conexión de todas las partes metálicas accesibles de la instalación a un sistema de puesta a tierra, con el objetivo de derivar a tierra las corrientes de fuga y minimizar el riesgo de electrización de personas.",
                                "Protección de contactos directos e indirectos: Se exige el uso de barreras físicas, aislamiento y dispositivos de corte de energía para prevenir el acceso accidental o involuntario a partes activas de la instalación.",
                                "Condiciones de trabajo y señalización: Las áreas donde se localicen tableros eléctricos y cuadros de mando deben estar señalizadas, libres de obstáculos y contar con condiciones adecuadas de espacio y accesibilidad para facilitar la intervención de personal autorizado.",
                                "Normas de marcado y documentación: Es obligatorio el etiquetado claro y permanente de todos los circuitos, tableros y dispositivos de protección, así como la entrega de planos y memorias descriptivas al usuario final y a la SEC.",
                                "Actualización y Enfoque Global",
                                "Un aspecto relevante del DS 8/2019 es su vocación de actualización y armonización con las mejores prácticas internacionales. Como señala Roldán Viloria (2008), el dinamismo tecnológico de la industria eléctrica demanda una revisión y actualización periódica de los estándares nacionales para mantenerse a la par de los avances en materiales, equipos, métodos de protección y sistemas de gestión.",
                                "El enfoque global del DS 8/2019 se evidencia en la adopción de principios y criterios técnicos inspirados en estándares IEC, IEEE y en referencias normativas de países desarrollados, con el fin de integrar la industria eléctrica chilena en los circuitos productivos mundiales y facilitar la adopción de nuevas tecnologías, como la integración de sistemas fotovoltaicos de baja tensión y la electromovilidad.",
                                "Beneficios y Desafíos de la Implementación del DS 8/2019",
                                "La implementación del DS 8/2019 aporta múltiples beneficios para el sector eléctrico chileno:",
                                "Mejoras en la seguridad personal y patrimonial: La correcta aplicación de los pliegos técnicos reduce significativamente los riesgos de electrocución, incendios por fallas eléctricas y daños a equipos eléctricos.",
                                "Homologación de procedimientos: La estandarización permite que proyectistas, instaladores y fiscalizadores trabajen con criterios comunes, facilitando la capacitación y la supervisión.",
                                "Facilitación de la integración tecnológica: Permite la incorporación segura de nuevas tecnologías, como generadores solares domiciliarios, autos eléctricos y sistemas de automatización inteligente.",
                                "Reconocimiento internacional: El cumplimiento de estándares internacionales favorece la exportación de servicios eléctricos y el intercambio tecnológico.",
                                "Sin embargo, su puesta en marcha también implica desafíos, entre los que destacan:",
                                "Capacitación permanente del personal: La actualización tecnológica exige que los profesionales del sector se mantengan informados y capacitados en las nuevas exigencias y procedimientos.",
                                "Fiscalización efectiva: Requiere el fortalecimiento de los organismos de fiscalización (SEC) y la articulación con otros actores del sector público y privado.",
                                "Costos iniciales de adecuación: La implementación de nuevas protecciones y procedimientos puede incrementar los costos iniciales de algunos proyectos, aunque estos se ven compensados por una mayor seguridad y durabilidad de las instalaciones.",
                                "Difusión y sensibilización: Es fundamental que los usuarios finales comprendan la importancia del cumplimiento normativo para su propia seguridad, promoviendo así una cultura de prevención.",
                                "Ejemplo Aplicado: Instalación Eléctrica Residencial según DS 8/2019",
                                "A efectos pedagógicos, resulta útil ejemplificar cómo se aplica el DS 8/2019 a una instalación eléctrica residencial de baja tensión. Los pasos principales serían:",
                                "El proyectista eléctrico realiza el diseño considerando la potencia máxima demandada y seleccionando adecuadamente la sección de los conductores, la cantidad y el tipo de circuitos, así como los dispositivos de protección requeridos.",
                                "El diseño debe incorporar la protección adecuada contra contactos directos (aislamiento, barreras físicas, uso de tomas e interruptores normalizados) y contactos indirectos (puesta a tierra de las partes metálicas accesibles, dispositivos diferenciales).",
                                "Alimentadores y tableros son seleccionados y montados según las especificaciones técnicas, asegurando su localización en espacios accesibles y ventilados, y señalizando correctamente todos los elementos.",
                                "El instalador eléctrico certificado ejecuta el montaje según los procedimientos establecidos por la normativa, documentando cada paso mediante protocolos y planos eléctricos.",
                                "Antes de poner en marcha la instalación, se efectúan pruebas de resistencia de aislamiento, funcionalidad de los dispositivos de protección y verificación de la continuidad de la puesta a tierra.",
                                "La instalación es inspeccionada por la SEC, quien, si todo está conforme a norma, certifica y autoriza su puesta a disposición del usuario.",
                                "Este procedimiento asegura, siguiendo los lineamientos de las normas sectoriales (SEC) y las recomendaciones de Roldán Viloria, que toda instalación eléctrica cumpla con los estándares más exigentes de seguridad y eficiencia.",
                                "El Decreto Supremo N° 8 de 2019 representa una pieza clave en el marco normativo chileno para las instalaciones eléctricas de baja tensión. Al establecer requisitos técnicos claros, actualizados y alineados con las mejores prácticas internacionales, contribuye de manera significativa al desarrollo seguro y sostenible del sector eléctrico nacional.",
                                "Los Pliegos Técnicos DS 8/2019 orientan desde el diseño hasta la fiscalización de las instalaciones eléctricas, favoreciendo la protección de personas y bienes, la integración de nuevas tecnologías y la articulación con tendencias globales de eficiencia y sostenibilidad energética. Se trata, en definitiva, de una normativa indispensable para el ejercicio profesional y técnico en el ámbito eléctrico en Chile y para el posicionamiento de la industria en el contexto global.",
                                "Roldán Viloria, José (2008). Fuentes de energía. Madrid: Paraninfo.",
                                "Superintendencia de Electricidad y Combustibles (SEC) (200-). Normas Técnicas Sector Electricidad. Santiago de Chile: SEC.",
                                "-----------------------------"
                            ]} />

                        </ExpansionTile>

                        <ExpansionTile title="Sistemas de Distribución y Empalmes" icon={Zap} defaultOpen={false}>
                            <SectionHeader title="Introducción" />
                            <Paragraph>Sistemas de Distribución y Empalmes</Paragraph>
                            <SectionHeader title="Introducción" />
                            <List items={[
                                "En el contexto de la industria eléctrica, los sistemas de distribución y empalmes constituyen componentes esenciales para el suministro seguro, confiable y eficiente de energía eléctrica tanto en entornos residenciales como industriales. La correcta comprensión y aplicación de estos conceptos es crucial para el diseño, construcción y mantención de instalaciones eléctricas, garantizando la continuidad del servicio con cumplimiento de las normativas vigentes y resguardando la seguridad de las personas y los bienes materiales involucrados.",
                                "En este texto, basado en la bibliografía recomendada: Roldán Viloria, José. Fuentes de energía (2008) y las Normas Técnicas Sector Electricidad, editadas por la Superintendencia de Electricidad y Combustible de Chile (SEC), se analizan los aspectos fundamentales de los sistemas de distribución y empalmes, su clasificación, normativa aplicable, y los desafíos técnicos y operativos más relevantes en el ámbito global, haciendo énfasis en la experiencia chilena y las regulaciones más actuales.",
                                "Los sistemas de distribución eléctrica constituyen el conjunto de procesos técnicos y dispositivos destinados al transporte de energía eléctrica desde los centros de transformación o subestaciones de distribución hasta el usuario final. La función principal de estos sistemas es la entrega de energía eléctrica en condiciones óptimas de calidad (tensión, frecuencia y continuidad), minimizando las pérdidas y asegurando la protección de personas y bienes, aspectos especialmente abordados en la normativa chilena a través de los Pliegos Técnicos DS 8/2019 y la regulación de la SEC.",
                                "Según Roldán Viloria (2008), los sistemas de distribución constituyen la etapa final del proceso de suministro eléctrico, posterior a la generación y transmisión. Se caracterizan por operar a tensiones menores respecto de los sistemas de transmisión, lo que permite una adaptación más segura y económica al entorno urbano, rural o industrial donde se encuentran los consumidores.",
                                "Un sistema de distribución eléctrica está compuesto por diversos elementos, entre los que destacan:",
                                "Líneas de distribución",
                                "Centros de transformación",
                                "Empalmes y acometidas",
                                "Tableros de distribución",
                                "Elementos de protección y maniobra (interruptores automáticos, fusibles, seccionadores)",
                                "Sistemas de puesta a tierra",
                                "Cada uno de estos componentes cumple un propósito específico dentro del sistema, desde recibir la energía eléctrica en media tensión, transformar su valor hasta las tensiones de utilización, distribuirla internamente y finalmente entregarla al usuario de manera segura, eficiente y conforme a los requisitos legales vigentes.",
                                "Los sistemas de distribución se clasifican según distintos criterios, principalmente en función del ámbito de aplicación y el nivel de tensión en que operan. A continuación, se abordan las clasificaciones más relevantes:",
                                "Distribución primaria: Se refiere a los sistemas que operan en media tensión, habitualmente entre 1 kV y 35 kV. Su función principal es transportar la energía desde las subestaciones hasta los centros de transformación más cercanos a las zonas de consumo.",
                                "Distribución secundaria: Trabaja a tensiones bajas (habitualmente entre 220 V y 400 V), entregando la energía directamente al usuario final, ya sea domicilios, pequeños comercios o industrias pequeñas.",
                                "Sistemas radiales: Son aquellos en los que la energía fluye desde un único punto de alimentación hacia los usuarios finales. Son sencillos y económicos, pero en caso de fallo, un gran número de consumidores queda sin suministro.",
                                "Sistemas en anillo: Consisten en una estructura cerrada, donde cada punto puede ser alimentado desde dos lados distintos. Aporta mayor seguridad y continuidad, aunque implica un mayor costo de instalación.",
                                "Sistemas mallados: Implementados usualmente en centros urbanos de alta densidad, permiten múltiples vías de alimentación, asegurando el suministro ante eventuales fallas.",
                                "Distribución aérea: Consiste en el tendido de conductores por postes elevados. Es más económica y facilita el mantenimiento, aunque es más vulnerable a condiciones ambientales adversas.",
                                "Distribución subterránea: Consiste en ductos y canalizaciones bajo tierra. Si bien requiere mayor inversión, es más seguro, duradero y estéticamente apropiado para zonas urbanas.",
                                "La normativa chilena contempla ambos tipos de instalaciones, exigiendo condiciones técnicas específicas y procedimientos de seguridad adecuados a cada modalidad.",
                                "El empalme eléctrico es el punto de conexión entre la red de distribución y la instalación interna del usuario. Constituye la frontera técnica, operativa, y en la mayoría de los casos, legal, entre la responsabilidad de la empresa distribuidora y la del propietario de la instalación. Según Normas Técnicas Sector Electricidad (SEC), el empalme debe cumplir requisitos de calidad, continuidad y protección acordes con la normativa vigente (principalmente los Pliegos Técnicos DS 8/2019).",
                                "El correcto diseño y ejecución del empalme incide directamente en la seguridad de la instalación y en la prevención de accidentes eléctricos, por lo que su supervisión debe realizarse por personal calificado y autorizado por la autoridad competente.",
                                "Existen diversos tipos de empalmes, diferenciados según el tipo de usuario, la potencia demandada y el tipo de sistema de distribución al que se conecta la instalación. Generalmente, se distinguen:",
                                "Empalmes monofásicos: Corresponden a instalaciones que requieren una sola fase y neutro, típicos de instalaciones residenciales o pequeños comercios, alimentados habitualmente a 230 V.",
                                "Empalmes trifásicos: Utilizados cuando la carga supera cierto umbral o cuando el usuario demanda energía para maquinarias que requieren alimentación trifásica. Se utilizan tensiones de 400 V, y pueden incluir conexiones estrella con neutro o triángulo sin neutro.",
                                "Empalmes especiales: Aplicables a usuarios con requerimientos importantes de potencia o características particulares (hospitales, edificios de gran altura, industrias, etc.), donde se emplean soluciones técnicas y protecciones de mayor complejidad.",
                                "Los empalmes deben contar con elementos de protección tales como interruptores automáticos, fusibles, dispositivos de protección diferencial y sistemas adecuados de puesta a tierra. La normativa especifica, entre otros aspectos, los tipos de materiales a emplear, el calibre de los conductores, la disposición física y la obligatoriedad de sellos, protecciones mecánicas y acceso restringido a personal no autorizado.",
                                "Chile cuenta con una vasta legislación y normativa técnica que regula todo el proceso de distribución de energía eléctrica, prestando particular atención a los aspectos de seguridad en los empalmes y en la correcta operación de las redes eléctricas.",
                                "Pliegos Técnicos DS 8/2019: Principal cuerpo normativo de referencia para el diseño, construcción y recepción de instalaciones eléctricas de baja tensión, estableciendo exigencias particulares para sistemas de distribución, empalmes e instalaciones interiores.",
                                "Normas Técnicas de la Superintendencia de Electricidad y Combustibles (SEC): Proveen especificaciones detalladas sobre materiales, métodos constructivos, pruebas de funcionamiento y requisitos de protección contra contactos directos e indirectos.",
                                "Normas internacionales: Como las normas IEC, han sido progresivamente incorporadas a la regulación chilena, posibilitando una adecuación al contexto global y a los desafíos de innovación tecnológica.",
                                "La obligatoriedad de cumplir estas normas está determinada por la ley y su fiscalización recae en la SEC. De acuerdo con el DS 8/2019, todo empalme debe ser ejecutado por instaladores autorizados, y su diseño debe garantizar condiciones óptimas de seguridad, evitando riesgos de electrocución, incendio o daño a equipos.",
                                "El diseño de un sistema de distribución y sus empalmes depende de variables como la demanda energética prevista, la topografía del lugar, la normativa aplicable, los factores ambientales y la proyección de crecimiento futuro. Los criterios fundamentales, según el Pliego Técnico DS 8/2019 y estándares internacionales, incluyen:",
                                "Selección adecuada de conductores: Eligiendo tipos y calibres idóneos para la corriente máxima esperada, considerando caídas de tensión permitidas.",
                                "Protección contra sobrecargas y cortocircuitos: Incorporando dispositivos automáticos de desconexión, fusibles y sistemas de seccionamiento.",
                                "Protección diferencial: Es obligatoria, en particular para locales húmedos o exteriores, y en todo tipo de empalmes residenciales.",
                                "Seccionamiento visible: Debe garantizar la posibilidad de bloqueo o retiro seguro de cualquier fuente de alimentación durante labores de mantención o emergencia.",
                                "Identificación clara de fases y neutro: El código chileno exige códigos de colores y rotulación inequívoca.",
                                "Sistemas de puesta a tierra: Todos los empalmes deben incluir dispositivos de puesta a tierra, con valores de resistencia máximos acordes a la normativa.",
                                "Ubicación y protección física: El empalme y los sistemas de distribución deben encontrarse en lugares accesibles para inspección, pero protegidos ante acceso de personas no autorizadas y eventos climáticos.",
                                "Además, la legislación establece protocolos de pruebas previas a la puesta en servicio, registros y documentación técnica obligatoria, así como la necesidad de inspección periódica por parte de la autoridad.",
                                "El avance tecnológico y las nuevas formas de generación descentralizada (incluso a nivel domiciliario con fuentes renovables no convencionales) suponen nuevos retos para la operación y diseño de los sistemas de distribución y la correcta utilización de los empalmes eléctricos.",
                                "Entre los principales desafíos técnicos destacan:",
                                "La integración de energías renovables, como la solar y eólica, que requieren flexibilidad en la red y sistemas de empalme preparados para la bidireccionalidad de los flujos eléctricos.",
                                "La expansión y densificación de zonas urbanas, que exige optimizar el espacio y reducir el impacto visual y ambiental de las redes.",
                                "El requerimiento de mayor calidad en el suministro, minimizando interrupciones y mejorando la resistencia frente a fenómenos climáticos extremos.",
                                "La necesidad de sistemas inteligentes de medición y protección, que permitan una gestión automatizada de la carga y una supervisión en tiempo real.",
                                "Todos estos factores han llevado a la implementación creciente de redes de distribución inteligentes (\"smart grids\") y a la innovación constante en los sistemas de empalme y protección asociados.",
                                "La gestión moderna de los sistemas de distribución y empalmes demanda atención especial a los impactos medioambientales y a la seguridad. Según Roldán Viloria (2008) y la normativa de la SEC, las mejores prácticas deben considerar:",
                                "Selección de materiales respetuosos con el entorno y con bajo impacto ambiental.",
                                "Implementación de sistemas de reducción de pérdidas eléctricas y de eficiencia energética.",
                                "Cumplimiento estricto de las distancias mínimas de seguridad, tanto en instalaciones aéreas como subterráneas.",
                                "Establecimiento de barreras físicas y dispositivos de señalización en áreas de riesgo.",
                                "En el marco legal vigente, toda intervención en las redes de distribución y en los empalmes debe estar acompañada de evaluación de riesgos, protocolos de trabajo seguro, y documentación técnica debidamente registrada y conservada.",
                                "Considerando la normativa y la realidad técnica chilena, a continuación se expone un ejemplo esquemático de la aplicación de las normas a un caso real:",
                                "Una vivienda nueva en una zona periurbana debe conectar su instalación eléctrica interna a la red de distribución pública. Según el DS 8/2019:",
                                "El usuario solicita el servicio a la compañía distribuidora, indicando la carga prevista y demás características de la propiedad.",
                                "La empresa evalúa el punto de conexión más cercano y define el tipo de empalme (monofásico o trifásico), la sección mínima del conductor y los requisitos de protección.",
                                "El instalador autorizado ejecuta el empalme, instalando dispositivos de protección contra sobrecarga, diferencial, y conecta el sistema de puesta a tierra según los valores indicados por la normativa.",
                                "Se realiza una inspección inicial y pruebas de funcionamiento, que deben ser registradas y sometidas a verificación por la SEC antes de la energización definitiva.",
                                "Este proceso garantiza un suministro seguro, trazable y conforme a la regulación, previniendo accidentes y permitiendo la solución expedita ante eventuales fallas del sistema.",
                                "La globalización y el rápido avance tecnológico han generado una convergencia en los estándares y prácticas de distribución y empalmes eléctricos en todo el mundo. Algunas de las tendencias actuales incluyen:",
                                "Integración de monitoreo en línea y sistemas inteligentes de gestión de redes.",
                                "Desarrollo de empalmes rápidos y modulares, adaptados para la fácil integración de nuevas fuentes de energía.",
                                "Estándares internacionales unificados (basados en la normativa IEC) que facilitan la interoperabilidad y el comercio global.",
                                "Mayor exigencia en la eficiencia energética y la reducción de la huella de carbono asociada a las redes eléctricas.",
                                "Creciente incorporación de dispositivos de protección avanzados, con capacidades de diagnóstico y respuesta automática a fallas.",
                                "En este contexto, la formación técnica y la actualización permanente de los profesionales del sector son vitales para garantizar que las instalaciones nuevas y existentes estén a la vanguardia en seguridad, eficiencia y cumplimiento normativo.",
                                "Los sistemas de distribución y empalmes eléctricos constituyen el eslabón final y fundamental en la cadena de suministro de energía eléctrica, siendo responsables de la entrega segura y eficiente de electricidad a millones de usuarios en todo el mundo. El cumplimiento de la normativa vigente, la selección adecuada de materiales, el diseño cuidadoso y la ejecución profesional de los empalmes, bajo los lineamientos de los Pliegos Técnicos DS 8/2019 y las Normas de la SEC, garantizan la protección de las personas, la continuidad en el suministro y la adaptación a los desafíos medioambientales y tecnológicos globales.",
                                "El estudio profundo de estos sistemas y la aplicación práctica de la normativa son competencias clave para los técnicos y profesionales eléctricos, quienes deben comprometerse con la mejora continua y la innovación, respondiendo así a las demandas de sostenibilidad y seguridad requeridas por el entorno global y local.",
                                "Roldán Viloria, José. Fuentes de energía. Madrid: Paraninfo, 2008.",
                                "Normas Técnicas Sector Electricidad. Santiago de Chile: Superintendencia de Electricidad y Combustible (SEC).",
                                "------------------------"
                            ]} />
                            <SubExpansionTile title="3. Clasificación de los Sistemas de Distribución">
                                <SectionHeader title="3.1. Según el Nivel de Tensión" />
                                <SectionHeader title="3.2. Según la Configuración del Sistema" />
                                <SectionHeader title="3.3. Según la Naturaleza de la Red" />
                            </SubExpansionTile>


                        </ExpansionTile>

                        <ExpansionTile title="Medidas de protección contra contacto directo" icon={ShieldCheck} defaultOpen={false}>
                            <SectionHeader title="Introducción" />
                            <Paragraph>Medidas de Protección Contra Contacto Directo en Instalaciones de Baja Tensión</Paragraph>
                            <SectionHeader title="Introducción" />
                            <Paragraph>La seguridad en la industria eléctrica es un pilar fundamental para el desarrollo y operación adecuada de cualquier instalación eléctrica. En particular, el contacto directo con partes activas de los sistemas eléctricos representa un riesgo importante tanto para las personas como para la integridad de las instalaciones y los equipos. Por esta razón, la normativa chilena, concretamente el DS 8/2019 y las Normas Técnicas del Sector Electricidad dictadas por la Superintendencia de Electricidad y Combustibles (SEC), así como los lineamientos internacionales y buenas prácticas recogidas globalmente, enfatizan la importancia de implementar medidas específicas de protección contra el contacto directo.</Paragraph>
                            <Paragraph>Este texto busca aportar una visión exhaustiva sobre el significante tema de las medidas de protección contra contacto directo en las instalaciones eléctricas de baja tensión, cubriendo los aspectos fundamentales desde la perspectiva técnica, normativa y práctica. Además, se apoya en la bibliografía esencial del sector, tales como “Fuentes de energía” de José Roldán Viloria (2008), y las Normas Técnicas del Sector Electricidad editadas por la SEC.</Paragraph>
                            <SubExpansionTile title="1. Concepto de Contacto Directo">
                                <Paragraph>El contacto directo en una instalación eléctrica se define como la exposición física accidental o intencionada de una persona a las partes activas energizadas de una instalación, es decir, aquellas partes normalmente destinadas a estar bajo tensión durante el funcionamiento ordinario del sistema. El contacto directo puede ocurrir de manera fortuita durante actividades de operación, mantenimiento o incluso en situaciones cotidianas, y representa un riesgo latente de electrocución o lesiones graves.</Paragraph>
                                <Paragraph>En términos generales, las partes activas incluyen conductores desnudos, barras colectoras, bornes de conexión y cualquier componente que, durante el funcionamiento normal del sistema, porte tensión eléctrica. Las instalaciones de baja tensión, conforme al DS 8/2019, comprenden todos aquellos sistemas cuyo voltaje nominal no exceda los 1.000 voltios en corriente alterna o 1.500 voltios en corriente continua.</Paragraph>
                                <Paragraph>De acuerdo a la bibliografía referida, la prevención del contacto directo constituye uno de los elementos básicos del diseño y operación segura de los sistemas eléctricos. Las estrategias y dispositivos de protección empleados tienen por objetivo limitar o eliminar por completo la posibilidad de que una persona pueda ponerse en contacto, de forma intencional o accidental, con las partes activas de una instalación.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="2. Fundamentación Normativa">
                                <Paragraph>En el contexto nacional chileno, la protección contra contacto directo está normada principalmente a través del Decreto Supremo (DS) 8/2019 del Ministerio de Energía, que establece los requisitos técnicos de instalación y operación de los sistemas de baja tensión. Este cuerpo normativo hace eco de estándares internacionales, integrando exigencias y recomendaciones que enmarcan buenas prácticas en seguridad eléctrica.</Paragraph>
                                <Paragraph>Por otro lado, las Normas Técnicas del Sector Electricidad, emitidas por la SEC, especifican los procedimientos, dispositivos y métricas que deben considerarse para el correcto resguardo de los usuarios y trabajadores. Estas normas se alinean con principios globales establecidos en normas internacionales como la IEC 60364, entre otras, fijando criterios mínimos exigibles en las etapas de planificación, ejecución y mantenimiento de instalaciones eléctricas.</Paragraph>
                                <Paragraph>En “Fuentes de energía” (Roldán Viloria, 2008), se destaca la importancia de la doble barrera de seguridad, el aislamiento y el enclavamiento como mecanismos prioritarios para evitar el contacto accidental con elementos energizados, así como la educación y formación permanente de los operarios y técnicos que participan en el sector.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="3. Principios de Protección Contra Contacto Directo">
                                <Paragraph>El diseño de medidas de protección debe considerar tanto el contexto de la instalación como los riesgos particulares derivados del uso, el entorno (ambientes secos, húmedos, polvorientos, con presencia de materiales corrosivos, etc.), y el perfil de los posibles usuarios. En este sentido, de acuerdo con la normativa y literatura técnica, existen diversos principios requeridos para asegurar la protección contra contacto directo:</Paragraph>
                                <Paragraph>Imposibilitar el acceso a partes activas mediante barreras físicas o envolventes adecuadas.</Paragraph>
                                <Paragraph>Emplear aislamiento suficientemente robusto y resistente sobre todos los conductores y componentes energizados.</Paragraph>
                                <Paragraph>Adoptar sistemas de muy baja tensión de seguridad en zonas de riesgo elevado.</Paragraph>
                                <Paragraph>Utilizar dispositivos de protección adicionales, como interruptores diferenciales o dispositivos de corriente residual, especialmente en áreas críticas.</Paragraph>
                                <Paragraph>Garantizar el correcto mantenimiento y señalización de los sistemas de protección, así como la capacitación de los usuarios.</Paragraph>
                                <Paragraph>El cumplimiento combinado de estas medidas constituye el núcleo de la estrategia de protección recomendada tanto por el DS 8/2019 como por los estándares internacionales y la bibliografía técnica.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="4. Dispositivos y Métodos para la Protección Contra Contacto Directo">
                                <Paragraph>Existen diferentes tipos de soluciones técnicas que, solas o en conjunto, permiten reducir a niveles muy bajos la probabilidad de un contacto directo. Con base en lo establecido por el DS 8/2019, las Normas Técnicas de la SEC y “Fuentes de energía”, se pueden clasificar de la siguiente forma:</Paragraph>
                                <SectionHeader title="4.1. Aislamiento de las Partes Activas" />
                                <Paragraph>El aislamiento constituye la primera y más básica medida de seguridad. Esto implica recubrir todas las partes activas de la instalación con materiales dieléctricos —plásticos, resinas, cerámicas u otros— que actúen como una barrera física y eléctrica. Los cables empleados deben portar doble aislamiento siempre que sea posible, mientras que conexiones, empalmes y terminales requieren cubiertas o recintos que imposibiliten el acceso accidental.</Paragraph>
                                <Paragraph>El DS 8/2019 establece que cualquier aislamiento empleado debe certificarse conforme a las pruebas eléctricas y mecánicas estandarizadas. En aplicaciones industriales, el mantenimiento periódico y la evaluación del estado del aislamiento son prácticas recomendadas por la bibliografía (Roldán Viloria, 2008), ya que la degradación puede producir fallos imprevisibles y exponer a los usuarios a riesgos considerables.</Paragraph>
                                <SectionHeader title="4.2. Envolventes, Barreras y Cubiertas" />
                                <Paragraph>Otra medida esencial es la utilización de envolventes o cubiertas robustas alrededor de los equipos y dispositivos eléctricos. Estas envolventes pueden estar fabricadas de materiales aislantes o metálicos adecuadamente conectados a tierra, y deben impedir la introducción involuntaria de manos, dedos, herramientas o cualquier objeto conductor.</Paragraph>
                                <Paragraph>Las Normas Técnicas de la SEC determinan los grados de protección mínimos (según el sistema IP - Ingress Protection) que deben tener las cajas, tableros, armarios y canalizaciones eléctricas en función del ambiente donde están instaladas. Por ejemplo, áreas expuestas a polvo o humedad requieren grados IP más altos, lo que previene no solo el acceso accidental sino también el deterioro de los elementos internos (Roldán Viloria, 2008).</Paragraph>
                                <SectionHeader title="4.3. Colocación Fuera del Alcance" />
                                <Paragraph>Una técnica complementaria a las anteriores es el posicionamiento de las partes activas fuera del alcance habitual de las personas. Este enfoque se basa en la distancia: instalar cables, barras colectoras o cuadros de distribución en lugares elevados, espacios cerrados o locales de acceso restringido. La combinación de señalización y acceso limitado refuerza el efecto de esta medida.</Paragraph>
                                <Paragraph>El DS 8/2019 señala que los tableros y armarios eléctricos de uso industrial deben instalarse en zonas no transitadas por el público general, y sólo personal autorizado puede acceder a ellos. Esta disposición disminuye el riesgo de contacto accidental, sobre todo en recintos con alta circulación.</Paragraph>
                                <SectionHeader title="4.4. Señalización y Advertencias" />
                                <Paragraph>La correcta señalización es un complemento indispensable. Consiste en ubicar letreros, etiquetas y avisos visibles en los puntos de riesgo, advirtiendo sobre la presencia de tensión eléctrica. Las propias Normas Técnicas del Sector Electricidad establecen el diseño, dimensiones, pictogramas y localización precisa de las advertencias más habituales, como riesgo de electrocución, prohibición de acceso a personal no autorizado y uso obligatorio de Equipos de Protección Personal (EPP).</Paragraph>
                                <Paragraph>Estas señales deben ser claras, indestructibles y resistentes a las condiciones ambientales del lugar de instalación. De acuerdo con “Fuentes de energía”, la pedagogía de la señalización —es decir, su correcta interpretación por parte de los usuarios— es tan importante como la presencia física de los letreros (Roldán Viloria, 2008). Se recomienda complementar la señalización con acciones formativas permanentes.</Paragraph>
                                <SectionHeader title="4.5. Utilización de Tensiones Reducidas (SELV y PELV)" />
                                <Paragraph>En ambientes donde el riesgo de contacto es elevado (por ejemplo, espacios húmedos, equipos expuestos al contacto con agua o usuarios descalzos), el uso de sistemas de muy baja tensión de seguridad (SELV: Safety Extra Low Voltage) o protegidos por muy baja tensión (PELV: Protected Extra Low Voltage) es una medida eficiente. En estos sistemas, la tensión funcional máxima aplicada es tan baja (generalmente por debajo de 24V o 50V según el estándar) que, incluso en caso de contacto directo, el riesgo para las personas es prácticamente nulo.</Paragraph>
                                <Paragraph>El DS 8/2019 y las Normas Técnicas chilenas estipulan la configuración exacta y condiciones de uso de estos sistemas. Su correcta implementación requiere transformadores de aislamiento y una detallada planificación del tendido eléctrico, evitando la existencia de elementos conductores accesibles susceptibles de transmitir voltaje por error.</Paragraph>
                                <SectionHeader title="4.6. Dispositivos de Corte Automático de la Alimentación" />
                                <Paragraph>Aunque los dispositivos de corte automático —principalmente los interruptores diferenciales o dispositivos de corriente residual— suelen asociarse con la protección contra contacto indirecto, cumplen también una función importante limitando la exposición en algunas situaciones de contacto directo. Estos interruptores monitorean las corrientes de fuga a tierra; si detectan una diferencia significativa, interrumpen el suministro en milisegundos, reduciendo el tiempo de exposición al riesgo.</Paragraph>
                                <Paragraph>La normativa chilena promueve la instalación de estos equipos en todos los circuitos de tomacorrientes, zonas húmedas y recintos de uso público. No obstante, el DS 8/2019 aclara que los diferenciales sólo pueden considerarse una medida complementaria y no principal, ya que no impiden el contacto directo, sólo atenúan sus consecuencias en caso de que se produzca.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="5. Evaluación de la Eficacia de las Medidas de Protección">
                                <Paragraph>La adecuación, selección y mantenimiento de las medidas de protección es tan relevante como su implementación inicial. En este sentido, la normativa y la literatura técnica insisten en la necesidad de inspecciones periódicas, ensayos funcionales y la actualización permanente de los sistemas según avances tecnológicos y cambios en los patrones de uso.</Paragraph>
                                <Paragraph>El DS 8/2019 dispone la obligación de inspecciones regulares por parte de instaladores eléctricos autorizados, los que deben certificar la continuidad del aislamiento, integridad de las envolventes y correcto funcionamiento de los dispositivos de corte. Las Normas Técnicas de la SEC, en consonancia, especifican los protocolos y registros que se deben llevar para el control del estado de las protecciones.</Paragraph>
                                <Paragraph>Como complemento a los aspectos técnicos, “Fuentes de energía” (Roldán Viloria, 2008) enfatiza la educación continua del personal técnico y usuario final como un pilar fundamental. La comprensión cabal de los riesgos, las limitaciones de cada medida y las prácticas recomendadas en caso de emergencia aseguran la eficiencia de los sistemas instalados.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="6. Ejemplos Prácticos y Aplicaciones Globales">
                                <Paragraph>A nivel global, la aplicación de medidas para prevenir el contacto directo varía de acuerdo con la evolución tecnológica, recursos disponibles y nivel de cumplimiento de estándares internacionales. Países con trayectoria en seguridad eléctrica, como Alemania, Francia, Japón y Estados Unidos, integran estas medidas a través de marcos regulatorios rigurosos y campañas educativas de alto alcance.</Paragraph>
                                <Paragraph>En contextos de vivienda residencial, las medidas más habituales incluyen tomacorrientes protegidos por cubiertas, cableado con doble aislamiento y envolventes plásticas resistentes. En espacios industriales, se agregan barreras metálicas, sistemas de enclavamiento y acceso condicionado con llaves o tarjetas, además de señalización reforzada y dispositivos automáticos de corte.</Paragraph>
                                <Paragraph>En ambientes con alto tráfico de público (centros comerciales, hospitales, estaciones de transporte), la combinación de sistemas de muy baja tensión, envolventes IP elevados y programas de mantenimiento periódico forma parte integral de la política de prevención recomendada por los organismos internacionales y replicada en la normativa chilena.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="7. Limitaciones y Desafíos en la Implementación">
                                <Paragraph>Si bien la normativa y las soluciones técnicas ofrecen altos niveles de protección, existen limitaciones y desafíos. Las soluciones basadas en aislamiento pueden degradarse por envejecimiento, acción mecánica, agentes químicos o humedad; las envolventes pueden ser removidas o dañadas accidentalmente; la señalización puede perderse o no interpretarse correctamente; y los sistemas diferenciales pueden presentar fallos si no se mantienen adecuadamente.</Paragraph>
                                <Paragraph>En el ámbito global, los desafíos se acentúan en zonas rurales o países en desarrollo, donde la falta de recursos, la carencia de formación profesional y la escasa fiscalización dificultan el pleno cumplimiento de los requisitos básicos. La literatura técnica y la experiencia internacional señalan la necesidad de redoblar los esfuerzos en educación preventiva, inspección periódica y actualización normativa para cerrar estas brechas.</Paragraph>
                            </SubExpansionTile>

                            <SectionHeader title="8. Conclusión" />
                            <Paragraph>Las medidas de protección contra contacto directo son un componente esencial en la seguridad de instalaciones eléctricas de baja tensión. Su implementación adecuada, conforme al DS 8/2019 y las Normas Técnicas del Sector Electricidad, reduce significativamente los riesgos de accidente eléctrico.</Paragraph>
                            <Paragraph>El aislamiento, las envolventes, la señalización, el uso de muy bajas tensiones y los dispositivos automáticos de protección, debidamente instalados y mantenidos, conforman una defensa robusta, pero su eficacia depende también de la educación, la fiscalización y el compromiso de todos los actores del sector. Las recomendaciones presentadas en “Fuentes de energía” (Roldán Viloria, 2008) y las experiencias internacionales refuerzan la visión de que la seguridad eléctrica es una responsabilidad compartida, dinámica y siempre perfectible.</Paragraph>
                            <SectionHeader title="Bibliografía" />
                            <Paragraph>Roldán Viloria, José. Fuentes de energía. Madrid: Paraninfo, 2008.</Paragraph>
                            <Paragraph>Superintendencia de Electricidad y Combustibles (SEC). Normas Técnicas del Sector Electricidad. Santiago de Chile: SEC.</Paragraph>
                            <Paragraph>Decreto Supremo N° 8/2019, Ministerio de Energía, Chile.</Paragraph>
                            <Paragraph>International Electrotechnical Commission (IEC). Norma IEC 60364 (Instalaciones eléctricas de baja tensión).</Paragraph>
                            <List items={[
                                "----------"
                            ]} />

                        </ExpansionTile>

                        <ExpansionTile title="Condiciones de Montaje y Condiciones del Medio" icon={Settings} defaultOpen={false}>
                            <SectionHeader title="Introducción" />
                            <Paragraph>Condiciones de Montaje y Condiciones del Medio</Paragraph>
                            <SectionHeader title="Introducción" />
                            <List items={[
                                "Las instalaciones eléctricas de baja tensión requieren una especial atención tanto en la etapa de diseño como en la ejecución y posterior mantenimiento. Uno de los aspectos más relevantes y normados internacional y nacionalmente, es la forma en la que deben ser montados los componentes y en cómo las condiciones del medio afectan a dichas instalaciones. La normativa chilena, incluyendo los Pliegos Técnicos DS 8/2019 del Ministerio de Energía, se encarga de definir parámetros y procedimientos que permitan resguardar la seguridad de las personas y equipos. En este sentido, el conocimiento y aplicación de estos estándares son fundamentales para el correcto funcionamiento, la durabilidad, la protección frente a riesgos eléctricos y la minimización de impactos medioambientales negativos. Este texto analiza en profundidad el tema, basándose en las referencias de Roldán Viloria, José (2008) y en las Normas Técnicas del Sector Electricidad de la SEC.",
                                "El “montaje” en una instalación eléctrica refiere a todas las actividades, procesos y elementos implementados para disponer y fijar los equipos, conductores, canalizaciones y accesorios en el emplazamiento donde funcionarán. Las “condiciones del medio” son todas aquellas variables inherentes al entorno físico, ambiental y operacional en el que se encuentra la instalación, incluyendo temperatura, humedad relativa, exposición a agentes químicos o mecánicos, existencia de polvo, vibraciones, presencia de agua, entre otros factores.",
                                "De acuerdo a los principios formales indicados en la bibliografía Fuentes de energía (Roldán Viloria, 2008) y en las Normas Técnicas de la SEC, el correcto entendimiento y gestión de ambas dimensiones es vital para garantizar la seguridad, la eficiencia y la permanencia de la instalación a lo largo del tiempo.",
                                "Toda instalación eléctrica debe cumplir no solo con los requerimientos funcionales, sino también, y de forma prioritaria, con las exigencias de seguridad que propenden a la protección de los usuarios, el personal de mantenimiento y la integridad de los equipos y materiales. El montaje adecuado reduce considerablemente el riesgo de accidentes, fallas prematuras y siniestros por incendio.",
                                "La normativa chilena resalta los siguientes objetivos primordiales del montaje correcto:",
                                "Evitar contactos directos e indirectos peligrosos",
                                "Preservar la funcionalidad y confiabilidad de la instalación",
                                "Permitir accesibilidad adecuada para mantenimiento y emergencia",
                                "Minimizar la degradación de materiales debido a factores ambientales",
                                "Garantizar la compatibilidad electromagnética y reducir interferencias",
                                "En este contexto, el diseño previo del montaje debe considerar no solo planos eléctricos, sino también la topografía, arquitectura y ambientes específicos en los que se desplegarán los elementos.",
                                "Los pliegos técnicos y normas internacionales (como la IEC 60364, referenciada por las normativas SEC) establecen una clasificación en función de los riesgos y exigencias ambientales:",
                                "Condiciones normales: ambientes interiores, sin exposición a agentes dañinos, temperatura y humedad controladas.",
                                "Condiciones severas: incluyen presencia de polvo, humedad alta, riesgos de corrosión, ambientes industriales, atmósferas explosivas, exposición a rayos UV, acciones mecánicas, vibraciones y riesgos de penetración de agua.",
                                "Condiciones extremas: aquellas instalaciones sometidas a agresiones químicas intensas, cambios bruscos de temperatura, cargas mecánicas excepcionales o ambientes salinos.",
                                "Los distintos entornos determinan los materiales, métodos de fijación, sistemas de protección y rutinas de inspección que deben ser seleccionados y diseñados por el instalador responsable.",
                                "La normativa DS 8/2019, publicada por el Ministerio de Energía y adoptada por la Superintendencia de Electricidad y Combustibles (SEC), establece requisitos mínimos que toda instalación de baja tensión debe cumplir respecto al montaje y el medio.",
                                "Entre los puntos destacados, considera:",
                                "Resistencia mecánica de conductores y canalizaciones: deben seleccionarse en función de la solicitación prevista, considerando factores como peso propio, esfuerzos de tracción, posible vandalismo, y posibles impactos.",
                                "Tolerancia a la temperatura ambiente: los materiales y dispositivos deben mantener su funcionalidad y características dentro de los rangos térmicos detallados en manuales de producto, adaptados también a fenómenos estacionales o ciclos industriales.",
                                "Protección ante agentes externos: siempre que el medio así lo exija, la canalización debe ser estanca, los tableros deben ser de grado de protección IP adecuado, y los elementos corrosibles deberán estar tratados o construidos en materiales resistentes.",
                                "Montaje seguro y accesible: el cableado debe estar tendido sobre soportes sólidos, con fijación adecuada, separaciones reglamentarias, y nunca interactuar con tuberías de agua o gas.",
                                "Identificación y señalización: en ambientes complejos o de riesgo específico, los componentes eléctricos deben estar claramente identificados y señalizados según normas de color y rotulación vigentes.",
                                "Además, la norma exige la adaptación de medidas correctivas si las condiciones del medio cambian tras la puesta en marcha de la instalación (por ejemplo, agregando ventilación, mejorando el encapsulamiento, etc.).",
                                "Roldán Viloria (2008) enfatiza la importancia de analizar detalladamente el ambiente de trabajo y, en base a ello, determinar materiales y métodos constructivos. Según el autor y la normativa SEC:",
                                "Ambientes húmedos: requieren conductores y canaletas con recubrimiento anti-corrosivo, conexiones selladas, dispositivos eléctricos con cubiertas que resistan ingreso de agua (por ejemplo, grado de protección IP54 o superior), y considerar el uso de transformadores de aislamiento.",
                                "Ambientes polvorientos: se recomiendan cajas y tableros totalmente cerrados (IP65 o superior), ventilaciones con filtros, revisión frecuente de contactos y limpieza programada.",
                                "Zonas de atmósferas explosivas: es obligatorio el uso de equipos a prueba de explosión (certificación Ex), canalizaciones embutidas, y protección suplementaria contra chispas.",
                                "Ambientes exteriores: el aislamiento UV de los materiales plásticos, la resistencia a la intemperie (lluvia, viento), y anclajes reforzados constituyen elementos no negociables en el diseño y ejecución.",
                                "Agricultura y zonas rurales: se recomienda el uso de canalizaciones elevadas o subterráneas, refuerzo de puestas a tierra (por presencia de humedad o fertilizantes corrosivos) y estructura de soporte a prueba de carga animal o maquinaria.",
                                "La normativa DS 8/2019 agrupa una serie de buenas prácticas y requisitos legales que aseguran el montaje correcto:",
                                "Las canalizaciones eléctricas deben montarse de tal forma que eviten el sobrecalentamiento, facilitando la disipación de calor y evitando el contacto directo prolongado con fuentes de calor externas.",
                                "Todo elemento expuesto al paso o presencia de personas debe estar debidamente protegido mediante resguardos físicos o instalado a una altura segura (nunca a menos de 2,50 m del suelo si contiene partes accesibles bajo tensión).",
                                "Los tableros eléctricos deben ser accesibles sólo al personal autorizado, y su montaje debe disuadir la manipulación por personal no capacitado.",
                                "Todo equipo eléctrico sensible debe ser montado sobre superficies firmes, niveladas, y, si corresponde, con sistemas de amortiguación frente a vibraciones.",
                                "Las terminales de conexión deben ser fácilmente accesibles para posterior verificación, pero sin exponer contactos activos al entorno.",
                                "La identificación de fases, neutros y puestas a tierra mediante códigos de color y etiquetas legibles es obligatoria en paneles y conductores principales.",
                                "La secuencia de montaje, los controles de calidad y la verificación mediante pruebas dieléctricas, mediciones de aislamiento, y pruebas de continuidad antes de la energización, son dispositivos normativos y de buena práctica ampliamente detallados por la SEC.",
                                "En las redes de baja tensión interiores y exteriores para la distribución pública o privada, la complejidad de los sistemas puede incrementar los desafíos del montaje. Es fundamental:",
                                "Mantener las distancias reglamentarias entre redes eléctricas y redes de servicios (teléfono, agua, gas, datos).",
                                "Utilizar postes, ductos, cámaras y registros certificados conforme a la normativa SEC.",
                                "Disponer los empalmes en lugares de fácil acceso para inspección y mantenimiento.",
                                "Garantizar la correcta ventilación natural o forzada en subestaciones, tableros o cámaras eléctricas subterráneas.",
                                "Evitar zonas de riesgo de inundación, acumulación de gases o exposición a descargas atmosféricas directas.",
                                "En todos los casos, la previsión y diseño de futuras ampliaciones o modificaciones debe estar considerada en la fase inicial de montaje para evitar derivaciones inseguras o instalaciones provisorias extendidas en el tiempo, lo que representa un incumplimiento normativo.",
                                "Además de la seguridad eléctrica, la normativa SEC y autores como Roldán Viloria (2008) insisten en la consideración de riesgos adicionales durante y después del montaje:",
                                "Evitar el uso de productos que liberen compuestos tóxicos o que entren en reacción con el ambiente (por ejemplo, ciertos barnices, adhesivos o aislamientos no homologados).",
                                "Programar rutinariamente el mantenimiento y la inspección, especialmente en ambientes agresivos donde el deterioro temprano es posible.",
                                "Aplicar programas de reciclaje y manejo de residuos eléctricos conforme a leyes medioambientales vigentes.",
                                "Capacitar regularmente a los operadores y mantenedores en prácticas seguras y en la identificación de riesgos del medio.",
                                "Insertar protecciones colectivas como ventilación artificial, barreras físicas, señalizaciones, entre otras, particularmente en trabajos que impliquen soldaduras, cortes, o aplicación de productos abrasivos.",
                                "En obras de gran escala, los asistentes al montaje deben ser informados sobre procedimientos de evacuación, primeros auxilios y manipulación segura de herramientas y equipos energizados. La planificación del montaje también debe minimizar el impacto sobre el entorno, especialmente en zonas de valor ecológico o patrimonial.",
                                "Para contextualizar, se presentan dos ejemplos ilustrativos:",
                                "En una planta agroindustrial de la zona sur de Chile, la presencia de humedad casi constante, polvo vegetal y atmósferas con amoniaco obliga a:",
                                "Selección de tubos y cajas eléctricas de PVC reforzado, resistentes a UV y agentes químicos.",
                                "Uso de tableros IP66 energizados mediante transformador de aislamiento.",
                                "Puesta a tierra reforzada y mallas enterradas en todos los puntos críticos.",
                                "Cabinas eléctricas remotamente localizadas y ventiladas, lejos de zonas de estanques o desechos.",
                                "Montajes elevados, sobre perfiles metálicos galvanizados, para evitar el contacto directo con agua o lodo.",
                                "En este caso, la instalación debe resistir la salinidad, los vientos y el vandalismo:",
                                "Uso de columnas de material compuesto no corrosible y bases anti vándalos.",
                                "Cableado de doble aislamiento protegido bajo nivel del suelo para cruces de calzada.",
                                "Elevada resistencia a UV en portalámparas y luminarias estancas.",
                                "Tableros de control resistentes a niebla salina, con disipación de calor y protección anti manipulación.",
                                "Todos los sistemas de fijación deben ser de acero inoxidable y zamac, según normas SEC.",
                                "Un aspecto fundamental y a veces descuidado es el registro documental de todas las etapas del montaje, conforme a la normativa y a las buenas prácticas recomendadas por la SEC y Roldán Viloria (2008).",
                                "Este registro debe incluir:",
                                "Plano “as built” (de obra ejecutada) con identificación de rutas, equipos y materiales finales.",
                                "Certificados de calidad de materiales y equipos, incluyendo fichas técnicas y hojas de seguridad.",
                                "Resultados de mediciones de prueba y ensayos de seguridad eléctrica.",
                                "Actas de entrega y recepción del montaje, con observaciones y recomendaciones",
                                "Registro de capacitaciones y autorizaciones de personal participante.",
                                "Este acervo documental respalda la calidad de la obra ante la fiscalización de la SEC, facilita el mantenimiento y permite la trazabilidad en caso de accidentes o necesidades de ampliación.",
                                "Las condiciones de montaje y las condiciones del medio constituyen una parte crítica pero a menudo subestimada en la ingeniería de instalaciones eléctricas de baja tensión. La correcta valoración de ambos aspectos resulta esencial para cumplir con la legislación chilena vigente, garantizar la seguridad y la eficiencia energética, y respetar las condiciones medioambientales del entorno. Los Pliegos Técnicos DS 8/2019, en conjunto con la experiencia internacional y las recomendaciones técnicas de especialistas como Roldán Viloria, brindan una hoja de ruta precisa para la selección de materiales, el diseño del montaje y la operación segura.",
                                "En síntesis, el conocimiento y aplicación de las normativas, sumado a una planificación técnica consciente de las características del medio, permitirán desarrollar obras eléctricas más seguras, eficientes y sostenibles a nivel global, anticipando los desafíos que plantea el crecimiento urbano, industrial y tecnológico del siglo XXI.",
                                "Roldán Viloria, José. (2008). Fuentes de energía. Madrid: Paraninfo.",
                                "Normas Técnicas Sector Electricidad. Santiago de Chile: SEC.",
                                "-----"
                            ]} />
                            <SubExpansionTile title="9. Casos prácticos y ejemplos de aplicación de normativa">
                                <SectionHeader title="9.1. Instalación en una planta agroindustrial" />
                                <SectionHeader title="9.2. Alumbrado público en zona urbana costera" />
                            </SubExpansionTile>


                        </ExpansionTile>

                        <ExpansionTile title="Espacios de trabajo en instalaciones eléctricas de baja tensión" icon={Power} defaultOpen={false}>
                            <SectionHeader title="Introducción" />
                            <List items={[
                                "Espacios de trabajo en instalaciones eléctricas de baja tensión",
                                "La seguridad en las instalaciones eléctricas de baja tensión es uno de los pilares fundamentales en la industria eléctrica, especialmente en el contexto de la generación, transmisión y distribución de la energía. Uno de los aspectos más relevantes en este ámbito es el relativo a los espacios de trabajo. Estos espacios están regulados por la normativa chilena, específicamente por los Pliegos Técnicos DS 8/2019 y las Normas Técnicas Sector Electricidad sancionadas por la Superintendencia de Electricidad y Combustibles (SEC).",
                                "El estudio y comprensión de los espacios de trabajo permite que los profesionales del área eléctrica puedan diseñar, construir y mantener instalaciones con altos estándares de seguridad, tanto para los operadores como para el público en general. Además, la correcta delimitación y acondicionamiento de estos espacios es importante para la prevención de accidentes eléctricos, optimización operativa y cumplimiento de los requerimientos legales aplicables. En este texto, desarrollado a partir de las referencias bibliográficas de Fuentes de energía (Roldán Viloria, 2008) y de las Normas Técnicas del sector (SEC), se abordarán en profundidad los criterios, fundamentos y exigencias que regulan los espacios de trabajo en instalaciones eléctricas de baja tensión, integrando también consideraciones globales y actuales de la industria.",
                                "Fundamento normativo: Pliegos Técnicos DS 8/2019 y normas SEC",
                                "Los Pliegos Técnicos DS 8/2019 constituyen el principal referente normativo en Chile para las instalaciones eléctricas interiores de baja tensión, estableciendo los requisitos mínimos de diseño, construcción, operación y mantenimiento que deben cumplir estos sistemas. Como complemento, las Normas Técnicas Sector Electricidad de la SEC detallan aspectos específicos para diversos componentes y condiciones de las instalaciones eléctricas, incluyendo los espacios de trabajo en torno a equipos eléctricos y tableros.",
                                "En ambos cuerpos normativos se enfatiza la importancia de garantizar condiciones seguras de acceso y mantenimiento para los trabajadores, así como de operación segura en ambientes frecuentemente expuestos a riesgos energéticos variados. Además, se reconoce el impacto del ambiente físico, la organización de los recintos y la correcta señalización como elementos fundamentales para la integridad de personas y bienes.",
                                "Definición y propósito de los espacios de trabajo",
                                "Los espacios de trabajo, dentro del contexto eléctrico, son superficies y volúmenes debidamente determinados alrededor de equipos y componentes eléctricos, destinados a permitir operaciones de inspección, conexión, desconexión, mantenimiento preventivo y correctivo, así como la sustitución o reparación de los mismos, todo ello en condiciones de seguridad y comodidad para el operador.",
                                "El propósito primordial de definir estos espacios reside en prevenir accidentes por contacto eléctrico directo e indirecto, facilitar el libre movimiento del personal autorizado y permitir la evacuación rápida en caso de emergencia. Además, estos espacios posibilitan una adecuada ventilación y disipación térmica de los equipos, reduciendo la aparición de fallas por acumulación de calor o por el acceso inadecuado a componentes energizados.",
                                "Dimensiones mínimas exigidas por normativa",
                                "La normativa chilena y los estándares internacionales especifican dimensiones mínimas y características de los espacios de trabajo en función del tipo de equipo eléctrico, su nivel de tensión, el acceso posible y la probabilidad de intervención.",
                                "De acuerdo con los Pliegos Técnicos DS 8/2019:",
                                "Frente a tableros de baja tensión (BT), debe reservarse un espacio libre horizontal de al menos 90 cm, medidos desde la superficie frontal del tablero hasta cualquier obstáculo fijo (pared, pilar, otro equipo, etc.).",
                                "La altura mínima libre recomendada sobre el plano de trabajo es de 2 metros, contados desde el piso terminado hasta el techo o cualquier elemento sobresaliente.",
                                "Debe dejarse un pasillo lateral, cuando proceda, de al menos 60 cm frente a los tableros y equipos eléctricos, pensando en maniobras de mantenimiento o reemplazo de partes.",
                                "En instalaciones con equipos de transformación o distribución accesibles para mantenimiento, se exigirá que los espacios de trabajo permitan la apertura y operación completa de puertas, tapas o interruptores sin restricciones, considerando también las trayectorias de retirada de partes, por ejemplo, celdas extraíbles.",
                                "Estas exigencias pueden variar al considerar instalaciones en condiciones especiales (ambientes húmedos, polvorientos, corrosivos o con vapores inflamables), detalladas explícitamente en las Normas Técnicas del sector eléctrico.",
                                "Características físicas de los espacios de trabajo",
                                "Más allá de la dimensión, la normativa señala características adicionales a observar en los espacios de trabajo eléctricos:",
                                "Superficie antideslizante: El piso debe ser firme, nivelado y con tratamiento antideslizante, especialmente frente a tableros con maniobra frecuente.",
                                "Iluminación: Los espacios deben estar convenientemente iluminados, tanto en condiciones normales como de emergencia, para asegurar la identificación clara de dispositivos y etiquetas.",
                                "Limpieza y orden: Se establece la prohibición de almacenar objetos ajenos a la función eléctrica en estos recintos para evitar obstrucciones y aumentar la seguridad operativa.",
                                "Ventilación: Adecuada para disipar el calor generado por los equipos y reducir la concentración de gases o polvo que puedan afectar su funcionamiento.",
                                "Accesibilidad: Deben disponerse accesos claros, sin barreras arquitectónicas, con puertas de apertura hacia el exterior o corredizas para facilitar la evacuación rápida en emergencias.",
                                "La correcta adecuación de estas condiciones asegura tanto la conformidad legal como la reducción de riesgos eléctricos y mecánicos en la operación cotidiana y durante intervenciones extraordinarias.",
                                "Espacios de trabajo frente a tableros y centros de distribución",
                                "Los tableros eléctricos y centros de distribución requieren especial atención en cuanto al diseño de su entorno inmediato debido a las frecuentes intervenciones de mantenimiento y a la concentración de dispositivos de protección y medida.",
                                "Según las Normas Técnicas Sector Electricidad y los Pliegos Técnicos DS 8/2019:",
                                "En tableros de baja tensión instalados en recintos cerrados, los espacios frontales deben permitir la apertura total de las cubiertas y la operación segura de las llaves y seccionadores.",
                                "En recintos donde el acceso sea restringido al personal calificado, se debe mantener señalización clara y sistemas de cierre o control de acceso, permitiendo a la vez la evacuación expedita frente a incidentes.",
                                "Cuando el tablero esté situado en un muro de tránsito, la localización debe evitar interferir con salidas de emergencia o bloquear rutas de circulación principales.",
                                "Un aspecto importante es la identificación permanente de los alimentadores, circuitos y dispositivos internos mediante rotulación resistente y visible, lo que facilita su localización y desarrollo seguro de intervenciones.",
                                "Factores ambientales y condiciones del medio",
                                "Los espacios de trabajo deben diseñarse considerando el ambiente físico en el que se encuentran insertos, ya que factores como la presencia de humedad, temperatura extrema, polvos, sustancias corrosivas o atmosferas explosivas inciden de manera crítica en las medidas de seguridad y en la configuración física de dichos espacios.",
                                "Siguiendo a Roldán Viloria (2008), los ambientes agresivos pueden requerir mayor holgura, materiales especiales o inclusiones adicionales como sistemas de climatización, deshumidificadores, pintura epóxica resistente o barreras físicas para aislar los equipos eléctricos de factores ambientales externos. Además, en ambientes exteriores es indispensable prever sistemas de resguardo como cubiertas, marcadores de zona y dispositivos de advertencia complementarios.",
                                "En instalaciones subterráneas o recintos no ventilados, la evacuación de gases y la protección ante inundaciones adquieren preponderancia, por lo que se recomiendan dispositivos de drenaje, bombeo y monitoreo continuo de condiciones ambientales.",
                                "Accesibilidad, señalización y control de acceso",
                                "La accesibilidad a los espacios de trabajo en instalaciones eléctricas debe ser eficiente, cómoda y priorizar la seguridad tanto en el ingreso como en la salida. La normativa chilena, alineada con recomendaciones internacionales, exige la ausencia de obstáculos que puedan dificultar la salida rápida (“vía de escape” libre), especialmente en recintos donde existe mayor riesgo de contacto eléctrico.",
                                "La señalización debe garantizarse mediante símbolos normalizados, advertencias visuales permanentes y marcas viales en pisos o paredes que delimiten de manera clara el espacio de trabajo. Esta señalización tiene como función alertar a operadores y visitantes de la presencia de riesgo eléctrico y de las restricciones de acceso y permanencia en estas áreas.",
                                "Para el control de acceso, se permite y recomienda la utilización de sistemas con cerradura, tarjetas identificadoras, registros de ingreso y sistemas automáticos de apertura en caso de emergencia. Adicionalmente, el acceso debe estar restringido al personal autorizado, debidamente instruido y equipado, minimizando así el riesgo de accidentes por manipulación inadecuada de los equipos eléctricos.",
                                "Espacios de trabajo y prevención de riesgos eléctricos",
                                "El adecuado dimensionamiento y disposición de los espacios de trabajo es uno de los elementos principales en la prevención de riesgos eléctricos. El riesgo puede materializarse tanto por contacto directo (al tocar partes activas de una instalación) o indirecto (al entrar en contacto con elementos metálicos energizados por fallas de aislamiento). Las normas analizadas disponen que dichos espacios actúan como una “barrera preventiva”, disminuyendo la probabilidad de que el trabajador se aproxime involuntariamente a zonas energizadas.",
                                "Además, los espacios permiten:",
                                "La utilización segura de herramientas y equipos de protección personal.",
                                "La aplicación cómoda de procedimientos de bloqueo y etiquetado para la desenergización.",
                                "El desplazamiento coordinado de cuadrillas de emergencia en caso de incidentes.",
                                "La señalización visual y auditiva con suficiente claridad para identificar peligros inmediatos.",
                                "Todas estas ventajas hacen que los espacios de trabajo participen activamente en la cultura de seguridad de la organización, reforzando el compromiso con la salud laboral y la continuidad operacional de las instalaciones eléctricas.",
                                "Espacios de trabajo en un contexto global",
                                "Si bien la normativa chilena DS 8/2019 y la experiencia recogida en las Normas Técnicas Sector Electricidad orientan la organización de los espacios de trabajo en Chile, los principios que rigen estas disposiciones provienen de estándares internacionales como la IEC 60364, NEC (National Electrical Code) y las recomendaciones de la IEEE (Institute of Electrical and Electronics Engineers). El desarrollo global de la industria eléctrica incorpora avances constantes en ergonomía, innovación tecnológica y nuevos riesgos asociados a la automatización y digitalización de los sistemas.",
                                "Así, aspectos como el diseño universal de accesos, la gestión integral de riesgos, la evaluación constante de nuevas amenazas (por ejemplo, ciberseguridad en tableros inteligentes) y la aplicación de tecnologías de monitoreo y detección de fallas en tiempo real, complementan las recomendaciones regulatorias locales, abriendo nuevas oportunidades de mejora continua en la definición y acondicionamiento de los espacios de trabajo eléctricos.",
                                "Errores comunes y recomendaciones prácticas",
                                "A pesar del detallado marco normativo, en la práctica se detectan errores recurrentes en la implementación de espacios de trabajo eléctricos:",
                                "Ubicación deficiente de tableros: Instalar tableros en corredores angostos, cerca de salidas de emergencia o en áreas de alto tránsito expone a las personas a riesgos innecesarios y puede obstaculizar evacuaciones.",
                                "Reducir dimensiones mínimas: Intentar “ahorrar espacio” llevando los equipos a distancias menores a las normadas compromete la seguridad del personal operativo.",
                                "Obstrucciones: Almacenar objetos personales, herramientas, materiales combustibles o residuos en los espacios designados reduce la movilidad y posibilidad de actuar frente a incidentes eléctricos.",
                                "Iluminación insuficiente: El uso de instalaciones subiluminadas o la ausencia de sistemas de emergencia dificulta la identificación oportuna de dispositivos y aumenta los riesgos.",
                                "Señalización incorrecta o ausente: La falta de señalización adecuada induce a operaciones negligentes o al ingreso inadvertido de personal no capacitado.",
                                "Para evitar estos problemas, se recomienda:",
                                "Realizar una planificación detallada antes de la construcción o remodelación de espacios eléctricos, involucrando equipos multidisciplinarios.",
                                "Verificar en terreno el cumplimiento efectivo de las dimensiones normadas en todas las fases del proyecto.",
                                "Implementar rutinas de inspección y orden en los recintos eléctricos, con responsables claramente asignados.",
                                "Actualizar la señalización y protocolos internos frente a cambios de equipos, redistribución de tableros o modificaciones en los accesos físicos.",
                                "Capacitar periódicamente al personal respecto de la importancia de respetar los espacios de trabajo, incluso en escenarios de emergencia o mantenimientos no programados.",
                                "Los espacios de trabajo representan mucho más que simples requisitos de superficie en las instalaciones eléctricas de baja tensión; constituyen un componente integral en la cadena de seguridad industrial, operacional y legal de la industria eléctrica. La correcta interpretación y cumplimiento de lo dispuesto en los Pliegos Técnicos DS 8/2019, junto con las Normas Técnicas Sector Electricidad y las mejores prácticas que recoge la literatura especializada (Roldán Viloria, 2008), aseguran instalaciones más seguras, confiables y adecuadas a los nuevos desafíos de la electrificación global.",
                                "En definitiva, el respeto y promoción de adecuados espacios de trabajo no solo salva vidas y minimiza interrupciones, sino que posiciona a las organizaciones eléctricas a la vanguardia del cumplimiento normativo y operativo, generando entornos laborales más humanos y resilientes ante los retos presentes y futuros del sector energético.",
                                "Roldán Viloria, José. (2008). Fuentes de energía. Madrid: Paraninfo.",
                                "Superintendencia de Electricidad y Combustibles. (2000). Normas Técnicas Sector Electricidad. Santiago de Chile: SEC.",
                                "Superintendencia de Electricidad y Combustibles. (2019). Pliegos Técnicos DS 8/2019. Santiago de Chile."
                            ]} />

                        </ExpansionTile>

                        <ExpansionTile title="Tableros y Alimentadores en Instalaciones Eléctricas de Baja Tensión" icon={Shield} defaultOpen={false}>
                            <SectionHeader title="1. Introducción" />
                            <Paragraph>En el contexto de la industria eléctrica, y bajo el marco regulatorio aportado por la normativa chilena —incluyendo el DS 8/2019 y las Normas Técnicas Sector Electricidad—, los conceptos de tableros y alimentadores constituyen pilares fundamentales para el diseño, operación y seguridad de las instalaciones eléctricas de baja tensión. Estas estructuras no sólo cumplen una función técnica esencial en la distribución y administración de la energía eléctrica dentro de edificaciones industriales, comerciales y residenciales, sino que además garantizan la protección de las personas y equipos frente a posibles fallos o sobrecargas.</Paragraph>
                            <Paragraph>El objetivo de este texto de estudio es desarrollar en profundidad los aspectos técnicos, normativos y prácticos relativos a los tableros eléctricos y los alimentadores, considerando los desafíos del contexto global y la necesidad de ajustarse a exigencias de seguridad, fiabilidad y eficiencia energética. Para ello, se recurre principalmente a las obras &quot;Fuentes de energía&quot; de José Roldán Viloria (Madrid: Paraninfo, 2008) y &quot;Normas Técnicas Sector Electricidad&quot; (Santiago de Chile: SEC), referentes esenciales en la materia.</Paragraph>
                            <SubExpansionTile title="2. Definición y Función de Tableros y Alimentadores">
                                <SectionHeader title="2.1 Tableros Eléctricos" />
                                <Paragraph>Los tableros eléctricos, también denominados cuadros de distribución, son elementos fundamentales en toda instalación de baja tensión. Según Roldán Viloria (2008), su función principal es recibir la energía desde la red de distribución, redistribuirla a los diversos circuitos derivados y proteger tanto a los circuitos como a los usuarios frente a posibles fallos (sobrecargas, cortocircuitos, fugas a tierra, etc.).</Paragraph>
                                <Paragraph>En términos constructivos, el tablero es una envolvente que alberga y soporta los dispositivos de protección, maniobra, medición y señalización necesarios para el funcionamiento seguro de una instalación eléctrica. Dependiendo del tamaño y complejidad de la edificación, pueden existir varios niveles de tableros, desde tableros generales hasta tableros secundarios y de piso.</Paragraph>
                                <SectionHeader title="2.2 Alimentadores" />
                                <Paragraph>Por su parte, los alimentadores son los conductores (cables, barras, canalizaciones) que transportan la energía eléctrica desde el origen de la instalación o desde el tablero principal hacia los tableros de distribución secundarios o hacia áreas específicas de consumo. Los alimentadores se diferencian de los &quot;ramales&quot; o &quot;derivaciones&quot; en que sirven de vínculo principal de suministro, soportan generalmente mayores corrientes y requieren de especial atención en su dimensionamiento y protección.</Paragraph>
                                <Paragraph>La normativa chilena, en concordancia con los estándares internacionales y la experiencia global, recalca la importancia de considerar factores como la carga máxima, la corriente nominal, el método de instalación, la protección frente a sobrecarga, cortocircuito y contactos indirectos, así como las condiciones ambientales para la correcta selección e instalación de alimentadores.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="3. Marco Normativo: DS 8/2019 y Normas Técnicas del Sector Eléctrico">
                                <Paragraph>El DS 8/2019 del Ministerio de Energía de Chile, junto con las Normas Técnicas Sector Electricidad de la Superintendencia de Electricidad y Combustibles (SEC), establecen los requisitos para el diseño, montaje y supervisión de tableros y alimentadores en instalaciones de baja tensión.</Paragraph>
                                <Paragraph>En líneas generales, la normativa exige:</Paragraph>
                                <Paragraph>Condiciones constructivas que garanticen la durabilidad y seguridad de los tableros.</Paragraph>
                                <Paragraph>Uso de materiales y equipos certificados.</Paragraph>
                                <Paragraph>Dimensionado correcto de alimentadores, basado en cálculos de carga y caída de tensión admissible.</Paragraph>
                                <Paragraph>Protecciones adecuadas contra sobreintensidad y contactos eléctricos.</Paragraph>
                                <Paragraph>Identificación clara y acceso seguro a los dispositivos de corte y seccionamiento.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="4. Tipos de Tableros Eléctricos">
                                <Paragraph>La clasificación de los tableros eléctricos depende de la función que cumplen dentro de la instalación, pudiendo destacarse los siguientes tipos principales, conforme a Roldán Viloria (2008):</Paragraph>
                                <Paragraph>Tableros Generales: Reciben la energía directamente de la acometida o empalme principal y la reparten hacia los distintos sectores o áreas de la instalación. A menudo incluyen el equipo de medición, interruptores principales y dispositivos totales de protección.</Paragraph>
                                <Paragraph>Tableros de Distribución: Subdividen la energía proveniente del tablero general en circuitos derivados, con protecciones independientes para cada ramal o sección.</Paragraph>
                                <Paragraph>Tableros de Piso o Sectoriales: Son tableros locales que protegen y maniobran los circuitos de zonas específicas, como pisos de edificios, áreas industriales o sectores particulares de una edificación.</Paragraph>
                                <Paragraph>Tableros de Control y Automatización: Aunque su uso va más allá del simple reparto de energía, permiten controlar y activar equipos o procesos específicos mediante elementos de maniobra y control como contactores, relés, etc.</Paragraph>
                                <Paragraph>Esta jerarquía de tableros permite estructurar la instalación de manera modular y escalonada, mejorando la gestión, mantenimiento y seguridad, así como posibilitando la ampliación o modificación futura de los sistemas eléctricos.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="5. Características Constructivas y Normativas de los Tableros">
                                <SectionHeader title="5.1 Materiales y Grados de Protección" />
                                <Paragraph>Los tableros eléctricos pueden fabricarse en diferentes materiales, principalmente acero pintado, acero inoxidable, materiales plásticos o combinaciones de ellos. El grado de protección al polvo, agua e impacto mecánico está definido por la clasificación IP (International Protection), que debe ser seleccionada conforme a las condiciones ambientales del lugar donde será instalado el tablero.</Paragraph>
                                <Paragraph>El DS 8/2019 especifica los niveles mínimos de protección IP que deben cumplir los tableros según su ubicación:</Paragraph>
                                <Paragraph>Interior seco: IP 30 o superior.</Paragraph>
                                <Paragraph>Zonas húmedas o expuestas: IP 54 o superior.</Paragraph>
                                <Paragraph>Asimismo, la construcción debe facilitar el acceso sólo a personal autorizado, impidiendo manipulaciones accidentales y garantizando el bloqueo eficaz de los dispositivos de seguridad.</Paragraph>
                                <SectionHeader title="5.2 Disposición Interna" />
                                <Paragraph>El diseño interno obliga a la identificación clara y permanente de los diferentes circuitos y dispositivos, así como a una separación física y eléctrica adecuada de las partes activas y los elementos de protección y corte. Las conexiones deben ser firmes y cumplir con los requerimientos de sección y tipo adecuados para las corrientes a transportar.</Paragraph>
                                <Paragraph>La reglamentación también exige que los tableros cuenten con espacio suficiente para el tendido y maniobra segura de los elementos, así como con una adecuada ventilación para evitar el sobrecalentamiento de los componentes internos.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="6. Alimentadores: Selección, Instalación y Cálculo">
                                <Paragraph>La elección, diseño e instalación de los alimentadores es un proceso fundamental que debe realizarse considerando los siguientes parámetros, de acuerdo a &quot;Normas Técnicas Sector Electricidad&quot; y a Roldán Viloria (2008):</Paragraph>
                                <Paragraph>Carga Total: Se debe conocer la carga máxima probable que será alimentada, sumando las potencias de los equipos y considerando los factores de simultaneidad.</Paragraph>
                                <Paragraph>Longitud del Alimentador: A mayor longitud, mayor es la caída de tensión, lo que limita la sección mínima requerida para no exceder el valor permitido (&lt;3%, generalmente).</Paragraph>
                                <Paragraph>Material del Conductor: El cobre es el material más usual, aunque también se utiliza aluminio, especialmente en grandes instalaciones.</Paragraph>
                                <Paragraph>Método de Instalación: Enterrado, en bandejas, canaletas, tubos PVC o metal, lo que afecta la capacidad de evacuación de calor y, por tanto, la corriente admisible.</Paragraph>
                                <Paragraph>Condiciones Ambientales: Temperatura ambiente, exposición a agentes corrosivos o mecánicos, humedad, entre otros factores ambientales.</Paragraph>
                                <Paragraph>Protección: Cada alimentador debe estar dotado de dispositivos de protección contra sobrecorrientes y cortocircuitos dimensionados según la sección y tipo de conductor.</Paragraph>
                                <Paragraph>El cálculo de la sección de los alimentadores se realiza en función de la corriente máxima esperada, la caída máxima de tensión permitida y la corriente que puede soportar el conductor según la forma de tendido y la temperatura ambiente.</Paragraph>
                                <SectionHeader title="6.1 Fórmulas Básicas de Dimensionamiento" />
                                <Paragraph>La corriente nominal del alimentador (In) se calcula con:</Paragraph>
                                <Paragraph>In = P / (√3 × V × cos φ)</Paragraph>
                                <Paragraph>donde:</Paragraph>
                                <List items={[
                                    "P = Potencia total demandada (en watts)",
                                    "V = Tensión nominal",
                                    "cos φ = Factor de potencia"
                                ]} />
                                <Paragraph>La caída de tensión se determina con:</Paragraph>
                                <Paragraph>ΔV = (I × L × 2 × R) / 1000</Paragraph>
                                <Paragraph>donde:</Paragraph>
                                <List items={[
                                    "I = corriente en amperios",
                                    "L = longitud en metros",
                                    "R = resistencia del conductor en ohmios por kilómetro"
                                ]} />
                                <SectionHeader title="6.2 Consideraciones Prácticas" />
                                <Paragraph>Para adecuarse a la normativa y garantizar la seguridad, los alimentadores deben ser seleccionados de modo que la caída de tensión no supere habitualmente el 3% desde el tablero principal hasta el punto más alejado. Además, deben poseer identificación y etiquetas que permitan su trazabilidad desde el tablero origen hasta su destino.</Paragraph>
                                <Paragraph>En instalaciones industriales o de alto consumo, es común la utilización de barras colectoras como alimentadores, lo que exige condiciones específicas de montaje, aislamiento y protección mecánica.</Paragraph>
                                <Paragraph>La supervisión regular y el mantenimiento predictivo de los alimentadores son cruciales para evitar el deterioro prematuro de los conductores, el sobrecalentamiento y los riesgos de incendio.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="7. Dispositivos de Protección y Maniobra en Tableros y Alimentadores">
                                <Paragraph>Los tableros eléctricos integran diversos dispositivos que permiten proteger y maniobrar los alimentadores y circuitos:</Paragraph>
                                <Paragraph>Interruptores automáticos (magnetotérmicos): Protegen contra sobrecorrientes y cortocircuitos.</Paragraph>
                                <Paragraph>Diferenciales: Protegen contra fugas a tierra y contactos indirectos, desconectando el circuito si detectan una corriente de fuga superior al umbral normativo.</Paragraph>
                                <Paragraph>Seccionadores: Permiten el corte de energía para realizar operaciones de mantenimiento en condiciones de seguridad.</Paragraph>
                                <Paragraph>Fusibles: Dispositivos de protección que funden su elemento interno ante una sobrecorriente, interrumpiendo el suministro eléctrico.</Paragraph>
                                <Paragraph>Conforme lo establece el DS 8/2019, la adecuada selección, coordinación e identificación de estos dispositivos resulta crítica para garantizar la integridad de la instalación y la seguridad de los usuarios.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="8. Espacios de Trabajo y Accesibilidad">
                                <Paragraph>La normativa local e internacional exige que los tableros y alimentadores sean instalados en lugares de fácil acceso, debidamente iluminados y señalizados. La disposición debe permitir la apertura total de las puertas del tablero, la maniobra y sustitución de los dispositivos sin riesgo para los operadores y con las distancias mínimas reglamentarias respecto a otros elementos constructivos y al suelo.</Paragraph>
                                <Paragraph>Los espacios de trabajo deben mantenerse libres de obstáculos, contar con señalización de advertencia y, en instalaciones de importancia, incluir sistemas de ventilación para evitar la acumulación de calor.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="9. Mantenimiento y Seguridad Operacional">
                                <Paragraph>El mantenimiento preventivo de tableros y alimentadores es esencial para prevenir fallos y accidentes. Dicho mantenimiento incluye:</Paragraph>
                                <Paragraph>Verificación periódica de la integridad física de envolventes y conexiones.</Paragraph>
                                <Paragraph>Inspección de los dispositivos de protección y maniobra.</Paragraph>
                                <Paragraph>Medición de corrientes y temperaturas.</Paragraph>
                                <Paragraph>Limpieza de componentes y comprobación del apriete de bornes y conexiones.</Paragraph>
                                <Paragraph>La capacitación específica del personal que interviene en tableros y alimentadores es una obligación dispuesta por la normativa, dado el alto riesgo eléctrico intrínseco en estas tareas.</Paragraph>
                            </SubExpansionTile>

                            <SubExpansionTile title="10. Consideraciones Medioambientales y de Eficiencia Energética">
                                <Paragraph>En el contexto global, tanto las regulaciones internacionales como las nacionales aconsejan el uso racional y eficiente de la energía, así como la minimización de los impactos ambientales asociados a la operación de redes eléctricas. Por ello:</Paragraph>
                                <Paragraph>Los diseños deben considerar el uso de dispositivos de bajo consumo y alta eficiencia.</Paragraph>
                                <Paragraph>La correcta selección y dimensionamiento de alimentadores contribuye a reducir las pérdidas eléctricas y el calentamiento excesivo.</Paragraph>
                                <Paragraph>Es recomendable la utilización de materiales reciclables en la fabricación de tableros y canalizaciones.</Paragraph>
                                <Paragraph>El monitoreo y registro del consumo eléctrico desde los tableros permite implementar acciones de ahorro y reducción de emisiones.</Paragraph>
                            </SubExpansionTile>

                            <SectionHeader title="11. Resumen y Conclusión" />
                            <Paragraph>El estudio y correcta aplicación de los conceptos de tableros y alimentadores es indispensable para lograr instalaciones eléctricas seguras, eficientes y conformes a la normativa vigente, como el DS 8/2019 y las Normas Técnicas Sector Electricidad de la SEC. El diseño adecuado, la selección precisa de materiales, el correcto dimensionamiento de conductores, la implementación de dispositivos de protección y la observancia estricta de las condiciones de montaje y accesibilidad, constituyen los fundamentos para asegurar la integridad física de equipos, instalaciones y personas.</Paragraph>
                            <Paragraph>La comprensión y aplicación de estos lineamientos, sumadas a un enfoque de mejora continua y eficiencia energética, permiten a las instalaciones eléctricas insertarse plenamente en el contexto global y responder a los desafíos de sostenibilidad, demanda creciente y seguridad que caracterizan a la industria eléctrica moderna.</Paragraph>
                            <SectionHeader title="12. Bibliografía" />
                            <Paragraph>Roldán Viloria, José. Fuentes de energía. Madrid: Paraninfo, 2008.</Paragraph>
                            <Paragraph>Normas Técnicas Sector Electricidad. Santiago de Chile: SEC.</Paragraph>
                            <List items={[
                                "----------------"
                            ]} />

                        </ExpansionTile>


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
