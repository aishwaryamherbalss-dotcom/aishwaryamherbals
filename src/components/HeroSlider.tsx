import { useState, useEffect, useCallback } from "react";
import { Button } from "./ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { heroSlides, HERO_FALLBACK_IMAGE } from "@/data/heroSlides";

export const HeroSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, direction: "ltr" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
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

  // Subtle fade-in animation for badge
  const badgeInitial = { opacity: 0, y: -10 };
  const badgeAnimate = { opacity: 1, y: 0 };
  const badgeTransition = {
    duration: 0.5,
    ease: "easeOut" as const,
  };

  return (
    <section className="bg-hero-gradient relative overflow-hidden" dir="ltr">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative py-12 md:py-20 lg:py-28">
        {/* Slider Container - explicit LTR */}
        <div ref={emblaRef} className="overflow-hidden" dir="ltr">
          <div className="flex touch-pan-y" style={{ direction: "ltr" }}>
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

                    {/* Tamil Subtitle */}
                    {slide.headlineTamil && (
                      <p className="text-base md:text-lg text-muted-foreground animate-fade-in-up animation-delay-100">
                        {slide.headlineTamil}
                      </p>
                    )}

                    {/* Subtext */}
                    <div className="space-y-1 animate-fade-in-up animation-delay-200">
                      <p className="text-lg md:text-xl text-foreground max-w-xl mx-auto lg:mx-0">
                        {slide.subtext}
                      </p>
                      {slide.subtextTamil && (
                        <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                          {slide.subtextTamil}
                        </p>
                      )}
                    </div>

                    {/* Optional Trust Line */}
                    {slide.trustLine && (
                      <p className="text-base text-olive-muted animate-fade-in-up animation-delay-400">
                        {slide.trustLine}
                      </p>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                      <Button asChild variant="hero" size="xl" className="group h-14 text-base md:text-lg touch-target flex-col py-2">
                        <Link to={slide.ctaPrimary.link}>
                          <span className="flex items-center gap-2">
                            {slide.ctaPrimary.text}
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </span>
                          {slide.ctaPrimary.textTamil && (
                            <span className="text-xs opacity-80">{slide.ctaPrimary.textTamil}</span>
                          )}
                        </Link>
                      </Button>
                      <a
                        href="https://wa.me/919843398171?text=Hi Aishwaryam Herbals, I want to know more about your products / place an order."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex"
                      >
                        <Button variant="hero-outline" size="xl" className="gap-2 h-14 text-base md:text-lg touch-target">
                          <MessageCircle className="w-5 h-5" />
                          Order / Ask on WhatsApp
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
                      {/* Floating Badge - Products from ₹60 - Top Right Corner */}
                      <motion.div
                        className="absolute top-3 right-3 md:top-5 md:right-5 bg-background/95 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 shadow-soft"
                        initial={badgeInitial}
                        animate={badgeAnimate}
                        transition={badgeTransition}
                      >
                        <div className="flex items-center gap-1.5 md:gap-2">
                          <div className="w-6 h-6 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm md:text-xl">🌿</span>
                          </div>
                          <div>
                            <p className="text-[9px] md:text-xs text-muted-foreground">Products from</p>
                            <p className="font-serif text-sm md:text-lg font-semibold text-primary">₹60</p>
                          </div>
                        </div>
                      </motion.div>
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
