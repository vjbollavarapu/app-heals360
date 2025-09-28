import { AppLayout } from "@/components/layout/app-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function RadiologyDashboard() {
  const stats = {
    imagingRequests: 15,
    scheduledScans: 8,
    pendingReports: 12,
    criticalFindings: 2,
  }

  const imagingRequests = [
    {
      id: "RAD001",
      patient: "John Smith",
      doctor: "Dr. Michael Chen",
      studyType: "Chest X-Ray",
      priority: "Normal",
      status: "Scheduled",
      scheduledTime: "02:00 PM",
      indication: "Chest pain, rule out pneumonia",
    },
    {
      id: "RAD002",
      patient: "Sarah Johnson",
      doctor: "Dr. Robert Kim",
      studyType: "CT Abdomen",
      priority: "Normal",
      status: "In Progress",
      scheduledTime: "10:30 AM",
      indication: "Abdominal pain, suspected appendicitis",
    },
    {
      id: "RAD003",
      patient: "Michael Chen",
      doctor: "Dr. Michael Chen",
      studyType: "CT Angiogram",
      priority: "Urgent",
      status: "Scheduled",
      scheduledTime: "11:45 AM",
      indication: "Acute chest pain, rule out PE",
    },
    {
      id: "RAD004",
      patient: "Emily Davis",
      doctor: "Dr. Sarah Wilson",
      studyType: "MRI Brain",
      priority: "Normal",
      status: "Waiting",
      scheduledTime: "03:30 PM",
      indication: "Headaches, neurological symptoms",
    },
  ]

  const scheduledScans = [
    {
      id: "SCH001",
      patient: "Robert Wilson",
      studyType: "Ultrasound Abdomen",
      time: "09:00 AM",
      room: "US Room 1",
      technologist: "Mike Johnson",
      status: "Ready",
      prepInstructions: "NPO 8 hours",
    },
    {
      id: "SCH002",
      patient: "Maria Garcia",
      studyType: "Mammography",
      time: "10:15 AM",
      room: "Mammo Room",
      technologist: "Lisa Chen",
      status: "In Progress",
      prepInstructions: "No deodorant/powder",
    },
    {
      id: "SCH003",
      patient: "David Brown",
      studyType: "MRI Knee",
      time: "11:30 AM",
      room: "MRI Suite 1",
      technologist: "Sarah Kim",
      status: "Waiting",
      prepInstructions: "Remove all metal objects",
    },
    {
      id: "SCH004",
      patient: "Lisa Anderson",
      studyType: "CT Chest",
      time: "01:00 PM",
      room: "CT Room 2",
      technologist: "Mike Johnson",
      status: "Scheduled",
      prepInstructions: "IV contrast required",
    },
  ]

  const pendingReports = [
    {
      id: "REP001",
      patient: "Jennifer White",
      studyType: "Chest X-Ray",
      studyDate: "2024-01-22",
      studyTime: "08:30 AM",
      status: "Preliminary Read",
      findings: "Clear lungs, normal heart size",
      radiologist: "Dr. Robert Kim",
      critical: false,
    },
    {
      id: "REP002",
      patient: "Thomas Brown",
      studyType: "CT Head",
      studyDate: "2024-01-22",
      studyTime: "09:15 AM",
      status: "Critical - Notify Doctor",
      findings: "Large acute subdural hematoma",
      radiologist: "Dr. Robert Kim",
      critical: true,
    },
    {
      id: "REP003",
      patient: "Amanda Johnson",
      studyType: "MRI Spine",
      studyDate: "2024-01-21",
      studyTime: "02:45 PM",
      status: "Final Report",
      findings: "Mild disc bulge L4-L5, no nerve compression",
      radiologist: "Dr. Robert Kim",
      critical: false,
    },
  ]

  return (
    <AppLayout allowedRoles={["radiologist"]}>
      <div className="space-y-6">
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Radiology" }]} />
          <h1 className="text-3xl font-bold mt-2">Radiology Dashboard</h1>
          <p className="text-muted-foreground">Manage imaging requests, scans, and radiology reports</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Imaging Requests</CardTitle>
              <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.imagingRequests}</div>
              <p className="text-xs text-muted-foreground">Today's requests</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scheduled Scans</CardTitle>
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
              <div className="text-2xl font-bold text-secondary">{stats.scheduledScans}</div>
              <p className="text-xs text-muted-foreground">Today's schedule</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
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
              <div className="text-2xl font-bold text-orange-600">{stats.pendingReports}</div>
              <p className="text-xs text-muted-foreground">Awaiting interpretation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Findings</CardTitle>
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
              <div className="text-2xl font-bold text-destructive">{stats.criticalFindings}</div>
              <p className="text-xs text-muted-foreground">Require immediate attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Imaging Requests */}
          <Card>
            <CardHeader>
              <CardTitle>Imaging Requests</CardTitle>
              <CardDescription>New radiology study requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {imagingRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{request.patient}</p>
                      <p className="text-sm text-muted-foreground">{request.studyType}</p>
                      <p className="text-xs text-muted-foreground">
                        {request.doctor} • {request.scheduledTime}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{request.indication}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          request.priority === "Urgent"
                            ? "destructive"
                            : request.status === "In Progress"
                              ? "secondary"
                              : "default"
                        }
                      >
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Imaging Requests
              </Button>
            </CardContent>
          </Card>

          {/* Scheduled Scans */}
          <Card>
            <CardHeader>
              <CardTitle>Today's Scheduled Scans</CardTitle>
              <CardDescription>Imaging studies scheduled for today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledScans.map((scan) => (
                  <div key={scan.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{scan.patient}</p>
                      <p className="text-sm text-muted-foreground">
                        {scan.studyType} • {scan.time}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {scan.room} • {scan.technologist}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{scan.prepInstructions}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          scan.status === "In Progress" ? "secondary" : scan.status === "Ready" ? "default" : "outline"
                        }
                      >
                        {scan.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Pending Reports</CardTitle>
            <CardDescription>Studies requiring interpretation and reporting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingReports.map((report) => (
                <div key={report.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium">{report.patient}</p>
                      <p className="text-sm text-muted-foreground">
                        {report.studyType} • {report.studyDate} {report.studyTime}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          report.critical ? "destructive" : report.status === "Final Report" ? "default" : "secondary"
                        }
                      >
                        {report.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{report.radiologist}</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded text-sm">
                    <p className={report.critical ? "text-destructive font-medium" : ""}>{report.findings}</p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    {report.status === "Preliminary Read" && (
                      <>
                        <Button size="sm" variant="default">
                          Finalize Report
                        </Button>
                        <Button size="sm" variant="outline">
                          Add Addendum
                        </Button>
                      </>
                    )}
                    {report.critical && (
                      <Button size="sm" variant="destructive">
                        Notify Doctor Immediately
                      </Button>
                    )}
                    <Button size="sm" variant="outline">
                      View Images
                    </Button>
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
            <CardDescription>Frequently used radiology functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <span className="text-sm">View Images</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                <span className="text-sm">Create Report</span>
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
                <span className="text-sm">Schedule Study</span>
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
                <span className="text-sm">Radiology Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
