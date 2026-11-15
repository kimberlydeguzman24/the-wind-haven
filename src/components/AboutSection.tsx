import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BOOKING_URL, IMAGE_ASSETS } from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

export const AboutSection: React.FC = () => {
  const aboutPhoto = IMAGE_ASSETS.oneBedroomLiving;

  const scrollToRooms = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('rooms');
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
      id="about"
      className="bg-[#F7F5EF] py-12 sm:py-20 lg:py-28 border-b border-[#E3DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-stretch">
          {/* Editorial Property Visual */}
          <Reveal className="lg:col-span-6 relative">
            <div className="group relative h-full aspect-[4/3] lg:aspect-auto lg:min-h-[440px] rounded-xl overflow-hidden border border-[#E3DDD0] bg-[#EEE9DE]">
              <SafeImage
                src={aboutPhoto.src}
                alt={aboutPhoto.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                fallbackTitle="A Place to Pause, Rest, and Feel at Home."
              />
              {!aboutPhoto.isActualPropertyPhoto && (
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-[#102B24]/85 backdrop-blur-xs text-[#F7F5EF] px-3 py-2 sm:px-4 sm:py-2.5 rounded text-[11px] sm:text-xs flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5">
                  <span>{aboutPhoto.statusLabel}</span>
                  <span className="text-[#EEE9DE]/90">Ready for property photos</span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] mb-2.5 sm:mb-3 block">
                ABOUT THE WIND HAVEN
              </span>

              <h2 className="font-serif heading-section font-medium text-[#252824] tracking-tight mb-5 sm:mb-6 text-balance">
                A Place to Pause, Rest, and Feel at Home.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-4 text-base text-[#252824]/85 leading-relaxed mb-8">
                <p>
                  The Wind Haven offers a comfortable private accommodation experience at SMDC Wind Residences in Tagaytay City. Designed for guests seeking a relaxing place to stay, it brings together practical comforts and a convenient location for exploring the city.
                </p>
                <p>
                  Located at Tower 4 along Aguinaldo Highway, the stay serves as a peaceful personal retreat while keeping Tagaytay&apos;s dining, viewpoints, and cool highland atmosphere within easy reach.
                </p>
              </div>
            </Reveal>

            {/* Brand Statement & Shared Facilities Distinction */}
            <Reveal delay={160}>
              <div className="p-5 bg-[#EEE9DE] rounded-lg border border-[#E3DDD0] mb-8">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block mb-2">
                  Private Stay · Condominium Setting
                </span>
                <p className="text-[13px] sm:text-sm text-[#252824]/85 leading-relaxed">
                  The Wind Haven is a private accommodation unit within SMDC Wind Residences, Tower 4. Shared condominium facilities across the development are managed independently by building administration, not operated by the unit.
                </p>
              </div>
            </Reveal>

            {/* Actions */}
            <Reveal delay={220}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#rooms"
                  onClick={scrollToRooms}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 min-h-[44px]"
                >
                  <span>Explore the Rooms</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#183D32] hover:text-[#102B24] py-2.5 px-1 min-h-[44px] transition-colors"
                >
                  <span>Book Your Stay</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
