import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import colors from "tailwindcss/colors"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"

const data = [
  { date: "10/10", revenue: 400 },
  { date: "11/10", revenue: 301 },
  { date: "14/10", revenue: 203 },
  { date: "15/10", revenue: 270 },
  { date: "16/11", revenue: 190 },
  { date: "17/12", revenue: 290 }
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
          <CardDescription>Receita diária no periodo</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16}/>
            <YAxis stroke="#888" axisLine={false} tickLine={false} tickFormatter={(value: number)=> value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}/>
            <Line type="linear" dataKey="revenue" strokeWidth={2}  stroke={colors.violet[400]}/>
            <CartesianGrid vertical={false} className="stroke-muted" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}