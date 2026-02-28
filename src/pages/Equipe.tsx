import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const team = [
  { id: "eduardo-teixeira", name: "Eduardo Teixeira", role: "Head de Vendas e Gestão de Tráfego", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
  { id: "lucas-muniz", name: "Lucas Muniz", role: "Head de Inovação e Produtos", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" },
  { id: "mario-jose", name: "Mário José", role: "Social Media Manager", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
  { id: "christian-teixeira", name: "Christian Teixeira", role: "Programador e Designer", img: "https://i.imgur.com/JWko97M.png" }
];

export default function EquipePage() {
  return (
    <div className="flex-1 px-6 md:px-10 flex flex-col justify-center py-10 md:pb-16 relative z-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-[2.5rem] font-bold text-white leading-[1.1] mb-2 tracking-tight"
      >
        Nossa Equipe
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[#FF8DA1] text-xs max-w-[500px] mb-8 leading-relaxed"
      >
        Somos uma equipe comprometida, focada em entregar soluções personalizadas, práticas e eficazes aos nossos clientes.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[700px]">
        {team.map((member, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + (idx * 0.1) }}
            className="flex items-center gap-4"
          >
            <img src={member.img} alt={member.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#5a4fcf]" />
            <div>
              <h3 className="text-white font-bold text-sm">{member.name}</h3>
              <p className="text-[#89F336] text-[10px] mb-1">{member.role}</p>
              <Link to={`/portfolio/${member.id}`} className="text-[10px] text-white/70 hover:text-white underline decoration-white/30 underline-offset-2 transition-colors">
                Ver Portfólio
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
