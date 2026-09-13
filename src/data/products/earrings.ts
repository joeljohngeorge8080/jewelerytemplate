/**
 * Earrings catalog.
 *
 * TO ADD YOUR OWN PRODUCTS:
 * 1. Drop your image file(s) into public/products/earrings/
 * 2. Copy one of the objects below and edit its fields.
 * 3. Reference your image as "/products/earrings/<your-filename>.jpg"
 */
import type { Product } from "@/types/product";

export const earrings: Product[] = [
  {
    id: "earring-sapphire-drop",
    name: "Sapphire Drop Earrings",
    category: "earrings",
    price: "Price on enquiry",
    shortDescription: "18K Gold, Sapphire",
    description:
      "Replace this with your product description — materials, craftsmanship, and care details.",
    material: "18K Gold",
    gemstone: "Sapphire",
    images: ["/products/earrings/sample-1.svg"],
  },
  {
    id: "earring-diamond-stud",
    name: "Diamond Stud Earrings",
    category: "earrings",
    price: "Price on enquiry",
    shortDescription: "White Gold, Diamond",
    description:
      "Replace this with your product description — materials, craftsmanship, and care details.",
    material: "White Gold",
    gemstone: "Diamond",
    images: ["/products/earrings/sample-2.svg"],
  },
];
