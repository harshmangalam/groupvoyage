import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationProgress } from "@/components/navigation-progress";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import JsonLd from "@/components/json-ld";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the weights you need
  variable: "--font-poppins", // CSS variable for use in styles
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${SITE_NAME}`,
    default: SITE_NAME,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "logo.webp",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["logo.webp"],
  },
  other: {
    "google-adsense-account": "ca-pub-8051590553831420",
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@type": ["WebSite", "Organization"],
  name: "GroupVoyage",
  url: "https://groupvoyage.in",
  logo: "https://groupvoyage.in/logo.webp",

  // your global search
  potentialAction: {
    "@type": "SearchAction",
    target: "https://groupvoyage.in/groups?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },

  // social accounts
  sameAs: [SOCIAL_LINKS.GITHUB, SOCIAL_LINKS.INSTAGRAM, SOCIAL_LINKS.LINKEDIN],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${poppins.variable} antialiased`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8051590553831420"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <JsonLd data={globalSchema} />
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense>
              <NavigationProgress />
            </Suspense>
            <TooltipProvider>
              {children}
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </NuqsAdapter>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
