import { REPO_LINK, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";
import Link from "next/link";

async function getCurrentYear() {
  return new Date().getFullYear();
}

export async function Copyright() {
  return (
    <div className="flex flex-col gap-1 items-center">
      <div className="text-center text-muted-foreground">
        © <span>Copyright {await getCurrentYear()}</span> {SITE_NAME}. Made by{" "}
        <a href={SOCIAL_LINKS.LINKEDIN} className="text-destructive underline">
          Harsh Mangalam
        </a>{" "}
        – it's free &{" "}
        <a target="_blank" href={REPO_LINK} className="underline text-primary">
          open source
        </a>{" "}
      </div>
      <div className="text-center">
        <Link href="/privacy-policy">Privacy</Link> |{" "}
        <Link href="/terms-of-service">Terms</Link>
      </div>
    </div>
  );
}
