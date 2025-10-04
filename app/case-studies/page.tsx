"use client";

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
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";

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
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-[10%] left-[10%] w-[600px] h-[600px] bg-gradient-to-br from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tl from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/60 border border-border/60 mb-6"
            >
              <Target className="w-3.5 h-3.5 text-foreground/80" />
              <span className="text-xs font-medium text-foreground/80">
                Featured Work
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground"
            >
              Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Real projects, real impact. Explore how we've helped companies
              scale, innovate, and transform their digital products.
            </motion.p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: "Projects Delivered", value: "50+" },
              { icon: TrendingUp, label: "Average ROI", value: "250%" },
              { icon: Zap, label: "Faster Time to Market", value: "40%" },
              { icon: Clock, label: "Years of Expertise", value: "8+" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: "easeOut",
                }}
                className="p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
              >
                <stat.icon className="w-5 h-5 text-foreground/60 mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: (index % 2) * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl border border-border bg-background/50 backdrop-blur-sm overflow-hidden hover:border-foreground/20 transition-all duration-300"
              >
                {/* Image/Visual Area */}
                <motion.div
                  className={`relative h-72 bg-gradient-to-br ${study.color} flex items-center justify-center overflow-hidden`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
                  <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
                  <div className="relative z-10 text-center p-8">
                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/60 mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-xs font-medium text-foreground">
                        {study.category}
                      </span>
                    </motion.div>
                    <h3 className="text-4xl font-bold tracking-tight">
                      {study.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                    {study.impact.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <div className="text-lg font-semibold mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 rounded-full bg-muted/60 text-xs font-medium text-foreground/80"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <motion.span
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {study.year}
                    </motion.span>
                    <motion.button
                      className="group/btn inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read case study
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl border border-border bg-muted/20 p-12 md:p-20 overflow-hidden"
          >
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-foreground/5 via-transparent to-transparent rounded-full blur-3xl" />
            </div>
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
              >
                Ready to create your success story?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground mb-10"
              >
                Let's discuss how we can help you build exceptional software
                that drives real business impact.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-7 py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-all inline-flex items-center gap-2"
              >
                Start your project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
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
