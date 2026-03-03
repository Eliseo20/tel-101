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
        { term: "Técnico Eléctrico", def: "Profesional capacitado para ejecutar labores de instalación, mantenimiento, operación y reparación de sistemas eléctricos, cumpliendo con la normativa vigente y garantizando la seguridad de bienes y personas." },
        { term: "Prevención de Riesgos", def: "Conjunto de actividades y medidas adoptadas o previstas en todas las fases de actividad de la empresa con el fin de evitar o disminuir los riesgos derivados del trabajo." },
        { term: "SEC (Superintendencia de Electricidad y Combustibles)", def: "Organismo público en Chile encargado de fiscalizar que la generación, transporte y distribución de energía eléctrica se ajusten a las leyes y reglamentos vigentes." },
        { term: "Licencia de Instalador SEC", def: "Acreditación oficial que certifica las competencias de un profesional para ejecutar instalaciones eléctricas de acuerdo a las diferentes clasificaciones (Clase A, B, C o D)." },
        { term: "EPP (Elementos de Protección Personal)", def: "Equipos, piezas o dispositivos que evitan que una persona tenga contacto directo con los peligros de ambientes riesgosos, los cuales pueden generar lesiones y enfermedades." },
        { term: "Normativa RIC", def: "Pliegos Técnicos Normativos (Reglamentos de Instalación de Consumo) que establecen las exigencias de seguridad para las instalaciones de consumo de energía eléctrica en Chile." },
        { term: "Reglas de Oro de la Electricidad", def: "Conjunto de 5 pasos estandarizados mundialmente para trabajar en instalaciones eléctricas sin tensión, garantizando que el circuito está desenergizado y bloqueado." },
        { term: "LOTO (Lockout/Tagout)", def: "Procedimiento de seguridad vital que consiste en bloquear y etiquetar físicamente las fuentes de energía de los equipos antes de realizarles mantenimiento." }
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
                                Introducción a la Industria Eléctrica: <br /> <span className="text-[#D1202F]">Rol del Técnico, Normativa y Seguridad</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La industria eléctrica es uno de los motores fundamentales del desarrollo moderno, pero su manipulación conlleva riesgos inherentes que pueden ser fatales. Por esta razón, el rol del técnico eléctrico trasciende la simple ejecución de tareas manuales; implica una responsabilidad profunda y ética con la seguridad personal, la de su equipo y la de la comunidad.</Paragraph>
                            <Paragraph>En esta sección de la Unidad 1, exploraremos el alcance profesional del técnico en la industria, el marco legal y normativo que rige sus acciones (particularmente a través de la SEC), y los principios inquebrantables de la prevención de riesgos, incluyendo el uso de Elementos de Protección Personal (EPP) y las vitales "5 Reglas de Oro" para trabajos sin tensión.</Paragraph>
                        </div>

                        <ExpansionTile title="I. El Rol del Técnico Eléctrico" icon={UserX} defaultOpen={true}>
                            <SectionHeader title="1.1 Competencias y Responsabilidades" />
                            <Paragraph>El técnico eléctrico es el especialista capacitado para diseñar (en ciertos niveles), instalar, operar, mantener y reparar sistemas e infraestructuras eléctricas. Su campo de acción abarca desde instalaciones domiciliarias y comerciales, hasta el mantenimiento en plantas generadoras y subestaciones de transmisión.</Paragraph>
                            <Paragraph>Más allá de la destreza técnica, sus responsabilidades principales incluyen:</Paragraph>
                            <List items={[
                                "Cumplimiento Normativo: Ejecutar cada trabajo bajo los estrictos estándares de los reglamentos vigentes (como los Pliegos RIC en Chile).",
                                "Diagnóstico y Resolución: Identificar fallas en sistemas complejos y proponer soluciones eficientes y seguras.",
                                "Liderazgo en Seguridad: Ser el primer supervisor de su propia seguridad y la de su entorno, deteniendo cualquier faena que no cumpla con los estándares mínimos."
                            ]} />

                            <SectionHeader title="1.2 La Certificación SEC" />
                            <Paragraph>En Chile, para ejercer legalmente como instalador eléctrico de manera independiente o certificar obras ante las distribuidoras, el técnico o ingeniero debe contar con una Licencia de Instalador Eléctrico, otorgada por la Superintendencia de Electricidad y Combustibles (SEC).</Paragraph>
                            <Paragraph>Las licencias se dividen en clases (A, B, C, D) dependiendo del nivel de estudios (Ingeniería Civil, Ejecución, Técnico nivel superior, Técnico nivel medio) y limitan la cantidad de potencia (kilowatts) instalada y el nivel de tensión (Alta o Baja Tensión) que el profesional está autorizado a firmar y certificar.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="II. Marco Normativo y Regulador" icon={BookOpen}>
                            <SectionHeader title="2.1 La Superintendencia de Electricidad y Combustibles (SEC)" />
                            <Paragraph>La SEC es la institución pública del Estado de Chile responsable de vigilar que las personas cuenten con productos y servicios seguros y de calidad en los sistemas de electricidad y combustibles. Su rol fiscalizador es fundamental para prevenir accidentes producto de malas instalaciones o equipos deficientes.</Paragraph>

                            <SectionHeader title="2.2 Los Pliegos Técnicos Normativos (RIC)" />
                            <Paragraph>Hasta hace pocos años, las instalaciones eléctricas de consumo en Chile se regían por la Norma NCH 4/2003. Esta normativa fue actualizada y reemplazada por los Pliegos Técnicos Normativos RIC (Reglamentos de Instalación de Consumo), que entraron en vigencia plena. Estos 19 pliegos detallan paso a paso las exigencias actuales, desde el diseño de tableros (RIC N°2) y sistemas de puesta a tierra (RIC N°6), hasta instalaciones especiales y eficiencia energética.</Paragraph>
                            <HighlightBox type="info">
                                <p>Un técnico profesional moderno no trabaja "de memoria". Su principal herramienta, a la par de su multitester, es su conocimiento actualizado y la consulta constante de los pliegos RIC pertinentes a la obra que está ejecutando.</p>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="III. Prevención de Riesgos y EPP" icon={ShieldCheck}>
                            <SectionHeader title="3.1 Cultura de Prevención" />
                            <Paragraph>En la industria eléctrica, un accidente casi siempre tiene consecuencias graves (quemaduras severas, amputaciones, fibrilación ventricular o muerte). La prevención de riesgos no es un obstáculo para la productividad de la empresa; es la garantía de que el trabajador volverá a su hogar al finalizar la jornada.</Paragraph>

                            <SectionHeader title="3.2 Elementos de Protección Personal (EPP)" />
                            <Paragraph>El técnico debe usar invariablemente el EPP dieléctrico (aislante) homologado y certificado. El EPP básico incluye:</Paragraph>
                            <List items={[
                                "Casco dieléctrico: Con barbiquejo y sin partes metálicas.",
                                "Calzado de seguridad dieléctrico: Sin puntas ni ojales de acero expuestos.",
                                "Guantes aislantes de goma: Clasificados según el nivel de tensión (Clase 00, 0, 1, etc.), usualmente protegidos por guantes de cuero externos para evitar perforaciones mecánicas.",
                                "Ropa de trabajo ignífuga: Algodón tratado o materiales específicos (Ropa Arc Flash) que no se derritan ni ardan al exponerse a un arco eléctrico.",
                                "Lentes de seguridad y/o pantallas faciales: Especialmente cruciales al operar interruptores (protección contra proyección de partículas y rayos UV del arco)."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="IV. Reglas de Oro y LOTO" icon={AlertTriangle}>
                            <SectionHeader title="4.1 Las 5 Reglas de Oro" />
                            <Paragraph>Para realizar trabajos sin tensión (desenergizados), que es la forma obligatoria de trabajar salvo contadísimas excepciones muy calificadas, se deben cumplir secuencialmente e invariablemente los siguientes 5 pasos:</Paragraph>
                            <List items={[
                                "1. Corte efectivo de todas las fuentes de tensión: Desconectar la instalación usando interruptores, seccionadores o fusibles.",
                                "2. Bloqueo de los aparatos de corte: Enclavar mecánica o físicamente (con candados LOTO) los dispositivos para evitar que alguien los reconecte por error. Colocar carteles de advertencia.",
                                "3. Comprobación de ausencia de tensión: Verificar con un detector o multitester certificado (y probado previamente de que funciona) que realmente no hay voltaje en cada una de las fases.",
                                "4. Puesta a tierra y en cortocircuito: Conectar todas las fases entre sí y a la malla de tierra física mediante equipos portátiles, para que, en caso de energización accidental (por ejemplo, un rayo o inducción), la corriente derive a tierra y produzca el disparo automático de las protecciones sin dañar al trabajador.",
                                "5. Señalización de la zona de trabajo: Delimitar el área y proteger frente a elementos próximos que sí pudieran estar en tensión."
                            ]} />
                            <HighlightBox type="alert">
                                <p>Omitir cualquiera de estos 5 pasos, especialmente el paso 3 (comprobar ausencia de tensión siempre antes de tocar un cable), es la principal causa de accidentes fatales en electricistas experimentados por exceso de confianza.</p>
                            </HighlightBox>

                            <SectionHeader title="4.2 Procedimientos Lockout/Tagout (LOTO)" />
                            <Paragraph>LOTO, por sus siglas en inglés, se refiere a la práctica del paso 2 de las Reglas de Oro. Implica el uso de candados personales exclusivos y tarjetas de advertencia. Es la garantía física de que nadie, excepto quien instaló el candado, puede reenergizar el circuito mientras está expuesto reparándolo.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">V. Conclusiones</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                El técnico en la industria eléctrica no es solo un operario calificado; es un profesional garante de la seguridad y el correcto funcionamiento de la infraestructura energética que mueve al país. Su labor exige un profundo respeto por la energía con la que trabaja, sustentado en un conocimiento técnico sólido, una actualización normativa constante (Pliegos RIC) y una cultura de prevención de riesgos innegociable.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La internalización y aplicación estricta de las "5 Reglas de Oro" y los procedimientos LOTO, junto con el uso adecuado de los Elementos de Protección Personal, marcan la diferencia entre una operación exitosa y un accidente fatal. En última instancia, la formación de un técnico eléctrico debe aspirar a la excelencia técnica fundida inextricablemente con una ética de seguridad intransigente.
                            </Paragraph>
                        </div>
                    </div>

                    <aside className="lg:col-span-4 space-y-6">
                        <div className="sticky top-32 space-y-6">
                            <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h4 className="font-black text-xs uppercase tracking-widest mb-4 text-[#002855] dark:text-blue-400">Bibliografía Recomendada</h4>
                                <div className="space-y-4">
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Superintendencia de Electricidad y Combustibles</strong>
                                        <span className="text-slate-500 italic">Pliegos Técnicos Normativos RIC (Vigentes)</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Seguridad Eléctrica y Reglas de Oro</strong>
                                        <span className="text-slate-500 italic">Manuales ACHS / Mutual de Seguridad</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Ley 16.744</strong>
                                        <span className="text-slate-500 italic">Normas sobre Accidentes del Trabajo y Enfermedades Profesionales (Chile)</span>
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
