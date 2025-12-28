import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919843398171?text=Hi Aishwaryam Herbals, I want to know more about your products / place an order.", "_blank");
  };

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-1 animate-scale-in">
      <button
        onClick={handleWhatsApp}
        className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-medium hover:shadow-lg transition-all duration-300 flex items-center gap-2 px-4 py-3 md:px-5 md:py-3.5 group"
        aria-label="Order or Ask on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
        <span className="font-semibold text-sm md:text-base">Order / Ask on WhatsApp</span>
      </button>
      <span className="text-xs text-muted-foreground text-right pr-1">
        ஆர்டர் செய்ய / கேள்விகள் கேட்க WhatsApp
      </span>
    </div>
  );
};
