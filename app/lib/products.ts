export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  features: string[];
  schemaName: string;
};

export const products: Product[] = [
  {
    id: "suncare-detergent-powder-2in1",
    name: "SunCare Detergent Powder",
    tagline: "Detergent",
    description:
      "D-Waash SunCare Detergent Powder 2-in-1 combines powerful cleaning with built-in fabric softening. One wash delivers clean, soft, and fresh-smelling laundry every time.",
    category: "Laundry",
    image: "/images/dwaash-suncare-detergent-2in1.webp",
    imageAlt: "D-Waash SunCare Detergent Powder 2-in-1 with fabric softener",
    features: ["4kg + 2kg free", "Built-in fabric softener", "Anti-static", "Fresh linen scent"],
    schemaName: "D-Waash SunCare Detergent Powder 2-in-1",
  },
  {
    id: "comfine-fabric-softener",
    name: "Comfine Fabric Softener",
    tagline: "Ultra Soft",
    description:
      "D-Waash Comfine Fabric Softener leaves clothes irresistibly soft, fresh, and static-free. Makes ironing easier while pampering your fabrics with long-lasting fragrance.",
    category: "Laundry",
    image: "/images/dwaash-comfine-fabric-softener.webp",
    imageAlt: "D-Waash Comfine fabric softener bottle for laundry",
    features: ["Ultra-soft finish", "Long-lasting freshness", "Reduces static", "Easy ironing"],
    schemaName: "D-Waash Comfine Fabric Softener",
  },
  {
    id: "comfine-fabric-softener-premium",
    name: "Comfine Fabric Softener Premium",
    tagline: "Premium Care",
    description:
      "D-Waash Comfine Fabric Softener Premium is a concentrated formula that delivers deeper conditioning, longer-lasting perfume, and superior wrinkle reduction for everyday luxury.",
    category: "Laundry",
    image: "/images/dwaash-comfine-fabric-softener-premium.webp",
    imageAlt: "D-Waash Comfine Fabric Softener Premium concentrated formula",
    features: ["Concentrated formula", "Deep-conditioning", "Long-lasting perfume", "Wrinkle reduction"],
    schemaName: "D-Waash Comfine Fabric Softener Premium",
  },
  {
    id: "laundry-liquid",
    name: "Laundry Liquid",
    tagline: "Liquid Clean",
    description:
      "D-Waash Laundry Liquid cuts through grease and grime with ease. Its concentrated formula works in cold water, pre-treats stains, and leaves clothes smelling beautifully fresh.",
    category: "Laundry",
    image: "/images/dwaash-laundry-liquid.webp",
    imageAlt: "D-Waash laundry liquid detergent bottle",
    features: ["Grease-cutting formula", "Works in cold water", "Pre-treats stains", "Fresh fragrance"],
    schemaName: "D-Waash Laundry Liquid",
  },
  {
    id: "hand-wash",
    name: "Hand Wash",
    tagline: "Gentle Clean",
    description:
      "D-Waash Hand Wash gently cleanses while keeping your skin soft and moisturised. Its antibacterial formula gives you confidence with every wash.",
    category: "Personal Care",
    image: "/images/dwaash-hand-wash.webp",
    imageAlt: "D-Waash hand wash liquid soap for gentle cleaning",
    features: ["Gentle cleansing", "Antibacterial formula", "Moisturising", "Rinses clean"],
    schemaName: "D-Waash Hand Wash",
  },
  {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    tagline: "Germ-Free",
    description:
      "D-Waash Toilet Cleaner fights tough stains, limescale, and germs with its powerful thick-gel formula. Leaves your toilet hygienically clean and fresh-smelling.",
    category: "Home Care",
    image: "/images/dwaash-toilet-cleaner.webp",
    imageAlt: "D-Waash toilet cleaner for germ-free bathroom hygiene",
    features: ["Kills 99.9% germs", "Limescale removal", "Thick gel formula", "Long-lasting freshness"],
    schemaName: "D-Waash Toilet Cleaner",
  },
  {
    id: "bleach-toilet-cleaner",
    name: "Bleach & Toilet Cleaner",
    tagline: "Bleach Clean",
    description:
      "D-Waash Bleach & Toilet Cleaner combines the whitening power of bleach with effective toilet cleaning. Removes stubborn stains, disinfects, and leaves surfaces sparkling.",
    category: "Home Care",
    image: "/images/dwaash-bleach-toilet-cleaner.webp",
    imageAlt: "D-Waash bleach and toilet cleaner multi-purpose",
    features: ["Bleach-based formula", "Whitens & disinfects", "Removes tough stains", "Multi-surface"],
    schemaName: "D-Waash Bleach & Toilet Cleaner",
  },
  {
    id: "anti-ant-powder",
    name: "Anti-Ant Powder",
    tagline: "Ant Barrier",
    description:
      "D-Waash Anti-Ant Powder creates a fast-acting barrier against ants and crawling insects. Long-lasting protection that is easy to apply and safe to use around the home.",
    category: "Home Care",
    image: "/images/dwaash-anti-ant-powder.webp",
    imageAlt: "D-Waash anti-ant powder for home insect control",
    features: ["Fast-acting barrier", "Long-lasting protection", "Easy to apply", "Safe around home"],
    schemaName: "D-Waash Anti-Ant Powder",
  },
  {
    id: "floor-cleaner",
    name: "Phenyl floor cleaner",
    tagline: "Streak-Free Combo",
    description:
      "D-Waash Floor Cleaner delivers a streak-free shine on tiles, marble, and vinyl. Its dilutable formula cleans deep while leaving a pleasant, fresh fragrance.",
    category: "Home Care",
    image: "/images/dwaash-floor-cleaner.webp",
    imageAlt: "D-Waash floor cleaner for sparkling floors",
    features: ["Streak-free shine", "Multi-surface safe", "Fresh fragrance", "Dilutable formula"],
    schemaName: "D-Waash Floor Cleaner",
  },
  {
    id: "floor-cleaner-2in1",
    name: "Phenyl floor cleaner",
    tagline: "Clean & Disinfect",
    description:
      "D-Waash Floor Cleaner combines powerful cleaning with disinfecting action. Kills germs as it cleans, with no rinsing required and a pleasant scent.",
    category: "Home Care",
    image: "/images/dwaash-floor-cleaner-2in1.webp",
    imageAlt: "D-Waash floor cleaner 2-in-1 with disinfectant",
    features: ["2-in-1 clean & disinfect", "Kills germs", "No rinse needed", "Pleasant scent"],
    schemaName: "D-Waash Floor Cleaner 2-in-1",
  },
  {
    id: "floor-cleaner-disinfectant",
    name: "Floor Cleaner Disinfectant",
    tagline: "Hospital Grade",
    description:
      "D-Waash Floor Cleaner Disinfectant delivers hospital-grade cleaning for your floors. Kills 99.9% of bacteria while remaining gentle on floor surfaces.",
    category: "Home Care",
    image: "/images/dwaash-floor-cleaner-disinfectant.webp",
    imageAlt: "D-Waash floor cleaner disinfectant for deep cleaning",
    features: ["Disinfecting formula", "Kills 99.9% bacteria", "Gentle on surfaces", "Fresh after-scent"],
    schemaName: "D-Waash Floor Cleaner Disinfectant",
  },
];

export const categories = ["All", "Laundry", "Home Care", "Personal Care"];