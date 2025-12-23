import { useEffect, useState } from "react";
import { Leaf, CheckCircle } from "lucide-react";

const announcements = [
  { text: "What Others Sell at ₹120, We Sell at ₹60 — Daily", icon: Leaf },
  { text: "Honest Pricing • No Fake Offers • Everyday Herbal Care", icon: CheckCircle },
];

export const AnnouncementBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = announcements[currentIndex].icon;

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 sticky top-0 z-50">
      <div className="container flex items-center justify-center gap-2 text-sm md:text-base font-medium">
        <CurrentIcon className="w-4 h-4 flex-shrink-0 animate-pulse-soft" />
        <span
          key={currentIndex}
          className="animate-fade-in text-center line-clamp-1"
        >
          {announcements[currentIndex].text}
        </span>
        <CurrentIcon className="w-4 h-4 flex-shrink-0 animate-pulse-soft hidden sm:block" />
      </div>
    </div>
  );
};
