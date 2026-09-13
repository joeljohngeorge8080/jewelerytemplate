/**
 * @file ProductDetail.tsx
 * @description Single product page — image gallery, description, specs,
 * and an Enquire button that hands off to the Contact page.
 */
import React, { memo, useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { dataService } from "@/services/dataService";
import { CATEGORY_LABELS, type Product } from "@/types/product";

const ProductDetail: React.FC = memo(() => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (id) {
      dataService.getProductById(id).then((data) => {
        setProduct(data);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) {
    return <main className="min-h-screen pt-28 pb-20">Loading...</main>;
  }

  if (!product) {
    return <Navigate to="/collection" replace />;
  }

  return (
    <main className="min-h-screen pt-28 pb-20" id="product-detail-page">
      <div className="container mx-auto px-6">
        <nav className="text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
          <Link to="/collection" className="hover:text-accent">
            Collection
          </Link>
          <span className="mx-2">/</span>
          <span>{CATEGORY_LABELS[product.category]}</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="luxury-card p-4 mb-4">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={img}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 elegant-transition ${
                      activeImage === idx ? "border-accent" : "border-transparent"
                    }`}
                    aria-label={`View image ${idx + 1} of ${product.name}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
              {CATEGORY_LABELS[product.category]}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-accent-foreground mb-6">
              {product.price}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {(product.material || product.gemstone) && (
              <dl className="grid grid-cols-2 gap-4 mb-8 border-t border-border pt-6">
                {product.material && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Material</dt>
                    <dd className="font-medium text-foreground">{product.material}</dd>
                  </div>
                )}
                {product.gemstone && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Gemstone</dt>
                    <dd className="font-medium text-foreground">{product.gemstone}</dd>
                  </div>
                )}
              </dl>
            )}

            <Link
              to={`/contact?product=${encodeURIComponent(product.name)}`}
              className="btn-gold inline-block text-base font-medium"
            >
              ENQUIRE ABOUT THIS PIECE
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
});

ProductDetail.displayName = "ProductDetail";

export default ProductDetail;
