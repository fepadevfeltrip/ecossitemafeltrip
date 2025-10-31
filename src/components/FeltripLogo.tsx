import logo from "@/assets/feltrip-logo.png";

export const FeltripLogo = ({ className = "" }: { className?: string }) => {
  return (
    <img 
      src={logo} 
      alt="Feltrip Logo" 
      className={`h-12 w-auto object-contain ${className}`}
    />
  );
};
