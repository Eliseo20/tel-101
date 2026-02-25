import React, { useState } from 'react';
import { Settings, Activity, Zap, Info, Layers } from 'lucide-react';

const KirchhoffVibratingSimulator = () => {
    const [i1, setI1] = useState(8);
    const [i2, setI2] = useState(6);

    // Magnitud de salida (100% del flujo)
    const iOut = i1 + i2;

    // Cálculos de grosor proporcional para el aspecto de cable
    // i1 e i2 escalan el strokeWidth del cable completo
    const getCableWidth = (val) => Math.max(6, val * 2.5);

    // Velocidad de partículas (electrones)
    const getFlowSpeed = (val) => Math.max(0.3, 4 / (parseFloat(val) + 1));

    return (
        <div className="w-full max-w-5xl mx-auto animate-in fade-in duration-700">
            {/* Encabezado del Módulo */}
            <div className="mb-8 border-l-8 border-[#002855] dark:border-blue-500 pl-6 py-2">
                <h2 className="text-3xl font-black text-[#002855] dark:text-white uppercase tracking-tighter">
                    Laboratorio: <span className="text-[#D1202F]">Distribución en Nodos</span>
                </h2>
                <p className="text-sm text-slate-500 italic mt-1 uppercase tracking-widest font-bold">
                    Simulación de conductores eléctricos bajo carga
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">

                {/* Panel de Control de Cargas */}
                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800">
                        <h3 className="text-xs font-black uppercase text-slate-400 mb-8 tracking-[0.2em] flex items-center gap-2">
                            <Settings size={16} /> Configuración de Conductores
                        </h3>

                        {/* Cable 1 */}
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-black text-[#002855] dark:text-blue-400 uppercase">Sección Cable {"$I_1$"}</label>
                                <span className="text-xl font-black text-[#002855] dark:text-white">{i1} A</span>
                            </div>
                            <input
                                type="range" min="1" max="20" step="1" value={i1}
                                onChange={(e) => setI1(Number(e.target.value))}
                                className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#002855]"
                            />
                        </div>

                        {/* Cable 2 */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-black text-[#D1202F] uppercase">Sección Cable {"$I_2$"}</label>
                                <span className="text-xl font-black text-[#D1202F]">{i2} A</span>
                            </div>
                            <input
                                type="range" min="1" max="20" step="1" value={i2}
                                onChange={(e) => setI2(Number(e.target.value))}
                                className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D1202F]"
                            />
                        </div>
                    </div>

                    {/* Resumen de Balance Técnico */}
                    <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden group">
                        <div className="relative z-10 flex items-center justify-around">
                            <div className="text-center">
                                <p className="text-5xl font-black tracking-tighter text-yellow-400">{iOut}</p>
                                <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Amperaje de Salida</p>
                            </div>
                            <div className="h-16 w-px bg-white/10" />
                            <div className="text-center">
                                <p className="text-xl font-bold text-white uppercase tracking-tighter">
                                    {((i1 / iOut) * 100).toFixed(0)}% / {((i2 / iOut) * 100).toFixed(0)}%
                                </p>
                                <p className="text-[10px] uppercase font-black text-slate-500">Carga Parcial</p>
                            </div>
                        </div>
                        <Layers size={100} className="absolute -right-10 -bottom-10 opacity-5 text-white" />
                    </div>
                </div>

                {/* Visualización de Cables (SVG) */}
                <div className="bg-slate-100 dark:bg-slate-950 rounded-[2.5rem] shadow-inner border border-slate-200 dark:border-slate-800 p-6 flex items-center justify-center relative overflow-hidden min-h-[450px]">

                    <svg viewBox="0 0 400 300" className="w-full h-full">
                        <defs>
                            {/* Filtro de vibración mecánica (zumbido eléctrico) */}
                            <filter id="vibration">
                                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" seed="1">
                                    <animate attributeName="seed" values="1;50;1" dur="0.1s" repeatCount="indefinite" />
                                </feTurbulence>
                                <feDisplacementMap in="SourceGraphic" scale="2" />
                            </filter>

                            {/* Sombreado para dar volumen al cable (3D) */}
                            <linearGradient id="cableGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                                <stop offset="50%" stopColor="rgba(0,0,0,0)" />
                                <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
                            </linearGradient>
                        </defs>

                        {/* Capas de los Cables */}
                        <g filter="url(#vibration)">
                            {/* CABLE 1 (Entrada Superior) */}
                            <path d="M 50 100 Q 150 100 200 150" fill="none" stroke="#334155" strokeWidth={getCableWidth(i1)} strokeLinecap="round" />
                            <path d="M 50 100 Q 150 100 200 150" fill="none" stroke="url(#cableGradient)" strokeWidth={getCableWidth(i1)} strokeLinecap="round" />
                            <path d="M 50 100 Q 150 100 200 150" fill="none" stroke="#f59e0b" strokeWidth={getCableWidth(i1) * 0.2} strokeLinecap="round" opacity="0.6" />

                            {/* CABLE 2 (Entrada Inferior) */}
                            <path d="M 50 200 Q 150 200 200 150" fill="none" stroke="#991b1b" strokeWidth={getCableWidth(i2)} strokeLinecap="round" />
                            <path d="M 50 200 Q 150 200 200 150" fill="none" stroke="url(#cableGradient)" strokeWidth={getCableWidth(i2)} strokeLinecap="round" />
                            <path d="M 50 200 Q 150 200 200 150" fill="none" stroke="#fca5a5" strokeWidth={getCableWidth(i2) * 0.2} strokeLinecap="round" opacity="0.4" />

                            {/* CABLE SALIDA (Principal) */}
                            <path d="M 200 150 L 350 150" fill="none" stroke="#1e293b" strokeWidth={getCableWidth(iOut)} strokeLinecap="round" />
                            <path d="M 200 150 L 350 150" fill="none" stroke="url(#cableGradient)" strokeWidth={getCableWidth(iOut)} strokeLinecap="round" />
                            <path d="M 200 150 L 350 150" fill="none" stroke="#fbbf24" strokeWidth={getCableWidth(iOut) * 0.15} strokeLinecap="round" opacity="0.8" />
                        </g>

                        {/* Nodo de Conexión (Caja de Empalme) */}
                        <rect x="185" y="135" width="30" height="30" rx="4" fill="#002855" className="shadow-2xl" />
                        <circle cx="200" cy="150" r="4" fill="#FFC72C" />

                        {/* Etiquetas de Referencia */}
                        <text x="35" y="85" className="text-[12px] font-black fill-slate-500 uppercase tracking-tighter">{"$I_1$"}</text>
                        <text x="35" y="225" className="text-[12px] font-black fill-red-800 uppercase tracking-tighter">{"$I_2$"}</text>
                        <text x="310" y="130" className="text-[10px] font-black fill-slate-400 uppercase tracking-[0.2em]">{"$I_{total}$"}</text>

                        {/* Electrones (Flujo Interno) */}
                        <circle r="2.5" fill="#FFC72C">
                            <animateMotion dur={`${getFlowSpeed(i1)}s`} repeatCount="indefinite" path="M 50 100 Q 150 100 200 150" />
                        </circle>
                        <circle r="2.5" fill="#FFC72C">
                            <animateMotion dur={`${getFlowSpeed(i2)}s`} repeatCount="indefinite" path="M 50 200 Q 150 200 200 150" />
                        </circle>
                        <circle r="3.5" fill="#fff" filter="blur(1px)">
                            <animateMotion dur={`${getFlowSpeed(iOut)}s`} repeatCount="indefinite" path="M 200 150 L 350 150" />
                        </circle>
                    </svg>

                    {/* Indicador de Status */}
                    <div className="absolute top-8 right-10 flex items-center gap-2 bg-white/80 dark:bg-slate-800 px-4 py-2 rounded-full border shadow-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase text-slate-600 dark:text-slate-300">Carga Activa</span>
                    </div>
                </div>

            </div>

            {/* Guía Técnica del Conductor */}
            <div className="mt-12 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 flex items-start gap-6 shadow-sm">
                <div className="p-4 bg-[#D1202F] rounded-2xl text-white shadow-xl shrink-0">
                    <Zap size={24} />
                </div>
                <div className="space-y-2">
                    <h4 className="text-sm font-black uppercase text-[#002855] dark:text-blue-400 tracking-widest">Ley de Nodos: Continuidad de Masa</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                        Visualiza cómo la sección transversal (grosor) del cable de salida es siempre la suma de los conductores de entrada. En instalaciones reales, esto determina el calibre comercial (AWG o mm²) necesario para evitar el sobrecalentamiento del bimetal de protección por efecto Joule.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KirchhoffVibratingSimulator;
