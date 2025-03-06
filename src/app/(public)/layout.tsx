import { Navbar } from "@/components/sections/navbar";
import FooterSection from "@/components/sections/footer";
import { NavigationProgress } from "@/components/navigation-progress";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col justify-between min-h-screen h-full">
      <Navbar />
      <NavigationProgress />
      <main className="flex-1">{children}</main>
      <FooterSection />
    </div>
  );
}
