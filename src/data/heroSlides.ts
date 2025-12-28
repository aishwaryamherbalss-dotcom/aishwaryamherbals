/**
 * Hero Slides Configuration
 * 
 * To replace hero images, simply update the image paths below.
 * Images should be full-width hero images (recommended: 1920x1080 or similar aspect ratio).
 * Place new images in public/lovable-uploads/ or src/assets/ folder.
 * 
 * Example:
 *   image: "/lovable-uploads/your-new-image.jpg"
 *   or
 *   image: heroSlide1 (if importing from src/assets)
 */

// Fallback image if a slide image fails to load
export const HERO_FALLBACK_IMAGE = "/lovable-uploads/787c8994-539b-4c3d-b78f-35ed678308f5.png";

export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  headline: string;
  headlineHighlight: string;
  headlineSuffix: string;
  headlineTamil?: string;
  subtext: string;
  subtextSuffix: string;
  trustLine: string | null;
  ctaPrimary: { text: string; link: string };
  ctaSecondary: { text: string };
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    // ========== SLIDE 1 IMAGE - Replace path below ==========
    image: "/lovable-uploads/787c8994-539b-4c3d-b78f-35ed678308f5.png",
    alt: "Aishwaryam Herbals - Premium herbal beauty products",
    headline: "Pure Herbal Care for",
    headlineHighlight: "Everyday Beauty",
    headlineSuffix: "& Wellness",
    headlineTamil: "தினசரி அழகு மற்றும் ஆரோக்கியத்திற்கு தூய மூலிகை பராமரிப்பு",
    subtext: "Handmade. Honest Pricing.",
    subtextSuffix: "Trusted by Tamil Nadu Families.",
    trustLine: null,
    ctaPrimary: { text: "Shop Best Sellers", link: "/best-sellers" },
    ctaSecondary: { text: "Order on WhatsApp" },
  },
  {
    id: 2,
    // ========== SLIDE 2 IMAGE - Replace path below ==========
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
    // ========== SLIDE 3 IMAGE - Replace path below ==========
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
    // ========== SLIDE 4 IMAGE - Replace path below ==========
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
