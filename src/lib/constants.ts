export const BG_IMAGE_1 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_074534_f0d9d476-3f86-4c67-9b12-dfc63d99da41.png&w=1920&q=85";

export const BG_IMAGE_2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260802_075145_1b557479-775b-43af-8270-f45d79d97d5a.png&w=1920&q=85";

export interface Product {
  id: string;
  title: string;
  price: number;
  tag: string;
}

export const PRODUCTS: Product[] = [
  { id: "cyber-tex-overcoat", title: "CYBER-TEX OVERCOAT", price: 850, tag: "LIMITED EDITION" },
  { id: "geo-mesh-hoodie", title: "GEO-MESH TECH HOODIE", price: 320, tag: "NEW DROP" },
  { id: "orbital-trousers", title: "ORBITAL TAPERED TROUSERS", price: 290, tag: "IN STOCK" },
  { id: "modular-vest", title: "MODULAR ALL-WEATHER VEST", price: 410, tag: "PRE-ORDER" },
];

export interface CollectionEntry {
  id: string;
  series: string;
  name: string;
  description: string;
}

export const COLLECTIONS: CollectionEntry[] = [
  {
    id: "synthetic-horizons",
    series: "SERIES 01",
    name: "SYNTHETIC HORIZONS",
    description:
      "Ultra-durable weather-sealed fabrics with minimalist silhouette architecture.",
  },
  {
    id: "kinetic-form",
    series: "SERIES 02",
    name: "KINETIC FORM",
    description:
      "Ergonomic streetwear designed for maximum mobility and temperature equilibrium.",
  },
  {
    id: "monochrome-zero",
    series: "SERIES 03",
    name: "MONOCHROME ZERO",
    description:
      "Pure black and white structural tailoring crafted from 100% recycled polymers.",
  },
];

export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  readTime: string;
}

export const JOURNAL: JournalEntry[] = [
  {
    id: "next-gen-textiles",
    date: "AUG 2026",
    title: "THE ARCHITECTURE OF NEXT-GEN TEXTILES",
    readTime: "4 MIN READ",
  },
  {
    id: "circular-design",
    date: "JUL 2026",
    title: "CIRCULAR DESIGN IN HIGH-END APPAREL",
    readTime: "6 MIN READ",
  },
  {
    id: "minimalism-functional",
    date: "JUN 2026",
    title: "MINIMALISM AS A FUNCTIONAL STATEMENT",
    readTime: "3 MIN READ",
  },
];
