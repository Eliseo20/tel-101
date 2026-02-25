import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, Shield, Book,
    CheckCircle2, AlertTriangle, Zap, Activity, TrendingUp, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, ShieldCheck, Flame, BookOpen
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

const AE2View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE2 = [
        { term: "Protector termomagnético", def: "Dispositivo que interrumpe el paso de corriente ante sobrecargas o cortocircuitos combinando un mecanismo térmico y uno magnético." },
        { term: "Elemento térmico", def: "Mecanismo basado en una lámina bimetálica que protege contra sobrecargas (lento incremento de corriente) mediante su deformación progresiva por calor (efecto Joule)." },
        { term: "Elemento magnético", def: "Mecanismo basado en una bobina (solenoide) que responde casi instantáneamente ante cortocircuitos al generar un fuerte campo magnético." },
        { term: "Simbología IEC / ANSI", def: "Estándares y normas internacionales para representar gráficamente componentes eléctricos en esquemas de circuitos de manera universal." },
        { term: "Zonas de operación", def: "Rangos específicos de corriente (no actuación, disparo retardado o disparo instantáneo) que determinan bajo qué condiciones el dispositivo abrirá el circuito." },
        { term: "Curvas de disparo", def: "Relación gráfica entre la magnitud de la sobrecorriente y el tiempo de actuación, típicamente clasificadas en tipos (B, C, D) según la aplicación." },
        { term: "Poder de corte (Breaking capacity)", def: "Corriente máxima de cortocircuito que un interruptor automático puede interrumpir de forma segura sin destruirse ni causar daños adicionales." },
        { term: "Coordinación selectiva", def: "Implementación ajustada de protecciones en serie de modo que, ante una falla, opere únicamente el dispositivo más cercano al punto de falla." },
        { term: "Procedimiento de Bloqueo y Etiquetado (LOTO)", def: "Práctica de seguridad esencial (Lock-out/Tag-out) para aislar la fuente de energía e inmovilizar el mecanismo antes de iniciar tareas de mantenimiento." }
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
                                Protecciones Eléctricas: <br /> <span className="text-[#D1202F]">Instalación y Mantenimiento de Protector Termomagnético en Circuitos</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>En el campo de las instalaciones eléctricas, la correcta protección de los circuitos resulta fundamental para salvaguardar la integridad de las personas, los equipos y la infraestructura. Uno de los dispositivos más empleados con estos fines es el protector termomagnético, también llamado interruptor automático termomagnético. Estos dispositivos interrumpen el paso de la corriente eléctrica cuando detectan una sobrecarga o un cortocircuito, limitando así los daños potenciales derivados de fallas eléctricas.</Paragraph>
                            <Paragraph>En el presente texto de estudio se abordan, de manera exhaustiva y rigurosa, los conocimientos y competencias necesarias para la instalación y el mantenimiento de estos elementos de protección, considerando la simbología y la normativa de clasificación vigentes según las normas IEC (International Electrotechnical Commission) y ANSI (American National Standards Institute). El contenido aquí desarrollado corresponde a los requerimientos académicos y de evaluación que rigen la enseñanza técnica de las protecciones eléctricas, siguiendo la orientación global y la bibliografía recomendada.</Paragraph>
                            <Paragraph>A continuación, se exploran detalladamente los conceptos, principios de funcionamiento, procedimientos de instalación y criterios normativos indispensables para asegurar una correcta protección eléctrica en sistemas de baja y media tensión.</Paragraph>
                        </div>

                        <ExpansionTile title="1. Simbología Según Normas IEC y ANSI" icon={BookOpen} defaultOpen={true}>
                            <Paragraph>El conocimiento de la simbología normalizada permite una correcta interpretación de esquemas eléctricos, la selección apropiada de componentes y la comunicación efectiva entre técnicos de todo el mundo. Las normas internacionales IEC 60617 y las normas ANSI Y32.2/IEEE Std 315 definen los símbolos gráficos utilizados en diagramas de circuitos eléctricos y electrónicos.</Paragraph>

                            <SectionHeader title="1.1 Símbolos según la norma IEC" />
                            <Paragraph>La IEC proporciona una colección estandarizada de símbolos para los dispositivos de protección. Por ejemplo:</Paragraph>
                            <List items={[
                                "Interruptor automático genérico: Consiste en una línea sinuosa o curva dentro de un rectángulo, representando la capacidad de apertura y cierre del circuito.",
                                "Protector termomagnético: A menudo ilustrado como un interruptor automático con un círculo (representando la protección magnética) y una “barrida” adicional (representando el mecanismo térmico).",
                                "Disyuntor de circuito: Un interruptor doble con líneas cortadas y símbolos anexos de disparo térmico y magnético.",
                                "Fusible: Un rectángulo pequeño con una línea diagonal."
                            ]} />
                            <Paragraph>Estas representaciones han sido universalmente adoptadas para facilitar la comprensión mutua y el diseño seguro de instalaciones eléctricas, independientemente del idioma o país de origen del personal técnico.</Paragraph>

                            <SectionHeader title="1.2 Símbolos según la norma ANSI" />
                            <Paragraph>Por su parte, la ANSI, utilizada habitualmente en América del Norte, emplea representaciones similares con ligeras variantes gráficas. Por ejemplo:</Paragraph>
                            <List items={[
                                "Circuit Breaker (Interruptor Automático): Un par de líneas inclinadas en ángulo recto, conectadas entre dos barras horizontales, con la posible adición de una marca “T” para indicar protección térmica y “M” para magnética.",
                                "Fusible: Un óvalo elongado en el trayecto del conductor."
                            ]} />
                            <Paragraph>La correcta interpretación de la simbología es esencial durante el diseño, instalación y mantenimiento, permitiendo reconocer visualmente la función de cada elemento de protección y su adecuación al circuito respectivo. Los fabricantes, además, suelen añadir simbología complementaria en sus catálogos, específica para sus productos.</Paragraph>

                            <SectionHeader title="1.3 Importancia de la correspondencia entre simbología y aplicación" />
                            <Paragraph>Una de las competencias clave evaluadas en la formación de técnicos en protecciones eléctricas es la capacidad de leer e interpretar correctamente estos símbolos, ya que errores en la identificación pueden dar lugar a aplicaciones deficientes o peligrosas, además de incumplimientos normativos.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="2. Funcionamiento de un Elemento Térmico" icon={Thermometer}>
                            <Paragraph>El protector termomagnético combina dos mecanismos fundamentales: uno térmico y otro magnético. El elemento térmico está destinado principalmente a la protección contra sobrecargas, mientras que el magnético se encarga de proteger contra cortocircuitos.</Paragraph>

                            <SectionHeader title="2.1 Principio de funcionamiento térmico" />
                            <Paragraph>El componente térmico de un interruptor automático termomagnético generalmente está basado en una lámina bimetálica. Esta lámina está formada por dos metales con diferente coeficiente de dilatación térmica, unidos firmemente. Ante el paso de la corriente eléctrica, la resistencia natural de la lámina genera calor (efecto Joule). Cuando el flujo de corriente excede el valor nominal durante un intervalo prolongado, la temperatura de la lámina aumenta, ocasionando su deformación.</Paragraph>
                            <Paragraph>Esta deformación es aprovechada para accionar un mecanismo de disparo que abre el circuito, impidiendo que la sobrecorriente dañe los conductores o los receptores conectados a la instalación eléctrica. La característica principal de esta protección es su respuesta lenta: el disparo es retardado para permitir sobrecargas temporales (como picos de arranque de motores), discriminando sobrecargas permanentes de condiciones transitorias normales.</Paragraph>

                            <SectionHeader title="2.2 Curvas de actuación térmica" />
                            <Paragraph>La relación entre la cantidad de sobrecorriente y el tiempo de disparo se describe mediante "curvas de disparo", que definen cuánto tarda la protección en actuar en función del exceso de corriente. De acuerdo con Técnicas de aplicación de fusibles (Martínez, 1998), estas curvas permiten seleccionar adecuadamente el dispositivo, asegurando protección efectiva ante distintos escenarios de sobrecarga.</Paragraph>

                            <SectionHeader title="2.3 Valoración de la protección térmica" />
                            <Paragraph>La calidad de un protector térmico se evalúa por:</Paragraph>
                            <List items={[
                                "La exactitud de su disparo en función de los valores especificados.",
                                "La resistencia mecánica a deformaciones que puedan alterar su graduación.",
                                "La adecuación de la curva de disparo a la aplicación concreta."
                            ]} />
                            <Paragraph>El conocimiento de las características térmicas es fundamental durante la selección, que debe basarse en el tipo de carga (iluminación, motores, electrónica sensible, etc.) y el perfil operativo de la instalación.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="3. Zonas de Operación contra Sobrecargas" icon={Activity}>
                            <Paragraph>Los dispositivos de protección no actúan de manera instantánea ante toda clase de sobrecorriente; en cambio, su respuesta varía dependiendo de la magnitud de la sobrecarga. Esta exigencia técnica permite soportar transitorios breves y habituales (como arranque de motores) sin desconectar el circuito, pero sí hacerlo en situaciones anómalas persistentes.</Paragraph>

                            <SectionHeader title="3.1 Definición de zonas de operación" />
                            <Paragraph>La norma IEC 60947-2 y la ANSI C37.16 describen las siguientes zonas características de respuesta para interruptores automáticos termomagnéticos:</Paragraph>
                            <List items={[
                                "Zona de no actuación: Intervalo de corrientes por debajo del umbral nominal del dispositivo; no se produce disparo, permitiendo el funcionamiento normal.",
                                "Zona de disparo retardado o térmico: Situación de sobrecorriente moderada (por encima del valor nominal, pero dentro del rango de tolerancia previsto). El disparo ocurre pasada una cierta cantidad de tiempo, dependiendo de la magnitud del exceso. Es la zona donde la lámina bimetálica actúa.",
                                "Zona de disparo instantáneo o magnético: Para sobrecorrientes bruscas (típicamente provocadas por cortocircuitos), el mecanismo magnético actúa de manera casi instantánea (en milisegundos), minimizando riesgos mayores."
                            ]} />

                            <SectionHeader title="3.2 Ejemplo de aplicación de zonas de operación" />
                            <Paragraph>Por ejemplo, un interruptor termomagnético de 16A puede tener la siguiente configuración, según las curvas típicas de fabricante (rechazando posibles particularidades):</Paragraph>
                            <List items={[
                                "Corriente ≤ 16A: Sin disparo.",
                                "Corriente entre 16A y 32A: Disparo térmico, que puede tardar varios segundos o minutos.",
                                "Corriente ≥ 80A: Disparo magnético instantáneo (en cuestión de milisegundos)."
                            ]} />
                            <HighlightBox title="Importante">
                                <p>La adecuada comprensión de estas zonas es básica para seleccionar e instalar dispositivos que ofrezcan protección eficaz sin molestias operativas innecesarias.</p>
                            </HighlightBox>

                            <SectionHeader title="3.3 Ajuste y coordinación selectiva" />
                            <Paragraph>En instalaciones complejas, puede ser necesario ajustar los tiempos y corrientes de disparo para lograr coordinación selectiva entre los diferentes dispositivos de protección (fusibles aguas arriba, interruptores de columna, etc.), de modo que solo el elemento más cercano al fallo actúe, tal como detallan Martínez (1998) y Mendoza Romero (1998).</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="4. Funcionamiento de un Elemento Magnético" icon={Zap}>
                            <Paragraph>El dispositivo magnético de un protector termomagnético existe para proteger específicamente ante condiciones de cortocircuito, donde la corriente alcanza valores muy superiores a los admisibles en cuestión de milisegundos.</Paragraph>

                            <SectionHeader title="4.1 Principio de funcionamiento magnético" />
                            <Paragraph>Se basa en el uso de una bobina (solenoide) atravesada por el mismo flujo de corriente que alimenta la carga. Bajo condiciones normales y ligeramente superiores, el campo magnético generado es insuficiente para mover el mecanismo de disparo. Sin embargo, ante un cortocircuito (corriente de alta intensidad), el campo magnético se incrementa drásticamente, generando una fuerza que provoca la liberación de un disparador que abre, de forma casi instantánea, el circuito.</Paragraph>
                            <Paragraph>Esta intervención rápida es vital para evitar daños gravísimos en el cableado, transformadores, dispositivos conectados y, fundamentalmente, para reducir el riesgo de incendio o electrocución.</Paragraph>

                            <SectionHeader title="4.2 Curvas de disparo magnético" />
                            <Paragraph>Así como ocurre con el módulo térmico, el módulo magnético se calibra de fábrica para actuar sobre un rango específico. La norma IEC distingue varias curvas (B, C, D, K, Z), cada una idónea para distintas aplicaciones:</Paragraph>
                            <List items={[
                                "Curva B: Disparo magnético entre 3 y 5 veces la corriente nominal. Indicada para cargas generales de baja inrush (como iluminación).",
                                "Curva C: Disparo magnético entre 5 y 10 veces la corriente nominal. Adecuada para motores y circuitos con picos moderados de arranque.",
                                "Curva D: Disparo magnético entre 10 y 20 veces la corriente nominal. Para cargas con altos picos de arranque, como transformadores o motores grandes."
                            ]} />
                            <Paragraph>La selección de la curva adecuada es imprescindible para evitar disparos intempestivos y proteger la instalación eficazmente.</Paragraph>

                            <SectionHeader title="4.3 Diagnóstico de la protección magnética" />
                            <Paragraph>Durante el mantenimiento o instalación, una de las tareas clave consiste en comprobar que nada haya obstruido o deteriorado el mecanismo magnético (presencia de partículas metálicas, suciedad o desmagnetización), para evitar fallos peligrosos ante cortocircuitos.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="5. Instalación de un Elemento Magnético" icon={Wrench}>
                            <Paragraph>El montaje efectivo del protector termomagnético —en la práctica, un interruptor automático con protección térmica y magnética— debe realizarse siguiendo tanto las instrucciones de los fabricantes como los requisitos de la normativa vigente. A continuación, se detallan los pasos y consideraciones fundamentales.</Paragraph>

                            <SectionHeader title="5.1 Selección adecuada del dispositivo" />
                            <Paragraph>Se debe elegir el modelo de interruptor teniendo en cuenta:</Paragraph>
                            <List items={[
                                "La corriente nominal del circuito.",
                                "La curva de disparo (B, C, D, etc.), en función de la naturaleza de las cargas.",
                                "El poder de corte (breaking capacity), que corresponde a la máxima corriente que puede interrumpir sin sufrir daños.",
                                "El nivel de aislamiento requerido y la compatibilidad con el cuadro eléctrico."
                            ]} />

                            <SectionHeader title="5.2 Procedimiento de instalación paso a paso" />
                            <List items={[
                                "Desconexión y bloqueo de la alimentación: Siempre se debe activar el procedimiento de bloqueo y etiquetado (lock-out/tag-out) para evitar riesgos eléctricos durante la intervención.",
                                "Identificación de circuitos: Se verifica que el interruptor seleccionado corresponda al circuito que se desea proteger y que la carga no exceda las características técnicas del dispositivo.",
                                "Fijación mecánica: Se inserta el interruptor termomagnético en el rail DIN del cuadro eléctrico asegurándose de que no queden holguras.",
                                "Conexión eléctrica: Se conectan los conductores de entrada (alimentación) y salida (carga) en los terminales apropiados del dispositivo. No se deben invertir las conexiones, salvo excepción expresada por el fabricante.",
                                "Ajuste: En caso de dispositivos ajustables, se realiza la regulación de los valores de disparo térmico y magnético, siguiendo las recomendaciones técnicas para la sensibilidad deseada.",
                                "Verificación y pruebas: Se comprueba la fijación, el aislamiento, la correcta sujeción de los cables y se procede a realizar las pruebas funcionales (manuales, con simulación de corrientes si corresponde) asegurando el correcto disparo y reenganche.",
                                "Etiquetado y actualización de diagramas: Se registra la intervención con las referencias normalizadas en los esquemas unifilares y cuadros de distribución.",
                                "Reposición de la alimentación: Se retiran los bloqueos, verificando la funcionalidad final de la protección y de la instalación a resguardo."
                            ]} />

                            <SectionHeader title="5.3 Precauciones y buenas prácticas" />
                            <List items={[
                                "No conectar varios conductores en un mismo borne, salvo que el fabricante lo permita.",
                                "No utilizar interruptores automáticos sobredimensionados en extremo: debe proteger adecuadamente los conductores y las cargas, no solo evitar disparos molestos.",
                                "Respetar las distancias de aislamiento y accesibilidad indicadas en la normativa y ficha técnica.",
                                "Emplear herramientas aisladas y equipos de protección individual homologados.",
                                "Mantener actualizado el registro de intervenciones y una documentación adecuada para facilitar el mantenimiento futuro."
                            ]} />
                            <HighlightBox type="warning">
                                <p>De acuerdo con Martínez (1998), y Mendoza Romero (1998), una instalación deficiente puede comprometer la seguridad del sistema, por lo que es primordial respetar todos los pasos y precauciones indicados.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="6. Normativa de Seguridad Vigente" icon={ShieldCheck}>
                            <Paragraph>La instalación y el mantenimiento de sistemas de protección eléctrica deben regirse por las normas técnicas internacionales y la legislación local vigente, que fija las condiciones mínimas de seguridad.</Paragraph>

                            <SectionHeader title="6.1 Principales normativas relevantes" />
                            <List items={[
                                "IEC (International Electrotechnical Commission): Normas internacionales como la IEC 60947-2 para interruptores automáticos de baja tensión o la IEC 60898 para interruptores automáticos usados en circuitos domésticos y similares. Definen los requisitos de diseño, funcionamiento y comprobación de estos dispositivos.",
                                "ANSI (American National Standards Institute): Normas como la ANSI C37 (Power Circuit Breakers) y ANSI C33 (Fuses and Switches), utilizadas en muchos países de América y por fabricantes internacionales.",
                                "Normativa de seguridad eléctrica nacional o regional: En cada país existen códigos eléctricos específicos (por ejemplo, el NEC en Estados Unidos, el REBT en España, la NOM-001-SEDE en México, etc.) que deben ser consultados y respetados al diseñar y montar instalaciones eléctricas.",
                                "Reglas de seguridad laboral: Reglamentos sobre trabajos en tensión, uso de equipos de protección individual, señalización y procedimientos de emergencia."
                            ]} />

                            <SectionHeader title="6.2 Principios fundamentales de seguridad" />
                            <List items={[
                                "Realizar siempre trabajos en ausencia de tensión, utilizando procedimientos de bloqueo y señalización apropiados.",
                                "Verificar la ausencia de tensión con instrumentos certificados antes de manipular cualquier componente.",
                                "Utilizar herramientas y equipos de protección personal certificados para trabajos eléctricos.",
                                "No dejar bornes activos accesibles, asegurando la señalización idónea y las distancias mínimas de seguridad.",
                                "Garantizar la correcta identificación de los elementos de protección mediante etiquetas normalizadas, evitando ambigüedades durante actuaciones de mantenimiento."
                            ]} />

                            <SectionHeader title="6.3 Documentación, registros y formación continuada" />
                            <Paragraph>Debe mantenerse correctamente documentado todo el proceso de selección, instalación y mantenimiento de equipos de protección. Además, se exige una formación y reciclaje permanente de los operarios y responsables, a fin de estar al día con las novedades técnicas y normativas.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">7. Conclusiones</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">El conjunto de contenidos expuestos en este texto proporciona los cimientos teóricos y prácticos para el trabajo seguro y conforme a las normas internacionales en la instalación y mantenimiento de protectores termomagnéticos en circuitos eléctricos. La selección adecuada de estos dispositivos, su correcta interpretación simbólica y su montaje acorde a los estándares IEC, ANSI y la normativa legal vigente, resultan clave para la protección eficiente de personas e infraestructuras eléctricas.</Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">Una sólida formación en las características funcionales, los parámetros operativos (térmicos y magnéticos), las diferentes zonas de actuación ante sobrecorriente, el dominio de la simbología internacional y el seguimiento riguroso de los procedimientos técnicos más las medidas de seguridad, son las competencias evaluadas y requeridas para los profesionales del campo, utilizando como base los aportes bibliográficos de Tomás Pascual Martínez y Agapito Mendoza Romero.</Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">La protección eléctrica no solo es un requisito legal y técnico, sino un principio fundamental para la preservación de la vida y el desarrollo industrial seguro en todo el mundo.</Paragraph>
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
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Normas IEC / ANSI</strong>
                                        <span className="text-slate-500 italic">IEC 60947-2, IEC 60898 <br /> ANSI C37, ANSI C33</span>
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
