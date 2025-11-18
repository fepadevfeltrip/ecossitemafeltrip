import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export const MetricsTable = () => {
  const data = [
    { 
      colaborador: "Ana Silva", 
      categoria: "Moradia", 
      servico: "Revisão de Contrato de Aluguel", 
      data: "Ontem", 
      status: "Concluído",
      categoryColor: "bg-blue-500"
    },
    { 
      colaborador: "Carlos M.", 
      categoria: "Saúde Mental", 
      servico: "Terapia Intercultural (Sessão 1)", 
      data: "Hoje", 
      status: "Em Andamento",
      categoryColor: "bg-purple-500"
    },
    { 
      colaborador: "Time Dev", 
      categoria: "Experiência", 
      servico: "Caminhada de Integração (Território)", 
      data: "Amanhã", 
      status: "Agendado",
      categoryColor: "bg-green-500"
    },
  ];

  const getStatusVariant = (status: string) => {
    if (status === "Concluído") return "default";
    if (status === "Em Andamento") return "secondary";
    return "outline";
  };

  return (
    <div className="bg-card rounded-lg border border-border p-3 sm:p-6">
      <h3 className="text-sm sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">Solicitações de Curadoria & Parceiros</h3>
      <div className="overflow-x-auto -mx-3 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs sm:text-sm">Colaborador</TableHead>
                <TableHead className="text-xs sm:text-sm">Categoria</TableHead>
                <TableHead className="text-xs sm:text-sm hidden md:table-cell">Parceiro/Serviço</TableHead>
                <TableHead className="text-xs sm:text-sm hidden sm:table-cell">Data</TableHead>
                <TableHead className="text-xs sm:text-sm">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-xs sm:text-sm">{row.colaborador}</TableCell>
                  <TableCell className="text-xs sm:text-sm">
                    <Badge variant="outline" className={`${row.categoryColor} text-white border-0`}>
                      {row.categoria}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs sm:text-sm hidden md:table-cell">{row.servico}</TableCell>
                  <TableCell className="text-xs sm:text-sm text-muted-foreground hidden sm:table-cell">{row.data}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(row.status)} className="text-xs">
                      {row.status === "Concluído" && "✅ "}
                      {row.status === "Em Andamento" && "⏳ "}
                      {row.status === "Agendado" && "🟡 "}
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
