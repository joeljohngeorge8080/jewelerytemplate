/**
 * Bracelets catalog.
 *
 * TO ADD YOUR OWN PRODUCTS:
 * 1. Drop your image file(s) into public/products/bracelets/
 * 2. Copy one of the objects below and edit its fields.
 * 3. Reference your image as "/products/bracelets/<your-filename>.jpg"
 */
import type { Product } from "@/types/product";

export const bracelets: Product[] = [
  {
    id: "bracelet-emerald-tennis",
    name: "Emerald Tennis Bracelet",
    category: "bracelets",
    price: "Price on enquiry",
    shortDescription: "18K Gold, Emerald",
    description:
      "Replace this with your product description — materials, craftsmanship, and care details.",
    material: "18K Gold",
    gemstone: "Emerald",
    images: ["/products/bracelets/sample-1.svg"],
  },
  {
    id: "bracelet-gold-bangle",
    name: "Classic Gold Bangle",
    category: "bracelets",
    price: "Price on enquiry",
    shortDescription: "22K Gold",
    description:
      "Replace this with your product description — materials, craftsmanship, and care details.",
    material: "22K Gold",
    images: ["/products/bracelets/sample-2.svg"],
  },
];
