import { Navbar } from "@/components/sections/navbar";
import FooterSection from "@/components/sections/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between min-h-screen h-full">
      <Navbar />
      <main className="flex-1">{children}</main>
      <FooterSection />
    </div>
  );
}

export const dynamic = "force-dynamic";
