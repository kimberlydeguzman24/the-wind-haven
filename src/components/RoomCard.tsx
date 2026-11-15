import React from 'react';
import { ArrowUpRight, CheckCircle2, Eye } from 'lucide-react';
import { BOOKING_URL, RoomCategory } from '../data/windHavenConfig';
import { SafeImage } from './SafeImage';

interface RoomCardProps {
  room: RoomCategory;
  onViewDetails: (room: RoomCategory) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onViewDetails }) => {
  const leadImage = room.images[0];

  return (
    <article className="bg-white border border-[#E3DDD0] rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#183D32]/50 hover:shadow-lg group h-full">
      <div>
        {/* Room Photograph */}
        <button
          type="button"
          onClick={() => onViewDetails(room)}
          className="relative block aspect-[4/3] w-full overflow-hidden bg-[#EEE9DE] cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#183D32]"
          aria-label={`View details for ${room.title}`}
        >
          <SafeImage
            src={leadImage.src}
            alt={leadImage.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            fallbackTitle={room.title}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#102B24]/0 group-hover:bg-[#102B24]/15 transition-colors duration-300"
          />
          <div className="absolute bottom-3 left-3 bg-[#102B24]/85 backdrop-blur-xs text-[#F7F5EF] text-xs tracking-wide px-2.5 py-1 rounded">
            {leadImage.isPlaceholder ? 'Illustrative Preview' : 'Property Photo'} · {room.images.length} Photos
          </div>
        </button>

        {/* Card Content */}
        <div className="p-5 sm:p-6">
          {/* Unboxed typographic metadata */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#252824]/75 mb-2">
            <span className="font-semibold text-[#183D32] uppercase tracking-wider">
              {room.code}
            </span>
            <span aria-hidden="true">·</span>
            <span>{room.subtitle}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#252824] group-hover:text-[#183D32] transition-colors duration-200 mb-2.5">
            {room.title}
          </h3>

          <p className="text-sm text-[#252824]/85 leading-relaxed mb-5">
            {room.shortDescription}
          </p>

          {/* Verified Listing Information */}
          <div className="pt-4 border-t border-[#E3DDD0] space-y-2 mb-5">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#183D32] block">
              Reference Portal Notes
            </span>
            {room.verifiedHighlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[13px] text-[#252824]/85">
                <CheckCircle2
                  className="w-4 h-4 text-[#183D32] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Transparent Placeholder Specs */}
          <div className="bg-[#F7F5EF] p-3.5 rounded-lg border border-[#E3DDD0] space-y-1.5">
            <div className="flex flex-wrap items-center justify-between gap-1 text-xs">
              <span className="text-[#252824]/75">Availability &amp; Rates:</span>
              <span className="text-[#252824] font-medium">
                Verify on BookMyStay
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 flex flex-col sm:flex-row gap-2.5">
        <button
          type="button"
          onClick={() => onViewDetails(room)}
          className="flex-1 py-3 px-4 bg-[#EEE9DE] text-[#252824] hover:bg-[#E3DDD0] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer min-h-[44px] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#183D32]"
        >
          <Eye className="w-3.5 h-3.5" aria-hidden="true" />
          <span>View Details</span>
        </button>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta flex-1 py-3 px-4 bg-[#183D32] text-white hover:bg-[#102B24] active:scale-[0.98] text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 flex items-center justify-center gap-1.5 min-h-[44px] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#A8B5A0]"
        >
          <span>Book Your Stay</span>
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  );
};
