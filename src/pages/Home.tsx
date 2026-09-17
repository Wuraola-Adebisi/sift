import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleHelp,
  Search,
  SlidersHorizontal,
  Sparkles,
} from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const products = [
  {
    name: 'Sony WH-1000XM6',
    category: 'Headphones',
    price: '$399',
    match: '94%',
  },
  {
    name: 'Bose QuietComfort Ultra',
    category: 'Headphones',
    price: '$349',
    match: '89%',
  },
  {
    name: 'AirPods Max',
    category: 'Headphones',
    price: '$549',
    match: '81%',
  },
]

const categories = [
  'Jewelry',
  'Skincare',
  'Furniture',
  'Electronics',
  'Fashion',
  'Fitness',
]

const researchPoints = [
  {
    number: '01',
    title: 'Understands the brief',
    description:
      'Sift uses AI to turn a messy shopping request into the things that actually matter: budget, priorities, constraints, preferences, and use case.',
    icon: CircleHelp,
  },
  {
    number: '02',
    title: 'Cuts through the options',
    description:
      'Instead of handing you twenty tabs, Sift researches the field and narrows it to a small set of options worth your attention.',
    icon: SlidersHorizontal,
  },
  {
    number: '03',
    title: 'Explains the trade-offs',
    description:
      'AI synthesises the research around your brief and explains what fits, what does not, and what you are giving up with each choice.',
    icon: Check,
  },
]

