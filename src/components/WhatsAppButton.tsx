import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/message/BG24GCPKNF6KG1", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
};
