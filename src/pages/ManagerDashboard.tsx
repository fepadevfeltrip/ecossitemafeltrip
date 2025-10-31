import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetricsTable } from "@/components/dashboard/MetricsTable";
import { RadarChart } from "@/components/dashboard/RadarChart";
import { EngagementChart } from "@/components/dashboard/EngagementChart";

interface ManagerDashboardProps {
  onBack: () => void;
}

const ManagerDashboard = ({ onBack }: ManagerDashboardProps) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-foreground">
              Painel de Acompanhamento B2B (RH)
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 space-y-8">
        <MetricsTable />
        
        <div className="grid lg:grid-cols-2 gap-8">
          <RadarChart />
          <EngagementChart />
        </div>
      </main>
    </div>
  );
};

export default ManagerDashboard;
