import ProductImage from "./productImage";
import type { Product } from "../products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article
      className="card-glow bg-[#0a1628] rounded-xl sm:rounded-2xl overflow-hidden flex flex-col min-h-[230px] sm:min-h-[300px]"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0f2040]">
        <ProductImage
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover"
          priority={priority}
          itemProp="image"
        />
      </div>

      <div className="p-2 sm:p-4 flex flex-col gap-0.5 sm:gap-1 flex-1 justify-center">
        <span className="text-[10px] sm:text-xs font-display font-semibold text-[#00c6c6] uppercase tracking-wider" itemProp="category">
          {product.category}
        </span>
        <h3 className="font-display font-bold text-[11px] sm:text-sm text-white leading-snug line-clamp-2" itemProp="name">
          {product.name}
        </h3>
        <p className="text-[9px] sm:text-[11px] text-[#00c6c6] font-display font-semibold line-clamp-1">
          {product.tagline}
        </p>
      </div>

      <span itemProp="brand" itemScope itemType="https://schema.org/Brand" className="sr-only">
        <span itemProp="name">D-Waash</span>
      </span>
    </article>
  );
}
