import React from 'react';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import { BOOKING_URL, BRAND_CONFIG, IMAGE_ASSETS } from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';

export const HeroSection: React.FC = () => {
  const heroPhoto = IMAGE_ASSETS.heroTagaytay;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[78svh] sm:min-h-[85svh] lg:min-h-[94vh] flex items-end pb-10 sm:pb-20 pt-22 sm:pt-28 overflow-hidden bg-[#102B24]"
    >
      {/* Full-width Hero Visual with subtle initial zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <SafeImage
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-[62%_center] sm:object-center hero-zoom will-change-transform"
          fallbackTitle="The Wind Haven — Tagaytay"
        />
        {/* Measured scrim for crisp >4.5:1 legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#102B24]/92 via-[#102B24]/52 to-[#102B24]/35"
          aria-hidden="true"
        />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
        <div className="max-w-3xl">
          <p className="hero-stagger-1 text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#EEE9DE] font-medium mb-2.5 sm:mb-4">
            WELCOME TO {BRAND_CONFIG.name}
          </p>

          <h1
            className="hero-stagger-2 font-serif text-white font-medium tracking-tight leading-[1.08] mb-3.5 sm:mb-5 text-balance"
            style={{ fontSize: 'clamp(1.9rem, 4.8vw, 4.15rem)' }}
          >
            {BRAND_CONFIG.tagline}
          </h1>

          <p className="hero-stagger-3 text-[15px] sm:text-lg text-[#F7F5EF]/95 font-normal leading-relaxed max-w-2xl mb-6 sm:mb-8">
            Discover a more relaxing way to experience Tagaytay at The Wind Haven, a welcoming private accommodation at SMDC Wind Residences.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="hero-stagger-4 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-3.5 mb-6 sm:mb-8">
            <a
              href="#rooms"
              onClick={(e) => scrollToSection(e, 'rooms')}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#183D32]/90 text-white hover:bg-[#102B24] active:scale-[0.98] border border-white/25 text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 min-h-[46px] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B5A0]"
            >
              <span>Explore the Stay</span>
              <ArrowDown
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F7F5EF] text-[#252824] hover:bg-white active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 min-h-[46px] whitespace-nowrap shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B5A0]"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight
                className="w-4 h-4 text-[#183D32] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Unboxed Location & Preview Image Clarification */}
          <div className="hero-stagger-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-[#EEE9DE]/95 pt-5 border-t border-white/15">
            <span className="inline-flex items-center gap-1.5 font-medium text-white">
              <MapPin className="w-4 h-4 text-[#A8B5A0] shrink-0" aria-hidden="true" />
              <span>SMDC Wind Residences – Tower 4 · Aguinaldo Highway, Tagaytay City</span>
            </span>
            {!heroPhoto.isActualPropertyPhoto && (
              <>
                <span aria-hidden="true" className="text-white/30 hidden sm:inline">
                  ·
                </span>
                <span className="text-[#EEE9DE]/85 text-xs">
                  {heroPhoto.statusLabel} — ready for owner-authorized photos
                </span>
              </>
            )}
          </div>
        </div>

        {/* Minimal Editorial Scroll Indicator (Desktop) */}
        <a
          href="#about"
          onClick={(e) => scrollToSection(e, 'about')}
          className="hidden lg:inline-flex flex-col items-center gap-2.5 text-[#EEE9DE]/80 hover:text-white transition-colors group shrink-0 pb-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8B5A0]"
          aria-label="Scroll to discover more"
        >
          <span className="text-[10px] uppercase tracking-[0.24em] font-medium">
            Scroll
          </span>
          <span
            aria-hidden="true"
            className="w-[1px] h-10 bg-white/25 overflow-hidden relative block"
          >
            <span className="scroll-cue-indicator absolute inset-x-0 top-0 h-5 bg-[#A8B5A0]" />
          </span>
        </a>
      </div>
    </section>
  );
};
