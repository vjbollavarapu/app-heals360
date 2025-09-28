"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AuthService, type UserRole } from "@/lib/auth"

interface AuthGuardProps {
  children: React.ReactNode
  allowedRoles?: UserRole[]
  redirectTo?: string
}

export function AuthGuard({ children, allowedRoles, redirectTo = "/login" }: AuthGuardProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthorized, setIsAuthorized] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const authService = AuthService.getInstance()
    const user = authService.getCurrentUser()

    if (!user) {
      router.push(redirectTo)
      return
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
      router.push("/unauthorized")
      return
    }

    setIsAuthorized(true)
    setIsLoading(false)
  }, [allowedRoles, redirectTo, router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return isAuthorized ? <>{children}</> : null
}
