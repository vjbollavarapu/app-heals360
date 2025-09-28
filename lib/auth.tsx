export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  department?: string
}

export type UserRole =
  | "frontoffice"
  | "doctor"
  | "cashier"
  | "pharmacy"
  | "labtech"
  | "radiologist"
  | "hr"
  | "cfo"
  | "patient"
  | "admin"

export const ROLE_LABELS: Record<UserRole, string> = {
  frontoffice: "Front Office",
  doctor: "Doctor",
  cashier: "Cashier",
  pharmacy: "Pharmacy",
  labtech: "Laboratory Technician",
  radiologist: "Radiologist",
  hr: "HR Manager",
  cfo: "Finance CFO",
  patient: "Patient",
  admin: "Multi-Tenant Admin",
}

// Mock users for demonstration
export const MOCK_USERS: Record<string, User> = {
  "frontoffice@heals360.com": {
    id: "1",
    email: "frontoffice@heals360.com",
    name: "Sarah Johnson",
    role: "frontoffice",
    department: "Front Office",
    avatar: "/patient-female.jpg",
  },
  "doctor@heals360.com": {
    id: "2",
    email: "doctor@heals360.com",
    name: "Dr. Michael Chen",
    role: "doctor",
    department: "Cardiology",
    avatar: "/caring-doctor.png",
  },
  "cashier@heals360.com": {
    id: "3",
    email: "cashier@heals360.com",
    name: "Lisa Rodriguez",
    role: "cashier",
    department: "Billing",
    avatar: "/patient-female.jpg",
  },
  "pharmacy@heals360.com": {
    id: "4",
    email: "pharmacy@heals360.com",
    name: "James Wilson",
    role: "pharmacy",
    department: "Pharmacy",
    avatar: "/patient-male.jpg",
  },
  "labtech@heals360.com": {
    id: "5",
    email: "labtech@heals360.com",
    name: "Emily Davis",
    role: "labtech",
    department: "Laboratory",
    avatar: "/patient-female.jpg",
  },
  "radiologist@heals360.com": {
    id: "6",
    email: "radiologist@heals360.com",
    name: "Dr. Robert Kim",
    role: "radiologist",
    department: "Radiology",
    avatar: "/caring-doctor.png",
  },
  "hr@heals360.com": {
    id: "7",
    email: "hr@heals360.com",
    name: "Amanda Thompson",
    role: "hr",
    department: "Human Resources",
    avatar: "/patient-female.jpg",
  },
  "cfo@heals360.com": {
    id: "8",
    email: "cfo@heals360.com",
    name: "David Martinez",
    role: "cfo",
    department: "Finance",
    avatar: "/patient-male.jpg",
  },
  "patient@heals360.com": {
    id: "9",
    email: "patient@heals360.com",
    name: "John Smith",
    role: "patient",
    avatar: "/patient-male.jpg",
  },
  "admin@heals360.com": {
    id: "10",
    email: "admin@heals360.com",
    name: "Alex Turner",
    role: "admin",
    department: "System Administration",
    avatar: "/patient-male.jpg",
  },
}

export class AuthService {
  private static instance: AuthService
  private currentUser: User | null = null

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async login(email: string, password: string): Promise<{ success: boolean; user?: User; error?: string }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const user = MOCK_USERS[email.toLowerCase()]
    if (!user) {
      return { success: false, error: "Invalid email or password" }
    }

    // For demo purposes, any password works
    this.currentUser = user
    localStorage.setItem("heals_user", JSON.stringify(user))

    return { success: true, user }
  }

  logout(): void {
    this.currentUser = null
    localStorage.removeItem("heals_user")
  }

  getCurrentUser(): User | null {
    if (this.currentUser) {
      return this.currentUser
    }

    const stored = localStorage.getItem("heals_user")
    if (stored) {
      this.currentUser = JSON.parse(stored)
      return this.currentUser
    }

    return null
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null
  }

  hasRole(role: UserRole): boolean {
    const user = this.getCurrentUser()
    return user?.role === role
  }

  hasAnyRole(roles: UserRole[]): boolean {
    const user = this.getCurrentUser()
    return user ? roles.includes(user.role) : false
  }
}
;("use client")

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; user?: User; error?: string }>
  logout: () => void
  isAuthenticated: boolean
  hasRole: (role: UserRole) => boolean
  hasAnyRole: (roles: UserRole[]) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const authService = AuthService.getInstance()

  useEffect(() => {
    const currentUser = authService.getCurrentUser()
    setUser(currentUser)
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    const result = await authService.login(email, password)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }

  const logout = () => {
    authService.logout()
    setUser(null)
  }

  const hasRole = (role: UserRole) => {
    return user?.role === role
  }

  const hasAnyRole = (roles: UserRole[]) => {
    return user ? roles.includes(user.role) : false
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: !!user,
        hasRole,
        hasAnyRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
