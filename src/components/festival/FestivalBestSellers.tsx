import { Link } from "react-router-dom";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { getBestSellers, Product } from "@/data/products";

export const FestivalBestSellers = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const bestSellers = getBestSellers().slice(0, 4);

  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section id="festival-best-sellers" className="py-16 md:py-20 scroll-mt-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Festival Best Sellers
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Most Loved Products
          </h2>
          <p className="font-serif text-xl text-foreground/80 mb-2">
            அதிகம் விரும்பப்படும் பொருட்கள்
          </p>
          <p className="text-muted-foreground">
            Perfect for gifting or self-care during festivals
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((product) => (
            <div
              key={product.id}
              className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
            >
              {/* Product Image */}
              <Link to={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
              </Link>

              {/* Product Info */}
              <div className="p-4">
                <Link to={`/product/${product.slug}`}>
                  <h3 className="font-serif text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-muted"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.rating})
                  </span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mt-3 gap-2">
                  <span className="font-serif text-lg font-bold text-primary">
                    ₹{product.price}
                  </span>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span className="hidden sm:inline">Add</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
