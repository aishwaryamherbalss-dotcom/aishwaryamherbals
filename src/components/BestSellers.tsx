import { Star, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import productSerum from "@/assets/product-serum.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";
import productFacepack from "@/assets/product-facepack.jpg";
import productSoap from "@/assets/product-soap.jpg";

const products = [
  {
    id: 1,
    name: "Herbal Hair Growth Serum",
    benefit: "Reduces hair fall & promotes growth",
    price: 299,
    originalPrice: 599,
    rating: 4.9,
    reviews: 1247,
    image: productSerum,
    badge: "Most Loved by Women",
  },
  {
    id: 2,
    name: "Natural Herbal Shampoo",
    benefit: "Gentle cleansing with herbs",
    price: 149,
    originalPrice: 299,
    rating: 4.8,
    reviews: 892,
    image: productShampoo,
    badge: null,
  },
  {
    id: 3,
    name: "Turmeric Glow Face Pack",
    benefit: "Natural radiance & even skin tone",
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
    benefit: "Soft, moisturized skin daily",
    price: 79,
    originalPrice: 149,
    rating: 4.7,
    reviews: 1523,
    image: productSoap,
    badge: "Best Value",
  },
];

export const BestSellers = () => {
  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-primary text-sm font-medium rounded-full mb-4">
            Customer Favorites
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Best Sellers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Products loved and trusted by thousands of Tamil Nadu families
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-1 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
                  {product.benefit}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-serif text-xl md:text-2xl font-bold text-primary">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>

                {/* Add to Cart */}
                <Button variant="soft" size="sm" className="w-full gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
