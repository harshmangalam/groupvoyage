import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import Link from "next/link";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";
import { Logo } from "@/components/logo";
import { ProductHuntBadge } from "@/components/product-hunt-badge";

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
  ];

  const connectionLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/groupvoyageofficial/",
    },
  ];

  const customerSupports = [
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
              <h3 className="text-xl font-bold">
                <Logo />
              </h3>
            </div>
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
            <h3 className="text-md pt-1 font-semibold">Customer Support</h3>
            {customerSupports.map((link) => (
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
            <h3 className="text-md pt-1 font-semibold">Follow Us</h3>
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
        </FooterContent>

        {/* Footer Bottom with Copyright */}
        <FooterBottom>
          <div>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved
          </div>
          <ProductHuntBadge className="w-40 h-10" />
        </FooterBottom>
      </Footer>
    </footer>
  );
}
