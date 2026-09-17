import { useState } from "react";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Compass,
  GitCompareArrows,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const principles = [
  {
    number: "01",
    title: "Start with the person.",
    description:
      "The same category can mean completely different things to different people. Sift starts with your situation, priorities, and constraints before looking at options.",
  },
  {
    number: "02",
    title: "Reduce the decision surface.",
    description:
      "More options do not automatically produce better decisions. Sift is designed to narrow a large market into a smaller set of relevant choices.",
  },
  {
    number: "03",
    title: "Make the reasoning visible.",
    description:
      "A recommendation without context is difficult to trust. Sift should show why something fits, where it falls short, and what trade-off you are making.",
  },
  {
    number: "04",
    title: "Know when not to recommend.",
    description:
      "An option that violates an important requirement should not appear simply because it is popular. Constraints are part of the decision.",
  },
];

const boundaries = {
  does: [
    "Interpret natural-language buying requests",
    "Identify priorities and constraints",
    "Compare options against the brief",
    "Explain relevant trade-offs",
    "Reduce a large choice set into a shortlist",
  ],
  doesNot: [
    "Pretend there is one objectively perfect option",
    "Hide important compromises",
    "Optimise recommendations for popularity alone",
    "Replace your own judgement",
    "Guarantee that every recommendation is right",
  ],
};

