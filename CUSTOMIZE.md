# Customizing This Jewelry Shop Template

This guide explains how to customize this template for a specific jewelry shop. Follow these steps to adapt the site for your brand and products.

## Quick Summary

**You should only edit these files/folders:**
- `src/config/shop.config.ts` — Shop name, logo, contact info
- `src/data/` — Products and site content (brand story, about, values)
- `src/styles/theme.css` — Brand colors
- `public/` — Logo, product images, favicon
- `.env.local` — Environment-specific settings (create by copying `.env.example`)

**DO NOT edit these files** (they are shared across all shops):
- `src/components/` — Reusable components
- `src/pages/` — Page logic
- `src/hooks/` — React hooks
- `src/App.tsx` — App structure

---

## Step-by-Step Customization

### 1. Shop Metadata (5 minutes)

Edit `src/config/shop.config.ts`:

```typescript
export const shopConfig = {
  name: "Your Jewelry Shop Name",        // ← Change this
  slug: "your-shop-slug",               // ← Change this (no spaces, lowercase)
  tagline: "Your tagline here",         // ← Change this
  contactEmail: "your-email@example.com",    // ← Change this
  contactPhone: "+1 234 567 8900",           // ← Change this
  logo: "/logo.webp",                   // ← Keep as is, update actual logo below
  favicon: "💎",                        // ← Change emoji if desired
};
```

### 2. Brand Colors (5 minutes)

Edit `src/styles/theme.css`:

Change the primary color values:

```css
:root {
  /* Primary color (main brand color) */
  --primary: 25 30% 20%;        /* ← Change this */
  
  /* Accent color (highlights, CTAs) */
  --accent: 45 70% 75%;         /* ← Change this */
  
  /* Gold variants (luxury signature) */
  --gold: 45 85% 65%;           /* ← Change this */
  --gold-light: 48 60% 85%;
  --gold-dark: 40 75% 55%;
  
  /* Silk/background gradients */
  --silk: 35 15% 96%;           /* ← Change this */
  --silk-dark: 30 20% 92%;
  
  /* ... rest stays the same ... */
}
```

**How to find colors:** Use an HSL color picker online or use your brand's hex colors and convert to HSL.

### 3. Products (20 minutes per category)

#### Products by Category

Edit files in `src/data/products/`:
- `src/data/products/rings.ts`
- `src/data/products/earrings.ts`
- `src/data/products/pendants.ts`
- `src/data/products/bracelets.ts`

Each file has the same structure:

```typescript
export const rings: Product[] = [
  {
    id: "ring-unique-id",                    // ← Unique identifier (no spaces)
    name: "Ring Name",                      // ← Display name
    category: "rings",
    price: "Price on enquiry",              // ← Or "$1,200" if you want to show price
    shortDescription: "18K Gold, Diamond",  // ← Brief description for cards
    description: "Longer description for the detail page...",
    material: "18K Gold",                   // ← Optional
    gemstone: "Diamond",                    // ← Optional
    images: ["/products/rings/image-1.webp"],  // ← Image path (see step 4)
  },
  // ... add more products ...
];
```

**To add a product:**
1. Copy the object above
2. Change the `id`, `name`, `description`, `material`, `gemstone`
3. Set the image path (update in step 4 first)
4. Save

**To remove a product:**
- Delete the entire object from the array

### 4. Product Images (Varies)

Replace placeholder images with your actual product photos:

```
public/products/
├── rings/
│   ├── sample-1.webp  ← Replace with your ring image
│   ├── sample-2.webp  ← Replace with your ring image
│   └── (add more images here)
├── earrings/
├── pendants/
└── bracelets/
```

**Image requirements:**
- Format: WEBP or JPG (WEBP preferred for better compression)
- Size: Around 1000x1000px or larger
- Keep filenames simple: `ring-classic-1.webp`, `earring-gold-stud.webp`, etc

**Update product data:**
Once you upload images, update the `images` array in the product data file:

```typescript
images: [
  "/products/rings/ring-classic-1.webp",
  "/products/rings/ring-classic-detail.webp",
]
```

### 5. Brand Story & About Section (10 minutes)

Edit `src/data/siteContent.ts`:

