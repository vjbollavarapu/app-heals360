import type { UserRole } from "./auth"

export interface NavigationItem {
  id: string
  label: string
  href: string
  icon: string
  roles: UserRole[]
  children?: NavigationItem[]
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    roles: ["frontoffice", "doctor", "cashier", "pharmacy", "labtech", "radiologist", "hr", "cfo", "patient", "admin"],
  },
  {
    id: "patients",
    label: "Patients",
    href: "/patients",
    icon: "users",
    roles: ["frontoffice", "doctor", "cashier", "labtech", "radiologist"],
  },
  {
    id: "appointments",
    label: "Appointments",
    href: "/appointments",
    icon: "calendar",
    roles: ["frontoffice", "doctor", "patient"],
  },
  {
    id: "consultations",
    label: "Consultations",
    href: "/consultations",
    icon: "stethoscope",
    roles: ["doctor"],
  },
  {
    id: "billing",
    label: "Billing",
    href: "/billing",
    icon: "receipt",
    roles: ["cashier", "cfo"],
  },
  {
    id: "payments",
    label: "Payments",
    href: "/payments",
    icon: "credit-card",
    roles: ["cashier", "patient"],
  },
  {
    id: "pharmacy",
    label: "Pharmacy",
    href: "/pharmacy",
    icon: "pill",
    roles: ["pharmacy", "doctor"],
  },
  {
    id: "laboratory",
    label: "Laboratory",
    href: "/laboratory",
    icon: "flask",
    roles: ["labtech", "doctor"],
  },
  {
    id: "radiology",
    label: "Radiology",
    href: "/radiology",
    icon: "scan",
    roles: ["radiologist", "doctor"],
  },
  {
    id: "medical-records",
    label: "Medical Records",
    href: "/medical-records",
    icon: "file-text",
    roles: ["doctor", "frontoffice"],
  },
  {
    id: "staff",
    label: "Staff Management",
    href: "/staff",
    icon: "users",
    roles: ["hr"],
  },
  {
    id: "payroll",
    label: "Payroll",
    href: "/payroll",
    icon: "dollar-sign",
    roles: ["hr", "cfo"],
  },
  {
    id: "finance",
    label: "Finance",
    href: "/finance",
    icon: "trending-up",
    roles: ["cfo"],
  },
  {
    id: "reports",
    label: "Reports",
    href: "/reports",
    icon: "bar-chart",
    roles: ["cfo", "hr", "admin"],
  },
  {
    id: "tenant-management",
    label: "Tenant Management",
    href: "/tenant-management",
    icon: "building",
    roles: ["admin"],
  },
  {
    id: "system-settings",
    label: "System Settings",
    href: "/settings",
    icon: "settings",
    roles: ["admin"],
  },
]

export function getNavigationForRole(role: UserRole): NavigationItem[] {
  return NAVIGATION_ITEMS.filter((item) => item.roles.includes(role))
}

export function getRoleDashboardPath(role: UserRole): string {
  const dashboardPaths = {
    frontoffice: "/dashboard/frontoffice",
    doctor: "/dashboard/doctor",
    cashier: "/dashboard/cashier",
    pharmacy: "/dashboard/pharmacy",
    labtech: "/dashboard/laboratory",
    radiologist: "/dashboard/radiology",
    hr: "/dashboard/hr",
    cfo: "/dashboard/finance",
    patient: "/dashboard/patient",
    admin: "/dashboard/admin",
  }

  return dashboardPaths[role] || "/dashboard"
}
