import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I'm interested in Aishwaryam Herbals products.", "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group animate-scale-in"
      aria-label="Order via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground animate-pulse">
        1
      </span>
    </button>
  );
};
