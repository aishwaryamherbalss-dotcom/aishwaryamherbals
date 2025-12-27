import { PageLayout } from "@/components/layout/PageLayout";
import { Sprout, Heart, Users, MapPin, Clock, Sparkles, Home } from "lucide-react";

const values = [
  {
    icon: Sprout,
    title: "Handmade with Traditional Care",
    description: "Each product is crafted using time-tested herbal formulations passed down through generations.",
  },
  {
    icon: Heart,
    title: "Gentle & Family-Safe",
    description: "Our products are gentle enough for the whole family, from children to elders.",
  },
  {
    icon: Sparkles,
    title: "Honest Pricing",
    description: "No inflated MRPs, no fake discounts. What you see is what you pay.",
  },
  {
    icon: Home,
    title: "Rooted in Tamil Nadu",
    description: "Proudly made in Tamil Nadu, trusted by families across the state.",
  },
];

const About = () => {
  return (
    <PageLayout
      title="About Us - Aishwaryam Herbals"
      description="Learn about Aishwaryam Herbals - our story, values, and commitment to pure herbal care for Tamil Nadu families."
    >
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-hero-gradient">
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            <Heart className="w-4 h-4" />
            Our Story
          </span>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            About Aishwaryam Herbals
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Pure herbal care, handmade with love in Tamil Nadu
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-background p-6 md:p-10 rounded-2xl shadow-soft">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Aishwaryam Herbals was born from a simple belief: that every family deserves access to pure, 
                  gentle, and honestly-priced herbal products. What started as a small home-based venture 
                  in Tamil Nadu has grown into a trusted brand loved by thousands of families.
                </p>
                <p>
                  We use traditional herbal formulations that have been passed down through generations, 
                  combining ancient wisdom with careful craftsmanship. Every product is handmade with 
                  attention to quality, ensuring that what reaches your home is nothing but the best.
                </p>
                <p>
                  Our promise is simple: no fake offers, no inflated prices, no harsh chemicals. 
                  Just pure herbal care that's safe for your whole family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-cream/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
              What We Stand For
            </h2>
            <p className="text-muted-foreground">
              நம்பிக்கையுடன் பயன்படுத்தலாம் • Trusted values, trusted products
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="relative bg-background rounded-xl md:rounded-2xl p-4 md:p-6 shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold shadow-soft">
                  {index + 1}
                </div>

                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-sage-light flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <value.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>

                <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>

                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Trust */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Made in Tamil Nadu, India</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground">Trusted by 10,000+ families</span>
            </div>
            <div className="p-6 bg-sage-light/50 rounded-2xl">
              <p className="text-sage-dark font-medium">
                வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for the whole family
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
