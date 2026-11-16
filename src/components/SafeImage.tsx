import React, { useEffect, useState } from 'react';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  fallbackTitle?: string;
  fallbackNode?: React.ReactNode;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  objectPosition,
  loading = 'lazy',
  fetchPriority = 'auto',
  fallbackTitle = 'The Wind Haven · Tagaytay',
  fallbackNode,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(false);
  }, [src]);

  const resolvedAlt = alt.trim() || fallbackTitle;

  if (hasError || !src) {
    if (fallbackNode) {
      return <>{fallbackNode}</>;
    }

    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#E3DDD0] via-[#EEE9DE] to-[#F7F5EF] text-[#183D32] p-6 text-center ${className}`}
        role="img"
        aria-label={resolvedAlt}
      >
        <ImageOff className="w-6 h-6 mb-2 opacity-60" aria-hidden="true" />
        <span className="font-serif text-sm font-medium">{fallbackTitle}</span>
        <span className="text-[11px] text-[#252824]/60 mt-1">
          Placeholder awaiting authorized photo
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={resolvedAlt}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      style={objectPosition ? { objectPosition } : undefined}
      className={className}
    />
  );
};
