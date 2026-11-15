import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { BOOKING_URL, BRAND_CONFIG, NAV_LINKS } from '../data/windHavenConfig';
import { NewsletterSignup } from './NewsletterSignup';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  return (
    <footer className="bg-[#102B24] text-[#F7F5EF] pt-12 pb-20 sm:pt-16 sm:pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Discreet Newsletter Signup */}
        <NewsletterSignup />

        {/* Multi-Column Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/15">
          {/* Column 1: Wordmark & Description */}
          <div className="lg:col-span-4 space-y-3">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="font-serif text-2xl font-semibold tracking-wider uppercase text-white block hover:text-[#EEE9DE] transition-colors"
            >
              {BRAND_CONFIG.name}
            </a>
            <p className="text-sm text-[#A8B5A0] italic font-serif">
              &ldquo;{BRAND_CONFIG.secondaryTagline}&rdquo;
            </p>
            <p className="text-[13px] text-[#EEE9DE]/85 leading-relaxed max-w-xs pt-1">
              {BRAND_CONFIG.footerDescription}
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#A8B5A0]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-[13px] text-[#F7F5EF]/85">
              {NAV_LINKS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  onClick={(e) => scrollToSection(e, 'faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Reservations */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#A8B5A0]">
              Reservations
            </h3>
            <div className="space-y-3">
              <p className="text-[13px] text-[#F7F5EF]/80 leading-relaxed">
                Check live availability and book via the official BookMyStay page.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#F7F5EF] text-[#252824] hover:bg-white active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 min-h-[44px]"
              >
                <span>Book Your Stay</span>
                <ArrowUpRight
                  className="w-3.5 h-3.5 text-[#183D32] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#A8B5A0]">
              Property Location
            </h3>
            <address className="not-italic text-[13px] text-[#F7F5EF]/85 leading-relaxed space-y-1">
              <div>{BRAND_CONFIG.addressLine1}</div>
              <div>{BRAND_CONFIG.addressLine2}</div>
              <div>{BRAND_CONFIG.addressLine3}</div>
            </address>
          </div>
        </div>

        {/* Footer Bottom & Disclosures */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 text-[13px] text-[#EEE9DE]/85">
          <div className="space-y-2 max-w-3xl">
            <p className="text-white font-medium">
              &copy; {currentYear} {BRAND_CONFIG.name}. All rights reserved.
            </p>
            <p className="text-xs text-[#EEE9DE]/75 leading-relaxed">
              {BRAND_CONFIG.destinationDisclosure}
            </p>
            <p className="text-xs text-[#EEE9DE]/70 leading-relaxed">
              {BRAND_CONFIG.proposalNote}
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 text-[13px] text-[#EEE9DE] hover:text-white active:scale-[0.98] transition-all duration-200 cursor-pointer shrink-0 py-2 min-h-[44px]"
          >
            <span>Back to Top</span>
            <ArrowUp
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
