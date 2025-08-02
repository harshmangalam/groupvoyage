import Link from "next/link";
import { Compass, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-destructive/5 px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center">
            <Compass className="h-12 w-12 text-destructive animate-pulse" />
          </div>
          <div className="rounded-lg p-8 pt-12 border border-destructive/20">
            <h1 className="text-6xl font-bold text-destructive mb-2">404</h1>
            <h2 className="text-2xl font-semibold mb-4">
              Lost in the Journey?
            </h2>
            <p className="text-muted-foreground mb-6">
              The adventure you’re looking for isn’t here, but don’t worry — the
              next trip of a lifetime might be just a click away. Head back to
              explore amazing weekend getaways with like-minded explorers.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <MapPin className="h-5 w-5 text-destructive" />
              <span className="text-sm text-muted-foreground">
                Lost coordinates
              </span>
            </div>
            <div className="relative h-40 mb-8 overflow-hidden rounded-md bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-6 gap-1 w-full h-full opacity-10">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="bg-destructive h-full w-full"></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-destructive font-bold text-xl">
                    Map Unavailable
                  </span>
                </div>
              </div>
            </div>
            <Button asChild variant="destructive">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span>Return to Base Camp</span>
              </Link>
            </Button>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Follow us?{" "}
          <a
            target="_blank"
            href={SOCIAL_LINKS.INSTAGRAM}
            className="text-destructive hover:underline"
          >
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
