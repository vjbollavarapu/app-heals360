import { AppLayout } from "@/components/layout/app-layout"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PatientDashboard() {
  const patientInfo = {
    name: "John Smith",
    id: "P-2024-001",
    age: 45,
    bloodType: "O+",
    allergies: ["Penicillin", "Shellfish"],
    emergencyContact: "Jane Smith - (555) 123-4567",
  }

  const upcomingAppointments = [
    {
      id: "1",
      doctor: "Dr. Michael Chen",
      specialty: "Cardiology",
      date: "2024-01-25",
      time: "10:30 AM",
      type: "Follow-up",
      location: "Room 201",
      status: "Confirmed",
    },
    {
      id: "2",
      doctor: "Dr. Sarah Wilson",
      specialty: "Dermatology",
      date: "2024-02-02",
      time: "02:15 PM",
      type: "Consultation",
      location: "Room 305",
      status: "Pending",
    },
    {
      id: "3",
      doctor: "Dr. Robert Kim",
      specialty: "Radiology",
      date: "2024-02-08",
      time: "09:00 AM",
      type: "MRI Scan",
      location: "Imaging Center",
      status: "Scheduled",
    },
  ]

  const labResults = [
    {
      id: "1",
      test: "Complete Blood Count",
      date: "2024-01-20",
      status: "Normal",
      doctor: "Dr. Michael Chen",
      critical: false,
      results: "WBC: 7.2, RBC: 4.5, Hgb: 14.2",
    },
    {
      id: "2",
      test: "Lipid Panel",
      date: "2024-01-20",
      status: "Abnormal",
      doctor: "Dr. Michael Chen",
      critical: false,
      results: "Total Chol: 245 (High), LDL: 165 (High)",
    },
    {
      id: "3",
      test: "HbA1c",
      date: "2024-01-15",
      status: "Normal",
      doctor: "Dr. Michael Chen",
      critical: false,
      results: "5.8% (Good control)",
    },
  ]

  const prescriptions = [
    {
      id: "1",
      medication: "Lisinopril 10mg",
      dosage: "Once daily",
      prescribedBy: "Dr. Michael Chen",
      prescribedDate: "2024-01-20",
      refillsLeft: 3,
      status: "Active",
    },
    {
      id: "2",
      medication: "Atorvastatin 20mg",
      dosage: "Once daily at bedtime",
      prescribedBy: "Dr. Michael Chen",
      prescribedDate: "2024-01-20",
      refillsLeft: 2,
      status: "Active",
    },
    {
      id: "3",
      medication: "Metformin 500mg",
      dosage: "Twice daily with meals",
      prescribedBy: "Dr. Michael Chen",
      prescribedDate: "2024-01-10",
      refillsLeft: 0,
      status: "Refill Needed",
    },
  ]

  const bills = [
    {
      id: "1",
      date: "2024-01-20",
      description: "Cardiology Consultation",
      amount: 250.0,
      insurance: "Blue Cross",
      patientPortion: 50.0,
      status: "Paid",
    },
    {
      id: "2",
      date: "2024-01-20",
      description: "Laboratory Tests",
      amount: 180.0,
      insurance: "Blue Cross",
      patientPortion: 36.0,
      status: "Pending",
    },
    {
      id: "3",
      date: "2024-01-15",
      description: "Prescription Medications",
      amount: 125.0,
      insurance: "Blue Cross",
      patientPortion: 25.0,
      status: "Paid",
    },
  ]

  return (
    <AppLayout allowedRoles={["patient"]}>
      <div className="space-y-6">
        <div>
          <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }, { label: "Patient Portal" }]} />
          <h1 className="text-3xl font-bold mt-2">Welcome, {patientInfo.name}</h1>
          <p className="text-muted-foreground">Manage your health information and appointments</p>
        </div>

        {/* Patient Info Card */}
        <Card>
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
            <CardDescription>Your basic health information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Patient ID</p>
                <p className="text-lg">{patientInfo.id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Age</p>
                <p className="text-lg">{patientInfo.age} years</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Blood Type</p>
                <p className="text-lg">{patientInfo.bloodType}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Allergies</p>
                <p className="text-lg">{patientInfo.allergies.join(", ")}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Emergency Contact</p>
                <p className="text-lg">{patientInfo.emergencyContact}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upcoming Appointments */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Your scheduled medical appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{appointment.doctor}</p>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                      </div>
                      <Badge
                        variant={
                          appointment.status === "Confirmed"
                            ? "default"
                            : appointment.status === "Pending"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        {new Date(appointment.date).toLocaleDateString()} at {appointment.time}
                      </p>
                      <p>
                        {appointment.type} • {appointment.location}
                      </p>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">
                        Reschedule
                      </Button>
                      <Button size="sm" variant="outline">
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="default">
                Schedule New Appointment
              </Button>
            </CardContent>
          </Card>

          {/* Lab Results */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Lab Results</CardTitle>
              <CardDescription>Your latest laboratory test results</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {labResults.map((result) => (
                  <div key={result.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{result.test}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(result.date).toLocaleDateString()} • {result.doctor}
                        </p>
                      </div>
                      <Badge variant={result.status === "Normal" ? "default" : "secondary"}>{result.status}</Badge>
                    </div>
                    <div className="bg-muted/50 p-2 rounded text-sm">
                      <p>{result.results}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-transparent" variant="outline">
                View All Lab Results
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Current Prescriptions</CardTitle>
              <CardDescription>Your active medications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {prescriptions.map((prescription) => (
                  <div key={prescription.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{prescription.medication}</p>
                        <p className="text-sm text-muted-foreground">{prescription.dosage}</p>
                      </div>
                      <Badge variant={prescription.status === "Active" ? "default" : "destructive"}>
                        {prescription.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Prescribed by {prescription.prescribedBy}</p>
                      <p>
                        {new Date(prescription.prescribedDate).toLocaleDateString()} • Refills left:{" "}
                        {prescription.refillsLeft}
                      </p>
                    </div>
                    {prescription.status === "Refill Needed" && (
                      <Button size="sm" className="mt-2" variant="default">
                        Request Refill
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bills & Payments */}
          <Card>
            <CardHeader>
              <CardTitle>Bills & Payments</CardTitle>
              <CardDescription>Your medical bills and payment history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bills.map((bill) => (
                  <div key={bill.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="font-medium">{bill.description}</p>
                        <p className="text-sm text-muted-foreground">{new Date(bill.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">${bill.patientPortion.toFixed(2)}</p>
                        <Badge variant={bill.status === "Paid" ? "default" : "secondary"}>{bill.status}</Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>
                        Total: ${bill.amount.toFixed(2)} • Insurance: {bill.insurance}
                      </p>
                    </div>
                    {bill.status === "Pending" && (
                      <Button size="sm" className="mt-2" variant="default">
                        Pay Now
                      </Button>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm font-medium text-green-800">Outstanding Balance</p>
                <p className="text-2xl font-bold text-green-600">
                  $
                  {bills
                    .filter((b) => b.status === "Pending")
                    .reduce((sum, b) => sum + b.patientPortion, 0)
                    .toFixed(2)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used patient portal functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">Book Appointment</span>
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
                <span className="text-sm">Request Refill</span>
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
                <span className="text-sm">Pay Bills</span>
              </Button>
              <Button className="h-20 flex flex-col space-y-2 bg-transparent" variant="outline">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span className="text-sm">Message Doctor</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
}
