import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const HeroSection = () => {
  // Efeito de Spotlight (mantido das versões anteriores)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Definição da animação de "Flutuação" sutil para a foto
  const floatingAnimation = {
    y: ["0%", "-3%", "0%"], // Sobe e desce levemente
    transition: {
      duration: 5, // Uma animação lenta e suave
      ease: "easeInOut",
      repeat: Infinity, // Repete para sempre
    },
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="group min-h-screen bg-zinc-950 flex flex-col justify-center items-center px-6 relative overflow-hidden pt-24" // pt-24 adicionado para dar espaço para a Navbar
    >
      
      {/* O EFEITO DE LUZ (Spotlight - mantido) */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Luzes fixas nas bordas (mantidas) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-600 rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      {/* O CONTEÚDO (Z-10 garante que o texto fique acima da luz) */}
      <div className="z-10 text-center max-w-4xl flex flex-col items-center">
        
        {/* --- ALTERAÇÃO 2: ADIÇÃO DA FOTO ANIMADA --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }} // Animação de entrada
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mb-10 w-48 h-48 md:w-56 md:h-56" // Tamanho da foto
        >
          {/* O Elemento da Foto com Flutuação */}
          <motion.div
            animate={floatingAnimation} // Aplica a animação de flutuação contínua
            className="w-full h-full rounded-full border-2 border-cyan-500/50 p-1 flex items-center justify-center overflow-hidden"
          >
            {/* Tag de imagem real */}
           <img 
              src="/perfil.jpeg" 
              alt="Foto de Perfil" 
              className="w-full h-full object-cover rounded-full"
/>
          </motion.div>

          {/* O Efeito Neon Pulsante ao Redor da Foto */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }} // Pulsa a opacidade
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-1.5 bg-cyan-500 rounded-full blur-xl opacity-50 z-[-1]" // Glow neon atrás da foto
          />
        </motion.div>
        {/* ------------------------------------------------- */}

        {/* Textos da Hero Section */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-cyan-400 font-mono tracking-widest text-sm mb-4 uppercase"
        >
          Portfólio Front-end
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight"
        >
          Performance & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Design Interativo
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl"
        >
          Sou um desenvolvedor focado em transformar ideias em experiências digitais rápidas, escaláveis e visualmente marcantes.
        </motion.p>
        
        {/* Botões */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <motion.a 
            href="#projetos" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors duration-300 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Ver Projetos
          </motion.a>
          
          <motion.a 
            href="#contato" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-zinc-700 text-white font-semibold rounded-full hover:border-zinc-500 transition-colors duration-300 flex items-center justify-center gap-2 hover:bg-zinc-900/50"
          >
            Falar Comigo
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;