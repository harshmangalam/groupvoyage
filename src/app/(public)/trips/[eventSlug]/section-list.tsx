import { Card, CardContent } from "@/components/ui/card";

export function SectionList({
  label,
  data,
  Icon,
}: {
  label: string;
  data: string[];
  Icon: React.ReactNode;
}) {
  if (!data?.length) return null;
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          {label}
        </h3>
        <ul className="space-y-2">
          {data.map((item, index) => (
            <li key={index} className="flex items-start gap-2 ">
              {Icon}
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
