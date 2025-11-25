import { useState, Suspense, lazy } from 'react';
import { LazyMotion, domAnimation } from "framer-motion"
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
// import Projects from './components/Projects';
// import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import { useSEO } from './hooks/useSEO';
import { ScrollReveal } from './components/ScrollReveal';

const Projects = lazy(() => import('./components/Projects'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));

function App() {
  useSEO();
  const [showGallery, setShowGallery] = useState(false);



  return (
    <LazyMotion features={domAnimation}>
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
            </div>
          </div>
          
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading Projects...</div>}>
            <Projects onShowMore={() => setShowGallery(true)} />
          </Suspense>
          
          <Suspense fallback={null}>
            <ProjectGallery isOpen={showGallery} onClose={() => setShowGallery(false)} />
          </Suspense>

          <ScrollReveal width="100%">
            <Footer />
          </ScrollReveal>
        </main>
      </div>
    </LazyMotion>
  );
}

export default App;
