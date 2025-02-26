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
      <div className="space-y-2">
        <h3 className="text-3xl font-bold">
          <CountUp end={count} />
        </h3>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </Card>
  );
}
