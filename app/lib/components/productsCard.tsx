import ProductImage from "./productImage";
import type { Product } from "../products";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article
      className="card-glow bg-[#0a1628] rounded-2xl overflow-hidden flex flex-col"
      itemScope
      itemType="https://schema.org/Product"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#0f2040]">
        <ProductImage
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
          itemProp="image"
        />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <span className="text-xs font-display font-semibold text-[#00c6c6] uppercase tracking-widest" itemProp="category">
            {product.category}
          </span>
          <h3 className="font-display font-bold text-white text-lg leading-snug mt-1" itemProp="name">
            {product.name}
          </h3>
          <p className="text-[#00c6c6] font-display text-sm font-semibold mt-1">{product.tagline}</p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed" itemProp="description">
          {product.description}
        </p>

        <ul className="flex flex-wrap gap-2" role="list">
          {product.features.map((f) => (
            <li
              key={f}
              className="text-xs bg-[#1e3a5a] text-slate-300 px-3 py-1 rounded-full"
            >
              {f}
            </li>
          ))}
        </ul>

        {product.sizes && (
          <div>
            <p className="text-xs text-slate-500 font-display uppercase tracking-widest mb-2">Available Sizes</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <span key={s} className="text-xs border border-[#1e3a5a] text-slate-300 px-3 py-1 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <span itemProp="brand" itemScope itemType="https://schema.org/Brand" className="sr-only">
        <span itemProp="name">D-Waash</span>
      </span>
    </article>
  );
}
