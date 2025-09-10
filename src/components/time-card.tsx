import { TIME_CARD_TIMES } from "@/lib/constant";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function TimeCard({
  onSelect,
}: {
  onSelect: (time: string) => void;
}) {
  return (
    <Card className="w-[90%] max-w-lg max-h-[40%] p-2 shadow-lg bg-white border rounded-lg">
      <div className="flex flex-col gap-2 ">
        {TIME_CARD_TIMES.map((t) => (
          <Button
            key={t}
            variant="outline"
            size="lg"
            className="whitespace-nowrap"
            onClick={() => onSelect(t)}
          >
            {t}
          </Button>
        ))}
      </div>
    </Card>
  );
}
