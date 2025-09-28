import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    patient: "John Doe",
    action: "Appointment completed",
    time: "2 hours ago",
    status: "completed",
    avatar: "/patient-male.jpg",
  },
  {
    id: 2,
    patient: "Sarah Johnson",
    action: "Lab results uploaded",
    time: "4 hours ago",
    status: "pending",
    avatar: "/patient-female.jpg",
  },
  {
    id: 3,
    patient: "Mike Wilson",
    action: "Prescription issued",
    time: "6 hours ago",
    status: "completed",
    avatar: "/patient-male-2.jpg",
  },
  {
    id: 4,
    patient: "Emily Davis",
    action: "Follow-up scheduled",
    time: "1 day ago",
    status: "scheduled",
    avatar: "/patient-female-2.jpg",
  },
]

export function RecentActivity() {
  return (
    <Card className="shadow-corporate">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest patient interactions and system updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={activity.avatar || "/placeholder.svg"} alt={activity.patient} />
                <AvatarFallback>
                  {activity.patient
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{activity.patient}</p>
                <p className="text-sm text-muted-foreground">{activity.action}</p>
              </div>
              <div className="text-right space-y-1">
                <Badge
                  variant={
                    activity.status === "completed"
                      ? "default"
                      : activity.status === "pending"
                        ? "secondary"
                        : "outline"
                  }
                  className="text-xs"
                >
                  {activity.status}
                </Badge>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
