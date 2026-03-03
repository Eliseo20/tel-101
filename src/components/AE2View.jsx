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
                                Introducción a la Industria Eléctrica: <br /> <span className="text-[#D1202F]">Sistemas de Transmisión Eléctrica</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>Una vez generada la energía eléctrica, debe ser transportada hacia los centros de consumo (ciudades, industrias, minería), que a menudo se encuentran a cientos o miles de kilómetros de las centrales generadoras. Esta tarea monumental es llevada a cabo por los Sistemas de Transmisión Eléctrica, verdaderas autopistas de energía que sostienen el desarrollo y la interconexión del país.</Paragraph>
                            <Paragraph>La Unidad 2 de este módulo tiene como objetivo caracterizar estos sistemas a nivel nacional, analizando su infraestructura, el papel de las subestaciones y el rol fundamental de las entidades coordinadoras que gestionan la operación segura y económica del flujo eléctrico. Entender la transmisión es comprender cómo se integra el país energéticamente.</Paragraph>
                        </div>

                        <ExpansionTile title="I. Fundamentos de la Transmisión Eléctrica" icon={Zap} defaultOpen={true}>
                            <SectionHeader title="1.1 ¿Por qué se transmite en Alta Tensión?" />
                            <Paragraph>El principal desafío de transportar electricidad largas distancias es la pérdida de energía en forma de calor debido a la resistencia de los cables (Efecto Joule). Dado que las pérdidas son proporcionales al cuadrado de la corriente ($I^2R$), la estrategia técnica consiste en reducir la corriente al mínimo posible. Para transmitir la misma potencia ($P = V \times I$), si se reduce la corriente, se debe elevar proporcionalmente el voltaje.</Paragraph>
                            <Paragraph>Por este motivo, a la salida de las centrales generadoras, grandes transformadores elevan la tensión a niveles de Alta Tensión (AT) o Extra Alta Tensión (EAT), generalmente a 110 kV, 220 kV o hasta 500 kV. Esta operación minimiza drásticamente las pérdidas, reduce el calibre (y el peso/costo) de los cables conductores necesarios y permite la viabilidad técnica y económica del transporte a larga distancia.</Paragraph>

                            <SectionHeader title="1.2 Componentes de un Sistema de Transmisión" />
                            <List items={[
                                "Lineas de Transmisión: Formadas por conductores (usualmente de aluminio con núcleo de acero), torres de soporte y aisladores.",
                                "Subestaciones Elevadoras: Ubicadas junto a las centrales generadoras para subir el voltaje.",
                                "Subestaciones Reductoras: Ubicadas cerca de los centros de consumo para bajar el voltaje a niveles de subtransmisión o distribución.",
                                "Transformadores de Potencia: El corazón de las subestaciones, equipos estáticos que modifican los niveles de voltaje.",
                                "Equipos de Maniobra y Protección: Interruptores de poder y desconectadores que permiten operar red y aislar fallas de manera segura."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="II. El Sistema Interconectado Nacional (SEN)" icon={Activity}>
                            <SectionHeader title="2.1 Qué es el SEN" />
                            <Paragraph>En Chile, el Sistema Interconectado Nacional (SEN) es la red eléctrica principal que provee de energía a la gran mayoría de la población y la industria del país. Abarca geográficamente desde la región de Arica y Parinacota por el norte, hasta la isla de Chiloé en la región de Los Lagos por el sur, cubriendo más de 3.100 kilómetros de extensión.</Paragraph>

                            <SectionHeader title="2.2 Origen y Evolución" />
                            <Paragraph>Históricamente, Chile contaba con dos grandes redes separadas: el Sistema Interconectado del Norte Grande (SING), caracterizado por basarse principalmente en generación termoeléctrica para consumo minero, y el Sistema Interconectado Central (SIC), con mayor participación hidroeléctrica y consumo residencial/comercial. En el año 2017 se concretó la histórica interconexión de ambos sistemas, conformando el actual SEN, unificando el mercado eléctrico nacional, aumentando la seguridad del suministro y permitiendo, por ejemplo, que la energía solar abundante del norte fluya hacia los centros de mayor demanda en el centro y sur del país.</Paragraph>

                            <SectionHeader title="2.3 Sistemas Aislados" />
                            <Paragraph>Además del SEN, existen sistemas medianos y aislados (como el de Aysén, Magallanes y Rapa Nui), que operan de forma independiente dada la complejidad geográfica que impide su interconexión rentable con el sistema principal.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="III. Gestión y Coordinación del Sistema" icon={Settings}>
                            <SectionHeader title="3.1 Operación a Tiempo Real" />
                            <Paragraph>La electricidad, a nivel de red, no se puede almacenar en grandes cantidades de forma tradicional; debe generarse en el mismo instante y en la misma proporción en que se consume. Si la demanda sube, la generación debe subir inmediatamente. Si esta balanza se desequilibra, el sistema colapsa (apagón o blackout).</Paragraph>

                            <SectionHeader title="3.2 El Coordinador Eléctrico Nacional (CEN)" />
                            <Paragraph>Debido a esta criticidad técnica y al hecho de que existen múltiples empresas generadoras y transmisoras privadas, se requiere una entidad neutral y central que ordene y coordine el funcionamiento de todos. En Chile, esa entidad es el Coordinador Eléctrico Nacional (CEN).</Paragraph>
                            <Paragraph>Las responsabilidades del Coordinador incluyen:</Paragraph>
                            <List items={[
                                "Operación Segura: Mantener la estabilidad de voltaje y frecuencia en todo momento.",
                                "Despacho Económico: Decidir qué centrales generan energía en cada instante, priorizando siempre en estricto orden económico (enlistando desde la tecnología de menor costo operativo hasta la más cara) para asegurar el precio mínimo para el sistema.",
                                "Acceso Abierto: Garantizar que todas las empresas tengan acceso justo a las redes de transmisión, fomentando la libre competencia."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="IV. Normativa de Seguridad y Mantenimiento" icon={ShieldCheck}>
                            <Paragraph>El mantenimiento de líneas de transmisión y subestaciones es una tarea de alto riesgo que requiere estrictos protocolos de seguridad y personal altamente calificado.</Paragraph>

                            <SectionHeader title="4.1 Trabajos en Altura y Alta Tensión" />
                            <Paragraph>Las labores de mantenimiento en torres de alta tensión involucran riesgos combinados: trabajo en altura geográfica (a menudo en condiciones climáticas adversas) y exposición a campos electromagnéticos e inducciones peligrosas, incluso cuando la línea principal está desenergizada. Por ello, el uso de Equipos de Protección Personal (EPP) específicos, arneses de seguridad, líneas de vida y pértigas aisladas es estrictamente obligatorio.</Paragraph>

                            <SectionHeader title="4.2 Procedimientos de Bloqueo" />
                            <Paragraph>Cualquier intervención directa sobre los equipos requiere la aplicación rigurosa de los procedimientos de bloqueo y etiquetado (LOTO). Se debe garantizar, mediante el uso de candados físicos y comprobación de ausencia de tensión, que ninguna maniobra remota o accidental pueda reenergizar la sección donde se encuentran los técnicos.</Paragraph>

                            <SectionHeader title="4.3 Mantenimiento Predictivo" />
                            <Paragraph>Dado el costo altísimo de desconectar una línea troncal de transmisión, la industria privilegia el mantenimiento predictivo y preventivo sin interrumpir el servicio. Esto incluye el uso de drones para inspección visual de aisladores, cámaras termográficas para detectar puntos calientes (falsos contactos) y análisis de aceite en transformadores para diagnosticar fallas incipientes.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">V. Conclusiones</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Los sistemas de transmisión son la columna vertebral energética de cualquier país moderno. En Chile, la robustez y extensa cobertura del Sistema Interconectado Nacional (SEN) aseguran que la energía generada —cada vez más proveniente de fuentes renovables en los extremos del país— pueda fluir confiablemente hacia los centros industriales y urbanos.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Comprender la necesidad de elevar el voltaje para reducir las corrientes y minimizar pérdidas, identificar los roles de las subestaciones y entender la función crítica de coordinación económica y técnica que lleva a cabo el CEN, proporciona una visión integral de cómo interactúan las fuerzas del mercado, la física de la electricidad y la necesidad pública de un suministro ininterrumpido. Para el técnico e ingeniero eléctrico moderno, conocer esta red a gran escala es tan fundamental como dominar el circuito local.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Bibliografía Recomendada</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Coordinador Eléctrico Nacional (CEN)</strong>
                                        <span className="text-slate-500 italic">Documentos Oficiales y Estadísticas, 2023.</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Ministerio de Energía - Chile</strong>
                                        <span className="text-slate-500 italic">Reportes sobre el Sistema Interconectado Nacional (SEN).</span>
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
