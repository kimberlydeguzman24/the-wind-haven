import React, { useState, useEffect } from 'react';
import { CalendarCheck2, ArrowUpRight } from 'lucide-react';
import { BOOKING_URL } from '../data/windHavenConfig';

interface FloatingBookingCTAProps {
  heroSectionId?: string;
  suppressed?: boolean;
}

export const FloatingBookingCTA: React.FC<FloatingBookingCTAProps> = ({
  heroSectionId = 'home',
  suppressed = false,
}) => {
  const [pastHero, setPastHero] = useState(false);
  const [nearBottomCta, setNearBottomCta] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById(heroSectionId);
    const footerEl = document.querySelector('footer');
    const bottomCtaEl = document.querySelector(
      'section[aria-label="Final Booking Call to Action"]'
    );

    if ('IntersectionObserver' in window && heroEl) {
      const heroObserver = new IntersectionObserver(
        ([entry]) => {
          setPastHero(!entry.isIntersecting);
        },
        { threshold: 0.05 }
      );
      heroObserver.observe(heroEl);

      const bottomEls = [bottomCtaEl, footerEl].filter(
        (el): el is Element => el !== null
      );
      const visibleBottomSet = new Set<Element>();

      const bottomObserver =
        bottomEls.length > 0
          ? new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    visibleBottomSet.add(entry.target);
                  } else {
                    visibleBottomSet.delete(entry.target);
                  }
                });
                setNearBottomCta(visibleBottomSet.size > 0);
              },
              { threshold: 0.05 }
            )
          : null;

      bottomEls.forEach((el) => bottomObserver?.observe(el));

      return () => {
        heroObserver.disconnect();
        bottomObserver?.disconnect();
      };
    }

    const handleScroll = () => {
      const threshold = heroEl ? heroEl.offsetHeight * 0.9 : 600;
      setPastHero(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [heroSectionId]);

  const showButton = pastHero && !nearBottomCta && !suppressed;

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!showButton}
      tabIndex={showButton ? 0 : -1}
      aria-label="Book your stay on BookMyStay (opens in new tab)"
      className={`group fixed bottom-4 right-[4rem] sm:bottom-7 sm:right-[5.25rem] z-30 h-11 sm:h-12 px-3 sm:px-5 rounded bg-[#183D32] text-[#F7F5EF] border border-[#A8B5A0]/60 shadow-lg hover:bg-[#102B24] hover:border-[#A8B5A0] active:scale-[0.98] transition-all duration-200 inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B5A0] ${
        showButton
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <CalendarCheck2 className="w-4 h-4 text-[#A8B5A0] shrink-0" aria-hidden="true" />
      <span>Book Your Stay</span>
      <ArrowUpRight
        className="w-3.5 h-3.5 text-[#EEE9DE] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </a>
  );
};
