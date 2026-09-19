import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

export default function NotFound() {
  usePageTitle("Page not found — Sift");

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="px-6 py-32 text-center sm:px-8 md:px-12 md:py-44 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          404
        </p>

        <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl">
          Nothing here.
        </h1>

        <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-[var(--muted)]">
          The page you're looking for doesn't exist, or the link is broken.
        </p>

        <Link
          to="/"
          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-bold text-[#101110] transition hover:bg-[var(--accent-dark)]"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-x-1"
          />
          Back home
        </Link>
      </main>

      <Footer />
    </div>
  );
}
