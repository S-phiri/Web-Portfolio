const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Portfolio. Built with React + TypeScript + Tailwind.
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="#home" 
            className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors duration-150"
          >
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
