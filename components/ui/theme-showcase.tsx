import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Simple SVG icons to replace lucide-react
const InfoIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const CheckCircleIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const XCircleIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const AlertCircleIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
)

export function ThemeShowcase() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">HealSerp UI Theme</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          A comprehensive healthcare corporate design system with modular components built for professional medical
          applications.
        </p>
      </div>

      {/* Color Palette */}
      <Card className="shadow-corporate">
        <CardHeader>
          <CardTitle>Color Palette</CardTitle>
          <CardDescription>Brand colors extracted from the healthcare logo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div className="h-16 bg-primary rounded-lg"></div>
              <p className="text-sm font-medium">Primary Green</p>
              <p className="text-xs text-muted-foreground">#22c55e</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-secondary rounded-lg"></div>
              <p className="text-sm font-medium">Secondary Blue</p>
              <p className="text-xs text-muted-foreground">#3b82f6</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-accent rounded-lg"></div>
              <p className="text-sm font-medium">Accent Blue</p>
              <p className="text-xs text-muted-foreground">#60a5fa</p>
            </div>
            <div className="space-y-2">
              <div className="h-16 bg-success rounded-lg"></div>
              <p className="text-sm font-medium">Success Green</p>
              <p className="text-xs text-muted-foreground">#4ade80</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Buttons */}
      <Card className="shadow-corporate">
        <CardHeader>
          <CardTitle>Buttons</CardTitle>
          <CardDescription>Various button styles and states</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button disabled>Disabled</Button>
          </div>
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card className="shadow-corporate">
        <CardHeader>
          <CardTitle>Form Elements</CardTitle>
          <CardDescription>Input fields and form controls</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="select">Select Option</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Enable notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
              </div>
              <RadioGroup defaultValue="option1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="r1" />
                  <Label htmlFor="r1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="r2" />
                  <Label htmlFor="r2">Option 2</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badges and Progress */}
      <Card className="shadow-corporate">
        <CardHeader>
          <CardTitle>Badges & Progress</CardTitle>
          <CardDescription>Status indicators and progress bars</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Alert>
          <InfoIcon />
          <AlertTitle>Information</AlertTitle>
          <AlertDescription>This is an informational alert message.</AlertDescription>
        </Alert>
        <Alert className="border-success text-success">
          <CheckCircleIcon />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Operation completed successfully.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <XCircleIcon />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </Alert>
        <Alert className="border-amber-500 text-amber-600">
          <AlertCircleIcon />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Please review before proceeding.</AlertDescription>
        </Alert>
      </div>

      {/* Tabs */}
      <Card className="shadow-corporate">
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
          <CardDescription>Tabbed navigation component</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <p className="text-muted-foreground">Overview content goes here.</p>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <p className="text-muted-foreground">Analytics content goes here.</p>
            </TabsContent>
            <TabsContent value="reports" className="mt-4">
              <p className="text-muted-foreground">Reports content goes here.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
