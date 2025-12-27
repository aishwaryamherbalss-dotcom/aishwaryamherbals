import { useState, useEffect } from "react";
import { Eye, ShoppingBag, MapPin } from "lucide-react";

// Configuration flag to enable/disable social proof notifications
export const SOCIAL_PROOF_ENABLED = true;

const notifications = [
  { type: "view", text: "3 people viewed Brightening Serum today", icon: Eye },
  { type: "order", text: "Order placed from Coimbatore", icon: ShoppingBag },
  { type: "view", text: "Glow Starter Combo viewed now", icon: Eye },
  { type: "order", text: "Order placed from Chennai", icon: ShoppingBag },
  { type: "view", text: "5 people viewed Herbal Shampoo today", icon: Eye },
  { type: "order", text: "Order placed from Salem", icon: ShoppingBag },
  { type: "view", text: "Hair Growth Serum viewed now", icon: Eye },
  { type: "order", text: "Order placed from Madurai", icon: ShoppingBag },
  { type: "view", text: "2 people viewing Family Care Combo", icon: Eye },
  { type: "order", text: "Order placed from Trichy", icon: ShoppingBag },
];

export const SocialProofToast = () => {
  const [currentNotification, setCurrentNotification] = useState<typeof notifications[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!SOCIAL_PROOF_ENABLED) return;

    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      showRandomNotification();
    }, 10000); // 10 seconds initial delay

    // Set up interval for subsequent notifications
    const interval = setInterval(() => {
      showRandomNotification();
    }, 25000); // Every 25 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const showRandomNotification = () => {
    const randomIndex = Math.floor(Math.random() * notifications.length);
    const notification = notifications[randomIndex];
    
    setCurrentNotification(notification);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  if (!SOCIAL_PROOF_ENABLED || !currentNotification || !isVisible) {
    return null;
  }

  const IconComponent = currentNotification.icon;

  return (
    <div
      className={`fixed bottom-20 md:bottom-6 left-4 md:left-6 z-40 max-w-xs transform transition-all duration-500 ease-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-sm border border-border rounded-xl p-3 shadow-soft flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
          <IconComponent className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="text-sm text-foreground font-medium">
            {currentNotification.text}
          </p>
          <p className="text-xs text-muted-foreground">Just now</p>
        </div>
      </div>
    </div>
  );
};
