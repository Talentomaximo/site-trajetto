import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, BarChart, CheckCircle2, ChevronDown, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const cardData = [
  { id: 1, title: "Visibilidade", desc: "Facebook Ads, Google Ads, LinkedIn Ads", icon: CheckCircle2, color: "#a3e635", iconColor: "#1c2026" },
  { id: 2, title: "Eficiência", desc: "Automação, Design Gráfico, Consultoria", icon: Rocket, color: "#5a4fcf", iconColor: "white" },
  { id: 3, title: "Crescimento", desc: "Estratégias escaláveis, Análise de dados", icon: BarChart, color: "#e58a8a", iconColor: "white" },
  { id: 4, title: "Inovação", desc: "Novas tecnologias, Processos ágeis", icon: Target, color: "#f59e0b", iconColor: "white" },
];

export default function HomePage() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => (prev + 1) % cardData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Content */}
      <div className="w-full px-6 md:px-10 flex flex-col md:flex-row flex-1">
        {/* Left Column */}
        <div className="w-full md:w-[55%] flex flex-col justify-center pb-4 pt-10 md:pt-0">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-6"
          >
            <svg width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="skewX(-10) translate(15, 0)">
                {/* Lines */}
                <line x1="10" y1="30" x2="130" y2="30" stroke="#c026d3" strokeWidth="2" />
                <line x1="25" y1="40" x2="115" y2="40" stroke="#c026d3" strokeWidth="2" />
                <line x1="15" y1="50" x2="125" y2="50" stroke="#c026d3" strokeWidth="2" />

                {/* Left Nodes */}
                <circle cx="10" cy="30" r="6" fill="#1c2026" stroke="#c026d3" strokeWidth="2" />
                <circle cx="10" cy="30" r="2" fill="#c026d3" />
                <circle cx="25" cy="40" r="4" fill="#1c2026" stroke="#c026d3" strokeWidth="2" />
                <circle cx="15" cy="50" r="5" fill="#1c2026" stroke="#c026d3" strokeWidth="2" />

                {/* Right Nodes */}
                <circle cx="130" cy="30" r="8" fill="#1c2026" stroke="#c026d3" strokeWidth="3" />
                <circle cx="130" cy="30" r="3" fill="#c026d3" />
                <circle cx="115" cy="40" r="4" fill="#c026d3" />
                <circle cx="125" cy="50" r="5" fill="#1c2026" stroke="#c026d3" strokeWidth="2" />

                {/* T Shape */}
                <path d="M50 15 L90 15 L90 23 L50 23 Z" fill="white" />
                <path d="M52 26 L88 26 L88 32 L52 32 Z" fill="white" />
                <path d="M60 15 L68 15 L68 65 L60 65 Z" fill="white" />
                <path d="M72 15 L78 15 L78 65 L72 65 Z" fill="white" />
              </g>
            </svg>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-[3rem] font-bold text-white leading-[1.1] mb-4 tracking-tight"
          >
            Impulsione o<br />Seu Negócio
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-[#FF8DA1] text-sm max-w-[280px] mb-8 leading-relaxed"
          >
            Assessoria digital especializada em gerar resultados rápidos e eficazes.
          </motion.p>
        </div>

        {/* Right Column - Floating Cards */}
        <div className="hidden md:block w-full md:w-[45%] relative">
          {/* Cards Row */}
          <div className="absolute top-28 left-[-60px] w-[600px] h-[200px]">
            <AnimatePresence>
              {cardData.map((card, i) => {
                const pos = (i - offset + cardData.length) % cardData.length;
                
                let x = 0;
                let opacity = 0;
                let scale = 0.8;
                let zIndex = 0;

                if (pos === 0) {
                  x = 0; opacity = 0.3; scale = 0.9; zIndex = 10;
                } else if (pos === 1) {
                  x = 190; opacity = 1; scale = 1; zIndex = 20;
                } else if (pos === 2) {
                  x = 380; opacity = 1; scale = 1; zIndex = 20;
                } else {
                  x = 500; opacity = 0; scale = 0.8; zIndex = 0;
                }

                return (
                  <motion.div
                    key={card.id}
                    initial={false}
                    animate={{ x, opacity, scale, zIndex }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 bg-[#2a2f38]/80 backdrop-blur-md p-5 rounded-3xl shadow-2xl w-44 border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: card.color }}>
                      <card.icon className="w-5 h-5" style={{ color: card.iconColor }} />
                    </div>
                    <h3 className="text-white font-bold text-base mb-1">{card.title}</h3>
                    <p className="text-[#FF8DA1] text-[10px] leading-relaxed">{card.desc}</p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Contact Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-0 right-0 max-w-[220px] text-right"
          >
            <p className="text-[#FF8DA1] text-[10px] leading-relaxed">
              Ligue para <span className="text-white font-bold">(68) 99217-1869</span> para alavancar seu crescimento, ou confira nossos <Link to="/servicos" className="text-[#a3e635] underline decoration-[#a3e635]/50 underline-offset-2 hover:text-[#b4f04a] transition-colors">serviços</Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="h-auto md:h-[110px] w-full flex flex-col md:flex-row items-center justify-center md:justify-end px-6 md:px-10 py-6 md:py-0 relative z-20 border-t border-white/10 mt-auto md:mt-[20px] gap-4">
        {/* Mobile Contact Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="md:hidden text-center max-w-[280px] mb-4"
        >
          <p className="text-[#FF8DA1] text-[10px] leading-relaxed">
            Ligue para <span className="text-white font-bold">(68) 99217-1869</span> para alavancar seu crescimento, ou confira nossos <Link to="/servicos" className="text-[#a3e635] underline decoration-[#a3e635]/50 underline-offset-2 hover:text-[#b4f04a] transition-colors">serviços</Link>
          </p>
        </motion.div>

        {/* Partner Logos */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
          className="flex items-center gap-4"
        >
          {/* Meta */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-white/10 w-10 h-10 rounded-xl shadow-sm bg-[#2a2f38]/50 backdrop-blur-sm hover:bg-[#2a2f38]/80 transition-colors cursor-pointer">
            <img src="https://cdn.simpleicons.org/meta/0668E1" alt="Meta" className="w-5 h-5" />
          </a>
          {/* Google */}
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-white/10 w-10 h-10 rounded-xl shadow-sm bg-[#2a2f38]/50 backdrop-blur-sm hover:bg-[#2a2f38]/80 transition-colors cursor-pointer">
            <img src="https://cdn.simpleicons.org/google" alt="Google" className="w-5 h-5" />
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-white/10 w-10 h-10 rounded-xl shadow-sm bg-[#2a2f38]/50 backdrop-blur-sm hover:bg-[#2a2f38]/80 transition-colors cursor-pointer">
            <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" className="w-5 h-5" />
          </a>
          {/* TikTok */}
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border border-white/10 w-10 h-10 rounded-xl shadow-sm bg-[#2a2f38]/50 backdrop-blur-sm hover:bg-[#2a2f38]/80 transition-colors cursor-pointer">
            <img src="https://cdn.simpleicons.org/tiktok/FFFFFF" alt="TikTok" className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </>
  );
}
