import { LocationsCombobox } from "./locations-combobox";
import { db } from "@/db/connection";

export async function Locations() {
  const locations = await db.query.locationsTable.findMany({
    where(fields, operators) {
      return operators.eq(fields.active, true);
    },
    columns: {
      city: true,
      slug: true,
      id: true,
    },
  });
  return <LocationsCombobox locations={locations} />;
}
