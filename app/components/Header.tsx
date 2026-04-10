"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/portafolio", label: "Proyectos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-primary md:hidden cursor-pointer active:scale-95 duration-200">
            menu
          </span>
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-primary font-headline"
          >
            +CHANGARROS
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body transition-colors ${
                pathname === link.href
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-primary font-medium"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contacto"
          className="bg-primary hover:opacity-90 text-on-primary px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
          Cotiza Gratis
        </Link>
      </div>
    </header>
  );
}
