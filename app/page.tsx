import { Header } from "@/components/layout/header"
import { Sidebar } from "@/components/layout/sidebar"
import { DashboardCards } from "@/components/dashboard/dashboard-cards"
import { MetricsChart } from "@/components/dashboard/metrics-chart"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64 p-4 lg:p-6">
          <div className="space-y-8">
            {/* Page Header */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight text-balance">Healthcare Dashboard</h1>
              <p className="text-muted-foreground text-pretty">
                Monitor your healthcare operations and patient metrics in real-time.
              </p>
            </div>

            {/* Dashboard Cards */}
            <DashboardCards />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <MetricsChart />
                <RecentActivity />
              </div>
              <div className="space-y-6">
                <QuickActions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
