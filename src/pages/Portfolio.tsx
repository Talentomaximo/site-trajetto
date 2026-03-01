import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Github, MessageCircle } from 'lucide-react';

const teamPortfolios: Record<string, { name: string, role: string, img: string, bio: string, projects: { title: string, desc: string }[] }> = {
  "eduardo-teixeira": {
    name: "Eduardo Teixeira",
    role: "Head de Vendas e Gestão de Tráfego",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    bio: "Especialista em alavancar vendas através de tráfego pago estratégico. Com mais de 5 anos de experiência, já gerenciou múltiplos dígitos em anúncios, focando sempre no ROI e na escalabilidade do negócio.",
    projects: [
      { title: "Campanha de Lançamento E-commerce", desc: "Aumento de 300% nas vendas no primeiro mês através de Facebook e Google Ads." },
      { title: "Geração de Leads B2B", desc: "Redução do Custo por Lead em 45% para empresa de software." }
    ]
  },
  "lucas-muniz": {
    name: "Lucas Muniz",
    role: "Head de Inovação e Produtos",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    bio: "Apaixonado por criar soluções que resolvem problemas reais. Focado em metodologias ágeis e design thinking para desenvolver produtos digitais que encantam os usuários.",
    projects: [
      { title: "App de Gestão Financeira", desc: "Liderou o desenvolvimento do produto do zero até 10k usuários ativos." },
      { title: "Plataforma Educacional", desc: "Reestruturação completa da jornada do usuário, aumentando a retenção em 60%." }
    ]
  },
  "mario-jose": {
    name: "Mário José",
    role: "Social Media Manager",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    bio: "Criativo e estratégico, transforma marcas comuns em comunidades engajadas. Especialista em criar narrativas visuais e textuais que conectam marcas ao seu público-alvo.",
    projects: [
      { title: "Rebranding de Marca de Moda", desc: "Crescimento orgânico de 50k seguidores no Instagram em 6 meses." },
      { title: "Estratégia de Conteúdo Viral", desc: "Campanha no TikTok que alcançou mais de 2 milhões de visualizações." }
    ]
  },
  "christian-teixeira": {
    name: "Christian Teixeira",
    role: "Programador e Designer",
    img: "https://i.imgur.com/JWko97M.png",
    bio: "Desenvolvedor Full-Stack e UI/UX Designer. Une código limpo e design intuitivo para criar experiências web modernas, rápidas e acessíveis.",
    projects: [
      { title: "Dashboard Analítico", desc: "Criação de interface complexa de dados usando React e Tailwind CSS." },
      { title: "E-commerce de Alta Performance", desc: "Desenvolvimento de loja virtual com tempo de carregamento inferior a 1 segundo." }
    ]
  }
};

export default function PortfolioPage() {
  const { id } = useParams();
  const member = id ? teamPortfolios[id] : null;

  if (!member) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center relative z-20">
        <h1 className="text-white text-2xl font-bold mb-4">Membro não encontrado</h1>
        <Link to="/equipe" className="text-[#a3e635] hover:underline">Voltar para Equipe</Link>
      </div>
    );
  }

  return (
    <div className="flex-1 px-6 md:px-10 py-6 md:py-10 flex flex-col relative z-20 overflow-y-auto">
      <Link to="/equipe" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit mb-8">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Voltar</span>
      </Link>

      <div className="flex flex-col md:flex-row gap-8 items-start max-w-[800px]">
        <div className="flex flex-col items-center">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={member.img} 
            alt={member.name} 
            className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover border-2 border-[#5a4fcf] shadow-xl" 
          />

          {/* ÍCONES ADICIONADOS ABAIXO DA FOTO */}
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-white" />
            </a>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            {member.name}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#89F336] text-sm md:text-base mb-6 font-medium"
          >
            {member.role}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-white text-lg font-bold mb-2">Sobre</h2>
            <p className="text-[#FF8DA1] text-sm leading-relaxed mb-8 max-w-[500px]">
              {member.bio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-white text-lg font-bold mb-4">Projetos em Destaque</h3>
            <div className="flex flex-col gap-4">
              {member.projects.map((proj, idx) => (
                <div key={idx} className="bg-[#2a2f38]/50 border border-white/5 p-4 rounded-xl">
                  <h4 className="text-white font-bold text-sm mb-1">{proj.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
