import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import brighteningSerum from "@/assets/brightening-serum-bottle.png";
import productShampoo from "@/assets/product-shampoo.jpg";
import productFacepack from "@/assets/product-facepack.jpg";
import productSoap from "@/assets/product-soap.jpg";

const products = [
  {
    id: 1,
    name: "Brightening Serum",
    benefit: "Light on Skin. Strong on Glow.",
    price: 199,
    originalPrice: 399,
    rating: 4.9,
    reviews: 1247,
    image: brighteningSerum,
    badge: "Most Loved by Women",
  },
  {
    id: 2,
    name: "Natural Herbal Shampoo",
    benefit: "Light, non-sticky, suitable for everyday use",
    price: 149,
    originalPrice: 299,
    rating: 4.8,
    reviews: 892,
    image: productShampoo,
    badge: "Best for First-Time Users",
  },
  {
    id: 3,
    name: "Turmeric Glow Face Pack",
    benefit: "Natural glow for everyday freshness",
    price: 199,
    originalPrice: 399,
    rating: 4.9,
    reviews: 654,
    image: productFacepack,
    badge: null,
  },
  {
    id: 4,
    name: "Rose Petal Herbal Soap",
    benefit: "Safe for regular family use",
    price: 79,
    originalPrice: 149,
    rating: 4.7,
    reviews: 1523,
    image: productSoap,
    badge: "Loved by women & families",
  },
];

export const BestSellers = () => {
  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-primary text-sm font-medium rounded-full mb-4">
            ⭐ Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Most Loved by Our Customers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tried, trusted, and reordered by Tamil Nadu families
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-cream">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {product.badge && (
                  <div className={`absolute top-2 left-2 md:top-3 md:left-3 px-2 md:px-3 py-1 text-xs font-semibold rounded-full ${
                    product.badge === "Most Loved by Women" 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-3 md:p-5">
                <h3 className="font-serif text-sm md:text-lg font-semibold text-foreground mb-1 line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-1 line-clamp-1">
                  {product.benefit}
                </p>
                <p className="text-xs text-olive-muted mb-2 md:mb-3">
                  Herbal • Gentle • Regular use
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2 md:mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 md:w-3.5 md:h-3.5 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-0.5">
                    ({product.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <span className="font-serif text-lg md:text-2xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                </div>

                {/* Add to Cart */}
                <Button variant="soft" size="sm" className="w-full gap-2 h-10 md:h-11 text-sm md:text-base touch-target">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-10">
          <Button variant="outline" size="lg" className="h-12 px-8 touch-target">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
