import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopButtonProps {
  heroSectionId?: string;
  suppressed?: boolean;
}

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  heroSectionId = 'home',
  suppressed = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById(heroSectionId);

    if (heroEl && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Show button once the hero section has scrolled out of view
          setIsVisible(!entry.isIntersecting);
        },
        {
          threshold: 0.05,
        }
      );

      observer.observe(heroEl);
      return () => observer.disconnect();
    }

    const handleScroll = () => {
      const threshold = heroEl ? heroEl.offsetHeight * 0.9 : 600;
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroSectionId]);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const showButton = isVisible && !suppressed;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!showButton}
      tabIndex={showButton ? 0 : -1}
      className={`fixed bottom-4 right-4 sm:bottom-7 sm:right-7 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-[#183D32] text-[#F7F5EF] border border-[#A8B5A0]/50 shadow-lg hover:bg-[#102B24] hover:border-[#A8B5A0] transition-all duration-200 flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B5A0] ${
        showButton
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
    </button>
  );
};
