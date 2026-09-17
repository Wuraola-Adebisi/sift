import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    label: "How it works",
    href: "/how-it-works",
  },
  {
    label: "Examples",
    href: "/examples",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative px-6 pt-5 sm:px-8 md:px-10 md:pt-6 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full bg-[var(--surface)] px-4 py-3 md:px-5">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-bold tracking-[-0.03em]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-black text-[#101110]">
            S
          </span>
          SIFT
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  isActive
                    ? "bg-[var(--surface-light)] text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-light)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/research"
            className="group hidden items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[#101110] transition hover:bg-[var(--accent-dark)] sm:flex"
          >
            Try Sift
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--foreground)] transition hover:bg-[var(--surface-light)] md:hidden"
          >
            {isMenuOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          className="absolute inset-x-6 top-[calc(100%+8px)] z-20 flex flex-col gap-1 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl shadow-black/30 sm:inset-x-8 md:hidden"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-[var(--surface-light)] text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:bg-[var(--surface-light)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            to="/research"
            onClick={() => setIsMenuOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-semibold text-[#101110] transition hover:bg-[var(--accent-dark)]"
          >
            Try Sift
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </nav>
      )}
    </header>
  );
}