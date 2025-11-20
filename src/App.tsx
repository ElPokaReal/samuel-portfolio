import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useSEO } from './hooks/useSEO';

function App() {
  useSEO();
  const [showOtherProjects, setShowOtherProjects] = useState(false);

  const handleShowMore = () => {
    setShowOtherProjects(true);
    // Scroll suave a la sección después de un pequeño delay para que se renderice
    setTimeout(() => {
      document.getElementById('other-projects')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const handleHide = () => {
    // Scroll suave de vuelta a proyectos antes de ocultar
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setTimeout(() => {
      setShowOtherProjects(false);
    }, 500);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <main className="flex-1">
              <Hero />
              <About />
              <Experience />
              <Projects onShowMore={handleShowMore} />
              {showOtherProjects && <OtherProjects onHide={handleHide} />}
              <Contact />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
