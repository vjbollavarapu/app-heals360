import { AppLayout } from "@/components/layout/app-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DASHBOARD_STATS } from "@/lib/mock-data"

export default function PharmacyDashboard() {
  const stats = DASHBOARD_STATS.pharmacy

  const prescriptionQueue = [
    {
      id: "1",
      patient: "John Smith",
      doctor: "Dr. Michael Chen",
      medication: "Lisinopril 10mg",
      quantity: 30,
      status: "Ready",
      priority: "Normal",
    },
    {
      id: "2",
      patient: "Sarah Johnson",
      doctor: "Dr. Robert Kim",
      medication: "Metformin 500mg",
      quantity: 60,
      status: "Preparing",
      priority: "Normal",
    },
    {
      id: "3",
      patient: "Michael Chen",
      doctor: "Dr. Michael Chen",
      medication: "Nitroglycerin 0.4mg",
      quantity: 25,
      status: "Urgent",
      priority: "High",
    },
    {
      id: "4",
      patient: "Emily Davis",
      doctor: "Dr. Sarah Wilson",
      medication: "Atorvastatin 20mg",
      quantity: 30,
      status: "Pending",
      priority: "Normal",
    },
  ]

  const stockAlerts = [
    {
      id: "1",
      medication: "Amoxicillin 500mg",
      currentStock: 45,
      minStock: 100,
      status: "Low Stock",
      supplier: "MedSupply Co",
    },
    {
      id: "2",
      medication: "Insulin Glargine",
      currentStock: 12,
      minStock: 50,
      status: "Critical",
      supplier: "PharmaCorp",
    },
    {
      id: "3",
      medication: "Albuterol Inhaler",
      currentStock: 8,
      minStock: 25,
      status: "Critical",
      supplier: "RespiraCare",
    },
    {
      id: "4",
      medication: "Hydrochlorothiazide",
      currentStock: 78,
      minStock: 150,
      status: "Low Stock",
      supplier: "GenericMeds",
    },
  ]

  const recentDispensing = [
    {
      id: "1",
      patient: "Robert Wilson",
      medication: "Metoprolol 50mg",
      quantity: 30,
      time: "09:15 AM",
      pharmacist: "James Wilson",
    },
    {
      id: "2",
      patient: "Maria Garcia",
      medication: "Levothyroxine 75mcg",
      quantity: 90,
      time: "10:30 AM",
      pharmacist: "James Wilson",
    },
    {
      id: "3",
      patient: "David Brown",
      medication: "Omeprazole 20mg",
      quantity: 30,
      time: "11:45 AM",
      pharmacist: "James Wilson",
    },
    {
      id: "4",
      patient: "Lisa Anderson",
      medication: "Simvastatin 40mg",
      quantity: 30,
      time: "02:20 PM",
      pharmacist: "James Wilson",
    },
  ]

  return (
    <AppLayout allowedRoles={["pharmacy"]}>
      <div className="space-y-6">
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Pharmacy" }]} />
          <h1 className="text-3xl font-bold mt-2">Pharmacy Dashboard</h1>
          <p className="text-muted-foreground">Manage prescriptions, inventory, and medication dispensing</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prescription Queue</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.prescriptionQueue}</div>
              <p className="text-xs text-muted-foreground">Awaiting preparation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Stock Alerts</CardTitle>
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
              <div className="text-2xl font-bold text-destructive">{stats.stockAlerts}</div>
              <p className="text-xs text-muted-foreground">Require reordering</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Dispensed Today</CardTitle>
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
              <div className="text-2xl font-bold text-green-600">{stats.dispensedToday}</div>
              <p className="text-xs text-muted-foreground">+8% from yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">{stats.lowStock}</div>
              <p className="text-xs text-muted-foreground">Below minimum threshold</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Prescription Queue */}
          <Card>
            <CardHeader>
              <CardTitle>Prescription Queue</CardTitle>
              <CardDescription>Prescriptions awaiting preparation and dispensing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {prescriptionQueue.map((prescription, index) => (
                  <div key={prescription.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{prescription.patient}</p>
                        <p className="text-sm text-muted-foreground">{prescription.medication}</p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {prescription.quantity} • {prescription.doctor}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          prescription.status === "Urgent"
                            ? "destructive"
                            : prescription.status === "Ready"
                              ? "default"
                              : prescription.status === "Preparing"
                                ? "secondary"
                                : "outline"
                        }
                      >
                        {prescription.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{prescription.priority}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Prescriptions
              </Button>
            </CardContent>
          </Card>

          {/* Stock Alerts */}
          <Card>
            <CardHeader>
              <CardTitle>Stock Alerts</CardTitle>
              <CardDescription>Medications requiring reorder</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stockAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{alert.medication}</p>
                      <p className="text-sm text-muted-foreground">
                        Current: {alert.currentStock} • Min: {alert.minStock}
                      </p>
                      <p className="text-xs text-muted-foreground">{alert.supplier}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant={alert.status === "Critical" ? "destructive" : "secondary"}>{alert.status}</Badge>
                      <Button size="sm" className="mt-2 bg-transparent" variant="outline">
                        Reorder
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Dispensing */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Dispensing</CardTitle>
            <CardDescription>Recently dispensed medications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentDispensing.map((dispensing) => (
                <div key={dispensing.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">{dispensing.patient}</p>
                      <p className="text-sm text-muted-foreground">{dispensing.medication}</p>
                      <p className="text-xs text-muted-foreground">
                        Qty: {dispensing.quantity} • {dispensing.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">Dispensed</p>
                    <p className="text-xs text-muted-foreground">{dispensing.pharmacist}</p>
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
            <CardDescription>Frequently used pharmacy functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span className="text-sm">Dispense Medication</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="text-sm">Check Inventory</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="text-sm">Reorder Stock</span>
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
                <span className="text-sm">Dispensing Report</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
