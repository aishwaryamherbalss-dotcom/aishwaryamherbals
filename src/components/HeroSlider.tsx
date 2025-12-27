import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { heroSlides, HERO_FALLBACK_IMAGE } from "@/data/heroSlides";

export const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
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

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = HERO_FALLBACK_IMAGE;
  };

  return (
    <section className="relative overflow-hidden">
      {/* Full-width Hero Slider */}
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex touch-pan-y">
            {heroSlides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
                {/* Background Image - Full Screen Hero */}
                <div className="relative h-[85vh] min-h-[500px] max-h-[800px] md:h-[90vh] md:min-h-[600px] md:max-h-[900px]">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={handleImageError}
                  />
                  {/* Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent md:from-background/90 md:via-background/50" />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="container">
                      <div className="max-w-xl lg:max-w-2xl space-y-5 md:space-y-6">
                        {/* Trust Badge - Top */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-light rounded-full text-primary text-sm font-medium">
                          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          Trusted by 10,000+ Tamil Nadu Families
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight">
                          {slide.headline}{" "}
                          <span className="text-primary relative inline-block">
                            {slide.headlineHighlight}
                            <svg
                              className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 text-accent/50"
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

                        {/* Subtext */}
                        <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                          <span className="font-medium text-foreground">{slide.subtext}</span>{" "}
                          {slide.subtextSuffix}
                        </p>

                        {/* Optional Trust Line */}
                        {slide.trustLine && (
                          <p className="text-sm md:text-base text-olive-muted italic">
                            {slide.trustLine}
                          </p>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">
                          <Button asChild variant="hero" size="xl" className="group h-12 md:h-14 text-base md:text-lg touch-target">
                            <Link to={slide.ctaPrimary.link}>
                              {slide.ctaPrimary.text}
                              <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                            </Link>
                          </Button>
                          <a
                            href="https://wa.me/919843398171?text=Hi Aishwaryam Herbals, I'm interested in your herbal products."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex"
                          >
                            <Button variant="hero-outline" size="xl" className="gap-2 h-12 md:h-14 text-base md:text-lg touch-target w-full sm:w-auto">
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

        {/* Navigation Arrows - Desktop */}
        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full items-center justify-center shadow-soft hover:bg-background transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full items-center justify-center shadow-soft hover:bg-background transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all touch-target ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-background/60 w-2 hover:bg-background"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges - Visible on Desktop and Mobile with Soft Glow Animation */}
        <div className="absolute bottom-16 md:bottom-8 left-4 md:left-8 bg-background/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-soft z-10 animate-glow-pulse">
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