export default function About() {
  const [activeTab, setActiveTab] = useState<"does" | "doesNot">("does");

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main>
        <section className="px-6 pb-28 pt-20 sm:px-8 md:px-12 md:pb-36 md:pt-28 lg:px-16 lg:pb-44 lg:pt-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-28">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  About Sift
                </p>

                <h1 className="mt-6 text-5xl font-semibold leading-[0.88] tracking-[-0.065em] md:text-7xl lg:text-[6.8rem]">
                  The internet has
                  <br />
                  enough options.
                  <br />
                  <span className="text-[var(--accent)]">You need fewer.</span>
                </h1>
              </div>

              <div className="max-w-md lg:pb-2">
                <p className="text-base leading-8 text-[var(--muted)] md:text-lg">
                  Sift is an AI research tool for buying decisions. It is built
                  around a simple idea: shopping gets harder when the amount of
                  information grows faster than your ability to make sense of
                  it.
                </p>

                <p className="mt-6 text-sm leading-7 text-[var(--subtle)]">
                  Jewelry, furniture, skincare, electronics, fashion, fitness,
                  travel gear, gifts, and whatever else you are trying to figure
                  out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-28">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  The problem
                </p>

                <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  Research has become a task of its own.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-8">
                  <Search
                    size={20}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                    Search is abundant.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    Search engines can find almost anything. The difficult part
                    is figuring out which of those things are actually relevant
                    to you.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-8">
                  <CircleAlert
                    size={20}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                    Comparison is noisy.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    Reviews, rankings, specifications, videos, social posts,
                    forums, and shopping pages all give you fragments of the
                    answer.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-8">
                  <Compass
                    size={20}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                    Context gets lost.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    The option that is right for one person can be completely
                    wrong for another. Generic rankings rarely capture that.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-8">
                  <Sparkles
                    size={20}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                    AI can handle the middle.
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    The useful role for AI is not simply generating more
                    information. It is making a large amount of information
                    easier to reason about.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                How we think about it
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Four principles behind Sift.
              </h2>
            </div>

            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="grid gap-6 py-10 md:grid-cols-[80px_0.8fr_1.2fr] md:gap-10 md:py-12"
                >
                  <span className="text-xs text-[var(--subtle)]">
                    {principle.number}
                  </span>

                  <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  Where AI comes in
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  The useful part of AI is not giving you more to read.
                </h2>
              </div>

              <div className="space-y-4">
                <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-8">
                  <p className="text-xs font-semibold text-[var(--accent)]">
                    01 / Understand
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                    Turn natural language into a buying brief.
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    You can say what you want the way you would say it to
                    another person. Sift uses AI to identify your budget,
                    intended use, priorities, constraints, preferences, and what
                    you explicitly do not care about.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-8">
                  <p className="text-xs font-semibold text-[var(--accent)]">
                    02 / Research
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                    Make sense of a messy information landscape.
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    AI helps Sift work across product information,
                    specifications, reviews, and other relevant research to
                    identify the options that actually deserve attention.
                  </p>
                </div>

                <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-8">
                  <p className="text-xs font-semibold text-[var(--accent)]">
                    03 / Reason
                  </p>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
                    Explain why an option fits.
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    Rather than returning a generic ranking, Sift uses AI to
                    connect the research back to your original brief and explain
                    the relevant trade-offs.
                  </p>
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
                  The boundaries
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  Good research also means knowing what not to claim.
                </h2>

                <p className="mt-7 max-w-md text-sm leading-7 text-[var(--muted)]">
                  Sift is intended to support a decision, not disguise a
                  recommendation as objective truth.
                </p>
              </div>

              <div>
                <div className="mb-5 flex rounded-full bg-[var(--surface)] p-1">
                  <button
                    type="button"
                    onClick={() => setActiveTab("does")}
                    className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold transition ${
                      activeTab === "does"
                        ? "bg-[var(--accent)] text-[#101110]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    What Sift does
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("doesNot")}
                    className={`flex-1 rounded-full px-5 py-3 text-sm font-semibold transition ${
                      activeTab === "doesNot"
                        ? "bg-[var(--accent)] text-[#101110]"
                        : "text-[var(--muted)]"
                    }`}
                  >
                    What Sift does not
                  </button>
                </div>

                <div className="rounded-[28px] bg-[var(--surface)] p-7 md:p-9">
                  <div className="space-y-1">
                    {boundaries[activeTab].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 border-b border-[var(--border)] py-5 last:border-0"
                      >
                        <div
                          className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                            activeTab === "does"
                              ? "bg-[var(--accent)] text-[#101110]"
                              : "bg-[var(--background)] text-[var(--subtle)]"
                          }`}
                        >
                          {activeTab === "does" ? (
                            <Check size={14} aria-hidden="true" />
                          ) : (
                            <X size={14} aria-hidden="true" />
                          )}
                        </div>

                        <p className="text-sm leading-7 text-[var(--muted)]">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-16 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                The methodology
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Research should leave a trail.
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                As Sift develops, recommendations should become easier to
                inspect rather than harder. The goal is to make the reasoning
                behind a shortlist understandable.
              </p>
            </div>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-9">
                <Search
                  size={18}
                  className="text-[var(--accent)]"
                  aria-hidden="true"
                />

                <p className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                  Sources
                </p>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  Product claims and relevant specifications should ultimately
                  be traceable to their underlying sources.
                </p>
              </div>

              <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-9">
                <ShieldCheck
                  size={18}
                  className="text-[var(--accent)]"
                  aria-hidden="true"
                />

                <p className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                  Constraints
                </p>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  Important requirements should be treated as constraints, not
                  quietly ignored when an option looks attractive.
                </p>
              </div>

              <div className="rounded-[28px] bg-[var(--background)] p-7 md:p-9">
                <GitCompareArrows
                  size={18}
                  className="text-[var(--accent)]"
                  aria-hidden="true"
                />

                <p className="mt-16 text-xl font-semibold tracking-[-0.03em]">
                  Trade-offs
                </p>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  When no option is perfect, the compromise should be visible
                  instead of hidden behind a single score.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-32 sm:px-8 md:px-12 md:pb-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="rounded-[36px] bg-[var(--accent)] px-8 py-20 text-[#101110] sm:px-10 md:px-16 md:py-28 lg:px-20 lg:py-32">
              <div className="grid gap-14 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-28">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#101110]/60">
                    The point
                  </p>

                  <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-7xl">
                    Better shopping is not about seeing everything.
                  </h2>
                </div>

                <div>
                  <p className="text-sm leading-7 text-[#101110]/70 md:text-base">
                    It is about getting enough of the right information to make
                    a decision you understand.
                  </p>

                  <Link
                    to="/research"
                    className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#101110] px-6 py-4 text-sm font-bold text-[var(--accent)] transition hover:scale-[1.02]"
                  >
                    Try Sift
                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
