import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    "React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", 
    "Framer Motion", "UI/UX Design", "Identidade Visual"
  ];

  return (
    <section id="sobre" className="min-h-screen bg-zinc-950 flex justify-center items-center px-6 py-20 border-t border-zinc-800/50">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna da Esquerda: Texto Sobre Mim */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="text-cyan-500">{"// "}</span>Sobre Mim
          </h2>
          <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
            <p>
              Sou um desenvolvedor movido pela proatividade e pela vontade constante de aprender novas tecnologias. Minha jornada no Front-end é guiada pela crença de que a performance técnica e o design artístico devem caminhar juntos para criar produtos digitais memoráveis.
            </p>
            <p>
              Sou naturalmente comunicativo, o que frequentemente me coloca em posições de liderança — seja guiando decisões arquitetônicas em projetos de código ou coordenando grandes comunidades no cenário gamer. 
            </p>
            <p>
              Gosto de construir interfaces, resolver problemas complexos e, acima de tudo, conectar pessoas através da tecnologia e do design interativo.
            </p>
          </div>
        </motion.div>

        {/* Coluna da Direita: Habilidades / Tech Stack */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800"
        >
          <h3 className="text-xl font-bold text-white mb-6">Tech Stack & Hard Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.1)", borderColor: "rgba(6, 182, 212, 0.5)", color: "#22d3ee" }}
                className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-full text-sm font-mono border border-zinc-700 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">Soft Skills & Diferenciais</h3>
          <ul className="space-y-2 text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="text-purple-500">▹</span> Proatividade e Autodidatismo
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">▹</span> Liderança e Comunicação Assertiva
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-500">▹</span> Disciplina e Foco
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;