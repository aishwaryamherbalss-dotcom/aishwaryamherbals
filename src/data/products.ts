import productSerum from "@/assets/product-serum.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";
import productFacepack from "@/assets/product-facepack.jpg";
import productSoap from "@/assets/product-soap.jpg";

export type ProductCategory = "skin-care" | "hair-care" | "face-packs";

export interface Product {
  id: string;
  name: string;
  slug: string;
  benefit: string;
  description: string;
  price: number;
  size: string;
  category: ProductCategory;
  image: string;
  badge?: string;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
  benefits: string[];
  whoIsItFor: string;
  howToUse: string[];
  ingredients: string[];
}

export interface Combo {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  productIds: string[];
  whoIsItFor: string;
  whyTogether: string;
  howToUseTogether: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: "brightening-serum",
    name: "Brightening Serum",
    slug: "brightening-serum",
    benefit: "Reveals natural glow with gentle herbal extracts",
    description: "A lightweight serum infused with traditional herbal extracts that work gently to reveal your skin's natural radiance. Perfect for daily use.",
    price: 199,
    size: "20 ml",
    category: "skin-care",
    image: productSerum,
    badge: "Most Loved by Women",
    isBestSeller: true,
    rating: 4.8,
    reviewCount: 1247,
    benefits: [
      "Gently brightens dull skin",
      "Lightweight, non-greasy formula",
      "Suitable for all skin types"
    ],
    whoIsItFor: "Anyone looking for gentle, everyday glow. Perfect for first-time users and those who prefer simple skincare.",
    howToUse: [
      "Cleanse your face with mild soap",
      "Apply 2-3 drops on face and neck",
      "Gently massage until absorbed"
    ],
    ingredients: ["Turmeric Extract", "Aloe Vera", "Rose Water", "Vitamin E", "Saffron Extract"]
  },
  {
    id: "herbal-shampoo",
    name: "Herbal Shampoo",
    slug: "herbal-shampoo",
    benefit: "Cleanses gently without stripping natural oils",
    description: "A mild herbal shampoo that cleanses your hair while preserving its natural moisture. Made with traditional Tamil Nadu herbs.",
    price: 149,
    size: "200 ml",
    category: "hair-care",
    image: productShampoo,
    badge: "Family Favorite",
    isBestSeller: true,
    rating: 4.7,
    reviewCount: 892,
    benefits: [
      "Gentle cleansing for daily use",
      "Preserves natural hair oils",
      "Suitable for all hair types"
    ],
    whoIsItFor: "Families looking for a gentle, everyday shampoo. Safe for children and adults alike.",
    howToUse: [
      "Wet hair thoroughly",
      "Apply a small amount and massage into scalp",
      "Rinse completely with water"
    ],
    ingredients: ["Shikakai", "Amla", "Bhringraj", "Hibiscus", "Neem"]
  },
  {
    id: "herbal-face-pack",
    name: "Herbal Face Pack",
    slug: "herbal-face-pack",
    benefit: "Deep cleanses and nourishes for radiant skin",
    description: "A traditional face pack made with time-tested herbal ingredients. Cleanses deeply while nourishing your skin naturally.",
    price: 179,
    size: "100 g",
    category: "face-packs",
    image: productFacepack,
    badge: "Best for First-Time Users",
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 1089,
    benefits: [
      "Deep cleanses pores naturally",
      "Nourishes and softens skin",
      "Reveals natural radiance"
    ],
    whoIsItFor: "Anyone wanting a simple, effective weekly treatment. Great for beginners to herbal skincare.",
    howToUse: [
      "Mix with rose water to form paste",
      "Apply evenly on face, avoiding eyes",
      "Leave for 15 minutes, rinse with water"
    ],
    ingredients: ["Multani Mitti", "Turmeric", "Sandalwood", "Neem", "Rose Powder"]
  },
  {
    id: "herbal-soap",
    name: "Herbal Soap",
    slug: "herbal-soap",
    benefit: "Gentle daily cleansing with natural ingredients",
    description: "A handmade herbal soap that cleanses gently without drying. Perfect for the whole family's daily bath routine.",
    price: 79,
    size: "100 g",
    category: "skin-care",
    image: productSoap,
    badge: "Family Favorite",
    isBestSeller: true,
    rating: 4.6,
    reviewCount: 2156,
    benefits: [
      "Gentle on sensitive skin",
      "Natural herbal fragrance",
      "Moisturizes while cleansing"
    ],
    whoIsItFor: "Perfect for daily use by the whole family. Gentle enough for children and elders.",
    howToUse: [
      "Wet skin with water",
      "Lather soap and apply on body",
      "Rinse thoroughly"
    ],
    ingredients: ["Coconut Oil", "Neem", "Tulsi", "Aloe Vera", "Turmeric"]
  },
  {
    id: "hair-growth-serum",
    name: "Hair Growth Serum",
    slug: "hair-growth-serum",
    benefit: "Nourishes roots for stronger, healthier hair",
    description: "A potent herbal serum that nourishes hair roots and promotes stronger, healthier hair growth naturally.",
    price: 249,
    size: "50 ml",
    category: "hair-care",
    image: productSerum,
    badge: "Most Loved by Women",
    isBestSeller: false,
    rating: 4.8,
    reviewCount: 756,
    benefits: [
      "Strengthens hair from roots",
      "Reduces hair fall naturally",
      "Adds shine and softness"
    ],
    whoIsItFor: "Those experiencing hair thinning or wanting to maintain healthy hair. Suitable for all hair types.",
    howToUse: [
      "Part hair into sections",
      "Apply directly to scalp",
      "Massage gently for 5 minutes"
    ],
    ingredients: ["Bhringraj Oil", "Amla Extract", "Brahmi", "Coconut Oil", "Castor Oil"]
  },
  {
    id: "herbal-toner",
    name: "Herbal Toner",
    slug: "herbal-toner",
    benefit: "Refreshes and balances skin naturally",
    description: "A gentle herbal toner that refreshes, hydrates, and prepares your skin for better absorption of serums and moisturizers.",
    price: 129,
    size: "100 ml",
    category: "skin-care",
    image: productShampoo,
    isBestSeller: false,
    rating: 4.5,
    reviewCount: 423,
    benefits: [
      "Balances skin pH naturally",
      "Hydrates and refreshes",
      "Prepares skin for treatments"
    ],
    whoIsItFor: "Anyone looking to enhance their skincare routine. Perfect addition after cleansing.",
    howToUse: [
      "After cleansing, pour on cotton pad",
      "Gently pat across face and neck",
      "Follow with serum or moisturizer"
    ],
    ingredients: ["Rose Water", "Witch Hazel", "Aloe Vera", "Green Tea Extract", "Cucumber Extract"]
  },
  {
    id: "bath-powder",
    name: "Herbal Bath Powder",
    slug: "bath-powder",
    benefit: "Traditional cleansing for soft, healthy skin",
    description: "A traditional herbal bath powder made with time-tested ingredients. Cleanses gently while leaving skin soft and fragrant.",
    price: 99,
    size: "200 g",
    category: "skin-care",
    image: productFacepack,
    badge: "Family Favorite",
    isBestSeller: false,
    rating: 4.7,
    reviewCount: 634,
    benefits: [
      "Traditional gentle cleansing",
      "Leaves skin soft and smooth",
      "Natural herbal fragrance"
    ],
    whoIsItFor: "Families who prefer traditional bathing. Safe for daily use by everyone.",
    howToUse: [
      "Mix with water to form paste",
      "Apply on body like soap",
      "Rinse thoroughly with water"
    ],
    ingredients: ["Green Gram", "Turmeric", "Sandalwood", "Orange Peel", "Rose Petals"]
  },
  {
    id: "herbal-conditioner",
    name: "Herbal Conditioner",
    slug: "herbal-conditioner",
    benefit: "Softens and detangles hair naturally",
    description: "A nourishing herbal conditioner that softens, detangles, and adds shine to your hair without weighing it down.",
    price: 169,
    size: "200 ml",
    category: "hair-care",
    image: productShampoo,
    isBestSeller: false,
    rating: 4.6,
    reviewCount: 389,
    benefits: [
      "Deeply conditions hair",
      "Easy detangling",
      "Adds natural shine"
    ],
    whoIsItFor: "Those with dry or tangled hair looking for gentle conditioning. Works great with our Herbal Shampoo.",
    howToUse: [
      "After shampooing, apply to hair lengths",
      "Leave for 2-3 minutes",
      "Rinse thoroughly with water"
    ],
    ingredients: ["Hibiscus Extract", "Coconut Milk", "Aloe Vera", "Amla", "Brahmi"]
  }
];

