import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, Shield, Book,
    CheckCircle2, AlertTriangle, Zap, Activity, TrendingUp, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, ShieldCheck, Flame, BookOpen, UserX, ActivitySquare,
    Network, ServerCog, Cpu
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

const AE6View = ({ onBack }) => {
    const [activeTab, setActiveTab] = useState('materia');

    const glossaryAE6 = [
        { term: "Contactor", def: "Interruptor operado electromagnéticamente, diseñado para el control remoto de circuitos eléctricos de potencia o de mando al accionar una carga." },
        { term: "Bobina de mando (Electroimán)", def: "Componente encargado de generar el campo magnético necesario para accionar los contactos móviles del contactor al ser energizada." },
        { term: "Contactos principales", def: "Contactos de gran tamaño diseñados para la conmutación de cargas elevadas de potencia, usualmente tripolares (motores, resistencias)." },
        { term: "Contactos auxiliares", def: "Contactos menores utilizados para los circuitos de control, señalización y enclavamiento. Se dividen en Normalmente Abiertos (NO) y Normalmente Cerrados (NC)." },
        { term: "Enclavamiento", def: "Sistema de seguridad, implementado a través de contactos auxiliares o medios mecánicos, que impide operaciones incorrectas o activaciones simultáneas peligrosas." },
        { term: "Riel DIN", def: "Estándar de carril metálico utilizado internacionalmente para el montaje y fijación rápida de equipamientos de control en tableros eléctricos." },
        { term: "Arco eléctrico", def: "Descarga luminosa y de gran temperatura generada entre dos contactos eléctricos al separarse interrumpiendo un circuito de alta potencia, siendo más difícil de extinguir en C.C." },
        { term: "Categoría de servicio (AC-1, AC-3...)", def: "Clasificación que define el uso previsto del contactor basado en el tipo de carga (resistiva, motores) y severidad operativa exigida (norma IEC 60947)." }
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
                        <span className="text-sm font-black dark:text-white uppercase">AE6: Instalación de Contactores</span>
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
                                Protecciones Eléctricas: <br /> <span className="text-[#D1202F]">Instalación y Mantenimiento de Contactores</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>El desarrollo tecnológico industrial está fundamentado en la operación segura y eficiente de los sistemas eléctricos. Los dispositivos de protección y control, como los contactores, juegan un papel crucial en la automatización y resguardo de las instalaciones eléctricas tanto industriales como comerciales y residenciales. La comprensión profunda de los contactores, sus partes, clasificación, criterios de selección, métodos de instalación, fallas más frecuentes y la normativa legal internacional es esencial para garantizar la continuidad operativa y la integridad de los sistemas de potencia.</Paragraph>
                            <Paragraph>Esta unidad de estudio tiene como objetivo principal guiar integralmente la instalación y mantenimiento de contactores en circuitos de potencia y mando, considerando especificaciones del fabricante y la normativa legal vigente, abordando tanto los aspectos teóricos como prácticos requeridos en el ejercicio profesional global.</Paragraph>
                        </div>

                        <ExpansionTile title="1. Partes de un Contactor" icon={Cpu} defaultOpen={true}>
                            <Paragraph>Un contactor es un interruptor operado electromagnéticamente, diseñado para el control remoto de circuitos eléctricos de potencia o de mando. Se utiliza principalmente para el accionamiento de motores, alumbrado industrial y bancos de capacitores.</Paragraph>

                            <SectionHeader title="Componentes principales" />
                            <List items={[
                                "Bobina de mando: Genera el campo magnético necesario para accionar los contactos móviles al energizarse.",
                                "Núcleo fijo y móvil: El fijo forma la estructura base; el móvil cierra o abre el circuito bajo el efecto magnético.",
                                "Contactos principales (potencia): De gran tamaño, diseñados para conmutar cargas elevadas (generalmente 3 polos).",
                                "Contactos auxiliares: Menores, usados para control, señalización y enclavamiento. Pueden ser normalmente abiertos (NO) o cerrados (NC).",
                                "Muelle de retorno: Devuelve el núcleo y contactos a su posición original al desenergizarse la bobina.",
                                "Caja envolvente: Estructura plástica/aislante que protege los componentes y al usuario.",
                                "Bornes de conexión: Puntos para el conexionado de conductores de potencia y mando."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="2. Clasificación y Funciones" icon={ServerCog}>
                            <SectionHeader title="2.1 Clasificación" />
                            <Paragraph>Se clasifican bajo distintos criterios dependiendo del voltaje, tipo de carga y polos:</Paragraph>
                            <List items={[
                                "Según corriente: Para CA (preparados para picos propios de alterna) y CC (modificados para evitar arcos eléctricos prolongados).",
                                "Según número de polos: Monopolares (cargas monofásicas), Tripolares (aplicaciones trifásicas) o Tetrapolares.",
                                "Por capacidad de corriente: Amperaje máximo que pueden interrumpir de modo seguro.",
                                "Por aplicación: Para motores (altos picos de arranque), alumbrado (resistivas) o capacitores.",
                                "Según tipo de mando: Principalmente mando eléctrico remoto interactuando con la bobina."
                            ]} />

                            <SectionHeader title="2.2 Funciones Principales" />
                            <List items={[
                                "Conexión y desconexión remota: Control a distancia evitando manipulación directa segura de cargas.",
                                "Automatización de procesos: Fundamental en secuenciadores y arranque de motores.",
                                "Interbloqueo de seguridad: Evita operaciones incorrectas o simultáneas no permitidas mediante contactos auxiliares.",
                                "Seccionamiento de emergencia: Permite aislar circuitos ante fallas."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="3. Criterios de Selección" icon={ListChecks}>
                            <Paragraph>Su elección debe considerar las recomendaciones especializadas de libros como Técnicas de aplicación de fusibles:</Paragraph>
                            <List items={[
                                "Tipo de carga a controlar: Inductivas requieren alta capacidad de ruptura; las resistivas exigen durabilidad ante conmutaciones frecuentes.",
                                "Corriente nominal de la carga: A considerar picos de arranque (motores alcanzan 8x su corriente en fracciones de seg).",
                                "Tensión de trabajo: Debe coincidir con la red a controlar, y especificar el voltaje de la bobina.",
                                "Capacidad de interrupción: Poder de corte según normativas para abrir bajo posibles condiciones de falla.",
                                "Clase de servicio: Durabilidad exigida en número de maniobras mecánicas y eléctricas.",
                                "Condiciones ambientales: Efectos de humedad, polvos, y vibración justificando protecciones extra.",
                                "Compatibilidad normativa: Debe poseer sellos según IEC 60947, UL 508, NOM, etc."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="4. Métodos de Instalación" icon={Wrench}>
                            <SectionHeader title="4.2 Métodos de Montaje" />
                            <List items={[
                                "Montaje en riel DIN o a superficie: Requiere dejar espacio para ventilación periférica.",
                                "Instalación en tableros: Respetar distancia mínima recomendada entre equipos agrupados y organizar el cableado."
                            ]} />

                            <SectionHeader title="4.3 Conexiones Eléctricas" />
                            <Paragraph>Siempre operar con la alimentación desconectada y herramientas aisladas.</Paragraph>
                            <List items={[
                                "Conexionado de potencia: Asegurar apriete firme según tablas (Torque) para evitar puntos calientes.",
                                "Conexionado de mando y auxiliares: Interconectar bobina, interruptores, relés; y los bloques NC/NO para señalización.",
                                "Verificación: Comprobar continuidad, polaridad, descartando cortocircuitos entre polos."
                            ]} />

                            <SectionHeader title="4.4 y 4.5 Pruebas y Resumen" />
                            <Paragraph>La puesta en servicio amerita validar las secuencias en vacío del mando, confirmando el cierre/apertura y los sistemas de enclavamientos con protección termo-magnética activada.</Paragraph>
                            <HighlightBox type="warning" title="Precaución">
                                <Paragraph>Todo cableado y borne debe quedar etiquetado. Evite exponer el contactor a vibraciones severas o entornos con polvos conductores, lo que amerita gabinetes herméticos apropiados.</Paragraph>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="5. Fallas Comunes y Prevención" icon={AlertTriangle}>
                            <Paragraph>Los textos especializados destacan fallas como desgaste de contactos al punto de pegarse (soldarse) debido a picos excesivos. Otros riesgos:</Paragraph>
                            <List items={[
                                "Arco eléctrico prolongado: Principalmente en desconexión CC o altamente inductivas; erosiona aceleradamente.",
                                "Fallo de bobina: Por sobrevoltajes, aislamientos degradados o alimentación de mala calidad.",
                                "Núcleo trabado: El móvil se atasca por suciedad u óxido impidiendo conmutar correctamente.",
                                "Ruido/Vibración (zumbidos): Atribuido a falta de tensión plena o ajuste deficiente en el entrehierro de núcleos."
                            ]} />

                            <HighlightBox type="alert" title="Síntomas y Diagnóstico Preventivo">
                                <Paragraph>Prestar atención a: <strong>Zumbidos anómalos, olor a quemado, disparos frecuentes del termomagnético al mando o sobrecalentamiento visible.</strong></Paragraph>
                                <Paragraph>Las prevenciones abarcan reapriete periódico de bornes, medir la caída de tensión en los contactos, limpiarlos frecuentemente del polvo ambiental y sustituir bloques de contacto desgastados prematuramente.</Paragraph>
                            </HighlightBox>
                        </ExpansionTile>

                        <ExpansionTile title="6. Normativa de Seguridad Vigente" icon={ShieldCheck}>
                            <Paragraph>Las normativas dictaminan requerimientos y diseño de envolventes ineludibles para la seguridad del operario:</Paragraph>
                            <List items={[
                                "IEC 60947: Regula internacionalmente a equipos de conmutación de baja tensión, contactores incluidos.",
                                "NFPA 70 / UL 508: National Electrical Code estadounidense y normas UL para tableros de control.",
                                "Exigencias: Involucra dispositivos automáticos de respaldo contra fallas a tierra, protección de envolventes contra toque directo, señalización obligatoria e intervención reservada sólo para personal calificado provisto de EPP."
                            ]} />
                            <Paragraph>Ignorar regulaciones arriesga sanciones y propaga inminentes peligros a instalaciones y trabajadores.</Paragraph>
                        </ExpansionTile>

                        <div className="mt-8 p-10 bg-slate-50 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusiones</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La gestión eficaz de la protección y control en los circuitos eléctricos descansa en la adecuada selección, instalación y mantenimiento de los contactores, siguiendo criterios estrictos de seguridad, funcionalidad y durabilidad. La comprensión integral de las partes y funciones de los contactores, su correcta clasificación, los factores determinantes para la selección en función de la carga y de las condiciones ambientales, así como la observancia de los métodos y normativas internacionales de instalación y mantenimiento, es indispensable para todo profesional técnico del área.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                Se recomienda la consulta permanente de referencias técnicas confiables y la participación en capacitaciones continuas, así como la adopción de políticas de mantenimiento preventivo y predictivo, que permitan anticipar y reducir fallas, así como garantizar el cumplimiento con las normativas internacionales y locales.
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
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Normativa Internacional</strong>
                                        <ul className="text-slate-500 italic list-disc pl-3">
                                            <li>IEC 60947</li>
                                            <li>NFPA 70 (NEC)</li>
                                            <li>UL 508</li>
                                            <li>NOM-001-SEDE</li>
                                        </ul>
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
                        {glossaryAE6.map((item, i) => (
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
                    <ArrowLeft size={16} /> Finalizar Sesión AE6
                </button>
            </div>

        </div>
    );
};

export default AE6View;
