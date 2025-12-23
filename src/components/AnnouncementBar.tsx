import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

const announcements = [
  "🌿 Honest Prices Everyday — No Fake Discounts",
  "Handmade Herbal Products Trusted Across Tamil Nadu",
  "What Others Sell at ₹120, We Sell at ₹60 — Daily",
  "🌸 Pure Ingredients. Real Results. Happy Customers.",
];

export const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 sticky top-0 z-50">
      <div className="container flex items-center justify-center gap-2 text-sm font-medium">
        <Leaf className="w-4 h-4 animate-pulse-soft" />
        <span
          key={currentIndex}
          className="animate-fade-in text-center"
        >
          {announcements[currentIndex]}
        </span>
        <Leaf className="w-4 h-4 animate-pulse-soft" />
      </div>
    </div>
  );
};
