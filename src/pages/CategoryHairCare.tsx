import { PageLayout } from "@/components/layout/PageLayout";
import { ProductCard } from "@/components/shop/ProductCard";
import { getProductsByCategory } from "@/data/products";
import { Scissors } from "lucide-react";

const CategoryHairCare = () => {
  const hairCareProducts = getProductsByCategory("hair-care");

  return (
    <PageLayout
      title="Hair Care"
      description="Traditional herbal hair care for strong, healthy hair — safe for regular use. Handmade in Tamil Nadu with traditional recipes."
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hero-gradient">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            <Scissors className="w-4 h-4" />
            Hair Care
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Herbal Hair Care
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Traditional herbal hair care for strong, healthy hair — safe for regular use.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {hairCareProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
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

export default CategoryHairCare;
