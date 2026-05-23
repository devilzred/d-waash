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
    id: "suncare-detergent-powder",
    name: "SunCare Detergent Powder",
    tagline: "Powerful clean, brighter every wash",
    description:
      "D-Waash SunCare Detergent Powder delivers deep-cleaning power that removes tough stains while keeping whites bright and colours vibrant. Perfect for machine and hand wash.",
    category: "Laundry",
    image: "/images/detergent.png",
    imageAlt: "D-Waash SunCare Detergent Powder pack for laundry cleaning",
    features: ["Tough stain removal", "Brightens whites", "Machine & hand wash", "Long-lasting fragrance"],
    schemaName: "D-Waash SunCare Detergent Powder",
  },
  {
    id: "suncare-detergent-powder-2in1",
    name: "SunCare Detergent Powder 2-in-1",
    tagline: "Detergent & softener in one",
    description:
      "D-Waash SunCare Detergent Powder 2-in-1 combines powerful cleaning with built-in fabric softening. One wash delivers clean, soft, and fresh-smelling laundry every time.",
    category: "Laundry",
    image: "/images/detergent2.png",
    imageAlt: "D-Waash SunCare Detergent Powder 2-in-1 with fabric softener",
    features: ["2-in-1 formula", "Built-in fabric softener", "Anti-static", "Fresh linen scent"],
    schemaName: "D-Waash SunCare Detergent Powder 2-in-1",
  },
  {
    id: "comfine-fabric-softener",
    name: "Comfine Fabric Softener",
    tagline: "Unbelievably soft laundry",
    description:
      "D-Waash Comfine Fabric Softener leaves clothes irresistibly soft, fresh, and static-free. Makes ironing easier while pampering your fabrics with long-lasting fragrance.",
    category: "Laundry",
    image: "/images/comfine.png",
    imageAlt: "D-Waash Comfine fabric softener bottle for laundry",
    features: ["Ultra-soft finish", "Long-lasting freshness", "Reduces static", "Easy ironing"],
    schemaName: "D-Waash Comfine Fabric Softener",
  },
  {
    id: "comfine-fabric-softener-premium",
    name: "Comfine Fabric Softener Premium",
    tagline: "Premium care for your clothes",
    description:
      "D-Waash Comfine Fabric Softener Premium is a concentrated formula that delivers deeper conditioning, longer-lasting perfume, and superior wrinkle reduction for everyday luxury.",
    category: "Laundry",
    image: "/images/comfine2.png",
    imageAlt: "D-Waash Comfine Fabric Softener Premium concentrated formula",
    features: ["Concentrated formula", "Deep-conditioning", "Long-lasting perfume", "Wrinkle reduction"],
    schemaName: "D-Waash Comfine Fabric Softener Premium",
  },
  {
    id: "laundry-liquid",
    name: "Laundry Liquid",
    tagline: "Liquid power, real clean",
    description:
      "D-Waash Laundry Liquid cuts through grease and grime with ease. Its concentrated formula works in cold water, pre-treats stains, and leaves clothes smelling beautifully fresh.",
    category: "Laundry",
    image: "/images/laudenryliquid.png",
    imageAlt: "D-Waash laundry liquid detergent bottle",
    features: ["Grease-cutting formula", "Works in cold water", "Pre-treats stains", "Fresh fragrance"],
    schemaName: "D-Waash Laundry Liquid",
  },
  {
    id: "bar-soap",
    name: "D-Waash Bar Soap",
    tagline: "Pure clean, daily trust",
    description:
      "D-Waash Bar Soap delivers gentle yet effective cleansing for the whole family. Antibacterial protection and a rich creamy lather make it a trusted choice for everyday hygiene.",
    category: "Personal Care",
    image: "/images/barsoap.png",
    imageAlt: "D-Waash antibacterial bar soap for daily hygiene",
    features: ["Gentle on skin", "Antibacterial", "Rich creamy lather", "Everyday freshness"],
    schemaName: "D-Waash Bar Soap",
  },
  {
    id: "hand-wash",
    name: "Hand Wash",
    tagline: "Soft hands, clean confidence",
    description:
      "D-Waash Hand Wash gently cleanses while keeping your skin soft and moisturised. Its antibacterial formula gives you confidence with every wash.",
    category: "Personal Care",
    image: "/images/handwash.png",
    imageAlt: "D-Waash hand wash liquid soap for gentle cleaning",
    features: ["Gentle cleansing", "Antibacterial formula", "Moisturising", "Rinses clean"],
    schemaName: "D-Waash Hand Wash",
  },
  {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    tagline: "Powerful clean, germ-free",
    description:
      "D-Waash Toilet Cleaner fights tough stains, limescale, and germs with its powerful thick-gel formula. Leaves your toilet hygienically clean and fresh-smelling.",
    category: "Home Care",
    image: "/images/tolietcleaner.png",
    imageAlt: "D-Waash toilet cleaner for germ-free bathroom hygiene",
    features: ["Kills 99.9% germs", "Limescale removal", "Thick gel formula", "Long-lasting freshness"],
    schemaName: "D-Waash Toilet Cleaner",
  },
  {
    id: "bleach-toilet-cleaner",
    name: "Bleach & Toilet Cleaner",
    tagline: "Bleach power, complete clean",
    description:
      "D-Waash Bleach & Toilet Cleaner combines the whitening power of bleach with effective toilet cleaning. Removes stubborn stains, disinfects, and leaves surfaces sparkling.",
    category: "Home Care",
    image: "/images/bleachtolietcleaner.png",
    imageAlt: "D-Waash bleach and toilet cleaner multi-purpose",
    features: ["Bleach-based formula", "Whitens & disinfects", "Removes tough stains", "Multi-surface"],
    schemaName: "D-Waash Bleach & Toilet Cleaner",
  },
  {
    id: "anti-ant-powder",
    name: "Anti-Ant Powder",
    tagline: "Stop them at the door",
    description:
      "D-Waash Anti-Ant Powder creates a fast-acting barrier against ants and crawling insects. Long-lasting protection that is easy to apply and safe to use around the home.",
    category: "Home Care",
    image: "/images/antpowerder.png",
    imageAlt: "D-Waash anti-ant powder for home insect control",
    features: ["Fast-acting barrier", "Long-lasting protection", "Easy to apply", "Safe around home"],
    schemaName: "D-Waash Anti-Ant Powder",
  },
  {
    id: "dish-wash-liquid",
    name: "Dish Wash Liquid",
    tagline: "Grease gone in seconds",
    description:
      "D-Waash Dish Wash Liquid cuts through tough grease and baked-on food with ease. Its concentrated formula is gentle on hands while leaving dishes sparkling clean.",
    category: "Home Care",
    image: "/images/dishwash.png",
    imageAlt: "D-Waash dish wash liquid for grease-free utensils",
    features: ["Cuts tough grease", "Lemon-fresh scent", "Gentle on hands", "Concentrated formula"],
    schemaName: "D-Waash Dish Wash Liquid",
  },
  {
    id: "floor-cleaner",
    name: "Floor Cleaner",
    tagline: "Shine from every angle",
    description:
      "D-Waash Floor Cleaner delivers a streak-free shine on tiles, marble, and vinyl. Its dilutable formula cleans deep while leaving a pleasant, fresh fragrance.",
    category: "Home Care",
    image: "/images/floorclean.png",
    imageAlt: "D-Waash floor cleaner for sparkling floors",
    features: ["Streak-free shine", "Multi-surface safe", "Fresh fragrance", "Dilutable formula"],
    schemaName: "D-Waash Floor Cleaner",
  },
  {
    id: "floor-cleaner-2in1",
    name: "Floor Cleaner 2-in-1",
    tagline: "Clean & disinfect in one",
    description:
      "D-Waash Floor Cleaner 2-in-1 combines powerful cleaning with disinfecting action. Kills germs as it cleans, with no rinsing required and a pleasant scent.",
    category: "Home Care",
    image: "/images/floorclean2.png",
    imageAlt: "D-Waash floor cleaner 2-in-1 with disinfectant",
    features: ["2-in-1 clean & disinfect", "Kills germs", "No rinse needed", "Pleasant scent"],
    schemaName: "D-Waash Floor Cleaner 2-in-1",
  },
  {
    id: "floor-cleaner-disinfectant",
    name: "Floor Cleaner Disinfectant",
    tagline: "Hospital-grade clean at home",
    description:
      "D-Waash Floor Cleaner Disinfectant delivers hospital-grade cleaning for your floors. Kills 99.9% of bacteria while remaining gentle on floor surfaces.",
    category: "Home Care",
    image: "/images/floorclean3.png",
    imageAlt: "D-Waash floor cleaner disinfectant for deep cleaning",
    features: ["Disinfecting formula", "Kills 99.9% bacteria", "Gentle on surfaces", "Fresh after-scent"],
    schemaName: "D-Waash Floor Cleaner Disinfectant",
  },
];

export const categories = ["All", "Laundry", "Home Care", "Personal Care"];