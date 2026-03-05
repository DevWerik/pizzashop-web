import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export function MonthOrdersAmountCard() {
    return (


        <Card>
            <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
                <CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="space-y-1">
                <span className="text-2xl font-bold tracking-tighter">123</span>
                <p className="text-sm text-muted-foreground">
                    <span className="text-emerald-500 dark:text-emerald-400">+25%</span> em relação ao mês passado
                </p>
            </CardContent>
        </Card>)
}