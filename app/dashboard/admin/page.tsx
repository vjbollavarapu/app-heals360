import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Building2,
  Users,
  Activity,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  Settings,
  Plus,
  Eye,
  Edit,
} from "lucide-react"

// Mock data for multi-tenant admin
const tenantStats = {
  totalTenants: 24,
  activeTenants: 22,
  totalUsers: 1847,
  totalRevenue: 2450000,
  systemUptime: 99.8,
}

const tenants = [
  {
    id: 1,
    name: "City General Hospital",
    users: 245,
    status: "active",
    plan: "Enterprise",
    revenue: 125000,
    lastActive: "2 hours ago",
  },
  {
    id: 2,
    name: "Metro Medical Center",
    users: 189,
    status: "active",
    plan: "Professional",
    revenue: 89000,
    lastActive: "1 hour ago",
  },
  {
    id: 3,
    name: "Riverside Clinic",
    users: 67,
    status: "active",
    plan: "Standard",
    revenue: 34000,
    lastActive: "30 min ago",
  },
  {
    id: 4,
    name: "Downtown Health",
    users: 123,
    status: "inactive",
    plan: "Professional",
    revenue: 67000,
    lastActive: "2 days ago",
  },
  {
    id: 5,
    name: "Northside Hospital",
    users: 298,
    status: "active",
    plan: "Enterprise",
    revenue: 156000,
    lastActive: "15 min ago",
  },
]

const systemAlerts = [
  { id: 1, type: "warning", message: "High CPU usage on Server 3", time: "5 min ago", severity: "medium" },
  { id: 2, type: "info", message: "Scheduled maintenance completed", time: "1 hour ago", severity: "low" },
  { id: 3, type: "error", message: "Database backup failed for Tenant #12", time: "2 hours ago", severity: "high" },
  { id: 4, type: "success", message: "New tenant onboarded successfully", time: "3 hours ago", severity: "low" },
]

const recentActivities = [
  {
    id: 1,
    action: "New user registered",
    tenant: "City General Hospital",
    time: "10 min ago",
    user: "Dr. Sarah Johnson",
  },
  { id: 2, action: "Billing processed", tenant: "Metro Medical Center", time: "25 min ago", user: "System" },
  { id: 3, action: "Report generated", tenant: "Riverside Clinic", time: "1 hour ago", user: "Admin User" },
  { id: 4, action: "Settings updated", tenant: "Northside Hospital", time: "2 hours ago", user: "IT Admin" },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Multi-Tenant Admin</h1>
          <p className="text-muted-foreground">Manage all healthcare facilities and system operations</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Tenant
          </Button>
        </div>
      </div>

      {/* System Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Building2 className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenantStats.totalTenants}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenantStats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
            <Activity className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tenantStats.systemUptime}%</div>
            <Progress value={tenantStats.systemUptime} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${(tenantStats.totalRevenue / 1000000).toFixed(1)}M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tenant Management */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Tenant Management</CardTitle>
            <CardDescription>Manage all healthcare facilities and their subscriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tenants.map((tenant) => (
                <div key={tenant.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{tenant.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{tenant.users} users</span>
                        <Badge variant={tenant.status === "active" ? "default" : "secondary"}>{tenant.status}</Badge>
                        <span>{tenant.plan}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-semibold">${tenant.revenue.toLocaleString()}/mo</div>
                      <div className="text-sm text-muted-foreground">{tenant.lastActive}</div>
                    </div>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>System Alerts</CardTitle>
            <CardDescription>Monitor system health and issues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div className="flex-shrink-0 mt-0.5">
                    {alert.type === "error" && <AlertTriangle className="h-4 w-4 text-red-500" />}
                    {alert.type === "warning" && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                    {alert.type === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                    {alert.type === "info" && <Clock className="h-4 w-4 text-blue-500" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                  <Badge
                    variant={
                      alert.severity === "high" ? "destructive" : alert.severity === "medium" ? "secondary" : "outline"
                    }
                    className="text-xs"
                  >
                    {alert.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>System-wide activity log</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div className="flex-shrink-0 mt-0.5">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.tenant} • {activity.user}
                    </p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
