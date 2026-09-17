import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const sections = [
  {
    title: 'Information you provide',
    body: 'When you use Sift, you may provide information such as product requests, preferences, budgets, constraints, and other text you choose to submit. We use this information to provide the research experience.',
  },
  {
    title: 'Research requests',
    body: 'Your research requests may be processed by AI systems and other service providers that help Sift understand your request, conduct research, compare information, and generate results.',
  },
  {
    title: 'Usage information',
    body: 'We may collect technical and usage information about how you interact with Sift, such as pages visited, features used, device information, and basic diagnostic information. This helps us operate and improve the service.',
  },
  {
    title: 'AI processing',
    body: 'Sift uses artificial intelligence to interpret requests, extract relevant criteria, synthesise information, and generate explanations. AI-generated results can contain mistakes and should be independently verified before making significant purchasing decisions.',
  },
  {
    title: 'Third-party services',
    body: 'Sift may rely on third-party infrastructure, AI providers, analytics services, product data sources, and other vendors. Information may be processed by these providers as necessary to provide the service.',
  },
  {
    title: 'Data retention',
    body: 'We retain information only for as long as reasonably necessary to provide, maintain, secure, and improve Sift, comply with legal obligations, and resolve disputes.',
  },
  {
    title: 'Your choices',
    body: 'Depending on the information we hold and applicable law, you may have rights to access, correct, delete, or otherwise control certain personal information. You can contact us about privacy-related requests.',
  },
]

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="px-6 pb-32 pt-20 sm:px-8 md:px-12 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-[900px]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Legal
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Privacy policy
          </h1>

          <p className="mt-7 text-sm text-[var(--subtle)]">
            Last updated: September 2026
          </p>

          <div className="mt-16 space-y-12">
            <div className="rounded-[28px] bg-[var(--surface)] p-7 md:p-9">
              <p className="text-sm leading-7 text-[var(--muted)]">
                This privacy policy explains how Sift may collect, use, and
                handle information when you use the service. This is an MVP
                policy and should be reviewed and adapted to the final
                company's legal structure, jurisdiction, vendors, and data
                practices before public launch.
              </p>
            </div>

            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold tracking-[-0.03em]">
                  {section.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 border-t border-[var(--border)] pt-8">
            <Link
              to="/terms"
              className="text-sm font-semibold text-[var(--accent)]"
            >
              Read the terms of use →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}