import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  SlidersHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { categories, type Verdict } from "../data/researchCatalog";
import { usePageTitle } from "../hooks/usePageTitle";

const verdictBadge: Record<Verdict, string> = {
  Buy: "bg-[var(--accent)] text-[#101110]",
  Consider: "bg-[#f5c945] text-[#101110]",
  Skip: "bg-[#f2795c]/15 text-[#f2795c]",
};

const verdictBorder: Record<Verdict, string> = {
  Buy: "border-l-[var(--accent)]",
  Consider: "border-l-[#f5c945]",
  Skip: "border-l-[#f2795c]",
};

export default function Examples() {
  usePageTitle("Examples — Sift");
  const [activeId, setActiveId] = useState(categories[0].id);

  const active =
    categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main>
        <section className="px-6 pb-24 pt-20 sm:px-8 md:px-12 md:pb-32 md:pt-28 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Example research
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-[6.5rem]">
                See what a Sift
                <br />
                answer looks like.
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                Jewelry, furniture, electronics, fashion, fitness, skincare,
                travel gear, and more. Different needs produce different
                recommendations.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-32 sm:px-8 md:px-12 md:pb-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-medium text-[var(--subtle)]">
                Choose a research brief
              </p>

              <p className="text-xs text-[var(--subtle)]">
                {categories.length} examples
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => {
                const isActive = category.id === activeId;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setActiveId(category.id)}
                    className={`min-h-[150px] rounded-[24px] p-6 text-left transition ${
                      isActive
                        ? "bg-[var(--accent)] text-[#101110]"
                        : "bg-[var(--surface)] hover:bg-[var(--surface-light)]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={`text-xs ${
                          isActive
                            ? "text-[#101110]/50"
                            : "text-[var(--subtle)]"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <ChevronRight
                        size={15}
                        className={
                          isActive ? "text-[#101110]" : "text-[var(--subtle)]"
                        }
                        aria-hidden="true"
                      />
                    </div>

                    <div className="mt-12">
                      <p className="text-sm font-semibold">{category.name}</p>

                      <p
                        className={`mt-1 text-xs ${
                          isActive
                            ? "text-[#101110]/60"
                            : "text-[var(--subtle)]"
                        }`}
                      >
                        {category.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-16 lg:grid-cols-[320px_1fr] lg:gap-24">
              <aside>
                <div className="lg:sticky lg:top-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                    The brief
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-[0.95] tracking-[-0.04em]">
                    {active.name}
                  </h2>

                  <div className="mt-8 rounded-[24px] bg-[var(--background)] p-6">
                    <p className="text-sm leading-7 text-[var(--muted)]">
                      “{active.exampleBrief}”
                    </p>
                  </div>

                  <div className="mt-8 space-y-2">
                    {active.criteria.map((criterion) => (
                      <div
                        key={criterion.label}
                        className="rounded-[18px] bg-[var(--background)] px-4 py-3.5"
                      >
                        <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--subtle)]">
                          {criterion.label}
                        </p>

                        <p className="mt-1 text-sm">{criterion.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <div>
                <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                      Sift result
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl">
                      The shortlist
                    </h2>
                  </div>

                  <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
                    The ranking changes because the brief changes. Sift matches
                    the research to the person, not just the category.
                  </p>
                </div>

                <div className="space-y-4">
                  {active.results.map((product) => (
                    <article
                      key={product.name}
                      className={`rounded-[28px] border-l-4 bg-[var(--background)] p-6 md:p-8 ${
                        verdictBorder[product.verdict]
                      }`}
                    >
                      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="flex gap-5">
                          <span className="pt-1 text-xs text-[var(--subtle)]">
                            {product.rank}
                          </span>

                          <div>
                            <h3 className="text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                              {product.name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex shrink-0 items-center gap-3 md:flex-col md:items-end md:gap-2">
                          <span
                            className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${
                              verdictBadge[product.verdict]
                            }`}
                          >
                            {product.verdict}
                          </span>

                          <p className="text-xl font-semibold">
                            {product.price}
                          </p>
                        </div>
                      </div>

                      <div className="mt-7 grid gap-6 sm:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                            Why it fits
                          </p>

                          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                            {product.whyItFits}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--subtle)]">
                            Where it falls short
                          </p>

                          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                            {product.whereItFallsShort}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 rounded-2xl border border-[var(--border)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--subtle)]">
                          What would change this
                        </p>

                        <p className="mt-1.5 text-sm leading-6 text-[var(--muted)]">
                          {product.whatWouldChangeThis}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {product.specs.map((spec) => (
                          <span
                            key={spec.label}
                            className="rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]"
                          >
                            <span className="text-[var(--subtle)]">
                              {spec.label}:
                            </span>{" "}
                            {spec.value}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 rounded-[28px] bg-[var(--background)] p-7 md:p-9">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-[var(--accent)]">
                      <Check size={17} aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                        Sift's conclusion
                      </p>

                      <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">
                        {active.takeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Same category. Different answer.
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  The brief changes everything.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-[24px] bg-[var(--surface)] p-6">
                  <CircleDollarSign
                    size={19}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  <p className="mt-10 text-sm font-semibold">Budget changes</p>

                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                    A product can move from ideal to irrelevant when the budget
                    changes.
                  </p>
                </div>

                <div className="rounded-[24px] bg-[var(--surface)] p-6">
                  <Clock3
                    size={19}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  <p className="mt-10 text-sm font-semibold">Context changes</p>

                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                    Commuting, gifting, travelling, decorating, and working
                    create different requirements.
                  </p>
                </div>

                <div className="rounded-[24px] bg-[var(--surface)] p-6">
                  <SlidersHorizontal
                    size={19}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  <p className="mt-10 text-sm font-semibold">
                    Priorities change
                  </p>

                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">
                    What matters most determines which compromises make sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-12 sm:px-8 md:px-12 md:pb-16 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="rounded-[36px] bg-[var(--accent)] px-8 py-20 text-[#101110] md:px-16 md:py-28">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#101110]/60">
                    Your turn
                  </p>

                  <h2 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                    Give Sift a problem to solve.
                  </h2>
                </div>

                <Link
                  to="/research"
                  className="group flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#101110] px-6 py-4 text-sm font-bold text-[var(--accent)] transition hover:scale-[1.02]"
                >
                  Start researching
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
