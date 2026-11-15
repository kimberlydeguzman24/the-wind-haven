import React, { useState, useMemo } from 'react';
import { Expand, Info } from 'lucide-react';
import { GALLERY_ITEMS, GalleryCategory } from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';
import { GalleryLightbox } from './GalleryLightbox';
import { Reveal } from './Reveal';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = [
    'All',
    'Accommodation',
    'Interiors',
    'Amenities',
    'Surroundings',
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const featuredItem = filteredItems[0];
  const gridItems = filteredItems.slice(1);

  return (
    <section
      id="gallery"
      className="bg-[#EEE9DE] py-12 sm:py-20 lg:py-28 border-b border-[#E3DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-7 sm:mb-8">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] mb-2 block">
              PHOTO GALLERY
            </span>
            <h2 className="font-serif heading-section font-medium text-[#252824] tracking-tight mb-3 text-balance">
              A Closer Look at The Wind Haven.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed">
              Browse calm living quarters, kitchenette and dining interiors, shared condominium facilities, and Tagaytay&apos;s surrounding highland scenery.
            </p>
          </Reveal>
        </div>

        {/* Placeholder Integrity Banner */}
        <Reveal delay={120}>
          <div className="mb-7 sm:mb-8 p-4 bg-[#F7F5EF] rounded-lg border border-[#E3DDD0] flex items-start gap-3 text-[13px] text-[#252824]/85">
            <Info className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              <strong>Visual Notice:</strong> Visuals shown here are illustrative hospitality concepts demonstrating the editorial gallery and lightbox experience, structured in a single asset registry for seamless replacement with owner-verified property photography.
            </p>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <div
          className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto snap-x snap-mandatory pb-3 mb-7 sm:mb-8 scrollbar-none"
          role="tablist"
          aria-label="Gallery categories"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className={`snap-start px-4 py-2.5 text-[13px] font-medium rounded-md whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.98] cursor-pointer min-h-[44px] ${
                  isActive
                    ? 'bg-[#183D32] text-white shadow-xs'
                    : 'bg-[#F7F5EF] text-[#252824]/85 hover:bg-white border border-[#E3DDD0]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Mixed-Size Editorial Grid + Lightbox */}
        {featuredItem && (
          <div className="space-y-5 sm:space-y-6">
            <Reveal>
              <button
                type="button"
                onClick={() => setLightboxIndex(0)}
                className="group relative block w-full aspect-[4/3] sm:aspect-[21/9] rounded-xl overflow-hidden border border-[#E3DDD0] bg-[#E3DDD0] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-[#183D32]"
              >
                <SafeImage
                  src={featuredItem.src}
                  alt={featuredItem.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                  fallbackTitle={featuredItem.title}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#102B24]/82 via-[#102B24]/15 to-transparent group-hover:from-[#102B24]/88 transition-colors duration-300"
                  aria-hidden="true"
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between gap-4 text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#EEE9DE] block mb-1">
                      {featuredItem.category} ·{' '}
                      {featuredItem.isPlaceholder
                        ? 'Illustrative Concept'
                        : 'Property Photo'}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium">
                      {featuredItem.title}
                    </h3>
                  </div>
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-xs text-white group-hover:bg-[#183D32] group-hover:scale-105 transition-all duration-200 shrink-0">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </button>
            </Reveal>

            {gridItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {gridItems.map((item, idx) => (
                  <Reveal
                    key={item.id}
                    delay={(idx % 3) * 85}
                    className={
                      idx === 0 && gridItems.length >= 4
                        ? 'sm:col-span-2 lg:col-span-2'
                        : ''
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx + 1)}
                      className={`group relative block w-full ${
                        idx === 0 && gridItems.length >= 4
                          ? 'aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/10]'
                          : 'aspect-[4/3]'
                      } rounded-xl overflow-hidden border border-[#E3DDD0] bg-[#E3DDD0] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-[#183D32] h-full`}
                    >
                      <SafeImage
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        fallbackTitle={item.title}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-[#102B24]/82 via-[#102B24]/15 to-transparent group-hover:from-[#102B24]/88 transition-colors duration-300"
                        aria-hidden="true"
                      />
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between gap-3 text-white">
                        <div className="min-w-0">
                          <span className="text-[11px] uppercase tracking-wider text-[#EEE9DE] block truncate">
                            {item.category}
                          </span>
                          <h4 className="font-serif text-base sm:text-lg font-medium truncate">
                            {item.title}
                          </h4>
                        </div>
                        <span className="p-2 rounded-full bg-white/20 backdrop-blur-xs text-white group-hover:bg-[#183D32] group-hover:scale-105 transition-all duration-200 shrink-0">
                          <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Interactive Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === null ? 0 : prev === 0 ? filteredItems.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === null ? 0 : prev === filteredItems.length - 1 ? 0 : prev + 1
            )
          }
        />
      )}
    </section>
  );
};
