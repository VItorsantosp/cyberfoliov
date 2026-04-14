import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projectsData = [
    {
      id: 1,
      title: "SUBFERIA HUB",
      category: "Rede Social Gamer",
      description: "Plataforma interativa desenvolvida no estilo Instagram/Facebook, focada em conectar jogadores. Interface fluida construída como SPA, com alto foco em performance no carregamento de feeds e perfis complexos. [ EM CONSTRUÇÃO ]",
      techStack: ["React", "Tailwind CSS", "Framer Motion", "UI Design"],
      
      image: "/a.png", 
      
      linkRepo: "https://github.com/VItorsantosp/SUBFERIA-HUB", 
      linkDemo: "#", 
    },
    {
      id: 2,
      title: "Biblioteca Colaborativa",
      category: "Plataforma de Estudos",
      description: "Hub de conhecimento para compartilhamento e leitura de PDFs de livros didáticos. Foco total em UX/UI, utilizando grids responsivos e modais dinâmicos para evitar sobrecarga cognitiva durante o estudo.",
      techStack: ["React", "JavaScript", "Tailwind CSS", "UX Engineering"],
      
      image: "null", 
      
      linkRepo: "https://github.com/VItorsantosp/sharkstudy",
      linkDemo: "https://studyshark.vercel.app/",
    }
  ];

  return (
    <section id="projetos" className="min-h-screen bg-zinc-950 flex flex-col justify-center items-center px-6 py-20 border-t border-zinc-800/50">
      <div className="max-w-6xl w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-cyan-500">{"// "}</span>Meus Projetos
          </h2>
          <p className="text-zinc-400 text-lg">
            Aplicações reais, focadas em resolver problemas e entregar a melhor experiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500"
            >
              {/* Área da Imagem Atualizada */}
              <div className="h-48 md:h-64 relative overflow-hidden flex items-center justify-center bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={`Print do projeto ${project.title}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              <div className="p-8">
                <span className="text-purple-400 font-mono text-sm mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-mono px-2 py-1 bg-zinc-950 text-zinc-300 rounded border border-zinc-800">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.linkDemo} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors">
                    Ver Projeto
                  </a>
                  <a href={project.linkRepo} target="_blank" rel="noopener noreferrer" className="flex-1 py-2 text-center border border-zinc-700 hover:border-zinc-500 text-white font-semibold rounded-lg transition-colors">
                    Repositório
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;