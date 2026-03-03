import React from 'react';
import {
    ShieldCheck, Clock, Activity, Award, Layout, Zap, FileText, Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

const HomeView = ({ onNavigate, moduleData }) => {
    const navigate = useNavigate();

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br ${COLORS.blue} dark:from-slate-900 dark:to-black text-white p-10 md:p-16 shadow-2xl`}>
                <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-4">
                            <span className={`bg-white/20 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl`}>{moduleData.codigo}</span>
                            <div className="h-px w-12 bg-white/30" />
                            <span className="text-white/80 text-sm font-bold">Introducción a la Industria Eléctrica</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] uppercase italic tracking-tighter">
                            {moduleData.nombre}
                        </h1>
                        <div className="max-w-xl bg-white/10 border-l-4 border-white p-8 rounded-r-3xl backdrop-blur-md">
                            <h3 className="text-white text-[10px] font-bold uppercase mb-3 tracking-[0.2em] flex items-center gap-2">
                                <ShieldCheck size={14} /> Unidad de Competencia (UC)
                            </h3>
                            <p className="text-white/90 text-xl leading-relaxed font-medium italic">
                                "{moduleData.unidadCompetencia}"
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { Icon: Clock, label: "Clases", val: moduleData.horasClase + "h" },
                            { Icon: Activity, label: "Autónomo", val: moduleData.horasAutonomo + "h" },
                            { Icon: Award, label: "Créditos SCT", val: moduleData.creditos },
                            { Icon: Layout, label: "Modalidad", val: moduleData.modalidad }
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
                    {moduleData.aprendizajes.map((ae) => (
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
                                variant={ae.id >= 1 && ae.id <= 6 ? "primary" : "outline"}
                                className="w-full text-xs uppercase tracking-widest"
                                onClick={() => ae.id >= 1 && ae.id <= 6 && navigate(`/ae${ae.id}`)}
                            >
                                {ae.id >= 1 && ae.id <= 6 ? 'Abrir Unidad' : 'Bloqueado'}
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeView;
