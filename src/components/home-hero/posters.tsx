import { getRandomPosters } from "@/actions/common";
import Image from "next/image";

export async function Posters() {
  const posters = await getRandomPosters();
  return (
    <div className="hidden z-20 gap-8 overflow-hidden lg:flex flex-col">
      {posters.map((image, index) => (
        <div key={`col1-${index}`} className="w-full">
          <Image
            src={image || ""}
            alt={`Poster ${index + 1}`}
            width={600}
            height={600}
            className={`object-cover w-full h-auto aspect-video ${
              index === 0
                ? "rounded-t-none rounded-b-2xl"
                : index === posters.length - 1
                ? "rounded-b-none rounded-t-2xl"
                : "rounded-2xl"
            } `}
            priority={index === 1}
            style={{
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      ))}
    </div>
  );
}
