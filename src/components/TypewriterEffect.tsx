import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenPhrases?: number;
}

export const TypewriterEffect = ({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenPhrases = 2000,
}: TypewriterEffectProps) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenPhrases);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentText === currentPhrase) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        } else {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    isPaused,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayBetweenPhrases,
  ]);

  const longestPhrase = phrases.reduce((a, b) => (a.length > b.length ? a : b), '');

  return (
    <span className="relative inline-block text-slate-gray/80 font-mono">
      {/* Reserved space (invisible) */}
      <span className="opacity-0 select-none pointer-events-none">
        {longestPhrase}
        <span className="inline-block w-0.5 h-8 md:h-12 ml-1"></span>
      </span>

      {/* Visible typing text (absolute) */}
      <span className="absolute top-0 left-0">
        {currentText}
        <span
          className={`inline-block w-0.5 h-8 md:h-12 bg-accent align-middle ml-1 ${
            isPaused ? 'animate-blink' : ''
          }`}
        ></span>
      </span>
    </span>
  );
};
