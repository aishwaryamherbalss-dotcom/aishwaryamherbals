import { PageLayout } from "@/components/layout/PageLayout";
import { ProductCard } from "@/components/shop/ProductCard";
import { getBestSellers } from "@/data/products";
import { Heart } from "lucide-react";

const BestSellersPage = () => {
  const bestSellers = getBestSellers();

  return (
    <PageLayout
      title="Best Sellers"
      description="Most loved by our customers. Tried, trusted, and reordered by Tamil Nadu families. Our most popular herbal products."
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hero-gradient">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
            <Heart className="w-4 h-4" />
            Customer Favorites
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Most Loved by Our Customers
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Tried, trusted, and reordered by Tamil Nadu families.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} showBadge={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-8 md:py-12 bg-cream/50">
        <div className="container text-center">
          <p className="text-sage-dark font-medium">
            வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default BestSellersPage;
