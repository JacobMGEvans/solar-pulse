import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import {
  CartesianGrid,
  XAxis,
  Line,
  LineChart,
  Pie,
  PieChart,
  Bar,
  BarChart,
} from 'recharts';
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from '@/components/ui/chart';

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base mr-4"
          prefetch={false}
        >
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Solar Panel Dashboard</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6">
          <Link href="#" className="font-bold" prefetch={false}>
            Overview
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Financial
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Energy
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Customers
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Tasks
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Settings
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Button variant="ghost" size="icon" className="rounded-full ml-auto">
            <img
              src="/placeholder.svg"
              width="32"
              height="32"
              className="rounded-full border"
              alt="Avatar"
              style={{ aspectRatio: '32/32', objectFit: 'cover' }}
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:gap-8 md:p-10">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Energy Output
            </CardTitle>
            <MountainIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5 MWh</div>
            <Progress value={80} className="mt-2" />
            <div className="text-xs text-muted-foreground">80% of target</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active Projects
            </CardTitle>
            <BuildingIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <div className="flex items-center gap-2 mt-2">
              <div className="bg-green-500 w-3 h-3 rounded-full" />
              <div className="text-xs text-muted-foreground">75% Completed</div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="bg-yellow-500 w-3 h-3 rounded-full" />
              <div className="text-xs text-muted-foreground">
                20% In Progress
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="bg-red-500 w-3 h-3 rounded-full" />
              <div className="text-xs text-muted-foreground">5% Delayed</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
            <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1.2M</div>
            <Progress value={90} className="mt-2" />
            <div className="text-xs text-muted-foreground">90% of target</div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Financial Insights
            </CardTitle>
            <BarChartIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="grid gap-2">
                <div className="text-sm font-medium">ROI</div>
                <LinechartChart className="aspect-[4/3]" />
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Savings</div>
                <PiechartcustomChart className="aspect-[4/3]" />
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Cost Breakdown</div>
                <PiechartcustomChart className="aspect-[4/3]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Energy Performance
            </CardTitle>
            <GaugeIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="grid gap-2">
                <div className="text-sm font-medium">Energy Output</div>
                <LinechartChart className="aspect-[4/3]" />
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Efficiency</div>
                <BarchartChart className="aspect-[4/3]" />
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Consumption</div>
                <PiechartlabelChart className="aspect-[4/3]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Customer Portal
            </CardTitle>
            <UsersIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="grid gap-2">
                <div className="text-sm font-medium">Project Details</div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>Residential Solar</TableCell>
                      <TableCell>
                        <Badge variant="outline">Completed</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Jane Smith</TableCell>
                      <TableCell>Commercial Solar</TableCell>
                      <TableCell>
                        <Badge variant="outline">In Progress</Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Michael Johnson</TableCell>
                      <TableCell>Residential Solar</TableCell>
                      <TableCell>
                        <Badge variant="outline">Delayed</Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Savings</div>
                <BarchartChart className="aspect-[4/3]" />
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Energy Usage</div>
                <PiechartcustomChart className="aspect-[4/3]" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Task Management
            </CardTitle>
            <CalendarIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="grid gap-2">
                <div className="text-sm font-medium">Project Kanban</div>
                <div>
                  <div>
                    <div>
                      <div className="font-medium">Install solar panels</div>
                      <div className="text-xs text-muted-foreground">
                        Due: 2023-06-15
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Schedule maintenance</div>
                      <div className="text-xs text-muted-foreground">
                        Due: 2023-07-01
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="font-medium">Upgrade inverter</div>
                      <div className="text-xs text-muted-foreground">
                        Due: 2023-06-30
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="font-medium">Conduct site survey</div>
                      <div className="text-xs text-muted-foreground">
                        Completed: 2023-05-20
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Maintenance Schedule</div>
                <Calendar className="p-0" />
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Notifications</div>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 w-3 h-3 rounded-full" />
                    <div>
                      <div className="font-medium">Project Completed</div>
                      <div className="text-xs text-muted-foreground">
                        Residential Solar - John Doe
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-500 w-3 h-3 rounded-full" />
                    <div>
                      <div className="font-medium">Maintenance Due</div>
                      <div className="text-xs text-muted-foreground">
                        Schedule maintenance for June 15th
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-red-500 w-3 h-3 rounded-full" />
                    <div>
                      <div className="font-medium">Delayed Project</div>
                      <div className="text-xs text-muted-foreground">
                        Commercial Solar - Jane Smith
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <SettingsIcon className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="grid gap-2">
                <div className="text-sm font-medium">Project Management</div>
                <div className="h-[400px]">
                  <div className="w-full h-full" />
                </div>
              </div>
              <div className="grid gap-2">
                <div className="text-sm font-medium">Project Details</div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div>Theme</div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm">
                          Light
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Light</DropdownMenuItem>
                        <DropdownMenuItem>Dark</DropdownMenuItem>
                        <DropdownMenuItem>Auto</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>Layout</div>
                    <DropdownMenu>
                      <DropdownMenuTrigger />
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function BarchartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: 'Desktop',
            color: 'hsl(var(--chart-1))',
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: 'January', desktop: 186 },
            { month: 'February', desktop: 305 },
            { month: 'March', desktop: 237 },
            { month: 'April', desktop: 73 },
            { month: 'May', desktop: 209 },
            { month: 'June', desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function GaugeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

function LinechartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: 'Desktop',
            color: 'hsl(var(--chart-1))',
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: 'January', desktop: 186 },
            { month: 'February', desktop: 305 },
            { month: 'March', desktop: 237 },
            { month: 'April', desktop: 73 },
            { month: 'May', desktop: 209 },
            { month: 'June', desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PiechartcustomChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: 'Visitors',
          },
          chrome: {
            label: 'Chrome',
            color: 'hsl(var(--chart-1))',
          },
          safari: {
            label: 'Safari',
            color: 'hsl(var(--chart-2))',
          },
          firefox: {
            label: 'Firefox',
            color: 'hsl(var(--chart-3))',
          },
          edge: {
            label: 'Edge',
            color: 'hsl(var(--chart-4))',
          },
          other: {
            label: 'Other',
            color: 'hsl(var(--chart-5))',
          },
        }}
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={[
              { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
              { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
              {
                browser: 'firefox',
                visitors: 187,
                fill: 'var(--color-firefox)',
              },
              { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
              { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
            ]}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}

function PiechartlabelChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: 'Visitors',
          },
          chrome: {
            label: 'Chrome',
            color: 'hsl(var(--chart-1))',
          },
          safari: {
            label: 'Safari',
            color: 'hsl(var(--chart-2))',
          },
          firefox: {
            label: 'Firefox',
            color: 'hsl(var(--chart-3))',
          },
          edge: {
            label: 'Edge',
            color: 'hsl(var(--chart-4))',
          },
          other: {
            label: 'Other',
            color: 'hsl(var(--chart-5))',
          },
        }}
        className="mx-auto aspect-square max-h-[250px] pb-0"
      >
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
              { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
              {
                browser: 'firefox',
                visitors: 187,
                fill: 'var(--color-firefox)',
              },
              { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
              { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
            ]}
            dataKey="visitors"
            label
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
