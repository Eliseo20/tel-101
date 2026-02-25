import React, { useState, useEffect } from 'react';
import {
  Zap,
  ShieldCheck,
  BookOpen,
  Calculator,
  ChevronRight,
  ArrowLeft,
  Info,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Layout,
  Settings,
  Cpu,
  Layers,
  Globe,
  Book,
  Scale,
  FileText,
  Activity,
  Shield,
  TrendingUp,
  Award,
  Sun,
  Moon,
  ListChecks,
  ChevronDown,
  ChevronUp,
  Quote,
  ExternalLink,
  Flame,
  Unplug,
  MonitorX
} from 'lucide-react';

// --- ESTRUCTURA DE DATOS CONSOLIDADA ---
const MODULE_DATA = {
  nombre: "Protecciones Eléctricas",
  codigo: "TEL302",
  horasClase: 72,
  horasAutonomo: 72,
  horasTotales: 144,
  creditos: 4,
  modalidad: "Presencial / PEV",
  unidadCompetencia: "Realizar la instalación y mantenimiento de elementos de protección en circuitos eléctricos, considerando especificaciones del fabricante y normativa legal vigente.",
  aprendizajes: [
    { id: 1, titulo: "AE1: Operación e Instalación Eléctrica", descripcion: "Analizan operación de instalación eléctrica, considerando tipos y efectos de fallas eléctricas, funcionamiento y simbología de fusibles, de acuerdo con normativa vigente." },
    { id: 2, titulo: "AE2: Protectores Termomagnéticos y Diferenciales", descripcion: "Realizan instalación de protectores termomagnéticos y diferenciales, considerando simbología, componentes y funcionamiento." },
    { id: 3, titulo: "AE3: Puesta a Tierra de Faena", descripcion: "Realizan instalación de puesta a tierra de faena eléctrica, considerando tipos de electrodos, cálculo de resistencia y dimensionado." },
    { id: 4, titulo: "AE4: Operación de Relé Térmico", descripcion: "Determinan operación de relé térmico, considerando clasificación, parámetros de selección, instalación y regulación." },
    { id: 5, titulo: "AE5: Instalación de Contactores", descripcion: "Realizan instalación de contactores en circuito de potencia o mando, considerando clasificación y criterios de selección." },
    { id: 6, titulo: "AE6: Coordinación de Protecciones", descripcion: "Realizan selección y coordinación de protecciones eléctricas contra sobrecargas y cortocircuitos." }
  ],
  glosarioAE1: [
    { term: "Estados de operación", def: "Condiciones en las que puede encontrarse una instalación o circuito eléctrico, tales como estado normal, sobrecarga, cortocircuito, falla a tierra, entre otros." },
    { term: "Tipos de fallas", def: "Diferentes modos en que una instalación eléctrica puede presentar anomalías, como fallas por cortocircuito, fallas a tierra, fase abierta o sobrecarga." },
    { term: "Tipos de perturbaciones", def: "Alteraciones en la calidad del suministro eléctrico, como sobretensiones, armónicos, flicker o microcortes." },
    { term: "Efectos de fallas o perturbaciones", def: "Consecuencias como daños en equipos, interrupciones del servicio, incendios o riesgos a la seguridad." },
    { term: "Simbología según norma IEC y ANSI", def: "Conjunto de símbolos normalizados para representar equipos eléctricos en planos según estándares internacionales." },
    { term: "NCh2025/1", def: "Norma chilena que regula la seguridad y los requisitos de las instalaciones eléctricas en baja tensión." },
    { term: "Funcionamiento de fusibles", def: "Principio de fundir un filamento ante sobrecorriente para interrumpir el flujo eléctrico y proteger el circuito." },
    { term: "Clasificación de fusibles", def: "Categorización según velocidad de respuesta (rápidos, lentos), aplicación o forma física." },
    { term: "Curvas características", def: "Gráfica que relaciona la corriente y el tiempo de fusión de un fusible para analizar su comportamiento." },
    { term: "Protección eléctrica", def: "Dispositivos diseñados para proteger personas y equipos contra efectos de fallas." },
    { term: "Corriente de cortocircuito", def: "Corriente extremadamente alta producida por el contacto directo de puntos con diferente potencial." },
    { term: "Sobrecarga", def: "Condición donde la corriente excede la nominal, generando calentamiento excesivo pero no instantáneo." },
    { term: "Fallo a tierra", def: "Contacto involuntario de una parte energizada con tierra, generando riesgos de electrocución." },
    { term: "Criterios de selección", def: "Factores como capacidad interruptiva, tensión de trabajo y tipo de carga para elegir una protección." },
    { term: "Mantenimiento", def: "Acciones de revisión y prueba para asegurar que las protecciones actúen correctamente ante fallas." }
  ]
};

