"use client"

import type React from "react"

import { useState } from "react"
import { AppHeader } from "./app-header"
import { AppSidebar } from "./app-sidebar"
import { AuthGuard } from "@/components/auth/auth-guard"
import { cn } from "@/lib/utils"

interface AppLayoutProps {
  children: React.ReactNode
  allowedRoles?: any[]
}

export function AppLayout({ children, allowedRoles }: AppLayoutProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <AuthGuard allowedRoles={allowedRoles}>
      <div className="min-h-screen bg-background">
        <AppHeader
          onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          isSidebarCollapsed={isSidebarCollapsed}
        />
        <AppSidebar isCollapsed={isSidebarCollapsed} />

        <main className={cn("pt-16 transition-all duration-300", isSidebarCollapsed ? "lg:ml-16" : "lg:ml-64")}>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </AuthGuard>
  )
}
