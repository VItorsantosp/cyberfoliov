import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contato" className="bg-zinc-950 py-20 px-6 border-t border-zinc-800/50">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Vamos <span className="text-cyan-500">Conversar?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
            Seja para uma vaga, um projeto freelancer (como overlays e identidades visuais para streams) ou apenas para trocar uma ideia sobre código e games, minha caixa de entrada está sempre aberta.
          </p>
        </motion.div>

        {/* Links de Contato (Estilo Terminal) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full justify-center"
        >
          {/* E-mail */}
          <a 
            href="mailto:paulo.santosc@yahoo.com" 
            className="group flex items-center justify-between px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex flex-col items-start text-left">
              <span className="text-zinc-500 text-sm font-mono mb-1">{"// "}Enviar E-mail</span>
              <span className="text-white group-hover:text-cyan-400 transition-colors">paulo.santosc@yahoo.com</span>
            </div>
            <span className="text-zinc-600 group-hover:text-cyan-400 transition-colors text-xl ml-8">↗</span>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/pvitorsan/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-colors"
          >
             <div className="flex flex-col items-start text-left">
              <span className="text-zinc-500 text-sm font-mono mb-1">{"// "}LinkedIn</span>
              <span className="text-white group-hover:text-cyan-400 transition-colors">@pvitorsan</span>
            </div>
            <span className="text-zinc-600 group-hover:text-cyan-400 transition-colors text-xl ml-8">↗</span>
          </a>

          {/* GitHub */}
           <a 
            href="https://github.com/VItorsantosp" 
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-cyan-500/50 transition-colors"
          >
             <div className="flex flex-col items-start text-left">
              <span className="text-zinc-500 text-sm font-mono mb-1">{"// "}GitHub</span>
              <span className="text-white group-hover:text-cyan-400 transition-colors">/VItorsantosp</span>
            </div>
            <span className="text-zinc-600 group-hover:text-cyan-400 transition-colors text-xl ml-8">↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;