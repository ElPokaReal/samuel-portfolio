import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    let isScrolling = false;
    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;

    const smoothScrollStep = () => {
      if (Math.abs(targetScrollY - currentScrollY) < 1) {
        currentScrollY = targetScrollY;
        isScrolling = false;
        return;
      }

      currentScrollY += (targetScrollY - currentScrollY) * 0.1;
      window.scrollTo(0, currentScrollY);
      
      if (isScrolling) {
        requestAnimationFrame(smoothScrollStep);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      targetScrollY += e.deltaY;
      targetScrollY = Math.max(0, Math.min(targetScrollY, document.documentElement.scrollHeight - window.innerHeight));
      
      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScrollStep);
      }
    };

    // Agregar listener con passive: false para poder prevenir el comportamiento por defecto
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
};
