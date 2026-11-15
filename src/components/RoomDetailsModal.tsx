import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowLeft,
  Info,
} from 'lucide-react';
import { BOOKING_URL, BRAND_CONFIG, RoomCategory } from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';
import { acquireScrollLock } from '../utils/scrollLock';

interface RoomDetailsModalProps {
  room: RoomCategory;
  onClose: () => void;
}

export const RoomDetailsModal: React.FC<RoomDetailsModalProps> = ({ room, onClose }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    setActiveImageIdx(0);
  }, [room.id]);

  // Lock background scroll while modal is open
  useEffect(() => {
    return acquireScrollLock();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        setActiveImageIdx((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIdx((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, room.images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || room.images.length <= 1) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartXRef.current;
    const delta = endX - touchStartXRef.current;
    if (Math.abs(delta) > 45) {
      if (delta > 0) {
        setActiveImageIdx((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
      } else {
        setActiveImageIdx((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
      }
    }
    touchStartXRef.current = null;
  };

  const currentImage = room.images[activeImageIdx] || room.images[0];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#102B24]/80 backdrop-blur-xs flex items-center justify-center p-2.5 sm:p-6 lightbox-backdrop-enter"
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-[#F7F5EF] w-full max-w-4xl rounded-xl shadow-2xl border border-[#E3DDD0] overflow-hidden my-2 sm:my-4 max-h-[92dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="px-4 sm:px-8 py-3 bg-white border-b border-[#E3DDD0] flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={onClose}
              className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#183D32] hover:text-[#102B24] cursor-pointer py-2 px-2 rounded hover:bg-[#EEE9DE] active:scale-[0.98] transition-all duration-200 min-h-[44px]"
            >
              <ArrowLeft
                className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                aria-hidden="true"
              />
              <span>Return to Rooms</span>
            </button>
            <span className="text-[#E3DDD0] hidden sm:inline" aria-hidden="true">
              |
            </span>
            <span className="text-[13px] text-[#252824]/75 truncate hidden sm:inline">
              {BRAND_CONFIG.name} · {room.title}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md hover:bg-[#EEE9DE] active:scale-95 text-[#252824] transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close room details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto overscroll-contain px-4 sm:px-8 py-5 sm:py-6 space-y-6 sm:space-y-8">
          {/* Responsive Image Gallery */}
          <div>
            <div
              className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#E3DDD0] bg-[#EEE9DE] touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div key={currentImage.src} className="w-full h-full lightbox-backdrop-enter">
                <SafeImage
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fallbackTitle={room.title}
                />
              </div>

              {room.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIdx((prev) =>
                        prev === 0 ? room.images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-[#102B24]/65 hover:bg-[#102B24]/90 active:scale-95 text-white backdrop-blur-xs transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Previous room photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIdx((prev) =>
                        prev === room.images.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-[#102B24]/65 hover:bg-[#102B24]/90 active:scale-95 text-white backdrop-blur-xs transition-all duration-200 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label="Next room photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between gap-2 pointer-events-none">
                <span className="bg-[#102B24]/85 backdrop-blur-xs text-[#F7F5EF] text-[11px] px-2.5 sm:px-3 py-1 rounded truncate max-w-[70%]">
                  {currentImage.caption}
                </span>
                <span className="bg-[#102B24]/85 backdrop-blur-xs text-white text-[11px] px-2 sm:px-2.5 py-1 rounded tabular-nums shrink-0">
                  {activeImageIdx + 1} / {room.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-none">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative w-20 sm:w-24 h-14 sm:h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all duration-200 cursor-pointer active:scale-95 ${
                    activeImageIdx === idx
                      ? 'border-[#183D32] opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`View photo ${idx + 1} of ${room.title}`}
                >
                  <SafeImage
                    src={img.src}
                    alt={`Thumbnail preview ${idx + 1} for ${room.title}: ${img.alt}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Room Description & Verified Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#252824]/75 mb-1.5">
                  <span className="font-semibold text-[#183D32] uppercase tracking-wider">
                    {room.code}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{BRAND_CONFIG.property}</span>
                </div>
                <h2
                  id="room-modal-title"
                  className="font-serif heading-sub font-medium text-[#252824]"
                >
                  {room.title}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#252824]/85 leading-relaxed">
                {room.fullDescription}
              </p>

              <div className="pt-4 border-t border-[#E3DDD0]">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#183D32] mb-3">
                  Reference Portal Context
                </h3>
                <ul className="space-y-2.5">
                  {room.verifiedHighlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#252824]/85"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Reference Details */}
            <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-xl border border-[#E3DDD0] space-y-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block mb-1">
                  Unit Information
                </span>
                <h3 className="font-serif text-xl font-medium text-[#252824]">
                  Verify on BookMyStay
                </h3>
              </div>

              <div className="divide-y divide-[#E3DDD0]">
                {room.ownerConfirmationSlots.map((slot) => (
                  <div key={slot.label} className="py-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[13px]">
                    <span className="text-[#252824]/75">{slot.label}</span>
                    <span className="font-medium text-[#252824] text-right">
                      {slot.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-[#F7F5EF] rounded border border-[#E3DDD0] flex items-start gap-2 text-xs text-[#252824]/80 leading-relaxed">
                <Info className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Live availability, rates, bed layouts, and exact unit inclusions are checked and confirmed directly through the official BookMyStay portal.
                </span>
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full py-3.5 px-4 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Book Your Stay</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
