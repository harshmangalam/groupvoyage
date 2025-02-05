import type { Metadata } from "next";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { SidebarProvider } from "./providers/sidebar-provider";
import type React from "react"; // Import React

export const metadata: Metadata = {
  title: "Travel Platform Superadmin Dashboard",
  description: "Manage your travel platform with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
