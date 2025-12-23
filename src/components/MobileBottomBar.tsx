import { ShoppingBag, MessageCircle, Shield } from "lucide-react";
import { Button } from "./ui/button";

export const MobileBottomBar = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I'm interested in Aishwaryam Herbals products. Can you help me choose?", "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-medium safe-area-bottom">
      {/* Reassurance text */}
      <div className="flex items-center justify-center gap-2 py-1.5 bg-sage-light/50 text-xs text-foreground/70">
        <Shield className="w-3 h-3" />
        <span>No hidden charges • Safe checkout • Easy returns</span>
      </div>
      <div className="flex gap-3 p-3">
        <Button 
          variant="hero" 
          size="lg" 
          className="flex-1 h-14 text-base font-semibold gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          Buy with Confidence
        </Button>
        <Button 
          variant="whatsapp" 
          size="lg" 
          className="flex-1 h-14 text-base font-semibold gap-2"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="w-5 h-5" />
          Talk to Us on WhatsApp
        </Button>
      </div>
    </div>
  );
};
