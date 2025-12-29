import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Festival hero slides - easily replaceable images
const heroSlides = [
  {
    id: 1,
    image: "/lovable-uploads/787c8994-539b-4c3d-b78f-35ed678308f5.png",
    alt: "Festival Collection Slide 1",
  },
  {
    id: 2,
    image: "/lovable-uploads/32faae7c-cf49-4636-94e9-8368e4d4f4c2.png",
    alt: "Festival Collection Slide 2",
  },
  {
    id: 3,
    image: "/lovable-uploads/33ec6388-e571-427a-b1a5-c8645fdc5d3a.png",
    alt: "Festival Collection Slide 3",
  },
  {
    id: 4,
    image: "/lovable-uploads/45d06192-4f01-4e29-9713-a13ca2ceff8b.png",
    alt: "Festival Collection Slide 4",
  },
];

export const FestivalHero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-Screen Image Slider */}
      <div className="h-full w-full" ref={emblaRef}>
        <div className="flex h-full">
          {heroSlides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
