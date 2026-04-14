import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      // Animação de entrada: desce do topo suavemente
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-between items-center px-8 py-5 fixed top-0 z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-800/50"
    >
      {/* Logotipo em texto */}
      <div className="text-white font-bold text-xl tracking-tighter cursor-pointer">
        DEV<span className="text-cyan-500">VITOR</span>
      </div>

      {/* Links de navegação */}
      <ul className="hidden md:flex gap-8 text-zinc-400 text-sm font-mono">
        <li>
          <a href="#sobre" className="hover:text-cyan-400 transition-colors cursor-pointer hover:underline decoration-cyan-500 underline-offset-4">
            // sobre
          </a>
        </li>
        <li>
          <a href="#projetos" className="hover:text-cyan-400 transition-colors cursor-pointer hover:underline decoration-cyan-500 underline-offset-4">
            // projetos
          </a>
        </li>
        <li>
          <a href="#contato" className="hover:text-cyan-400 transition-colors cursor-pointer hover:underline decoration-cyan-500 underline-offset-4">
            // contato
          </a>
        </li>
      </ul>
      
      {/* Ícone de Menu para Mobile (Simples por enquanto) */}
      <div className="md:hidden text-cyan-500 cursor-pointer">
        ☰
      </div>
    </motion.nav>
  );
};

export default Navbar;