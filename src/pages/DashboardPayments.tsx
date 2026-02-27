import { CreditCard, Download, CheckCircle, XCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const payments = [
  { id: "PAY-20260226-001", date: "Feb 26, 2026", service: "Birth Certificate", ref: "REF-BC-0012", amount: "₦5,000", status: "Successful" },
  { id: "PAY-20260225-002", date: "Feb 25, 2026", service: "Shop Levy", ref: "REF-SL-0045", amount: "₦15,000", status: "Successful" },
  { id: "PAY-20260224-003", date: "Feb 24, 2026", service: "Company Demand Notice", ref: "REF-DN-0078", amount: "₦45,000", status: "Successful" },
  { id: "PAY-20260222-004", date: "Feb 22, 2026", service: "Marriage Certificate", ref: "REF-MC-0033", amount: "₦10,000", status: "Pending" },
  { id: "PAY-20260220-005", date: "Feb 20, 2026", service: "State of Origin", ref: "REF-SO-0021", amount: "₦3,000", status: "Failed" },
  { id: "PAY-20260218-006", date: "Feb 18, 2026", service: "Shop Levy", ref: "REF-SL-0044", amount: "₦15,000", status: "Successful" },
];

const statusConfig: Record<string, { icon: React.ElementType; class: string }> = {
  Successful: { icon: CheckCircle, class: "text-secondary bg-secondary/10" },
  Pending: { icon: Clock, class: "text-accent-foreground bg-accent/10" },
  Failed: { icon: XCircle, class: "text-destructive bg-destructive/10" },
};

const DashboardPayments = () => {
  const { toast } = useToast();

  const handleDownload = (ref: string) => {
    toast({ title: "Receipt Downloaded", description: `Receipt for ${ref} has been downloaded.` });
  };

  const totalPaid = payments.filter((p) => p.status === "Successful").reduce((s, p) => s + parseInt(p.amount.replace(/[₦,]/g, "")), 0);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Payment History</h1>
          <p className="text-muted-foreground">View and manage all your payment transactions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card><CardContent className="pt-6 text-center"><CreditCard className="w-8 h-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">{payments.length}</p><p className="text-sm text-muted-foreground">Total Transactions</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">₦{totalPaid.toLocaleString()}</p><p className="text-sm text-muted-foreground">Total Paid</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><Clock className="w-8 h-8 text-accent mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">{payments.filter((p) => p.status === "Pending").length}</p><p className="text-sm text-muted-foreground">Pending</p></CardContent></Card>
        </div>

        <Card>
          <CardHeader><CardTitle className="font-heading text-lg">All Transactions</CardTitle></CardHeader>
          <CardContent>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left">
                    <th className="pb-3 font-medium text-muted-foreground">Date</th>
                    <th className="pb-3 font-medium text-muted-foreground">Service</th>
                    <th className="pb-3 font-medium text-muted-foreground">Reference</th>
                    <th className="pb-3 font-medium text-muted-foreground">Amount</th>
                    <th className="pb-3 font-medium text-muted-foreground">Status</th>
                    <th className="pb-3 font-medium text-muted-foreground">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {payments.map((p) => {
                    const sc = statusConfig[p.status];
                    const Icon = sc.icon;
                    return (
                      <tr key={p.id}>
                        <td className="py-3 text-foreground">{p.date}</td>
                        <td className="py-3 text-foreground">{p.service}</td>
                        <td className="py-3 text-muted-foreground font-mono text-xs">{p.ref}</td>
                        <td className="py-3 font-semibold text-foreground">{p.amount}</td>
                        <td className="py-3"><span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${sc.class}`}><Icon className="w-3 h-3" />{p.status}</span></td>
                        <td className="py-3">{p.status === "Successful" && <Button size="sm" variant="ghost" className="gap-1 text-primary h-auto p-1" onClick={() => handleDownload(p.ref)}><Download className="w-4 h-4" /> Receipt</Button>}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {payments.map((p) => {
                const sc = statusConfig[p.status];
                const Icon = sc.icon;
                return (
                  <div key={p.id} className="p-3 rounded-lg bg-muted/50 space-y-2">
                    <div className="flex justify-between items-start">
                      <div><p className="text-sm font-medium text-foreground">{p.service}</p><p className="text-xs text-muted-foreground">{p.date}</p></div>
                      <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${sc.class}`}><Icon className="w-3 h-3" />{p.status}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="font-mono text-xs text-muted-foreground">{p.ref}</p>
                      <p className="font-semibold text-foreground">{p.amount}</p>
                    </div>
                    {p.status === "Successful" && <Button size="sm" variant="ghost" className="gap-1 text-primary h-auto p-0" onClick={() => handleDownload(p.ref)}><Download className="w-4 h-4" /> Download Receipt</Button>}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPayments;
