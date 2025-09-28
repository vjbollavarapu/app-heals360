import { AppLayout } from "@/components/layout/app-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HRDashboard() {
  const stats = {
    activeStaff: 247,
    attendanceToday: 92,
    payrollProcessing: 5,
    leaveRequests: 12,
  }

  const staffOverview = [
    {
      id: "1",
      name: "Dr. Michael Chen",
      department: "Cardiology",
      position: "Senior Cardiologist",
      status: "Present",
      shift: "Day Shift",
      checkIn: "07:45 AM",
      email: "michael.chen@heals360.com",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      department: "Front Office",
      position: "Receptionist",
      status: "Present",
      shift: "Day Shift",
      checkIn: "08:00 AM",
      email: "sarah.johnson@heals360.com",
    },
    {
      id: "3",
      name: "James Wilson",
      department: "Pharmacy",
      position: "Pharmacist",
      status: "Absent",
      shift: "Day Shift",
      checkIn: "-",
      email: "james.wilson@heals360.com",
    },
    {
      id: "4",
      name: "Emily Davis",
      department: "Laboratory",
      position: "Lab Technician",
      status: "Present",
      shift: "Night Shift",
      checkIn: "06:30 PM",
      email: "emily.davis@heals360.com",
    },
  ]

  const leaveRequests = [
    {
      id: "1",
      employee: "Dr. Robert Kim",
      department: "Radiology",
      leaveType: "Annual Leave",
      startDate: "2024-02-01",
      endDate: "2024-02-05",
      days: 5,
      status: "Pending",
      reason: "Family vacation",
    },
    {
      id: "2",
      employee: "Lisa Rodriguez",
      department: "Billing",
      leaveType: "Sick Leave",
      startDate: "2024-01-25",
      endDate: "2024-01-26",
      days: 2,
      status: "Approved",
      reason: "Medical appointment",
    },
    {
      id: "3",
      employee: "Amanda Thompson",
      department: "Human Resources",
      leaveType: "Personal Leave",
      startDate: "2024-02-10",
      endDate: "2024-02-12",
      days: 3,
      status: "Pending",
      reason: "Personal matters",
    },
  ]

  const payrollSummary = [
    {
      id: "1",
      department: "Medical Staff",
      employees: 45,
      grossPay: 285000,
      deductions: 42750,
      netPay: 242250,
      status: "Processed",
    },
    {
      id: "2",
      department: "Nursing",
      employees: 78,
      grossPay: 312000,
      deductions: 46800,
      netPay: 265200,
      status: "Processing",
    },
    {
      id: "3",
      department: "Administration",
      employees: 32,
      grossPay: 128000,
      deductions: 19200,
      netPay: 108800,
      status: "Pending",
    },
    {
      id: "4",
      department: "Support Staff",
      employees: 92,
      grossPay: 184000,
      deductions: 27600,
      netPay: 156400,
      status: "Processed",
    },
  ]

  return (
    <AppLayout allowedRoles={["hr"]}>
      <div className="space-y-6">
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Human Resources" }]} />
          <h1 className="text-3xl font-bold mt-2">HR Dashboard</h1>
          <p className="text-muted-foreground">Manage staff, attendance, payroll, and HR operations</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.activeStaff}</div>
              <p className="text-xs text-muted-foreground">Total employees</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Attendance Today</CardTitle>
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
              <div className="text-2xl font-bold text-green-600">{stats.attendanceToday}%</div>
              <p className="text-xs text-muted-foreground">Present today</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Payroll Processing</CardTitle>
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
              <div className="text-2xl font-bold text-orange-600">{stats.payrollProcessing}</div>
              <p className="text-xs text-muted-foreground">Departments pending</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Leave Requests</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.leaveRequests}</div>
              <p className="text-xs text-muted-foreground">Pending approval</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Staff Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Staff Overview</CardTitle>
              <CardDescription>Current staff attendance and status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staffOverview.map((staff) => (
                  <div key={staff.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">{staff.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{staff.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {staff.position} • {staff.department}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {staff.shift} • Check-in: {staff.checkIn}
                        </p>
                      </div>
                    </div>
                    <Badge variant={staff.status === "Present" ? "default" : "destructive"}>{staff.status}</Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Staff
              </Button>
            </CardContent>
          </Card>

          {/* Leave Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Leave Requests</CardTitle>
              <CardDescription>Pending leave requests requiring approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaveRequests.map((request) => (
                  <div key={request.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{request.employee}</p>
                        <p className="text-sm text-muted-foreground">{request.department}</p>
                      </div>
                      <Badge variant={request.status === "Approved" ? "default" : "secondary"}>{request.status}</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        {request.leaveType} • {request.days} days
                      </p>
                      <p>
                        {new Date(request.startDate).toLocaleDateString()} -{" "}
                        {new Date(request.endDate).toLocaleDateString()}
                      </p>
                      <p className="mt-1">{request.reason}</p>
                    </div>
                    {request.status === "Pending" && (
                      <div className="flex space-x-2 mt-3">
                        <Button size="sm" variant="default">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payroll Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Payroll Summary</CardTitle>
            <CardDescription>Department-wise payroll processing status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {payrollSummary.map((payroll) => (
                <div key={payroll.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">{payroll.department}</p>
                    <p className="text-sm text-muted-foreground">{payroll.employees} employees</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">${payroll.netPay.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">
                      Gross: ${payroll.grossPay.toLocaleString()} | Deductions: ${payroll.deductions.toLocaleString()}
                    </p>
                    <Badge
                      variant={
                        payroll.status === "Processed"
                          ? "default"
                          : payroll.status === "Processing"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {payroll.status}
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
            <CardDescription>Frequently used HR functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                <span className="text-sm">Add Employee</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
                <span className="text-sm">Attendance Report</span>
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
                <span className="text-sm">Process Payroll</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">Manage Leaves</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
