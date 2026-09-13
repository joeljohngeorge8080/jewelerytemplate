/**
 * @file dataService.ts
 * @description Abstract data layer for products and site content.
 *
 * Phase 1 (now): Wraps static imports from src/data/*
 * Phase 2 (future): Swap to fetch from backend API
 * Components call these functions, so they don't care where data comes from.
 */

import type { Product, ProductCategory } from "@/types/product";
import {
  getProductsByCategory as getStaticProductsByCategory,
  getProductById as getStaticProductById,
} from "@/data/products";
import { aboutContent } from "@/data/siteContent";

export const dataService = {
  /**
   * Fetch products by category.
   * Phase 1: Returns static data from src/data/products/*.ts
   * Phase 2: Will fetch from API: GET /api/shops/{shopId}/products?category={category}
   */
  getProducts: async (category?: ProductCategory | "all"): Promise<Product[]> => {
    // TODO: When backend is ready, uncomment this:
    // const { shopConfig } = await import("@/config/shop.config");
    // if (shopConfig.apiBase) {
    //   const query = category && category !== "all" ? `?category=${category}` : "";
    //   const res = await fetch(`${shopConfig.apiBase}/products${query}`);
    //   if (!res.ok) throw new Error("Failed to fetch products");
    //   return res.json();
    // }

    // Phase 1: Static data
    return getStaticProductsByCategory(category);
  },

  /**
   * Fetch a single product by ID.
   * Phase 1: Returns static data
   * Phase 2: Will fetch from API: GET /api/shops/{shopId}/products/{id}
   */
  getProductById: async (id: string): Promise<Product | undefined> => {
    // TODO: When backend is ready, uncomment this:
    // const { shopConfig } = await import("@/config/shop.config");
    // if (shopConfig.apiBase) {
    //   const res = await fetch(`${shopConfig.apiBase}/products/${id}`);
    //   if (!res.ok) return undefined;
    //   return res.json();
    // }

    // Phase 1: Static data
    return getStaticProductById(id);
  },

  /**
   * Fetch site content (about, values, contact info, etc).
   * Phase 1: Returns static data
   * Phase 2: Will fetch from API: GET /api/shops/{shopId}/content
   */
  getSiteContent: async () => {
    // TODO: When backend is ready, uncomment this:
    // const { shopConfig } = await import("@/config/shop.config");
    // if (shopConfig.apiBase) {
    //   const res = await fetch(`${shopConfig.apiBase}/content`);
    //   if (!res.ok) throw new Error("Failed to fetch site content");
    //   return res.json();
    // }

    // Phase 1: Static data
    return aboutContent;
  },
};
