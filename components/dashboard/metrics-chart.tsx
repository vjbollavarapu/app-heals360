import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { name: "Jan", patients: 400, appointments: 240 },
  { name: "Feb", patients: 300, appointments: 139 },
  { name: "Mar", patients: 200, appointments: 980 },
  { name: "Apr", patients: 278, appointments: 390 },
  { name: "May", patients: 189, appointments: 480 },
  { name: "Jun", patients: 239, appointments: 380 },
  { name: "Jul", patients: 349, appointments: 430 },
]

export function MetricsChart() {
  const maxPatients = Math.max(...data.map((d) => d.patients))
  const maxAppointments = Math.max(...data.map((d) => d.appointments))

  return (
    <Card className="shadow-corporate">
      <CardHeader>
        <CardTitle>Patient & Appointment Trends</CardTitle>
        <CardDescription>Monthly overview of patient registrations and appointments</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Legend */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span>Patients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span>Appointments</span>
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="space-y-4">
            {data.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>{item.name}</span>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Patients: {item.patients}</span>
                    <span>Appointments: {item.appointments}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  {/* Patients Bar */}
                  <div className="flex items-center gap-2">
                    <div className="w-16 text-xs text-muted-foreground">Patients</div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(item.patients / maxPatients) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  {/* Appointments Bar */}
                  <div className="flex items-center gap-2">
                    <div className="w-16 text-xs text-muted-foreground">Appts</div>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div
                        className="bg-secondary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(item.appointments / maxAppointments) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {data.reduce((sum, item) => sum + item.patients, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Patients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">
                {data.reduce((sum, item) => sum + item.appointments, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Appointments</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
