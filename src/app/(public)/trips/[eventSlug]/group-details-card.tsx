import { Card, CardContent } from "@/components/ui/card";
import { T_Group } from "@/lib/types";
import { PhoneIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { siInstagram } from "simple-icons";

export function GroupDetailsCard({
  instagram,
  name,
  phone,
  slug,
}: Pick<T_Group, "instagram" | "phone" | "name" | "slug">) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4">Group Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            <Link className="hover:underline" href={`/groups/${slug}`}>
              {name}
            </Link>
          </div>

          {instagram && (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                dangerouslySetInnerHTML={{ __html: siInstagram.svg }}
              />
              <a target="_blank" className="hover:underline" href={instagram}>
                Instagram
              </a>
            </div>
          )}
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4" />
            <span>{phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
