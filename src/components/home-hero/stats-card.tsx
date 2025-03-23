import { CountUp } from "../count-up";
import { Card } from "../ui/card";

export async function StatsCard({
  label,
  count,
}: {
  label: string;
  count: number;
}) {
  return (
    <Card className="py-2 px-4 w-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold">
          <CountUp end={count} />
        </h3>
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
      </div>
    </Card>
  );
}
