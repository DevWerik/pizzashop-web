import { Button } from "@/components/ui/button";
import { DialogTrigger, Dialog  } from "@/components/ui/dialog";

import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

// export interface OrderTableRowProps {}

export function OrderTableRow() {
  return (
        <TableRow>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                    <Button variant="outline" size="xs">
                      <Search className="h3 w-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                    </DialogTrigger>
                    <OrderDetails />
                    </Dialog>
                  </TableCell>
                  <TableCell className="font-mono text-xs font-medium">
                    wskerf98wsnfg34
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    Há 15 minutos
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell className="font-medium">João da Silva</TableCell>
                  <TableCell className="font-medium">R$ 59,90</TableCell>
                  <TableCell>
                    <Button variant="outline" size="xs">
                      <ArrowRight className="mr-2 h-3 w-3" />
                      Aprovar
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="xs">
                      <X className="mr-2 h-3 w-3" />
                      Cancelar
                    </Button>
                  </TableCell>
                </TableRow>
  )
}