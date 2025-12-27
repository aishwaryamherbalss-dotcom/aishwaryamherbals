import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { Sparkles } from "lucide-react";

const CategoryFacePacks = () => {
  const facePackProducts = products.filter((p) => p.category === "face-packs");

  return (
    <PageLayout
      title="Face Packs"
      description="Traditional herbal face packs for deep cleansing and radiant skin. Made for regular use by Tamil Nadu families."
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hero-gradient">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Face Packs
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Herbal Face Packs
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Deep cleansing herbal face packs for radiant, glowing skin — made with traditional ingredients for weekly care.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {facePackProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {facePackProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No face pack products found.</p>
              <Link to="/shop" className="text-primary hover:underline mt-2 inline-block">
                Browse all products →
              </Link>
            </div>
          )}
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

export default CategoryFacePacks;
