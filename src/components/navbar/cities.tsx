import { db } from "@/db/connection";
import { LocationsCombobox } from "./locations-combobox";

export async function Cities() {
  const locations = await db.query.locationsTable.findMany({
    columns: {
      name: true,
      slug: true,
    },
  });
  return <LocationsCombobox locations={locations} />;
}
