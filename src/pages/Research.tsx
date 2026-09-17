import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  categories,
  matchCategory,
  type ResearchCategory,
  type Verdict,
} from "../data/researchCatalog";

const examples = categories.map((category) => category.exampleBrief);

type Status = "idle" | "loading" | "results" | "no-match";

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

export default function Research() {
  const location = useLocation();
  const navigate = useNavigate();

  const [brief, setBrief] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [category, setCategory] = useState<ResearchCategory | null>(null);
  const hasHandledIncomingBrief = useRef(false);

  // A brief can arrive from the homepage's own search box via router state.
  // Run it once on mount, then clear the state so back/refresh doesn't
  // re-trigger it.
  useEffect(() => {
    if (hasHandledIncomingBrief.current) return;
    hasHandledIncomingBrief.current = true;

    const incoming = (location.state as { brief?: string } | null)?.brief;
    if (incoming) {
      runSearch(incoming);
      navigate(location.pathname, { replace: true, state: null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function runSearch(text: string) {
    if (!text.trim()) return;

    setBrief(text);
    setStatus("loading");

    // Stands in for the AI requirement-extraction + research step. There's
    // no model behind this yet, so this is a fixed delay against a
    // controlled dataset (see src/data/researchCatalog.ts) rather than a
    // real query — but the UI flow is exactly what a live version would do.
    window.setTimeout(() => {
      const matched = matchCategory(text);
      setCategory(matched);
      setStatus(matched ? "results" : "no-match");
    }, 900);
  }

  const handleSearch = () => runSearch(brief);
  const handleExample = (example: string) => runSearch(example);

  const handleNewSearch = () => {
    setBrief("");
    setCategory(null);
    setStatus("idle");
  };

  const showForm = status === "idle" || status === "no-match";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      {showForm && (
        <main className="px-6 pb-24 pt-20 sm:px-8 md:px-12 md:pb-32 md:pt-28 lg:px-16">
          <div className="mx-auto max-w-[1100px]">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-[#101110]">
                <Search size={19} aria-hidden="true" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Sift research
              </p>

              {status === "no-match" ? (
                <>
                  <h1 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                    This demo doesn't cover that yet.
                  </h1>

                  <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                    Sift's demo catalogue currently covers four categories —
                    jewelry, headphones, furniture, and running shoes. Try
                    editing your brief to mention one of those, or start from
                    an example below.
                  </p>
                </>
              ) : (
                <>
                  <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                    What are you trying to find?
                  </h1>

                  <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                    Describe what you need in your own words. Include your
                    budget, how you will use it, and anything you care about.
                    Sift uses AI to turn your description into research
                    criteria.
                  </p>
                </>
              )}
            </div>

            <div className="mx-auto mt-14 max-w-4xl rounded-[32px] bg-[var(--surface)] p-3 shadow-2xl shadow-black/20 md:mt-16">
              <div className="rounded-[24px] bg-[var(--surface-light)] p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Your brief</p>

                    <p className="mt-1 text-xs text-[var(--subtle)]">
                      There are no required fields.
                    </p>
                  </div>

                  <Sparkles
                    size={18}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />
                </div>

                <label htmlFor="research-brief" className="sr-only">
                  Your brief
                </label>

                <textarea
                  id="research-brief"
                  value={brief}
                  onChange={(event) => setBrief(event.target.value)}
                  rows={8}
                  placeholder="I need a gold necklace for everyday wear. Something simple but not boring. Around $300."
                  className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--foreground)] outline-none placeholder:text-[var(--subtle)] focus:border-[var(--accent)]"
                />

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[var(--subtle)]">
                    AI will interpret your request and build the research
                    around it.
                  </p>

                  <button
                    type="button"
                    onClick={handleSearch}
                    disabled={!brief.trim()}
                    className="group flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 text-sm font-bold text-[#101110] transition hover:bg-[var(--accent-dark)] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Start research
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-14 max-w-4xl">
              <div className="mb-5 flex items-center gap-2">
                <Clock3
                  size={14}
                  className="text-[var(--subtle)]"
                  aria-hidden="true"
                />

                <p className="text-xs font-medium text-[var(--subtle)]">
                  Start with an example
                </p>
              </div>

              <div className="grid gap-3">
                {examples.map((example) => (
                  <button
                    key={example}
                    type="button"
                    onClick={() => handleExample(example)}
                    className="group flex items-center justify-between gap-6 rounded-2xl bg-[var(--surface)] px-5 py-5 text-left transition hover:bg-[var(--surface-light)]"
                  >
                    <span className="text-sm leading-6 text-[var(--muted)] transition group-hover:text-[var(--foreground)]">
                      {example}
                    </span>

                    <ArrowRight
                      size={16}
                      className="shrink-0 text-[var(--subtle)] transition group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}

      {status === "loading" && (
        <main className="px-6 py-32 sm:px-8 md:px-12 lg:px-16">
          <div
            role="status"
            className="mx-auto flex max-w-xl flex-col items-center text-center"
          >
            <div
              aria-hidden="true"
              className="mb-6 h-11 w-11 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--accent)]"
            />

            <p className="text-sm text-[var(--muted)]">
              Reading your brief and building your shortlist…
            </p>
          </div>
        </main>
      )}

      {status === "results" && category && (
        <main className="px-6 pb-24 pt-16 sm:px-8 md:px-12 md:pb-32 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-[1280px]">
            <button
              type="button"
              onClick={handleNewSearch}
              className="group mb-12 flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              <ArrowLeft
                size={15}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-x-1"
              />
              New research
            </button>

            <div className="grid gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
              <aside>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Your brief
                </p>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {brief}
                </p>

                <div className="mt-8">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal
                      size={14}
                      className="text-[var(--accent)]"
                      aria-hidden="true"
                    />

                    <p className="text-xs font-semibold">What Sift picked up</p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {category.criteria.map((criterion) => (
                      <div
                        key={criterion.label}
                        className="rounded-2xl bg-[var(--surface)] px-4 py-3"
                      >
                        <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--subtle)]">
                          {criterion.label}
                        </p>

                        <p className="mt-1 text-sm text-[var(--muted)]">
                          {criterion.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <section>
                <div className="mb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                    AI-assisted shortlist
                  </p>

                  <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                    Your shortlist, explained.
                  </h1>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                    Ranked and reasoned around what you told us — not simply
                    by popularity or price. Each product gets a plain
                    verdict: buy it, consider it, or skip it.
                  </p>
                </div>

                <div className="space-y-4">
                  {category.results.map((product) => (
                    <article
                      key={product.name}
                      className={`rounded-[28px] border-l-4 bg-[var(--surface)] p-6 md:p-8 ${
                        verdictBorder[product.verdict]
                      }`}
                    >
                      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        <div className="flex gap-5">
                          <span className="pt-1 text-xs font-medium text-[var(--subtle)]">
                            {product.rank}
                          </span>

                          <div>
                            <p className="text-xs text-[var(--subtle)]">
                              {product.category}
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                              {product.name}
                            </h2>
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
                            className="rounded-full bg-[var(--surface-light)] px-3 py-1.5 text-xs text-[var(--muted)]"
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

                <div className="mt-10 rounded-[28px] bg-[var(--surface)] p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-light)] text-[var(--accent)]">
                      <Sparkles size={17} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        What Sift would tell you
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                        {category.takeaway}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-xs leading-6 text-[var(--subtle)]">
                  AI-generated research can contain mistakes. Verify important
                  product details, pricing, availability, and other material
                  claims before purchasing.
                </p>
              </section>
            </div>
          </div>
        </main>
      )}

      <Footer />
    </div>
  );
}