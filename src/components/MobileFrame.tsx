import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

export const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-muted via-background to-accent/10 p-4">
      <div className="w-full max-w-[450px] min-h-[800px] bg-card rounded-3xl shadow-2xl overflow-hidden border-8 border-primary/20 flex flex-col">
        {children}
      </div>
    </div>
  );
};
