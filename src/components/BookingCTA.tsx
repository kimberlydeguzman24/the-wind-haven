import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOOKING_URL, IMAGE_ASSETS } from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

export const BookingCTA: React.FC = () => {
  const ctaPhoto = IMAGE_ASSETS.taalLandscape;

  return (
    <section
      aria-label="Final Booking Call to Action"
      className="relative py-16 sm:py-28 lg:py-32 overflow-hidden bg-[#102B24]"
    >
      {/* Background Tagaytay Scenic Image */}
      <div className="absolute inset-0">
        <SafeImage
          src={ctaPhoto.src}
          alt={ctaPhoto.alt}
          loading="lazy"
          className="w-full h-full object-cover"
          fallbackTitle="Tagaytay Escape"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#102B24]/90 via-[#102B24]/65 to-[#102B24]/55"
          aria-hidden="true"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#EEE9DE] font-semibold block mb-3">
            THE WIND HAVEN · TAGAYTAY CITY
          </span>
          <h2 className="font-serif heading-section font-medium tracking-tight mb-4 sm:mb-5 text-balance">
            Make Room for a Little More Rest.
          </h2>
        </Reveal>

        <Reveal delay={90}>
          <p className="text-base sm:text-lg text-[#F7F5EF]/90 leading-relaxed max-w-xl mx-auto mb-8">
            Your next Tagaytay escape could begin here. Explore the accommodation and plan your stay at The Wind Haven.
          </p>
        </Reveal>

        <Reveal delay={170}>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F7F5EF] text-[#252824] hover:bg-white active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 min-h-[48px] shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8B5A0]"
          >
            <span>Book Your Stay</span>
            <ArrowUpRight
              className="w-4 h-4 text-[#183D32] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
};
