"use client";

import { T_Location } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AnimatedLocations({
  locations,
}: {
  locations: Pick<T_Location, "city" | "slug">[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= locations.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      className="
        relative inline-flex
        min-w-[8ch]   /* adjust based on longest city */
        h-[1em]
        align-baseline
      "
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={locations[index].slug}
          initial={{ y: "0.2em", opacity: 0 }}
          animate={{ y: "0em", opacity: 1 }}
          exit={{ y: "-0.2em", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute left-0 top-1 md:top-1 lg:top-2 text-destructive"
        >
          <Link href={`/locations/${locations[index].slug}`}>
            {locations[index].city}
          </Link>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
