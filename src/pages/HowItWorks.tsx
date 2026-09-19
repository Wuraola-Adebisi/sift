import { useState } from "react";
import {
  ArrowRight,
  Check,
  FileText,
  GitCompareArrows,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

const stages = [
  {
    id: "understand",
    number: "01",
    label: "Understand",
    icon: FileText,
    title: "Start with how you actually talk.",
    description:
      "You do not need to know the exact product, model, or technical specification. Tell Sift what you need in ordinary language.",
  },
  {
    id: "filter",
    number: "02",
    label: "Prioritise",
    icon: SlidersHorizontal,
    title: "Turn the mess into criteria.",
    description:
      "Sift uses AI to identify your budget, use case, priorities, constraints, preferences, and what you explicitly do not care about.",
  },
  {
    id: "research",
    number: "03",
    label: "Research",
    icon: Search,
    title: "Narrow the field.",
    description:
      "AI helps Sift work through relevant product information and identify the options that actually satisfy the brief.",
  },
  {
    id: "compare",
    number: "04",
    label: "Compare",
    icon: GitCompareArrows,
    title: "Make the trade-offs visible.",
    description:
      "The final shortlist shows why each option fits, where it falls short, and what you gain or give up by choosing it.",
  },
];

const briefCriteria = [
  {
    label: "Use case",
    value: "Daily commuting",
  },
  {
    label: "Budget",
    value: "Under $400",
  },
  {
    label: "Must have",
    value: "Strong noise cancellation",
  },
  {
    label: "Preference",
    value: "Comfort for long sessions",
  },
  {
    label: "Not important",
    value: "Gaming features",
  },
];

export default function HowItWorks() {
  usePageTitle("How it works — Sift");

  const [activeStage, setActiveStage] = useState("understand");

  const active = stages.find((stage) => stage.id === activeStage) ?? stages[0];

  const ActiveIcon = active.icon;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main>
        <section className="px-6 pb-28 pt-20 sm:px-8 md:px-12 md:pb-36 md:pt-28 lg:px-16 lg:pb-44 lg:pt-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                How Sift works
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-[6.5rem]">
                From “I need something”
                <br />
                to “I know what to get.”
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
                Sift takes the vague, messy way people actually shop and uses AI
                to turn it into focused research.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-32 sm:px-8 md:px-12 md:pb-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">
              <div className="rounded-[32px] bg-[var(--surface)] p-4 md:p-6">
                <div className="mb-7 px-3 pt-3">
                  <p className="text-xs text-[var(--subtle)]">
                    A Sift research session
                  </p>

                  <p className="mt-2 text-sm text-[var(--muted)]">
                    Click through the process.
                  </p>
                </div>

                <div className="space-y-2">
                  {stages.map((stage) => {
                    const Icon = stage.icon;
                    const isActive = stage.id === activeStage;

                    return (
                      <button
                        key={stage.id}
                        type="button"
                        onClick={() => setActiveStage(stage.id)}
                        className={`flex w-full items-center gap-4 rounded-2xl p-4 text-left transition ${
                          isActive
                            ? "bg-[var(--accent)] text-[#101110]"
                            : "hover:bg-[var(--surface-light)]"
                        }`}
                      >
                        <span
                          className={`text-xs font-medium ${
                            isActive
                              ? "text-[#101110]/50"
                              : "text-[var(--subtle)]"
                          }`}
                        >
                          {stage.number}
                        </span>

                        <span className="flex-1 text-sm font-semibold">
                          {stage.label}
                        </span>

                        <Icon size={16} aria-hidden="true" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="min-h-[560px] rounded-[32px] bg-[var(--surface-light)] p-7 md:p-10 lg:p-12">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-[#101110]">
                    <ActiveIcon size={19} aria-hidden="true" />
                  </div>

                  <span className="text-xs text-[var(--subtle)]">
                    {active.number} / 04
                  </span>
                </div>

                <div className="mt-16 max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                    {active.label}
                  </p>

                  <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-5xl">
                    {active.title}
                  </h2>

                  <p className="mt-6 text-sm leading-7 text-[var(--muted)] md:text-base">
                    {active.description}
                  </p>
                </div>

                {active.id === "understand" && (
                  <div className="mt-12 rounded-[24px] bg-[var(--background)] p-6 md:p-7">
                    <p className="text-xs text-[var(--subtle)]">
                      What you tell Sift
                    </p>

                    <p className="mt-4 text-base leading-7">
                      “I need a gold necklace for everyday wear. Something
                      simple but not boring. Around $300.”
                    </p>
                  </div>
                )}

                {active.id === "filter" && (
                  <div className="mt-12 grid gap-2 sm:grid-cols-2">
                    {briefCriteria.map((criterion) => (
                      <div
                        key={criterion.label}
                        className="rounded-[20px] bg-[var(--background)] p-5"
                      >
                        <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--subtle)]">
                          {criterion.label}
                        </p>

                        <p className="mt-2 text-sm text-[var(--foreground)]">
                          {criterion.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {active.id === "research" && (
                  <div className="mt-12 space-y-2">
                    {[
                      ["Gold vermeil necklace", "Strong fit"],
                      ["Solid gold pendant", "Strong fit"],
                      ["Gold-plated fashion chain", "Lower fit"],
                    ].map(([name, status]) => (
                      <div
                        key={name}
                        className="flex items-center justify-between rounded-[20px] bg-[var(--background)] p-5"
                      >
                        <span className="text-sm">{name}</span>

                        <span
                          className={`flex items-center gap-2 text-xs ${
                            status === "Strong fit"
                              ? "text-[var(--accent)]"
                              : "text-[var(--subtle)]"
                          }`}
                        >
                          {status === "Strong fit" && (
                            <Check size={13} aria-hidden="true" />
                          )}

                          {status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {active.id === "compare" && (
                  <div className="mt-12 rounded-[24px] bg-[var(--background)] p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[#101110]">
                        <Sparkles size={15} aria-hidden="true" />
                      </div>

                      <p className="text-sm font-semibold">Sift's conclusion</p>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                      The solid gold option is the strongest fit if longevity
                      matters most. Vermeil gives you a similar look at a lower
                      price, while the fashion chain makes more sense if
                      durability is not a priority.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--surface)] px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  The difference
                </p>

                <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  Search finds things. Sift helps you decide.
                </h2>
              </div>

              <div className="space-y-12">
                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em]">
                    Less catalogue. More context.
                  </p>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    Traditional shopping tools are designed to maximise the
                    number of things you can browse. Sift is designed to reduce
                    the number of things you need to think about.
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em]">
                    Your priorities matter.
                  </p>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    Two people can ask for the same category and need completely
                    different recommendations. Sift starts with the person, not
                    the category.
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em]">
                    AI handles the messy middle.
                  </p>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    AI interprets the request, helps synthesise the research,
                    and connects the findings back to the original brief. The
                    result is designed to be useful, not just impressive.
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold tracking-[-0.03em]">
                    Trade-offs stay visible.
                  </p>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    There is rarely one perfect option. Sift makes the
                    compromises explicit so you can decide what matters more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-28 sm:px-8 md:px-12 md:py-40 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="rounded-[36px] bg-[var(--accent)] px-8 py-20 text-[#101110] md:px-16 md:py-28">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#101110]/60">
                  Try the real thing
                </p>

                <h2 className="mt-5 text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                  Give Sift a problem to solve.
                </h2>

                <Link
                  to="/research"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#101110] px-6 py-4 text-sm font-bold text-[var(--accent)] transition hover:scale-[1.02]"
                >
                  Start a research session
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
