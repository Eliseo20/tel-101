import React, { useState } from 'react';
import {
    ArrowLeft, FileText, ListChecks, Shield, Book,
    CheckCircle2, AlertTriangle, Zap, Activity, TrendingUp, Quote,
    Calculator, Settings, Power, Wrench, Thermometer, ShieldCheck, Flame, BookOpen, UserX, ActivitySquare,
    Globe, Network
} from 'lucide-react';
import HorizontalGallery from './HorizontalGallery';

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

    const galleryData = [
        {
            title: "Electrodos de Tierra",
            description: "Construidos comúnmente en barras de acero cobreado, se entierran para disipar de manera eficiente corrientes de falla al suelo circundante, creando el primer nivel del sistema protector.",
            image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1920&h=1080&auto=format&fit=crop"
        },
        {
            title: "Mallas Equipotenciales",
            description: "Red de conductores de cobre instalados horizontalmente bajo tierra, frecuentemente con soldadura exotérmica. Unifican el potencial del terreno para eliminar los riesgos de voltajes de paso.",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1920&h=1080&auto=format&fit=crop"
        },
        {
            title: "Cámaras de Inspección",
            description: "Permiten evaluar y dar mantenimiento periódico a las conexiones terrestres. La norma exige medición regular de la resistencia (generalmente menor a 10 Ohms) mediante puentes medidores adecuados.",
            image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1920&h=1080&auto=format&fit=crop"
        }
    ];

    const glossaryAE4 = [
        { term: "Conexión a tierra", def: "Enlace eléctrico intencional entre una instalación y el terreno, diseñado para derivar de forma segura corrientes de falla y sobretensiones." },
        { term: "Esquema TT", def: "Sistema donde el neutro del transformador y las masas de la instalación están conectados a tierras independientes." },
        { term: "Esquema TN", def: "Sistema donde el neutro y las masas comparten una misma puesta a tierra. Puede tener el conductor neutro y de protección separados (TN-S) o combinados (TN-C)." },
        { term: "Resistencia de puesta a tierra", def: "Valor óhmico que se opone al paso de la corriente eléctrica hacia el terreno. A menor resistencia, mayor capacidad de disipación segura." },
        { term: "Resistividad del terreno (ρ)", def: "Propiedad inherente del suelo que define su capacidad para conducir la corriente eléctrica, afectada por humedad, temperatura y composición." },
        { term: "Electrodos", def: "Elementos metálicos conductores (barras, placas, mallas) enterrados que transfieren directamente la corriente desde el sistema hacia el terreno." },
        { term: "Soldadura exotérmica", def: "Método de conexión molecular permanente usado para unir conductores de puesta a tierra, garantizando alta conductividad y resistencia a la corrosión." },
        { term: "Malla equipotencial", def: "Red reticulada de conductores subterráneos que iguala el potencial eléctrico en un área, reduciendo riesgos por tensiones de paso y de contacto." }
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
                        <span className="text-sm font-black dark:text-white uppercase">AE4: Instalación y Mantenimiento Puesta a Tierra</span>
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
                                Protecciones Eléctricas: <br /> <span className="text-[#D1202F]">Instalación y Mantenimiento de Puesta a Tierra según Normativa</span>
                            </h2>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 lg:rounded-[3rem] rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 mb-10">
                            <SectionHeader title="Introducción" />
                            <Paragraph>La protección eléctrica es un aspecto fundamental para la seguridad de las personas, la integridad de las instalaciones eléctricas y la preservación de los equipos. La correcta instalación de sistemas de puesta a tierra constituye uno de los elementos más importantes en este ámbito, permitiendo derivar a tierra corrientes de falla, disipar sobretensiones y prevenir accidentes eléctricos. En el contexto global, y considerando la normativa chilena específicamente la NCH Elec. 4/2003, este texto académico aborda de forma ordenada todos los contenidos requeridos, aportando los fundamentos teóricos y prácticos necesarios para la instalación y mantenimiento de sistemas de puesta a tierra en instalaciones eléctricas.</Paragraph>
                            <Paragraph>Este material está basado en la bibliografía especializada de Tomás Pascual Martínez (Técnicas de aplicación de fusibles, 1998) y Agapito Mendoza Romero (Protección por relevadores a sistemas de potencia, 1998), quienes han sido referentes en la formación técnica y profesional en materia de protecciones eléctricas.</Paragraph>
                        </div>

                        <ExpansionTile title="1. Esquemas de Conexión a Tierra" icon={Network} defaultOpen={true}>
                            <SectionHeader title="1.1 Concepto general" />
                            <Paragraph>La conexión a tierra es una disposición por la cual una parte eléctrica de una instalación se enlaza eléctricamente con el terreno, de modo que, en caso de falla, una corriente eléctrica pueda circular hacia tierra con una impedancia lo más baja posible. Esto protege a los usuarios de la instalación y evita daños a los equipos, ya que facilita la detección de fallas y asegura el disparo adecuado de los dispositivos de protección.</Paragraph>

                            <SectionHeader title="1.2 Esquemas Fundamentales" />
                            <Paragraph>Existen distintos esquemas de conexión a tierra utilizados a nivel internacional, principalmente los siguientes:</Paragraph>
                            <List items={[
                                "Sistema TT (Tierra-Tierra): En este esquema, el neutro del transformador de alimentación está conectado directamente a tierra, y las masas de la instalación también están conectadas a tierra por medio de un electrodo independiente. Es un sistema habitualmente empleado en instalaciones residenciales y pequeñas industrias. Presenta la ventaja de que la resistencia de puesta a tierra de la instalación puede ser medida y controlada de manera independiente.",
                                "Sistema TN (Tierra-Neutro): Aquí, las masas de la instalación y el neutro del transformador se conectan a la misma tierra, pero además, entre el neutro y las masas existe una interconexión directa mediante un conductor de protección. Se distinguen varias variantes: TN-C (donde neutro y tierra comparten un solo conductor), TN-S (conductor neutro y de protección separados) y TN-C-S (configuración mixta). Es muy usado en redes industriales y comerciales.",
                                "Sistema IT (Aislado-Tierra): En este sistema, la alimentación no está conectada a tierra, o lo está a través de una gran impedancia, y las masas están conectadas directamente a tierra. Su uso es habitual en instalaciones donde la continuidad de servicio es prioritaria, como hospitales y plantas industriales críticas."
                            ]} />
                            <Paragraph>Cada esquema ofrece ventajas y desventajas específicas en términos de seguridad, mantenimiento y coordinación con dispositivos de protección, por lo que la selección debe ser fundamentada en el tipo de instalación, el entorno y la normativa vigente.</Paragraph>

                            <SectionHeader title="1.3 Esquemas según la NCH Elec. 4/2003" />
                            <Paragraph>La Norma Chilena NCH Elec. 4/2003 especifica los requerimientos mínimos para los sistemas de puesta a tierra, reconociendo la aceptación tanto de sistemas TT como TN en distintas aplicaciones, estableciendo criterios claros para la resistencia máxima permitida, las características de los conductores y los métodos de verificación.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="2. Resistencia de una Puesta a Tierra" icon={Activity}>
                            <SectionHeader title="2.1 Definición y relevancia" />
                            <Paragraph>La resistencia de la puesta a tierra corresponde al valor óhmico que se opone al paso de la corriente eléctrica desde el sistema eléctrico hacia el terreno. Este valor es un factor crítico, ya que determina la eficacia del sistema de puesta a tierra: mientras menor sea la resistencia, mayor será la capacidad de disipar corrientes de falla de forma segura.</Paragraph>

                            <SectionHeader title="2.2 Elementos que influyen en la resistencia" />
                            <List items={[
                                "La resistividad del terreno (característica propia del tipo de suelo, humedad, temperatura).",
                                "La longitud, tipo, cantidad y disposición de los electrodos.",
                                "La profundidad de enterramiento de los electrodos.",
                                "El área de contacto entre el electrodo y el suelo.",
                                "Corrientes parásitas y perturbaciones externas."
                            ]} />

                            <SectionHeader title="2.3 Cálculo de la Resistencia" />
                            <Paragraph>Como referencia, para una varilla o barra vertical, la resistencia de tierra “R” se puede determinar según la siguiente fórmula:</Paragraph>
                            <div className="p-6 bg-slate-900 text-white rounded-2xl text-center shadow-2xl mb-6">
                                <span className="text-2xl font-serif text-blue-300">{'$$R = \\frac{\\rho}{2\\pi L} \\cdot \\ln\\left(\\frac{4L}{d}\\right)$$'}</span>
                            </div>
                            <Paragraph>Donde: <br />R = Resistencia de tierra [Ohm] <br />ρ = Resistividad del terreno [Ω·m] <br />L = Longitud del electrodo [m] <br />d = Diámetro del electrodo [m] <br />ln = logaritmo natural</Paragraph>

                            <HighlightBox type="info">
                                <p>Es fundamental realizar una correcta medición (método de la caída de potencial u otros) posterior a la instalación para confirmar que la resistencia obtenida esté dentro de los límites permitidos por la normativa aplicable (por ejemplo, la NCH Elec. 4/2003 establece máximos de 10 Ω para puestas a tierra generales y 5 Ω para sistemas críticos).</p>
                            </HighlightBox>

                            <SectionHeader title="2.4 Práctica para reducción de resistencia" />
                            <Paragraph>En la práctica, si la resistencia medida supera los valores tolerados, pueden adoptarse diferentes estrategias:</Paragraph>
                            <List items={[
                                "Añadir electrodos adicionales en paralelo.",
                                "Aumentar la profundidad del enterramiento.",
                                "Utilizar aditivos para mejorar la conductividad del terreno (por ejemplo, bentonita o sales especiales).",
                                "Escoger el lugar de implantación de los electrodos tras un estudio de resistividad previa."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="3. Componentes de un Sistema" icon={Wrench}>
                            <SectionHeader title="3.1 Electrodos" />
                            <Paragraph>Los electrodos son los elementos conductores que transfieren la corriente eléctrica al terreno. Pueden encontrarse diferentes tipos:</Paragraph>
                            <List items={[
                                "Electrodos en barra: De acero cobreado o acero galvanizado, longitud usualmente entre 1.20 m y 3.00 m.",
                                "Electrodos en placa: Generalmente de cobre o acero galvanizado; dimensiones típicas, 60 cm x 60 cm x 3 mm.",
                                "Electrodos en cinta o conductor: Cintas enterradas horizontalmente a cierta profundidad.",
                                "Mallas de tierra: Red de conductores que interconectan distintos puntos de la instalación para homogeneizar el potencial de tierra."
                            ]} />

                            <SectionHeader title="3.2 Conductores y 3.3 Conexiones" />
                            <Paragraph><strong>Conductores:</strong> Se utilizan conductores de cobre o aluminio, de sección adecuada para soportar la máxima corriente de falla y garantizar baja impedancia. El dimensionado debe considerar el tipo de protección de la instalación, la longitud y el lugar donde va a ser instalado el conductor.</Paragraph>
                            <Paragraph><strong>Conexiones:</strong> Toda unión debe asegurar la continuidad eléctrica y protegerse contra la corrosión. Se emplean conectores especialmente diseñados (grampas bimetálicas, soldaduras exotérmicas, terminales prensados, etc.), cumpliendo las exigencias de la NCH Elec. 4/2003.</Paragraph>

                            <SectionHeader title="3.4 Pozos y 3.5 Protección" />
                            <Paragraph>Los pozos de inspección facilitan el acceso a los electrodos y conexiones para su revisión, mantenimiento y medición posterior. Deben estar debidamente señalizados. Es esencial también proteger los elementos sobre el nivel del suelo y las conexiones contra daños accidentales mediante el uso de ductos o cubiertas protectoras.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="4. Métodos de Instalación" icon={ActivitySquare}>
                            <SectionHeader title="4.1 Instalación de electrodos verticales" />
                            <Paragraph>La instalación requiere seleccionar la ubicación idónea, alejándose de bases de hormigón. El electrodo debe enterrarse verticalmente, golpeándose hasta lograr la profundidad requerida (mínimo 2,40 metros según la NCH Elec. 4/2003).</Paragraph>

                            <SectionHeader title="4.2 Instalación de electrodos horizontales" />
                            <Paragraph>Los electrodos horizontales (cintas o placas) se instalan en zanjas de al menos 50 cm de profundidad. Deben evitarse ángulos agudos para minimizar rebotes de corriente.</Paragraph>

                            <SectionHeader title="4.3 Mallas de tierra" />
                            <Paragraph>Se componen de red de conductores de cobre desnudo enterrados entre 60 y 80 cm. Su disposición debe cubrir el perímetro de la instalación. Las uniones deben realizarse con soldaduras exotérmicas y deben incluirse diagonales para minimizar diferencias de potencial.</Paragraph>

                            <SectionHeader title="4.4 Criterios para el dimensionado" />
                            <Paragraph>El dimensionado del conductor debe basarse en la magnitud máxima de falla y el tiempo de despeje. Para sistemas generales, una sección mínima de 16 mm² en cobre suele ser adecuada.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="5. Tipos de Mallas de Tierra" icon={Network}>
                            <List items={[
                                "Mallas equipotenciales: Se instalan para igualar el potencial en puntos accesibles, reduciendo riesgo por paso de corriente. Usadas en subestaciones y áreas de riesgo elevado.",
                                "Mallas de protección perimetral: Cubren el perímetro, uniendo todos los puntos conductores de la estructura al mismo potencial de tierra.",
                                "Mallas interconectadas: Interconexión de varias mallas independientes, logrando una reducción importante de resistencia global.",
                                "Mallas para sistemas especiales: Para hospitales o centros de cómputo, requieren requisitos superiores de resistencia y doble reticulado."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="6. NCH Elec. 4/2003: Requisitos" icon={ShieldCheck}>
                            <SectionHeader title="6.1 Requisitos generales" />
                            <List items={[
                                "Mantener potenciales seguros durante la falla.",
                                "Conectar elementos metálicos accesibles no vivos a tierra.",
                                "Resistencia máxima 10 Ω (general) y 5 Ω (críticos).",
                                "Mantener registro de diseño e instalación."
                            ]} />

                            <SectionHeader title="6.2 y 6.3 Procedimientos" />
                            <Paragraph>Los electrodos y uniones deben cumplir mínimos estandarizados (barra de 2,4m). Los puntos de tierra deben ser señalizados. Es obligatorio verificar periódicamente el valor de resistencia y registrar los datos según un plan preventivo.</Paragraph>
                        </ExpansionTile>

                        <ExpansionTile title="7. Caso Práctico: Cálculo e Instalación" icon={Calculator}>
                            <Paragraph>A continuación se evalúa un caso en suelo de 50 Ω·m con barra de cobre de 14mm y 2.4m longitud.</Paragraph>
                            <List items={[
                                "Paso 1: Medición de terreno de 50 Ω·m por método Wenner.",
                                "Paso 2: Se elige barra mínima de 2.4m.",
                                "Paso 3: Al calcular R resultó en ~21.6 Ω, excediendo la norma (10 Ω). Por tanto, se requieren electrodos en paralelo separados 2.50m mínimo.",
                                "Paso 4: Conductor de 16 mm² seleccionado según fallo.",
                                "Paso 5: Instalación a > 2.40m, uso de conector bimetálico, conexión a barra del tablero, pozo de inspección y medición final < 10 Ω."
                            ]} />
                        </ExpansionTile>

                        <ExpansionTile title="8. Mantenimiento y Verificación" icon={Settings}>
                            <Paragraph>La inspección visual garantiza la firmeza de las uniones y ausencia de corrosión. Se recomienda medición de resistencia anual. En entornos críticos, se realizan pruebas adicionales de paso y equipotencialidad.</Paragraph>
                        </ExpansionTile>

                        <div className="mb-8">
                            <SectionHeader title="Galería de Equipos y Aplicaciones" />
                            <HorizontalGallery items={galleryData} />
                        </div>

                        <div className="mt-8 p-10 bg-slate-100 dark:bg-[#002855] border border-slate-200 dark:border-transparent rounded-[3rem] shadow-lg dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 text-[#002855] dark:text-white">
                                <Quote size={120} />
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4 tracking-widest text-[#002855] dark:text-blue-300">Conclusión</h3>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                La instalación y el mantenimiento de sistemas de puesta a tierra requieren conocimiento técnico, respeto a la normativa vigente y aplicación rigurosa de los procedimientos definidos por las mejores prácticas internacionales y nacionales. Tal y como exponen Pascual Martínez y Mendoza Romero, la protección efectiva de las personas y los bienes frente a riesgos eléctricos es responsabilidad de todos los profesionales vinculados a las instalaciones eléctricas, por lo que una capacitación constante y una actualización permanente en normativas resultan esenciales para garantizar la seguridad y la eficiencia operativa.
                            </Paragraph>
                            <Paragraph className="text-slate-700 dark:text-slate-200">
                                El dominio de cada uno de los criterios de evaluación: esquemas de conexión a tierra, resistencia de puesta a tierra, componentes, métodos de instalación, tipos de mallas y normativa NCH Elec. 4/2003 forma parte integral de las competencias profesionales exigidas internacionalmente para un técnico o ingeniero en electricidad, sentando las bases para una carrera comprometida con la excelencia y el compromiso social.
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
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md border-l-4 border-l-[#D1202F]">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Normativa Chilena</strong>
                                        <span className="text-slate-500 italic">NCH Elec. 4/2003: Instalaciones de baja tensión - Puesta a Tierra</span>
                                    </div>
                                    <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl text-[12px] font-medium border border-slate-200 dark:border-slate-700 shadow-sm transition hover:shadow-md">
                                        <strong className="block text-slate-900 dark:text-white uppercase mb-1">Normas Internacionales</strong>
                                        <span className="text-slate-500 italic">IEC 60364, IEEE Std 80</span>
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