```typescript
export const aboutContent = {
  subtitle: "OUR STORY",                    // ← Keep or change
  titleLines: [
    "TRADITION",
    "CARED FOR",
    "SINCE 1998"                           // ← Change year
  ],
  storyParagraphs: [
    "Your first paragraph of brand story...",    // ← Edit
    "Your second paragraph of brand story...",   // ← Edit
  ],
  heroImage: "/about/story-1.webp",        // ← Update image
  overlayImage: "/about/story-2.webp",     // ← Update image
  values: [
    {
      title: "Craftsmanship",
      description: "Your craftsmanship description...",  // ← Edit
    },
    {
      title: "Sourcing",
      description: "Your sourcing description...",       // ← Edit
    },
    {
      title: "Guarantee",
      description: "Your guarantee/warranty...",         // ← Edit
    },
  ],
  stats: [
    { value: "25+", label: "Years of Craft" },          // ← Edit
    { value: "10k+", label: "Pieces Delivered" },        // ← Edit
    { value: "3", label: "Generations" },               // ← Edit
  ],
};
```

### 6. About Page Images (Varies)

Replace images in `public/about/`:

```
public/about/
├── story-1.webp  ← Your main about image
└── story-2.webp  ← Your secondary about image
```

### 7. Contact Information (2 minutes)

Contact info is pulled from `src/config/shop.config.ts` (already done in step 1).
Also update `src/data/siteContent.ts` for address:

```typescript
export const contactInfo = {
  addressLines: [
    "Your Street Address",
    "City, Country, Postal Code"
  ],
  phone: "+1 234 567 8900",
  email: "contact@yourshop.com",
};
```

### 8. Logo & Favicon (5 minutes)

Replace the logo:

```
public/logo.webp  ← Replace with your shop logo
```

Update favicon in `public/favicon/` or just use an emoji in `src/config/shop.config.ts`:

```typescript
favicon: "💎",  // ← Change emoji
```

### 9. Environment Setup (1 minute)

Create `.env.local` (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Edit `.env.local` (this file is never committed):

```
VITE_SHOP_NAME="Your Jewelry Store"
VITE_SHOP_SLUG="your-shop"
VITE_API_BASE=           # Leave empty for now
```

---

## Build & Deploy

### Test Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:8080` and verify:
- [ ] Logo appears in header
- [ ] Brand colors are correct
- [ ] All products display
- [ ] About page shows your story
- [ ] Contact page has your email/phone

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready to deploy.

### Deploy

Options:
- **Vercel** (recommended for beginners): Push to GitHub, connect Vercel repo, auto-deploys
- **Netlify**: Similar to Vercel
- **Any static host**: Upload `dist/` folder to hosting (AWS S3, Azure, etc)

---

## Cloning for Another Shop

When you need to create a jewelry site for a different shop:

1. Clone/fork this entire repository
2. Follow all steps above (1-9) with the new shop's details
3. Deploy to a new URL
4. Each shop has its own codebase and deployment

---

## Troubleshooting

### Colors not changing
- Clear browser cache: `Ctrl+Shift+Delete` (or `Cmd+Shift+Delete` on Mac)
- Rebuild: `npm run build`

### Images not showing
- Check image file exists in `public/`
- Check path is correct in product data: `/products/rings/name.webp` not `products/rings/name.webp`
- Image must be `.webp`, `.jpg`, or `.png`

### Products not appearing
- Check product `id` is unique (no duplicates)
- Check category matches: `category: "rings"` must match the file name
- Check syntax (TypeScript errors show on build)

### Brand name not updating
- Did you edit `src/config/shop.config.ts`?
- Clear cache and refresh browser
- Rebuild: `npm run build`

---

## What NOT to Change

These files are shared templates and breaking them affects all shops:

- ❌ `src/components/` — Component logic
- ❌ `src/pages/` — Page structure
- ❌ `src/App.tsx` — App routing
- ❌ `tailwind.config.ts` — Tailwind setup
- ❌ `vite.config.ts` — Build config
- ❌ `package.json` — Dependencies

If you need to add a feature (e.g., testimonials section), make it reusable so future shops can benefit too.

---

## Need Help?

- Build fails? Run `npm install` first
- TypeScript errors? Check your JSON syntax in `.ts` files
- Still stuck? Check your changes against the examples above
