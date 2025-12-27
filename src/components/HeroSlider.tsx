import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    image: "/lovable-uploads/787c8994-539b-4c3d-b78f-35ed678308f5.png",
    alt: "Aishwaryam Herbals - Premium herbal beauty products",
    headline: "Pure Herbal Care for",
    headlineHighlight: "Everyday Beauty",
    headlineSuffix: "& Wellness",
    subtext: "Handmade. Honest Pricing.",
    subtextSuffix: "Trusted by Tamil Nadu Families.",
    trustLine: null,
    ctaPrimary: { text: "Shop Best Sellers", link: "/best-sellers" },
    ctaSecondary: { text: "Order on WhatsApp" },
  },
  {
    id: 2,
    image: "/lovable-uploads/32faae7c-cf49-4636-94e9-8368e4d4f4c2.png",
    alt: "Aishwaryam Herbals - Natural skincare for families",
    headline: "Gentle Herbal Care for the",
    headlineHighlight: "Whole Family",
    headlineSuffix: "",
    subtext: "Safe for daily use.",
    subtextSuffix: "Loved by women, trusted by families across Tamil Nadu.",
    trustLine: "வீட்டில் எல்லோருக்கும் ஏற்றது • Safe for everyday family use",
    ctaPrimary: { text: "Explore Skin & Hair Care", link: "/shop" },
    ctaSecondary: { text: "Order on WhatsApp" },
  },
  {
    id: 3,
    image: "/lovable-uploads/33ec6388-e571-427a-b1a5-c8645fdc5d3a.png",
    alt: "Aishwaryam Herbals - Honest pricing products",
    headline: "Honest Pricing.",
    headlineHighlight: "No Fake Offers.",
    headlineSuffix: "",
    subtext: "What you see is what you pay.",
    subtextSuffix: "Everyday herbal care without inflated prices.",
    trustLine: "Daily price itself is our best price",
    ctaPrimary: { text: "View All Products", link: "/shop" },
    ctaSecondary: { text: "Order on WhatsApp" },
  },
  {
    id: 4,
    image: "/lovable-uploads/a6f60886-1197-452f-b145-4244fcef2dba.png",
    alt: "Aishwaryam Herbals - Natural glow products",
    headline: "Glow Naturally, the",
    headlineHighlight: "Herbal Way",
    headlineSuffix: "",
    subtext: "Light on skin. Strong on results.",
    subtextSuffix: "Designed for regular use.",
    trustLine: "Gentle care with visible glow over time",
    ctaPrimary: { text: "View Best Sellers", link: "/best-sellers" },
    ctaSecondary: { text: "Order on WhatsApp" },
  },
];

export const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden">
      {/* Full-width Hero Slider */}
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {slides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
                {/* Background Image */}
                <div className="relative h-[500px] md:h-[600px] lg:h-[650px]">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                  {/* Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="container">
                      <div className="max-w-xl lg:max-w-2xl space-y-6 md:space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-light rounded-full text-primary text-sm font-medium">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          Trusted by 10,000+ Tamil Nadu Families
                        </div>

                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                          {slide.headline}{" "}
                          <span className="text-primary relative">
                            {slide.headlineHighlight}
                            <svg
                              className="absolute -bottom-2 left-0 w-full h-3 text-accent/50"
                              viewBox="0 0 200 12"
                              fill="none"
                            >
                              <path
                                d="M2 8C50 2 150 2 198 8"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                              />
                            </svg>
                          </span>
                          {slide.headlineSuffix && ` ${slide.headlineSuffix}`}
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground">
                          <span className="font-medium text-foreground">{slide.subtext}</span>{" "}
                          {slide.subtextSuffix}
                        </p>

                        {slide.trustLine && (
                          <p className="text-base text-olive-muted">
                            {slide.trustLine}
                          </p>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                          <Button asChild variant="hero" size="xl" className="group h-14 text-base md:text-lg touch-target">
                            <Link to={slide.ctaPrimary.link}>
                              {slide.ctaPrimary.text}
                              <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                            </Link>
                          </Button>
                          <a
                            href="https://wa.me/919843398171?text=Hi Aishwaryam Herbals, I'm interested in your herbal products."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex"
                          >
                            <Button variant="hero-outline" size="xl" className="gap-2 h-14 text-base md:text-lg touch-target">
                              <MessageCircle className="w-5 h-5" />
                              {slide.ctaSecondary.text}
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-background transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft hover:bg-background transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-background/60 w-2 hover:bg-background"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Floating Badge */}
        <div className="absolute bottom-6 left-4 md:bottom-8 md:left-8 bg-background/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-soft animate-float hidden md:block z-10">
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
    </section>
  );
};
