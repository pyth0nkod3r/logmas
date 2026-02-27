import { useState } from "react";
import { Bell, CheckCircle, FileText, CreditCard, MessageSquare, Circle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  read: boolean;
  type: "application" | "payment" | "certificate" | "ticket";
  link: string;
}

const initialNotifications: Notification[] = [
  { id: "1", title: "Application Submitted", description: "Your Birth Certificate application (CERT-001) has been submitted successfully.", date: "Feb 26, 2026 – 10:30 AM", read: false, type: "application", link: "/dashboard/certificates" },
  { id: "2", title: "Payment Received", description: "Payment of ₦5,000 for Shop Levy has been confirmed.", date: "Feb 25, 2026 – 3:15 PM", read: false, type: "payment", link: "/dashboard/payments" },
  { id: "3", title: "Certificate Approved", description: "Your Marriage Certificate (CERT-002) has been approved and is ready for download.", date: "Feb 24, 2026 – 11:00 AM", read: true, type: "certificate", link: "/dashboard/certificates" },
  { id: "4", title: "Certificate Rejected", description: "Your State of Origin application was rejected. Reason: Incomplete documents.", date: "Feb 23, 2026 – 9:45 AM", read: true, type: "certificate", link: "/dashboard/certificates" },
  { id: "5", title: "Ticket Response Received", description: "Admin has replied to your ticket #TKT-001 regarding payment issue.", date: "Feb 22, 2026 – 2:00 PM", read: false, type: "ticket", link: "/dashboard/tickets" },
  { id: "6", title: "Demand Notice Issued", description: "A new Company Demand Notice of ₦45,000 has been issued for your business.", date: "Feb 21, 2026 – 8:30 AM", read: true, type: "application", link: "/dashboard/demand-notice" },
  { id: "7", title: "Payment Due Reminder", description: "Your Shop Levy payment is due on March 1, 2026. Please pay before the deadline.", date: "Feb 20, 2026 – 10:00 AM", read: true, type: "payment", link: "/dashboard/shop-levy" },
];

const typeIcon: Record<string, React.ElementType> = {
  application: FileText,
  payment: CreditCard,
  certificate: CheckCircle,
  ticket: MessageSquare,
};

const DashboardNotifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [filter, setFilter] = useState<"all" | "unread">("all");

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const filtered = filter === "unread" ? notifications.filter((n) => !n.read) : notifications;
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Notifications</h1>
            <p className="text-muted-foreground">{unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}</p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant={filter === "all" ? "default" : "outline"} onClick={() => setFilter("all")}>All</Button>
            <Button size="sm" variant={filter === "unread" ? "default" : "outline"} onClick={() => setFilter("unread")}>Unread ({unreadCount})</Button>
            <Button size="sm" variant="ghost" onClick={markAllRead}>Mark all read</Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0 divide-y divide-border">
            {filtered.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">No notifications to show.</div>
            )}
            {filtered.map((n) => {
              const Icon = typeIcon[n.type];
              return (
                <Link
                  key={n.id}
                  to={n.link}
                  onClick={() => markAsRead(n.id)}
                  className={`flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors ${!n.read ? "bg-primary/5" : ""}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {!n.read && <Circle className="w-2 h-2 fill-primary text-primary flex-shrink-0" />}
                      <p className={`text-sm font-medium text-foreground ${!n.read ? "font-semibold" : ""}`}>{n.title}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">{n.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{n.date}</p>
                  </div>
                </Link>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardNotifications;
