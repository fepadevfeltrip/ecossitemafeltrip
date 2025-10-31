import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface NavigationCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  onClick: () => void;
}

export const NavigationCard = ({ icon: Icon, title, subtitle, onClick }: NavigationCardProps) => {
  return (
    <Card 
      className="p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary group"
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
};
