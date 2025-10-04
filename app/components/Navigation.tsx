import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Navigation() {
  return (
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
            <a
              href="/#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a
              href="/#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start project
          </Link>
        </div>
      </div>
    </nav>
  );
}
