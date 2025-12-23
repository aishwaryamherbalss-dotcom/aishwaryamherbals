import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-products.jpg";

export const HeroSection = () => {
  return (
    <section className="bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-light rounded-full text-primary text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Trusted by 10,000+ Tamil Nadu Families
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight animate-fade-in-up">
              Pure Herbal Care for{" "}
              <span className="text-primary relative">
                Everyday Beauty
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/50" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              & Wellness
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
              <span className="font-medium text-foreground">Handmade. Honest Pricing.</span>{" "}
              Trusted by Tamil Nadu Families.
            </p>
            
            <p className="text-base text-olive-muted animate-fade-in-up animation-delay-400">
              No inflated prices. No fake offers. Just real herbal goodness for daily use.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
              <Button variant="hero" size="xl" className="group h-14 text-base md:text-lg touch-target">
                Shop Best Sellers
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button variant="hero-outline" size="xl" className="gap-2 h-14 text-base md:text-lg touch-target hidden md:flex">
                <MessageCircle className="w-5 h-5" />
                Order Comfortably on WhatsApp
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative lg:order-last animate-slide-in-right">
            <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-medium">
              <img
                src={heroImage}
                alt="Aishwaryam Herbals - Premium herbal beauty products including serums, soaps, and skincare"
                className="w-full h-full object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-background/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-soft animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xl md:text-2xl">🌿</span>
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-muted-foreground">Products from</p>
                    <p className="font-serif text-lg md:text-xl font-semibold text-primary">₹60</p>
                    <p className="text-xs text-muted-foreground">Honest Everyday Pricing</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Ring */}
            <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 border-4 border-accent/30 rounded-full" />
            <div className="hidden md:block absolute -bottom-6 -left-6 w-32 h-32 border-4 border-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
