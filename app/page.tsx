import { ArrowRight, Code2, Sparkles, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-foreground to-foreground/70 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-background" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Vertex
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
                href="#approach"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Approach
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
              Start a project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border/50 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">
                Crafting digital excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Building software that scales
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're a software engineering house focused on creating elegant,
              performant, and maintainable solutions for ambitious teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-all flex items-center justify-center gap-2">
                Let's talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="px-6 py-3 rounded-lg border border-border hover:bg-muted/50 transition-colors font-medium">
                View our work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What we do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end engineering services tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Product Engineering",
                description:
                  "Full-stack development with modern frameworks and best practices. We build products that users love.",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description:
                  "Speed matters. We optimize your applications for blazing-fast performance and exceptional user experience.",
              },
              {
                icon: Globe,
                title: "Cloud Architecture",
                description:
                  "Scalable, resilient cloud infrastructure designed for growth. Built on AWS, GCP, and Azure.",
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description:
                  "Enterprise-grade security practices and compliance standards built into every layer.",
              },
              {
                icon: Sparkles,
                title: "AI Integration",
                description:
                  "Leverage cutting-edge AI and ML to unlock new capabilities and competitive advantages.",
              },
              {
                icon: Code2,
                title: "Technical Advisory",
                description:
                  "Strategic guidance on technology decisions, architecture, and engineering practices.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-foreground/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                  <service.icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our approach
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Methodology refined through years of building exceptional software
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "Deep dive into your vision, goals, and constraints. We align on what success looks like before writing a single line of code.",
              },
              {
                step: "02",
                title: "Build & Iterate",
                description:
                  "Rapid development cycles with continuous feedback. We ship early and often, refining based on real-world usage.",
              },
              {
                step: "03",
                title: "Scale & Support",
                description:
                  "Launch is just the beginning. We ensure your product scales smoothly and provide ongoing support and optimization.",
              },
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-muted-foreground/10 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl border border-border bg-gradient-to-br from-muted/50 to-background p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
            </div>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Let's build something exceptional
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a startup with a vision or an enterprise seeking
                transformation, we're here to help turn ideas into reality.
              </p>
              <button className="group px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-all flex items-center gap-2">
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-foreground to-foreground/70 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-background" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Vertex
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
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Vertex. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
