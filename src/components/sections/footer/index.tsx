import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import Link from "next/link";
import { INSTAGRAM, SITE_EMAIL, SITE_NAME, X } from "@/lib/constants";
import { Logo } from "@/components/logo";
import { ProductHuntBadge } from "@/components/product-hunt-badge";
import Image from "next/image";
import { LogoImg } from "@/components/logo-img";

export default function FooterSection() {
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
  ];
  const locations = [
    {
      label: "Trips from Bangalore",
      href: "/locations/in-bangalore",
    },
    {
      label: "Trips from Hyderabad",
      href: "/locations/in-hyderabad",
    },
    {
      label: "Trips from Pune",
      href: "/locations/in-pune",
    },
    {
      label: "Trips from Mumbai",
      href: "/locations/in-mumbai",
    },
    {
      label: "Trips from Delhi",
      href: "/locations/in-delhi",
    },
  ];

  const connectionLinks = [
    {
      label: "Email",
      href: `mailto:${SITE_EMAIL}`,
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
            <p className="text-muted-foreground">
              Find local groups, compare prices, and join budget-friendly
              weekend trips
            </p>
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
            {locations.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          {/* Customer Support */}
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Contacts</h3>
            {connectionLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                className="text-sm text-muted-foreground hover:underline"
              >
                {link.label}
              </a>
            ))}
          </FooterColumn>
          {/* Social Media Section */}
          <FooterColumn>
            <ProductHuntBadge className="w-40 h-10" />
          </FooterColumn>
        </FooterContent>

        {/* Footer Bottom with Copyright */}
        <FooterBottom className="flex justify-center">
          <div className="text-center">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved
          </div>
        </FooterBottom>
      </Footer>
    </footer>
  );
}
