import { ArrowDown, FileDown } from 'lucide-react';

const CV_URL = '/cv.pdf';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full text-center pt-20 md:pt-28">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-neutral-800 shadow-lg"
            />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-neutral-50 mb-8 tracking-tight">
          Systems Builder
          <br />
          <span className="text-neutral-400">Finance × Data × Technology</span>
        </h1>
        
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-medium">
          Bridging financial reasoning with data engineering and modern product development. I design scalable systems that transform raw data into structured, reliable decisions across finance, health, and digital products.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center gap-2 px-8 py-3 bg-neutral-300 text-neutral-900 font-medium rounded-md hover:bg-neutral-50 transition-all duration-150 hover:scale-105"
          >
            View Systems
            <ArrowDown size={18} />
          </button>
          <a
            href={CV_URL}
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-neutral-600 text-neutral-300 font-medium rounded-md hover:bg-neutral-800 hover:border-neutral-500 hover:text-neutral-50 transition-all duration-150"
          >
            <FileDown size={18} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
