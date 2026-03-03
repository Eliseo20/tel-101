import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, Shield, Book,
    CheckCircle2, AlertTriangle, Zap, Activity, TrendingUp, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, ShieldCheck, Flame, BookOpen, UserX, ActivitySquare, Globe, Award, Settings2, ShieldAlert
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

const AE3View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE3 = [
        { term: "Técnico Eléctrico", def: "Profesional capacitado para intervenir en procesos y actividades asociadas a la generación, transmisión, distribución, montaje, mantenimiento y reparación de sistemas eléctricos." },
        { term: "DS 8/2019", def: "Pliegos Técnicos Normativos que establecen los requisitos mínimos en materia de seguridad, confiabilidad y protección de personas e instalaciones de baja tensión en Chile." },
        { term: "SEC (Superintendencia de Electricidad y Combustibles)", def: "Organismo que determina aspectos técnicos específicos, fiscalización y certificación de las instalaciones eléctricas en Chile." },
        { term: "IEC / IEEE", def: "Estándares y normativas internacionales que influyen en las competencias del técnico ante la globalización del mercado eléctrico." },
        { term: "Smart Grids", def: "Redes eléctricas inteligentes que integran tecnología digital para monitorear y gestionar el transporte de electricidad desde todas las fuentes de generación." },
        { term: "SCADA", def: "Sistemas de control y adquisición de datos utilizados para supervisar y controlar sistemas eléctricos e industriales." },
        { term: "DS N°92 de 1983", def: "Decreto Supremo que establece las clases de instaladores eléctricos y los requisitos para su acreditación y ejercicio en Chile." },
        { term: "Instalador Clase A", def: "Profesional autorizado para ejecutar obras eléctricas en instalaciones de cualquier potencia y tensión (alta y baja)." },
        { term: "Instalador Clase B", def: "Técnico de nivel superior autorizado para realizar instalaciones en baja tensión hasta una potencia máxima establecida." },
        { term: "Instalador Clase C", def: "Instalador autorizado para sistemas eléctricos de complejidad reducida en viviendas unifamiliares y pequeños comercios." },
        { term: "Instalador Clase D", def: "Instalador autorizado para intervenciones de carácter específico y menor riesgo, como reemplazo de luminarias o aparatos aislados." },
        { term: "I+D", def: "Investigación y Desarrollo, enfocado en la aplicación de soluciones innovadoras y nuevas tecnologías en el sector eléctrico." },
        { term: "Eficiencia Energética", def: "Conjunto de acciones que permiten optimizar la relación entre la cantidad de energía consumida y los productos y servicios finales obtenidos." },
        { term: "Electromovilidad", def: "Uso de vehículos eléctricos que utilizan uno o más motores eléctricos para la propulsión, impulsando la infraestructura de carga." },
        { term: "Servicios Asociados", def: "Actividades técnicas, comerciales y de gestión complementarias a la generación, transmisión y distribución, esenciales para el funcionamiento del sector eléctrico." },
        { term: "Mantenimiento Predictivo", def: "Técnicas que analizan el estado de equipos para predecir fallos y realizar mantenimiento preventivo en el momento óptimo." },
        { term: "Economía Circular", def: "Modelo de producción y consumo que implica compartir, alquilar, reutilizar, reparar, renovar y reciclar materiales y productos existentes." },
        { term: "IoT (Internet of Things)", def: "Red de objetos físicos ('cosas') que llevan sensores y software para conectarse e intercambiar datos con otros dispositivos y sistemas a través de Internet." },
        { term: "Competencias Profesionales", def: "Conjunto integrado de conocimientos, habilidades y actitudes que permiten a un técnico eléctrico desempeñar sus funciones de manera segura y eficiente." },
        { term: "Esquema Unifilar", def: "Representación gráfica de una instalación eléctrica en la que los distintos elementos se representan mediante símbolos unificados." },
        { term: "Contacto Directo", def: "Contacto de personas o animales con partes activas de los materiales y equipos." },
        { term: "Contacto Indirecto", def: "Contacto de personas o animales con partes que se han puesto bajo tensión como resultado de un fallo de aislamiento." },
        { term: "Puesta a Tierra", def: "Conexión eléctrica directa de todas las partes metálicas de una instalación, sin fusibles ni equipos de protección, de sección suficiente." }
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
                        <span className="text-sm font-black dark:text-white uppercase">AE3: Rol del Técnico</span>
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
                                Rol del Técnico en el Ámbito de la <br /> <span className="text-[#D1202F]">Industria Eléctrica</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La industria eléctrica es un sector fundamental dentro del desarrollo económico y social, tanto a nivel nacional como global. Este sector abarca desde la generación de energía eléctrica hasta su distribución y utilización final. Dentro de este amplio contexto, el rol del técnico en electricidad es esencial para garantizar la seguridad, eficiencia y continuidad de los sistemas eléctricos.</Paragraph>
                            <Paragraph>El presente texto desarrolla en profundidad el papel que desempeña el técnico en la industria eléctrica, vinculando el quehacer técnico con la normativa nacional -particularmente los Pliegos Técnicos DS 8/2019 y las Normas Técnicas del Sector Electricidad- y con los desafíos propios de un contexto globalizado y en constante evolución tecnológica.</Paragraph>
                        </div>

                        <ExpansionTile title="I. Definición y perfil del técnico en electricidad" icon={UserX} defaultOpen={true}>
                            <Paragraph>El técnico en electricidad es un profesional capacitado para intervenir en procesos y actividades asociadas a la generación, transmisión, distribución, montaje, mantenimiento y reparación de sistemas eléctricos. Según Roldán Viloria (2008), la formación de los técnicos eléctricos debe estar orientada a "la comprensión profunda del funcionamiento de los sistemas energéticos y de sus componentes, para dar respuesta a las demandas productivas, de mantenimiento y operativas del sector eléctrico" (p. 45).</Paragraph>
                            <Paragraph>En Chile, la formación del técnico en electricidad está regulada tanto por los lineamientos curriculares del Ministerio de Educación como por normativas específicas para el ejercicio profesional, como las que regula la Superintendencia de Electricidad y Combustibles (SEC).</Paragraph>
                            <Paragraph>Desde un enfoque moderno, el técnico no sólo debe poseer conocimientos sólidos en electricidad, sino también competencias en seguridad laboral, medio ambiente, gestión de recursos y capacidad de adaptación a los avances tecnológicos y regulaciones innovadoras. Este perfil multidisciplinar es vital debido a que el sector eléctrico es, por naturaleza, altamente regulado y dinámico.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="II. Ámbitos de actuación en la industria" icon={ActivitySquare}>
                            <Paragraph>El técnico eléctrico puede desempeñarse en una amplia gama de escenarios dentro de la industria. Sus responsabilidades varían dependiendo del eslabón de la cadena productiva donde se encuentre:</Paragraph>
                            <List items={[
                                "Generación eléctrica: Operación y mantenimiento de centrales eléctricas convencionales y renovables.",
                                "Transmisión: Supervisión y mantención de líneas de alta y media tensión.",
                                "Distribución: Ejecución de tareas en redes de baja y media tensión, subestaciones y sistemas de control.",
                                "Uso final: Montaje y mantenimiento de instalaciones eléctricas domiciliarias, industriales y comerciales."
                            ]} />
                            <Paragraph>La globalización y las normativas internacionales (como las IEC) influyen cada vez más en la forma en que se desarrollan las competencias del técnico, quien debe velar por la conformidad técnica y legal del trabajo realizado, considerando a la vez las demandas del mercado global.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="III. El técnico y la normativa chilena" icon={BookOpen}>
                            <SectionHeader title="DS 8/2019 y las Normas Técnicas del Sector Electricidad" />
                            <Paragraph>Un aspecto fundamental del trabajo técnico es el dominio y aplicación de la normativa vigente. En Chile, los Pliegos Técnicos DS 8/2019 constituyen el marco regulatorio central para las instalaciones eléctricas de baja tensión, estableciendo requisitos mínimos en materia de seguridad, confiabilidad y protección de personas e instalaciones.</Paragraph>
                            <Paragraph>Complementariamente, las Normas Técnicas del Sector Electricidad de la SEC determinan aspectos técnicos específicos y procedimientos de verificación, fiscalización y certificación.</Paragraph>
                            <Paragraph>El técnico debe identificar, interpretar y aplicar correctamente estos reglamentos en sus labores diarias. El desconocimiento o mal manejo de tales aspectos puede acarrear consecuencias graves, no solo en términos de seguridad, sino también legales y económicas para los proyectos y empresas involucradas.</Paragraph>
                            <HighlightBox type="info" title="Ejemplo Práctico:">
                                <p>Cuando un técnico realiza una instalación en una edificación habitacional, debe garantizar que los empalmes, tableros, puestas a tierra y dispositivos de protección cumplan las exigencias del DS 8/2019, así como los protocolos de la SEC en cuanto a certificación y seguridad.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="IV. Responsabilidad social, ambiental y seguridad" icon={ShieldAlert}>
                            <Paragraph>Conforme subrayan Roldán Viloria (2008) y las Normas Técnicas del Sector Electricidad, el técnico tiene una responsabilidad social significativa. Las malas prácticas técnicas pueden generar accidentes graves, interrupciones masivas del servicio, pérdidas materiales y daños ambientales.</Paragraph>
                            <Paragraph>Por este motivo, el técnico debe:</Paragraph>
                            <List items={[
                                "Aplicar medidas de protección: Utilizar dispositivos de corte, sistemas de puesta a tierra, barreras físicas y señalización adecuada para evitar tanto el contacto directo como el indirecto con partes activas en tensión.",
                                "Promover el uso eficiente de los recursos: Diseñar instalaciones adecuadas que minimicen las pérdidas de energía y optimicen el consumo, contribuyendo a la sostenibilidad energética.",
                                "Prevenir el daño ambiental: Conocer y mitigar las consecuencias de accidentes eléctricos y contaminación derivada del manejo inadecuado de equipos y residuos industriales.",
                                "Fomentar la cultura de la seguridad: Capacitarse periódicamente en nuevas tecnologías, riesgos emergentes y nuevos procedimientos de la industria."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="V. Funciones en baja tensión y protección" icon={Settings2}>
                            <Paragraph>A continuación, se desarrollan las principales funciones y procedimientos que el técnico debiera ejecutar en el ámbito de las instalaciones de baja tensión, de acuerdo al marco normativo y técnico vigente:</Paragraph>
                            <List items={[
                                "Interpretación y aplicación de los Pliegos Técnicos DS 8/2019: El DS 8/2019 requiere que el técnico conozca los capítulos y requisitos que estructuran las exigencias de seguridad y funcionalidad en instalaciones de baja tensión, aplicando procedimientos de montaje, protección y supervisión ajustados a la norma.",
                                "Diseño y ejecución de empalmes y sistemas de distribución: El técnico debe ser capaz de proyectar sistemas de distribución interna, seleccionar adecuadamente los materiales y realizar conexiones seguras en los empalmes para evitar riesgos asociados a sobrecargas y cortocircuitos.",
                                "Implementación de medidas de protección contra contacto directo e indirecto: Es esencial la instalación y verificación de dispositivos diferenciales, interruptores automáticos, barreras y aislamientos, así como el control de continuidad eléctrica en las protecciones puestas a tierra.",
                                "Adecuación de condiciones de montaje y del medio: El técnico adapta los materiales y procedimientos según el ambiente de trabajo (humedad, temperatura, presencia de agentes corrosivos), siguiendo las pautas que fijan las normativas para prevenir fallas y prolongar la vida útil de la instalación.",
                                "Verificación y adecuación de espacios de trabajo seguros: De acuerdo a las normativas técnicas y laborales, es deber del técnico garantizar que los lugares de trabajo donde se montan tableros, equipos o canalizaciones cumplan con los requerimientos de espacio, accesibilidad y seguridad para el personal.",
                                "Montaje, mantenimiento y supervisión de tableros y alimentadores: El correcto armado e identificación de tableros eléctricos y la selección de alimentadores apropiados son tareas críticas que requieren precisión y conocimiento técnico.",
                                "Instalación, medición y control de sistemas de puesta a tierra: La seguridad de toda instalación depende en gran medida de un adecuado sistema de puesta a tierra, que debe ser medido, registrado y mantenido conforme a los rangos que establece la normativa."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="VI. Competencias y rol en la industria" icon={Award}>
                            <SectionHeader title="Competencias transversales y formación continua" />
                            <Paragraph>En un contexto industrial caracterizado por la transformación digital (automatización, internet de las cosas, energías renovables), el técnico debe complementar sus conocimientos específicos con competencias transversales, tales como:</Paragraph>
                            <List items={[
                                "Comunicación efectiva",
                                "Trabajo en equipo multidisciplinario",
                                "Gestión de la información y documentación técnica",
                                "Capacidad de análisis y resolución de problemas complejos",
                                "Capacidad de aprender y adaptarse permanentemente"
                            ]} />
                            <Paragraph>Como señala Roldán Viloria (2008), "la formación continúa representa uno de los pilares esenciales para responder a las necesidades cambiantes del sector eléctrico y para afrontar los desafíos de seguridad, eficiencia y sostenibilidad que éste plantea" (p. 270).</Paragraph>

                            <SectionHeader title="El técnico como agente de calidad, fiscalización y sustentabilidad" />
                            <Paragraph>Más allá de la ejecución técnica, el especialista en electricidad actúa también como un agente promotor de la calidad y la sustentabilidad. Esto implica:</Paragraph>
                            <List items={[
                                "Aseguramiento de la calidad: Controlar la conformidad de materiales y procesos según pliegos técnicos y normativas de la SEC.",
                                "Participación en auditorías internas y externas: Actualmente, la fiscalización de instalaciones eléctricas requiere la presencia de personal calificado que pueda identificar no conformidades y proponer mejoras.",
                                "Innovación y mejora continua: Proponer nuevas soluciones técnicas que optimicen el uso de la energía y reduzcan el impacto ambiental y económico de las instalaciones eléctricas.",
                                "Educación y sensibilización: Asumir un rol educativo en las empresas y comunidades, difundiendo buenas prácticas y previniendo riesgos eléctricos."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="VII. Desafíos, ética y legalidad" icon={Globe}>
                            <SectionHeader title="Desafíos actuales y futuros" />
                            <Paragraph>La industria eléctrica enfrenta hoy desafíos cruciales que impactan de manera directa el ejercicio profesional del técnico:</Paragraph>
                            <List items={[
                                "Internacionalización de normas: La convergencia entre normativas nacionales y estándares internacionales (IEC, IEEE) exige al técnico incorporar una perspectiva global sin perder de vista la normativa local.",
                                "Expansión de las energías renovables: La penetración de tecnologías eólicas, solares, geotérmicas e hidráulicas demanda técnicos capaces de operar y mantener sistemas híbridos complejos, con énfasis en la integración a redes de distribución inteligente.",
                                "Automatización y digitalización: El advenimiento de las redes eléctricas inteligentes (smart grids), la sensórica avanzada y los sistemas SCADA requieren técnicos con habilidades en informática aplicada y control automático.",
                                "Gestión energética y eficiencia: La reducción de pérdidas técnicas y no técnicas se ha transformado en una meta estratégica de la industria, siendo el técnico el responsable de implementar procedimientos de mejora y monitoreo permanente."
                            ]} />

                            <SectionHeader title="Condiciones éticas y legales: actitud profesional" />
                            <Paragraph>El ejercicio profesional del técnico eléctrico implica un cumplimiento riguroso de las exigencias éticas y legales. Los códigos de ética y la legislación laboral imponen deberes claros respecto de la integridad en el diseño y ejecución de los proyectos, la confidencialidad de la información, la responsabilidad en la toma de decisiones y la prevención activa de riesgos a terceros. La no observancia de estos aspectos puede derivar en sanciones legales, administrativas y civiles; además de dañar gravemente la reputación personal y corporativa.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusión</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                En conclusión, el técnico en el ámbito de la industria eléctrica cumple un rol multidimensional que se traduce en la aplicación efectiva de conocimientos técnicos y regulatorios, la promoción de la seguridad y la sostenibilidad y la adaptación permanente a los cambios tecnológicos y sociales del sector. Su trabajo es crucial para que la cadena de generación, transmisión, distribución y uso de la energía eléctrica se desarrolle bajo altos estándares de calidad, eficiencia y seguridad, aportando significativamente al desarrollo industrial y a la calidad de vida de la sociedad.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La formación continua, el respeto irrestricto a la normativa vigente —especialmente los Pliegos Técnicos DS 8/2019 y las Normas Técnicas de la SEC—, y la adquisición de competencias transversales modernas, posicionan al técnico eléctrico como un agente clave dentro de un sector en constante transformation, llamado a responder tanto a los retos locales como globales de la industria eléctrica contemporánea.
                            </Paragraph>
                        </div>

                        {/* --- ARTICULO 2 --- */}
                        <div className="mt-20 mb-12 border-l-8 border-[#002855] pl-8 py-2">
                            <h2 className="text-4xl font-black text-[#002855] dark:text-white uppercase tracking-tighter leading-tight">
                                Clases de Instaladores Eléctricos <br /> <span className="text-slate-500 dark:text-slate-400 text-3xl">Decreto Supremo N°92 de 1983</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="1. Contexto normativo y propósito" />
                            <Paragraph>El Decreto Supremo N°92 (DS N°92), promulgado por el Ministerio de Economía, Fomento y Reconstrucción en el año 1983, surge como respuesta a la necesidad de regular el ejercicio de las actividades relativas a la ejecución, reparación y mantención de instalaciones eléctricas en Chile, particularmente aquellas clasificadas como de baja tensión, dado el incremento de la demanda sobre éstas en el contexto del crecimiento económico y urbanístico nacional.</Paragraph>
                            <Paragraph>La Superintendencia de Electricidad y Combustibles (SEC) es el organismo encargado de fiscalizar el cumplimiento de este decreto, otorgando licencias y categorización a los instaladores eléctricos, exigiendo la formación y especialización técnica para cada clase, así como la actualización permanente de sus conocimientos conforme avanza la tecnología y la normativa sectorial.</Paragraph>
                        </div>

                        <ExpansionTile title="2. Importancia de la clasificación" icon={ShieldAlert}>
                            <Paragraph>La correcta clasificación de los instaladores eléctricos cumple con diversos propósitos:</Paragraph>
                            <List items={[
                                "Garantizar que quienes intervienen en un sistema eléctrico poseen la calificación necesaria y suficiente para enfrentar los riesgos inherentes a la electricidad.",
                                "Permitir la trazabilidad y responsabilidad legal ante cualquier obra eléctrica que pueda suponer un peligro para las personas y bienes.",
                                "Coadyuvar a la formación y profesionalización del sector, asegurando un estándar mínimo de competencias técnicas.",
                                "Proteger al usuario final y al público general mediante la exigencia de requisitos de idoneidad definidos en la norma."
                            ]} />
                            <Paragraph>La labor del instalador eléctrico es esencial, ya que contribuye a la materialización segura de la infraestructura eléctrica que sostiene servicios tan fundamentales como la iluminación pública, los sistemas de distribución domiciliaria, la automatización de procesos industriales, entre otros (Roldán Viloria, 2008).</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="3. Estructura del Decreto: Clases" icon={ListChecks}>
                            <Paragraph>El Decreto Supremo N°92 define las clases de instaladores eléctricos en función de la complejidad y magnitud de las instalaciones que pueden ejecutar, así como de los requerimientos formativos y de experiencia exigidos para cada nivel. Las clases principales son:</Paragraph>
                            <List items={[
                                "Instalador Clase A",
                                "Instalador Clase B",
                                "Instalador Clase C",
                                "Instalador Clase D"
                            ]} />
                            <Paragraph>Cada clase otorga atribuciones y autorizaciones diferenciadas, que van desde la capacidad de realizar instalaciones en baja y media tensión en recintos industriales y comerciales, hasta las intervenciones de menor escala en edificaciones domiciliarias.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="4. Instalador Eléctrico Clase A" icon={Award}>
                            <Paragraph>La Clase A es la de mayor alcance profesional y atribuciones. Los instaladores eléctricos autorizados bajo esta categoría pueden ejecutar obras eléctricas en instalaciones de cualquier potencia y tensión, sean éstas domiciliarias, industriales, agrícolas o de otra índole.</Paragraph>
                            <Paragraph>Para acceder a esta clase, la normativa exige una formación universitaria completa en ingeniería eléctrica o especialidades afines, junto con acreditación de experiencia profesional en el área. Los titulados deben rendir un examen de suficiencia ante la SEC, demostrando actualización y conocimiento cabal de las Normas Técnicas del Sector Electricidad. Según \"Normas Técnicas Sector Electricidad\" (SEC), corresponden aquellas instalaciones que, por su envergadura y complejidad, requieren el máximo grado de experticia, como subestaciones, líneas de transmisión internas y sistemas de potencia en recintos industriales.</Paragraph>
                            <SectionHeader title="Atribuciones particulares:" />
                            <List items={[
                                "Ejecutar, mantener y reparar instalaciones eléctricas sin limitación de tensión ni potencia.",
                                "Intervenir en subestaciones transformadoras, centros de transformación y sistemas de puesta a tierra en recintos industriales.",
                                "Diseñar, calcular y certificar instalaciones complejas y de alto riesgo eléctrico."
                            ]} />
                            <Paragraph>Este nivel profesional requiere permanente actualización en materia técnica y normativa, considerando la rápida evolución de la tecnología eléctrica a nivel mundial (Roldán Viloria, 2008).</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="5. Instalador Eléctrico Clase B" icon={Settings2}>
                            <Paragraph>La Clase B habilita para realizar instalaciones eléctricas en baja tensión, siempre que la potencia instalada no supere los valores máximos establecidos por la normativa. Se orienta, principalmente, a instalaciones en edificaciones residenciales, comercio menor, talleres y pequeñas industrias.</Paragraph>
                            <Paragraph>El acceso a esta categoría exige estudios técnicos de nivel superior en electricidad o carreras técnicas reconocidas por la autoridad educacional, junto con experiencia comprobable y la aprobación de un examen ante la SEC.</Paragraph>
                            <SectionHeader title="Atribuciones particulares:" />
                            <List items={[
                                "Ejecutar y mantener instalaciones eléctricas de baja tensión hasta una potencia máxima (generalmente 50 kW, según actualizaciones normativas).",
                                "Realizar ampliaciones, modificaciones y reparaciones en instalaciones existentes, siempre dentro de los límites de tensión y potencia admitidos.",
                                "Instalar y certificar sistemas de alumbrado público, tableros eléctricos y sistemas de protección contra contacto eléctrico."
                            ]} />
                            <Paragraph>Es relevante que el profesional Clase B interprete la evolución de los pliegos técnicos, adaptándose a cambios introducidos, tales como el Decreto Supremo DS 8/2019 o las normativas de protección medioambiental relacionadas con la eficiencia energética.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="6. Instalador Eléctrico Clase C" icon={Wrench}>
                            <Paragraph>La Clase C está destinada a quienes se dedican a instalaciones eléctricas domiciliarias menores, cuyo grado de complejidad es reducido y no representan peligro potencial significativo para personas y bienes. Los límites de potencia y tensión son los más restringidos entre las clases profesionales.</Paragraph>
                            <Paragraph>Generalmente, se exige contar con al menos enseñanza media completa, capacitación técnica básica específica en electricidad, y la aprobación del examen SEC pertinente.</Paragraph>
                            <SectionHeader title="Atribuciones particulares:" />
                            <List items={[
                                "Instalar, mantener y reparar sistemas eléctricos en viviendas unifamiliares y pequeños comercios.",
                                "Intervenir en sistemas monofásicos de baja tensión, con límites estrictos de potencia.",
                                "Efectuar ampliaciones menores y conexión de aparatos eléctricos bajo normas determinadas."
                            ]} />
                            <Paragraph>El instalador Clase C cumple un rol vital en la electrificación rural y urbana básica, asegurando que residencias y pequeños recintos cuenten con energía de modo seguro y normado.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="7. Instalador Eléctrico Clase D" icon={Power}>
                            <Paragraph>Clase D corresponde a la categoría de menor atribución dentro de la escala contemplada por el DS N°92. Está reservada para aquellas intervenciones de carácter muy específico y menor riesgo, como la instalación de aparatos o elementos aislados, sin intervención en circuitos de gran magnitud.</Paragraph>
                            <Paragraph>La certificación exige formación básica y la superación del respectivo examen SEC.</Paragraph>
                            <SectionHeader title="Atribuciones particulares:" />
                            <List items={[
                                "Ejecutar tareas de menor riesgo y complejidad en instalaciones preexistentes (reemplazo de luminarias, interruptores y tomacorrientes).",
                                "Prestar servicios de mantención de equipos menores en edificios, oficinas o domicilios particulares."
                            ]} />
                            <Paragraph>Aunque sus atribuciones son limitadas, la exigencia de regulación permite mantener un estándar básico de seguridad eléctrica en todas las instancias donde puedan existir riesgos de electrocución directa o indirecta.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="8. Requisitos de habilitación y La SEC" icon={BookOpen}>
                            <SectionHeader title="Requisitos generales de habilitación" />
                            <Paragraph>El DS N°92 establece que para optar a cualquiera de las clases de instalador eléctrico, el solicitante debe:</Paragraph>
                            <List items={[
                                "Presentar la documentación de estudios formales y/o cursos de especialización en electricidad certificada por instituciones reconocidas.",
                                "Comprobar experiencia mediante certificados laborales o prácticas supervisadas.",
                                "Aprobar el examen de idoneidad profesional ante la SEC, donde se evalúan conocimientos técnicos y normativos.",
                                "No haber sido sancionado previamente por faltas graves en materia eléctrica.",
                                "Demostrar actualización en normativas, particularmente en lo relativo a nuevas tecnologías, seguridad y eficiencia energética."
                            ]} />

                            <SectionHeader title="La SEC y el control del ejercicio profesional" />
                            <Paragraph>La Superintendencia de Electricidad y Combustibles (SEC) ejerce funciones de fiscalización y control del ejercicio profesional de los instaladores eléctricos. Entre sus facultades están:</Paragraph>
                            <List items={[
                                "Otorgar, renovar y cancelar licencias de instalador eléctrico.",
                                "Llevar registros públicos de instaladores habilitados, sus categorías y sanciones.",
                                "Fomentar la capacitación continua mediante la publicación de las Normas Técnicas Sector Electricidad y la difusión de actualizaciones tecnológicas.",
                                "Realizar auditorías, inspecciones y fiscalizaciones en terreno, exigiendo que toda obra relevante sea ejecutada y certificada por personal idóneo, según lo establece el DS N°92 y normativa asociada."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="9. Impacto y Perspectivas Futuras" icon={Globe}>
                            <SectionHeader title="Impacto de la clasificación en la seguridad y el desarrollo" />
                            <Paragraph>La segmentación de los instaladores eléctricos en clases diferenciadas por el tipo y complejidad de obras que pueden realizar ha permitido, a nivel nacional e internacional:</Paragraph>
                            <List items={[
                                "Reducir los siniestros eléctricos en viviendas, industrias y espacios públicos, al evitar la intervención de personas no capacitadas.",
                                "Fomentar la especialización y perfeccionamiento, alineando la formación técnica con las demandas del sector energético global.",
                                "Promover la innovación regulatoria, adaptando las certificaciones a nuevas tecnologías, como la integración de energías renovables y la electromovilidad.",
                                "Impulsar la equidad territorial, facilitando la electrificación de sectores rurales y urbanos mediante recursos humanos calificados en distintos niveles profesionales (Roldán Viloria, 2008)."
                            ]} />
                            <Paragraph>Como señala Roldán Viloria (2008), la disponibilidad de personal técnico debidamente acreditado es un factor determinante para los procesos de electrificación y expansión del sistema energético nacional, y es un patrón replicado en diferentes partes del mundo.</Paragraph>

                            <SectionHeader title="Perspectivas actuales y futuras: nuevas demandas" />
                            <Paragraph>En el actual contexto global, las funciones del instalador eléctrico se ven complejizadas por la emergencia de nuevas tecnologías y desafíos, como la eficiencia energética, el uso de energías renovables, la domótica, la digitalización de la red y la incorporación de prácticas medioambientalmente responsables.</Paragraph>
                            <Paragraph>La actualización permanente y la adaptación a estándares internacionales, en lo normativo y en lo técnico, se han transformado en requisitos indispensables no sólo para el instalador Clase A, sino para todas las categorías. El DS 8/2019, por ejemplo, introduce nuevos criterios de seguridad, montaje y tecnologías asociadas —materias que todo instalador debe conocer y que son examinadas en la reválida de las licencias profesionales (SEC).</Paragraph>
                            <Paragraph>La tendencia mundial apunta a sistemas normativos que favorecen la especialización y la recalificación periódica, con énfasis en la formación continua y el uso de plataformas electrónicas de registro, fiscalización y denuncia. Asimismo, en un contexto de integración global, es común encontrar homologaciones de certificados de competencia para la movilidad internacional de técnicos calificados.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones del Decreto Supremo N°92</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                El Decreto Supremo N°92 de 1983 constituye la base normativa sobre la cual se estructura la profesionalización y certificación de los instaladores eléctricos en Chile. Su segmentación en clases —A, B, C y D— permite adecuar el perfil profesional a la medida de los requerimientos técnicos, de seguridad y legales de cada proyecto u obra, brindando protección a los usuarios y asegurando la idoneidad de quienes intervienen en el sector eléctrico.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Como señala la bibliografía base y las Normas Técnicas Sector Electricidad, la regulación es un factor fundamental para la sostenibilidad y desarrollo del sistema eléctrico nacional, especialmente en un contexto de cambio tecnológico acelerado y de creciente conciencia medioambiental. Para los estudiantes y futuros profesionales del rubro, comprender integralmente los aspectos legales, técnicos y éticos asociados a la clasificación de los instaladores eléctricos es condición básica para el ejercicio responsable y actualizado de la actividad, insertándose a su vez en los procesos globales de transformación energética y desarrollo sostenible.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200 font-bold mt-4">
                                En definitiva, el conocimiento acabado del DS N°92 y de la normativa chilena vigente es, junto con la capacitación constante, el principal diferenciador entre una instalación eléctrica segura, legal y eficiente, y una potencial fuente de riesgo y siniestralidad.
                            </Paragraph>
                        </div>

                        {/* --- ARTICULO 3 --- */}
                        <div className="mt-20 mb-12 border-l-8 border-[#D1202F] pl-8 py-2">
                            <h2 className="text-4xl font-black text-[#002855] dark:text-white uppercase tracking-tighter leading-tight">
                                Perfil del Empleo en la <br /> <span className="text-[#D1202F]">Industria Eléctrica</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La industria eléctrica es uno de los sectores más dinámicos, complejos e indispensables para el desarrollo socioeconómico a nivel global. Desde la producción y transmisión hasta la distribución y el consumo final de la energía eléctrica, se requiere un amplio espectro de profesionales y técnicos capacitados para garantizar un servicio eficiente, seguro y sostenible. Comprender el perfil del empleo en esta industria implica analizar los conocimientos, habilidades y competencias requeridas, así como las responsabilidades y oportunidades profesionales dentro de un marco normativo y técnico particular, el cual se ve influido, entre otros aspectos, por la normativa chilena y los estándares internacionales.</Paragraph>
                            <Paragraph>Utilizando como referencia principal las obras "Fuentes de Energía" de José Roldán Viloria (2008) y las Normas Técnicas del Sector Electricidad (Santiago de Chile, SEC), este texto académico profundiza en el perfil laboral demandado en la industria eléctrica, abordando sus competencias esenciales, los distintos ámbitos de acción, las exigencias regulatorias, la necesidad de actualización constante, así como los desafíos y tendencias futuras que delinean las posibilidades de desarrollo profesional.</Paragraph>
                        </div>

                        <ExpansionTile title="1. Caracterización General" icon={UserX}>
                            <Paragraph>El empleo en la industria eléctrica abarca una variedad de roles que van desde la ingeniería y la administración, hasta la operación, el mantenimiento y la supervisión en terreno. Dentro de este rubro, se agrupan tanto empresas de generación, transmisión y distribución de electricidad, como organismos de regulación, supervisión, servicios auxiliares y proveedores de equipos y tecnología.</Paragraph>
                            <Paragraph>Según Roldán Viloria (2008), el desarrollo y buen funcionamiento de la industria eléctrica depende de la correcta interacción entre estos distintos actores, quienes deben poseer una sólida formación técnica, una profunda comprensión de la normativa vigente y un alto compromiso con la seguridad y la eficiencia operativa. Para ello, el perfil profesional demanda una combinación de conocimientos en ciencias físicas, habilidades en gestión de recursos, dominio de la normativa técnica y capacidad para resolver problemas en contextos dinámicos.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="2. Conocimientos y Competencias" icon={Award}>
                            <SectionHeader title="2.1 Formación Académica" />
                            <Paragraph>La base de formación para el empleo en la industria eléctrica suele ser de tipo técnico-profesional o universitaria, abarcando carreras como Ingeniería Eléctrica, Ingeniería de Ejecución en Electricidad, Técnico en Electricidad, Ingeniería en Automatización, entre otras. A su vez, existe una variedad de rutas de especialización, como sistemas de alta tensión, energías renovables, eficiencia energética, regulación y normativas.</Paragraph>

                            <SectionHeader title="2.2 Conocimientos Técnicos" />
                            <Paragraph>Los profesionales y técnicos en este campo deben dominar áreas como generación de energía eléctrica —ya sea basada en fuentes fósiles, renovables o mixtas—, transmisión mediante redes de alta, media y baja tensión, distribución segura hasta el usuario final, protección de instalaciones, análisis de fallas, y mantenimiento predictivo y correctivo. El conocimiento de la normativa sectorial es indispensable; en el caso de Chile, la orientación técnica está regida por pliegos tales como el DS N° 8/2019 de la SEC, que establecen requisitos específicos sobre instalaciones de baja tensión, condiciones de seguridad, protección y espacio de trabajo, entre otros.</Paragraph>

                            <SectionHeader title="2.3 Normativa y Regulación" />
                            <Paragraph>Según la Normativa Técnica del Sector Electricidad (SEC, Chile), el profesional eléctrico debe comprender y aplicar preceptos legales y técnicos relacionados con el diseño, construcción, operación y mantenimiento de sistemas eléctricos. Esto incluye el cumplimiento de normas nacionales e internacionales, protocolos de seguridad, licenciamientos, permisos ambientales y actualización constante de los marcos regulatorios. El conocimiento y la correcta interpretación de documentos como el DS 8/2019 resultan esenciales para la prevención de accidentes, optimización del funcionamiento y cumplimiento de los estándares medioambientales.</Paragraph>

                            <SectionHeader title="2.4 Habilidades Transversales" />
                            <Paragraph>Más allá de los conocimientos técnicos, las habilidades transversales adquieren especial relevancia. Entre ellas se encuentran:</Paragraph>
                            <List items={[
                                "Capacidad de análisis y resolución de problemas complejos en tiempo real.",
                                "Gestión de equipos interdisciplinarios y trabajo colaborativo.",
                                "Comunicación efectiva, tanto oral como escrita, para la redacción de informes técnicos y capacitación de usuarios o equipos de trabajo.",
                                "Adaptación a la innovación y la actualización tecnológica constante.",
                                "Rigurosidad ante la seguridad, procedimientos de emergencia y normativas de prevención de riesgos.",
                                "Conciencia medioambiental y social en el desarrollo de proyectos, considerando los impactos y la sostenibilidad."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="3. Roles y Áreas de Desempeño" icon={ActivitySquare}>
                            <Paragraph>El sector eléctrico ofrece una amplia gama de perfiles laborales, cada uno con competencias y funciones específicas, que se pueden agrupar de acuerdo a las etapas del proceso eléctrico:</Paragraph>

                            <SectionHeader title="3.1 Generación de Energía Eléctrica" />
                            <Paragraph>Aquí, los profesionales participan en la operación de centrales de generación (hidráulicas, térmicas, solares, eólicas, geotérmicas, entre otras), optimizando el uso de recursos y asegurando el cumplimiento de los parámetros de eficiencia y sostenibilidad. Las funciones pueden incluir el diseño de sistemas generadores, gestión de recursos energéticos, supervisión de la operación y la implementación de tecnologías limpias.</Paragraph>

                            <SectionHeader title="3.2 Transmisión de Energía Eléctrica" />
                            <Paragraph>Los empleos en este ámbito demandan expertos en el diseño, ampliación y mantenimiento de líneas de transmisión y subestaciones eléctricas, el control de flujos de energía en sistemas interconectados, gestión de la confiabilidad y seguridad de la red, y aplicación estricta de normativas técnicas, como las señaladas en los pliegos técnicos del DS 8/2019, en lo relativo a condiciones de montaje y protección en instalaciones de media y alta tensión.</Paragraph>

                            <SectionHeader title="3.3 Distribución y Empalmes" />
                            <Paragraph>En la distribución, el empleo se enfoca en la entrega eficiente de energía a los usuarios finales. Aquí, los técnicos y profesionales se ocupan del diseño y mantención de redes de baja tensión, la instalación de empalmes domiciliarios e industriales, la implementación de sistemas de protección contra contactos directos e indirectos, así como la supervisión del cumplimiento de los espacios de trabajo, tableros, alimentadores y sistemas de puesta a tierra conforme a la normativa vigente.</Paragraph>

                            <SectionHeader title="3.4 Supervisión y Fiscalización" />
                            <Paragraph>Otra área relevante es la de supervisión y fiscalización, tanto desde las empresas eléctricas como desde entidades regulatorias. Los profesionales en este ámbito deben asegurar que las instalaciones cumplan los estándares definidos, que los sistemas de protección funcionen apropiadamente y que las obras se ejecuten bajo las condiciones exigidas, según lo dispuesto, por ejemplo, en los pliegos técnicos del DS 8/2019.</Paragraph>

                            <SectionHeader title="3.5 Innovación, Investigación y Desarrollo" />
                            <Paragraph>El desarrollo tecnológico y la transición energética han impulsado la demanda de perfiles enfocados en la innovación, automatización, digitalización y la integración de energías renovables, generación distribuida y sistemas inteligentes de gestión energética. Los perfiles en esta área se caracterizan por el dominio de nuevas tecnologías, capacidad de gestión de proyectos de I+D y aplicación de soluciones innovadoras para la mejora continua de los sistemas eléctricos.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="4. Responsabilidades y Condiciones" icon={ShieldAlert}>
                            <SectionHeader title="4.1 Seguridad y Prevención de Riesgos" />
                            <Paragraph>El trabajo en la industria eléctrica involucra, inherentemente, riesgos significativos asociados al manejo de la energía, tanto en ambientes industriales como residenciales. Por tal motivo, uno de los componentes clave del perfil profesional es la formación y el cumplimiento estricto de las normativas de seguridad, tales como la utilización de equipos de protección personal, la señalización adecuada, el respeto de las distancias mínimas en espacios de trabajo y el conocimiento de protocolos ante situaciones de emergencia. Además, se exige la aplicación de medidas de protección contra contacto directo e indirecto, verificando el correcto funcionamiento de sistemas de aislación, sistemas diferenciales y dispositivos de puesta a tierra.</Paragraph>

                            <SectionHeader title="4.2 Cumplimiento Normativo y Técnico" />
                            <Paragraph>Los profesionales del rubro deben demostrar un apego irrestricto a los pliegos técnicos y normativas nacionales e internacionales, como lo establece la autoridad regulatoria chilena (SEC). El DS 8/2019, por ejemplo, especifica requerimientos para instalaciones de baja tensión, protección de personas y bienes, condiciones del medio ambiente y montaje, así como la adecuada disposición de tableros, alimentadores y espacios de trabajo.</Paragraph>

                            <SectionHeader title="4.3 Orientación al Servicio y Satisfacción del Usuario" />
                            <Paragraph>Otra responsabilidad crucial es mantener altos niveles de servicio y confiabilidad energética, lo cual exige respuestas ágiles ante situaciones de fallas, atención a emergencias, desarrollo de planes de mantenimiento preventivo y respuesta proactiva a solicitudes o reclamos de los usuarios.</Paragraph>

                            <SectionHeader title="4.4 Compromiso con la Sustentabilidad" />
                            <Paragraph>En concordancia con las tendencias globales, el empleo eléctrico hoy exige una visión integradora respecto del cuidado ambiental, la eficiencia energética y la responsabilidad social. El profesional debe conocer la normativa ambiental vigente, realizar evaluaciones de impacto y reducir al mínimo la huella ecológica de los proyectos y operaciones, promoviendo tecnologías limpias y eficiencia energética.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="5. Normativa Chilena y Tendencias Globales" icon={Globe}>
                            <SectionHeader title="5. Normativa Chilena y su Influencia" />
                            <Paragraph>Tal como lo detallan las Normas Técnicas del Sector Electricidad, y los lineamientos establecidos en el DS 8/2019, la formación y desempeño profesional en Chile está fuertemente condicionado por el conocimiento normativo y su correcta aplicación. Las competencias clave incluyen:</Paragraph>
                            <List items={[
                                "Interpretación y aplicación de los pliegos técnicos respectivos, que definen estándares para la seguridad, eficiencia y calidad en las instalaciones.",
                                "Conocimiento de los esquemas de distribución y empalmes, para la adecuada conexión de consumidores a las redes eléctricas.",
                                "Diseño y verificación de sistemas de protección contra contactos eléctricos directos e indirectos.",
                                "Evaluación y montaje de instalaciones considerando las condiciones ambientales, los materiales y los procedimientos de trabajo seguro.",
                                "Planificación de espacios de trabajo y disposición de tableros y alimentadores con fines de operación y mantenimiento seguro.",
                                "Implementación efectiva de los sistemas de puesta a tierra, esenciales para la protección de personas y activos."
                            ]} />

                            <SectionHeader title="6. Tendencias Globales y Desafíos" />
                            <Paragraph>El contexto global exige al profesional de la industria eléctrica una capacidad de adaptación e integración a cambios tecnológicos acelerados, nuevas regulaciones internacionales, demanda por energías renovables, digitalización de la red y la incorporación de conceptos como redes inteligentes (smart grids) y electromovilidad. Estos aspectos abren oportunidades laborales no solo en el ámbito local, sino también internacional, requiriendo competencias en gestión de proyectos, habilidades en inglés técnico, conocimiento de estándares internacionales y certificaciones globales.</Paragraph>
                            <Paragraph>Según Roldán Viloria (2008), la globalización y la interconectividad de los sistemas energéticos han ampliado el espectro y la demanda de profesionales con visión integral y capacidad de abordar problemáticas complejas, como la gestión de la variabilidad y estabilidad de la red frente a la integración masiva de energías renovables, la ciberseguridad en sistemas automatizados y la optimización del uso de recursos en un contexto de descarbonización.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="7. Oportunidades y Trayectorias" icon={TrendingUp}>
                            <Paragraph>El perfil del empleo en la industria eléctrica es versátil y permite diversas trayectorias de desarrollo. Desde roles operativos y de supervisión, se puede transitar a cargos de mayor responsabilidad en gestión de proyectos, coordinación de sistemas, docencia, capacitación técnica, seguridad industrial, investigación, auditoría y consultoría especializada.</Paragraph>
                            <Paragraph>La formación continua y la actualización en nuevas tecnologías, normativas y tendencias del sector, así como la obtención de certificaciones adicionales (tanto nacionales como internacionales), son factores que aumentan significativamente la empleabilidad y las oportunidades de ascenso profesional dentro de la industria.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones Generales</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                El perfil del empleo en la industria eléctrica está definido por una sólida formación técnica, un conocimiento profundo de la normativa vigente, habilidades de gestión y orientación a la seguridad y la sostenibilidad. Este perfil responde a las exigencias de una industria en constante evolución, con marcos regulatorios estrictos y altos estándares de protección para las personas, los bienes y el medio ambiente.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Tanto las indicaciones de la bibliografía especializada —como la obra de Roldán Viloria (2008)—, como las normativas dictadas a nivel nacional por la SEC, refuerzan la idea de que el profesional en la industria eléctrica debe ser versátil, comprometido con la calidad y la innovación, y permanente aprendiz y difusor de mejores prácticas.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200 font-bold mt-4">
                                El desafío futuro reside en mantener la capacidad adaptativa ante las nuevas tecnologías y satisfacer las crecientes demandas por procesos y fuentes energéticas cada vez más limpios, eficientes y sustentables.
                            </Paragraph>
                        </div>

                        {/* --- ARTICULO 4 --- */}
                        <div className="mt-20 mb-12 border-l-8 border-[#002855] pl-8 py-2">
                            <h2 className="text-4xl font-black text-[#002855] dark:text-white uppercase tracking-tighter leading-tight">
                                Servicios Asociados a la <br /> <span className="text-slate-500 dark:text-slate-400 text-3xl">Industria Eléctrica</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La industria eléctrica constituye un pilar fundamental en el desarrollo moderno de las sociedades, ya que proporciona la infraestructura y la energía necesarias para la vida cotidiana y para el crecimiento de la economía global. Junto con la generación, transmisión, distribución y consumo de energía eléctrica, existe una amplia variedad de servicios asociados que son críticos para el funcionamiento sostenible, eficiente y seguro del sector.</Paragraph>
                            <Paragraph>El propósito de este texto es analizar los principales servicios asociados a la industria eléctrica, considerando tanto los aspectos técnicos como aquellos relacionados con el marco normativo chileno y la comparación con tendencias globales, a partir de la bibliografía recomendada: Fuentes de energía de Roldán Viloria (2008) y las Normas Técnicas del Sector Electricidad elaboradas por la Superintendencia de Electricidad y Combustibles (SEC) de Chile.</Paragraph>
                        </div>

                        <ExpansionTile title="1. Concepto y Categorías Principales" icon={ListChecks}>
                            <SectionHeader title="Concepto de Servicios Asociados" />
                            <Paragraph>Los servicios asociados a la industria eléctrica comprenden todas aquellas actividades y procesos complementarios que, sin ser la generación, transmisión o distribución directa de la electricidad, son esenciales para el correcto funcionamiento del sistema eléctrico y el bienestar de los usuarios. Estos servicios contribuyen a asegurar la calidad, continuidad, seguridad y eficiencia energética.</Paragraph>
                            <Paragraph>La creciente complejidad de los sistemas energéticos, el avance tecnológico, la necesidad de adaptación ante desafíos ambientales y los cambios en la regulación han expandido el ámbito y relevancia de estos servicios. Así, no solo se habla de funciones tradicionales, sino que se incluyen nuevos enfoques tales como la eficiencia energética, la digitalización, el control ambiental y la integración de energías renovables.</Paragraph>

                            <SectionHeader title="Categorías de Servicios" />
                            <Paragraph>De acuerdo con Roldán Viloria (2008) y la normativa de la SEC, los principales servicios asociados a la industria eléctrica se pueden agrupar en:</Paragraph>
                            <List items={[
                                "Instalación, operación y mantenimiento de infraestructuras eléctricas",
                                "Supervisión y control de calidad",
                                "Medición, facturación y gestión comercial",
                                "Asesoría técnica y consultoría",
                                "Seguridad y protección",
                                "Gestión ambiental y eficiencia energética",
                                "Educación, capacitación y difusión tecnológica",
                                "Gestión de residuos y materiales peligrosos",
                                "Servicios de ingeniería y automatización",
                                "Servicios de emergencia y continuidad de suministro"
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="2. Operación, Mantenimiento y Supervisión" icon={Wrench}>
                            <SectionHeader title="Instalación, Operación y Mantenimiento" />
                            <List items={[
                                "Instalación: Incluye desde el diseño, montaje y puesta en marcha de equipos e infraestructuras eléctricas tales como líneas de transmisión, subestaciones, plantas generadoras, tableros y sistemas de distribución. El correcto servicio de instalación debe cumplir con los Pliegos Técnicos, como el DS 8/2019, y estándares internacionales.",
                                "Operación: Implica la administración y el manejo diario de los sistemas eléctricos, la gestión de la red y la respuesta ante contingencias para garantizar la continuidad y estabilidad del suministro.",
                                "Mantenimiento: Comprende actividades periódicas y preventivas que buscan prolongar la vida útil de los equipos e infraestructuras, reduciendo la probabilidad de fallos y accidentes. Puede ser correctivo, preventivo o predictivo."
                            ]} />
                            <Paragraph>Un ejemplo concreto es la necesidad de mantener en óptimas condiciones las puestas a tierra y garantizar el cumplimiento de las medidas de seguridad del DS 8/2019.</Paragraph>

                            <SectionHeader title="Supervisión y Control de Calidad" />
                            <Paragraph>La supervisión técnica es esencial e implica la verificación permanente del cumplimiento de estándares de calidad y seguridad, provista por entidades reguladoras (SEC) o empresas especializadas.</Paragraph>
                            <Paragraph>El control de calidad abarca pruebas y certificaciones en obras nuevas, auditorías de seguridad, análisis de cumplimiento normativo, monitoreo de condiciones operativas y análisis de incidentes. Incluye la validación de resistencia de aislamiento, continuidad de tierras y espacios de trabajo seguros.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="3. Gestión Comercial, Consultoría y Seguridad" icon={ShieldCheck}>
                            <SectionHeader title="Medición, Facturación y Gestión Comercial" />
                            <Paragraph>La medición comprende el uso de medidores digitales y sistemas avanzados de gestión de datos para facturación y análisis. En Chile, la normativa establece la obligatoriedad de equipos certificados y verificaciones periódicas.</Paragraph>
                            <Paragraph>La gestión comercial integra procesos de atención post-venta, comunicación de cortes, asesoramiento para la optimización del consumo y la adecuación de empalmes y contratos.</Paragraph>

                            <SectionHeader title="Asesoría Técnica y Consultoría" />
                            <Paragraph>Abarcan desde el diseño de sistemas eléctricos y análisis de riesgos, hasta la elaboración de estudios de impacto ambiental y proyectos de eficiencia energética. La consultoría es clave al integrar energías renovables o adaptar infraestructuras a normativas como el DS 8/2019.</Paragraph>

                            <SectionHeader title="Seguridad y Protección" />
                            <Paragraph>Incluyen el diseño de protecciones contra contactos directos e indirectos, procedimientos de seguridad ocupacional, certificación de personal, planes de emergencia y simulacros, cumpliendo con la normativa SEC sobre condiciones ambientales y señalización.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="4. Medio Ambiente, Residuos y Formación" icon={Flame}>
                            <SectionHeader title="Gestión Ambiental y Eficiencia Energética" />
                            <Paragraph>Los servicios incluyen evaluaciones de impacto ambiental, desarrollo de energías renovables, auditorías energéticas, análisis de ciclo de vida y gestión de permisos ambientales.</Paragraph>
                            <Paragraph>A nivel de usuario, abarcan estudios de consumo, implementación de tecnologías LED, domótica y automatización de procesos.</Paragraph>

                            <SectionHeader title="Gestión de Residuos y Materiales Peligrosos" />
                            <Paragraph>Comprende inventariar, recolectar y disponer de forma segura aceites dieléctricos, baterías, cables y equipos obsoletos, cumpliendo normativas locales e internacionales y fomentando la economía circular.</Paragraph>

                            <SectionHeader title="Educación, Capacitación y Difusión" />
                            <Paragraph>Oferta de cursos, diplomados y talleres sobre normativas (como las de la SEC), tecnologías emergentes (energía solar, redes inteligentes) y la difusión de riesgos y mejores prácticas para técnicos y usuarios finales.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="5. Automatización, Emergencias y Normativa" icon={Activity}>
                            <SectionHeader title="Servicios de Ingeniería y Automatización" />
                            <List items={[
                                "Diseño de sistemas de control y supervisión (SCADA).",
                                "Integración de redes inteligentes (smart grids).",
                                "Automatización de subestaciones y distribución.",
                                "Sistemas de gestión energética (EMS) y software de simulación."
                            ]} />
                            <Paragraph>Estos servicios permiten monitoreo remoto, análisis predictivo y optimización de flujos.</Paragraph>

                            <SectionHeader title="Servicios de Emergencia" />
                            <Paragraph>Incluyen atención 24 horas, reparación de líneas tras incidentes o desastres, provisión de generadores temporales, y planes de contingencia normados y fiscalizados por la SEC.</Paragraph>

                            <SectionHeader title="Marco Normativo y Perspectivas Futuras" />
                            <Paragraph>En Chile, el DS 8/2019 regula la formación, certificación y convergencia a estándares internacionales. A nivel global, las tendencias apuntan a la estandarización, interoperabilidad y digitalización.</Paragraph>
                            <Paragraph>El futuro estará marcado por la gestión de la flexibilidad de la demanda, almacenamiento energético, ciberseguridad, blockchain y el impacto del Internet de las Cosas (IoT) y la inteligencia artificial en la industria eléctrica.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones sobre Servicios Asociados</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Los servicios asociados a la industria eléctrica representan un componente vital para la operación, modernización y sostenibilidad del sector, siendo determinantes para la seguridad, calidad y eficiencia del suministro energético en Chile y el mundo.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La integración de servicios de mantenimiento, supervisión, asesoría, gestión ambiental, capacitación y digitalización, bajo el cumplimiento estricto del marco normativo vigente, resulta clave para afrontar los desafíos presentes y futuros de la industria eléctrica.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200 font-bold mt-4">
                                Finalmente, la continua evolución de tecnologías y regulaciones demanda que tanto empresas como profesionales se mantengan en permanente actualización y capacitación, maximizando así los beneficios sociales, económicos y medioambientales de una industria eléctrica moderna y globalizada.
                            </Paragraph>
                        </div>

                        {/* --- ARTICULO 5 --- */}
                        <div className="mt-20 mb-12 border-l-8 border-[#D1202F] pl-8 py-2">
                            <h2 className="text-4xl font-black text-[#002855] dark:text-white uppercase tracking-tighter leading-tight">
                                Competencias de un Técnico Eléctrico <br /> <span className="text-[#D1202F] text-3xl">Conocimientos, Habilidades y Actitudes</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>En el contexto global actual y especialmente en el sector eléctrico chileno, la formación de técnicos eléctricos requiere una sólida combinación de conocimientos, habilidades y actitudes. Según la bibliografía pertinente (Fuentes de energía de Roldán Viloria, 2008; Normas Técnicas Sector Electricidad, SEC), estos tres ejes conforman el perfil profesional indispensable para abordar los desafíos del rubro, garantizando el cumplimiento de la normativa vigente, la seguridad, la eficiencia y la sostenibilidad de las instalaciones eléctricas.</Paragraph>
                            <Paragraph>Este texto de estudio desarrolla en profundidad los conocimientos requeridos, las habilidades esenciales y las actitudes que deben manifestar los técnicos eléctricos, considerando como referencia la legislación chilena, especialmente los Pliegos Técnicos DS 8/2019, y en un contexto global marcado por la innovación y los desafíos medioambientales.</Paragraph>
                        </div>

                        <ExpansionTile title="I. Conocimientos de un Técnico Eléctrico" icon={BookOpen}>
                            <SectionHeader title="1. Fundamentos de Electricidad y Energía" />
                            <Paragraph>Todo técnico eléctrico debe poseer una profunda base en física y matemáticas aplicadas. Este conocimiento es la plataforma para comprender los principios fundamentales de la electricidad: la tensión, la corriente, la resistencia y la potencia (Roldán Viloria, 2008). Además, es esencial entender la composición de los diferentes sistemas de energía: la generación, la transmisión, la distribución y el consumo.</Paragraph>
                            <Paragraph>En Chile y a nivel global, los técnicos eléctricos deben estar familiarizados con:</Paragraph>
                            <List items={[
                                "Conceptos de corriente alterna y continua.",
                                "Leyes de Ohm y Kirchhoff.",
                                "Componentes básicos: resistencias, capacitadores, inductores.",
                                "Sistemas polifásicos y monofásicos.",
                                "Interpretación de esquemas y diagramas eléctricos."
                            ]} />

                            <SectionHeader title="2. Conocimiento de la Normativa y Legislación Vigente" />
                            <Paragraph>El dominio de la normativa chilena constituye una competencia crítica. En particular, el DS 8/2019 establece los requisitos y procedimientos que regulan las instalaciones eléctricas de baja tensión, así como los mecanismos de protección (SEC, Normas Técnicas Sector Electricidad). Este conocimiento abarca:</Paragraph>
                            <List items={[
                                "Identificación y correcta aplicación de los estándares nacionales e internacionales.",
                                "Requisitos de protección contra contactos directos e indirectos.",
                                "Disposiciones relativas al diseño, montaje y mantenimiento de instalaciones.",
                                "Criterios para la selección de materiales y equipos eléctricos certificados.",
                                "Conocimiento de los procedimientos de inspección y fiscalización."
                            ]} />
                            <Paragraph>Una correcta interpretación y aplicación de la normativa no solo maximiza la seguridad, sino que asegura la compatibilidad de las instalaciones eléctricas a nivel internacional, requisito clave en un mercado globalizado.</Paragraph>

                            <SectionHeader title="3. Sistemas de Generación, Transmisión y Distribución" />
                            <Paragraph>El técnico eléctrico debe comprender cómo se produce, transmite y distribuye la energía eléctrica, considerando tanto las fuentes convencionales (fósiles, hidráulica) como las renovables (solar, eólica). Analizar los esquemas de distribución, los sistemas de empalme, así como las pérdidas asociadas en cada etapa, es fundamental para el desarrollo eficiente y sustentable del sector (Roldán Viloria, 2008).</Paragraph>
                            <List items={[
                                "Principios fundamentales de generación eléctrica.",
                                "Funcionamiento y operación de subestaciones y líneas de transmisión.",
                                "Particularidades de los sistemas de distribución urbana y rural.",
                                "Configuración y capacidad de los transformadores de distribución."
                            ]} />
                            <Paragraph>Asimismo, deben comprender los impactos del diseño y operación de estos sistemas en el medioambiente, así como las normas técnicas asociadas para minimizar riesgos y optimizar recursos energéticos.</Paragraph>

                            <SectionHeader title="4. Instalaciones Eléctricas de Baja Tensión" />
                            <Paragraph>La correcta ejecución de instalaciones eléctricas de baja tensión involucra el conocimiento técnico sobre tableros de distribución, alimentadores, canalizaciones, mecanismos de protección y sistemas de puesta a tierra. El DS 8/2019 y la normativa SEC establecen los criterios mínimos para el diseño seguro y eficiente de estos sistemas, detallando:</Paragraph>
                            <List items={[
                                "Selección y dimensionamiento de conductores.",
                                "Tipificación de tableros, interruptores, fusibles y protección diferencial.",
                                "Normas para la correcta identificación de circuitos eléctricos.",
                                "Especificaciones para la compatibilidad electromagnética y la segregación de circuitos.",
                                "Criterios de instalación para ambientes residenciales, comerciales e industriales."
                            ]} />

                            <SectionHeader title="5. Medidas de Seguridad y Protección" />
                            <Paragraph>El componente de seguridad es central en la labor de un técnico eléctrico. Según el DS 8/2019, se debe garantizar la protección contra contactos directos (aislamientos, barreras, recubrimientos) e indirectos (dispositivos de corte automático, puesta a tierra). El conocimiento detallado de estas medidas es vital para prevenir accidentes y daños a personas y bienes.</Paragraph>

                            <SectionHeader title="6. Impacto Ambiental y Sostenibilidad" />
                            <Paragraph>La conciencia medioambiental y el conocimiento sobre el impacto de las instalaciones eléctricas son parte integral de la competencia técnica. En línea con los Objetivos de Desarrollo Sostenible (ODS), el técnico debe comprender:</Paragraph>
                            <List items={[
                                "Encadenamientos entre energía y cambio climático.",
                                "Normativas y criterios de eficiencia energética.",
                                "Gestión de residuos y reciclaje de materiales eléctricos.",
                                "Implicancias de la transición hacia energías renovables."
                            ]} />
                            <Paragraph>Según Roldán Viloria (2008), el técnico eléctrico actúa hoy no solo como ejecutor de instalaciones, sino como agente activo en la promoción de la eficiencia y sostenibilidad del sector.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="II. Habilidades del Técnico Eléctrico" icon={Wrench}>
                            <SectionHeader title="1. Habilidades Técnicas" />
                            <Paragraph>Las habilidades técnicas refieren a la capacidad de aplicar los conocimientos teóricos en contextos reales, asegurando la correcta ejecución y mantención de sistemas eléctricos según los requerimientos legales y técnicos. Entre ellas destacan:</Paragraph>
                            <List items={[
                                "Lectura e interpretación de planos eléctricos y diagramas unifilares.",
                                "Montaje de tableros, canalizaciones y sistemas de distribución según DS 8/2019.",
                                "Uso seguros de herramientas y equipos de medición (multímetros, pinzas amperimétricas, comprobadores de aislamiento).",
                                "Ejecución de empalmes y conexiones garantizando la continuidad eléctrica y la seguridad.",
                                "Diagnóstico y reparación de fallas en sistemas eléctricos.",
                                "Aplicación de pruebas de protecciones diferenciales y de puesta a tierra.",
                                "Instalación y comprobación de sistemas de protección (térmicos, magnéticos y diferenciales).",
                                "Diligencia en registros y bitácoras técnicas para seguimiento y control de proyectos."
                            ]} />
                            <Paragraph>La SEC y los estándares internacionales enfatizan la necesidad de dominar procedimientos normalizados para la prevención de errores o accidentes laborales, tanto en la ejecución como en las tareas de mantenimiento y supervisión.</Paragraph>

                            <SectionHeader title="2. Habilidades Instrumentales y Digitales" />
                            <Paragraph>El progreso tecnológico dota al técnico eléctrico de herramientas digitales que facilitan el diseño, la simulación y la gestión de instalaciones eléctricas. Esto incluye:</Paragraph>
                            <List items={[
                                "Manejo de software de dibujo técnico (CAD) para elaboración de proyectos eléctricos.",
                                "Utilización de sistemas de monitoreo en línea y telemetría para instalaciones complejas.",
                                "Gestión digital de documentación, informes y certificaciones exigidas por la autoridad reguladora."
                            ]} />
                            <Paragraph>Adicionalmente, la familiaridad con tecnologías emergentes —como energías renovables, sistemas inteligentes de distribución y redes eléctricas avanzadas— representa una ventaja competitiva en el mercado global.</Paragraph>

                            <SectionHeader title="3. Resolución de Problemas" />
                            <Paragraph>La capacidad de analizar situaciones complejas, identificar la raíz de fallas y aplicar soluciones de manera eficiente es una habilidad esencial. En contextos de urgencia o riesgo, la toma de decisiones rápidas y fundamentadas puede marcar la diferencia entre un incidente menor y una situación crítica de seguridad.</Paragraph>
                            <List items={[
                                "Diagnóstico preciso de fallas y disfunciones.",
                                "Evaluación de alternativas técnicas y selección de la más idónea.",
                                "Implementación de acciones correctivas y preventivas."
                            ]} />
                            <Paragraph>Estas habilidades requieren una combinación de experiencia práctica, conocimiento profundo y actualización permanente.</Paragraph>

                            <SectionHeader title="4. Trabajo en Equipo y Comunicación Efectiva" />
                            <Paragraph>El técnico eléctrico opera frecuentemente en equipos multidisciplinarios. Debe poseer habilidades para comunicarse de manera efectiva con colegas, supervisores y clientes, traduciendo requerimientos técnicos en soluciones concretas y comprensibles. Ello implica:</Paragraph>
                            <List items={[
                                "Claridad en la elaboración de informes técnicos.",
                                "Colaboración para el cumplimiento de metas y plazos de proyectos.",
                                "Capacidad de transmitir procedimientos de seguridad y operación a pares y usuarios no especializados.",
                                "Adaptabilidad para el trabajo con equipos remotos y multiculturales, especialmente en un contexto global."
                            ]} />

                            <SectionHeader title="5. Adaptabilidad y Aprendizaje Continuo" />
                            <Paragraph>El sector eléctrico está en constante transformación debido al avance tecnológico y las exigencias regulatorias. El técnico competente es aquel preparado para la actualización y adquisición de nuevos conocimientos, tanto a través de la educación formal como mediante el autoaprendizaje y la experiencia práctica (Roldán Viloria, 2008).</Paragraph>
                            <Paragraph>La participación activa en cursos, talleres, seminarios y la consulta permanente de la legislación y la bibliografía técnica son claves para mantener vigentes las competencias profesionales.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="III. Actitudes de un Técnico Eléctrico" icon={UserCheck}>
                            <SectionHeader title="1. Compromiso con la Seguridad" />
                            <Paragraph>Las actitudes relativas a la seguridad personal y de terceras personas son intransables en el perfil del técnico eléctrico. El respeto por la normativa, la identificación y control de riesgos, y la disposición a alertar sobre condiciones inseguras reflejan solidez ética y profesional. El técnico debe:</Paragraph>
                            <List items={[
                                "Priorizar siempre la seguridad sobre la rapidez o el costo.",
                                "Mantener orden y limpieza en los espacios de trabajo.",
                                "Cumplir rigurosamente los protocolos de operación y emergencia."
                            ]} />
                            <Paragraph>Según la Normas Técnicas Sector Electricidad, la cultura preventiva es responsabilidad de cada integrante de los equipos de trabajo, favoreciendo así ambientes laborales seguros y libres de accidentes.</Paragraph>

                            <SectionHeader title="2. Responsabilidad y Ética Profesional" />
                            <Paragraph>Alineado con la legislación chilena y los estándares globales, la responsabilidad ética se manifiesta en el respeto por las normativas, la confidencialidad en el manejo de información y la integridad ante dilemas profesionales. El técnico eléctrico debe actuar con honestidad, evitando prácticas que comprometan la moral, la seguridad o la legalidad de los proyectos.</Paragraph>

                            <SectionHeader title="3. Orientación a la Calidad y el Mejoramiento Continuo" />
                            <Paragraph>El interés por la excelencia, manifestado en la revisión constante de procesos y resultados, caracteriza al mejor profesional. El técnico eléctrico debe asumir una disposición proactiva para identificar brechas y oportunidades de mejora, tanto en las instalaciones como en los procesos internos del equipo de trabajo.</Paragraph>
                            <List items={[
                                "Revisión sistemática del trabajo realizado.",
                                "Apertura a las críticas constructivas y a la autoevaluación.",
                                "Participación en iniciativas de innovación y mejora técnica."
                            ]} />

                            <SectionHeader title="4. Compromiso con el Medioambiente" />
                            <Paragraph>Así como el conocimiento sobre sostenibilidad es crítico, también lo es la actitud responsable hacia el entorno. El técnico debe considerar los criterios de eficiencia, reciclaje y reducción de residuos, promoviendo la utilización de tecnologías limpias y avanzadas, donde la oportunidad lo permita (Roldán Viloria, 2008).</Paragraph>

                            <SectionHeader title="5. Servicio al Cliente y Orientación a las Personas" />
                            <Paragraph>La orientación al usuario final es otro rasgo distintivo: la disposición para explicar, asesorar y responder dudas de manera asertiva construye confianza, incrementa la satisfacción de los clientes y contribuye a la reputación del sector eléctrico. El trato respetuoso y la empatía aseguran relaciones laborales y comerciales sólidas y perdurables.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusión Integral de Competencias</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Las competencias de un técnico eléctrico surgen de la fusión equilibrada de conocimientos sólidos, habilidades aplicadas y actitudes positivas. La permanente actualización técnica y la adhesión rigurosa a la normativa —específicamente el DS 8/2019 y las directrices internacionales— garantizan el cumplimiento de las exigencias del sector y el aporte efectivo al desarrollo sostenible.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Referencias como Fuentes de energía de Roldán Viloria (2008) y la Normas Técnicas Sector Electricidad (SEC) constituyen las bases para la formación y el ejercicio responsable, ético y eficaz del técnico eléctrico, capaz de responder a los desafíos energéticos del presente y del futuro.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200 font-bold mt-4">
                                Por tanto, la formación en competencias no es un proceso acabado, sino una responsabilidad continua a lo largo de toda la vida profesional, en sintonía con los cambios tecnológicos, regulatorios y sociales que impactan la industria eléctrica global.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Bibliografía</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Ministerio de Economía, Fomento y Reconstrucción</strong>
                                        <span className="text-slate-500 italic">Decreto Supremo N°92. Reglamento de Instaladores Eléctricos y de Electricistas de Recintos de Espectáculos Públicos.</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Roldán Viloria, José</strong>
                                        <span className="text-slate-500 italic">Fuentes de energía. Madrid: Paraninfo, 2008.</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Superintendencia de Electricidad y Combustibles (SEC)</strong>
                                        <span className="text-slate-500 italic">Normas Técnicas Sector Electricidad. Santiago de Chile, 200-.</span>
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
                        {glossaryAE3.map((item, i) => (
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
                    <ArrowLeft size={16} /> Finalizar Sesión AE3
                </button>
            </div>

        </div>
    );
};

export default AE3View;
