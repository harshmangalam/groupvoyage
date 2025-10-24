import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationProgress } from "@/components/navigation-progress";

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
  description:
    "Discover the best weekend trips from your city. Compare prices, itineraries, and join group trips to amazing destinations.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "GroupVoyage - Compare & Book Weekend Trips",
    description:
      "Discover the best weekend trips from your city. Compare prices, itineraries, and join group trips to amazing destinations.",
    images: [
      {
        url: "logo.png",
        width: 1200,
        height: 630,
        alt: "Group Voyage - Compare & Book Weekend Trips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GroupVoyage - Compare & Book Weekend Trips",
    description:
      "Discover the best weekend trips from your city. Compare prices, itineraries, and join group trips to amazing destinations.",
    images: ["logo.png"],
  },
  other: {
    "google-adsense-account": "ca-pub-8051590553831420",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${poppins.variable} antialiased`}>
        <NuqsAdapter>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>
              <NavigationProgress />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </NuqsAdapter>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
