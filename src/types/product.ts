/**
 * @file product.ts
 * @description Shared product types used by every category data file
 * and by the Collection / ProductDetail pages.
 */

export type ProductCategory = "rings" | "earrings" | "pendants" | "bracelets";

export interface Product {
  /** Unique, URL-safe id, e.g. "ring-classic-solitaire" */
  id: string;
  name: string;
  category: ProductCategory;
  /** Display string, e.g. "$1,200" or "Price on enquiry" */
  price: string;
  /** One-line summary shown on collection cards */
  shortDescription: string;
  /** Longer copy shown on the product detail page */
  description: string;
  material?: string;
  gemstone?: string;
  /**
   * Paths under /public, e.g. "/products/rings/sample-1.webp".
   * First image is used as the card thumbnail.
   */
  images: string[];
}

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  rings: "Rings",
  earrings: "Earrings",
  pendants: "Pendants",
  bracelets: "Bracelets",
};
