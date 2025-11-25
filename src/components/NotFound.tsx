import { useEffect } from 'react';

export const NotFound = () => {
  useEffect(() => {
    // Tell search engines not to index this page
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-4 text-center">
      <h1 className="text-6xl font-black font-family-display mb-4">404</h1>
      <p className="text-xl mb-8">Página no encontrada</p>
      <a 
        href="/"
        className="px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-colors"
      >
        Volver al Inicio
      </a>
    </div>
  );
};
