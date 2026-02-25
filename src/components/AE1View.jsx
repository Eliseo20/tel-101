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
        { term: "Estados de operación", def: "Condiciones en las que puede encontrarse una instalación o circuito eléctrico, tales como estado normal, sobrecarga, cortocircuito, falla a tierra, entre otros." },
        { term: "Tipos de fallas", def: "Diferentes modos en que una instalación eléctrica puede presentar anomalías, como fallas por cortocircuito, fallas a tierra, fase abierta o sobrecarga." },
        { term: "Tipos de perturbaciones", def: "Alteraciones en la calidad del suministro eléctrico, como sobretensiones, armónicos, flicker o microcortes." },
        { term: "Efectos de fallas o perturbaciones", def: "Consecuencias como daños en equipos, interrupciones del servicio, incendios o riesgos a la seguridad." },
        { term: "Simbología IEC y ANSI", def: "Conjunto de símbolos normalizados para representar equipos eléctricos en planos según estándares internacionales." },
        { term: "NCh2025/1", def: "Norma chilena que regula la seguridad y los requisitos de las instalaciones eléctricas en baja tensión." },
        { term: "Funcionamiento de fusibles", def: "Principio de fundir un filamento ante sobrecorriente para interrumpir el flujo eléctrico y proteger el circuito." },
        { term: "Clasificación de fusibles", def: "Categorización según velocidad de respuesta (rápidos, lentos), aplicación o forma física." },
        { term: "Curvas características", def: "Gráfica que relaciona la corriente y el tiempo de fusión de un fusible para analizar su comportamiento." }
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
                                Protecciones Eléctricas: <br /> <span className="text-[#D1202F]">Fusibles y Tipos de Fallas en Instalaciones Eléctricas</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La seguridad en las instalaciones eléctricas es una prioridad en cualquier contexto, sea residencial, industrial o institucional, y es fundamental para garantizar el correcto funcionamiento de los sistemas eléctricos y la protección de las personas y equipos. Diversos dispositivos y normativas están diseñados para reducir riesgos y daños que puedan surgir por fallas, sobrecargas o cortocircuitos. Los fusibles representan uno de los elementos de protección más antiguos y confiables, gracias a su simplicidad y efectividad. El objetivo de este texto es analizar en profundidad los fundamentos de las protecciones eléctricas, enfocándose principalmente en el estudio, funcionamiento, clasificación y aplicación práctica de los fusibles, abordando también los tipos y efectos de fallas eléctricas, las perturbaciones, la simbología normalizada según IEC y ANSI, y siguiendo las disposiciones de la norma chilena NCh2025/1. Para ello, se hará referencia a los textos "Técnicas de aplicación de fusibles" de Tomás Pascual Martínez y "Protección por relevadores a sistemas de potencia" de Agapito Mendoza Romero, publicaciones de referencia en la materia.</Paragraph>
                            <Paragraph>A continuación, se examinarán los principales conceptos y criterios de evaluación indicados, proponiendo un texto que facilite al estudiante el análisis crítico y técnico de los sistemas eléctricos y sus protecciones, bajo un contexto global y normativo actualizado.</Paragraph>
                        </div>

                        <ExpansionTile title="I. Estados de Operación en las Instalaciones Eléctricas" icon={Activity} defaultOpen={true}>
                            <SectionHeader title="1.1 Definición de los estados de operación" />
                            <Paragraph>El correcto funcionamiento de una instalación eléctrica depende de los diferentes estados en que puede encontrarse, según las condiciones de operación, carga y posibles incidencias anómalas. Comprender los estados de operación es esencial para identificar cuándo un sistema eléctrico está funcionando normalmente y cuándo subselecciona una intervención mediante dispositivos de protección.</Paragraph>
                            <Paragraph>De acuerdo con "Técnicas de aplicación de fusibles" (Pascual Martínez, 1998), los principales estados de operación de una instalación eléctrica son los siguientes:</Paragraph>
                            <List items={[
                                "Estado Normal: En este estado, la instalación opera dentro de los parámetros establecidos por la capacidad de diseño. Todos los conductores, dispositivos y equipos trabajan adecuadamente, sin que ocurran sobrecargas, cortocircuitos o fenómenos transitorios relevantes.",
                                "Estado de Sobrecarga: Ocurre cuando la corriente supera por un periodo prolongado la capacidad nominal de los conductores o equipos, pero no necesariamente por una condición de cortocircuito. En este estado, existe un riesgo potencial de daño por calentamiento en los materiales aislantes y la posible degradación de equipos.",
                                "Estado de Cortocircuito: En este punto, se presenta una conexión directa entre dos puntos de potencial diferente del sistema, habitualmente fase con fase, o fase con neutro/tierra, resultando una circulación de corriente mucho mayor a la normal, lo que debe ser interrumpido instantáneamente para evitar daños graves.",
                                "Estado de Perturbación Transitoria: Se refiere a condiciones anómalas breves y no permanentes, como pueden ser sobrevoltajes, armónicos, fluctuaciones de frecuencia o impulsos inducidos por descargas atmosféricas.",
                                "Estado de Falta a Tierra: Es una falla común en las instalaciones, motivada por el contacto involuntario de un conductor activo con una masa o parte metálica conectada a tierra, lo que puede desencadenar riesgos de electrocución y daños a los sistemas eléctricos."
                            ]} />
                            <Paragraph>Estos estados guían el dimensionamiento y selección de los dispositivos de protección, tal como enfatiza Mendoza Romero (1998) en su análisis de la coordinación de protecciones.</Paragraph>

                            <SectionHeader title="1.2 Importancia de la identificación de los estados de operación" />
                            <Paragraph>Identificar los estados de operación garantiza la seguridad de las personas y equipos, permitiendo la aplicación oportuna de las protecciones diseñadas para mitigar los riesgos asociados a fallas o condiciones operacionales anómalas. Además, facilita el mantenimiento predictivo y la continuidad de servicio en sistemas críticos.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="II. Tipos de Fallas Eléctricas" icon={Zap}>
                            <SectionHeader title="2.1 Definición y categorización de fallas eléctricas" />
                            <Paragraph>Las fallas eléctricas son eventos anómalos que alteran el funcionamiento normal de una instalación, pudiendo afectar la continuidad del servicio, la seguridad de las personas y la integridad de los equipos. El análisis de las mismas permite anticiparse a los daños y seleccionar los dispositivos de protección más adecuados.</Paragraph>
                            <Paragraph>Según la bibliografía de referencia (Pascual Martínez, 1998; Mendoza Romero, 1998), las fallas se clasifican principalmente en:</Paragraph>
                            <List items={[
                                "Falla Monofásica: Es la más simple y frecuente en los sistemas de distribución. Consiste en el contacto accidental de una sola fase con tierra o masa.",
                                "Falla Bifásica: Ocurre cuando dos fases entran en contacto directo entre sí, ya sea por fallas de aislamiento o causas externas como objetos extraños.",
                                "Falla Trifásica: Es más rara y severa, implica el cortocircuito entre las tres fases y suele tener consecuencias importantes dado el alto nivel de corriente resultante.",
                                "Falla a Tierra: Específicamente, involucra el contacto entre una fase (o varias) y el sistema de puesta a tierra, generando flujo de corriente no deseada por caminos distintos a los previstos.",
                                "Fallas por Sobrecarga: Resulta del exceso de consumo, generalmente lento pero sostenido."
                            ]} />
                            <HighlightBox title="Importante">
                                <p>En la literatura se mencionan también las fallas incipientes (que se desarrollan lentamente) y fallas francas (de rápida manifestación), siendo crítico considerar la dinámica de cada tipo para definir la protección eficaz.</p>
                            </HighlightBox>

                            <SectionHeader title="2.2 Causas más frecuentes de las fallas eléctricas" />
                            <List items={[
                                "Desgaste natural de los materiales",
                                "Deficiencias en el aislamiento",
                                "Manejo inadecuado o negligente del sistema",
                                "Fenómenos climáticos (rayo, viento, inundación)",
                                "Sobrecalentamiento debido a malas conexiones o sobrecarga",
                                "Errores humanos durante el mantenimiento"
                            ]} />

                            <SectionHeader title="2.3 Detección y análisis de fallas" />
                            <Paragraph>El uso de instrumentos de medición, sistemas supervisados y protecciones (relevadores y fusibles) permite una detección rápida de las fallas y su aislamiento antes de que causen daños mayores. Como señala Mendoza Romero (1998), la discriminación y selectividad de las protecciones son fundamentales para minimizar áreas afectadas y evitar apagones generalizados.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="III. Tipos de Perturbaciones en las Instalaciones Eléctricas" icon={AlertTriangle}>
                            <SectionHeader title="3.1 Definición de perturbaciones eléctricas" />
                            <Paragraph>Las perturbaciones eléctricas son desviaciones transitorias o permanentes de los parámetros normales de funcionamiento del sistema eléctrico. Estas pueden resultar de factores internos o externos y tener efectos nocivos sobre los equipos, incluso si no llegan a causar una falla franca inmediata.</Paragraph>

                            <SectionHeader title="3.2 Clasificación de perturbaciones" />
                            <List items={[
                                "Perturbaciones de Tensión: Incluyen sobretensiones (picos, impulsos), bajadas (“sags”) o cortes instantáneos de voltaje.",
                                "Perturbaciones de Corriente: Disparo de corrientes elevadas por cortocircuitos, arranques de motores, o flujos armónicos.",
                                "Perturbaciones de Frecuencia: Desviaciones respecto al valor nominal del sistema (50/60 Hz), habituales en fallas de generación o carga súbita.",
                                "Perturbaciones Armónicas: Aparición de componentes de frecuencia múltiple, perjudiciales para transformadores, motores y equipos electrónicos sensibles.",
                                "Transitorios Electromagnéticos: Fenómenos breves pero de alta energía, generados por conmutaciones, maniobras de interruptores, descargas atmosféricas, etc."
                            ]} />

                            <SectionHeader title="3.3 Relevancia de las perturbaciones" />
                            <Paragraph>La protección contra perturbaciones requiere seleccionar elementos capaces de resistir, filtrar o disipar este tipo de eventos, como filtros, supresores de sobretensión y dispositivos de corte rápido, entre ellos, los fusibles de respuesta instantánea.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="IV. Efectos Causados por Fallas o Perturbaciones" icon={Thermometer}>
                            <SectionHeader title="4.1 Efectos térmicos" />
                            <Paragraph>El efecto más inmediato de una falla, como una sobrecarga o cortocircuito, es el aumento de temperatura en los conductores y en los aislantes, lo que puede llevar al derretimiento, carbonización o incendio incluso en cortos periodos de tiempo. Los dispositivos de protección buscan limitar estos efectos disparando o interrumpiendo el circuito cuando el tiempo/corriente supera límites seguros.</Paragraph>

                            <SectionHeader title="4.2 Daños a equipos" />
                            <Paragraph>Sobretensiones, impulsos y corriente inadecuada pueden dañar severamente transformadores, motores, interruptores automáticos y equipos electrónicos, acortando su vida útil o produciendo fallas catastróficas. En este sentido, la selectividad de los fusibles es fundamental para proteger equipos valiosos o sensibles.</Paragraph>

                            <SectionHeader title="4.3 Riesgo eléctrico para personas" />
                            <Paragraph>Fallas a tierra o contactos indirectos pueden provocar riesgos de electrocución, especialmente en ambientes húmedos o instalaciones mal aterrizadas, justificando la importancia de protecciones complementarias como los interruptores diferenciales y fusibles calibrados.</Paragraph>

                            <SectionHeader title="4.4 Pérdida de continuidad de servicio" />
                            <Paragraph>Las fallas no protegidas pueden generar interrupciones prolongadas del suministro eléctrico, con importantes repercusiones económicas y sociales en instalaciones críticas (hospitales, industria, centros de datos).</Paragraph>

                            <SectionHeader title="4.5 Pérdida de datos y daños informáticos" />
                            <Paragraph>En instalaciones modernas, perturbaciones breves pueden ser suficientes para perder información valiosa, requerir reinicios o dañar equipos informáticos, lo que exige protecciones de alta velocidad como los fusibles rápidos o ultra rápidos.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="V. Simbología Normalizada según IEC y ANSI" icon={Book}>
                            <SectionHeader title="5.1 Importancia de la simbología eléctrica" />
                            <Paragraph>Para el trabajo globalizado y la correcta interpretación de planos eléctricos, es esencial el uso de simbologías estándar y reconocidas internacionalmente. La Organización Internacional de Normalización Eléctrica (IEC) y el Instituto Nacional Americano de Estándares (ANSI) han desarrollado sistemas completos para la identificación gráfica de dispositivos y elementos de protección.</Paragraph>

                            <SectionHeader title="5.2 Principales símbolos IEC" />
                            <Paragraph>Algunos de los símbolos más relevantes para fusibles y dispositivos de protección son:</Paragraph>
                            <List items={[
                                "Símbolo genérico de fusible:",
                                "Símbolo de interruptor general:",
                                "Símbolo de tierra:"
                            ]} />
                            <Paragraph>La IEC 60617 y la ANSI Y32.2 son las normas principales en materia de simbología eléctrica.</Paragraph>

                            <SectionHeader title="5.3 Simbología ANSI" />
                            <Paragraph>La norma ANSI utiliza símbolos gráficos en distinta disposición, pero con significados equivalentes, buscando compatibilidad y comprensión entre ingenieros y técnicos de distintos países:</Paragraph>
                            <List items={[
                                "Fusible ANSI: Un rectángulo con una línea diagonal, o bien una simple línea horizontal corta intersectada.",
                                "Interruptor: Línea representando la cuchilla y puntos de conexión.",
                                "Puesta a tierra: Línea vertical con raya horizontal y tres líneas decrecientes."
                            ]} />
                            <HighlightBox title="Conclusión Clave">
                                <p>El conocimiento profundo de estas normas es indispensable en cualquier contexto territorial global, permitiendo que las instalaciones sean comprendidas e intervenidas por especialistas de diversas regiones.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="VI. Norma Chilena NCh2025/1" icon={Shield}>
                            <SectionHeader title="6.1 Contexto internacional y alcance de la NCh2025/1" />
                            <Paragraph>La NCh2025/1 es la normativa chilena que recoge y adapta los estándares internacionales para la protección y coordinación de sistemas eléctricos de baja tensión, asegurando que las instalaciones sean seguras, eficientes y compatibles tanto a nivel nacional como internacional.</Paragraph>

                            <SectionHeader title="6.2 Aspectos clave de la NCh2025/1" />
                            <Paragraph>La aplicación de NCh2025/1 en proyectos de alcance internacional asegura una integración eficaz con requisitos como la IEC 60364, garantizando compatibilidad global.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="VII. Funcionamiento de los Fusibles" icon={Power}>
                            <SectionHeader title="7.1 Principio de operación" />
                            <Paragraph>El fusible es un dispositivo de protección diseñado para interrumpir automáticamente la corriente eléctrica cuando esta excede los valores para los que fue calibrado, previniendo así el daño a los circuitos y equipos conectados. Según Pascual Martínez (1998), su principio de funcionamiento se basa en la fusión de un hilo conductor, fabricado generalmente de aluminio, plata o cobre, que eleva su temperatura por efecto Joule (I²R), derritiéndose y abriendo el circuito.</Paragraph>

                            <SectionHeader title="7.2 Proceso de fusión" />
                            <Paragraph>El proceso consta de dos fases: primero, cuando la corriente excede el valor nominal, el hilo del fusible se calienta progresivamente. Si el aumento es corto o menor a la capacidad de fusión, el hilo no se funde, permitiendo el restablecimiento del funcionamiento normal. Pero si la sobrecorriente es significativa y sostenida, la temperatura alcanza el punto de fusión del metal, cortando el suministro y protegiendo el sistema.</Paragraph>
                            <HighlightBox type="warning">
                                <p>Por tanto, el fusible opera como un elemento débil, sacrificial, que se destruye para preservar el resto de la instalación.</p>
                            </HighlightBox>

                            <SectionHeader title="7.3 Capacidad de interrupción" />
                            <Paragraph>Un aspecto crítico es la capacidad de interrupción del fusible, entendida como la máxima energía o corriente que puede desconectar sin explotar o causar daños adicionales (arco eléctrico prolongado). La adecuada selección de este parámetro es esencial para el dimensionamiento en sistemas industriales y de alta demanda.</Paragraph>

                            <SectionHeader title="7.4 Elementos constitutivos" />
                            <Paragraph>Los fusibles pueden componerse de:</Paragraph>
                            <List items={[
                                "Hilo conductor (elemento fusible)",
                                "Cuerpo o carcasa aislante",
                                "Cargas de relleno (arena de cuarzo, polvo cerámico)",
                                "Contactos o terminales"
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="VIII. Clasificación de Fusibles" icon={ListChecks}>
                            <SectionHeader title="8.1 Según su aplicación" />
                            <List items={[
                                "Fusibles de Baja Tensión: Para sistemas de hasta 1000 V, empleados en instalaciones domésticas, comercial e industrial.",
                                "Fusibles de Media y Alta Tensión: Usados en subestaciones, líneas de transmisión y distribución."
                            ]} />

                            <SectionHeader title="8.2 Según su velocidad de respuesta" />
                            <List items={[
                                "Fusibles Rápidos: Diseñados para responder inmediatamente a sobrecorrientes, son ideales para circuitos electrónicos y protección de semiconductores.",
                                "Fusibles Retardados o Lentos: Permiten el paso de sobrecorrientes transitorias (por ejemplo, arranque de motores) sin fundirse, pero actúan ante sobrecargas persistentes. Son comunes en instalaciones industriales.",
                                "Fusibles Ultra-rápidos (gR): Usados para la protección de dispositivos de potencia con electrónica sensible.",
                                "Fusibles de Tiempo Dual: Combina características para cubrir diferentes tipos de sobrecorriente."
                            ]} />

                            <SectionHeader title="8.3 Según el tipo de carcasa" />
                            <List items={[
                                "Fusibles de cartucho cilíndrico",
                                "Fusibles tipo cuchilla (NH o D)",
                                "Fusibles de tapón o roscados",
                                "Fusibles automotrices"
                            ]} />

                            <SectionHeader title="8.4 Según norma (IEC, ANSI, NEMA, etc.)" />
                            <List items={[
                                "Fusibles IEC tipo gG, aM, gL, entre otros.",
                                "Fusibles ANSI/NEMA de acuerdo a estándares norteamericanos."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="IX. Curvas Características de los Fusibles" icon={TrendingUp}>
                            <SectionHeader title="9.1 Curvas tiempo-corriente" />
                            <Paragraph>Para proyectar y seleccionar fusibles adecuadamente, se utilizan las curvas tiempo-corriente, que describen el tiempo que tarda el fusible en actuar según la magnitud de la corriente incidente. Estos gráficos, aportados tanto en la normativa IEC como por fabricantes, permiten conocer si el fusible protegerá en tiempo oportuno y evitará disparos por pequeñas sobrecargas inofensivas.</Paragraph>

                            <SectionHeader title="9.2 Interpretación de las curvas" />
                            <Paragraph>Una curva característica típica muestra que a mayor sobrecorriente, el tiempo de fusión es más corto. Por ejemplo, para una sobrecorriente del 200% respecto a la nominal, un fusible rápido podría operar en milisegundos, mientras que una sobrecarga del 120% podría no hacer fundir el hilo durante horas. Esta característica es fundamental para la coordinación con otros elementos de protección y para evitar el disparo simultáneo de todos los fusibles ante eventos comunes.</Paragraph>

                            <SectionHeader title="9.3 Aplicación práctica" />
                            <Paragraph>Los ingenieros y técnicos deben consultar siempre la curva característica del fusible al especificar la protección para motores, transformadores, líneas de distribución y equipos electrónicos, considerando además el posible fenómeno de corriente de arranque y las condiciones ambientales.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="X. Ejemplo Práctico de Selección y Coordinación de Fusibles" icon={Calculator}>
                            <Paragraph>Considere la protección de un motor de 10 kW, 400V, con una corriente nominal de 18A. Suponga que los arranques duran hasta cinco veces la corriente nominal (90 A) durante 2 segundos. La protección adecuada debe permitir el arranque y disparar ante sobrecorrientes más altas:</Paragraph>
                            <List items={[
                                "Seleccionar un fusible de curva lenta (gl o gG, según IEC) calibrado a 20A, cuya curva garantice que ante 90A durante 2 segundos no funde, pero sí lo haga en tiempos inferiores ante sobrecorrientes mayores.",
                                "Verificar que la capacidad de corte sea superior a la corriente máxima de cortocircuito prevista en ese punto de la instalación.",
                                "Validar que el fusible es compatible con la normativa local (NCh2025/1) y que la simbología en los planos corresponda a IEC o ANSI para facilitar el mantenimiento futuro."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="XI. Mantenimiento y Reemplazo de Fusibles" icon={Wrench}>
                            <SectionHeader title="11.1 Inspección de fusibles" />
                            <List items={[
                                "Comprobar integridad visual y ausencia de deformaciones.",
                                "Realizar mediciones de continuidad, preferentemente con el circuito desenergizado.",
                                "Verificar la correcta identificación y rotulación, de acuerdo a la simbología normalizada."
                            ]} />

                            <SectionHeader title="11.2 Procedimiento de reemplazo" />
                            <List items={[
                                "Desconectar la energía eléctrica del circuito.",
                                "Extraer el fusible con herramientas aisladas, verificando polaridad y posiciones.",
                                "Instalar el nuevo fusible asegurando que corresponde en características eléctricas (calibre, tensión nominal, curva característica).",
                                "Registrar la actividad en la bitácora de mantenimiento.",
                                "Restaurar y probar el circuito, verificando funcionamiento normal."
                            ]} />
                            <HighlightBox type="info">
                                <p>La correcta manipulación y selección son vitales para que las protecciones sean realmente eficaces, tal como recomiendan los autores de la bibliografía base.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">XII. Conclusiones</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La protección eficaz de instalaciones eléctricas requiere un conocimiento integral de los estados de operación, tipos de fallas y perturbaciones, además de una comprensión avanzada del funcionamiento, clasificación y características de los fusibles. El entendimiento de la simbología y normativa internacional permite el trabajo globalizado y seguro, facilitando la operación, el mantenimiento y la integración de tecnologías diversas. Siguiendo las directrices de "Técnicas de aplicación de fusibles" y "Protección por relevadores a sistemas de potencia", este texto ha abordado los principales aspectos teóricos y prácticos, proporcionando marcos de referencia y ejemplos para un desempeño profesional competente.
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
                                        <span className="text-slate-500 italic">Tomás Pascual Martínez, 1998</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Protección por Relevadores a Sistemas de Potencia</strong>
                                        <span className="text-slate-500 italic">Agapito Mendoza Romero, 1998</span>
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
