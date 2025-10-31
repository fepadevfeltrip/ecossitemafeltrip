import { useState } from "react";
import { MobileFrame } from "@/components/MobileFrame";
import { BottomNav } from "@/components/BottomNav";
import { HomeTab } from "@/components/app/HomeTab";
import { MapTab } from "@/components/app/MapTab";
import { AITab } from "@/components/app/AITab";

const ExpatApp = () => {
  const [activeTab, setActiveTab] = useState<"home" | "map" | "ai">("home");

  return (
    <MobileFrame>
      {activeTab === "home" && <HomeTab />}
      {activeTab === "map" && <MapTab />}
      {activeTab === "ai" && <AITab />}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </MobileFrame>
  );
};

export default ExpatApp;
