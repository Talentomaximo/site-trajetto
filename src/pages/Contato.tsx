import { motion } from 'motion/react';
import { Phone, Mail } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="flex-1 px-6 md:px-10 flex flex-col justify-center py-10 md:pb-20 relative z-20">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-[3rem] font-bold text-white leading-[1.1] mb-6 tracking-tight max-w-[600px]"
      >
        Pronto para impulsionar o seu negócio?
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-[#FF8DA1] text-sm leading-relaxed max-w-[500px] mb-10"
      >
        Entre em contato conosco hoje mesmo e descubra como a <strong className="text-white">TRAJETTO</strong> pode transformar seu negócio. Nossa equipe está pronta para ajudá-lo a conquistar novos clientes e alavancar seu crescimento. Vamos conversar!
      </motion.p>

      <div className="flex flex-col gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-4 bg-[#2a2f38]/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 w-fit"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <Phone className="w-5 h-5 text-[#1c2026]" />
          </div>
          <span className="text-white font-bold text-base md:text-lg break-all">(68) 99217-1869</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4 bg-[#2a2f38]/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 w-full md:w-fit"
        >
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-[#1c2026]" />
          </div>
          <span className="text-white font-bold text-sm md:text-lg break-all">c.eduardoteixeira21@gmail.com</span>
        </motion.div>
      </div>
    </div>
  );
}
