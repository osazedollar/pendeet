'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiUser } from 'react-icons/hi';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function Avatar({ src, alt = 'User avatar', size = 48, className = '' }: AvatarProps) {
  const [hasError, setHasError] = useState(false);

  // If there's no src or image failed to load → show icon
  if (!src || hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center rounded-full overflow-hidden ${className}`}
        style={{ width: size, height: size }}
      >
        <HiUser className="text-gray-400" style={{ fontSize: size * 0.6 }} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      onError={() => setHasError(true)}
      loading="lazy"
    />
  );
}