// --- COLORES CORPORATIVOS ---
const COLORS = {
  blue: 'from-[#0056b3] to-[#007bff]',
  orange: 'from-[#e74c3c] to-[#f39c12]',
  yellow: 'from-[#f39c12] to-[#f1c40f]',
  textBlue: 'text-[#0056b3]',
  textOrange: 'text-[#e74c3c]',
  textYellow: 'text-[#f39c12]',
  borderBlue: 'border-[#0056b3]',
  borderOrange: 'border-[#e74c3c]',
  borderYellow: 'border-[#f39c12]',
};

// --- COMPONENTES DE UI ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-slate-900 rounded-2xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden transition-shadow hover:shadow-lg ${className}`}>
    {children}
  </div>
);

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const variants = {
    primary: `bg-gradient-to-r ${COLORS.blue} text-white dark:text-slate-100 hover:opacity-90`,
    secondary: `bg-gradient-to-r ${COLORS.orange} text-white dark:text-slate-100 hover:opacity-90`,
    outline: "border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800",
    ghost: "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
  };
  return (
    <button onClick={onClick} className={`px-6 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 tracking-tight shadow-sm ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

// --- ACTIVIDAD: GLOSARIO ---

const GlossaryItem = ({ term, definition }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-b dark:border-slate-800 transition-all ${isOpen ? 'bg-slate-50 dark:bg-slate-800/50' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 text-left group">
        <span className={`font-bold text-sm ${isOpen ? COLORS.textOrange : 'text-slate-700 dark:text-slate-300'} group-hover:${COLORS.textOrange} transition-colors`}>{term}</span>
        {isOpen ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-5 pt-0 text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
          {definition}
        </div>
      </div>
    </div>
  );
};

// --- VISTA: INICIO / DASHBOARD ---

const HomeView = ({ onNavigate }) => (
  <div className="space-y-12 animate-in fade-in duration-700">
    <div className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${COLORS.blue} dark:from-slate-900 dark:to-black text-white p-10 md:p-16 shadow-2xl`}>
      <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center gap-4">
            <span className={`bg-white/20 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl`}>{MODULE_DATA.codigo}</span>
            <div className="h-px w-12 bg-white/30" />
            <span className="text-white/80 text-sm font-bold">Carrera de Electricidad</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.9] uppercase italic tracking-tighter">
            Protecciones <br /><span className="text-white not-italic">Eléctricas</span>
          </h1>
          <div className="max-w-xl bg-white/10 border-l-4 border-white p-8 rounded-r-3xl backdrop-blur-md">
            <h3 className="text-white text-[10px] font-bold uppercase mb-3 tracking-[0.2em] flex items-center gap-2">
              <ShieldCheck size={14} /> Unidad de Competencia (UC)
            </h3>
            <p className="text-white/90 text-xl leading-relaxed font-medium italic">
              "{MODULE_DATA.unidadCompetencia}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { Icon: Clock, label: "Clases", val: MODULE_DATA.horasClase + "h" },
            { Icon: Activity, label: "Autónomo", val: MODULE_DATA.horasAutonomo + "h" },
            { Icon: Award, label: "Créditos SCT", val: MODULE_DATA.creditos },
            { Icon: Layout, label: "Modalidad", val: MODULE_DATA.modalidad }
          ].map((stat, i) => (
            <div key={i} className="bg-white/10 border border-white/20 p-6 rounded-[2rem] text-center backdrop-blur-sm shadow-lg">
              <stat.Icon className="mx-auto mb-3 text-white" size={28} />
              <p className="text-[10px] uppercase text-white/70 font-black tracking-widest mb-1">{stat.label}</p>
              <p className="text-2xl font-black tracking-tight">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
      <Zap className="absolute -bottom-20 -right-20 text-white/10 w-[30rem] h-[30rem] rotate-12 pointer-events-none" />
    </div>

    <div className="space-y-8">
      <div className="flex items-center justify-between border-b dark:border-slate-800 pb-6">
        <h2 className={`text-3xl font-black ${COLORS.textBlue} dark:text-white uppercase italic tracking-tight`}>Aprendizajes Esperados</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MODULE_DATA.aprendizajes.map((ae) => (
          <Card key={ae.id} className={`p-8 transition-all group hover:shadow-xl border-t-8 ${ae.id % 2 === 1 ? COLORS.borderBlue : COLORS.borderOrange}`}>
            <div className="flex justify-between items-start mb-8">
              <span className={`text-6xl font-black text-slate-100 dark:text-slate-800 group-hover:${ae.id % 2 === 1 ? 'text-blue-100 dark:text-blue-900/20' : 'text-orange-100 dark:text-orange-900/20'} transition leading-none`}>0{ae.id}</span>
              <div className={`bg-slate-50 dark:bg-slate-800 p-3 rounded-2xl text-slate-300 dark:text-slate-600 group-hover:${ae.id % 2 === 1 ? COLORS.textBlue : COLORS.textOrange} transition`}>
                {ae.id === 1 ? <FileText size={24} /> : <Settings size={24} />}
              </div>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-3 text-xl leading-tight h-14 overflow-hidden">{ae.titulo}</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 h-16 overflow-hidden leading-relaxed">{ae.descripcion}</p>
            <Button
              variant={ae.id === 1 ? "primary" : "outline"}
              className="w-full text-xs uppercase tracking-widest"
              onClick={() => ae.id === 1 && onNavigate('ae1')}
            >
              {ae.id === 1 ? 'Abrir Unidad' : 'Bloqueado'}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

// --- VISTA: CONTENIDO AE1 ---

const AE1Content = ({ onBack, darkMode }) => {
  const [activeSubView, setActiveSubView] = useState('articulo');

  return (
    <div className="animate-in fade-in duration-500 space-y-12">
      <nav className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={onBack} className="!px-3 bg-slate-100 dark:bg-slate-800"><ArrowLeft size={20} /> Volver</Button>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
          <div className="flex flex-col">
            <span className={`text-[10px] font-black ${COLORS.textOrange} uppercase tracking-[0.2em]`}>Aprendizaje Esperado 01</span>
            <span className="text-sm font-bold text-slate-400">Protecciones Eléctricas TEL302</span>
          </div>
        </div>
        <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-[1.25rem] backdrop-blur-sm">
          <button onClick={() => setActiveSubView('articulo')} className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase transition-all ${activeSubView === 'articulo' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xl' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>Artículo Técnico</button>
          <button onClick={() => setActiveSubView('glosario')} className={`px-6 py-2.5 rounded-2xl text-xs font-black uppercase transition-all ${activeSubView === 'glosario' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xl' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}>Glosario Interactivo</button>
        </div>
      </nav>

      {activeSubView === 'articulo' ? (
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Cuerpo del Artículo */}
          <div className="lg:col-span-8 space-y-16 pb-32">

            <header className="space-y-8 border-b dark:border-slate-800 pb-12">
              <h1 className="text-5xl font-black text-slate-900 dark:text-white leading-[1.1] uppercase tracking-tight">
                Protecciones Eléctricas: <span className={COLORS.textOrange}>Fusibles y Normativa</span>
              </h1>
              <div className="flex items-center gap-6 text-xs font-bold text-slate-400 italic">
                <span className="flex items-center gap-2"><Book size={14} /> Material Académico</span>
                <span className="flex items-center gap-2"><Shield size={14} /> Nivel Especialidad</span>
              </div>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium border-l-4 border-slate-200 dark:border-slate-800 pl-8">
                El funcionamiento seguro y confiable de las instalaciones depende de la correcta selección, instalación y mantenimiento de los elementos de protección, especialmente de los fusibles.
              </p>
            </header>

            {/* 01. Estados de Operación */}
            <section className="space-y-8">
              <h2 className={`text-3xl font-black ${COLORS.textBlue} dark:text-white flex items-center gap-4`}>
                <span className="text-slate-200 dark:text-slate-800 text-4xl">01</span> Estados de Operación
              </h2>
              <div className="grid gap-6">
                {[
                  { t: "Estado Normal", d: "Funcionamiento conforme a especificaciones previstas, con corrientes y tensiones dentro de márgenes de diseño.", c: "border-green-500", i: <CheckCircle2 className="text-green-500" /> },
                  { t: "Estado Anómalo o de Perturbación", d: "Aparecen pequeños desvíos debidos a transitorios o sobretensiones sin causar aún daños permanentes.", c: "border-yellow-500", i: <AlertTriangle className="text-yellow-500" /> },
                  { t: "Estado de Falla", d: "Condición peligrosa (cortocircuitos o sobrecargas) que compromete la integridad y requiere intervención inmediata.", c: "border-red-500", i: <Unplug className="text-red-500" /> }
                ].map((s, i) => (
                  <Card key={i} className={`flex gap-6 p-8 border-t-4 ${s.c} shadow-sm hover:shadow-md transition-shadow`}>
                    <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 h-fit">{s.i}</div>
                    <div>
                      <h4 className="font-black text-xs uppercase mb-2 tracking-widest text-slate-900 dark:text-white">{s.t}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.d}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* 02. Tipos de Fallas */}
            <section className="space-y-8">
              <h2 className={`text-3xl font-black ${COLORS.textBlue} dark:text-white flex items-center gap-4`}>
                <span className="text-slate-200 dark:text-slate-800 text-4xl">02</span> Tipos de Fallas
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8 border-t-4 border-[#e74c3c]">
                  <h4 className={`font-black text-lg uppercase tracking-tight ${COLORS.textOrange} mb-6`}>Fallas Geométricas</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"><Zap className="text-red-500" size={24} /></div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">Contacto de fase a Tierra</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Ocurre cuando una fase hace contacto con tierra. Puede ser causado por un defecto en el aislamiento del conductor o por contacto accidental con un objeto puesto a tierra.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"><Zap className="text-red-500" size={24} /></div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">Bifásicas / Trifásicas</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Ocurre cuando hay una conexión accidental entre fases.</p>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="p-8 border-t-4 border-[#f39c12]">
                  <h4 className={`font-black text-lg uppercase tracking-tight ${COLORS.textYellow} mb-6`}>Fallas por Intensidad</h4>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"><Activity className="text-yellow-500" size={24} /></div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                          {'Sobrecarga ($I > I_{nom}$)'}
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Corriente excede el valor nominal por exceso de consumo.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"><Zap className="text-red-500" size={24} /></div>
                      <div>
                        <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                          {'Cortocircuito ($I \\gg I_{nom}$)'}
                        </h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Altos niveles de corriente por contacto directo.</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* 05. Simbología */}
            <section className="space-y-8">
              <h2 className={`text-3xl font-black ${COLORS.textBlue} dark:text-white flex items-center gap-4`}>
                <span className="text-slate-200 dark:text-slate-800 text-4xl">05</span> Simbología IEC y ANSI
              </h2>
              <Card className={`p-10 bg-slate-50 dark:bg-slate-950/50 border-l-4 ${COLORS.borderBlue} space-y-10`}>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  Interpretación técnica de planos eléctricos según estándares internacionales **IEC** y **ANSI/IEEE**.
                </p>
                <div className="bg-white p-8 rounded-[2.5rem] border-2 border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden group transition-all hover:border-blue-400">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Fuse-basic-symbols.svg/960px-Fuse-basic-symbols.svg.png"
                    alt="Simbología técnica de fusibles IEC y ANSI"
                    className="w-full h-auto object-contain max-h-[300px] mx-auto p-4"
                  />
                </div>
              </Card>
            </section>

            {/* 09. Curvas Características */}
            <section className="space-y-12">
              <div className="flex items-center justify-between">
                <h2 className={`text-3xl font-black ${COLORS.textBlue} dark:text-white flex items-center gap-4`}>
                  <span className="text-slate-200 dark:text-slate-800 text-4xl">09</span> Curvas Características
                </h2>
                <div className={`bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-xl border-l-4 ${COLORS.borderOrange} flex items-center gap-2 shadow-sm`}>
                  <TrendingUp size={16} className={COLORS.textOrange} />
                  <span className={`text-[10px] font-black ${COLORS.textOrange} uppercase tracking-widest`}>Gráfico Técnico</span>
                </div>
              </div>

              <div className="space-y-10">
                <Card className="p-8 bg-slate-50 dark:bg-slate-900/50 border-l-4 border-slate-300 dark:border-slate-700">
                  <h4 className="font-black text-lg text-slate-900 dark:text-white mb-4 flex items-center gap-2"><Info size={20} className={COLORS.textBlue} /> Expresión de Energía Específica</h4>
                  <div className="my-8 p-6 bg-white dark:bg-black rounded-xl border dark:border-slate-800 text-center shadow-inner">
                    <span className="text-2xl font-serif italic text-slate-900 dark:text-white">
                      {'$$I^2t = K$$'}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Esta expresión define el comportamiento del fusible: a mayor corriente ($I$), menor tiempo de fusión ($t$). La constante $K$ representa la energía necesaria para fundir el elemento.
                  </p>
                </Card>

                <div className="group relative my-12">
                  <Card className="p-4 bg-slate-50 dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 shadow-2xl transition-all group-hover:border-yellow-400 overflow-hidden rounded-[2.5rem]">
                    <img
                      src="https://circuitoelectrico.com/wp-content/uploads/2024/06/Curvas-de-fusibles-gL-y-aM.jpg"
                      alt="Curvas de fusibles gL/gG y aM"
                      className="w-full h-auto object-contain rounded-[1.5rem] bg-white"
                    />
                  </Card>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="p-10 bg-slate-50 dark:bg-slate-900/50 border-t-8 border-[#e74c3c] shadow-lg">
                    <h5 className="text-[#e74c3c] font-black text-sm uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><TrendingUp size={18} /> Curva aM (Arranque)</h5>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                      {'Permite soportar corrientes de arranque de motores ($I_{arr} \\approx 6 \\cdot I_{nom}$) sin despejar, protegiendo solo contra cortocircuitos.'}
                    </p>
                  </Card>
                  <Card className="p-10 bg-slate-50 dark:bg-slate-900/50 border-t-8 border-[#f39c12] shadow-lg">
                    <h5 className="text-[#f39c12] font-black text-sm uppercase tracking-[0.2em] mb-4 flex items-center gap-2"><Shield size={18} /> Curva gL/gG (General)</h5>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
                      Protección total para líneas y cargas resistivas. Actúa tanto en la zona de sobrecarga como de cortocircuito.
                    </p>
                  </Card>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <div className="sticky top-28 space-y-8">
              <Card className="p-8 bg-slate-50 dark:bg-slate-900/80 border-l-4 border-slate-300 dark:border-slate-700">
                <h4 className="text-[10px] font-black uppercase text-slate-400 dark:text-slate-500 mb-8 tracking-[0.3em] flex items-center gap-2">
                  <Quote size={14} /> Bibliografía Guía
                </h4>
                <div className="space-y-6">
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-[1.5rem] border dark:border-slate-700 shadow-sm">
                    <p className="text-xs font-black text-slate-900 dark:text-white mb-1 leading-tight">Técnicas de aplicación de fusibles</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">Tomás Pascual Martínez (1998).</p>
                  </div>
                  <div className="p-5 bg-white dark:bg-slate-800 rounded-[1.5rem] border dark:border-slate-700 shadow-sm">
                    <p className="text-xs font-black text-slate-900 dark:text-white mb-1 leading-tight">Protección por relevadores</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 italic">Agapito Mendoza Romero (1998).</p>
                  </div>
                </div>
              </Card>

              <div className={`p-10 bg-gradient-to-br ${COLORS.yellow} rounded-[3rem] text-slate-900 shadow-2xl relative overflow-hidden group`}>
                <div className="relative z-10">
                  <Calculator size={40} className="mb-6 text-slate-800" />
                  <h4 className="font-black text-xl uppercase tracking-tighter mb-2 italic">Análisis T-I</h4>
                  <p className="text-xs font-bold leading-relaxed mb-8 text-slate-800/80 italic">
                    {'La integral de Joule ($I^2t$) define la selectividad energética entre fusibles en cascada.'}
                  </p>
                  <Button variant="primary" className="w-full h-12 text-[10px] shadow-lg">Módulo AE2</Button>
                </div>
                <Zap size={120} className="absolute -bottom-10 -right-10 text-white/20 rotate-12 group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* GLOSARIO */
        <div className="max-w-4xl mx-auto pb-32 animate-in slide-in-from-bottom-8 duration-500">
          <header className="text-center mb-16 space-y-6">
            <div className={`inline-flex p-5 rounded-[2rem] bg-gradient-to-br ${COLORS.orange} text-white shadow-2xl mb-4`}>
              <ListChecks size={40} />
            </div>
            <h2 className="text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter">Glosario de Términos</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-medium leading-relaxed italic text-center">
              Haz clic sobre el concepto para revelar su definición técnica académica.
            </p>
          </header>
          <Card className="divide-y dark:divide-slate-800 rounded-[2.5rem] overflow-hidden border-2 dark:border-slate-800 shadow-xl">
            {MODULE_DATA.glosarioAE1.map((item, idx) => (
              <GlossaryItem key={idx} term={`${idx + 1}. ${item.term}`} definition={item.def} />
            ))}
          </Card>
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

const App = () => {
  const [view, setView] = useState('inicio');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderContent = () => {
    switch (view) {
      case 'inicio': return <HomeView onNavigate={setView} />;
      case 'aprendizajes': return (
        <div className="space-y-8 animate-in fade-in">
          <nav className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => setView('inicio')} className="!px-2"><ArrowLeft size={20} /> Volver</Button>
          </nav>
          <h2 className={`text-3xl font-black ${COLORS.textBlue} dark:text-white uppercase italic border-b dark:border-slate-800 pb-4`}>Todas las Unidades</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MODULE_DATA.aprendizajes.map(ae => (
              <Card key={ae.id} className={`p-6 hover:shadow-lg transition-all border-t-4 ${ae.id % 2 === 1 ? COLORS.borderBlue : COLORS.borderOrange}`}>
                <span className="text-5xl font-black text-slate-50 dark:text-slate-800 block mb-4">0{ae.id}</span>
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl leading-tight">{ae.titulo}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 h-20 overflow-hidden leading-relaxed">{ae.descripcion}</p>
                <Button variant="outline" className="w-full text-xs uppercase" onClick={() => ae.id === 1 ? setView('ae1') : null}>
                  {ae.id === 1 ? 'Ver Materia' : 'En Desarrollo'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      );
      case 'ae1': return <AE1Content onBack={() => setView('inicio')} darkMode={darkMode} />;
      default: return <HomeView onNavigate={setView} />;
    }
  };

  return (
    <div className={`min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 h-20 flex items-center shadow-sm">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setView('inicio')}>
            <div className={`bg-gradient-to-br ${COLORS.blue} text-white p-2.5 rounded-2xl transition group-hover:rotate-12 shadow-lg`}>
              <Zap size={24} fill="currentColor" />
            </div>
            <div>
              <p className="text-lg font-black uppercase leading-none tracking-tighter">{MODULE_DATA.nombre}</p>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-[0.3em] uppercase">{MODULE_DATA.codigo}</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-10">
              {['inicio', 'aprendizajes'].map(v => (
                <button key={v} onClick={() => setView(v === 'aprendizajes' ? 'ae1' : 'inicio')} className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative ${(view === 'inicio' && v === 'inicio') || (view !== 'inicio' && v === 'aprendizajes') ? COLORS.textBlue + ' dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600'}`}>
                  {v === 'inicio' ? 'Inicio' : 'Materia'}
                  {((view === 'inicio' && v === 'inicio') || (view !== 'inicio' && v === 'aprendizajes')) && <span className={`absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r ${COLORS.blue} rounded-full`} />}
                </button>
              ))}
            </nav>
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
            <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm border border-slate-200 dark:border-slate-700">
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className={COLORS.textBlue} />}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-16">
        {renderContent()}
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-20 mt-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 text-center space-y-4">
          <p className="text-slate-400 dark:text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">{MODULE_DATA.codigo} - UNIDAD 1 PROTECCIONES</p>
          <div className="flex justify-center gap-10 text-[10px] font-bold text-slate-500">
            <span>SCT-AIEP: 4</span>
            <span>Planificación 2024</span>
            <span>v3.2</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;