import { Navbar } from "@/components/navbar";
import FooterSection from "@/components/sections/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <FooterSection />
    </div>
  );
}
