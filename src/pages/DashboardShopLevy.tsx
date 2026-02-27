import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, CheckCircle, AlertCircle, CreditCard } from "lucide-react";

const payments = [
  { id: "SHP-001", period: "January 2026", amount: "₦15,000", status: "Paid", date: "Jan 5, 2026" },
  { id: "SHP-002", period: "February 2026", amount: "₦15,000", status: "Paid", date: "Feb 3, 2026" },
  { id: "SHP-003", period: "March 2026", amount: "₦15,000", status: "Due", date: "Mar 1, 2026" },
];

const statusColor: Record<string, string> = {
  Paid: "bg-secondary/10 text-secondary",
  Due: "bg-destructive/10 text-destructive",
};

const DashboardShopLevy = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Shop Levy</h1>
          <p className="text-muted-foreground">Manage and pay your shop levy dues.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card><CardContent className="pt-6 text-center"><Store className="w-8 h-8 text-primary mx-auto mb-2" /><p className="text-lg font-bold font-heading text-foreground">Adebayo's Store</p><p className="text-sm text-muted-foreground">Shop Name</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">₦30,000</p><p className="text-sm text-muted-foreground">Total Paid</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><AlertCircle className="w-8 h-8 text-destructive mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">₦15,000</p><p className="text-sm text-muted-foreground">Amount Due</p></CardContent></Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="font-heading text-lg">Pay Current Levy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">March 2026 Levy</p>
                <p className="text-2xl font-bold font-heading text-foreground">₦15,000</p>
              </div>
              <Button className="gap-2"><CreditCard className="w-4 h-4" /> Pay Now</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="font-heading text-lg">Payment History</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {payments.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div><p className="text-sm font-medium text-foreground">{p.period}</p><p className="text-xs text-muted-foreground">{p.id} • {p.amount}</p></div>
                  <div className="text-right">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[p.status]}`}>{p.status}</span>
                    <p className="text-xs text-muted-foreground mt-1">{p.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardShopLevy;
