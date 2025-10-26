import { SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

async function getCurrentYear() {
  return new Date().getFullYear();
}

export async function Copyright() {
  return (
    <div className="text-center text-muted-foreground">
      © <span>Copyright {await getCurrentYear()}</span> {SITE_NAME}. Crafted
      with ❤️ for explorers by{" "}
      <a href={SOCIAL_LINKS.LINKEDIN} className="text-primary hover:underline">
        Harsh Mangalam
      </a>
    </div>
  );
}
