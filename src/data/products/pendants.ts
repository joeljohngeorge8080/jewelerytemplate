/**
 * Pendants catalog.
 *
 * TO ADD YOUR OWN PRODUCTS:
 * 1. Drop your image file(s) into public/products/pendants/
 * 2. Copy one of the objects below and edit its fields.
 * 3. Reference your image as "/products/pendants/<your-filename>.jpg"
 */
import type { Product } from "@/types/product";

export const pendants: Product[] = [
  {
    id: "pendant-ruby-heart",
    name: "Ruby Heart Pendant",
    category: "pendants",
    price: "Price on enquiry",
    shortDescription: "18K Gold, Ruby",
    description:
      "Replace this with your product description — materials, craftsmanship, and care details.",
    material: "18K Gold",
    gemstone: "Ruby",
    images: ["/products/pendants/sample-1.svg"],
  },
  {
    id: "pendant-emerald-drop",
    name: "Emerald Drop Pendant",
    category: "pendants",
    price: "Price on enquiry",
    shortDescription: "White Gold, Emerald",
    description:
      "Replace this with your product description — materials, craftsmanship, and care details.",
    material: "White Gold",
    gemstone: "Emerald",
    images: ["/products/pendants/sample-2.svg"],
  },
];
