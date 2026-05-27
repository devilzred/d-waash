import ProductImage from "./productImage";
import type { Product } from "../products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article
      className="card-glow bg-surface-section rounded-xl sm:rounded-2xl overflow-hidden flex flex-col min-h-[230px] sm:min-h-[300px] m-2"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-[#eef2ff] via-[#faf5ff] to-[#fdf2f8]">
        <ProductImage
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-contain p-2 sm:p-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          priority={priority}
          itemProp="image"
        />
      </div>

      <div className="p-2 sm:p-4 flex flex-col gap-1.5 sm:gap-2 flex-1 justify-center min-h-[80px] sm:min-h-[100px]">
        <span
          className="inline-flex self-start items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-display font-semibold bg-blue-dim text-blue-brand uppercase tracking-wider"
          itemProp="category"
        >
          {product.category}
        </span>
        <h3 className="font-display font-extrabold text-sm sm:text-base text-gray-900 leading-tight line-clamp-2" itemProp="name">
          {product.name}
        </h3>
        <p className="text-[10px] sm:text-xs font-display text-gray-400 leading-snug">
          {product.tagline}
        </p>
      </div>

      <span itemProp="brand" itemScope itemType="https://schema.org/Brand" className="sr-only">
        <span itemProp="name">D-Waash</span>
      </span>
    </article>
  );
}
