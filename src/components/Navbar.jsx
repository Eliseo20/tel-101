import React from 'react';
import { Zap, Sun, Moon } from 'lucide-react';

const Navbar = ({ isDarkMode, toggleDarkMode, onNavigate }) => {
    return (
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 h-24 flex items-center shadow-sm">
            <div className="container mx-auto px-8 flex items-center justify-between">

                {/* Lado Izquierdo: Branding */}
                <div
                    className="flex items-center gap-6 cursor-pointer group"
                    onClick={() => onNavigate('inicio')} // Prop para manejo de ruta
                >
                    <div className="bg-[#002855] text-white p-3.5 rounded-[1.25rem] transition group-hover:rotate-12 shadow-2xl shadow-blue-900/20">
                        <Zap size={28} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-2xl font-black uppercase leading-none tracking-tighter dark:text-white">
                            Industria <span className="text-[#D1202F]">Eléctrica</span>
                        </p>
                        <div className="flex items-center gap-3 mt-1.5 opacity-60">
                            <p className="text-[10px] font-black tracking-[0.3em] uppercase dark:text-slate-300">TEL101</p>
                            <div className="h-1 w-1 bg-slate-300 rounded-full" />
                            <p className="text-[10px] font-bold uppercase tracking-widest dark:text-slate-400 text-slate-500">Ingeniería Eléctrica</p>
                        </div>
                    </div>
                </div>

                {/* Lado Derecho: Navegación y Herramientas */}
                <div className="flex items-center gap-10">
                    <nav className="hidden md:flex gap-12 items-center">
                        <button
                            onClick={() => onNavigate('inicio')}
                            className="text-[10px] font-black uppercase tracking-[0.3em] transition-all relative text-[#002855] dark:text-blue-400 group"
                        >
                            Inicio
                            <span className="absolute -bottom-8 left-0 w-full h-1.5 bg-[#D1202F] rounded-full shadow-lg shadow-red-500/20 scale-x-0 group-hover:scale-x-100 transition-transform" />
                        </button>
                        <button
                            onClick={() => onNavigate('aprendizajes')}
                            className="text-[10px] font-black uppercase tracking-[0.3em] transition-all relative text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 group"
                        >
                            Unidades
                            <span className="absolute -bottom-8 left-0 w-full h-1.5 bg-[#D1202F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform" />
                        </button>
                        <button
                            onClick={() => onNavigate('galeria')}
                            className="text-[10px] font-black uppercase tracking-[0.3em] transition-all relative text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 group"
                        >
                            Galería
                            <span className="absolute -bottom-8 left-0 w-full h-1.5 bg-[#D1202F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform" />
                        </button>
                        <button
                            onClick={() => onNavigate('quiz')}
                            className="text-[10px] font-black uppercase tracking-[0.3em] transition-all relative text-[#D1202F] dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 group"
                        >
                            Desafío
                            <span className="absolute -bottom-8 left-0 w-full h-1.5 bg-[#D1202F] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform" />
                        </button>
                    </nav>

                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-md group"
                    >
                        {isDarkMode ? (
                            <Sun size={22} className="group-hover:rotate-45 transition-transform" />
                        ) : (
                            <Moon size={22} className="group-hover:-rotate-12 transition-transform text-[#002855]" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
