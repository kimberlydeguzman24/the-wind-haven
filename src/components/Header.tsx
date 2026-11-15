import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BOOKING_URL, BRAND_CONFIG, NAV_LINKS } from '../data/windHavenConfig';
import { acquireScrollLock } from '../utils/scrollLock';

interface HeaderProps {
  activeSection: string;
  onMenuOpenChange?: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onMenuOpenChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    onMenuOpenChange?.(mobileMenuOpen);
    if (!mobileMenuOpen) return;

    const releaseScrollLock = acquireScrollLock();
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      releaseScrollLock();
      window.removeEventListener('keydown', handleEscape);
    };
  }, [mobileMenuOpen, onMenuOpenChange]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const wasMobileOpen = mobileMenuOpen;
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    const scrollTarget = () => {
      const target = document.getElementById(id);
      if (target) {
        const prefersReducedMotion = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    };

    if (wasMobileOpen) {
      window.setTimeout(scrollTarget, 30);
    } else {
      scrollTarget();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ease-out ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#F7F5EF]/95 backdrop-blur-sm border-b border-[#E3DDD0] text-[#252824] shadow-xs'
          : 'bg-gradient-to-b from-[#102B24]/70 via-[#102B24]/25 to-transparent text-white border-b border-transparent'
      }`}
    >
      <div className="relative z-20 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-2 sm:gap-5">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className={`font-serif text-[13px] min-[360px]:text-[15px] min-[400px]:text-base sm:text-xl font-semibold tracking-[0.04em] min-[360px]:tracking-[0.06em] sm:tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8B5A0] ${
            isScrolled || mobileMenuOpen
              ? 'text-[#252824] hover:text-[#183D32]'
              : 'text-white hover:text-[#EEE9DE]'
          }`}
        >
          {BRAND_CONFIG.name}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] font-medium"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`group relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A8B5A0] ${
                  isScrolled
                    ? isActive
                      ? 'text-[#183D32] font-semibold'
                      : 'text-[#252824]/80 hover:text-[#252824]'
                    : isActive
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] origin-left transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isScrolled ? 'bg-[#183D32]' : 'bg-[#A8B5A0]'
                  } ${
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100 opacity-60'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold tracking-wide sm:tracking-wider uppercase rounded transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0 min-h-[44px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B5A0] ${
              isScrolled || mobileMenuOpen
                ? 'bg-[#183D32] text-white hover:bg-[#102B24] shadow-xs'
                : 'bg-[#F7F5EF] text-[#252824] hover:bg-white shadow-xs'
            }`}
          >
            <span className="hidden min-[360px]:inline">Book Your Stay</span>
            <span className="min-[360px]:hidden">Book Stay</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`lg:hidden p-2 rounded transition-colors duration-200 active:scale-95 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B5A0] ${
              isScrolled || mobileMenuOpen
                ? 'text-[#252824] hover:bg-[#EEE9DE]'
                : 'text-white hover:bg-white/15'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Tap-outside backdrop while drawer is open */}
      {mobileMenuOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-10 bg-[#102B24]/45 backdrop-blur-[1px]"
        />
      )}

      {/* Accessible Mobile Navigation with Smooth Open/Close Transition */}
      <div
        id="mobile-navigation-drawer"
        aria-hidden={!mobileMenuOpen}
        className={`lg:hidden relative z-20 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] bg-[#F7F5EF] border-b border-[#E3DDD0] shadow-lg overscroll-contain ${
          mobileMenuOpen
            ? 'max-h-[calc(100dvh-4rem)] overflow-y-auto opacity-100 pointer-events-auto'
            : 'max-h-0 overflow-hidden opacity-0 pointer-events-none border-b-0'
        }`}
      >
        <div className="px-4 sm:px-6 py-5">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`py-3 px-3 rounded text-sm font-medium transition-colors duration-150 min-h-[44px] flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EEE9DE] text-[#183D32] font-semibold'
                      : 'text-[#252824]/80 hover:bg-[#EEE9DE]/60 hover:text-[#252824]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#183D32]" aria-hidden="true">
                    →
                  </span>
                </a>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-[#E3DDD0]">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={mobileMenuOpen ? 0 : -1}
              className="w-full py-3.5 px-4 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.99] text-xs font-semibold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="text-xs text-[#252824]/70 text-center mt-2.5">
              {BRAND_CONFIG.property} · {BRAND_CONFIG.shortLocation}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
