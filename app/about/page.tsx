import { Code2 } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "About — Forge Studios",
  description:
    "A small, focused team dedicated to creating exceptional digital experiences. We build software with intention and partner with companies that value quality over velocity.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              We build software with intention
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A small, focused team dedicated to creating exceptional digital
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Forge Studios was founded on a simple belief: great software
                comes from deep thinking, not fast shipping. In an industry
                obsessed with velocity, we choose to focus on craft.
              </p>
              <p className="text-lg leading-relaxed">
                We're a team of engineers, designers, and strategists who've
                spent years building products at both fast-growing startups and
                established enterprises. We've seen what works and what doesn't.
                We've learned that the best solutions come from understanding
                the problem deeply before writing a single line of code.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we partner with companies that share our values—teams who
                understand that software is an investment, not an expense. Teams
                who know that the cheapest solution is rarely the best one.
                Teams building for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our principles
            </h2>
            <p className="text-muted-foreground text-lg">
              How we approach every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                number: "01",
                title: "Clarity over cleverness",
                description:
                  "Code should be obvious, not clever. We write software that your team can understand, maintain, and evolve years from now.",
              },
              {
                number: "02",
                title: "Substance over style",
                description:
                  "Beautiful interfaces matter, but not at the expense of performance and accessibility. We build products that work exceptionally well for everyone.",
              },
              {
                number: "03",
                title: "Long-term thinking",
                description:
                  "Quick fixes create technical debt. We make decisions that serve your product for years, not just the current sprint.",
              },
              {
                number: "04",
                title: "Honest communication",
                description:
                  "We tell you what you need to hear, not what you want to hear. If something's a bad idea, we'll say so and explain why.",
              },
            ].map((value, i) => (
              <div key={i} className="relative">
                <div className="text-5xl font-bold text-muted-foreground/10 mb-6">
                  {value.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What we're known for
            </h2>
            <p className="text-muted-foreground text-lg">
              Areas where we consistently deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Complex systems",
                description:
                  "Multi-tenant SaaS platforms, API design, microservices architecture, and data-intensive applications.",
              },
              {
                title: "Performance critical",
                description:
                  "Real-time applications, high-traffic systems, and products where speed directly impacts user experience.",
              },
              {
                title: "Developer tools",
                description:
                  "CLIs, SDKs, APIs, and platforms that other engineers rely on. We understand developer experience.",
              },
            ].map((area, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-card"
              >
                <h3 className="text-lg font-semibold mb-3">{area.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Small team, big impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              We intentionally keep our team small. It allows us to work on
              projects we care about, maintain high standards, and build deep
              expertise rather than spreading ourselves thin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: "Engineering",
                description: "Full-stack, systems, and infrastructure",
              },
              {
                role: "Design",
                description: "Product design and user experience",
              },
              {
                role: "Strategy",
                description: "Architecture and technical advisory",
              },
              {
                role: "Operations",
                description: "DevOps, security, and reliability",
              },
            ].map((role, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-square rounded-2xl bg-muted/60 border border-border" />
                <div>
                  <h3 className="font-semibold mb-1">{role.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {role.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How we work
            </h2>
            <p className="text-muted-foreground text-lg">
              Our process is simple, transparent, and designed for collaboration
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                phase: "Discovery",
                duration: "1-2 weeks",
                description:
                  "We start by deeply understanding your product, users, and business. This phase includes stakeholder interviews, technical audits, and competitive analysis. We document everything and align on success metrics before any development begins.",
              },
              {
                phase: "Design & Planning",
                duration: "2-3 weeks",
                description:
                  "We map out the architecture, create detailed technical specifications, and design key interfaces. You'll see prototypes, database schemas, and API designs before we write production code. This investment up front saves months of rework later.",
              },
              {
                phase: "Development",
                duration: "Ongoing",
                description:
                  "We work in focused sprints with regular demos and feedback sessions. You'll have access to staging environments from day one. We write tests, document decisions, and ensure you're never blocked waiting on us.",
              },
              {
                phase: "Launch & Beyond",
                duration: "Ongoing",
                description:
                  "Launch is just the beginning. We help with deployment, monitoring, and initial optimization. Most clients keep us on retainer for ongoing support, improvements, and scaling as they grow.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-6 pb-12 border-b border-border last:border-0"
              >
                <div className="md:w-48 flex-shrink-0">
                  <div className="inline-flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-semibold">
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{step.phase}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {step.duration}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Sound like a good fit?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            We work with a limited number of clients at a time. If you're
            building something meaningful and want a partner who cares as much
            as you do, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-7 py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
              Get in touch
            </button>
            <Link
              href="/"
              className="px-7 py-3.5 rounded-lg border border-border hover:bg-muted/40 transition-colors font-medium inline-flex items-center justify-center"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <Code2
                  className="w-4.5 h-4.5 text-background"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Forge Studios
              </span>
            </Link>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Forge Studios. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
