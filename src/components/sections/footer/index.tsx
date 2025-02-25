import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constatnts";
import { Logo } from "@/components/logo";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <Footer className="w-full bg-background px-4 max-w-7xl mx-auto">
        <FooterContent>
          <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold">
                <Logo />
              </h3>
            </div>
          </FooterColumn>
          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Locations</h3>
            <Link
              href={`/in-bangalore`}
              className="text-sm text-muted-foreground"
            >
              Bangalore
            </Link>
            <Link
              href={`/in-hyderabad`}
              className="text-sm text-muted-foreground"
            >
              Hyderabad
            </Link>
          </FooterColumn>

          <FooterColumn>
            <h3 className="text-md pt-1 font-semibold">Social Media</h3>
            <a href="" className="text-sm text-muted-foreground">
              Instagram
            </a>
            <a href="" className="text-sm text-muted-foreground">
              Github
            </a>
          </FooterColumn>
        </FooterContent>
        <FooterBottom>
          <div>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved
          </div>
        </FooterBottom>
      </Footer>
    </footer>
  );
}
