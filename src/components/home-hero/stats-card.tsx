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
    <Card className="p-4 w-full">
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold">
          <CountUp end={count} />
        </h3>
        <p className="font-medium text-muted-foreground">{label}</p>
      </div>
    </Card>
  );
}
