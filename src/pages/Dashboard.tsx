import { FileText, Store, Award, CheckCircle, CreditCard, Bell, ArrowUpRight, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const stats = [
  { label: "Applications", value: "5", icon: FileText, change: "+2 this month", color: "text-primary", bg: "bg-primary/10" },
  { label: "Certificates", value: "2", icon: CheckCircle, change: "1 pending", color: "text-secondary", bg: "bg-secondary/10" },
  { label: "Total Payments", value: "₦85,000", icon: CreditCard, change: "Last: ₦25,000", color: "text-accent", bg: "bg-accent/10" },
  { label: "Notifications", value: "3", icon: Bell, change: "2 unread", color: "text-destructive", bg: "bg-destructive/10" },
];

const recentActivity = [
  { id: "APP-001", type: "Birth Certificate", status: "Approved", date: "Feb 22, 2026" },
  { id: "APP-002", type: "Shop Levy Payment", status: "Paid", date: "Feb 20, 2026" },
  { id: "APP-003", type: "Company Demand Notice", status: "Pending", date: "Feb 18, 2026" },
  { id: "APP-004", type: "Marriage Certificate", status: "In Review", date: "Feb 15, 2026" },
];

const statusColor: Record<string, string> = {
  Approved: "bg-secondary/10 text-secondary",
  Paid: "bg-secondary/10 text-secondary",
  Pending: "bg-accent/10 text-accent-foreground",
  "In Review": "bg-primary/10 text-primary",
};

const notifications = [
  { text: "Your Birth Certificate application has been approved", time: "2 hours ago" },
  { text: "Shop Levy payment due on March 1, 2026", time: "1 day ago" },
  { text: "Company Demand Notice issued — action required", time: "3 days ago" },
];

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Welcome back, Adebayo 👋</h1>
          <p className="text-muted-foreground">Here's your dashboard overview.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover-lift">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold font-heading text-foreground mt-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: FileText, title: "Company Demand Notice", desc: "View and pay demand notices", path: "/dashboard/demand-notice", color: "text-destructive", bg: "bg-destructive/10" },
            { icon: Store, title: "Shop Levy", desc: "Pay and track shop levy", path: "/dashboard/shop-levy", color: "text-accent", bg: "bg-accent/10" },
            { icon: Award, title: "Certificates", desc: "Apply for certificates", path: "/dashboard/certificates", color: "text-primary", bg: "bg-primary/10" },
          ].map((mod) => (
            <Card key={mod.title} className="hover-lift cursor-pointer group">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-xl ${mod.bg} flex items-center justify-center mb-3`}>
                  <mod.icon className={`w-6 h-6 ${mod.color}`} />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{mod.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{mod.desc}</p>
                <Button size="sm" variant="ghost" className="gap-1 text-primary p-0 h-auto" asChild>
                  <Link to={mod.path}>Open <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-heading text-lg">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{app.type}</p>
                        <p className="text-xs text-muted-foreground">{app.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[app.status]}`}>{app.status}</span>
                      <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="font-heading text-lg">Notifications</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((n, i) => (
                  <div key={i} className="flex items-start gap-3 p-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-foreground">{n.text}</p>
                      <p className="text-xs text-muted-foreground">{n.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle className="font-heading text-lg">Quick Actions</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start gap-2" asChild>
                  <Link to="/dashboard/certificates"><Award className="w-4 h-4" /> Apply for Certificate</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <Link to="/dashboard/shop-levy"><Store className="w-4 h-4" /> Pay Shop Levy</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <Link to="/dashboard/demand-notice"><FileText className="w-4 h-4" /> View Demand Notice</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <Link to="/dashboard/payments"><CreditCard className="w-4 h-4" /> Payment History</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
