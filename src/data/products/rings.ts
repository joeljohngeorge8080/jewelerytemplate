/**
 * Rings catalog.
 *
 * TO ADD YOUR OWN PRODUCTS:
 * 1. Drop your image file(s) into public/products/rings/
 * 2. Copy one of the objects below and edit its fields.
 * 3. Reference your image as "/products/rings/<your-filename>.jpg"
 */
import type { Product } from "@/types/product";

export const rings: Product[] = [
  {
    id: "ring-classic-solitaire",
    name: "Classic Solitaire Ring",
    category: "rings",
    price: "Price on enquiry",
    shortDescription: "18K Gold, Diamond",
    description:
      "Replace this with your product description — materials, craftsmanship, sizing, and care details.",
    material: "18K Gold",
    gemstone: "Diamond",
    images: ["/products/rings/sample-1.webp"],
  },
  {
    id: "ring-eternity-band",
    name: "Eternity Band",
    category: "rings",
    price: "Price on enquiry",
    shortDescription: "Platinum, Diamond Pave",
    description:
      "Replace this with your product description — materials, craftsmanship, sizing, and care details.",
    material: "Platinum",
    gemstone: "Diamond",
    images: ["/products/rings/sample-2.webp"],
  },
];
