import React, { useState } from 'react';
import { Zap, Activity, Shield, Info, Settings } from 'lucide-react';

const OhmLawSimulator = () => {
  const [voltage, setVoltage] = useState(12);
  const [resistance, setResistance] = useState(10);

  // Cálculo de Intensidad (I = V / R) según la Ley de Ohm
  const current = (voltage / resistance).toFixed(2);

  // Normalización para animaciones de electrones (0.1s a 2s de duración)
  // A mayor corriente, menor duración (más velocidad)
  const animationSpeed = Math.max(0.1, 2 / (parseFloat(current) + 0.5));
  
  return (
    <div className="w-full max-w-5xl mx-auto animate-in fade-in duration-700">
      {/* Cabecera del Simulador con Nomenclatura LaTeX */}
      <div className="mb-8 border-l-8 border-[#FFC72C] pl-6 py-2">
        <h2 className="text-3xl font-black text-[#002855] dark:text-white uppercase tracking-tighter">
          Laboratorio Virtual: <span className="text-[#D1202F]">Ley de Ohm</span>
        </h2>
        <p className="text-sm text-slate-500 italic mt-1 uppercase tracking-widest font-bold">
          Interacción: $V = I \cdot R$
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        
        {/* Panel de Controles */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-xs font-black uppercase text-slate-400 mb-8 tracking-[0.2em] flex items-center gap-2">
              <Settings size={16} /> Parámetros del Circuito
            </h3>

            {/* Deslizador de Voltaje (V) */}
            <div className="space-y-4 mb-10">
              <div className="flex justify-between items-center">
                <label className="text-sm font-black text-[#002855] dark:text-blue-400 uppercase">Voltaje ($V$)</label>
                <span className="text-2xl font-black text-[#002855] dark:text-white">{voltage} V</span>
              </div>
              <input 
                type="range" min="1" max="50" value={voltage} 
                onChange={(e) => setVoltage(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#D1202F]"
              />
            </div>

            {/* Deslizador de Resistencia (R) */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-black text-[#002855] dark:text-blue-400 uppercase">Resistencia ($R$)</label>
                <span className="text-2xl font-black text-[#002855] dark:text-white">{resistance} $\Omega$</span>
              </div>
              <input 
                type="range" min="1" max="100" value={resistance} 
                onChange={(e) => setResistance(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#002855]"
              />
            </div>
          </div>

          {/* Visualización Matemática de la Ley de Ohm */}
          <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden group">
            <div className="relative z-10 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-yellow-400 mb-6">Cálculo de Intensidad ($I$)</p>
              <div className="flex items-center justify-center gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black">{voltage}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Voltios ($V$)</span>
                </div>
                <span className="text-3xl font-serif text-slate-600">/</span>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black">{resistance}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Ohmios ($\Omega$)</span>
                </div>
                <span className="text-3xl font-serif text-slate-600">=</span>
                <div className="flex flex-col items-center">
                  <span className="text-5xl font-black text-[#D1202F]">{current}</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500">Amperios ($A$)</span>
                </div>
              </div>
            </div>
            <Zap className="absolute -bottom-10 -right-10 w-40 h-40 text-white/5 rotate-12 group-hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Ilustración Gráfica del Circuito (SVG) */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 p-10 flex flex-col items-center justify-center relative">
          <h3 className="absolute top-8 left-10 text-[10px] font-black uppercase text-slate-400 tracking-widest">Esquema de Flujo Eléctrico</h3>
          
          <svg viewBox="0 0 400 300" className="w-full max-w-md">
            {/* Conductores del Circuito */}
            <path d="M 100 150 L 100 50 L 300 50 L 300 120" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-200 dark:text-slate-800" />
            <path d="M 300 180 L 300 250 L 100 250 L 100 150" fill="none" stroke="currentColor" strokeWidth="4" className="text-slate-200 dark:text-slate-800" />
            
            {/* Fuente de Tensión (Pila/Batería) */}
            <g transform="translate(80, 130)">
              <rect width="40" height="40" rx="4" fill="#002855" />
              <rect width="20" height="10" x="10" y="-8" rx="2" fill="#002855" />
              <text x="20" y="25" textAnchor="middle" fill="white" className="text-lg font-black" style={{ fontSize: '14px' }}>$V$</text>
              {/* Nivel de "presión" eléctrica según voltaje */}
              <rect x="5" y={Math.max(5, 40 - (voltage * 0.7))} width="30" height={Math.min(30, voltage * 0.7)} fill="#FFC72C" opacity="0.4" rx="2" />
            </g>

            {/* Resistencia Eléctrica (Representación de Bimetal/ZigZag) */}
            <g transform="translate(285, 120)">
              <path 
                d="M 15 0 L 0 5 L 30 15 L 0 25 L 30 35 L 15 60" 
                fill="none" 
                stroke="#D1202F" 
                strokeWidth={Math.max(2, resistance / 10)} 
                className="transition-all duration-300"
              />
              <text x="45" y="35" fill="currentColor" className="text-[10px] font-bold dark:text-slate-400">$R$</text>
            </g>

            {/* Animación de Electrones (Representación de la Intensidad I) */}
            <circle r="4" fill="#FFC72C">
              <animateMotion 
                path="M 100 150 L 100 50 L 300 50 L 300 120 M 300 180 L 300 250 L 100 250 L 100 150" 
                dur={`${animationSpeed}s`} 
                repeatCount="indefinite" 
              />
            </circle>
            <circle r="4" fill="#FFC72C">
              <animateMotion 
                path="M 100 150 L 100 50 L 300 50 L 300 120 M 300 180 L 300 250 L 100 250 L 100 150" 
                dur={`${animationSpeed}s`} 
                begin={`${animationSpeed / 2}s`}
                repeatCount="indefinite" 
              />
            </circle>
          </svg>

          {/* Leyenda Técnica Interactiva */}
          <div className="mt-10 grid grid-cols-2 gap-8 w-full">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-600"><Activity size={16}/></div>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-900 dark:text-white leading-none mb-1">Intensidad ($I$)</p>
                <p className="text-[9px] text-slate-500 leading-tight">Velocidad de flujo de carga.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-red-400/10 text-red-600"><Shield size={16}/></div>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-900 dark:text-white leading-none mb-1">Resistencia ($R$)</p>
                <p className="text-[9px] text-slate-500 leading-tight">Oposición física al paso.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Resumen Pedagógico */}
      <div className="mt-12 p-6 bg-blue-50 dark:bg-slate-800/50 rounded-3xl border border-blue-100 dark:border-slate-700 flex items-center gap-4 text-xs text-blue-800 dark:text-blue-300 italic font-medium leading-relaxed">
        <Info size={24} className="shrink-0" />
        <p>
          Observación: Al aumentar el Voltaje ($V$), la Intensidad ($I$) se incrementa linealmente. Sin embargo, al aumentar la Resistencia ($R$), el flujo de electrones se ve obstaculizado, reduciendo proporcionalmente la Intensidad medida en Amperios ($A$).
        </p>
      </div>
    </div>
  );
};

export default OhmLawSimulator;
