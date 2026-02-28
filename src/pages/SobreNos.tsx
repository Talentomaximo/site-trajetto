import { motion } from 'motion/react';

export default function SobreNosPage() {
  return (
    <div className="flex-1 px-6 md:px-10 flex flex-col justify-center py-10 md:pb-20 relative z-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-[3rem] font-bold text-white leading-[1.1] mb-6 tracking-tight"
      >
        Sobre Nós
      </motion.h1>
      <div className="max-w-[600px] flex flex-col gap-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-[#FF8DA1] text-sm leading-relaxed"
        >
          Somos uma empresa de assessoria digital especializada em gerar resultados rápidos e eficazes para pequenas e médias empresas. Oferecemos serviços como orientação digital, gestão de tráfego pago, criação de conteúdo para redes sociais, design gráfico para materiais e automação de processos através de ferramentas digitais.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-[#FF8DA1] text-sm leading-relaxed"
        >
          Nosso objetivo é garantir maior visibilidade online e eficiência operacional, sempre com soluções práticas e personalizadas. Nosso foco é aliviar a carga digital dos nossos clientes, permitindo que se concentrem no crescimento estratégico de outros aspectos do negócio.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-[#FF8DA1] text-sm leading-relaxed"
        >
          Com soluções inovadoras e eficazes, garantimos uma presença online sólida e resultados mensuráveis, impulsionando o seu negócio de forma sustentável no ambiente digital.
        </motion.p>
      </div>
    </div>
  );
}
