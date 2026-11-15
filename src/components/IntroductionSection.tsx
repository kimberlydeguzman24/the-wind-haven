import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BOOKING_URL } from '../data/windHavenConfig';
import { Reveal } from './Reveal';

export const IntroductionSection: React.FC = () => {
  const pillars = [
    {
      label: 'Location',
      title: 'Tagaytay City',
      detail: 'SMDC Wind Residences, Tower 4 along Aguinaldo Highway',
    },
    {
      label: 'Accommodation',
      title: 'Private-Host Managed',
      detail: 'Calm, welcoming quarters curated for restful Tagaytay escapes',
    },
    {
      label: 'Room Categories',
      title: 'Studio, 1-BR & 2-BR',
      detail: 'Three flexible apartment categories listed on the booking portal',
    },
    {
      label: 'Reservations',
      title: 'Official BookMyStay',
      detail: 'Direct access to live room availability, pricing, and confirmation',
    },
  ];

  return (
    <section
      aria-label="Stay Overview"
      className="bg-[#EEE9DE] border-b border-[#E3DDD0] py-8 lg:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((item, idx) => (
            <Reveal
              key={item.label}
              delay={idx * 75}
              className={`${
                idx !== 0 ? 'lg:border-l lg:border-[#E3DDD0] lg:pl-8' : ''
              }`}
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[#183D32] font-semibold block mb-1">
                {item.label}
              </span>
              <h2 className="font-serif text-lg sm:text-xl font-medium text-[#252824] mb-1">
                {item.title}
              </h2>
              <p className="text-[13px] sm:text-sm text-[#252824]/80 leading-relaxed">
                {item.detail}
              </p>
              {item.label === 'Reservations' && (
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#183D32] hover:text-[#102B24] hover:underline mt-1.5 min-h-[44px] transition-colors"
                >
                  <span>Book Your Stay on BookMyStay</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
