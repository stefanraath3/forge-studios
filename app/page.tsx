import {
  ArrowRight,
  Code2,
  Zap,
  Shield,
  Globe,
  Layers,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <Code2
                  className="w-4.5 h-4.5 text-background"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Forge Studios
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="#work"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="px-5 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
              Start project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/60 border border-border/60 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
            <span className="text-xs font-medium text-foreground/80">
              Available for select projects
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-foreground">
            Elegant software,
            <br />
            built to last
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We partner with forward-thinking companies to design and build
            exceptional digital products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-7 py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2">
              Discuss your project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button className="px-7 py-3.5 rounded-lg border border-border hover:bg-muted/40 transition-colors font-medium">
              View case studies
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              End-to-end development and strategic engineering guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              {
                icon: Code2,
                title: "Product Development",
                description:
                  "Full-stack engineering with modern frameworks. We build scalable products from concept to launch.",
              },
              {
                icon: Zap,
                title: "Performance Engineering",
                description:
                  "Speed and efficiency at every layer. Optimized for real-world usage and exceptional UX.",
              },
              {
                icon: Globe,
                title: "Cloud & Infrastructure",
                description:
                  "Resilient, scalable architecture designed for growth. AWS, GCP, and hybrid solutions.",
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description:
                  "Enterprise-grade security built in from day one. SOC 2, GDPR, and industry standards.",
              },
              {
                icon: Layers,
                title: "System Design",
                description:
                  "Thoughtful architecture decisions that enable long-term maintainability and evolution.",
              },
              {
                icon: Users,
                title: "Team Augmentation",
                description:
                  "Experienced engineers who integrate seamlessly with your team and processes.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-background p-8 hover:bg-muted/30 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-foreground/5 flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <service.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="work" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Quality over velocity
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  We believe the best software is built through careful
                  consideration, not rushed timelines. Every line of code is an
                  investment in your product's future.
                </p>
                <p className="text-lg leading-relaxed">
                  Our approach emphasizes clean architecture, comprehensive
                  testing, and documentation that actually helps. We build
                  systems that your team will thank you for years down the line.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're a startup finding product-market fit or an
                  enterprise scaling for growth, we bring the same level of
                  craft and attention to detail.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl bg-muted/40 border border-border" />
                <div className="aspect-[4/3] rounded-2xl bg-muted/40 border border-border" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-2xl bg-muted/40 border border-border" />
                <div className="aspect-square rounded-2xl bg-muted/40 border border-border" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl border border-border bg-muted/20 p-12 md:p-20 overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Let's build together
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Have a project in mind? We're always interested in hearing about
                new opportunities and challenges.
              </p>
              <button className="group px-7 py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-all inline-flex items-center gap-2">
                Start a conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <Code2
                  className="w-4.5 h-4.5 text-background"
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Forge Studios
              </span>
            </div>
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
