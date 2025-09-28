import { AppLayout } from "@/components/layout/app-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FinanceDashboard() {
  const stats = {
    monthlyRevenue: 2847500,
    accountsReceivable: 456780,
    accountsPayable: 234560,
    cashFlow: 1234500,
  }

  const revenueBreakdown = [
    { department: "Cardiology", revenue: 485000, percentage: 17.0, growth: "+12%" },
    { department: "Emergency", revenue: 425000, percentage: 14.9, growth: "+8%" },
    { department: "Surgery", revenue: 380000, percentage: 13.3, growth: "+15%" },
    { department: "Radiology", revenue: 295000, percentage: 10.4, growth: "+5%" },
    { department: "Laboratory", revenue: 185000, percentage: 6.5, growth: "+3%" },
    { department: "Pharmacy", revenue: 165000, percentage: 5.8, growth: "+7%" },
  ]

  const outstandingInvoices = [
    {
      id: "INV-2024-001",
      client: "Blue Cross Insurance",
      amount: 125000,
      dueDate: "2024-02-15",
      status: "Overdue",
      daysOverdue: 5,
      services: "Emergency Care Claims",
    },
    {
      id: "INV-2024-002",
      client: "Aetna Healthcare",
      amount: 89500,
      dueDate: "2024-02-20",
      status: "Due Soon",
      daysOverdue: 0,
      services: "Surgical Procedures",
    },
    {
      id: "INV-2024-003",
      client: "United Healthcare",
      amount: 67800,
      dueDate: "2024-02-25",
      status: "Current",
      daysOverdue: 0,
      services: "Diagnostic Services",
    },
    {
      id: "INV-2024-004",
      client: "Medicare",
      amount: 156000,
      dueDate: "2024-01-30",
      status: "Overdue",
      daysOverdue: 15,
      services: "Inpatient Care",
    },
  ]

  const expenseBreakdown = [
    {
      category: "Staff Salaries",
      amount: 1250000,
      percentage: 43.9,
      budget: 1300000,
      variance: -50000,
    },
    {
      category: "Medical Supplies",
      amount: 485000,
      percentage: 17.0,
      budget: 500000,
      variance: -15000,
    },
    {
      category: "Equipment",
      amount: 325000,
      percentage: 11.4,
      budget: 350000,
      variance: -25000,
    },
    {
      category: "Utilities",
      amount: 125000,
      percentage: 4.4,
      budget: 130000,
      variance: -5000,
    },
    {
      category: "Insurance",
      amount: 95000,
      percentage: 3.3,
      budget: 100000,
      variance: -5000,
    },
  ]

  return (
    <AppLayout allowedRoles={["cfo"]}>
      <div className="space-y-6">
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Finance" }]} />
          <h1 className="text-3xl font-bold mt-2">Finance Dashboard</h1>
          <p className="text-muted-foreground">Monitor financial performance, cash flow, and accounting operations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">${stats.monthlyRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accounts Receivable</CardTitle>
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
              <div className="text-2xl font-bold text-orange-600">${stats.accountsReceivable.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Outstanding receivables</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accounts Payable</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">${stats.accountsPayable.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Outstanding payables</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Cash Flow</CardTitle>
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
              <div className="text-2xl font-bold text-primary">${stats.cashFlow.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Positive cash flow</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue by Department</CardTitle>
              <CardDescription>Monthly revenue breakdown by department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {revenueBreakdown.map((dept) => (
                  <div key={dept.department} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{dept.department}</p>
                      <p className="text-sm text-muted-foreground">{dept.percentage}% of total revenue</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${dept.revenue.toLocaleString()}</p>
                      <Badge variant="default" className="text-green-600 bg-green-100">
                        {dept.growth}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Outstanding Invoices */}
          <Card>
            <CardHeader>
              <CardTitle>Outstanding Invoices</CardTitle>
              <CardDescription>Insurance and panel company invoices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {outstandingInvoices.map((invoice) => (
                  <div key={invoice.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{invoice.client}</p>
                        <p className="text-sm text-muted-foreground">{invoice.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">${invoice.amount.toLocaleString()}</p>
                        <Badge
                          variant={
                            invoice.status === "Overdue"
                              ? "destructive"
                              : invoice.status === "Due Soon"
                                ? "secondary"
                                : "default"
                          }
                        >
                          {invoice.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>{invoice.services}</p>
                      <p>
                        Due: {new Date(invoice.dueDate).toLocaleDateString()}
                        {invoice.daysOverdue > 0 && ` (${invoice.daysOverdue} days overdue)`}
                      </p>
                    </div>
                    {invoice.status === "Overdue" && (
                      <Button size="sm" variant="destructive" className="mt-2">
                        Send Reminder
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Expense Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Analysis</CardTitle>
            <CardDescription>Monthly expense breakdown vs budget</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {expenseBreakdown.map((expense) => (
                <div key={expense.category} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{expense.category}</p>
                    <p className="text-sm text-muted-foreground">{expense.percentage}% of total expenses</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">${expense.amount.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Budget: ${expense.budget.toLocaleString()}</p>
                    <Badge variant={expense.variance < 0 ? "default" : "destructive"}>
                      {expense.variance < 0 ? "Under" : "Over"} ${Math.abs(expense.variance).toLocaleString()}
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
            <CardDescription>Frequently used financial functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="text-sm">Financial Reports</span>
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
                <span className="text-sm">Generate Invoice</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <span className="text-sm">Cash Flow Analysis</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
                <span className="text-sm">Budget Planning</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
