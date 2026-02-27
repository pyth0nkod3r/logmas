import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, AlertCircle, CreditCard, Download } from "lucide-react";

const notices = [
  { id: "DN-001", company: "Ogundimu & Sons Ltd", amount: "₦50,000", status: "Paid", date: "Feb 10, 2026" },
  { id: "DN-002", company: "Ade's Trading Enterprise", amount: "₦35,000", status: "Pending", date: "Feb 20, 2026" },
];

const statusColor: Record<string, string> = {
  Paid: "bg-secondary/10 text-secondary",
  Pending: "bg-destructive/10 text-destructive",
};

const DashboardDemandNotice = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Company Demand Notice</h1>
          <p className="text-muted-foreground">View and respond to demand notices from the local government.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card><CardContent className="pt-6 text-center"><FileText className="w-8 h-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">2</p><p className="text-sm text-muted-foreground">Total Notices</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">₦50,000</p><p className="text-sm text-muted-foreground">Total Paid</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><AlertCircle className="w-8 h-8 text-destructive mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">₦35,000</p><p className="text-sm text-muted-foreground">Outstanding</p></CardContent></Card>
        </div>

        <Card>
          <CardHeader><CardTitle className="font-heading text-lg">Demand Notices</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notices.map((n) => (
                <div key={n.id} className="p-4 rounded-lg border border-border">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-medium text-foreground">{n.company}</p>
                      <p className="text-xs text-muted-foreground">{n.id} • Issued: {n.date}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[n.status]}`}>{n.status}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold font-heading text-foreground">{n.amount}</p>
                    <div className="flex gap-2">
                      {n.status === "Pending" && (
                        <Button size="sm" className="gap-1"><CreditCard className="w-4 h-4" /> Pay Now</Button>
                      )}
                      <Button size="sm" variant="outline" className="gap-1"><Download className="w-4 h-4" /> Receipt</Button>
                    </div>
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

export default DashboardDemandNotice;
