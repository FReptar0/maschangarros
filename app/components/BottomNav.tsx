"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/servicios", icon: "bolt", label: "Services" },
  { href: "/portafolio", icon: "auto_awesome", label: "Work" },
  { href: "/contacto", icon: "menu_book", label: "Contact" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-white rounded-t-2xl z-50 border-t border-surface-container-high shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center px-4 py-1.5 transition-transform active:scale-90 ${
              isActive
                ? "bg-secondary-container text-primary rounded-xl"
                : "text-on-surface-variant"
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={
                isActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {item.icon}
            </span>
            <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