export const combos: Combo[] = [
  {
    id: "glow-starter",
    name: "Glow Starter Combo",
    slug: "glow-starter-combo",
    tagline: "Perfect for first-time users who want gentle glow without overthinking.",
    description: "Start your herbal skincare journey with this simple yet effective combo. The Brightening Serum works gently to reveal your natural glow, while the Herbal Soap provides daily cleansing that's kind to your skin.",
    price: 299,
    image: productSerum,
    productIds: ["brightening-serum", "herbal-soap"],
    whoIsItFor: "First-time users, beginners to herbal skincare, or anyone wanting a simple glow routine.",
    whyTogether: "The soap cleanses gently, preparing your skin to absorb the serum better. Together, they create a simple morning-to-night glow routine.",
    howToUseTogether: [
      "Morning: Cleanse with Herbal Soap, apply Brightening Serum",
      "Evening: Cleanse with Herbal Soap, apply Brightening Serum",
      "Use daily for best results"
    ],
    badge: "Best for First-Time Users"
  },
  {
    id: "complete-hair-care",
    name: "Complete Hair Care Starter Combo",
    slug: "complete-hair-care-combo",
    tagline: "A simple daily routine for strong, healthy hair.",
    description: "Everything you need for healthy hair in one combo. The Hair Growth Serum strengthens from the roots, while the Herbal Shampoo cleanses gently without stripping natural oils.",
    price: 199,
    image: productShampoo,
    productIds: ["hair-growth-serum", "herbal-shampoo"],
    whoIsItFor: "Anyone wanting to start a proper hair care routine. Great for those experiencing hair thinning or dullness.",
    whyTogether: "The shampoo cleanses without stripping oils, while the serum nourishes roots. Together, they create a complete hair wellness routine.",
    howToUseTogether: [
      "Wash hair with Herbal Shampoo 2-3 times a week",
      "Apply Hair Growth Serum on dry scalp at night",
      "Massage gently and leave overnight"
    ],
    badge: "Most Popular"
  },
  {
    id: "everyday-skin-essentials",
    name: "Everyday Skin Care Essentials Combo",
    slug: "everyday-skin-essentials-combo",
    tagline: "Simple, effective skin care for everyday use.",
    description: "A complete daily skincare routine in one combo. Face Pack for weekly deep cleansing, Herbal Soap for daily bath, and Toner for fresh, balanced skin throughout the day.",
    price: 299,
    image: productFacepack,
    productIds: ["herbal-face-pack", "herbal-soap", "herbal-toner"],
    whoIsItFor: "Those who want a complete but simple skincare routine. Perfect for busy people who want effective results.",
    whyTogether: "Each product serves a purpose: daily cleansing, refreshing, and weekly deep care. Together, they cover all your skincare needs.",
    howToUseTogether: [
      "Daily: Cleanse with Herbal Soap, follow with Toner",
      "Weekly: Use Face Pack for deep cleansing (2 times)",
      "Consistent use gives best results"
    ],
    badge: "Complete Routine"
  },
  {
    id: "family-care",
    name: "Family Care Combo",
    slug: "family-care-combo",
    tagline: "Loved by families across Tamil Nadu.",
    description: "A complete family care bundle with products safe for everyone. Bath Powder for traditional cleansing, Herbal Soap for daily use, and Shampoo for healthy hair — all gentle enough for the whole family.",
    price: 349,
    image: productSoap,
    productIds: ["bath-powder", "herbal-soap", "herbal-shampoo"],
    whoIsItFor: "Families looking for safe, natural products for everyone — from children to elders.",
    whyTogether: "These three products cover all daily bathing needs. All are gentle, family-safe, and work beautifully together.",
    howToUseTogether: [
      "Use Herbal Soap or Bath Powder for daily bathing",
      "Alternate between soap and powder for variety",
      "Use Herbal Shampoo for hair wash days"
    ],
    badge: "Family Favorite"
  },
  {
    id: "best-seller",
    name: "Best Seller Combo",
    slug: "best-seller-combo",
    tagline: "Our most trusted products — chosen by thousands of families.",
    description: "Can't decide what to try? Start with our most loved products. This combo includes our top 3 best sellers that customers keep coming back for.",
    price: 399,
    image: productSerum,
    productIds: ["brightening-serum", "herbal-face-pack", "herbal-shampoo"],
    whoIsItFor: "New customers who want to try our best products, or gift-givers looking for a trusted choice.",
    whyTogether: "These are our most reordered products. Customers love them for their effectiveness and gentle formulas.",
    howToUseTogether: [
      "Use Herbal Shampoo for hair care routine",
      "Apply Brightening Serum daily for glow",
      "Use Face Pack weekly for deep cleansing"
    ],
    badge: "Most Loved"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getComboById = (id: string): Combo | undefined => {
  return combos.find(c => c.id === id);
};

export const getComboBySlug = (slug: string): Combo | undefined => {
  return combos.find(c => c.slug === slug);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(p => p.category === category);
};

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.isBestSeller);
};

export const getComboProducts = (combo: Combo): Product[] => {
  return combo.productIds
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined);
};
