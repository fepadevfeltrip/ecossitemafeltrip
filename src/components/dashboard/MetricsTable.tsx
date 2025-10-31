import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const MetricsTable = () => {
  const data = [
    { name: "Ana Silva", service: "Consultoria de Bairro", status: "Concluído" },
    { name: "Carlos Santos", service: "Imobiliária Premium", status: "Em Progresso" },
    { name: "Maria Oliveira", service: "Coaching Cultural", status: "Concluído" },
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-3 sm:p-6">
      <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Status da Rede de Parceiros</h3>
      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs sm:text-sm whitespace-nowrap">Colaborador</TableHead>
                <TableHead className="text-xs sm:text-sm whitespace-nowrap">Serviço de Curadoria</TableHead>
                <TableHead className="text-xs sm:text-sm whitespace-nowrap">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-xs sm:text-sm whitespace-nowrap">{row.name}</TableCell>
                  <TableCell className="text-xs sm:text-sm whitespace-nowrap">{row.service}</TableCell>
                  <TableCell className="whitespace-nowrap">
                    <Badge variant={row.status === "Concluído" ? "default" : "secondary"} className="text-xs">
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
