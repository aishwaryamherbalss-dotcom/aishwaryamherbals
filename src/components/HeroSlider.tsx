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
    <section className="bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative py-12 md:py-20 lg:py-28">
        {/* Slider Container */}
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex touch-pan-y">
            {heroSlides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Left Content */}
                  <div className="text-center lg:text-left space-y-6 md:space-y-8">
                    {/* Trust Badge - Top Left */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-light rounded-full text-primary text-sm font-medium animate-fade-in">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      Trusted by 10,000+ Tamil Nadu Families
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight animate-fade-in-up">
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

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-200">
                      <span className="font-medium text-foreground">{slide.subtext}</span>{" "}
                      {slide.subtextSuffix}
                    </p>

                    {/* Optional Trust Line */}
                    {slide.trustLine && (
                      <p className="text-base text-olive-muted animate-fade-in-up animation-delay-400">
                        {slide.trustLine}
                      </p>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
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

                  {/* Right Image */}
                  <div className="relative lg:order-last animate-slide-in-right">
                    <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-medium">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-cover object-center"
                        onError={handleImageError}
                      />
                      {/* Floating Badge - Products from ₹60 */}
                      <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-background/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 shadow-soft hero-badge-pulse">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Desktop */}
        <button
          onClick={scrollPrev}
          className="hidden lg:flex absolute left-4 xl:left-0 top-1/2 -translate-y-1/2 -translate-x-full xl:-translate-x-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full items-center justify-center shadow-soft hover:bg-background transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={scrollNext}
          className="hidden lg:flex absolute right-4 xl:right-0 top-1/2 -translate-y-1/2 translate-x-full xl:translate-x-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full items-center justify-center shadow-soft hover:bg-background transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all touch-target ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-muted w-2 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
