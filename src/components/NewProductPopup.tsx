import { useState, useEffect } from "react";
import { X, Sparkles, Star } from "lucide-react";
import { Button } from "./ui/button";
import productSerum from "@/assets/product-serum.jpg";
const SESSION_KEY = "aishwaryam_popup_shown";
export const NewProductPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem(SESSION_KEY);
    if (wasShown) return;
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-3xl shadow-lg max-w-sm w-full overflow-hidden animate-scale-in">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-sage-light">
          <img alt="Herbal Hair Growth Serum - New Launch" src="/lovable-uploads/f82f0f4c-78f0-4f71-adcf-b6ceb0f6393b.png" className="w-full h-full object-contain" />
          <button onClick={handleClose} className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors touch-target" aria-label="Close popup">
            <X className="w-5 h-5" />
          </button>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full shadow-soft">
            <Sparkles className="w-4 h-4" />
            New Launch
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
            Herbal Hair Growth Serum
          </h3>
          
          {/* Rating */}
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            <span className="text-muted-foreground ml-1 text-base">(500+ happy customers)</span>
          </div>
          
          <p className="text-muted-foreground mb-2 leading-relaxed">
            Gentle daily care for healthy, strong hair. Safe for regular use.
          </p>
          <p className="text-primary mb-4 text-sm">
            வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary">₹199</span>
          </div>
          
          <div className="flex gap-3">
            <Button variant="hero" size="lg" className="flex-1 h-12 text-base">
              View Product
            </Button>
            <Button variant="outline" size="lg" onClick={handleClose} className="h-12 px-5">
              Maybe Later
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            You are choosing honest herbal care.
          </p>
        </div>
      </div>
    </div>;
};