/**
 * @file shop.config.ts
 * @description Central configuration for this shop instance.
 * Edit this file when cloning for a new shop to customize:
 * - Brand name, logo, contact info
 * - Feature toggles
 * - API endpoints (for future backend integration)
 */

export const shopConfig = {
  // Brand identity
  name: "JewelReact",
  slug: "jewelreact",
  tagline: "Crafting timeless elegance",

  // Contact information (also in siteContent.ts, but shopConfig is the source of truth)
  contactEmail: "contact@lumiere-atelier.com",
  contactPhone: "+33 1 42 60 95 23",
  logo: "/logo.webp",

  // Browser tab icon
  favicon: "💎",

  // Future: API endpoint for backend integration
  apiBase: process.env.VITE_API_BASE || null,

  // Feature toggles (disable features for certain shops)
  features: {
    enquireForm: true,
    blog: false,
    testimonials: false,
    multiLanguage: false,
  },
};
