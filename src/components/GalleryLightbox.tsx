import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';
import { acquireScrollLock } from '../utils/scrollLock';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentItem = items[currentIndex];
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const releaseScrollLock = acquireScrollLock();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      releaseScrollLock();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || items.length <= 1) return;
    const endX = e.changedTouches[0]?.clientX;
    if (typeof endX !== 'number') return;

    const deltaX = endX - touchStartX.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        onNext();
      } else {
        onPrev();
      }
    }
    touchStartX.current = null;
  };

  if (!currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 h-[100dvh] bg-[#102B24]/95 backdrop-blur-xs flex flex-col justify-between p-4 sm:p-6 lightbox-backdrop-enter"
      role="dialog"
      aria-modal="true"
      aria-label={`Image lightbox: ${currentItem.title}`}
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between text-white max-w-6xl w-full mx-auto shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs text-[#EEE9DE] tabular-nums">
          <span>
            {currentIndex + 1} / {items.length}
          </span>
          <span aria-hidden="true" className="mx-2 text-white/30">
            ·
          </span>
          <span className="text-white font-medium">{currentItem.category}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all duration-150 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#A8B5A0]"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage with Touch Swipe */}
      <div
        className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-3 sm:my-4 min-h-0 touch-pan-y"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.length > 1 && (
          <button
            type="button"
            onClick={onPrev}
            className="hidden sm:flex absolute left-2 z-10 p-3 rounded-full bg-[#102B24]/80 hover:bg-[#183D32] active:scale-95 text-white transition-all duration-150 cursor-pointer min-h-[44px] min-w-[44px] items-center justify-center focus-visible:outline-2 focus-visible:outline-[#A8B5A0]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <div
          key={currentItem.id}
          className="max-h-[60dvh] sm:max-h-[72dvh] w-full flex items-center justify-center overflow-hidden rounded-lg lightbox-backdrop-enter"
        >
          <SafeImage
            src={currentItem.src}
            alt={currentItem.alt}
            loading="eager"
            className="max-h-[60dvh] sm:max-h-[72dvh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
            fallbackTitle={currentItem.title}
          />
        </div>

        {items.length > 1 && (
          <button
            type="button"
            onClick={onNext}
            className="hidden sm:flex absolute right-2 z-10 p-3 rounded-full bg-[#102B24]/80 hover:bg-[#183D32] active:scale-95 text-white transition-all duration-150 cursor-pointer min-h-[44px] min-w-[44px] items-center justify-center focus-visible:outline-2 focus-visible:outline-[#A8B5A0]"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Caption & Mobile Controls Bar */}
      <div
        className="text-center text-white max-w-2xl w-full mx-auto shrink-0 space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h3 className="font-serif text-base sm:text-xl font-medium">
            {currentItem.title}
          </h3>
          {currentItem.isPlaceholder && (
            <p className="text-xs text-[#EEE9DE]/75 mt-1">
              Illustrative hospitality placeholder — replace with owner-authorized unit photography
            </p>
          )}
        </div>

        {items.length > 1 && (
          <div className="sm:hidden flex items-center justify-center gap-3 pt-1">
            <button
              type="button"
              onClick={onPrev}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all cursor-pointer min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 text-xs font-medium focus-visible:outline-2 focus-visible:outline-[#A8B5A0]"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              <span>Prev</span>
            </button>
            <span className="text-[11px] text-white/55">
              Swipe or tap
            </span>
            <button
              type="button"
              onClick={onNext}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white transition-all cursor-pointer min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 text-xs font-medium focus-visible:outline-2 focus-visible:outline-[#A8B5A0]"
              aria-label="Next image"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
