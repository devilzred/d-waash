# D-Waash Website

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Static Generation

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

---

## Adding Your Images

All images live in `/public/images/`. The `<Image>` component (next/image) handles:
- Auto WebP/AVIF conversion
- Lazy loading
- Correct srcset for all screen sizes

### Logo
Place your logo file at:
```
/public/images/logo.png
```
Then in `components/Navbar.tsx`, replace the `<span>` fallback with:
```tsx
<Image src="/images/logo.png" alt="D-Waash logo" width={140} height={48} priority className="h-10 w-auto object-contain" />
```

### Product Images
1. Copy product photos to `/public/images/` (recommended: square, min 800×800 px, JPEG/PNG/WebP)
2. Open `lib/products.ts`
3. Update the `image` field for each product:
```ts
image: "/images/your-product-filename.jpg",
```
The `imageAlt` field is already filled with SEO-optimised alt text — **keep it or improve it**.

### OG Image (for Google/social previews)
Place a 1200×630 px image at:
```
/public/images/og-default.jpg
```

---

## SEO Checklist

| Item | Where to update |
|------|----------------|
| Site URL | `lib/metadata.ts` → `BASE_URL` |
| Phone / email | `lib/metadata.ts` → `siteConfig` |
| Address | `lib/metadata.ts` → `siteConfig.address` |
| GPS coordinates | `lib/metadata.ts` → `siteConfig.geo` |
| Social links | `lib/metadata.ts` → `siteConfig.social` |
| Google Search Console token | `app/layout.tsx` → `verification.google` |
| Product names/descriptions | `lib/products.ts` |
| Map embed | `app/contact/page.tsx` → iframe `src` |

---

## File Structure

```
dwaash/
├── app/
│   ├── layout.tsx          ← Fonts, global SEO, JSON-LD org schema
│   ├── page.tsx            ← Homepage
│   ├── globals.css         ← Tailwind + custom CSS
│   ├── sitemap.ts          ← Auto sitemap.xml
│   ├── robots.ts           ← robots.txt
│   ├── not-found.tsx       ← 404 page
│   ├── about/page.tsx      ← Our Story
│   ├── contact/page.tsx    ← Contact + Map
│   └── products/
│       ├── page.tsx        ← Products listing
│       └── [slug]/page.tsx ← Individual product (SSG)
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ProductCard.tsx
├── lib/
│   ├── products.ts         ← All product data (update images here)
│   └── metadata.ts         ← SEO config (update domain, contact here)
└── public/
    └── images/             ← PUT YOUR IMAGES HERE
```

---

## Deployment (Vercel — recommended)

1. Push to GitHub
2. Import to [vercel.com](https://vercel.com)
3. Deploy — zero config needed for Next.js

After deploying:
- Submit `https://yourdomain.com/sitemap.xml` to Google Search Console
- Set up Google Business Profile for local search visibility
```