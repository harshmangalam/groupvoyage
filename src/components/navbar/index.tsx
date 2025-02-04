import { LocationsCombobox } from "./locations-combobox";
import { Logo } from "../logo";
import { db } from "@/db/connection";

export async function Navbar() {
  const locations = await db.query.locationsTable.findMany({
    columns: {
      name: true,
      slug: true,
    },
  });
  return (
    <nav className="border-b sticky top-0 bg-background z-10">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Logo />
        </div>

        <LocationsCombobox locations={locations} />
      </div>
    </nav>
  );
}
