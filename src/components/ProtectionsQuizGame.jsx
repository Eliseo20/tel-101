import React, { useState } from 'react';
import {
    RotateCcw, CheckCircle2, XCircle,
    Award, Zap, HelpCircle, ArrowRight,
    Info, Target, Rocket, Star, TrendingUp
} from 'lucide-react';
import { ALL_QUESTIONS } from '../data/quizQuestions';

const ProtectionsQuizGame = () => {
    const [gameState, setGameState] = useState('lobby');
    const [challengeSize, setChallengeSize] = useState(10);
    const [currentQuestions, setCurrentQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const startChallenge = (size) => {
        const actualSize = Math.min(size, ALL_QUESTIONS.length);
        setChallengeSize(actualSize);
        const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, actualSize).map(q => {
            const optionsWithIndices = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
            const shuffledOptions = optionsWithIndices.sort(() => 0.5 - Math.random());
            return {
                ...q,
                options: shuffledOptions.map(o => o.text),
                correct: shuffledOptions.findIndex(o => o.isCorrect)
            };
        });

        setCurrentQuestions(selected);
        setGameState('playing');
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsAnswered(false);
    };

    const handleAnswer = (idx) => {
        if (isAnswered) return;
        setSelectedOption(idx);
        setIsAnswered(true);
        if (idx === currentQuestions[currentIndex].correct) {
            setScore(s => s + 1);
        }
    };

    const nextQuestion = () => {
        if (currentIndex < currentQuestions.length - 1) {
            setCurrentIndex(i => i + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setGameState('results');
        }
    };

    const calculateGrade = () => {
        const grade = ((score / challengeSize) * 6) + 1;
        return grade.toFixed(1);
    };

    if (gameState === 'lobby') {
        return (
            <div className="max-w-4xl mx-auto py-12 px-6 animate-in fade-in zoom-in duration-500">
                <div className="text-center space-y-8">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-[#D1202F] blur-3xl opacity-10 rounded-full animate-pulse"></div>
                        <div className="relative p-8 bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl border-b-8 border-[#002855]">
                            <TrendingUp size={80} className="text-[#D1202F]" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-black text-[#002855] dark:text-white uppercase tracking-tighter italic leading-tight">
                            ¡Potencia tu Talento y <br />
                            <span className="text-[#D1202F] not-italic">Domina la Red!</span>
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-bold text-lg">
                            ¿Estás listo para demostrar que eres el mejor en Protecciones Eléctricas? Supera este reto y eleva tu nivel profesional.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
                        {[
                            { size: Math.min(10, ALL_QUESTIONS.length), label: "Entrenamiento", icon: Target, color: "hover:border-blue-500" },
                            { size: Math.min(20, ALL_QUESTIONS.length), label: "Desafío Técnico", icon: Zap, color: "hover:border-yellow-500" },
                            { size: ALL_QUESTIONS.length, label: "Maestría Senior", icon: Award, color: "hover:border-[#D1202F]" }
                        ].map((item, index) => (
                            <button
                                key={index}
                                onClick={() => startChallenge(item.size)}
                                className={`group relative p-10 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[2.5rem] transition-all hover:shadow-2xl overflow-hidden text-center ${item.color}`}
                            >
                                <div className="relative z-10 space-y-2">
                                    <item.icon className="mx-auto mb-4 text-slate-300 group-hover:scale-110 group-hover:text-inherit transition-all" size={40} />
                                    <p className="text-4xl font-black text-[#002855] dark:text-white leading-none">{item.size}</p>
                                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">{item.label}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="pt-10 flex justify-center items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
                        <Star size={12} fill="currentColor" />
                        <span>Aprendizaje Basado en Desafíos Realistas</span>
                        <Star size={12} fill="currentColor" />
                    </div>
                </div>
            </div>
        );
    }

    if (gameState === 'results') {
        const grade = calculateGrade();
        const isPassed = parseFloat(grade) >= 4.0;
        return (
            <div className="max-w-2xl mx-auto py-12 px-6 animate-in slide-in-from-bottom-8">
                <div className={`p-12 rounded-[4rem] text-center shadow-2xl border-b-[20px] ${isPassed ? 'bg-[#002855] border-green-500' : 'bg-slate-900 border-[#D1202F]'} text-white`}>
                    {isPassed ? <Rocket size={80} className="mx-auto mb-6 text-yellow-400" /> : <TrendingUp size={80} className="mx-auto mb-6 text-slate-600" />}
                    <h2 className="text-[11px] font-black uppercase tracking-[0.6em] opacity-60 mb-6">Nivel Alcanzado</h2>
                    <div className="text-[140px] font-black leading-none italic tracking-tighter mb-4 drop-shadow-xl">{grade}</div>
                    <p className="text-2xl font-bold uppercase tracking-widest mb-10">
                        {isPassed ? '¡Excelente Desempeño!' : '¡Sigue Intentándolo!'}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <p className="text-3xl font-black">{score}</p>
                            <p className="text-[10px] font-black uppercase opacity-40">Aciertos</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                            <p className="text-3xl font-black">{Math.round((score / challengeSize) * 100)}%</p>
                            <p className="text-[10px] font-black uppercase opacity-40">Efectividad</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setGameState('lobby')}
                        className="w-full py-6 bg-white text-[#002855] rounded-3xl font-black uppercase tracking-[0.3em] hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-2xl active:scale-95"
                    >
                        <RotateCcw size={20} /> Superar mi Récord
                    </button>
                </div>
            </div>
        );
    }

    const q = currentQuestions[currentIndex];
    return (
        <div className="max-w-3xl mx-auto py-8 px-6 space-y-8 animate-in fade-in">
            <div className="flex items-center justify-between">
                <button onClick={() => setGameState('lobby')} className="text-[10px] font-black uppercase text-slate-400 hover:text-[#D1202F] transition-colors flex items-center gap-2">
                    <RotateCcw size={12} /> Salir
                </button>
                <div className="text-center flex-1 mx-8">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-3">Progreso del Desafío</p>
                    <div className="flex gap-1.5 justify-center">
                        {currentQuestions.map((_, i) => (
                            <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-10 bg-[#D1202F]' : i < currentIndex ? 'w-3 bg-[#002855]' : 'w-3 bg-slate-200 dark:bg-slate-800'}`} />
                        ))}
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-black text-slate-300 uppercase">Correctas</p>
                    <p className="text-2xl font-black text-[#D1202F] dark:text-white leading-none">{score}</p>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden transition-all duration-500">
                <div className="p-12 space-y-10">
                    <div className="flex items-start gap-8">
                        <div className="p-5 bg-slate-50 dark:bg-slate-800 rounded-3xl text-[#002855] dark:text-blue-400 shrink-0 shadow-inner">
                            <HelpCircle size={40} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-[#002855] dark:text-white leading-tight tracking-tight">
                            {q.question}
                        </h3>
                    </div>

                    <div className="grid gap-4">
                        {q.options.map((opt, idx) => {
                            const isCorrect = idx === q.correct;
                            const isSelected = selectedOption === idx;
                            let btnClass = "bg-slate-50 dark:bg-slate-800 border-transparent hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300";

                            if (isAnswered) {
                                if (isCorrect) btnClass = "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-500 scale-[1.03] shadow-lg z-10";
                                else if (isSelected) btnClass = "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-500 opacity-60";
                                else btnClass = "opacity-30 grayscale pointer-events-none";
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(idx)}
                                    disabled={isAnswered}
                                    className={`w-full p-6 text-left rounded-3xl border-2 font-bold text-base transition-all duration-300 flex items-center justify-between group ${btnClass}`}
                                >
                                    <span className="flex items-center gap-5">
                                        <span className={`w-10 h-10 shrink-0 rounded-xl flex items-center justify-center font-black text-xs ${isSelected ? 'bg-current text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        {opt}
                                    </span>
                                    {isAnswered && isCorrect && <CheckCircle2 size={24} className="shrink-0" />}
                                    {isAnswered && isSelected && !isCorrect && <XCircle size={24} className="shrink-0" />}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {isAnswered && (
                    <div className="p-12 bg-slate-50 dark:bg-black/20 border-t dark:border-slate-800 animate-in slide-in-from-top-6 duration-500">
                        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                            <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-md text-[#002855] dark:text-blue-400 shrink-0">
                                <Info size={24} />
                            </div>
                            <div className="space-y-2 flex-1">
                                <p className="text-[11px] font-black uppercase tracking-widest text-slate-400">Análisis del Experto</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold italic">
                                    "{q.feedback}"
                                </p>
                            </div>
                            <button
                                onClick={nextQuestion}
                                className="w-full md:w-auto px-10 py-4 bg-[#002855] text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-[#D1202F] transition-all flex items-center justify-center gap-4 group shrink-0"
                            >
                                {currentIndex === currentQuestions.length - 1 ? 'Finalizar Desafío' : 'Siguiente Pregunta'} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProtectionsQuizGame;
