import { AppLayout } from "@/components/layout/app-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MOCK_BILLS, DASHBOARD_STATS } from "@/lib/mock-data"

export default function CashierDashboard() {
  const stats = DASHBOARD_STATS.cashier
  const pendingBills = MOCK_BILLS.filter((b) => b.status === "Pending" || b.status === "Overdue")

  const todayCollections = [
    { id: "1", patient: "John Smith", amount: 450, method: "Cash", time: "09:15 AM", receipt: "RC001" },
    { id: "2", patient: "Sarah Johnson", amount: 280, method: "Card", time: "10:30 AM", receipt: "RC002" },
    { id: "3", patient: "Robert Wilson", amount: 125, method: "Insurance", time: "11:45 AM", receipt: "RC003" },
    { id: "4", patient: "Maria Garcia", amount: 350, method: "Card", time: "02:20 PM", receipt: "RC004" },
  ]

  const insuranceClaims = [
    { id: "1", patient: "Michael Chen", insurer: "Blue Cross", amount: 1250, status: "Submitted", date: "2024-01-20" },
    { id: "2", patient: "Emily Davis", insurer: "Aetna", amount: 680, status: "Approved", date: "2024-01-19" },
    {
      id: "3",
      patient: "David Brown",
      insurer: "United Healthcare",
      amount: 920,
      status: "Pending",
      date: "2024-01-21",
    },
  ]

  return (
    <AppLayout allowedRoles={["cashier"]}>
      <div className="space-y-6">
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Cashier" }]} />
          <h1 className="text-3xl font-bold mt-2">Cashier Dashboard</h1>
          <p className="text-muted-foreground">Manage billing, payments, and financial transactions</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Bills</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5l-5-5 4-4 5 5v6a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h7l5 5v11z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.pendingBills}</div>
              <p className="text-xs text-muted-foreground">Awaiting payment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Collections</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${stats.todayCollections.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+15% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Insurance Claims</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.insuranceClaims}</div>
              <p className="text-xs text-muted-foreground">Processing</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">{stats.overduePayments}</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pending Bills */}
          <Card>
            <CardHeader>
              <CardTitle>Pending Bills</CardTitle>
              <CardDescription>Outstanding patient bills requiring payment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingBills.map((bill) => (
                  <div key={bill.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{bill.patientName}</p>
                      <p className="text-sm text-muted-foreground">
                        {bill.services.join(", ")} • Due: {new Date(bill.dueDate).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-muted-foreground">{bill.insurance}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${bill.amount.toFixed(2)}</p>
                      <Badge variant={bill.status === "Overdue" ? "destructive" : "secondary"}>{bill.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Pending Bills
              </Button>
            </CardContent>
          </Card>

          {/* Today's Collections */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Collections</CardTitle>
              <CardDescription>Payments received today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayCollections.map((collection) => (
                  <div key={collection.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{collection.patient}</p>
                      <p className="text-sm text-muted-foreground">
                        {collection.time} • {collection.receipt}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">${collection.amount.toFixed(2)}</p>
                      <Badge variant="outline">{collection.method}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-800">Total Collections Today</p>
                <p className="text-2xl font-bold text-green-600">
                  ${todayCollections.reduce((sum, c) => sum + c.amount, 0).toFixed(2)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insurance Claims */}
        <Card>
          <CardHeader>
            <CardTitle>Insurance Claims</CardTitle>
            <CardDescription>Recent insurance claim submissions and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insuranceClaims.map((claim) => (
                <div key={claim.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{claim.patient.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium">{claim.patient}</p>
                      <p className="text-sm text-muted-foreground">
                        {claim.insurer} • Submitted: {new Date(claim.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">${claim.amount.toFixed(2)}</p>
                    <Badge
                      variant={
                        claim.status === "Approved" ? "default" : claim.status === "Pending" ? "secondary" : "outline"
                      }
                    >
                      {claim.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used billing and payment functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                <span className="text-sm">Process Payment</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5l-5-5 4-4 5 5v6a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h7l5 5v11z"
                  />
                </svg>
                <span className="text-sm">Generate Bill</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm">Submit Insurance</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="text-sm">Payment Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
