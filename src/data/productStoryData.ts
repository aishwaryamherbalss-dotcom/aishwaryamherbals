// Product storytelling data - ingredients, usage, results, suitability

export interface IngredientDetail {
  name: string;
  benefit: string;
}

export interface ProductStory {
  ingredients: IngredientDetail[];
  usageSteps: string[];
  usageTime: string; // e.g., "Morning & Evening" or "2-3 times weekly"
  resultsTimeline: {
    week1_2: string;
    week3_4: string;
    regular: string;
  };
  suitability: {
    suitable: string[];
    notFor: string;
  };
}

export const productStories: Record<string, ProductStory> = {
  "brightening-serum": {
    ingredients: [
      { name: "Turmeric Extract", benefit: "Helps even out skin tone and adds natural warmth to complexion" },
      { name: "Aloe Vera", benefit: "Soothes and hydrates, keeping skin calm and refreshed" },
      { name: "Rose Water", benefit: "Gently tones and provides a subtle natural fragrance" },
      { name: "Vitamin E", benefit: "Nourishes and supports skin's natural moisture barrier" },
      { name: "Saffron Extract", benefit: "Traditional ingredient known for adding natural radiance" }
    ],
    usageSteps: [
      "Cleanse your face with mild soap or cleanser",
      "Take 2-3 drops on fingertips",
      "Gently pat onto face and neck in upward motions",
      "Allow to absorb naturally, no need to rinse"
    ],
    usageTime: "Morning & Evening",
    resultsTimeline: {
      week1_2: "Skin feels softer, more hydrated and comfortable",
      week3_4: "Gradual improvement in skin's natural glow and evenness",
      regular: "Sustained radiance with continued gentle care"
    },
    suitability: {
      suitable: ["Men & Women", "All skin types", "Safe for daily use", "Suitable for sensitive skin"],
      notFor: "Not an instant brightening or chemical-based product"
    }
  },
  "herbal-shampoo": {
    ingredients: [
      { name: "Shikakai", benefit: "Traditional cleanser that gently removes dirt without harsh chemicals" },
      { name: "Amla", benefit: "Strengthens hair roots and adds natural shine" },
      { name: "Bhringraj", benefit: "Known as 'King of Herbs' for hair wellness in Ayurveda" },
      { name: "Hibiscus", benefit: "Conditions naturally and supports healthy-looking hair" },
      { name: "Neem", benefit: "Helps maintain a clean, healthy scalp environment" }
    ],
    usageSteps: [
      "Wet hair thoroughly with water",
      "Take a small amount and massage into scalp gently",
      "Work through hair lengths with fingers",
      "Rinse completely with water"
    ],
    usageTime: "2-3 times per week",
    resultsTimeline: {
      week1_2: "Hair feels cleaner and softer without dryness",
      week3_4: "Scalp feels healthier, hair more manageable",
      regular: "Stronger, shinier hair with regular gentle care"
    },
    suitability: {
      suitable: ["Men & Women", "All hair types", "Safe for family use", "Gentle for children above 5 years"],
      notFor: "Not a medicated or anti-dandruff treatment"
    }
  },
  "herbal-face-pack": {
    ingredients: [
      { name: "Multani Mitti", benefit: "Gently absorbs excess oil and cleanses pores deeply" },
      { name: "Turmeric", benefit: "Traditional ingredient for natural glow and skin comfort" },
      { name: "Sandalwood", benefit: "Cools and soothes skin with subtle natural fragrance" },
      { name: "Neem", benefit: "Helps purify and maintain clear-looking skin" },
      { name: "Rose Powder", benefit: "Softens and adds gentle hydration during treatment" }
    ],
    usageSteps: [
      "Mix powder with rose water or plain water to form smooth paste",
      "Apply evenly on clean face, avoiding eye area",
      "Leave for 15-20 minutes until semi-dry",
      "Rinse gently with lukewarm water, pat dry"
    ],
    usageTime: "1-2 times per week",
    resultsTimeline: {
      week1_2: "Skin feels deeply cleansed and refreshed after each use",
      week3_4: "Visible improvement in skin clarity and smoothness",
      regular: "Consistently clear, naturally glowing complexion"
    },
    suitability: {
      suitable: ["Men & Women", "All skin types", "Safe for weekly use", "Great for oily or combination skin"],
      notFor: "Not an instant whitening or chemical peel product"
    }
  },
  "herbal-soap": {
    ingredients: [
      { name: "Coconut Oil", benefit: "Provides gentle cleansing while moisturizing naturally" },
      { name: "Neem", benefit: "Traditional purifying ingredient for healthy-feeling skin" },
      { name: "Tulsi", benefit: "Helps maintain fresh, clean skin with natural protection" },
      { name: "Aloe Vera", benefit: "Soothes and prevents dryness after bathing" },
      { name: "Turmeric", benefit: "Adds warmth and supports skin's natural glow" }
    ],
    usageSteps: [
      "Wet skin with water thoroughly",
      "Create lather by rubbing soap between hands",
      "Apply gently all over body",
      "Rinse completely with water"
    ],
    usageTime: "Daily use",
    resultsTimeline: {
      week1_2: "Skin feels soft and moisturized, not dry after bathing",
      week3_4: "Noticeable improvement in skin texture and comfort",
      regular: "Consistently healthy, naturally soft skin"
    },
    suitability: {
      suitable: ["Men & Women", "Children above 3 years", "Elders", "All skin types including sensitive"],
      notFor: "Not a medicated or antibacterial soap"
    }
  },
  "hair-growth-serum": {
    ingredients: [
      { name: "Bhringraj Oil", benefit: "Traditional 'hair herb' known for supporting healthy hair growth" },
      { name: "Amla Extract", benefit: "Rich in natural nutrients that strengthen hair from roots" },
      { name: "Brahmi", benefit: "Calms scalp and supports healthy hair follicle environment" },
      { name: "Coconut Oil", benefit: "Deeply nourishes and conditions hair shaft and roots" },
      { name: "Castor Oil", benefit: "Known for supporting thicker, stronger-looking hair" }
    ],
    usageSteps: [
      "Part hair into sections to expose scalp",
      "Apply serum directly to scalp using applicator",
      "Massage gently with fingertips for 5 minutes",
      "Leave overnight or for at least 2 hours before washing"
    ],
    usageTime: "3-4 times per week",
    resultsTimeline: {
      week1_2: "Scalp feels nourished, less dryness and itching",
      week3_4: "Reduced hair fall noticed during washing and combing",
      regular: "Gradual improvement in hair strength and thickness"
    },
    suitability: {
      suitable: ["Men & Women", "All hair types", "Safe for regular use", "Suitable for color-treated hair"],
      notFor: "Not an instant hair regrowth or medicated treatment"
    }
  },
  "herbal-toner": {
    ingredients: [
      { name: "Rose Water", benefit: "Gently hydrates and tones with natural floral essence" },
      { name: "Witch Hazel", benefit: "Helps minimize appearance of pores naturally" },
      { name: "Aloe Vera", benefit: "Soothes and prepares skin for better product absorption" },
      { name: "Green Tea Extract", benefit: "Provides natural antioxidant support for skin" },
      { name: "Cucumber Extract", benefit: "Cools and refreshes tired, stressed skin" }
    ],
    usageSteps: [
      "After cleansing, pour a few drops onto cotton pad",
      "Gently sweep across face and neck",
      "Allow to absorb naturally",
      "Follow with serum or moisturizer"
    ],
    usageTime: "Morning & Evening",
    resultsTimeline: {
      week1_2: "Skin feels refreshed, balanced, and more hydrated",
      week3_4: "Improved skin texture and product absorption",
      regular: "Consistently balanced, healthy-looking skin"
    },
    suitability: {
      suitable: ["Men & Women", "All skin types", "Safe for daily use", "Good for oily or combination skin"],
      notFor: "Not an astringent or chemical-based toner"
    }
  },
  "bath-powder": {
    ingredients: [
      { name: "Green Gram", benefit: "Traditional cleanser that gently exfoliates and softens skin" },
      { name: "Turmeric", benefit: "Adds natural glow and has been used for centuries in bathing" },
      { name: "Sandalwood", benefit: "Cools skin and provides calming natural fragrance" },
      { name: "Orange Peel", benefit: "Gently brightens and refreshes with natural citrus essence" },
      { name: "Rose Petals", benefit: "Softens skin and adds subtle floral scent" }
    ],
    usageSteps: [
      "Take required amount and mix with water to form paste",
      "Apply on wet body like regular soap",
      "Gently scrub in circular motions",
      "Rinse thoroughly with water"
    ],
    usageTime: "Daily or alternate days",
    resultsTimeline: {
      week1_2: "Skin feels softer and naturally cleansed after each bath",
      week3_4: "Improved skin texture and natural fragrance on skin",
      regular: "Consistently smooth, healthy, naturally glowing skin"
    },
    suitability: {
      suitable: ["Men & Women", "Children above 5 years", "Elders", "All skin types"],
      notFor: "Not a scrub for very sensitive or broken skin"
    }
  },
  "herbal-conditioner": {
    ingredients: [
      { name: "Hibiscus Extract", benefit: "Deeply conditions and adds natural shine to hair" },
      { name: "Coconut Milk", benefit: "Intensely moisturizes and softens dry, rough hair" },
      { name: "Aloe Vera", benefit: "Smooths hair cuticle for easier detangling" },
      { name: "Amla", benefit: "Strengthens hair shaft and prevents breakage" },
      { name: "Brahmi", benefit: "Calms scalp and supports healthy hair environment" }
    ],
    usageSteps: [
      "After shampooing, squeeze excess water from hair",
      "Apply conditioner to hair lengths and ends, avoid scalp",
      "Leave for 2-3 minutes for better absorption",
      "Rinse thoroughly with cool water for added shine"
    ],
    usageTime: "After every shampoo wash",
    resultsTimeline: {
      week1_2: "Hair feels softer, easier to comb and manage",
      week3_4: "Noticeable reduction in frizz and tangles",
      regular: "Consistently smooth, shiny, and healthy-looking hair"
    },
    suitability: {
      suitable: ["Men & Women", "All hair types", "Safe for regular use", "Great for dry or damaged hair"],
      notFor: "Not a deep treatment or leave-in conditioner"
    }
  }
};

// Why Aishwaryam trust points (shared across all products)
export const whyAishwaryamPoints = [
  { icon: "🌿", text: "Handmade in Tamil Nadu with traditional recipes" },
  { icon: "👨‍👩‍👧‍👦", text: "Trusted by 10,000+ families across Tamil Nadu" },
  { icon: "💰", text: "Honest everyday pricing — no inflated MRPs or fake discounts" },
  { icon: "🚫", text: "No false promises or guaranteed claims" },
  { icon: "✨", text: "Designed for regular, everyday use by the whole family" }
];

// Brand Trust Section
export const brandTrustContent = {
  heading: "Trusted Since 2016",
  paragraph: "Aishwaryam Herbals has been crafting pure herbal care products for over 8 years. Started as a family venture in Tamil Nadu, we have grown through word-of-mouth recommendations from satisfied families. Our products are handmade in small batches using traditional recipes passed down through generations. We believe in honest pricing, genuine ingredients, and building lasting trust with every family we serve."
};
