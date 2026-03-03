import React, { useState, useEffect } from 'react';
import { Settings, FileText } from 'lucide-react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AE1View from './components/AE1View';
import AE2View from './components/AE2View';
import AE3View from './components/AE3View';
import AE4View from './components/AE4View';
import AE5View from './components/AE5View';
import HomeView from './components/HomeView';
import UnidadesView from './components/UnidadesView';
import GaleriaView from './components/GaleriaView';
import ProtectionsQuizGame from './components/ProtectionsQuizGame';

import { MODULE_DATA } from './data/moduleData';

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

// --- COMPONENTE PRINCIPAL ---

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Asegurar que al cambiar de ruta, el scroll vuelva arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Manejador centralizado para navegación compatible con los componentes
  const handleNavigate = (path) => {
    if (path === 'inicio') navigate('/');
    else if (path === 'aprendizajes') navigate('/unidades');
    else if (path === 'galeria') navigate('/galeria');
    else if (path === 'quiz') navigate('/quiz');
    else if (path.startsWith('ae')) navigate(`/${path}`);
    else navigate(path);
  };


  return (
    <div className={`min-h-screen font-sans selection:bg-yellow-400 selection:text-slate-900 transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar
        isDarkMode={darkMode}
        toggleDarkMode={() => setDarkMode(!darkMode)}
        onNavigate={handleNavigate}
      />

      <main className="container mx-auto px-6 py-16">
        <Routes>
          <Route path="/" element={<HomeView moduleData={MODULE_DATA} />} />
          <Route path="/unidades" element={<UnidadesView moduleData={MODULE_DATA} />} />
          <Route path="/galeria" element={<GaleriaView onBack={() => navigate('/')} />} />
          <Route path="/quiz" element={<ProtectionsQuizGame />} />
          <Route path="/ae1" element={<AE1View onBack={() => navigate('/')} darkMode={darkMode} />} />
          <Route path="/ae2" element={<AE2View onBack={() => navigate('/')} />} />
          <Route path="/ae3" element={<AE3View onBack={() => navigate('/')} />} />
          <Route path="/ae4" element={<AE4View onBack={() => navigate('/')} />} />
          <Route path="/ae5" element={<AE5View onBack={() => navigate('/')} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-10 mt-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 text-center">
          {/* Footer content removed as requested */}
        </div>
      </footer>
    </div>
  );
};

export default App;