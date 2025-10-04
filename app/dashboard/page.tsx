"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Code2,
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  Bell,
  Search,
  Plus,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  const stats = [
    {
      label: "Active Projects",
      value: "12",
      change: "+2 this month",
      trend: "up",
      icon: FolderKanban,
    },
    {
      label: "Team Members",
      value: "8",
      change: "+1 this week",
      trend: "up",
      icon: Users,
    },
    {
      label: "Completed Tasks",
      value: "147",
      change: "+23 this week",
      trend: "up",
      icon: CheckCircle2,
    },
    {
      label: "Pending Reviews",
      value: "5",
      change: "2 urgent",
      trend: "neutral",
      icon: AlertCircle,
    },
  ];

  const recentProjects = [
    {
      name: "E-commerce Platform",
      status: "In Progress",
      progress: 65,
      client: "Acme Corp",
      lastUpdate: "2 hours ago",
    },
    {
      name: "Mobile App Redesign",
      status: "In Progress",
      progress: 42,
      client: "TechStart Inc",
      lastUpdate: "5 hours ago",
    },
    {
      name: "API Integration",
      status: "Review",
      progress: 90,
      client: "GlobalTech",
      lastUpdate: "1 day ago",
    },
    {
      name: "Dashboard Analytics",
      status: "Planning",
      progress: 15,
      client: "DataFlow LLC",
      lastUpdate: "3 days ago",
    },
  ];

  const recentActivity = [
    {
      user: "Sarah Chen",
      action: "completed design review",
      project: "E-commerce Platform",
      time: "2 hours ago",
    },
    {
      user: "Michael Brown",
      action: "deployed to staging",
      project: "Mobile App Redesign",
      time: "4 hours ago",
    },
    {
      user: "Emma Wilson",
      action: "created new task",
      project: "API Integration",
      time: "6 hours ago",
    },
    {
      user: "David Lee",
      action: "submitted pull request",
      project: "Dashboard Analytics",
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
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

            <div className="flex items-center gap-6">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-64 pl-9 pr-4 py-2 bg-muted/40 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring transition-all"
                />
              </div>
              <button className="relative p-2 hover:bg-muted/40 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-3 pl-3 border-l border-border">
                <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-sm font-medium">JD</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex w-64 border-r border-border flex-col">
          <nav className="flex-1 p-4 space-y-1">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-muted/60 text-foreground font-medium transition-colors"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/projects"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors"
            >
              <FolderKanban className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link
              href="/dashboard/team"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors"
            >
              <Users className="w-5 h-5" />
              <span>Team</span>
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-muted/40 hover:text-foreground transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-border">
            <button
              onClick={() => router.push("/")}
              className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
            >
              Sign out
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight mb-2">
                  Dashboard
                </h1>
                <p className="text-muted-foreground">
                  Welcome back! Here's an overview of your projects.
                </p>
              </div>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity">
                <Plus className="w-4 h-4" />
                New Project
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-foreground" />
                    </div>
                    {stat.trend === "up" && (
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.change}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Projects */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-semibold">Recent Projects</h2>
                  </div>
                  <div className="divide-y divide-border">
                    {recentProjects.map((project, i) => (
                      <div
                        key={i}
                        className="p-6 hover:bg-muted/20 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="font-semibold mb-1">
                              {project.name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {project.client}
                            </p>
                          </div>
                          <span className="px-2.5 py-1 rounded-md bg-muted text-xs font-medium">
                            {project.status}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Progress
                            </span>
                            <span className="font-medium">
                              {project.progress}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-foreground transition-all"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            Updated {project.lastUpdate}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="lg:col-span-1">
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-semibold">Recent Activity</h2>
                  </div>
                  <div className="divide-y divide-border">
                    {recentActivity.map((activity, i) => (
                      <div key={i} className="p-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium">
                              {activity.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm">
                              <span className="font-medium">
                                {activity.user}
                              </span>{" "}
                              {activity.action}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1 truncate">
                              {activity.project}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
