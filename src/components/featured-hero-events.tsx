"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  IndianRupeeIcon,
  MapPinIcon,
  UserIcon,
} from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { T_EventCard } from "@/lib/types";

export default function FeaturedHeroEvents({
  events,
}: {
  events: T_EventCard[];
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Helper function to safely parse posterUrls and get first image
  const getFirstPosterUrl = (posterUrls: any): string => {
    if (!posterUrls) return '';
    if (Array.isArray(posterUrls)) return posterUrls[0] || '';
    if (typeof posterUrls === 'string') {
      if (posterUrls.trim() === '' || posterUrls === 'null') return '';
      try {
        const parsed = JSON.parse(posterUrls);
        if (Array.isArray(parsed)) {
          return parsed.find(url => url && typeof url === 'string' && url.length > 0) || '';
        }
        return '';
      } catch (error) {
        console.warn('Failed to parse posterUrls JSON:', posterUrls, error);
        return '';
      }
    }
    return '';
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  }, [events.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div
      className="relative h-[600px] w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div className="relative h-full w-full">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${getFirstPosterUrl(event.posterUrls)})` 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full">
              <div className="container mx-auto flex h-full items-end px-4 py-8">
                <div className="max-w-2xl space-y-4">
                  <Badge className="text-lg" variant="secondary">
                    Featured {event.location.city}
                  </Badge>
                  <h1 className="text-4xl font-bold text-white sm:text-4xl md:text-5xl line-clamp-2">
                    {event.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5" />
                      <span>{event.durations}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5" />
                      <span>{event.location.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserIcon className="h-5 w-5" />
                      <span>{event.group.name}</span>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 text-white text-3xl font-bold ">
                    <IndianRupeeIcon className="w-6 h-6" />
                    <span>{event.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {events.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
