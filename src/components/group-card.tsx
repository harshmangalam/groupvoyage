import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function GroupCard() {
  return (
    <Card>
      <Image
        src={
          "https://secure.meetupstatic.com/photos/event/b/d/9/a/clean_518628538.webp"
        }
        width={300}
        height={300}
        className="aspect-square w-full"
        alt=""
      />
      <CardHeader className="p-2">
        <CardTitle className="text-lg">escape and explore</CardTitle>
        <CardDescription>Hyderabad, India</CardDescription>
      </CardHeader>
    </Card>
  );
}
