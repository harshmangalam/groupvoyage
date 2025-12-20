"use client";

import { useEffect, useState } from "react";

export default function AdUnit() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof window === "undefined") return;

    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.warn("Adsense error:", e);
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="w-full min-h-[120px] overflow-x-hidden flex justify-center">
      <ins
        className="adsbygoogle block w-full max-w-full"
        data-ad-client="ca-pub-8051590553831420"
        data-ad-slot="5334391534"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
