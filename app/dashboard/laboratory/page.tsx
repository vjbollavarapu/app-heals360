import { AppLayout } from "@/components/layout/app-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function LaboratoryDashboard() {
  const stats = {
    newRequests: 28,
    samplesProcessing: 45,
    resultsReady: 12,
    criticalResults: 3,
  }

  const labRequests = [
    {
      id: "LAB001",
      patient: "John Smith",
      doctor: "Dr. Michael Chen",
      tests: ["Complete Blood Count", "Lipid Panel"],
      priority: "Normal",
      status: "Sample Collected",
      requestTime: "08:30 AM",
      estimatedCompletion: "02:00 PM",
    },
    {
      id: "LAB002",
      patient: "Sarah Johnson",
      doctor: "Dr. Robert Kim",
      tests: ["Thyroid Function"],
      priority: "Normal",
      status: "Processing",
      requestTime: "09:15 AM",
      estimatedCompletion: "03:30 PM",
    },
    {
      id: "LAB003",
      patient: "Michael Chen",
      doctor: "Dr. Michael Chen",
      tests: ["Cardiac Enzymes", "D-Dimer"],
      priority: "Urgent",
      status: "Sample Collected",
      requestTime: "10:45 AM",
      estimatedCompletion: "12:00 PM",
    },
    {
      id: "LAB004",
      patient: "Emily Davis",
      doctor: "Dr. Sarah Wilson",
      tests: ["HbA1c", "Glucose"],
      priority: "Normal",
      status: "Pending Sample",
      requestTime: "11:20 AM",
      estimatedCompletion: "04:00 PM",
    },
  ]

  const sampleTracking = [
    {
      id: "S001",
      patient: "Robert Wilson",
      sampleType: "Blood",
      collectionTime: "07:45 AM",
      status: "In Transit",
      location: "Collection Point A",
      tests: ["CBC", "BMP"],
    },
    {
      id: "S002",
      patient: "Maria Garcia",
      sampleType: "Urine",
      collectionTime: "08:15 AM",
      status: "Received",
      location: "Lab Station 2",
      tests: ["Urinalysis"],
    },
    {
      id: "S003",
      patient: "David Brown",
      sampleType: "Blood",
      collectionTime: "09:30 AM",
      status: "Processing",
      location: "Hematology Lab",
      tests: ["PT/INR", "PTT"],
    },
    {
      id: "S004",
      patient: "Lisa Anderson",
      sampleType: "Tissue",
      collectionTime: "10:00 AM",
      status: "Pending Analysis",
      location: "Pathology Lab",
      tests: ["Histopathology"],
    },
  ]

  const resultsValidation = [
    {
      id: "R001",
      patient: "Jennifer White",
      tests: ["Complete Blood Count"],
      results: "WBC: 8.5, RBC: 4.2, Hgb: 13.8",
      status: "Pending Validation",
      technician: "Emily Davis",
      completedTime: "11:30 AM",
      critical: false,
    },
    {
      id: "R002",
      patient: "Thomas Brown",
      tests: ["Cardiac Enzymes"],
      results: "Troponin I: 15.2 ng/mL (Critical)",
      status: "Critical - Notify Doctor",
      technician: "Emily Davis",
      completedTime: "10:15 AM",
      critical: true,
    },
    {
      id: "R003",
      patient: "Amanda Johnson",
      tests: ["Lipid Panel"],
      results: "Total Chol: 245, LDL: 165, HDL: 42",
      status: "Validated",
      technician: "Emily Davis",
      completedTime: "09:45 AM",
      critical: false,
    },
  ]

  return (
    <AppLayout allowedRoles={["labtech"]}>
      <div className="space-y-6">
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Laboratory" }]} />
          <h1 className="text-3xl font-bold mt-2">Laboratory Dashboard</h1>
          <p className="text-muted-foreground">Manage lab tests, sample tracking, and result validation</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Lab Requests</CardTitle>
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
              <div className="text-2xl font-bold text-primary">{stats.newRequests}</div>
              <p className="text-xs text-muted-foreground">Today's requests</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Samples Processing</CardTitle>
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
              <div className="text-2xl font-bold text-orange-600">{stats.samplesProcessing}</div>
              <p className="text-xs text-muted-foreground">Currently in progress</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Results Ready</CardTitle>
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
              <div className="text-2xl font-bold text-green-600">{stats.resultsReady}</div>
              <p className="text-xs text-muted-foreground">Awaiting validation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Results</CardTitle>
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
              <div className="text-2xl font-bold text-destructive">{stats.criticalResults}</div>
              <p className="text-xs text-muted-foreground">Require immediate attention</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Lab Requests */}
          <Card>
            <CardHeader>
              <CardTitle>New Lab Requests</CardTitle>
              <CardDescription>Recent laboratory test requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {labRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{request.patient}</p>
                      <p className="text-sm text-muted-foreground">{request.tests.join(", ")}</p>
                      <p className="text-xs text-muted-foreground">
                        {request.doctor} • {request.requestTime}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          request.priority === "Urgent"
                            ? "destructive"
                            : request.status === "Processing"
                              ? "secondary"
                              : "default"
                        }
                      >
                        {request.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">ETA: {request.estimatedCompletion}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Lab Requests
              </Button>
            </CardContent>
          </Card>

          {/* Sample Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Sample Tracking</CardTitle>
              <CardDescription>Track sample collection and processing status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sampleTracking.map((sample) => (
                  <div key={sample.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <span className="text-sm font-medium text-secondary">{sample.id}</span>
                      </div>
                      <div>
                        <p className="font-medium">{sample.patient}</p>
                        <p className="text-sm text-muted-foreground">
                          {sample.sampleType} • {sample.collectionTime}
                        </p>
                        <p className="text-xs text-muted-foreground">{sample.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          sample.status === "Processing"
                            ? "secondary"
                            : sample.status === "Received"
                              ? "default"
                              : "outline"
                        }
                      >
                        {sample.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Validation */}
        <Card>
          <CardHeader>
            <CardTitle>Results Pending Validation</CardTitle>
            <CardDescription>Laboratory results requiring review and validation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resultsValidation.map((result) => (
                <div key={result.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium">{result.patient}</p>
                      <p className="text-sm text-muted-foreground">{result.tests.join(", ")}</p>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={
                          result.critical ? "destructive" : result.status === "Validated" ? "default" : "secondary"
                        }
                      >
                        {result.status}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        {result.technician} • {result.completedTime}
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-3 rounded text-sm">
                    <p className={result.critical ? "text-destructive font-medium" : ""}>{result.results}</p>
                  </div>
                  <div className="flex space-x-2 mt-3">
                    {result.status === "Pending Validation" && (
                      <>
                        <Button size="sm" variant="default">
                          Validate
                        </Button>
                        <Button size="sm" variant="outline">
                          Request Retest
                        </Button>
                      </>
                    )}
                    {result.critical && (
                      <Button size="sm" variant="destructive">
                        Notify Doctor Immediately
                      </Button>
                    )}
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
            <CardDescription>Frequently used laboratory functions</CardDescription>
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
                <span className="text-sm">Process Sample</span>
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
                <span className="text-sm">Validate Results</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="text-sm">Sample Lookup</span>
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
                <span className="text-sm">Lab Reports</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
