import logo from "@/assets/feltrip-logo.png";

export const FeltripLogo = ({ className = "" }: { className?: string }) => {
  return (
    <img 
      src={logo} 
      alt="Feltrip - Logo Oficial" 
      className={`h-20 w-auto object-contain ${className}`}
      key="feltrip-official-logo-v6"
    />
  );
};
