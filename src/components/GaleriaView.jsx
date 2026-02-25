import React, { useEffect } from 'react';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import HorizontalGallery from './HorizontalGallery';
import { galeriaData } from '../data/galeriaData';

const GaleriaView = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-7xl mx-auto animate-in fade-in zoom-in-95 duration-500">
            {/* Header */}
            <div className="mb-12 relative">
                <button
                    onClick={onBack}
                    className="absolute -top-16 left-0 flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-semibold">Volver</span>
                </button>
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <ImageIcon size={40} className="text-white" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#002855] dark:text-white tracking-tight">
                            Galería de Imágenes
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg mt-2">
                            Equipos y Aplicaciones Reales en Protecciones Eléctricas
                        </p>
                    </div>
                </div>
            </div>

            {/* Gallery Content */}
            <div className="mb-8">
                <HorizontalGallery items={galeriaData} />
            </div>
        </div>
    );
};

export default GaleriaView;
