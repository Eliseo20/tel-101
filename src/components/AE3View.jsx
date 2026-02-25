import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, Shield, Book,
    CheckCircle2, AlertTriangle, Zap, Activity, TrendingUp, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, ShieldCheck, Flame, BookOpen, UserX, ActivitySquare
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
        { term: "Interruptor diferencial (RCD/GFCI)", def: "Dispositivo de corriente residual que desconecta automáticamente la alimentación al detectar una diferencia de corriente entre los conductores activos, indicando una fuga a tierra." },
        { term: "Contacto directo", def: "Contacto de una persona con partes activas de una instalación eléctrica que normalmente están bajo tensión (ej. cables pelados)." },
        { term: "Contacto indirecto", def: "Contacto de una persona con masas o partes metálicas que normalmente no tienen voltaje, pero que están energizadas debido a un fallo de aislamiento." },
        { term: "Sensibilidad", def: "Valor de corriente diferencial a partir de la cual actúa el dispositivo (generalmente 30 mA para protección humana, y 100 o 300 mA para bienes/incendios)." },
        { term: "Transformador toroidal", def: "Sensor componente del interruptor diferencial encargado de detectar la diferencia de corriente o desbalance entre las fases y el neutro." },
        { term: "RCD Tipo AC", def: "Interruptor diferencial diseñado para detectar exclusivamente corrientes residuales alternas sinusoidales." },
        { term: "RCD Tipo B", def: "Interruptor diferencial avanzado capaz de detectar corrientes alternas, pulsantes, de alta frecuencia y corriente continua suave, usado en industria y carga de vehículos eléctricos." },
        { term: "Fibrilación ventricular", def: "Arritmia cardiaca grave potencialmente letal que puede producirse en el cuerpo humano al estar expuesto a corrientes eléctricas desde los 30 mA." }
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
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Módulo TEL302</span>
                        <span className="text-sm font-black dark:text-white uppercase">AE3: Instalación y Mantenimiento</span>
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
                                Protecciones Eléctricas: <br /> <span className="text-[#D1202F]">Instalación y Mantenimiento de Elementos de Protección: Protector Diferencial</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>En el campo de las instalaciones eléctricas, la seguridad juega un papel fundamental, tanto para la integridad de las personas como para la protección de los bienes materiales. Dentro de los múltiples dispositivos de protección utilizados en los circuitos eléctricos, los protectores diferenciales se destacan por su capacidad para prevenir accidentes derivados del contacto directo e indirecto con la electricidad, así como por su contribución a la reducción del riesgo de incendios eléctricos. La correcta selección, instalación y mantenimiento de estos elementos depende tanto del dominio teórico como del manejo de la simbología y la normativa internacional, tales como IEC (International Electrotechnical Commission) y ANSI (American National Standards Institute).</Paragraph>
                            <Paragraph>Este texto de estudio tiene por objetivo desarrollar de manera exhaustiva y académica todos los contenidos necesarios para que los futuros profesionales eléctricos sean capaces de realizar la instalación de protectores diferenciales en circuitos eléctricos, considerando la simbología, los componentes, el funcionamiento y la normativa vigente. Asimismo, se cubren los criterios de evaluación, promoviendo una comprensión profunda de los conceptos fundamentales apoyados en la bibliografía esencial representada especialmente por las obras de Pascual Martínez, Tomás y Mendoza Romero, Agapito.</Paragraph>
                        </div>

                        <ExpansionTile title="1. Simbología según norma IEC y ANSI" icon={BookOpen} defaultOpen={true}>
                            <SectionHeader title="1.1 Importancia de la simbología eléctrica" />
                            <Paragraph>La normalización de símbolos eléctricos es fundamental en la interpretación y elaboración de diagramas eléctricos ya que permite una comunicación clara y universal entre los distintos actores de la ingeniería eléctrica. La correcta identificación de elementos mediante simbología estandarizada es esencial tanto para el diseño, instalación, operación y mantenimiento de los sistemas eléctricos como para la seguridad de los mismos.</Paragraph>

                            <SectionHeader title="1.2 Simbología IEC" />
                            <Paragraph>La Comisión Electrotécnica Internacional (IEC), en su norma IEC 60617, proporciona la base sobre la cual se construye la simbología para esquemas eléctricos utilizada a nivel mundial fuera de Estados Unidos. Algunos de los símbolos relevantes para los dispositivos de protección diferencial son los siguientes:</Paragraph>
                            <List items={[
                                "Interruptor: Un trazo plano con una separación al centro, a veces con un mecanismo simbólico adicional para detallar su tipo.",
                                "Interruptor automático: Suele representarse por dos líneas paralelas cortadas por una línea perpendicular (que indica el componente móvil).",
                                "Interruptor diferencial (RCD, Residual Current Device): Se representa generalmente como un interruptor con una bobina o círculo inscrito a su lado. La bobina simboliza el sensor diferencial de corriente.",
                                "Tierra: Representada por una línea vertical breve con varias líneas horizontales decrecientes debajo.",
                                "Neutro: Línea con una letra “N” o un trazo y un símbolo de tierra (según el país y la aplicación)."
                            ]} />
                            <Paragraph>Según las recomendaciones del IEC, esta simbología debe ser utilizada de manera consistente en los esquemas eléctricos con el fin de evitar interpretaciones erróneas que podrían comprometer la seguridad del sistema y de los usuarios.</Paragraph>

                            <SectionHeader title="1.3 Simbología ANSI" />
                            <Paragraph>ANSI desarrolla estándares ampliamente utilizados en América del Norte y algunos otros países. Para dispositivos de protección diferencial y otros elementos eléctricos se utiliza simbología ligeramente diferente:</Paragraph>
                            <List items={[
                                "Interruptor: Representado frecuentemente como un punto de contacto abierto o cerrado, o un trazo en ángulo.",
                                "Interruptor diferencial (GFCI, Ground Fault Circuit Interrupter): Suele representarse con un rectángulo dentro del cual se especifica el número de contactos, acompañando a veces de las letras “GFCI” o “RCD”.",
                                "Tierra: Línea recta descendentemente vertical con tres líneas horizontales decrecientes.",
                                "Neutro: Una línea diagonal atravesando un círculo, con una N cerca."
                            ]} />

                            <SectionHeader title="1.4 Uso práctico de la simbología en proyectos reales" />
                            <Paragraph>Tanto la IEC como la ANSI buscan garantizar que la información transmitida mediante planos eléctricos sea precisa y no ambigua. Por ejemplo, en proyectos donde se deben instalar interruptores diferenciales, los diagramas eléctricos deben identificar claramente la función diferencial, el tipo de interruptor, su localización en la red, la posición de los bornes de línea/carga y tierra, y cualquier accesorio relevante. El desconocimiento o mal uso de los símbolos puede llevar a conexiones erróneas y riesgosa operación.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="2. Contactos Directos e Indirectos" icon={UserX}>
                            <SectionHeader title="2.1 Definición de contacto directo" />
                            <Paragraph>El contacto directo ocurre cuando una persona entra en contacto con partes activas de una instalación eléctrica, es decir, con conductores o componentes energizados que, en condiciones normales de operación, están destinados a estar bajo tensión. Este tipo de contacto constituye uno de los mayores peligros en instalaciones eléctricas, pudiendo causar lesiones graves o fatales.</Paragraph>

                            <SectionHeader title="2.2 Definición de contacto indirecto" />
                            <Paragraph>El contacto indirecto se produce cuando una persona toca partes metálicas que normalmente no están energizadas, pero que pueden pasar a estarlo a causa de un fallo de aislamiento o una derivación a tierra. Ejemplos típicos incluyen la carcasa metálica de un electrodoméstico, tuberías, carcasas de maquinaria, entre otros.</Paragraph>

                            <SectionHeader title="2.3 Efectos del contacto eléctrico en el cuerpo humano" />
                            <Paragraph>Tanto el contacto directo como el indirecto pueden ser muy peligrosos. El daño dependerá del nivel de corriente, la duración y la trayectoria a través del cuerpo. A partir de 30 mA ya se pueden producir fibrilaciones ventriculares, siendo las protecciones diferenciales ideales para limitar la magnitud y el tiempo de exposición de la corriente de defecto.</Paragraph>

                            <SectionHeader title="2.4 Medidas básicas de protección" />
                            <Paragraph>Para evitar el contacto directo se recurre, entre otras técnicas, a:</Paragraph>
                            <List items={[
                                "El uso de aislamientos apropiados",
                                "Instalaciones fuera del alcance",
                                "Recubrimientos y barreras"
                            ]} />
                            <Paragraph>En tanto, la protección contra contactos indirectos se basa en:</Paragraph>
                            <List items={[
                                "La puesta a tierra de las masas",
                                "La instalación de dispositivos de corte automático (interruptores diferenciales)",
                                "Dobles aislamientos"
                            ]} />
                            <HighlightBox type="info">
                                <p>La instalación de interruptores diferenciales forma parte de las recomendaciones internacionales descritas en la normativa IEC 60364 y ANSI C33.16, y en manuales de referencia que subrayan la importancia de complementar la protección diferencial con la adecuada conexión a tierra.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="3. Interruptor Diferencial" icon={ShieldCheck}>
                            <SectionHeader title="3.1 Definición y principio de funcionamiento" />
                            <Paragraph>El interruptor diferencial, conocido técnicamente como dispositivo de corriente residual (RCD por sus siglas en inglés), es un equipo de seguridad cuya función principal es desconectar automáticamente la alimentación eléctrica de un circuito cuando detecta una diferencia de corriente entre los conductores activos (fase y neutro), diferencia que indica una fuga hacia tierra.</Paragraph>
                            <Paragraph>El funcionamiento se basa en el principio de que, bajo condiciones normales, toda la corriente que entra al circuito por la fase debe regresar por el neutro. Cualquier desbalance (corriente diferencial) sugiere que parte de la corriente está retornando a través de otro camino, generalmente el cuerpo de una persona hacia tierra.</Paragraph>

                            <SectionHeader title="3.2 Partes constitutivas" />
                            <List items={[
                                "Transformador toroidal o sensor diferencial: Elemento clave que detecta la diferencia de corriente entre conductores.",
                                "Mecanismo de disparo: Muelle y contactos que separan el circuito en caso de fuga.",
                                "Palanca de accionamiento: Permite la conexión o desconexión manual.",
                                "Módulo de prueba: Botón para comprobar el correcto funcionamiento del diferencial."
                            ]} />

                            <SectionHeader title="3.3 Valores nominales y características técnicas" />
                            <List items={[
                                "Sensibilidad: Corriente diferencial a partir de la cual actúa el dispositivo (30 mA típicamente para protección de personas, 100 o 300 mA para protección de bienes).",
                                "Tensión y corriente nominal: Debe adecuarse al circuito a proteger (220/240V; 10, 16, 25A, etc.).",
                                "Tipo de corriente detectada: Los RCD pueden ser para corriente alterna (AC), pulsante (A), continua (B), etc."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="4. Clasificación de Interruptores Diferenciales" icon={ListChecks}>
                            <SectionHeader title="4.1 Según el tipo de corriente detectada" />
                            <List items={[
                                "Tipo AC: Para corrientes residuales alternas sinusoidales.",
                                "Tipo A: Detectan corrientes alternas y pulsantes de fuga.",
                                "Tipo F: Adecuados para equipos con componentes de frecuencia variable.",
                                "Tipo B: Detectan además corrientes residuales de alta frecuencia y corriente continua suave. Usados en instalaciones industriales avanzadas o en infraestructuras con conversión electrónica de potencia."
                            ]} />

                            <SectionHeader title="4.2 Según el modo de disparo" />
                            <List items={[
                                "Electromecánicos: Funcionan sin alimentación auxiliar; detectan una diferencia de corriente y disparan mecánicamente.",
                                "Electrónicos: Necesitan alimentación y circuitos electrónicos para procesar la señal diferencial; pueden ofrecer funciones adicionales, como comunicación o monitoreo remoto."
                            ]} />

                            <SectionHeader title="4.3 Según la cantidad de polos" />
                            <List items={[
                                "Bipolares (2 polos): Para circuitos monofásicos (fase-neutro).",
                                "Tripolares / Tetrapolares (3 o 4 polos): Para circuitos trifásicos, con o sin neutro. Es esencial que todos los conductores activos (fases y, en su caso, neutro) pasen a través del sensor toroidal para detectar cualquier fuga de corriente al exterior del conjunto conductor."
                            ]} />

                            <SectionHeader title="4.4 Según aplicación" />
                            <List items={[
                                "Protección de personas: Usualmente con sensibilidad de 30 mA.",
                                "Protección de instalaciones: Sensibilidad de 100 mA o 300 mA, protegiendo incendios u otros daños materiales.",
                                "Protección selectiva (S): Con retardo frente a los disparos para coordinar con otros dispositivos ubicados aguas abajo o en jerarquía por zonas."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="5. Instalación de Interruptores Diferenciales" icon={Wrench}>
                            <SectionHeader title="5.1 Requisitos y consideraciones generales" />
                            <Paragraph>La instalación correcta de los interruptores diferenciales es un requerimiento normativo internacional. Los documentos IEC 60364 y ANSI C33.16 proporcionan directrices sobre la selección, ubicación y mantenimiento de los RCD para lograr una protección efectiva. El circuito a proteger debe estar claramente identificado y el dispositivo debe instalarse de modo que todos los conductores activos (y el neutro, si existe) pasen a través del sensor del diferencial, quedando aguas abajo de la protección.</Paragraph>

                            <Paragraph>Recomendaciones básicas:</Paragraph>
                            <List items={[
                                "Verificar que la corriente y tensión nominal coincidan con las características del circuito.",
                                "Garantizar acceso fácil para el control y prueba del dispositivo.",
                                "Realizar una adecuada conexión a tierra de las masas y neutro."
                            ]} />
                            <HighlightBox type="warning">
                                <p>Un error común que compromete la protección es conectar otros conductores (por ejemplo, tierra de protección) a la salida o retorno del interruptor diferencial; toda derivación fuera del camino del RCD resulta en pérdida de sensibilidad del equipo.</p>
                            </HighlightBox>

                            <SectionHeader title="5.2 Procedimiento de instalación paso a paso" />
                            <List items={[
                                "Desconectar la alimentación eléctrica general del tablero para evitar riesgos.",
                                "Seleccionar el interruptor diferencial adecuado basado en la corriente, los polos necesarios y la sensibilidad apropiada al tipo de protección (personas o instalaciones).",
                                "Montar físicamente el diferencial en el carril DIN del tablero eléctrico, asegurando correcta fijación.",
                                "Conectar los conductores de entrada (fase y neutro) provenientes del interruptor principal a los bornes de entrada del RCD.",
                                "Conectar los conductores de salida del diferencial hacia el circuito o circuitos a proteger; en circuitos monofásicos, habitualmente dos conductores; en circuitos trifásicos, las tres fases y el neutro si corresponde.",
                                "Verificar que el neutro de los circuitos aguas abajo no se encuentra conectado a otras tierras o neutros fuera del lado protegido.",
                                "Conectar la masa de las carcasas y elementos metálicos a la tierra física del sistema, independiente del RCD.",
                                "Restablecer la energía, y realizar la prueba funcional utilizando el pulsador de prueba incorporado en el RCD para verificar su correcto disparo.",
                                "Etiquetar claramente el circuito protegido para futuras tareas de mantenimiento."
                            ]} />

                            <SectionHeader title="5.3 Normativas aplicables" />
                            <Paragraph>Tanto la normativa IEC como ANSI establecen que la protección diferencial es obligatoria en circuitos que alimentan puntos de uso en acceso general (baños, cocinas, exteriores, etc.), así como en áreas con riesgo incrementado de contacto accidental. Las normativas precisan:</Paragraph>
                            <List items={[
                                "El valor máximo de disparo (IΔn ≤ 30 mA para protección de personas).",
                                "La coordinación con la protección de sobreintensidad aguas arriba para evitar daños en el dispositivo diferencial.",
                                "Las pruebas periódicas, indicadas en los manuales del fabricante y recomendaciones internacionales, típicamente cada 6 meses."
                            ]} />

                            <SectionHeader title="5.4 Mantenimiento de interruptores diferenciales" />
                            <Paragraph>El mantenimiento preventivo consiste en la verificación visual, la realización periódica del test incorporado, la comprobación de tornillos de conexión y terminales, así como la inspección del correcto estado de los aislamientos en los conductores entrantes y salientes.</Paragraph>
                            <Paragraph>Se recomienda realizar mediciones de la resistividad de la puesta a tierra y comprobar que la suma de corrientes inversas o parásitas no exceda la sensibilidad del RCD, para prevenir disparos no deseados.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="6. Aplicaciones Globales y 7. Caso Práctico" icon={ActivitySquare}>
                            <SectionHeader title="6. Aplicaciones Prácticas Globales" />
                            <Paragraph>En países europeos, americanos, asiáticos y africanos, la implementación de interruptores diferenciales es hoy en día una exigencia normativa para nuevos edificios y una recomendación para antiguas instalaciones. Las variantes en la red (monofásica, bifásica, trifásica), los estándares locales de distribución y los requisitos climáticos y ambientales determinan el tipo y modelo de RCD a emplear.</Paragraph>
                            <Paragraph>Es fundamental conocer las prácticas nacionales y locales, pero manejar la normativa y simbología internacional (IEC/ANSI) permite movilidad y versatilidad profesional en el trabajo global de la industria eléctrica. La globalización de la industria hace imprescindible que los técnicos e ingenieros estén capacitados para interpretar ambas normativas, evitando así defectos de instalación y asegurando la máxima protección.</Paragraph>

                            <SectionHeader title="7. Caso de Estudio: Instalación en una Vivienda" />
                            <Paragraph>A continuación se describe la aplicación práctica de los conocimientos desarrollados en una instalación domiciliaria:</Paragraph>
                            <List items={[
                                "Se cuenta con un tablero principal que alimenta varios circuitos de iluminación y enchufes. El electricista selecciona un RCD de 2 polos, 25A, sensibilidad 30mA, tipo A, adecuado para detectar corrientes alternas y pulsantes.",
                                "Previa desconexión eléctrica, identifica los conductores de fase y neutro, montando el RCD en el carril DIN del tablero.",
                                "Conecta el suministro proveniente del medidor a la entrada del RCD, y la salida hacia los diferentes circuitos internos.",
                                "Evalúa que no existan derivaciones del neutro después del RCD fuera de los circuitos protegidos.",
                                "Despliega instrumentos de prueba, chequea continuidad, realiza el test del dispositivo y constata su correcto funcionamiento.",
                                "Documenta el trabajo mediante los símbolos reglamentarios en el plano del inmueble, anotando marca, modelo, sensibilidad, fecha de instalación y recomendaciones para el usuario."
                            ]} />
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">8. Conclusiones</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La protección diferencial constituye una barrera tecnológica esencial para reducir accidentes eléctricos y preservar la seguridad de las personas y bienes. La correcta interpretación de la simbología siguiendo los estándares IEC y ANSI, el dominio de los conceptos de contacto directo e indirecto, la comprensión de los fundamentos y clasificación de los interruptores diferenciales, y su correcta instalación y mantenimiento, son competencias fundamentales en el desempeño de los profesionales eléctricos.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La bibliografía de Martínez y Mendoza Romero proporciona un marco riguroso y práctico en la aplicación de las técnicas y normativas internacionales, favoreciendo la calidad y seguridad en las instalaciones eléctricas en un contexto global. El dominio de estas unidades de aprendizaje permite al estudiante y al profesional integrarse exitosamente al ámbito laboral local e internacional.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Bibliografía Recomendada</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Técnicas de Aplicación de Fusibles</strong>
                                        <span className="text-slate-500 italic">Tomás Pascual Martínez, 1998 <br /> (Instituto Politécnico Nacional)</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Protección por Relevadores a Sistemas de Potencia</strong>
                                        <span className="text-slate-500 italic">Agapito Mendoza Romero, 1998 <br /> (Instituto Politécnico Nacional)</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Normativas IEC y ANSI</strong>
                                        <span className="text-slate-500 italic">IEC 60617, IEC 60364 <br /> ANSI C33.16</span>
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
