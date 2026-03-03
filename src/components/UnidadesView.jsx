import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const COLORS = {
    blue: 'from-[#0056b3] to-[#007bff]',
    orange: 'from-[#e74c3c] to-[#f39c12]',
    textBlue: 'text-[#0056b3]',
    borderBlue: 'border-[#0056b3]',
    borderOrange: 'border-[#e74c3c]',
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

const UnidadesView = ({ moduleData }) => {
    const navigate = useNavigate();

    return (
        <div className="space-y-8 animate-in fade-in">
            <nav className="flex items-center gap-4">
                <Button variant="ghost" onClick={() => navigate('/')} className="!px-2"><ArrowLeft size={20} /> Volver</Button>
            </nav>
            <h2 className={`text-3xl font-black ${COLORS.textBlue} dark:text-white uppercase italic border-b dark:border-slate-800 pb-4`}>Todas las Unidades</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {moduleData.aprendizajes.map(ae => (
                    <Card key={ae.id} className={`p-6 hover:shadow-lg transition-all border-t-4 ${ae.id % 2 === 1 ? COLORS.borderBlue : COLORS.borderOrange}`}>
                        <span className="text-5xl font-black text-slate-50 dark:text-slate-800 block mb-4">0{ae.id}</span>
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-xl leading-tight">{ae.titulo}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-8 h-20 overflow-hidden leading-relaxed">{ae.descripcion}</p>
                        <button
                            onClick={() => [1, 2, 3, 4, 5].includes(ae.id) ? navigate(`/ae${ae.id}`) : null}
                            className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all flex items-center justify-center gap-3
                        ${[1, 2, 3, 4, 5].includes(ae.id)
                                    ? 'bg-[#002855] hover:bg-[#D1202F] text-white shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5'
                                    : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700'
                                }`}
                        >
                            {[1, 2, 3, 4, 5].includes(ae.id) ? (
                                <>Ver Materia <ArrowRight size={16} /></>
                            ) : (
                                'En Desarrollo'
                            )}
                        </button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default UnidadesView;
