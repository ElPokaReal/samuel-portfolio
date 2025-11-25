import { useState, Suspense, lazy, useRef, useEffect } from 'react';
import { LazyMotion, domAnimation, useInView } from "framer-motion"
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
// import Projects from './components/Projects';
// import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import { useSEO } from './hooks/useSEO';
import { ScrollReveal } from './components/ScrollReveal';

const lazyRetry = <T,>(componentImport: () => Promise<{ default: T }>) => {
  return new Promise<{ default: T }>((resolve, reject) => {
    componentImport()
      .then((component) => {
        resolve(component);
      })
      .catch((error) => {
        console.error("Lazy load failed, reloading...", error);
        // Check if we have already reloaded to avoid infinite loops
        const hasReloaded = sessionStorage.getItem('lazy_retry_reload');
        if (!hasReloaded) {
          sessionStorage.setItem('lazy_retry_reload', 'true');
          window.location.reload();
        } else {
          // If already reloaded, reject to show error boundary or fallback
          sessionStorage.removeItem('lazy_retry_reload'); // Reset for next time
          reject(error);
        }
      });
  });
};

const Projects = lazy(() => lazyRetry(() => import('./components/Projects')));
const ProjectGallery = lazy(() => lazyRetry(() => import('./components/ProjectGallery')));

import { ProjectGenerator } from './components/ProjectGenerator';
import { Login } from './components/Login';
import { NotFound } from './components/NotFound';
import { supabase } from './lib/supabase';
import type { Session } from '@supabase/supabase-js';

function App() {
  useSEO();
  const [showGallery, setShowGallery] = useState(false);

  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Simple client-side routing
  const path = window.location.pathname;

  if (path === '/admin') {
    if (loading) {
      return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
    }
    return session ? <ProjectGenerator /> : <Login />;
  }

  // If path is not root and not admin, show 404
  if (path !== '/' && path !== '/index.html') {
    return <NotFound />;
  }

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

          <LoadOnView>
            <Projects onShowMore={() => setShowGallery(true)} />
          </LoadOnView>

          <Suspense fallback={null}>
            {showGallery && <ProjectGallery isOpen={showGallery} onClose={() => setShowGallery(false)} />}
          </Suspense>

          <ScrollReveal width="100%">
            <Footer />
          </ScrollReveal>
        </main>
      </div>
    </LazyMotion>
  );
}

function LoadOnView({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "200px" });
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldLoad(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="min-h-[100px]">
      {shouldLoad ? (
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading Projects...</div>}>
          {children}
        </Suspense>
      ) : null}
    </div>
  );
}

export default App;
