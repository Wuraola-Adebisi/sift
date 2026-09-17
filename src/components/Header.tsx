import { ArrowUpRight } from "lucide-react";
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

  return (
    <header className="px-6 pt-5 sm:px-8 md:px-10 md:pt-6 lg:px-12">
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

        <Link
          to="/research"
          className="group flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-[#101110] transition hover:bg-[var(--accent-dark)]"
        >
          Try Sift
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </header>
  );
}