const comparisonRows = [
  {
    label: 'Noise cancellation',
    sony: 'Excellent',
    bose: 'Excellent',
    airpods: 'Very good',
  },
  {
    label: 'Battery',
    sony: 'Up to 30h',
    bose: 'Up to 24h',
    airpods: 'Up to 20h',
  },
  {
    label: 'Weight',
    sony: '254g',
    bose: '252g',
    airpods: '384g',
  },
  {
    label: 'Your budget',
    sony: 'Fits',
    bose: 'Fits',
    airpods: 'Over',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[var(--background)]">
      <Header />

      <main>
        <section className="px-6 pb-28 pt-20 sm:px-8 md:px-12 md:pb-36 md:pt-28 lg:px-16 lg:pb-44 lg:pt-32">
          <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-3.5 py-2 text-xs text-[var(--muted)]">
                <Sparkles
                  size={13}
                  className="text-[var(--accent)]"
                  aria-hidden="true"
                />
                AI research for better buying decisions
              </div>

              <h1 className="max-w-3xl text-6xl font-semibold leading-[0.9] tracking-[-0.065em] md:text-8xl lg:text-[7rem]">
                Shopping
                <br />
                <span className="text-[var(--accent)]">without</span>
                <br />
                the rabbit hole.
              </h1>

              <p className="mt-10 max-w-lg text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">
                Tell Sift what you are looking for. It uses AI to understand
                what matters to you, researches the options, and brings back a
                shortlist worth considering.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {categories.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--surface)] px-4 py-2 text-xs text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div id="try" className="relative">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[var(--accent)] opacity-[0.08] blur-3xl" />

              <div className="relative rounded-[32px] bg-[var(--surface)] p-3 shadow-2xl shadow-black/20">
                <div className="rounded-[24px] bg-[var(--surface-light)] p-6 md:p-8">
                  <div className="mb-7 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold">
                        What are you looking for?
                      </p>

                      <p className="mt-1.5 text-xs text-[var(--subtle)]">
                        Give Sift the context. The more useful, the better.
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent)] text-[#101110]">
                      <Search size={17} aria-hidden="true" />
                    </div>
                  </div>

                  <textarea
                    rows={6}
                    placeholder="I need a gold necklace for everyday wear. Something simple but not boring. Around $300."
                    className="w-full resize-none rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 text-sm leading-6 text-[var(--foreground)] outline-none placeholder:text-[var(--subtle)] focus:border-[var(--accent)]"
                  />

                  <button
                    type="button"
                    className="group mt-4 flex w-full items-center justify-between rounded-2xl bg-[var(--accent)] px-5 py-4 text-sm font-bold text-[#101110] transition hover:bg-[var(--accent-dark)]"
                  >
                    Find my shortlist

                    <ArrowRight
                      size={17}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>

                  <p className="mt-4 text-center text-[11px] text-[var(--subtle)]">
                    No endless filters. Just tell us what matters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="examples"
          className="px-6 pb-32 sm:px-8 md:px-12 md:pb-44 lg:px-16"
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-12 grid gap-8 md:grid-cols-[1fr_360px] md:items-end lg:mb-16">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  A Sift result
                </p>

                <h2 className="max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  Three options.
                  <br />
                  Actually considered.
                </h2>
              </div>

              <p className="max-w-sm text-sm leading-7 text-[var(--muted)]">
                Sift does not overwhelm you with a catalogue. It narrows the
                field around what you actually said you need.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {products.map((product, index) => (
                <article
                  key={product.name}
                  className={`min-h-[380px] rounded-[28px] p-7 md:p-8 ${
                    index === 0
                      ? 'bg-[var(--accent)] text-[#101110]'
                      : 'bg-[var(--surface)]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span
                      className={`text-xs ${
                        index === 0
                          ? 'text-[#101110]/60'
                          : 'text-[var(--subtle)]'
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        index === 0
                          ? 'bg-[#101110]/10'
                          : 'bg-[var(--surface-light)]'
                      }`}
                    >
                      {product.match} match
                    </span>
                  </div>

                  <div className="mt-36">
                    <p
                      className={`text-xs ${
                        index === 0
                          ? 'text-[#101110]/60'
                          : 'text-[var(--subtle)]'
                      }`}
                    >
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em]">
                      {product.name}
                    </h3>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {product.price}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs">
                        <Check size={13} aria-hidden="true" />
                        Fits your brief
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="bg-[var(--surface)] px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16"
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="grid gap-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                  How Sift works
                </p>

                <h2 className="max-w-xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                  Research should feel like a conversation, not a second job.
                </h2>

                <p className="mt-8 max-w-md text-sm leading-7 text-[var(--muted)] md:text-base">
                  You already know what you want. You just do not always know
                  which option gets you there. Sift handles the messy middle
                  with AI.
                </p>
              </div>

              <div className="divide-y divide-[var(--border)]">
                {researchPoints.map((point) => {
                  const Icon = point.icon

                  return (
                    <div
                      key={point.number}
                      className="grid gap-7 py-10 first:pt-0 last:pb-0 md:grid-cols-[72px_1fr_auto] md:items-start md:gap-8"
                    >
                      <span className="text-xs font-medium text-[var(--subtle)]">
                        {point.number}
                      </span>

                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.03em]">
                          {point.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                          {point.description}
                        </p>
                      </div>

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--surface-light)] text-[var(--accent)]">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-32 sm:px-8 md:px-12 md:py-44 lg:px-16">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Not just a shortlist
              </p>

              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Know why something made the cut.
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] md:text-base">
                AI helps Sift connect product information back to your
                priorities, so you can see the differences that actually
                matter to your decision.
              </p>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-[var(--surface)]">
              <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-b border-[var(--border)] px-6 py-6 text-xs text-[var(--subtle)] md:px-10">
                <span>What matters</span>
                <span>Sony</span>
                <span>Bose</span>
                <span>AirPods</span>
              </div>

              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-b border-[var(--border)] px-6 py-7 text-sm last:border-0 md:px-10"
                >
                  <span className="font-medium">{row.label}</span>
                  <span className="text-[var(--muted)]">{row.sony}</span>
                  <span className="text-[var(--muted)]">{row.bose}</span>
                  <span className="text-[var(--muted)]">{row.airpods}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-[var(--subtle)]">
              <ChevronRight size={14} aria-hidden="true" />
              Sift would explain the trade-offs behind these differences.
            </div>
          </div>
        </section>

        <section
          id="about"
          className="px-6 pb-32 sm:px-8 md:px-12 md:pb-44 lg:px-16"
        >
          <div className="mx-auto max-w-[1320px]">
            <div className="rounded-[36px] bg-[var(--accent)] px-8 py-20 text-[#101110] sm:px-10 md:px-14 md:py-28 lg:px-20 lg:py-32">
              <div className="grid gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-28">
                <div>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#101110]/60">
                    The idea
                  </p>

                  <h2 className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.06em] md:text-7xl">
                    More information is not the same thing as better research.
                  </h2>
                </div>

                <div>
                  <p className="text-sm leading-7 text-[#101110]/70 md:text-base">
                    The internet is very good at giving you options. Sift is
                    built around the harder part: figuring out which options
                    deserve your attention in the first place.
                  </p>

                  <a
                    href="/research"
                    className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#101110] px-5 py-3.5 text-sm font-semibold text-[var(--accent)] transition hover:scale-[1.02]"
                  >
                    Try Sift

                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-12 sm:px-8 md:px-12 md:pb-16 lg:px-16">
          <div className="mx-auto max-w-[1320px] rounded-[32px] bg-[var(--surface)] px-8 py-20 text-center sm:px-10 md:px-16 md:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Ready when you are
            </p>

            <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
              Tell us what you are trying to find.
            </h2>

            <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[var(--muted)]">
              Jewelry, furniture, skincare, electronics, fashion, fitness,
              gifts, or something you have not figured out how to name yet.
            </p>

            <a
              href="/research"
              className="group mx-auto mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-4 text-sm font-bold text-[#101110] transition hover:bg-[var(--accent-dark)]"
            >
              Start with a search

              <ArrowRight
                size={17}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}