
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GalleryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl relative group">
      <div 
        className={cn(
          "absolute inset-0 bg-gray-200 animate-pulse-subtle",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-all duration-500",
          "group-hover:scale-105 group-hover:brightness-110",
          !isLoaded && "opacity-0",
          isLoaded && "opacity-100",
          className
        )}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
    </div>
  );
};

export default GalleryImage;
