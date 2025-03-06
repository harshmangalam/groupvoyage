import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { siFacebook, siInstagram, siYoutube, siWhatsapp } from "simple-icons";
import { PhoneIcon, MailIcon } from "lucide-react"; // Using FontAwesome for phone

type LinkItem = {
  svg?: string; // Optional because `tel` uses `Icon` instead
  Icon?: React.ReactElement; // Assuming `PhoneIcon` is a React component
  label: string;
};

const linkMap: Record<string, LinkItem> = {
  facebook: { svg: siFacebook.svg, label: "Facebook" },
  instagram: { svg: siInstagram.svg, label: "Instagram" },
  youtube: { svg: siYoutube.svg, label: "YouTube" },
  email: { Icon: <MailIcon />, label: "Email" },
  whatsapp: { svg: siWhatsapp.svg, label: "WhatsApp" },
  tel: { Icon: <PhoneIcon />, label: "Phone" },
} as const;

type Label =
  | "facebook"
  | "instagram"
  | "youtube"
  | "email"
  | "whatsapp"
  | "tel";

export function SocialIconBtn({
  url,
  slug,
}: {
  url?: string | null;
  slug?: Label;
}) {
  if (!url || !slug) return null;
  const socialMedia = linkMap[slug];

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size="icon" variant="outline" asChild>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {socialMedia.Icon ? socialMedia.Icon : null}
            {socialMedia.svg ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-current"
                dangerouslySetInnerHTML={{ __html: socialMedia.svg }}
              />
            ) : null}
          </a>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{socialMedia.label}</p>
      </TooltipContent>
    </Tooltip>
  );
}
