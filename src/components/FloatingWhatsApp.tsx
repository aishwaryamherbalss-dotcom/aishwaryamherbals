import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I'm interested in Aishwaryam Herbals products. Can you help me choose?", "_blank");
  };

  return (
    <div className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-40 flex flex-col items-end gap-2 animate-scale-in">
      {/* Tooltip on desktop */}
      <div className="hidden md:block bg-background rounded-lg px-3 py-2 shadow-soft text-sm text-foreground max-w-[180px] text-right">
        <p className="font-medium">Have doubts?</p>
        <p className="text-xs text-muted-foreground">We're happy to help</p>
      </div>
      <button
        onClick={handleWhatsApp}
        className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
        aria-label="Order via WhatsApp - We're happy to help you choose"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground animate-pulse">
          ?
        </span>
      </button>
    </div>
  );
};
