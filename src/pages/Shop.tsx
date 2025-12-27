import { Link } from "react-router-dom";
import { PageLayout } from "@/components/layout/PageLayout";
import { ProductCard } from "@/components/shop/ProductCard";
import { products } from "@/data/products";
import { ShoppingBag, Sparkles, Leaf } from "lucide-react";

const Shop = () => {
  const skinCareProducts = products.filter((p) => p.category === "skin-care");
  const hairCareProducts = products.filter((p) => p.category === "hair-care");

  return (
    <PageLayout
      title="Shop All Products"
      description="Explore our complete collection of handmade herbal products. Honest pricing, no fake discounts. Trusted by 10,000+ Tamil Nadu families."
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hero-gradient">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            <ShoppingBag className="w-4 h-4" />
            All Products
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our Herbal Collection
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Handmade with care. Honest pricing. No fake discounts. 
            Trusted by families across Tamil Nadu.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Link
              to="/shop/skin-care"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-gold-light to-cream p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Skin Care
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Gentle herbal care for glowing, healthy skin — made for everyday use.
                  </p>
                  <p className="text-primary text-sm font-medium mt-2">
                    {skinCareProducts.length} Products →
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to="/shop/hair-care"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage-light to-cream p-6 md:p-8 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                  <Leaf className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Hair Care
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Traditional herbal hair care for strong, healthy hair — safe for regular use.
                  </p>
                  <p className="text-primary text-sm font-medium mt-2">
                    {hairCareProducts.length} Products →
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-8 md:py-12">
        <div className="container">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
            All Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
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

export default Shop;
