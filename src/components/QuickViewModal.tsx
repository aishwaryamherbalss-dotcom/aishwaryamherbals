import { X, ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export interface QuickViewItem {
  id: string;
  name: string;
  image: string;
  price: number;
  size?: string;
  benefit: string;
  isCombo?: boolean;
  items?: string[];
}

interface QuickViewModalProps {
  item: QuickViewItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: QuickViewItem) => void;
}

export const QuickViewModal = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
}: QuickViewModalProps) => {
  if (!item) return null;

  const handleAddToCart = () => {
    onAddToCart(item);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi, I would like to order: ${item.name} - ₹${item.price}`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{item.name}</DialogTitle>
        </DialogHeader>
        
        {/* Image */}
        <div className="relative aspect-square bg-cream overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-background/90 rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-soft"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
            {item.name}
          </h3>
          
          <p className="text-muted-foreground text-sm md:text-base mb-3 line-clamp-2">
            {item.benefit}
          </p>

          {/* Combo items */}
          {item.isCombo && item.items && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {item.items.map((comboItem) => (
                <span
                  key={comboItem}
                  className="px-2.5 py-1 bg-sage-light text-sage-dark text-xs rounded-full"
                >
                  {comboItem}
                </span>
              ))}
            </div>
          )}

          {/* Price & Size */}
          <div className="flex items-center gap-3 mb-5">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary">
              ₹{item.price}
            </span>
            {item.size && (
              <span className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded">
                {item.size}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <Button
              variant="hero"
              size="lg"
              className="w-full gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
            <Button
              variant="whatsapp"
              size="default"
              className="w-full gap-2"
              onClick={handleWhatsAppOrder}
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
