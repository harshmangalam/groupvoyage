import { Card, CardContent } from "@/components/ui/card";
import { T_Event_Details, T_GroupCard } from "@/lib/types";
import { PhoneIcon, UserIcon } from "lucide-react";
import { siInstagram } from "simple-icons";

export function GroupDetailsCard({ group }: Pick<T_Event_Details, "group">) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4">Group Information</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <UserIcon className="h-5 w-5" />
            <span>{group.name}</span>
          </div>

          {group.instagram && (
            <div className="flex items-center gap-2">
              <span
                dangerouslySetInnerHTML={{ __html: siInstagram.svg }}
                className="h-4 w-4"
              />
              <a
                target="_blank"
                className="hover:underline"
                href={group.instagram}
              >
                Instagram
              </a>
            </div>
          )}
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-4 w-4" />
            <span>{group.phone}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
