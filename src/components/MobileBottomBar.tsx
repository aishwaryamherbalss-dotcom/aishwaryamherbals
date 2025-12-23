import { ShoppingBag, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const MobileBottomBar = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I'm interested in Aishwaryam Herbals products.", "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-medium safe-area-bottom">
      <div className="flex gap-3 p-3">
        <Button 
          variant="hero" 
          size="lg" 
          className="flex-1 h-14 text-base font-semibold gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          Buy Now
        </Button>
        <Button 
          variant="whatsapp" 
          size="lg" 
          className="flex-1 h-14 text-base font-semibold gap-2"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
};
