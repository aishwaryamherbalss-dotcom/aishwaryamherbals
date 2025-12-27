import { PageLayout } from "@/components/layout/PageLayout";
import { ComboCard } from "@/components/shop/ComboCard";
import { combos } from "@/data/products";
import { Gift } from "lucide-react";

const CombosPage = () => {
  return (
    <PageLayout
      title="Starter Combos"
      description="Perfect starter combos for first-time users. Easy choices, honest pricing, no hidden charges. Trusted by Tamil Nadu families."
    >
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-hero-gradient">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/20 text-accent-foreground text-sm font-medium rounded-full mb-4">
            <Gift className="w-4 h-4" />
            Easy Way to Start
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Perfect Starter Combos
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Easy choices for first-time users. No hidden charges. Products that work better together.
          </p>
        </div>
      </section>

      {/* Combos Grid */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {combos.map((combo) => (
              <ComboCard key={combo.id} combo={combo} />
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

export default CombosPage;
