import React, { useMemo, useState } from 'react';
import {
  MapPin,
  ArrowUpRight,
  Compass,
  Utensils,
  Coffee,
  ShoppingBag,
  Trees,
  Palette,
  Mountain,
  Info,
} from 'lucide-react';
import {
  AttractionItem,
  BOOKING_URL,
  BRAND_CONFIG,
  DESTINATION_IMAGE_ASSETS,
  GOOGLE_MAPS_URL,
  TAGAYTAY_ATTRACTIONS,
  TagaytayCategory,
} from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

const DESTINATION_CATEGORIES: TagaytayCategory[] = [
  'All',
  'Tourist Attractions & Culture',
  'Restaurants & Cafés',
  'Shopping & Leisure',
  'Scenic & Nature',
];

const renderCategoryEmblem = (place: AttractionItem) => {
  const iconClass = 'w-6 h-6 text-[#183D32]';
  switch (place.filterCategory) {
    case 'Restaurants & Cafés':
      return place.displayCategory.toLowerCase().includes('café') ||
        place.displayCategory.toLowerCase().includes('coffee') ? (
        <Coffee className={iconClass} aria-hidden="true" />
      ) : (
        <Utensils className={iconClass} aria-hidden="true" />
      );
    case 'Shopping & Leisure':
      return <ShoppingBag className={iconClass} aria-hidden="true" />;
    case 'Scenic & Nature':
      return <Trees className={iconClass} aria-hidden="true" />;
    case 'Tourist Attractions & Culture':
      return place.displayCategory.includes('Art') ? (
        <Palette className={iconClass} aria-hidden="true" />
      ) : (
        <Mountain className={iconClass} aria-hidden="true" />
      );
  }
};

