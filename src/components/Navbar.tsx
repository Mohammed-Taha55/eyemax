"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Brands", href: "#brands" },
  { label: "Frames", href: "#frames" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] max-w-6xl">
      <nav className="relative flex items-center justify-between px-6 py-3 rounded-2xl bg-white/30 backdrop-blur-xl border border-black/30 shadow-lg">

        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo3.jpeg"
            alt="Eyemax optical store"
            width={36}
            height={36}
            className="object-contain rounded-md"
          />
          <span className="text-2xl font-semibold tracking-wide uppercase">
            Eyemax
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navItems.map(({ label, href }) => {
            const isActive = active === href;

            return (
              <Link
                key={label}
                href={href}
                className={`relative transition ${
                  isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {label}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="tel:+918660428450"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Call Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-900"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-full left-0 mt-4 w-full rounded-2xl bg-white shadow-xl border border-black/10 p-6 md:hidden">
            <div className="flex flex-col gap-5 text-sm font-medium">
              {navItems.map(({ label, href }) => {
                const isActive = active === href;

                return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`${
                      isActive ? "text-black" : "text-gray-700"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}

              <Link
                href="tel:+918660428450"
                className="pt-4 border-t border-black/10 text-gray-800"
              >
                Call Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
