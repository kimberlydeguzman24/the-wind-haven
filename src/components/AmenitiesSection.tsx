import React from 'react';
import {
  Wifi,
  Wind,
  Utensils,
  Sofa,
  Bath,
  Waves,
  Trees,
  Trophy,
  Car,
  ArrowUpDown,
  ShieldCheck,
  Info,
} from 'lucide-react';
import {
  AmenityItem,
  BRAND_CONFIG,
  IMAGE_ASSETS,
  SHARED_FACILITIES,
  UNIT_AMENITIES,
} from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

const renderAmenityIcon = (name: AmenityItem['iconName']) => {
  const props = { className: 'w-4 h-4 text-[#183D32]', 'aria-hidden': true as const };
  switch (name) {
    case 'wifi':
      return <Wifi {...props} />;
    case 'wind':
      return <Wind {...props} />;
    case 'utensils':
      return <Utensils {...props} />;
    case 'sofa':
      return <Sofa {...props} />;
    case 'bath':
      return <Bath {...props} />;
    case 'waves':
      return <Waves {...props} />;
    case 'trees':
      return <Trees {...props} />;
    case 'trophy':
      return <Trophy {...props} />;
    case 'car':
      return <Car {...props} />;
    case 'arrow-up-down':
      return <ArrowUpDown {...props} />;
    case 'shield':
      return <ShieldCheck {...props} />;
  }
};

export const AmenitiesSection: React.FC = () => {
  const facilityPhoto = IMAGE_ASSETS.poolGarden;

  return (
    <section
      id="amenities"
      className="bg-[#F7F5EF] py-12 sm:py-20 lg:py-28 border-b border-[#E3DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-stretch mb-12 sm:mb-14">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] mb-2 block">
                AMENITIES &amp; COMFORT
              </span>
              <h2 className="font-serif heading-section font-medium text-[#252824] tracking-tight mb-4 text-balance">
                Everything You Need for a Comfortable Stay.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed mb-6">
                Private unit comforts support an unhurried stay, while shared condominium facilities within SMDC Wind Residences add open spaces to unwind during your visit.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="p-4 bg-[#EEE9DE] rounded-lg border border-[#E3DDD0] flex items-start gap-2.5 text-[13px] text-[#252824]/85 leading-relaxed">
                <Info className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BRAND_CONFIG.amenitiesDisclosure}</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="lg:col-span-6">
            <div className="group relative h-full aspect-[4/3] lg:aspect-auto lg:min-h-[380px] rounded-xl overflow-hidden border border-[#E3DDD0] bg-[#EEE9DE]">
              <SafeImage
                src={facilityPhoto.src}
                alt={facilityPhoto.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                fallbackTitle="Condominium Pool & Garden"
              />
              {!facilityPhoto.isActualPropertyPhoto && (
                <div className="absolute bottom-3 left-3 bg-[#102B24]/85 backdrop-blur-xs text-[#F7F5EF] text-xs px-3 py-1 rounded">
                  {facilityPhoto.statusLabel} · Shared Grounds
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Part A: Private Accommodation Features */}
        <div className="mb-12 sm:mb-14">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-[#E3DDD0]">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block">
                  01 · Private Accommodation Features
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#252824]">
                  Inside the Private Unit (Subject to Confirmation)
                </h3>
              </div>
              <span className="text-xs text-[#252824]/75">
                Confirm exact unit inclusions on BookMyStay
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {UNIT_AMENITIES.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 60}>
                <div className="bg-white p-4 sm:p-5 rounded-lg border border-[#E3DDD0] hover:border-[#183D32]/40 transition-colors duration-200 flex items-start gap-3.5 sm:gap-4 h-full">
                  <div className="w-10 h-10 rounded-lg bg-[#EEE9DE] flex items-center justify-center shrink-0">
                    {renderAmenityIcon(item.iconName)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-base font-medium text-[#252824]">
                      {item.name}
                    </h4>
                    <p className="text-[13px] text-[#252824]/80 leading-relaxed mt-1">
                      {item.description}
                    </p>
                    {item.note && (
                      <span className="text-xs text-[#183D32] font-medium block mt-1.5">
                        {item.note}
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Part B: Shared Condominium Facilities */}
        <div>
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-[#E3DDD0]">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block">
                  02 · Shared Condominium Facilities
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#252824]">
                  SMDC Wind Residences Property Grounds
                </h3>
              </div>
              <span className="text-xs text-[#252824]/75">
                Managed by condominium administration · Fees &amp; hours may apply
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SHARED_FACILITIES.map((item, idx) => (
              <Reveal key={item.id} delay={(idx % 3) * 55}>
                <div className="bg-[#EEE9DE]/75 p-4 sm:p-5 rounded-lg border border-[#E3DDD0] hover:border-[#183D32]/40 hover:bg-[#EEE9DE] transition-colors duration-200 flex items-start gap-3.5 sm:gap-4 h-full">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E3DDD0] flex items-center justify-center shrink-0">
                    {renderAmenityIcon(item.iconName)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-base font-medium text-[#252824]">
                      {item.name}
                    </h4>
                    <p className="text-[13px] text-[#252824]/80 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
