"use client";

import { useState } from "react";
import { Mail, MessageSquare, User, Send } from "lucide-react";
import { toast } from "sonner";
import Navigation from "../components/Navigation";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success toast
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24 hours.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/60 border border-border/60 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground animate-pulse" />
              <span className="text-xs font-medium text-foreground/80">
                We typically respond within 24 hours
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-foreground">
              Let's start a conversation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tell us about your project, and we'll get back to you with how we
              can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2.5 text-foreground"
                  >
                    Your name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-border bg-background hover:border-foreground/20 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/5 transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2.5 text-foreground"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-border bg-background hover:border-foreground/20 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/5 transition-colors text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2.5 text-foreground"
                  >
                    Company{" "}
                    <span className="text-muted-foreground font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3.5 rounded-lg border border-border bg-background hover:border-foreground/20 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/5 transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2.5 text-foreground"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your project..."
                      className="w-full pl-11 pr-4 py-3.5 rounded-lg border border-border bg-background hover:border-foreground/20 focus:border-foreground focus:outline-none focus:ring-2 focus:ring-foreground/5 transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-7 py-3.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Cards */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="rounded-2xl border border-border bg-muted/20 p-8">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-5">
                  <Mail className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Email us directly
                </h3>
                <p className="text-muted-foreground mb-4">
                  Prefer email? Drop us a line and we'll respond promptly.
                </p>
                <a
                  href="mailto:hello@forgestudios.dev"
                  className="text-foreground hover:underline font-medium inline-flex items-center gap-1.5"
                >
                  hello@forgestudios.dev
                </a>
              </div>

              <div className="rounded-2xl border border-border bg-muted/20 p-8">
                <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-5">
                  <MessageSquare className="w-6 h-6" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick questions?</h3>
                <p className="text-muted-foreground mb-4">
                  For general inquiries or quick questions, we're available on
                  social media.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-foreground hover:underline font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-foreground hover:underline font-medium"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-gradient-to-br from-foreground/5 to-foreground/[0.02] p-8">
                <h3 className="text-xl font-semibold mb-3">
                  What happens next?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                    </div>
                    <span>We'll review your message within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                    </div>
                    <span>Schedule a call to discuss your project</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-foreground" />
                    </div>
                    <span>Receive a tailored proposal and timeline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
