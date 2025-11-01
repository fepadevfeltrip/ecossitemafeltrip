import { useState } from "react";
import { MobileFrame } from "@/components/MobileFrame";
import { BottomNav } from "@/components/BottomNav";
import { HomeTab } from "@/components/app/HomeTab";
import { MapTab } from "@/components/app/MapTab";
import { AITab } from "@/components/app/AITab";
import { AuthWrapper } from "@/components/app/AuthWrapper";

interface ExpatAppProps {
  onBack?: () => void;
}

const ExpatApp = ({ onBack }: ExpatAppProps) => {
  const [activeTab, setActiveTab] = useState<"home" | "map" | "ai">("home");

  return (
    <AuthWrapper>
      <MobileFrame>
        {activeTab === "home" && <HomeTab onBack={onBack} />}
        {activeTab === "map" && <MapTab />}
        {activeTab === "ai" && <AITab />}
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      </MobileFrame>
    </AuthWrapper>
  );
};

export default ExpatApp;