export const LocationSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<TagaytayCategory>('All');
  const mapPreviewPhoto = DESTINATION_IMAGE_ASSETS.taalLake;

  const filteredPlaces = useMemo(() => {
    if (selectedCategory === 'All') return TAGAYTAY_ATTRACTIONS;
    return TAGAYTAY_ATTRACTIONS.filter(
      (place) => place.filterCategory === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="location"
      className="bg-[#F7F5EF] py-12 sm:py-20 lg:py-28 border-b border-[#E3DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Location Split Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-stretch mb-12 sm:mb-16">
          {/* Left: Address & Directions CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] mb-2 block">
                LOCATION &amp; DIRECTIONS
              </span>
              <h2 className="font-serif heading-section font-medium text-[#252824] tracking-tight mb-4 text-balance">
                Your Tagaytay Stay Starts Here.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed mb-6">
                Positioned along Aguinaldo Highway at SMDC Wind Residences, Tower 4, The Wind Haven offers straightforward access to Tagaytay&apos;s dining streets, cafés, shopping stops, and ridge viewpoints.
              </p>
            </Reveal>

            {/* Official Property Address Block */}
            <Reveal delay={140}>
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E3DDD0] mb-6 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EEE9DE] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#183D32]" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block mb-1">
                      Property Location
                    </span>
                    <address className="not-italic text-sm text-[#252824] leading-relaxed font-medium">
                      {BRAND_CONFIG.addressLine1}
                      <br />
                      {BRAND_CONFIG.addressLine2}
                      <br />
                      {BRAND_CONFIG.addressLine3}
                    </address>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={190}>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 min-h-[44px]"
                >
                  <span>Get Directions on Maps</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-1.5 px-5 py-3.5 bg-white text-[#183D32] border border-[#E3DDD0] hover:border-[#183D32]/50 active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 min-h-[44px]"
                >
                  <span>Book Your Stay</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Styled Interactive Map Reference */}
          <Reveal delay={100} className="lg:col-span-7">
            <div className="group relative h-full min-h-[300px] sm:min-h-[400px] rounded-xl overflow-hidden border border-[#E3DDD0] bg-[#EEE9DE]">
              <SafeImage
                src={mapPreviewPhoto.src}
                alt={mapPreviewPhoto.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                fallbackTitle="Tagaytay City · Aguinaldo Highway"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#102B24]/90 via-[#102B24]/30 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-7 sm:left-7 sm:right-7 bg-[#F7F5EF]/96 backdrop-blur-xs p-3.5 sm:p-5 rounded-lg border border-[#E3DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#183D32] mb-1">
                    <Compass className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>Map Pin Reference</span>
                  </div>
                  <p className="font-serif text-[15px] sm:text-base font-medium text-[#252824]">
                    SMDC Wind Residences, Tower 4 · Aguinaldo Highway
                  </p>
                  <p className="text-xs text-[#252824]/75 mt-0.5">
                    Open the verified pin directly in Google Maps for live routes.
                  </p>
                </div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn px-4 py-2.5 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <span>View Map</span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Explore Tagaytay Destination Guide */}
        <div>
          <Reveal>
            <div className="max-w-2xl pb-5 mb-6 border-b border-[#E3DDD0]">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] block mb-2">
                EXPLORE THE NEIGHBORHOOD
              </span>
              <h3 className="font-serif heading-sub font-medium text-[#252824] tracking-tight mb-3 text-balance">
                Discover Tagaytay, Your Way.
              </h3>
              <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed">
                From scenic viewpoints to cozy cafés, restaurants, and local attractions, explore places that can make your Tagaytay visit even more memorable.
              </p>
            </div>
          </Reveal>

          {/* Category Filter Tabs */}
          <div
            className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto snap-x snap-mandatory pb-3 mb-7 sm:mb-8 scrollbar-none"
            role="tablist"
            aria-label="Explore Tagaytay categories"
          >
            {DESTINATION_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`snap-start px-4 py-2.5 text-[13px] font-medium rounded-md whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.98] cursor-pointer min-h-[44px] ${
                    isActive
                      ? 'bg-[#183D32] text-white shadow-xs'
                      : 'bg-white text-[#252824]/85 hover:bg-[#EEE9DE] border border-[#E3DDD0]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* 12 Destination Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredPlaces.map((place, idx) => (
              <Reveal key={place.id} delay={(idx % 3) * 70} className="h-full">
                <article className="group bg-white border border-[#E3DDD0] hover:border-[#183D32]/40 hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-xl overflow-hidden flex flex-col h-full">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-[#EEE9DE]">
                    <SafeImage
                      src={place.image}
                      alt={place.imageAlt}
                      objectPosition={place.imageObjectPosition}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      fallbackTitle={place.name}
                      fallbackNode={
                        <div
                          className="w-full h-full bg-gradient-to-br from-[#F7F5EF] via-[#EEE9DE] to-[#E2E6DC] flex flex-col items-center justify-center p-5 text-center border-b border-[#E3DDD0]"
                          role="img"
                          aria-label={`${place.name} — ${place.displayCategory}`}
                        >
                          <div className="w-12 h-12 rounded-full bg-white/90 border border-[#E3DDD0] flex items-center justify-center mb-2.5 shadow-2xs">
                            {renderCategoryEmblem(place)}
                          </div>
                          <span className="font-serif text-base font-medium text-[#252824]">
                            {place.name}
                          </span>
                          <span className="text-xs text-[#252824]/70 mt-1">
                            {place.displayCategory}
                          </span>
                        </div>
                      }
                    />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block mb-1">
                        {place.displayCategory}
                      </span>
                      <h4 className="font-serif text-xl font-medium text-[#252824] group-hover:text-[#183D32] transition-colors mb-2">
                        {place.name}
                      </h4>
                      <p className="text-[13px] text-[#252824]/80 leading-relaxed">
                        {place.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-[#E3DDD0] flex items-center justify-between gap-2">
                      <a
                        href={place.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 py-1.5 text-xs font-semibold text-[#183D32] hover:text-[#102B24] transition-colors min-h-[44px]"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#183D32]" aria-hidden="true" />
                        <span>Explore Destination</span>
                        <ArrowUpRight
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Mandatory Destination Disclosures */}
          <Reveal delay={120}>
            <div className="mt-8 sm:mt-10 p-4 sm:p-5 bg-[#EEE9DE] rounded-xl border border-[#E3DDD0] space-y-2 text-[13px] text-[#252824]/85 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <Info
                  className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p>{BRAND_CONFIG.destinationDisclosure}</p>
              </div>
              <p className="sm:pl-6.5 text-xs text-[#252824]/75">
                {BRAND_CONFIG.destinationFooterNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
