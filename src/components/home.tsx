import Navigation from './Navigation';
import Hero from './Hero';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
