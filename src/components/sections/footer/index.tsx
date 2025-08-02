import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import Link from "next/link";
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_TAGLINE,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { Logo } from "@/components/logo";
import { ProductHuntBadge } from "@/components/product-hunt-badge";
import { Button } from "@/components/ui/button";
import { InstagramIcon, MailIcon, TwitterIcon } from "lucide-react";
import { DestinationLinks } from "./destination-links";
import { Suspense } from "react";
import { LocationLinks } from "./location-link";

export default async function FooterSection() {
  const quickLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Locations",
      href: "/locations",
    },
    {
      label: "Destinations",
      href: "/destinations",
    },
    {
      label: "Groups",
      href: "/groups",
    },
    {
      label: "Trips",
      href: "/trips",
    },
    {
      label: "Instagram Groups",
      href: "/instagram-profiles",
    },
    {
      label: "Search",
      href: "/search",
    },
  ];

  const connectionLinks = [
    {
      label: "Email",
      href: `mailto:${SITE_EMAIL}`,
      icon: MailIcon,
    },
    {
      label: "Instagram",
      href: SOCIAL_LINKS.INSTAGRAM,
      icon: InstagramIcon,
    },
    {
      label: "Twitter",
      href: SOCIAL_LINKS.X,
      icon: TwitterIcon,
    },
  ];

  return (
    <footer className="w-full bg-background px-4 border-t">
      <Footer className="w-full bg-background px-4 max-w-7xl mx-auto">
        <FooterContent>
          {/* Logo Section */}
          <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <Logo />
            </div>
            <p className="text-muted-foreground">{SITE_TAGLINE}</p>
          </FooterColumn>

          {/* Quick Links Section */}
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Quick Links</h3>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          {/* Locations Section */}
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Trips by Location</h3>
            <Suspense key={"footer-locations"}>
              <LocationLinks />
            </Suspense>
          </FooterColumn>

          {/* Destinations */}
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Destinations</h3>
            <Suspense key={"footer-destinations"}>
              <DestinationLinks />
            </Suspense>
          </FooterColumn>
          {/* Social Media Section */}
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Social</h3>
            <ProductHuntBadge className="w-40 h-10" />
            <div className="flex flex-wrap gap-3">
              {connectionLinks.map((social) => (
                <Button
                  key={social.label}
                  asChild
                  variant={"outline"}
                  size={"icon"}
                  title={social.label}
                  aria-label={social.label}
                >
                  <a href={social.href} target="_blank">
                    <social.icon />
                  </a>
                </Button>
              ))}
            </div>
          </FooterColumn>
        </FooterContent>

        {/* Footer Bottom with Copyright */}
        <FooterBottom className="flex justify-center">
          <div className="text-center text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. Crafted with ❤️ for
            explorers by{" "}
            <a
              href={SOCIAL_LINKS.LINKEDIN}
              className="text-primary hover:underline"
            >
              Harsh Mangalam
            </a>
          </div>
        </FooterBottom>
      </Footer>
    </footer>
  );
}
