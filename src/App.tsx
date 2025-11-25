
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import { useSEO } from './hooks/useSEO';
import { ScrollReveal } from './components/ScrollReveal';

function App() {
  useSEO();
  const [showGallery, setShowGallery] = useState(false);



  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white text-black">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        
        <div className="layout-container flex flex-col items-center">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 w-full max-w-[1200px]">
            <ScrollReveal width="100%">
              <About />
            </ScrollReveal>
            <ScrollReveal width="100%">
              <Experience />
            </ScrollReveal>
            <Projects onShowMore={() => setShowGallery(true)} />
            <ProjectGallery isOpen={showGallery} onClose={() => setShowGallery(false)} />
            </div>
        </div>
            <ScrollReveal width="100%">
        <Footer />
      </ScrollReveal>
      </main>
    </div>
  );
}

export default App;
