"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/lib/auth"
import { Heart } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const result = await login(email, password)

    if (result.success && result.user) {
      // Redirect based on role
      const roleRoutes = {
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

      router.push(roleRoutes[result.user.role] || "/dashboard")
    } else {
      setError(result.error || "Login failed")
    }

    setIsLoading(false)
  }

  const demoUsers = [
    { email: "frontoffice@heals360.com", role: "Front Office" },
    { email: "doctor@heals360.com", role: "Doctor" },
    { email: "cashier@heals360.com", role: "Cashier" },
    { email: "pharmacy@heals360.com", role: "Pharmacy" },
    { email: "labtech@heals360.com", role: "Lab Tech" },
    { email: "radiologist@heals360.com", role: "Radiologist" },
    { email: "hr@heals360.com", role: "HR Manager" },
    { email: "cfo@heals360.com", role: "Finance CFO" },
    { email: "patient@heals360.com", role: "Patient" },
    { email: "admin@heals360.com", role: "Admin" },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Logo and Branding */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold text-primary">HEALS</h1>
          </div>
          <p className="text-muted-foreground">Healthcare Enterprise Administration System</p>
        </div>

        {/* Login Form */}
        <Card className="border-2">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign In</CardTitle>
            <CardDescription className="text-center">Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              {error && <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">{error}</div>}

              <Button type="submit" className="w-full h-11" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>

              <div className="text-center">
                <Button variant="link" className="text-sm text-muted-foreground">
                  Forgot Password?
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Demo Users */}
        <Card className="border border-dashed">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Demo Users</CardTitle>
            <CardDescription className="text-xs">Click any email to auto-fill (password: any)</CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-2 gap-2">
              {demoUsers.map((user) => (
                <Button
                  key={user.email}
                  variant="ghost"
                  size="sm"
                  className="justify-start text-xs h-8"
                  onClick={() => setEmail(user.email)}
                >
                  <div className="text-left">
                    <div className="font-medium">{user.role}</div>
                    <div className="text-muted-foreground text-xs truncate">{user.email.split("@")[0]}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
