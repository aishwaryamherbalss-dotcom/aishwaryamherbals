import { Link } from "react-router-dom";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
  showBadge?: boolean;
}

export const ProductCard = ({ product, showBadge = true }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-sage-light">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          {showBadge && product.badge && (
            <div className="absolute top-3 left-3 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-soft">
              {product.badge}
            </div>
          )}
        </div>
      </Link>

      <div className="p-4 md:p-5">
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
          {product.benefit}
        </p>

        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "text-accent fill-accent"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        <p className="text-xs text-sage-dark mb-3">
          Herbal • Gentle • Regular use
        </p>

        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="font-serif text-xl md:text-2xl font-bold text-primary">
            ₹{product.price}
          </span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="hero"
            size="sm"
            className="flex-1 text-xs"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-3.5 h-3.5 mr-1" />
            Add to Cart
          </Button>
          <Button asChild variant="outline" size="sm" className="text-xs">
            <Link to={`/product/${product.slug}`}>
              <Eye className="w-3.5 h-3.5 mr-1" />
              Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
