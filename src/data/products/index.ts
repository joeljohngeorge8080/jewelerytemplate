import type { Product, ProductCategory } from "@/types/product";
import { rings } from "./rings";
import { earrings } from "./earrings";
import { pendants } from "./pendants";
import { bracelets } from "./bracelets";

export const allProducts: Product[] = [
  ...rings,
  ...earrings,
  ...pendants,
  ...bracelets,
];

export const getProductsByCategory = (category?: ProductCategory | "all"): Product[] => {
  if (!category || category === "all") return allProducts;
  return allProducts.filter((p) => p.category === category);
};

export const getProductById = (id: string): Product | undefined =>
  allProducts.find((p) => p.id === id);

export { rings, earrings, pendants, bracelets };
