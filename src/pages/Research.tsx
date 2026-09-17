import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const examples = [
  "I need a gold necklace for everyday wear. Something simple but not boring. Around $300.",
  "I need headphones for commuting. Good noise cancellation matters. Under $400.",
  "I need a sofa for a small living room. Neutral colour, comfortable, easy to clean, under $1,500.",
  "I need running shoes for daily road runs. Comfortable and durable. Under $180.",
];

const results = [
  {
    rank: "01",
    name: "14k Solid Gold Pendant",
    category: "Jewelry",
    price: "$295",
    match: "95%",
    reason:
      "Fits the budget closely, works for everyday wear, and solid gold makes durability a stronger point.",
    tradeoff:
      "Usually offers less visual variety at this price than plated alternatives.",
  },
  {
    rank: "02",
    name: "Gold Vermeil Chain",
    category: "Jewelry",
    price: "$185",
    match: "89%",
    reason:
      "Gives you the gold look at a lower price while keeping the design simple.",
    tradeoff:
      "The finish can wear over time, particularly with frequent exposure to water and products.",
  },
  {
    rank: "03",
    name: "Gold-Plated Pendant",
    category: "Jewelry",
    price: "$95",
    match: "77%",
    reason:
      "Leaves substantial room in the budget and offers a wide range of styles.",
    tradeoff: "Less durable for the everyday-wear requirement.",
  },
];

const criteria = [
  { label: "Use case", value: "Everyday wear" },
  { label: "Budget", value: "Around $300" },
  { label: "Priority", value: "Durability" },
  { label: "Style", value: "Simple but distinctive" },
];

export default function Research() {
  const [brief, setBrief] = useState("");
  const [hasResults, setHasResults] = useState(false);

  const handleSearch = () => {
    if (!brief.trim()) return;
    setHasResults(true);
  };

  const handleExample = (example: string) => {
    setBrief(example);
    setHasResults(false);
  };

  const handleNewSearch = () => {
    setBrief("");
    setHasResults(false);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      {!hasResults ? (
        <main className="px-6 pb-24 pt-20 sm:px-8 md:px-12 md:pb-32 md:pt-28 lg:px-16">
          <div className="mx-auto max-w-[1100px]">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-[#101110]">
                <Search size={19} aria-hidden="true" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Sift research
              </p>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                What are you trying to find?
              </h1>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                Describe what you need in your own words. Include your budget,
                how you will use it, and anything you care about. Sift uses AI
                to turn your description into research criteria.
              </p>
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

                <textarea
                  value={brief}
                  onChange={(event) => setBrief(event.target.value)}
                  rows={8}
                  placeholder="I need a gold necklace for everyday wear. Something simple but not boring. Around $300."
                  className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 text-sm leading-7 text-[var(--foreground)] outline-none placeholder:text-[var(--subtle)] focus:border-[var(--accent)]"
                />

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-[var(--subtle)]">
                    AI will interpret your request and build the research around
                    it.
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
      ) : (
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
                    {criteria.map((criterion) => (
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
                    Three products worth considering.
                  </h1>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                    These are ranked around the things you said matter, not
                    simply by popularity or price.
                  </p>
                </div>

                <div className="space-y-4">
                  {results.map((product, index) => (
                    <article
                      key={product.name}
                      className={`rounded-[28px] p-6 md:p-8 ${
                        index === 0
                          ? "bg-[var(--accent)] text-[#101110]"
                          : "bg-[var(--surface)]"
                      }`}
                    >
                      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                        <div className="flex gap-5">
                          <span
                            className={`pt-1 text-xs font-medium ${
                              index === 0
                                ? "text-[#101110]/50"
                                : "text-[var(--subtle)]"
                            }`}
                          >
                            {product.rank}
                          </span>

                          <div>
                            <p
                              className={`text-xs ${
                                index === 0
                                  ? "text-[#101110]/60"
                                  : "text-[var(--subtle)]"
                              }`}
                            >
                              {product.category}
                            </p>

                            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                              {product.name}
                            </h2>

                            <p
                              className={`mt-4 max-w-xl text-sm leading-7 ${
                                index === 0
                                  ? "text-[#101110]/70"
                                  : "text-[var(--muted)]"
                              }`}
                            >
                              {product.reason}
                            </p>
                          </div>
                        </div>

                        <div className="shrink-0 md:text-right">
                          <p className="text-xl font-semibold">
                            {product.price}
                          </p>

                          <span
                            className={`mt-2 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                              index === 0
                                ? "bg-[#101110]/10"
                                : "bg-[var(--surface-light)]"
                            }`}
                          >
                            {product.match} match
                          </span>
                        </div>
                      </div>

                      <div
                        className={`mt-7 flex items-start gap-2 border-t pt-5 text-xs ${
                          index === 0
                            ? "border-[#101110]/10 text-[#101110]/60"
                            : "border-[var(--border)] text-[var(--subtle)]"
                        }`}
                      >
                        <span className="font-semibold">Trade-off:</span>
                        <span>{product.tradeoff}</span>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-10 rounded-[28px] bg-[var(--surface)] p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--surface-light)] text-[var(--accent)]">
                      <Check size={17} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold">
                        What Sift would tell you
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-7 text-[var(--muted)]">
                        The solid gold option is the closest match because
                        durability is important and it stays close to your
                        budget. Vermeil gives you a meaningful price saving if
                        you are willing to accept more maintenance.
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
