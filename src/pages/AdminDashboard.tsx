import { DollarSign, FileText, Store, Building2, TrendingUp, ArrowUpRight, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/AdminLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const stats = [
  { label: "Total Revenue", value: "₦12.5M", icon: DollarSign, change: "+12% this month", color: "text-secondary", bg: "bg-secondary/10" },
  { label: "Applications", value: "1,234", icon: FileText, change: "+89 this week", color: "text-primary", bg: "bg-primary/10" },
  { label: "Registered Shops", value: "567", icon: Store, change: "+23 this month", color: "text-accent", bg: "bg-accent/10" },
  { label: "Businesses", value: "312", icon: Building2, change: "+15 this month", color: "text-muted-foreground", bg: "bg-muted" },
];

const revenueData = [
  { month: "Sep", revenue: 2400000 },
  { month: "Oct", revenue: 3200000 },
  { month: "Nov", revenue: 2800000 },
  { month: "Dec", revenue: 4100000 },
  { month: "Jan", revenue: 3600000 },
  { month: "Feb", revenue: 4800000 },
];

const certData = [
  { name: "Birth", value: 45 },
  { name: "Marriage", value: 25 },
  { name: "Death", value: 15 },
  { name: "Origin", value: 15 },
];

const COLORS = ["hsl(150, 82%, 23%)", "hsl(145, 63%, 42%)", "hsl(43, 66%, 52%)", "hsl(216, 20%, 70%)"];

const recentActivity = [
  { action: "Application Approved", detail: "Birth Certificate — APP-1234", time: "2 min ago" },
  { action: "Payment Received", detail: "Shop Levy — ₦25,000", time: "15 min ago" },
  { action: "New Registration", detail: "Business — Ogun Farms Ltd", time: "1 hr ago" },
  { action: "Ticket Closed", detail: "TK-089 — Certificate delay", time: "2 hrs ago" },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Admin Overview</h1>
            <p className="text-muted-foreground">Ogun State Local Government Management</p>
          </div>
          <Button className="gap-2 hidden sm:flex">
            <TrendingUp className="w-4 h-4" /> Generate Report
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold font-heading text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-secondary mt-1 flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" /> {stat.change}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-lg">Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(216, 20%, 90%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `₦${(v / 1000000).toFixed(1)}M`} />
                  <Tooltip formatter={(v: number) => [`₦${v.toLocaleString()}`, "Revenue"]} />
                  <Bar dataKey="revenue" fill="hsl(150, 82%, 23%)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-lg">Certificate Types</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={certData} dataKey="value" cx="50%" cy="50%" outerRadius={80} strokeWidth={2}>
                    {certData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {certData.map((item, i) => (
                  <div key={item.name} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                    <span className="text-muted-foreground">{item.name}</span>
                    <span className="font-medium text-foreground ml-auto">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.detail}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
