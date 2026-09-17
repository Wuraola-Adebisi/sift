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

const examples = [
  {
    id: "jewelry",
    category: "Jewelry",
    label: "Everyday necklace",
    brief:
      "I need a gold necklace for everyday wear. Something simple but not boring. Around $300. I want it to hold up well.",
    criteria: [
      ["Use case", "Everyday wear"],
      ["Budget", "Around $300"],
      ["Priority", "Durability"],
      ["Style", "Simple but distinctive"],
    ],
    products: [
      {
        rank: "01",
        name: "14k Solid Gold Pendant",
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
        price: "$95",
        match: "77%",
        reason:
          "Leaves substantial room in the budget and offers a wide range of styles.",
        tradeoff: "Less durable for the everyday-wear requirement.",
      },
    ],
    conclusion:
      "The solid gold option is the closest match because durability was an important part of the brief, while the vermeil option gives you a meaningful price saving if you are willing to accept more maintenance.",
  },
  {
    id: "headphones",
    category: "Headphones",
    label: "Daily commute",
    brief:
      "I need headphones for commuting. Good noise cancellation matters. Under $400. I don't care about gaming.",
    criteria: [
      ["Use case", "Daily commuting"],
      ["Budget", "Under $400"],
      ["Priority", "Noise cancellation"],
      ["Secondary", "Comfort"],
    ],
    products: [
      {
        rank: "01",
        name: "Sony WH-1000XM6",
        price: "$399",
        match: "94%",
        reason:
          "Strong noise cancellation, comfortable for long commutes, and right at the stated budget.",
        tradeoff:
          "Microphone performance is not its strongest area for frequent calls.",
      },
      {
        rank: "02",
        name: "Bose QuietComfort Ultra",
        price: "$349",
        match: "89%",
        reason:
          "Excellent noise cancellation and a comfortable fit with room left in the budget.",
        tradeoff: "Shorter battery life than the Sony option.",
      },
      {
        rank: "03",
        name: "AirPods Max",
        price: "$549",
        match: "81%",
        reason:
          "Excellent transparency mode and particularly useful for Apple-heavy setups.",
        tradeoff:
          "Over budget and significantly heavier than the alternatives.",
      },
    ],
    conclusion:
      "The Sony is the closest overall match because it satisfies the main requirement without exceeding the budget. Bose becomes more compelling if comfort is the deciding factor.",
  },
  {
    id: "furniture",
    category: "Furniture",
    label: "Small living room",
    brief:
      "I need a sofa for a small living room. Neutral colour, comfortable, easy to clean, and under $1,500.",
    criteria: [
      ["Use case", "Small living room"],
      ["Budget", "Under $1,500"],
      ["Priority", "Easy maintenance"],
      ["Secondary", "Comfort"],
    ],
    products: [
      {
        rank: "01",
        name: "Performance Fabric Sofa",
        price: "$1,299",
        match: "94%",
        reason:
          "A compact profile with durable, easy-clean upholstery and enough cushioning for everyday use.",
        tradeoff:
          "Less choice in fabric colours than some fashion-led furniture brands.",
      },
      {
        rank: "02",
        name: "Compact Modular Sofa",
        price: "$1,399",
        match: "90%",
        reason:
          "Flexible configuration makes it easier to work around a smaller room.",
        tradeoff: "Modular construction can mean more visible seams.",
      },
      {
        rank: "03",
        name: "Linen Sofa",
        price: "$1,099",
        match: "82%",
        reason: "Strong aesthetic fit with a neutral palette and lower price.",
        tradeoff:
          "Linen generally requires more care than performance upholstery.",
      },
    ],
    conclusion:
      "The performance-fabric sofa fits the brief most closely because easy maintenance was more important than achieving a particular material or aesthetic.",
  },
  {
    id: "laptops",
    category: "Laptops",
    label: "Frontend development",
    brief:
      "I need a laptop for frontend development. Around $1,200. Battery life matters more than gaming. I want something I can comfortably carry around.",
    criteria: [
      ["Use case", "Frontend development"],
      ["Budget", "Around $1,200"],
      ["Priority", "Battery life"],
      ["Secondary", "Portability"],
    ],
    products: [
      {
        rank: "01",
        name: 'MacBook Air 15"',
        price: "$1,199",
        match: "95%",
        reason:
          "Strong battery life, excellent performance for frontend work, and a large display without excessive weight.",
        tradeoff: "Limited ports may require a hub depending on your setup.",
      },
      {
        rank: "02",
        name: "Dell XPS 13",
        price: "$999",
        match: "89%",
        reason:
          "Compact, capable, and comfortably below the budget while covering development needs.",
        tradeoff: "Smaller display makes extended work less comfortable.",
      },
      {
        rank: "03",
        name: "Lenovo Yoga 7i",
        price: "$899",
        match: "84%",
        reason:
          "Good value with a flexible form factor and enough performance for web development.",
        tradeoff:
          "Display and build quality are a step below the more expensive options.",
      },
    ],
    conclusion:
      "The MacBook Air fits the brief most closely because battery life, portability, and development performance all score highly without requiring a gaming-oriented machine.",
  },
];

