import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, LayoutDashboard, FileText, CheckSquare, Store, Building2, CreditCard, BarChart3, MessageSquare, Settings, LogOut, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: FileText, label: "Applications", path: "/admin/applications" },
  { icon: CheckSquare, label: "Certificates", path: "/admin/certificates" },
  { icon: Store, label: "Shops", path: "/admin/shops" },
  { icon: Building2, label: "Businesses", path: "/admin/businesses" },
  { icon: CreditCard, label: "Payments", path: "/admin/payments" },
  { icon: BarChart3, label: "Reports", path: "/admin/reports" },
  { icon: MessageSquare, label: "Tickets", path: "/admin/tickets" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex">
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 gradient-primary text-primary-foreground transform transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-2 p-5 border-b border-primary-foreground/10">
          <div className="w-9 h-9 gradient-gold rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-gold-foreground" />
          </div>
          <div>
            <span className="font-heading font-bold">LOGMAS</span>
            <p className="text-xs opacity-70">Admin Portal</p>
          </div>
          <button className="lg:hidden ml-auto" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto" style={{ maxHeight: "calc(100vh - 140px)" }}>
          {menuItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? "bg-primary-foreground/20 text-primary-foreground" : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
                {active && <ChevronRight className="w-4 h-4 ml-auto" />}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-3 right-3">
          <Button variant="ghost" className="w-full justify-start gap-3 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <Link to="/"><LogOut className="w-5 h-5" /> Logout</Link>
          </Button>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-foreground/20 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-30 bg-card/90 backdrop-blur-md border-b border-border h-16 flex items-center px-4 lg:px-8">
          <button className="lg:hidden mr-3" onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6 text-foreground" />
          </button>
          <h2 className="font-heading font-semibold text-foreground">Admin Dashboard</h2>
          <div className="ml-auto flex items-center gap-3">
            <div className="w-9 h-9 gradient-gold rounded-full flex items-center justify-center text-gold-foreground text-sm font-bold">
              AD
            </div>
          </div>
        </header>
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
