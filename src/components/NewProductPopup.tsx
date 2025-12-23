import { useState, useEffect } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import productSerum from "@/assets/product-serum.jpg";

export const NewProductPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isDismissed]);

  const handleClose = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm animate-fade-in">
      <div className="bg-background rounded-3xl shadow-lg max-w-sm w-full overflow-hidden animate-scale-in">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-sage-light">
          <img
            src={productSerum}
            alt="New Herbal Hair Growth Serum"
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            New Launch
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-center">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
            🌿 Herbal Hair Growth Serum
          </h3>
          <p className="text-muted-foreground mb-4">
            Loved by Tamil Women. Reduces hair fall naturally with Ayurvedic herbs.
          </p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-serif text-2xl font-bold text-primary">₹299</span>
            <span className="text-muted-foreground line-through">₹599</span>
            <span className="px-2 py-0.5 bg-accent text-accent-foreground text-xs font-medium rounded">
              50% OFF
            </span>
          </div>
          <div className="flex gap-3">
            <Button variant="hero" className="flex-1">
              View Product
            </Button>
            <Button variant="outline" onClick={handleClose}>
              Maybe Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