export default function Examples() {
  const [activeId, setActiveId] = useState("jewelry");

  const active =
    examples.find((example) => example.id === activeId) ?? examples[0];

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
                {examples.length} examples
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {examples.map((example, index) => {
                const isActive = example.id === activeId;

                return (
                  <button
                    key={example.id}
                    type="button"
                    onClick={() => setActiveId(example.id)}
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
                      <p className="text-sm font-semibold">
                        {example.category}
                      </p>

                      <p
                        className={`mt-1 text-xs ${
                          isActive
                            ? "text-[#101110]/60"
                            : "text-[var(--subtle)]"
                        }`}
                      >
                        {example.label}
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
                    {active.category}
                  </h2>

                  <div className="mt-8 rounded-[24px] bg-[var(--background)] p-6">
                    <p className="text-sm leading-7 text-[var(--muted)]">
                      “{active.brief}”
                    </p>
                  </div>

                  <div className="mt-8 space-y-2">
                    {active.criteria.map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-[18px] bg-[var(--background)] px-4 py-3.5"
                      >
                        <p className="text-[10px] uppercase tracking-[0.12em] text-[var(--subtle)]">
                          {label}
                        </p>

                        <p className="mt-1 text-sm">{value}</p>
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

                <div className="space-y-3">
                  {active.products.map((product, index) => (
                    <article
                      key={product.name}
                      className={`rounded-[28px] p-6 md:p-8 ${
                        index === 0
                          ? "bg-[var(--accent)] text-[#101110]"
                          : "bg-[var(--background)]"
                      }`}
                    >
                      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                        <div className="flex gap-5">
                          <span
                            className={`pt-1 text-xs ${
                              index === 0
                                ? "text-[#101110]/50"
                                : "text-[var(--subtle)]"
                            }`}
                          >
                            {product.rank}
                          </span>

                          <div>
                            <h3 className="text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                              {product.name}
                            </h3>

                            <p
                              className={`mt-3 max-w-2xl text-sm leading-7 ${
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
                                : "bg-[var(--surface)]"
                            }`}
                          >
                            {product.match} match
                          </span>
                        </div>
                      </div>

                      <div
                        className={`mt-7 border-t pt-5 ${
                          index === 0
                            ? "border-[#101110]/10"
                            : "border-[var(--border)]"
                        }`}
                      >
                        <p
                          className={`text-xs leading-6 ${
                            index === 0
                              ? "text-[#101110]/60"
                              : "text-[var(--subtle)]"
                          }`}
                        >
                          <span className="font-semibold">Trade-off:</span>{" "}
                          {product.tradeoff}
                        </p>
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
                        {active.conclusion}
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
