"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthService } from "@/lib/auth"
import { getRoleDashboardPath } from "@/lib/navigation"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const authService = AuthService.getInstance()
    const user = authService.getCurrentUser()

    if (user) {
      const dashboardPath = getRoleDashboardPath(user.role)
      router.replace(dashboardPath)
    } else {
      router.replace("/login")
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}
