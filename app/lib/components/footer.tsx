import Link from "next/link";
import { siteConfig } from "../metadata";
import Image from "next/image";


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-section border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <div className="relative h-14 w-44 mb-3">
            <Image
              src="/logo/dwaash-logo.png"
              alt="D-Waash"
              fill
              sizes="176px"
              className="object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Your Daily Hygiene quality cleaning and hygiene products trusted by
            families across the region since 2021.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href={`https://wa.me/${siteConfig.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact D-Waash on WhatsApp"
              className="text-gray-400 hover:text-blue-brand transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-widest mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3" role="list">
            <li><a href="#products" className="text-gray-500 text-sm hover:text-blue-brand transition-colors cursor-pointer">All Products</a></li>
            <li><a href="#story" className="text-gray-500 text-sm hover:text-blue-brand transition-colors cursor-pointer">Our Story</a></li>
            <li><a href="#contact" className="text-gray-500 text-sm hover:text-blue-brand transition-colors cursor-pointer">Contact & Location</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-widest mb-5">
            Customer Care
          </h3>
          <address className="not-italic space-y-3 text-sm text-gray-500">
            <p>{siteConfig.address.street}</p>
            <p>{siteConfig.address.city}, {siteConfig.address.state}</p>
            <a href={`tel:${siteConfig.phone}`} className="block hover:text-blue-brand transition-colors">
              {siteConfig.phone} (Customer Support)
            </a>
            <a href={`tel:${siteConfig.phone2} `} className="block hover:text-blue-brand transition-colors">
              {siteConfig.phone2} (Customer Support)
            </a>
            <a href={`tel:${siteConfig.salesPhone}`} className="block hover:text-blue-brand transition-colors">
              {siteConfig.salesPhone} (Sales & Marketing)
            </a>
            <a href={`mailto:${siteConfig.email}`} className="block hover:text-blue-brand transition-colors">
              {siteConfig.email}
            </a>
          </address>
        </div>
      </div>

      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-400">
          &copy; {year} D-Waash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
