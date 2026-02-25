import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, Shield, Book,
    CheckCircle2, AlertTriangle, Zap, Activity, TrendingUp, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, ShieldCheck, Flame, BookOpen, UserX, ActivitySquare,
    Network
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

const AE5View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE5 = [
        { term: "Relé de protección", def: "Dispositivo que supervisa condiciones eléctricas (corriente, tensión, etc.) y acciona mecanismos de desconexión en caso de anomalías." },
        { term: "Elemento de sensado", def: "Componente del relé encargado de percibir el parámetro eléctrico a supervisar (ej. transformadores de corriente, termistores)." },
        { term: "ANSI 50", def: "Clasificación universal para el Relé de sobrecorriente instantáneo." },
        { term: "ANSI 51", def: "Clasificación universal para el Relé de sobrecorriente temporizado." },
        { term: "ANSI 49 (Relé térmico)", def: "Relé de sobrecarga térmica que protege contra sobrecargas prolongadas, típicamente utilizando una lámina bimetálica." },
        { term: "Tiempo inverso", def: "Característica de temporización donde el tiempo de disparo disminuye conforme aumenta la magnitud de la corriente de falla." },
        { term: "Relé direccional (ANSI 67)", def: "Relé de sobrecorriente que puede identificar la dirección del flujo de corriente analizando la fase entre tensión y corriente." },
        { term: "Temporizador", def: "Circuito interno que permite introducir un retardo antes de accionar la protección para discriminar entre transitorios normales y fallas reales." }
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
                        <span className="text-sm font-black dark:text-white uppercase">AE5: Criterios y Contenidos</span>
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
                                Protecciones Eléctricas: <br /> <span className="text-[#D1202F]">Estudio de Relés de Protección y Relés Térmicos</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>Este texto ha sido desarrollado en el contexto global de la enseñanza de protecciones eléctricas, conforme a los criterios y contenidos señalados, utilizando como referencia principal la bibliografía: Técnicas de aplicación de fusibles de Tomás Pascual Martínez y Protección por relevadores a sistemas de potencia de Agapito Mendoza Romero, publicaciones del Instituto Politécnico Nacional. El texto busca proporcionar fundamentos teóricos y prácticos para la instalación y mantenimiento de elementos de protección en circuitos eléctricos, haciendo hincapié en la comprensión, instalación y regulación de relés térmicos, sus clasificaciones y su aplicación conforme a la normativa vigente.</Paragraph>
                        </div>

                        <ExpansionTile title="1. Función de un Relé de Protección" icon={ShieldCheck} defaultOpen={true}>
                            <Paragraph>Los sistemas eléctricos modernos requieren dispositivos capaces de detectar, aislar y proteger los circuitos y equipos ante condiciones anormales que puedan poner en riesgo la integridad de la instalación, la continuidad del servicio o la seguridad de las personas. El dispositivo clave en estas funciones es el relé de protección.</Paragraph>
                            <Paragraph>Según Pascual Martínez (1998) y Mendoza Romero (1998), la función principal de un relé de protección es supervisar las condiciones eléctricas (como corriente, tensión, frecuencia, temperatura, etc.) en los distintos puntos de un sistema eléctrico, y accionar mecanismos de desconexión, como interruptores automáticos, en caso de detectar anomalías que puedan comprometer la seguridad u operación de la instalación.</Paragraph>

                            <SectionHeader title="Propósitos de diseño" />
                            <List items={[
                                "Proteger a las personas frente a contactos eléctricos indirectos o directos.",
                                "Resguardar la integridad de equipos y máquinas ante condiciones de sobrecorriente, cortocircuito, sobretemperatura, etc.",
                                "Contribuir con la estabilidad y continuidad eléctrica del sistema, limitando el área y tiempo de la falla.",
                                "Disminuir el riesgo de incendios y deterioro de materiales."
                            ]} />
                            <Paragraph>En suma, el relé de protección es esencial para garantizar un entorno eléctrico seguro y confiable. Se encuentra en una gran variedad de aplicaciones, desde instalaciones residenciales, pasando por la industria, hasta sistemas eléctricos de potencia de gran envergadura.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="2. Estructura de un Relé" icon={Settings}>
                            <Paragraph>La estructura de un relé de protección está conformada por diversos bloques funcionales, cada uno de los cuales cumple roles específicos dentro del proceso de supervisión y gestión de fallas. La estructura básica se compone de los siguientes elementos:</Paragraph>
                            <List items={[
                                "Elemento de sensado: Es el encargado de percibir el parámetro eléctrico a supervisar, como la corriente, la tensión o la temperatura. Puede estar constituido por transformadores de corriente, bobinas, termistores, etc.",
                                "Mecanismo de comparación y decisión: Se trata del conjunto de componentes que compara la señal sensada con un valor prefijado (el umbral). Si la magnitud medida excede el valor de ajuste, el mecanismo genera una señal de activación.",
                                "Temporizador: Muchos relés incluyen un circuito que permite introducir un retardo antes de accionar la protección, lo cual es vital para discriminar entre transitorios normales y verdaderas fallas.",
                                "Elemento de salida: Está compuesto por contactos eléctricos o señales electrónicas que activan el mecanismo de corte (como el disparo de un interruptor automático)."
                            ]} />
                            <Paragraph>A nivel constructivo, los relés pueden ser electromecánicos, electrónicos o digitales. Los relés electromecánicos prevalecieron durante décadas y aún se utilizan, aunque los sistemas modernos tienden hacia relés digitales o numéricos, que integran sensores y lógica de control avanzada.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="3. Clasificación de Relés según Norma ANSI" icon={ListChecks}>
                            <Paragraph>El estándar ANSI (American National Standards Institute) ha establecido, desde los años 20 del siglo pasado, una clasificación universal de funciones y tipos de relés mediante números que identifican la función o aplicación. Esta codificación es ampliamente adoptada a nivel mundial y facilita la especificación y comprensión de esquemas de protección.</Paragraph>
                            <SectionHeader title="Códigos ANSI principales" />
                            <List items={[
                                "50 — Relé de sobrecorriente instantáneo",
                                "51 — Relé de sobrecorriente temporizado",
                                "49 — Relé térmico o de sobrecarga térmica",
                                "59 — Relé de sobretensión",
                                "27 — Relé de subtensión",
                                "87 — Relé diferencial",
                                "67 — Relé de sobrecorriente direccional",
                                "32 — Relé de potencia direccional",
                                "81 — Relé de frecuencia"
                            ]} />
                            <Paragraph>Esta numeración puede encontrarse en los esquemas y diagramas eléctricos, permitiendo una identificación estándar de las funciones de protección y facilitando la integración de equipos fabricados en diferentes países o regiones.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="4. Relés de Sobrecorriente: Tipos y Funciones" icon={Zap}>
                            <Paragraph>Los relés de sobrecorriente son quizás los dispositivos de protección más comunes en los sistemas eléctricos industriales y de potencia. Su función es desconectar o aislar una parte del sistema si la corriente sobrepasa el valor admitido durante un periodo de tiempo determinado.</Paragraph>

                            <SectionHeader title="Principales tipos de relés de sobrecorriente" />
                            <List items={[
                                "Relés de sobrecorriente direccionales (ANSI 67): Además de detectar el exceso de corriente, identifican la dirección del flujo analizando la fase entre tensión y corriente. Imprescindibles en redes en anillo.",
                                "Relés de sobrecorriente no direccionales (ANSI 50/51): Se activan únicamente ante la magnitud de la corriente, sin importar la dirección. Son adecuados para sistemas radiales.",
                                "Relés instantáneos (ANSI 50): Su respuesta es casi inmediata al detectar una corriente superior al umbral prefijado (" + "sin retardo). Usados para protecciones selectivas.",
                                "Relés temporizados (ANSI 51): Incorporan un retardo deliberado para tolerar transitorios no peligrosos como el arranque de motores."
                            ]} />

                            <SectionHeader title="Modos de temporización (ANSI 51)" />
                            <List items={[
                                "Tiempo definido: El retardo de disparo permanece constante para cualquier valor de sobrecorriente superior al ajuste.",
                                "Tiempo inverso: El tiempo de disparo disminuye conforme aumenta la corriente medida. Frente a fallas severas, actúa más rápidamente.",
                                "Muy inverso y extremadamente inverso: Variantes del tiempo inverso con relación aún más pronunciada, típicamente en protección de alimentadores y transformadores."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="5. Parámetros del Relé Térmico" icon={Thermometer}>
                            <SectionHeader title="5.1 Principio de funcionamiento" />
                            <Paragraph>El relé térmico (ANSI 49) protege principalmente contra sobrecarga prolongada en motores y conductores. Contiene generalmente una lámina bimetálica que, al calentarse por el paso de corriente, se deforma y acciona un mecanismo de disparo.</Paragraph>

                            <SectionHeader title="5.2 Parámetros principales" />
                            <List items={[
                                "Corriente nominal de ajuste: Rango de protección seleccionado según la corriente nominal de la carga.",
                                "Tipo de elemento térmico: Curva de disparo (ej. clases 10, 20 o 30 s según IEC 60947-4-1) basada en el perfil de arranque.",
                                "Compatibilidad con contacto auxiliar: Asegurar operación correcta con el contactor o interruptor.",
                                "Capacidad de rearme: Puede ser manual o automático según la criticidad del proceso.",
                                "Compensación de temperatura ambiente: Garantizar precisión ante variaciones térmicas.",
                                "Número de polos: Según las fases del circuito."
                            ]} />

                            <SectionHeader title="5.3 Criterios de Instalación" />
                            <List items={[
                                "Ubicación: Lo más próximo posible al motor a proteger.",
                                "Verificación de bornes: Conexión y fijación firme de terminales.",
                                "Ajuste inicial: Generalmente entre el 100% y 115% de la corriente nominal del motor.",
                                "Ensayo de disparo: Pruebas funcionales del mecanismo y contactos auxiliares tras instalar.",
                                "Conformidad normativa: Cumplimiento de IEC 60947, IEC 60255 y ANSI 49."
                            ]} />

                            <SectionHeader title="5.4 Regulación y Pruebas" />
                            <Paragraph>La regulación debe hacerse con corriente real y equipos calibrados. Es crucial realizar mantenimiento preventivo limpiando los contactos y verificando terminales contra polvo o suciedad industrial.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="6. Aplicaciones Prácticas y Ejemplos" icon={ActivitySquare}>
                            <Paragraph>La protección eléctrica con relés térmicos y de sobrecorriente es esencial en:</Paragraph>
                            <List items={[
                                "Protección de motores eléctricos: Indispensable en cada Centro de Control de Motores (CCM) ante sobrecargas.",
                                "Protección de alimentadores: Primera barrera ante cortocircuitos que permite acotar apagones sólo al tramo fallado.",
                                "Protección de transformadores: Uso combinado de relés instantáneos, temporizados y diferenciales."
                            ]} />

                            <HighlightBox type="info" title="Caso Típico: Protección de Motor de 30 kW">
                                <Paragraph className="mb-2">Para proteger un motor de 30 kW en baja tensión frente a cortocircuitos y sobrecargas prolongadas:</Paragraph>
                                <ul className="list-disc pl-6 space-y-1 mb-2">
                                    <li>Un interruptor automático para protección ante cortocircuitos.</li>
                                    <li>Un relé térmico bimetálico regulado al 105% de la corriente de placa del motor, con rearme manual.</li>
                                    <li>Un contactor adecuadamente seleccionado y coordinado.</li>
                                </ul>
                                <Paragraph className="mt-2 mb-0">El ajuste considera el tipo de aislamiento y perfil de carga, debiendo verificarse bajo sobrecorriente controlada.</Paragraph>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="7. Normativa y Recomendaciones Globales" icon={BookOpen}>
                            <Paragraph>Los relés deben cumplir estándares reconocidos a nivel internacional:</Paragraph>
                            <List items={[
                                "IEC 60255: Requisitos generales para relés eléctricos de protección.",
                                "IEC 60947-4-1: Equipos de conmutación en baja tensión que regula contactores y protección por relé térmico.",
                                "ANSI C37: Normas para relés y su aplicación en América del Norte."
                            ]} />
                            <Paragraph>Estas normas especifican requerimientos de desempeño, tiempos de disparo y compatibilidad electromagnética. Los fabricantes líderes entregan hojas técnicas esenciales que todo especialista debe consultar y respetar.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-50 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">8. Consideraciones Finales</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Los relés de protección, y especialmente los relés térmicos, son elementos clave en cualquier sistema eléctrico moderno, desde aplicaciones residenciales hasta industriales y de potencia. Su correcta selección, adecuada instalación en conformidad a las normas y fabricante, y su regulación precisa, son vitales para asegurar la continuidad del servicio eléctrico, la longevidad de los equipos, y la reducción de duración de las fallas con discriminación precisa.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                El profesional de ingeniería eléctrica debe mantener una actitud proactiva en el estudio, comprensión y actualización de sus conocimientos en protecciones eléctricas, usando siempre fuentes confiables, como las obras de Pascual Martínez y Mendoza Romero. Aunque el campo está en constante evolución hacia la digitalización, los principios fundamentales aquí descritos continúan siendo el cimiento de sistemas eléctricos seguros.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Bibliografía y Normas</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Técnicas de Aplicación de Fusibles</strong>
                                        <span className="text-slate-500 italic">Tomás Pascual Martínez, 1998</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Protección por Relevadores</strong>
                                        <span className="text-slate-500 italic">Agapito Mendoza Romero, 1998</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Normativas Internacionales</strong>
                                        <span className="text-slate-500 italic">IEC 60255, IEC 60947-4-1<br />ANSI C37 (ANSI 49, 50, 51)</span>
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
                        {glossaryAE5.map((item, i) => (
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
                    <ArrowLeft size={16} /> Finalizar Sesión AE5
                </button>
            </div>

        </div>
    );
};

export default AE5View;
