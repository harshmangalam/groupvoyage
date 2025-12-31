"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Form from "next/form";
import { FormActionButton } from "./form-action-button";

export function SearchForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
    >
      <Form action="/search" className="flex w-full max-w-3xl mx-auto gap-0">
        <div className="w-full relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground z-10" />

          <Input
            name="q"
            type="text"
            placeholder="Plan your next journey...."
            className="
              pl-10 md:pl-12 h-14 text-lg
              bg-background/95 backdrop-blur-sm
              focus-visible:ring-destructive
              rounded-r-none font-semibold
            "
          />
        </div>

        <FormActionButton />
      </Form>
    </motion.div>
  );
}
