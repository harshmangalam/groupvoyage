"use client";
import { SearchForm } from "./search-form";
import { T_Location } from "@/lib/types";
import { motion } from "framer-motion";
import Balancer from "react-wrap-balancer";
import { AnimatedLocations } from "./animated-locations";
import { SITE_DESCRIPTION } from "@/lib/constants";

export function HomeHero({
  locations,
}: {
  locations: Pick<T_Location, "city" | "slug">[];
}) {
  return (
    <div className="pt-12 z-[1] px-4">
      <div className="mx-auto max-w-7xl items-center gap-6 grid grid-cols-1">
        <div className="text-center mb-6 max-w-3xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="tracking-tight text-3xl md:text-4xl lg:text-5xl :text-4xl font-bold text-gray-900 dark:text-white !leading-9 md:!leading-[48px] lg:!leading-[56px]"
          >
            <Balancer>
              Discover weekend group trips from{" "}
              <AnimatedLocations locations={locations} />
            </Balancer>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            <Balancer>{SITE_DESCRIPTION}</Balancer>
          </motion.p>
        </div>

        <div className="max-w-3xl w-full mx-auto">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}
