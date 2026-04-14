const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-8 border-t border-zinc-900 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-zinc-500 text-sm font-mono">
          © {currentYear} DEVVITOR. Construído com <span className="text-cyan-500">React</span> & <span className="text-cyan-500">Tailwind</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;