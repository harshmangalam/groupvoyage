import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function GroupCard() {
  return (
    <Link
      href={`/groups`}
      className="hover:shadow-lg focus:shadow-lg transition-shadow"
    >
      <Card>
        <Image
          src={
            "https://secure.meetupstatic.com/photos/event/b/d/9/a/clean_518628538.webp"
          }
          width={300}
          height={200}
          className="aspect-video object-cover"
          alt=""
          objectFit="contain"
        />
        <CardHeader className="p-2">
          <CardTitle className="text-lg">escape and explore</CardTitle>
          <CardDescription>Hyderabad, India</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
