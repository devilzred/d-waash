import dynamic from "next/dynamic";
import Image from "next/image";
import { products } from "./lib/products";
import { siteConfig } from "./lib/metadata";
import ProductCard from "./lib/components/productsCard";

const HeroBackground = dynamic(() => import("./lib/components/heroBackground"));

const stats = [
  { value: "2021", label: "Founded" },
  { value: "100+", label: "Products" },
  { value: "1000+", label: "Happy Families" },
];

const timeline = [
  {
    year: "2021", month: "April",
    title: "D-Waash is Born",
    desc: "Mr. Thafseel, a successful hypermarket owner, launches D-Waash to manufacture and sell quality hygiene products through his own outlets in the region.",
  },
  {
    year: "2021", month: "Mid",
    title: "Word Spreads Fast",
    desc: "Customers at his hypermarket outlets begin sharing their experience. Positive word of mouth drives a steady increase in enquiries and repeat purchases.",
  },
  {
    year: "2022", month: "Early",
    title: "Expanding to Nearby Outlets",
    desc: "Growing demand pushes D-Waash beyond the hypermarket. Products begin appearing in nearby retail outlets across the surrounding areas.",
  },
  {
    year: "2022–23", month: "",
    title: "The Region Takes Notice",
    desc: "More customers across surrounding areas begin searching specifically for D-Waash products, a clear signal of brand recognition forming organically.",
  },
  {
    year: "2024+", month: "",
    title: "Building a Full-Fledged Brand",
    desc: "Mr. Thafseel makes the strategic decision to invest in D-Waash as a standalone brand expanding the product range, distribution, and now, digital presence.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen grid-bg flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden"
        aria-label="Hero section"
      >
        <HeroBackground />

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-brand opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-brand opacity-[0.03] rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-8 reveal">
            <div className="relative h-20 w-52 mx-auto">
              <Image
                src="/logo/dwaash-logo.webp"
                alt="D-Waash"
                fill
                sizes="208px"
                priority
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-blue-brand font-display font-semibold text-sm uppercase tracking-[0.25em] mb-4 reveal reveal-delay-1">
            Your Daily Hygiene
          </p>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-gray-900 max-w-4xl leading-tight mb-6 reveal reveal-delay-2">
            <span className="block md:hidden">
              D-Waash – Clean<br />
              Home,{" "}<span className="gradient-text">Happy<br />Family</span>
            </span>
            <span className="hidden md:inline">
              D-Waash – Clean Home,{" "}
              <span className="gradient-text">Happy Family</span>
            </span>
          </h1>

          <p className="text-gray-500 text-lg max-w-xl leading-relaxed mb-10 reveal reveal-delay-3">
            Premium hygiene products from detergent powders to fabric softeners,
            trusted by families across the region since 2021.
          </p>
        </div>{/* /relative z-10 */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-gray-400 font-body">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-blue-brand to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-surface-section border-y border-border py-12" aria-label="Brand highlights">
        <div className="max-w-4xl mx-auto px-6">
          {/* Mobile */}
          <div className="block md:hidden space-y-4">
            <div className="text-center reveal">
              <p className="font-display font-extrabold text-3xl gradient-text mb-1">{stats[0].value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-display">{stats[0].label}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              {stats.slice(1).map((s, i) => (
                <div key={s.label} className={`reveal reveal-delay-${i + 2}`}>
                  <p className="font-display font-extrabold text-3xl gradient-text mb-1">{s.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-display">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={s.label} className={`reveal reveal-delay-${i + 1}`}>
                <p className="font-display font-extrabold text-4xl gradient-text mb-1">{s.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-display">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section id="products" className="section-gradient py-16" aria-labelledby="products-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-blue-brand text-xs font-display font-semibold uppercase tracking-[0.2em] mb-3">
              Our Range
            </p>
            <h2 id="products-heading" className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 mb-4">
              Products You Can Trust
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-base">
              Every D-Waash product is formulated for effective daily hygiene quality you can see,
              results you can feel.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-4 lg:gap-5">
            {products.map((product, idx) => (
              <div key={product.id}>
                <ProductCard product={product} priority={idx < 6} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section id="story" className="bg-surface-section border-y border-border py-24 overflow-hidden" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-blue-brand text-xs font-display font-semibold uppercase tracking-[0.25em] mb-3">
              Our Story
            </p>
            <h2 id="story-heading" className="font-display font-extrabold text-3xl md:text-5xl text-gray-900 mb-4 leading-tight">
              From One Store to a <span className="gradient-text">Trusted Brand</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base">
              D-Waash began with a belief in quality and customers who agreed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal">
              <p className="text-gray-500 leading-relaxed mb-4">
                <strong className="text-gray-900">Mr. Thafseel</strong> is a hypermarket owner who also runs
                several subsidiary businesses across the region. In April 2021, he saw an opportunity to
                bring quality hygiene products at fair prices directly to the community he served.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                Starting with his own hypermarket outlets, he launched D-Waash with a simple promise:
                effective products that every family can afford and trust.
              </p>
              <p className="text-gray-500 leading-relaxed">
                The rest, as they say, is history written by thousands of satisfied customers who kept
                coming back and spreading the word.
              </p>
            </div>

            <div className="reveal reveal-delay-2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden card-glow">
                <div className="img-placeholder relative w-full h-full min-h-[260px] overflow-hidden rounded-xl bg-white">
                  <Image
                    src="/images/bannerimg.webp"
                    alt="Mr. Thafseel — Founder, D-Waash"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/05"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-2 border-blue-brand rounded-2xl opacity-20" />
            </div>
          </div>

          <div className="divider max-w-3xl mx-auto mb-16" />

          <div className="max-w-4xl mx-auto">
            <h3 className="font-display font-extrabold text-2xl text-gray-900 text-center mb-16 reveal">
              The D-Waash <span className="gradient-text">Journey</span>
            </h3>
            <ol className="relative border-l border-border space-y-12 ml-4" role="list">
              {timeline.map((item, i) => (
                <li key={item.title} className={`relative pl-8 reveal reveal-delay-${(i % 3) + 1}`}>
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-blue-brand bg-surface-body" aria-hidden="true" />
                  <time className="text-xs font-display font-semibold text-blue-brand uppercase tracking-widest">
                    {item.month && `${item.month} `}{item.year}
                  </time>
                  <h4 className="font-display font-bold text-gray-900 text-lg mt-1 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ─── WHY D-WAASH ─── */}
      <section className="section-gradient py-24" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <h2 id="why-heading" className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">
              Why Families Choose D-Waash
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "✅", title: "Quality You Can Trust", desc: "Every product meets strict quality standards before it reaches your home." },

              { icon: "💰", title: "Affordable for All", desc: "Premium hygiene shouldn't be a luxury. D-Waash keeps prices accessible." },
              { icon: "🧼", title: "Full Hygiene Range", desc: "From laundry to bathrooms — we cover every corner of your daily hygiene routine." },
              { icon: "💬", title: "Word-of-Mouth Growth", desc: "Built entirely on customer love and positive recommendations no shortcuts." },
              { icon: "📍", title: "Available Nearby", desc: "D-Waash products are available at outlets across the region and growing." },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-surface-section border border-border rounded-2xl p-6 hover:border-blue-brand/30 transition-colors duration-300`}
              >
                <span className="text-3xl mb-4 block" role="img" aria-hidden="true">{item.icon}</span>
                <h3 className="font-display font-bold text-gray-900 text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="bg-surface-section border-y border-border py-24" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-blue-brand text-xs font-display font-semibold uppercase tracking-[0.25em] mb-3">
              Get in Touch
            </p>
            <h2 id="contact-heading" className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">
              Reach Us
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              For product enquiries, stockist partnerships, or customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="reveal space-y-5">
              {[
                {
                  icon: "phone", label: "Customer Care", value: [siteConfig.phone, siteConfig.phone2], href: `tel:${siteConfig.phone}`,
                },
                {
                  icon: "phone", label: "Sales & Marketing", value: siteConfig.salesPhone, href: `tel:${siteConfig.salesPhone}`,
                },
                {
                  icon: "email", label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`,
                },

              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-surface-body border border-border rounded-2xl p-5 hover:border-blue-brand/40 hover:shadow-lg hover:shadow-blue-brand/5 transition-all duration-200 group"
                >
                  <span className="w-10 h-10 rounded-lg bg-surface-elevated flex items-center justify-center text-blue-brand shrink-0 group-hover:bg-blue-brand group-hover:text-white transition-all duration-200">
                    {item.icon === "phone" ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ) : item.icon === "email" ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    )}
                  </span>
                  <div>
                    <p className="text-xs text-gray-400 font-display uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-gray-900 font-body text-sm group-hover:text-blue-brand transition-colors">
                      {Array.isArray(item.value) ? item.value.map((line, i) => (
                        <span key={i} className={i > 0 ? "block md:inline" : ""}>
                          {i > 0 && <span className="hidden md:inline"> / </span>}
                          {line}
                        </span>
                      )) : item.value}
                    </p>
                  </div>
                </a>
              ))}

              <div className="bg-surface-body border border-border rounded-2xl p-6 hover:border-blue-brand/40 transition-all duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center text-blue-brand shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-widest">Business Hours</h3>
                </div>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <dt className="text-gray-400">Monday – Saturday</dt>
                    <dd className="text-gray-600 font-medium">9:00 AM – 6:00 PM</dd>
                  </div>
                  <div className="flex justify-between py-2">
                    <dt className="text-gray-400">Sunday</dt>
                    <dd className="text-red-brand font-medium">Closed</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="reveal reveal-delay-2 flex flex-col gap-4">

              {/* Maps Card */}
              <a
                href="https://maps.app.goo.gl/U4F6WPGVdjVNZ4ht9"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl card-glow h-80 sm-h-36 flex flex-col items-center justify-center gap-4 p-8 group"
              >
                <span className="w-16 h-16 rounded-2xl bg-blue-brand/10 flex items-center justify-center text-blue-brand group-hover:bg-blue-brand group-hover:text-white transition-all duration-200">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>

                <p className="font-display font-bold text-lg text-gray-900 group-hover:text-blue-brand transition-colors text-center">
                  Find Us on Google Maps
                </p>

                <span className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                  Open in Maps ↗
                </span>
              </a>

              {/* Address Card */}
              <div className="bg-surface-body border border-border rounded-2xl p-5 hover:border-blue-brand/40 transition-all duration-200 -mt-1">

                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-blue-brand"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <p className="text-xs font-display uppercase tracking-widest text-gray-400">
                    Address
                  </p>
                </div>

                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} –{" "}
                  {siteConfig.address.postalCode}
                </address>

                <a
                  href="https://maps.app.goo.gl/U4F6WPGVdjVNZ4ht9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-xs text-blue-brand hover:text-blue-light transition-colors"
                >
                  Open in Maps ↗
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
