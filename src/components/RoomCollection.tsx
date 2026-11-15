import React, { useRef, useState } from 'react';
import {
  ArrowUpRight,
  Info,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Expand,
} from 'lucide-react';
import {
  BOOKING_URL,
  BRAND_CONFIG,
  ROOM_CATEGORIES,
  RoomCategory,
} from '../data/windHavenConfig';
import { RoomCard } from './RoomCard';
import { SafeImage } from './SafeImage';
import { Reveal } from './Reveal';

interface RoomCollectionProps {
  onSelectRoom: (room: RoomCategory) => void;
}

export const RoomCollection: React.FC<RoomCollectionProps> = ({
  onSelectRoom,
}) => {
  const [activeRoomId, setActiveRoomId] = useState<string>(
    ROOM_CATEGORIES[0]?.id ?? 'studio'
  );
  const [activePhotoIdx, setActivePhotoIdx] = useState<number>(0);
  const touchStartXRef = useRef<number | null>(null);

  const activeRoom =
    ROOM_CATEGORIES.find((r) => r.id === activeRoomId) ?? ROOM_CATEGORIES[0];
  const activePhoto =
    activeRoom.images[activePhotoIdx] ?? activeRoom.images[0];

  const handleRoomSwitch = (roomId: string) => {
    if (roomId === activeRoomId) return;
    setActiveRoomId(roomId);
    setActivePhotoIdx(0);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || activeRoom.images.length <= 1) return;
    const endX = e.changedTouches[0]?.clientX;
    if (typeof endX !== 'number') return;
    const delta = endX - touchStartXRef.current;
    if (Math.abs(delta) > 45) {
      if (delta > 0) {
        setActivePhotoIdx((prev) =>
          prev === 0 ? activeRoom.images.length - 1 : prev - 1
        );
      } else {
        setActivePhotoIdx((prev) =>
          prev === activeRoom.images.length - 1 ? 0 : prev + 1
        );
      }
    }
    touchStartXRef.current = null;
  };

  return (
    <section
      id="rooms"
      className="bg-[#EEE9DE] py-12 sm:py-20 lg:py-28 border-b border-[#E3DDD0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#183D32] mb-2 block">
                THE STAY · ROOM OPTIONS
              </span>
              <h2 className="font-serif heading-section font-medium text-[#252824] tracking-tight mb-3 text-balance">
                Find Your Space to Unwind.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed">
                Explore accommodation categories shown on the reference booking portal for {BRAND_CONFIG.property}. Proceed directly to BookMyStay to verify unit availability, active inventory, and live rates.
              </p>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 shrink-0 self-start lg:self-auto min-h-[44px]"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>

        {/* Illustrative Data Integrity Note */}
        <Reveal delay={100}>
          <div className="mb-7 sm:mb-8 p-4 bg-[#F7F5EF] rounded-lg border border-[#E3DDD0] flex items-start gap-3 text-[13px] text-[#252824]/85">
            <Info
              className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="leading-relaxed">
              <strong>Reference Portal Verification Notice:</strong> Categories shown below (Studio, One-Bedroom Apartment, Two-Bedroom Apartment) appear on the reference BookMyStay portal and remain options to verify directly for The Wind Haven. No unconfirmed nightly rates, square footage, guest capacity, or bed configurations are invented here.
            </p>
          </div>
        </Reveal>

        {/* Interactive Room Explorer Showcase */}
        <Reveal delay={120} className="mb-12 sm:mb-14">
          <div className="bg-white rounded-2xl border border-[#E3DDD0] overflow-hidden shadow-xs">
            {/* Room Category Navigation Tabs */}
            <div
              role="tablist"
              aria-label="Room categories explorer"
              className="flex items-stretch overflow-x-auto snap-x snap-mandatory border-b border-[#E3DDD0] bg-[#F7F5EF] scrollbar-none"
            >
              {ROOM_CATEGORIES.map((room) => {
                const isSelected = room.id === activeRoom.id;
                return (
                  <button
                    key={room.id}
                    type="button"
                    role="tab"
                    id={`room-tab-${room.id}`}
                    aria-selected={isSelected}
                    aria-controls={`room-panel-${room.id}`}
                    onClick={() => handleRoomSwitch(room.id)}
                    className={`flex-1 min-w-[144px] sm:min-w-[180px] snap-start px-3.5 sm:px-5 py-3.5 sm:py-4 text-left border-b-2 transition-all duration-200 cursor-pointer min-h-[58px] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#183D32] ${
                      isSelected
                        ? 'border-[#183D32] bg-white text-[#252824]'
                        : 'border-transparent text-[#252824]/75 hover:text-[#252824] hover:bg-white/60'
                    }`}
                  >
                    <span className="text-[11px] uppercase tracking-[0.14em] sm:tracking-[0.16em] font-semibold text-[#183D32] block mb-0.5">
                      {room.code}
                    </span>
                    <span className="font-serif text-[15px] sm:text-lg font-medium block leading-snug">
                      {room.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Room Panel */}
            <div
              key={activeRoom.id}
              role="tabpanel"
              id={`room-panel-${activeRoom.id}`}
              aria-labelledby={`room-tab-${activeRoom.id}`}
              className="p-4 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 lg:gap-10 items-start lightbox-backdrop-enter"
            >
              {/* Left: Room Image Gallery */}
              <div className="lg:col-span-7 space-y-3">
                <div
                  className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E3DDD0] bg-[#EEE9DE] touch-pan-y"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    key={activePhoto.src}
                    className="w-full h-full lightbox-backdrop-enter"
                  >
                    <SafeImage
                      src={activePhoto.src}
                      alt={activePhoto.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                      fallbackTitle={activeRoom.title}
                    />
                  </div>

                  {activeRoom.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setActivePhotoIdx((prev) =>
                            prev === 0 ? activeRoom.images.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-[#102B24]/70 hover:bg-[#102B24]/90 active:scale-95 text-white backdrop-blur-xs transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label={`Previous ${activeRoom.title} photo`}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActivePhotoIdx((prev) =>
                            prev === activeRoom.images.length - 1 ? 0 : prev + 1
                          )
                        }
                        className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-[#102B24]/70 hover:bg-[#102B24]/90 active:scale-95 text-white backdrop-blur-xs transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                        aria-label={`Next ${activeRoom.title} photo`}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="bg-[#102B24]/85 backdrop-blur-xs text-[#F7F5EF] text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 rounded truncate max-w-[70%]">
                      {activePhoto.caption}
                    </span>
                    <span className="bg-[#102B24]/85 backdrop-blur-xs text-white text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded tabular-nums shrink-0">
                      {activePhotoIdx + 1} / {activeRoom.images.length}
                    </span>
                  </div>
                </div>

                {/* Gallery Thumbnails + Full Modal Trigger */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
                    {activeRoom.images.map((img, idx) => (
                      <button
                        key={img.src + idx}
                        type="button"
                        onClick={() => setActivePhotoIdx(idx)}
                        className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-200 cursor-pointer active:scale-95 ${
                          activePhotoIdx === idx
                            ? 'border-[#183D32] opacity-100'
                            : 'border-transparent opacity-65 hover:opacity-100'
                        }`}
                        aria-label={`Select photo ${idx + 1} for ${activeRoom.title}`}
                      >
                        <SafeImage
                          src={img.src}
                          alt={`Thumbnail preview ${idx + 1} for ${activeRoom.title}: ${img.alt}`}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectRoom(activeRoom)}
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#183D32] hover:bg-[#EEE9DE] rounded transition-colors cursor-pointer shrink-0 min-h-[44px]"
                  >
                    <Expand className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Open Full View</span>
                  </button>
                </div>
              </div>

              {/* Right: Verified Room Details & Book This Room CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#252824]/75 mb-1.5">
                    <span className="font-semibold text-[#183D32] uppercase tracking-wider">
                      {activeRoom.code}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{activeRoom.subtitle}</span>
                  </div>
                  <h3 className="font-serif heading-sub font-medium text-[#252824] mb-3">
                    {activeRoom.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-[#252824]/85 leading-relaxed mb-5">
                    {activeRoom.fullDescription}
                  </p>

                  {/* Verified Highlights */}
                  <div className="pt-4 border-t border-[#E3DDD0] space-y-2.5 mb-5">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block">
                      Reference Portal Context
                    </span>
                    {activeRoom.verifiedHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-[13px] text-[#252824]/85"
                      >
                        <CheckCircle2
                          className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Owner Confirmation Slots */}
                  <div className="bg-[#F7F5EF] rounded-lg border border-[#E3DDD0] px-4 py-1 divide-y divide-[#E3DDD0]">
                    {activeRoom.ownerConfirmationSlots.map((slot) => (
                      <div
                        key={slot.label}
                        className="py-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[13px]"
                      >
                        <span className="text-[#252824]/75">{slot.label}</span>
                        <span className="font-medium text-[#252824] text-right">
                          {slot.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 py-3.5 px-5 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 inline-flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <span>Book Your Stay</span>
                    <ArrowUpRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => onSelectRoom(activeRoom)}
                    className="py-3.5 px-4 bg-[#EEE9DE] text-[#252824] hover:bg-[#E3DDD0] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 cursor-pointer min-h-[44px]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Quick Side-by-Side Comparison Grid */}
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#252824]">
            Compare All Room Categories
          </h3>
          <span className="text-xs text-[#252824]/65 hidden sm:inline">
            Select any suite to open full gallery details
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ROOM_CATEGORIES.map((room, idx) => (
            <Reveal key={room.id} delay={idx * 110} className="h-full">
              <RoomCard room={room} onViewDetails={onSelectRoom} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
