import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const MetricsTable = () => {
  const data = [
    { name: "Ana Silva", service: "Consultoria de Bairro", status: "Concluído" },
    { name: "Carlos Santos", service: "Imobiliária Premium", status: "Em Progresso" },
    { name: "Maria Oliveira", service: "Coaching Cultural", status: "Concluído" },
  ];

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Status da Rede de Parceiros</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Colaborador</TableHead>
            <TableHead>Serviço de Curadoria</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.name}</TableCell>
              <TableCell>{row.service}</TableCell>
              <TableCell>
                <Badge variant={row.status === "Concluído" ? "default" : "secondary"}>
                  {row.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
