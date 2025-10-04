import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  TrendingUp,
  Users,
  Zap,
  Clock,
  Target,
} from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    id: "nexus-analytics",
    title: "Nexus Analytics",
    category: "SaaS Platform",
    description:
      "Real-time data analytics platform processing 50M+ events daily with sub-second latency.",
    impact: [
      { label: "Performance", value: "99.99% uptime" },
      { label: "Scale", value: "50M+ events/day" },
      { label: "Speed", value: "<100ms latency" },
    ],
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Redis", "AWS"],
    year: "2024",
    image: "muted", // placeholder for actual images
    color: "from-blue-500/10 to-purple-500/10",
  },
  {
    id: "streamline-healthcare",
    title: "Streamline Healthcare",
    category: "Healthcare Tech",
    description:
      "HIPAA-compliant patient management system serving 200+ clinics across North America.",
    impact: [
      { label: "Users", value: "200+ clinics" },
      { label: "Compliance", value: "HIPAA & SOC 2" },
      { label: "Efficiency", value: "40% faster workflows" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "GCP", "Docker"],
    year: "2024",
    image: "muted",
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    id: "quantum-finance",
    title: "Quantum Finance",
    category: "FinTech",
    description:
      "AI-powered investment platform managing $2B+ in assets with institutional-grade security.",
    impact: [
      { label: "AUM", value: "$2B+" },
      { label: "Security", value: "SOC 2 Type II" },
      { label: "ROI", value: "300% increase" },
    ],
    technologies: ["Python", "React", "PostgreSQL", "Kubernetes", "AWS"],
    year: "2023",
    image: "muted",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    id: "urban-mobility",
    title: "Urban Mobility",
    category: "Transportation",
    description:
      "Smart city mobility app connecting 500K+ users with real-time transit and route optimization.",
    impact: [
      { label: "Users", value: "500K+ active" },
      { label: "Cities", value: "15 metros" },
      { label: "CO₂ saved", value: "2K tons/year" },
    ],
    technologies: ["React Native", "GraphQL", "Neo4j", "Azure", "Redis"],
    year: "2023",
    image: "muted",
    color: "from-rose-500/10 to-pink-500/10",
  },
  {
    id: "eduhub-learning",
    title: "EduHub Learning",
    category: "EdTech",
    description:
      "Interactive learning platform with AI-driven personalization serving 1M+ students worldwide.",
    impact: [
      { label: "Students", value: "1M+ globally" },
      { label: "Engagement", value: "85% completion" },
      { label: "Languages", value: "12 supported" },
    ],
    technologies: ["Next.js", "TensorFlow", "PostgreSQL", "Vercel", "OpenAI"],
    year: "2024",
    image: "muted",
    color: "from-violet-500/10 to-purple-500/10",
  },
  {
    id: "agritech-harvest",
    title: "AgriTech Harvest",
    category: "AgTech",
    description:
      "IoT-powered farm management platform optimizing crop yields with predictive analytics.",
    impact: [
      { label: "Farms", value: "5K+ connected" },
      { label: "Yield increase", value: "+28% average" },
      { label: "Water saved", value: "35%" },
    ],
    technologies: ["Vue.js", "Python", "InfluxDB", "MQTT", "AWS IoT"],
    year: "2023",
    image: "muted",
    color: "from-green-500/10 to-lime-500/10",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
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
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/#services"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#work"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Work
              </Link>
              <Link
                href="/case-studies"
                className="text-sm text-foreground font-medium transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>
            <button className="px-5 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity">
              Start project
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/60 border border-border/60 mb-6">
              <Target className="w-3.5 h-3.5 text-foreground/80" />
              <span className="text-xs font-medium text-foreground/80">
                Featured Work
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real projects, real impact. Explore how we've helped companies
              scale, innovate, and transform their digital products.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: "Projects Delivered", value: "50+" },
              { icon: TrendingUp, label: "Average ROI", value: "250%" },
              { icon: Zap, label: "Faster Time to Market", value: "40%" },
              { icon: Clock, label: "Years of Expertise", value: "8+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
              >
                <stat.icon className="w-5 h-5 text-foreground/60 mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className="group relative rounded-3xl border border-border bg-background/50 backdrop-blur-sm overflow-hidden hover:border-foreground/20 transition-all duration-300"
              >
                {/* Image/Visual Area */}
                <div
                  className={`relative h-72 bg-gradient-to-br ${study.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
                  <div className="relative z-10 text-center p-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 mb-4">
                      <span className="text-xs font-medium text-foreground">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-4xl font-bold tracking-tight">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                    {study.impact.map((metric, i) => (
                      <div key={i}>
                        <div className="text-lg font-semibold mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-muted/60 text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {study.year}
                    </span>
                    <button className="group/btn inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all">
                      Read case study
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl border border-border bg-muted/20 p-12 md:p-20 overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to create your success story?
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Let's discuss how we can help you build exceptional software
                that drives real business impact.
              </p>
              <button className="group px-7 py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-all inline-flex items-center gap-2">
                Start your project
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
