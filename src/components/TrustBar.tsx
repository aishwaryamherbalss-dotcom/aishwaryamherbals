import { Leaf, IndianRupee, Heart, Users } from "lucide-react";

const trustItems = [
  { icon: Users, label: "Trusted by Tamil Nadu" },
  { icon: Leaf, label: "Handmade Herbal" },
  { icon: IndianRupee, label: "Honest Pricing" },
  { icon: Heart, label: "Women-Centric Care" },
];

export const TrustBar = () => {
  return (
    <div className="bg-sage-light/60 border-y border-primary/10 py-3 md:py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm md:text-base text-foreground/80"
            >
              <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
