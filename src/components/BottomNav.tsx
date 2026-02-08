import { Home, Map, Sparkles } from "lucide-react";

interface BottomNavProps {
  activeTab: "home" | "map" | "ai";
  onTabChange: (tab: "home" | "map" | "ai") => void;
}

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: "home" as const, icon: Home, label: "Início" },
    { id: "map" as const, icon: Map, label: "Diário de Bordo" },
    { id: "ai" as const, icon: Sparkles, label: "Cult AI" },
  ];

  return (
    <div className="bg-card border-t border-border">
      <div className="flex justify-around items-center h-20 px-4">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`h-6 w-6 ${isActive ? "fill-primary/20" : ""}`} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
