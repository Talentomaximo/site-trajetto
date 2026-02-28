import { motion } from 'motion/react';
import { Megaphone, PenTool, Settings, Palette, Calculator, HeadphonesIcon } from 'lucide-react';

const services = [
  { icon: Megaphone, title: "Gestão de Tráfego Pago", desc: "Campanhas no Google e Facebook Ads para gerar leads." },
  { icon: PenTool, title: "Criação de Conteúdo", desc: "Postagens, reels e stories com cronogramas estratégicos." },
  { icon: Settings, title: "Automatização", desc: "Planilhas e dashboards para otimizar processos." },
  { icon: Palette, title: "Design Gráfico", desc: "Materiais visuais impactantes e identidade forte." },
  { icon: Calculator, title: "Serviços Contábeis", desc: "Notas fiscais, demonstrativos e consultoria fiscal." },
  { icon: HeadphonesIcon, title: "Consultoria Contínua", desc: "Monitoramento e ajustes para garantir resultados." }
];

export default function ServicosPage() {
  return (
    <div className="flex-1 px-6 md:px-10 flex flex-col justify-center py-10 md:pb-10 relative z-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-[2.5rem] font-bold text-white leading-[1.1] mb-2 tracking-tight"
      >
        Oferecemos...
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[#FF8DA1] text-xs max-w-[500px] mb-6 leading-relaxed"
      >
        Nossa assessoria digital é desenhada para atender de maneira personalizada as necessidades específicas de cada cliente.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[700px]">
        {services.map((srv, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (idx * 0.1) }}
            className="bg-[#2a2f38]/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex gap-3 items-start"
          >
            <div className="w-8 h-8 rounded-lg bg-[#5a4fcf]/20 flex items-center justify-center shrink-0 mt-1">
              <srv.icon className="w-4 h-4 text-[#a3e635]" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mb-1">{srv.title}</h3>
              <p className="text-[#FF8DA1] text-[10px] leading-relaxed">{srv.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
