/**
 * @file Collection.tsx
 * @description Product listing page with category filter tabs.
 * Reads/writes the "category" query param so filtered links (e.g. from Hero)
 * land directly on the right tab.
 */
import React, { memo, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { dataService } from "@/services/dataService";
import { CATEGORY_LABELS, type Product, type ProductCategory } from "@/types/product";

const CATEGORIES: (ProductCategory | "all")[] = [
  "all",
  "rings",
  "earrings",
  "pendants",
  "bracelets",
];

const Collection: React.FC = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = (searchParams.get("category") as ProductCategory | "all") || "all";
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dataService.getProducts(activeCategory).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [activeCategory]);

  const setCategory = (category: ProductCategory | "all") => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-20" id="collection-page">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            OUR COLLECTION
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
            Explore the Pieces
          </h1>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium tracking-wide elegant-transition ${
                activeCategory === cat
                  ? "btn-gold"
                  : "border border-border text-foreground hover:text-accent"
              }`}
              aria-pressed={activeCategory === cat}
            >
              {cat === "all" ? "All" : CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {loading ? (
          <p className="text-center text-muted-foreground py-12">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No products in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="luxury-card p-4 group elegant-transition hover:scale-[1.02]"
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 elegant-transition"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h2 className="font-serif text-lg font-semibold text-primary mb-1">
                    {product.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.shortDescription}
                  </p>
                  <p className="text-sm font-medium text-accent-foreground">
                    {product.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
});

Collection.displayName = "Collection";

export default Collection;
