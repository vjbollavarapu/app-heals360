import { AppLayout } from "@/components/layout/app-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MOCK_APPOINTMENTS, MOCK_PATIENTS, DASHBOARD_STATS } from "@/lib/mock-data"

export default function DoctorDashboard() {
  const stats = DASHBOARD_STATS.doctor
  const todayConsultations = MOCK_APPOINTMENTS.filter((a) => a.doctorName === "Dr. Michael Chen").slice(0, 4)
  const waitingPatients = MOCK_PATIENTS.filter((p) => p.status === "Active" || p.status === "Critical").slice(0, 3)

  const labRequests = [
    { id: "1", patient: "John Smith", test: "Complete Blood Count", status: "Pending", priority: "Normal" },
    { id: "2", patient: "Sarah Johnson", test: "Lipid Panel", status: "In Progress", priority: "Normal" },
    { id: "3", patient: "Michael Chen", test: "Cardiac Enzymes", status: "Urgent", priority: "High" },
  ]

  return (
    <AppLayout allowedRoles={["doctor"]}>
      <div className="space-y-6">
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Doctor" }]} />
          <h1 className="text-3xl font-bold mt-2">Doctor Dashboard</h1>
          <p className="text-muted-foreground">Manage consultations, patient records, and medical workflows</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Consultations</CardTitle>
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
              <div className="text-2xl font-bold text-primary">{stats.todayConsultations}</div>
              <p className="text-xs text-muted-foreground">5 completed, 13 remaining</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Waiting Patients</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.waitingPatients}</div>
              <p className="text-xs text-muted-foreground">Ready for consultation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lab Requests</CardTitle>
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
              <div className="text-2xl font-bold text-secondary">{stats.labRequests}</div>
              <p className="text-xs text-muted-foreground">Pending results</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
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
              <div className="text-2xl font-bold text-green-600">{stats.prescriptions}</div>
              <p className="text-xs text-muted-foreground">Written today</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Patient Queue */}
          <Card>
            <CardHeader>
              <CardTitle>Patient Queue</CardTitle>
              <CardDescription>Patients waiting for consultation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {waitingPatients.map((patient, index) => (
                  <div key={patient.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">{patient.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-medium">{patient.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {patient.age} years • {patient.gender}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={patient.status === "Critical" ? "destructive" : "default"}>
                        {patient.status}
                      </Badge>
                      <Button size="sm" className="mt-2 bg-transparent" variant="outline">
                        Call Next
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lab Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Lab Requests</CardTitle>
              <CardDescription>Recent laboratory test requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {labRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{request.patient}</p>
                      <p className="text-sm text-muted-foreground">{request.test}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          request.status === "Urgent"
                            ? "destructive"
                            : request.status === "In Progress"
                              ? "secondary"
                              : "default"
                        }
                      >
                        {request.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{request.priority} Priority</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Lab Requests
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used medical functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5l-5-5 4-4 5 5v6a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h7l5 5v11z"
                  />
                </svg>
                <span className="text-sm">Patient Records</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span className="text-sm">Write Prescription</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span className="text-sm">Order Lab Test</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="text-sm">Request Imaging</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
