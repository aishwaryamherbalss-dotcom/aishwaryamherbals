import { useState, useCallback } from "react";
import { MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const heroSlides = [
  {
    id: 1,
    image: "/lovable-uploads/787c8994-539b-4c3d-b78f-35ed678308f5.png",
  },
  {
    id: 2,
    image: "/lovable-uploads/32faae7c-cf49-4636-94e9-8368e4d4f4c2.png",
  },
  {
    id: 3,
    image: "/lovable-uploads/33ec6388-e571-427a-b1a5-c8645fdc5d3a.png",
  },
];

export const FestivalHero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useState(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  });

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919843398171?text=Hi Aishwaryam Herbals, I'm interested in your Festival Collection products.",
      "_blank"
    );
  };

  const scrollToCollection = () => {
    const section = document.getElementById("festival-best-sellers");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content (stays the same across all slides) */}
      <div className="relative z-10 container text-center px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span>🎉</span>
            <span>Festival Special Collection</span>
          </div>

          {/* Main Headline - English */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Celebrate Festivals with{" "}
            <span className="text-primary">Pure Herbal Care</span>
          </h1>

          {/* Tamil Headline */}
          <p className="font-serif text-2xl md:text-3xl text-foreground/80">
            பண்டிகைகளை இயற்கை மூலிகை அழகுடன் கொண்டாடுங்கள்
          </p>

          {/* Sub-headline - English */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Handmade herbal products crafted with traditional recipes. 
            Safe for the whole family, perfect for every occasion.
          </p>

          {/* Tamil Sub-headline */}
          <p className="text-base md:text-lg text-muted-foreground">
            கைவினை மூலிகை பொருட்கள் • குடும்பத்தினர் அனைவருக்கும் பாதுகாப்பானது
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button
              variant="whatsapp"
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-5 h-5" />
              Order / Ask on WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-8 py-6 text-base font-semibold"
              onClick={scrollToCollection}
            >
              <ArrowDown className="w-5 h-5" />
              Explore Festival Collection
            </Button>
          </div>

          {/* Trust Text */}
          <p className="text-sm text-muted-foreground pt-4">
            No artificial colors • No artificial fragrance • Trusted by 10,000+ families
          </p>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};
