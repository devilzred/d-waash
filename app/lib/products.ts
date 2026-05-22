export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  sizes?: string[];
  features: string[];
  schemaName: string;    // ← Used in JSON-LD structured data for Google
};

export const products: Product[] = [
  {
    id: "suncare-detergent-powder",
    name: "SunCare Detergent Powder",
    tagline: "Brilliant whites, every wash",
    description:
      "D-Waash SunCare Detergent Powder delivers powerful cleaning action that removes tough stains while keeping fabrics bright. Formulated for both machine and hand wash.",
    category: "Laundry",
    image: "/images/product1.jpeg",
    imageAlt: "D-Waash SunCare Detergent Powder 4kg budget pack",
    sizes: ["1 kg", "2 kg", "4 kg + 2 kg Free"],
    features: ["Tough stain removal", "Brightens whites", "Machine & hand wash", "Long-lasting fragrance"],
    schemaName: "D-Waash SunCare Detergent Powder",
  },
  {
    id: "comfine-fabric-softener",
    name: "Comfine Fabric Softener",
    tagline: "Softness you can feel",
    description:
      "D-Waash Comfine Fabric Conditioner leaves your clothes irresistibly soft, fresh-smelling, and easy to iron. Perfect for daily laundry care.",
    category: "Laundry",
    image: "/images/product2.jpeg",
    imageAlt: "D-Waash Comfine fabric softener conditioner 500ml pink bottle",
    sizes: ["500 ml", "1 L"],
    features: ["Ultra-soft finish", "Reduces static", "Long-lasting fragrance", "Easy ironing"],
    schemaName: "D-Waash Comfine Fabric Softener",
  },
  {
    id: "bar-soap",
    name: "D-Waash Bar Soap",
    tagline: "Pure clean, every use",
    description:
      "Our classic bar soap is crafted for effective daily hygiene. Gentle on skin, tough on germs — trusted by families across the region.",
    category: "Personal Care",
    image: "/images/product3.jpeg",
    imageAlt: "D-Waash hygiene bar soap for daily use",
    features: ["Gentle on skin", "Antibacterial", "Rich lather", "Fresh fragrance"],
    schemaName: "D-Waash Bar Soap",
  },
  {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    tagline: "Sparkling clean, germ-free",
    description:
      "D-Waash Toilet Cleaner is a powerful formula that removes limescale, stains and kills 99.9% of germs, leaving your toilet hygienically clean and fresh.",
    category: "Home Care",
    image: "/images/product4.jpeg",
    imageAlt: "D-Waash toilet cleaner for bathroom hygiene",
    features: ["Kills 99.9% germs", "Limescale removal", "Fresh fragrance", "Under-rim action"],
    schemaName: "D-Waash Toilet Cleaner",
  },
  {
    id: "bathroom-cleaner",
    name: "Bathroom Cleaner",
    tagline: "Floor to ceiling clean",
    description:
      "A multi-surface bathroom cleaner that tackles soap scum, grease and grime on tiles, floors and fittings. Leaves surfaces gleaming and hygienic.",
    category: "Home Care",
    image: "/images/product5.jpeg",
    imageAlt: "D-Waash bathroom cleaner multi-surface spray",
    features: ["Multi-surface", "Cuts through grease", "Streak-free finish", "Anti-bacterial"],
    schemaName: "D-Waash Bathroom Cleaner",
  },
  {
    id: "anti-ant-powder",
    name: "Anti-Ant Powder",
    tagline: "Keep the intruders out",
    description:
      "D-Waash Anti-Ant Powder is an effective, fast-acting solution that creates a barrier against ants and crawling insects — safe to use around the home.",
    category: "Home Care",
    image: "/images/product6.jpeg",
    imageAlt: "D-Waash anti-ant insect repellent powder",
    features: ["Fast-acting barrier", "Long-lasting protection", "Easy to apply", "Safe for home use"],
    schemaName: "D-Waash Anti-Ant Powder",
  },
];

export const categories = ["All", "Laundry", "Home Care", "Personal Care"];