import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePageTitle } from "../hooks/usePageTitle";

const sections = [
  {
    title: "Using Sift",
    body: "Sift provides research and decision-support tools for people evaluating products and purchases. You agree to use the service lawfully and not to interfere with its operation or attempt to access systems or data you are not authorised to access.",
  },
  {
    title: "AI-generated information",
    body: "Sift uses AI to interpret requests and generate research, comparisons, recommendations, and explanations. AI-generated information may be incomplete, outdated, or incorrect. You should verify important product specifications, pricing, availability, safety information, warranties, and other material claims before purchasing.",
  },
  {
    title: "Not professional advice",
    body: "Sift is a general research and decision-support service. Its results are not professional financial, medical, legal, safety, or other specialist advice. Where a purchase involves significant health, safety, financial, or legal consequences, consult an appropriately qualified professional.",
  },
  {
    title: "Product information",
    body: "Prices, availability, specifications, policies, and other product information can change. Sift does not guarantee that information displayed by the service will always be current or accurate.",
  },
  {
    title: "Third-party products and services",
    body: "Sift may reference products, retailers, brands, websites, or other third-party services. Sift is not responsible for the policies, availability, performance, or conduct of third parties unless expressly stated otherwise.",
  },
  {
    title: "Intellectual property",
    body: "The Sift service, including its software, interface, branding, original content, and underlying technology, is owned by or licensed to Sift and may not be copied, modified, distributed, or commercially exploited without permission.",
  },
  {
    title: "Changes to the service",
    body: "We may modify, suspend, or discontinue parts of Sift as the product develops. We may also update these terms from time to time. Continued use of the service after material changes take effect constitutes acceptance of the updated terms where permitted by applicable law.",
  },
  {
    title: "Contact",
    body: "Questions about these terms can be directed to the contact address provided by Sift.",
  },
];

export default function Terms() {
  usePageTitle("Terms — Sift");
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Header />

      <main className="px-6 pb-32 pt-20 sm:px-8 md:px-12 md:pt-28 lg:px-16">
        <div className="mx-auto max-w-[900px]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            Legal
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Terms of use
          </h1>

          <p className="mt-7 text-sm text-[var(--subtle)]">
            Last updated: September 2026
          </p>

          <div className="mt-16 space-y-12">
            <div className="rounded-[28px] bg-[var(--surface)] p-7 md:p-9">
              <p className="text-sm leading-7 text-[var(--muted)]">
                These terms govern your use of Sift. They are intended as an MVP
                foundation and should receive legal review before the service
                becomes a public commercial product.
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
              to="/privacy"
              className="text-sm font-semibold text-[var(--accent)]"
            >
              Read the privacy policy →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
