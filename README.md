🚀 Cyberfolio | Meu Portfólio Front-end
Bem-vindo ao Cyberfolio, meu portfólio pessoal e ambiente de experimentação como Desenvolvedor Front-end. Mais do que apenas um site para exibir projetos (como o SUBFERIA HUB e a Biblioteca Colaborativa), este projeto foi construído para ser uma prova real das minhas habilidades com Performance, Design Interativo e Resolução de Problemas.

🔗 [Acesse o projeto rodando ao vivo na Vercel aqui] https://cyberfolios.vercel.app/

🛠️ Tecnologias Utilizadas
Para garantir um código limpo, rápido e escalável, escolhi o stack moderno do ecossistema React:

React + Vite: Para um ambiente de desenvolvimento ultrarrápido e build otimizado.

Tailwind CSS: Para estilização utilitária, garantindo um visual "Tech/Futurista" com performance máxima.

Framer Motion: Para animações fluidas baseadas em física e controle de interações complexas com o mouse.

Git & GitHub: Versionamento de código e versionamento semântico.

Vercel: CI/CD e hospedagem.

💡 Ideias e Implementações (O Processo Criativo)
A minha visão para este portfólio era misturar uma estética elegante (Old Money) com elementos cibernéticos e modernos. Queria algo que prendesse a atenção do usuário logo nos primeiros segundos.

Efeito Spotlight Dinâmico: Implementei um sistema com Framer Motion onde um "brilho" (Glow) segue o cursor do mouse do usuário pela Hero Section, simulando uma lanterna explorando o ambiente escuro (Zinc-950).

Animações em Loop e Neon: Criei uma foto de perfil flutuante com pulsação neon (Glow effect), garantindo que o site parecesse "vivo" sem pesar o processamento do navegador.

UX Centralizada: Foco total na experiência do usuário, garantindo que o contraste de cores (Cyan/Purple) guiasse a visão para os botões de ação e projetos.

🚧 Desafios Reais e Aprendizados (Onde eu realmente cresci)
Construir o layout foi a parte divertida, mas colocar essa aplicação no ar de forma profissional me ensinou lições valiosas de infraestrutura e debugging que nenhum tutorial ensina:

1. O Desafio do Build e Importação de Assets (Vite)

O Problema: Durante o desenvolvimento, o Vite estava falhando ao resolver caminhos de imagens relativas (../assets/foto.jpg), o que em produção quebrava a aplicação.

A Solução: Estudei a fundo como o empacotador do Vite funciona e migrei a gestão de arquivos estáticos para a pasta public/. Aprendi que servir imagens direto da raiz (/foto.png) evita problemas de compilação e torna o deploy muito mais previsível.

2. A "Tela Branca da Morte" do React

O Problema: Em um dado momento, o site compilou perfeitamente, mas a tela ficou 100% branca no localhost.

A Solução: Aprendi a não entrar em pânico e usar o console do navegador (F12) e os logs do terminal. O React havia bloqueado a renderização porque uma tag <img src=""> estava recebendo uma string vazia dinamicamente. Tratei o dado para receber null até que a imagem final fosse carregada, evitando a quebra do ciclo de vida do componente.

3. CI/CD na Vercel e os Logs "Inimigos" (Erro 127 e Erro 1)

O Problema: Meu maior desafio técnico. O código rodava perfeitamente na minha máquina, mas a Vercel recusava o deploy (Build Exited with 127).

A Solução: Fui a fundo investigar os Build Logs do servidor Linux da Vercel. Descobri três problemas de arquitetura de repositório que resolvi um a um:

O Git havia criado um "Submódulo fantasma" por iniciar o repositório na pasta errada.

Descobri (da pior maneira) porque a pasta node_modules nunca deve ir para o GitHub. Os pacotes compilados para Windows no meu PC travavam o ambiente Linux da Vercel.

Resolução final: Configurei corretamente o .gitignore, limpei o cache do git (git rm -r --cached), forcei um novo push estruturado (--force) e criei uma esteira de deploy limpa. A Vercel passou a baixar os mais de 300 pacotes dinamicamente em 1 segundo e o site foi para o ar com sucesso absoluto.

👨‍💻 Como rodar este projeto localmente
Se você quiser explorar o código na sua máquina:

Bash
# 1. Clone o repositório
git clone https://github.com/VItorsantosp/portfolio-oficial.git

# 2. Entre na pasta do projeto
cd portfolio-oficial

# 3. Instale as dependências (agora configuradas da forma correta!)
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev
Este portfólio é um organismo vivo. Todo bug enfrentado foi uma aula prática de engenharia de software.
