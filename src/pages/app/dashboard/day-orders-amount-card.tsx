import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Total Dailyly Orders
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">234</span>
        <p className="text-xs text-muted-foreground">
          Down <span className="text-rose-500 dark:text-rose-400">-4%</span>{" "}
          from Previous Day.
        </p>
      </CardContent>
    </Card>
  );
}
