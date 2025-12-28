import { ShoppingBag, MessageCircle, Shield } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export const MobileBottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open("https://wa.me/919843398171?text=Hi Aishwaryam Herbals, I want to know more about your products / place an order. Interested to order.", "_blank");
  };

  const handleBuyWithConfidence = () => {
    // Scroll to trust signals section smoothly
    const trustSection = document.getElementById('trust-section');
    if (trustSection) {
      trustSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Dispatch custom event when bottom bar visibility changes
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('mobileBottomBarVisibility', { detail: { visible: isVisible } }));
  }, [isVisible]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-medium safe-area-bottom">
      {/* Reassurance text */}
      <div className="flex items-center justify-center gap-2 py-1.5 bg-sage-light/50 text-xs text-foreground/70">
        <Shield className="w-3 h-3" />
        <span>No hidden charges • Safe checkout • Easy returns</span>
      </div>
      <div className="flex gap-3 p-3">
        <Button 
          variant="outline" 
          size="lg" 
          className="flex-1 h-14 text-sm font-semibold gap-2"
          onClick={handleBuyWithConfidence}
        >
          <ShoppingBag className="w-4 h-4" />
          Buy with Confidence
        </Button>
        <Button 
          variant="whatsapp" 
          size="lg" 
          className="flex-[1.2] h-14 text-sm font-semibold gap-1 flex-col py-1"
          onClick={handleWhatsApp}
        >
          <span className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Order / Ask on WhatsApp
          </span>
          <span className="text-[10px] font-normal opacity-90">ஆர்டர் செய்ய / கேள்விகள் கேட்க</span>
        </Button>
      </div>
    </div>
  );
};
