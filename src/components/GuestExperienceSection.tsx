import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  ACCOMMODATION_EXPERIENCE_PILLARS,
  BOOKING_URL,
} from '../data/windHavenConfig';
import { Reveal } from './Reveal';

export const GuestExperienceSection: React.FC = () => {
  return (
    <section
      id="guest-experience"
      className="bg-[#EEE9DE] py-12 sm:py-20 lg:py-28 border-b border-[#E3DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] mb-2 block">
              THE STAY EXPERIENCE
            </span>
            <h2 className="font-serif heading-section font-medium text-[#252824] tracking-tight mb-3 text-balance">
              Experiences Worth Remembering.
            </h2>
            <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed">
              Designed around the simple pleasure of an unhurried Tagaytay stay—quiet mornings, practical indoor comforts, and a location that makes exploring effortless.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#183D32] hover:text-[#102B24] min-h-[44px] transition-colors shrink-0"
            >
              <span>View Official Listing on BookMyStay</span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        {/* Neutral Accommodation Experience Pillars (No fabricated testimonials or star ratings) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACCOMMODATION_EXPERIENCE_PILLARS.map((pillar, idx) => (
            <Reveal key={pillar.id} delay={idx * 85} className="h-full">
              <div className="h-full p-6 sm:p-7 rounded-xl bg-[#F7F5EF] border border-[#E3DDD0] hover:border-[#183D32]/40 transition-colors duration-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block mb-3">
                    {pillar.eyebrow}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#252824] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[15px] text-[#252824]/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
