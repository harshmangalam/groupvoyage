"use client";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1280: 3,
  768: 2,
  500: 2,
};

export function ImageGallery({ images }: { images: string[] }) {
  // Filter out invalid URLs
  const validImages = images.filter(src => src && typeof src === 'string' && src.length > 0);
  
  // If no valid images, show a placeholder
  if (validImages.length === 0) {
    return (
      <div className="w-full p-8 bg-muted rounded-2xl flex items-center justify-center">
        <p className="text-muted-foreground">No images available</p>
      </div>
    );
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-4"
      columnClassName="bg-clip-padding"
    >
      {validImages.map((src, i) => (
        <div
          key={i}
          className="mb-4 rounded-2xl overflow-hidden shadow-md hover:scale-[1.02] duration-500 transition-all"
        >
          <img src={src} alt={`img-${i}`} className="w-full object-cover" />
        </div>
      ))}
    </Masonry>
  );
}
