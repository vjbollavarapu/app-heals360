export interface Patient {
  id: string
  name: string
  age: number
  gender: "Male" | "Female"
  phone: string
  email: string
  lastVisit: string
  nextAppointment?: string
  status: "Active" | "Inactive" | "Critical"
  insurance: string
  avatar?: string
}

export interface Appointment {
  id: string
  patientId: string
  patientName: string
  doctorName: string
  time: string
  date: string
  type: string
  status: "Scheduled" | "In Progress" | "Completed" | "Cancelled" | "Waiting"
  duration: number
  room?: string
}

export interface Bill {
  id: string
  patientId: string
  patientName: string
  amount: number
  status: "Pending" | "Paid" | "Overdue" | "Partial"
  dueDate: string
  services: string[]
  insurance?: string
}

// Mock Patients
export const MOCK_PATIENTS: Patient[] = [
  {
    id: "1",
    name: "John Smith",
    age: 45,
    gender: "Male",
    phone: "+1 (555) 123-4567",
    email: "john.smith@email.com",
    lastVisit: "2024-01-15",
    nextAppointment: "2024-01-22",
    status: "Active",
    insurance: "Blue Cross",
    avatar: "/patient-male.jpg",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    phone: "+1 (555) 234-5678",
    email: "sarah.johnson@email.com",
    lastVisit: "2024-01-14",
    nextAppointment: "2024-01-20",
    status: "Active",
    insurance: "Aetna",
    avatar: "/patient-female.jpg",
  },
  {
    id: "3",
    name: "Michael Chen",
    age: 28,
    gender: "Male",
    phone: "+1 (555) 345-6789",
    email: "michael.chen@email.com",
    lastVisit: "2024-01-16",
    status: "Critical",
    insurance: "United Healthcare",
    avatar: "/patient-male.jpg",
  },
  {
    id: "4",
    name: "Emily Davis",
    age: 55,
    gender: "Female",
    phone: "+1 (555) 456-7890",
    email: "emily.davis@email.com",
    lastVisit: "2024-01-13",
    nextAppointment: "2024-01-25",
    status: "Active",
    insurance: "Cigna",
    avatar: "/patient-female.jpg",
  },
]

// Mock Appointments
export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: "1",
    patientId: "1",
    patientName: "John Smith",
    doctorName: "Dr. Michael Chen",
    time: "09:00",
    date: "2024-01-22",
    type: "Consultation",
    status: "Scheduled",
    duration: 30,
    room: "Room 101",
  },
  {
    id: "2",
    patientId: "2",
    patientName: "Sarah Johnson",
    doctorName: "Dr. Michael Chen",
    time: "10:30",
    date: "2024-01-22",
    type: "Follow-up",
    status: "Waiting",
    duration: 20,
    room: "Room 102",
  },
  {
    id: "3",
    patientId: "4",
    patientName: "Emily Davis",
    doctorName: "Dr. Robert Kim",
    time: "14:00",
    date: "2024-01-22",
    type: "Check-up",
    status: "In Progress",
    duration: 45,
    room: "Room 103",
  },
  {
    id: "4",
    patientId: "3",
    patientName: "Michael Chen",
    doctorName: "Dr. Michael Chen",
    time: "15:30",
    date: "2024-01-22",
    type: "Emergency",
    status: "Scheduled",
    duration: 60,
    room: "ER-1",
  },
]

// Mock Bills
export const MOCK_BILLS: Bill[] = [
  {
    id: "1",
    patientId: "1",
    patientName: "John Smith",
    amount: 450.0,
    status: "Pending",
    dueDate: "2024-02-01",
    services: ["Consultation", "Blood Test"],
    insurance: "Blue Cross",
  },
  {
    id: "2",
    patientId: "2",
    patientName: "Sarah Johnson",
    amount: 280.0,
    status: "Paid",
    dueDate: "2024-01-15",
    services: ["Follow-up Visit"],
    insurance: "Aetna",
  },
  {
    id: "3",
    patientId: "3",
    patientName: "Michael Chen",
    amount: 1250.0,
    status: "Overdue",
    dueDate: "2024-01-10",
    services: ["Emergency Care", "X-Ray", "CT Scan"],
    insurance: "United Healthcare",
  },
]

// Dashboard Stats
export const DASHBOARD_STATS = {
  frontoffice: {
    totalPatients: 2847,
    todayAppointments: 47,
    waitingPatients: 12,
    insuranceVerifications: 8,
  },
  doctor: {
    todayConsultations: 18,
    waitingPatients: 5,
    labRequests: 12,
    prescriptions: 24,
  },
  cashier: {
    pendingBills: 156,
    todayCollections: 89432,
    insuranceClaims: 23,
    overduePayments: 8,
  },
  pharmacy: {
    prescriptionQueue: 34,
    stockAlerts: 7,
    dispensedToday: 127,
    lowStock: 12,
  },
}
