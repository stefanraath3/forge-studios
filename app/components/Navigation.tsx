"use client";

import Link from "next/link";
import { Code2, User, Settings, LogOut, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{
    name: string;
    email: string;
    userType: string;
  } | null>(null);

  useEffect(() => {
    // Check localStorage for user data
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(user.isLoggedIn);
      setUserData(user);
    }
  }, []);

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
            <Link
              href="/case-studies"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
                    <User className="w-4 h-4 text-background" />
                  </div>
                  <span className="text-sm font-medium capitalize">
                    {userData?.name || "User"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-medium capitalize">
                        {userData?.name || "User"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {userData?.email || ""}
                      </p>
                      <p className="text-xs text-muted-foreground/70 capitalize mt-0.5">
                        {userData?.userType || ""}
                      </p>
                    </div>
                    <div className="py-1.5">
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/40 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <User className="w-4 h-4 text-muted-foreground" />
                        Profile
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/40 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Settings className="w-4 h-4 text-muted-foreground" />
                        Settings
                      </Link>
                      <button
                        onClick={() => {
                          localStorage.removeItem("user");
                          setIsLoggedIn(false);
                          setUserData(null);
                          setIsDropdownOpen(false);
                          window.location.href = "/";
                        }}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-muted/40 transition-colors w-full text-left"
                      >
                        <LogOut className="w-4 h-4 text-muted-foreground" />
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Start project
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
