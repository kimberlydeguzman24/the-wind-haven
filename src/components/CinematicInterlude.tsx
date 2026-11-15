import React, { useEffect, useRef } from 'react';
import { Expand } from 'lucide-react';
import { IMAGE_ASSETS } from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

interface CinematicInterludeProps {
  onOpenGallery?: () => void;
}

export const CinematicInterlude: React.FC<CinematicInterludeProps> = ({
  onOpenGallery,
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const interludePhoto = IMAGE_ASSETS.poolGarden;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (prefersReducedMotion || !isDesktop) return;

    let rafId: number | null = null;

    const updateParallax = () => {
      rafId = null;
      const sectionEl = sectionRef.current;
      const imageEl = imageWrapRef.current;
      if (!sectionEl || !imageEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const centerOffset =
        (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const clamped = Math.max(-1, Math.min(1, centerOffset));
      const translateY = clamped * -26;
      imageEl.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(1.08)`;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Tagaytay Atmospheric Editorial Preview"
      className="relative w-full h-[46svh] min-h-[310px] sm:h-[52vh] sm:min-h-[360px] max-h-[580px] overflow-hidden bg-[#102B24] border-b border-[#E3DDD0]"
    >
      <div
        ref={imageWrapRef}
        className="absolute inset-0 will-change-transform transition-transform duration-100 ease-out"
      >
        <SafeImage
          src={interludePhoto.src}
          alt={interludePhoto.alt}
          loading="lazy"
          className="w-full h-full object-cover"
          fallbackTitle="Tagaytay Highland Calm"
        />
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#102B24]/90 via-[#102B24]/45 to-[#102B24]/30"
        aria-hidden="true"
      />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-14 flex flex-col justify-between gap-4">
        <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#EEE9DE] font-medium">
            SMDC Wind Residences · Tower 4
          </span>
          {!interludePhoto.isActualPropertyPhoto && (
            <span className="text-[11px] sm:text-xs text-[#F7F5EF]/90 bg-[#102B24]/70 backdrop-blur-xs px-2.5 sm:px-3 py-1 rounded">
              {interludePhoto.statusLabel}
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
          <Reveal className="max-w-xl text-white">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#A8B5A0] font-semibold block mb-1.5 sm:mb-2">
              HIGHLAND SERENITY
            </span>
            <h2 className="font-serif heading-sub font-medium tracking-tight leading-tight text-balance">
              Cool Mountain Air Meets Quiet Residential Comfort.
            </h2>
          </Reveal>

          {onOpenGallery && (
            <Reveal delay={100}>
              <button
                type="button"
                onClick={onOpenGallery}
                className="group inline-flex items-center gap-2 px-5 py-3 bg-[#F7F5EF]/95 hover:bg-white text-[#252824] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer min-h-[44px] shrink-0"
              >
                <Expand className="w-4 h-4 text-[#183D32]" aria-hidden="true" />
                <span>Explore Photo Gallery</span>
              </button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
};
