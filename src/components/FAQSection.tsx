import React, { useState } from 'react';
import { ChevronDown, Info, ArrowUpRight } from 'lucide-react';
import { BOOKING_URL, FAQ_ITEMS } from '../data/windHavenConfig';
import { Reveal } from './Reveal';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-[#F7F5EF] py-12 sm:py-20 lg:py-28 border-b border-[#E3DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
          {/* Left Column: Intro & Reconfirmation Notice */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] mb-2 block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-serif heading-section font-medium text-[#252824] tracking-tight mb-4 text-balance">
                Clear Guidance Before You Arrive.
              </h2>
            </Reveal>

            <Reveal delay={90}>
              <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed mb-6">
                Essential information for planning your stay at The Wind Haven in SMDC Wind Residences, Tower 4.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="p-4 bg-[#EEE9DE] rounded-lg border border-[#E3DDD0] flex items-start gap-3 text-[13px] text-[#252824]/85 mb-6">
                <Info
                  className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="leading-relaxed">
                  <strong>Listing Reconfirmation Note:</strong> Standard check-in (2:00 PM) and check-out (11:00 AM) reflect supplied listing details and should be reconfirmed on BookMyStay prior to arrival.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 min-h-[44px]"
              >
                <span>Check Terms on BookMyStay</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          </div>

          {/* Right Column: Accessible Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              const panelId = `faq-panel-${item.id}`;
              const buttonId = `faq-button-${item.id}`;

              return (
                <Reveal key={item.id} delay={Math.min(idx * 45, 240)}>
                  <div
                    className={`bg-white rounded-xl border transition-colors duration-200 ${
                      isOpen
                        ? 'border-[#183D32]/50 shadow-xs'
                        : 'border-[#E3DDD0] hover:border-[#A8B5A0]'
                    }`}
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between gap-3 sm:gap-4 cursor-pointer rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183D32]"
                      >
                        <div className="min-w-0">
                          <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block mb-1">
                            {item.topic}
                          </span>
                          <span className="font-serif text-[17px] sm:text-xl font-medium text-[#252824] block leading-snug">
                            {item.question}
                          </span>
                        </div>
                        <span
                          className={`mt-1 p-1.5 rounded-full bg-[#F7F5EF] text-[#183D32] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] shrink-0 ${
                            isOpen ? 'rotate-180 bg-[#183D32] text-white' : ''
                          }`}
                          aria-hidden="true"
                        >
                          <ChevronDown className="w-4 h-4" />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? 'grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-[#E3DDD0]/70">
                          <p className="text-[15px] text-[#252824]/85 leading-relaxed mb-3">
                            {item.answer}
                          </p>
                          <span className="text-xs text-[#183D32] font-medium block">
                            {item.statusNote}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
