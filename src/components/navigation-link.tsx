"use client";
import { useRouter } from "next/navigation";

export function NavigationLink({
  path,
  children,
  className,
}: {
  path: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        router.push(path);
      }}
      className={className}
    >
      {children}
    </div>
  );
}
