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
        <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-foreground leading-tight">
              Painel de Acompanhamento B2B (RH)
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-8">
        <MetricsTable />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <RadarChart />
          <EngagementChart />
        </div>
      </main>
    </div>
  );
};

export default ManagerDashboard;
