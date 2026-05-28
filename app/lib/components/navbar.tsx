"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";


const leftLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "#products" },
];

const rightLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    hydrated && scrolled
      ? "bg-surface-body/90 backdrop-blur-md border-b border-border"
      : "bg-transparent"
  }`;

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={headerClass}>
      <nav
        className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between md:grid md:grid-cols-3 my-6"
        aria-label="Main navigation"
      >
        {/* Left nav links - desktop only */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {leftLinks.map((link) => (
            <li key={link.href}>
              {link.href === "/" ? (
                <a
                  href="#home"
                  onClick={handleHomeClick}
                  className="text-base font-body text-gray-600 hover:text-blue-brand transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-body text-gray-600 hover:text-blue-brand transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Center logo */}
        <Link href="/" className="flex items-center justify-center gap-3" aria-label="D-Waash Home">
          <div className="relative h-12 w-40 pb-1 md:h-18 md:w-60">
            <Image
              src="/logo/dwaash-logo.png"
              alt="D-Waash Logo"
              fill
              sizes="240px"
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Right nav links - desktop only */}
        <ul className="hidden md:flex items-center gap-8 justify-self-end" role="list">
          {rightLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-body text-gray-600 hover:text-blue-brand transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-surface-section border-t border-border px-6 py-4 flex flex-col gap-4">
          {[...leftLinks, ...rightLinks].map((link) =>
            link.href === "/" ? (
              <a
                key={link.href}
                href="#home"
                onClick={handleHomeClick}
                className="text-gray-700 hover:text-blue-brand font-body text-base transition-colors cursor-pointer"
              >
                Home
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-700 hover:text-blue-brand font-body text-base transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
