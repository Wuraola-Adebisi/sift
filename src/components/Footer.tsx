import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const productLinks = [
  { label: 'Research', href: '/research' },
  { label: 'How it works', href: '/how-it-works' },
  { label: 'Examples', href: '/examples' },
  { label: 'About Sift', href: '/about' },
]

const legalLinks = [
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Terms of use', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 pb-8 pt-20 sm:px-8 md:px-12 md:pt-24 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.9fr] lg:gap-20">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-[-0.03em]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-black text-[#101110]">
                S
              </span>

              SIFT
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[var(--muted)]">
              AI research for better buying decisions. Tell Sift what you are
              looking for and get a shortlist built around what actually
              matters to you.
            </p>

            <Link
              to="/research"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3.5 text-sm font-bold text-[#101110] transition hover:bg-[var(--accent-dark)]"
            >
              Start researching

              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--subtle)]">
              Product
            </p>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--subtle)]">
              Legal
            </p>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--subtle)]">
              Get in touch
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:hello@sift.app"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <Mail size={16} aria-hidden="true" />
                hello@sift.app
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <Instagram size={16} aria-hidden="true" />
                Instagram
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-5 border-t border-[var(--border)] pt-6 text-xs text-[var(--subtle)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sift. All rights reserved.</p>

          <p>AI-assisted research. Your decision remains yours.</p>
        </div>
      </div>
    </footer>
  )
}