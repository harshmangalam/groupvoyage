"use client";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1280: 3,
  768: 2,
  500: 2,
};

export function ImageGallery({ images }: { images: string[] }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-4"
      columnClassName="bg-clip-padding"
    >
      {images.map((src, i) => (
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
