import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

export interface PaginationProps {
  pageIdex: number;
  totalCount: number;
  perPage: number;
}

export function Pagination({ pageIdex, totalCount, perPage }: PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground"> 
            Total de {totalCount} item(s)
        </span>

        <div className="flex items-center gap-6 lg:gap-8">
            <div className="text-sm font-medium">Pagina {pageIdex + 1} de {pages}</div>
            <div className="flex items-center gap-2">
                <Button variant="outline" className="h-4 w-4 p-4">
                    <ChevronsLeft className="h-4 w-4" />
                    <span className="sr-only">Primeira pagina</span>
                </Button>
                <Button variant="outline" className="h-4 w-4 p-4">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Pagina anterior</span>
                </Button>
                <Button variant="outline" className="h-4 w-4 p-4">
                    <ChevronRight className="h-4 w-4" />
                    <span className="sr-only">Proxima pagina</span>
                </Button>
                <Button variant="outline" className="h-4 w-4 p-4">
                    <ChevronsRight className="h-4 w-4" />
                    <span className="sr-only">Ultima pagina</span>
                </Button>
            </div>
        </div>
    </div>
  ) 
}
