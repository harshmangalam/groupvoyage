"use client";
import { useEffect, useRef } from "react";

export const TripDetails = ({ details }: { details: string }) => {
  const contentRef = useRef<HTMLDivElement | null>(null); // Explicitly type the ref

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.querySelectorAll(".dark").forEach((el) => {
        el.classList.remove("dark"); // Remove the 'dark' class
      });
    }
  }, [details]); // Runs whenever details changes

  return (
    <div
      ref={contentRef}
      dangerouslySetInnerHTML={{ __html: details }}
      className="leading-relaxed dark:[&_*]:!text-secondary-foreground dark:[&_*]:!bg-transparent [&_*]:!bg-transparent [&_*]:!text-secondary-foreground"
    />
  );
};
