import { motion, AnimatePresence } from 'motion/react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 font-sans relative overflow-hidden">
      {/* Ambient Purple Glow to enhance the glass effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#c026d3]/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[960px] bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl md:rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative z-10 min-h-[85vh] md:min-h-[560px] md:aspect-[16/10]"
      >
        {/* Background Image/Building */}
        <div className="absolute right-0 top-0 w-full md:w-[60%] h-full opacity-20 md:opacity-30 pointer-events-none z-0">
           <img 
             src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
             alt="Office" 
             className="w-full h-full object-cover md:[clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]" 
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/60 md:from-black/40 via-black/40 md:via-transparent to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 md:from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full flex-1">
          
          {/* Header */}
          <header className="flex items-center justify-between px-6 md:px-10 py-6 relative z-30">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 border border-gray-600 p-2 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                <span className="text-white text-sm font-bold leading-tight tracking-wide uppercase">
                  TRAJE<span className="text-[#c026d3]">TT</span>O
                </span>
              </Link>
            </motion.div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-300"
            >
              <NavLink 
                to="/" 
                className={({ isActive }) => `transition-colors relative ${isActive ? "text-white after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-[2px] after:bg-[#e58a8a] after:rounded-full" : "hover:text-white"}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/sobre" 
                className={({ isActive }) => `transition-colors relative ${isActive ? "text-white after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-[2px] after:bg-[#e58a8a] after:rounded-full" : "hover:text-white"}`}
              >
                Sobre Nós
              </NavLink>
              <NavLink 
                to="/servicos" 
                className={({ isActive }) => `transition-colors relative ${isActive ? "text-white after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-[2px] after:bg-[#e58a8a] after:rounded-full" : "hover:text-white"}`}
              >
                Serviços
              </NavLink>
              <NavLink 
                to="/equipe" 
                className={({ isActive }) => `transition-colors relative ${isActive ? "text-white after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-[2px] after:bg-[#e58a8a] after:rounded-full" : "hover:text-white"}`}
              >
                Equipe
              </NavLink>
              <NavLink 
                to="/contato" 
                className={({ isActive }) => `transition-colors relative ${isActive ? "text-white after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-[2px] after:bg-[#e58a8a] after:rounded-full" : "hover:text-white"}`}
              >
                Contato
              </NavLink>
            </motion.nav>
          </header>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/80 backdrop-blur-xl border-b border-white/10 absolute top-[80px] left-0 right-0 z-40 overflow-hidden"
              >
                <nav className="flex flex-col items-center gap-6 py-8 text-sm font-medium text-gray-300">
                  <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `transition-colors ${isActive ? "text-white font-bold" : "hover:text-white"}`}>Home</NavLink>
                  <NavLink to="/sobre" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `transition-colors ${isActive ? "text-white font-bold" : "hover:text-white"}`}>Sobre Nós</NavLink>
                  <NavLink to="/servicos" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `transition-colors ${isActive ? "text-white font-bold" : "hover:text-white"}`}>Serviços</NavLink>
                  <NavLink to="/equipe" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `transition-colors ${isActive ? "text-white font-bold" : "hover:text-white"}`}>Equipe</NavLink>
                  <NavLink to="/contato" onClick={() => setIsMobileMenuOpen(false)} className={({ isActive }) => `transition-colors ${isActive ? "text-white font-bold" : "hover:text-white"}`}>Contato</NavLink>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Page Content */}
          <div className="flex-1 flex flex-col overflow-y-auto md:overflow-visible">
            <Outlet />
          </div>

        </div>
      </motion.div>
    </div>
  );
}
