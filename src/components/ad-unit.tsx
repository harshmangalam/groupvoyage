"use client";

import { useEffect } from "react";

export default function AdUnit() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.error("Adsense error", err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-8051590553831420"
      data-ad-slot="5334391534"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
