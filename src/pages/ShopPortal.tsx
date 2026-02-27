import { Store, CreditCard, Receipt, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const payments = [
  { id: "PAY-001", amount: "₦25,000", date: "Jan 2026", status: "Paid" },
  { id: "PAY-002", amount: "₦25,000", date: "Feb 2026", status: "Pending" },
];

const ShopPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Shop Owner Portal</h1>
          <p className="text-muted-foreground">Manage your shop levy payments</p>
        </div>

        <Card className="border-2 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center">
                  <Store className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">Adebayo General Store</h3>
                  <p className="text-sm text-muted-foreground">Shop ID: SHP-0042 • Abeokuta South LGA</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-secondary">Active</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">Monthly Levy</p>
              <p className="text-2xl font-bold font-heading text-foreground mt-1">₦25,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">Amount Due</p>
              <p className="text-2xl font-bold font-heading text-destructive mt-1">₦25,000</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground">Payment Code</p>
              <p className="text-2xl font-bold font-heading text-primary mt-1">OG-2026-042</p>
            </CardContent>
          </Card>
        </div>

        <Button size="lg" className="w-full sm:w-auto gap-2">
          <CreditCard className="w-5 h-5" /> Pay ₦25,000 Now
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-lg">Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {payments.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Receipt className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.amount}</p>
                      <p className="text-xs text-muted-foreground">{p.id} • {p.date}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${p.status === "Paid" ? "bg-secondary/10 text-secondary" : "bg-accent/10 text-accent-foreground"}`}>
                    {p.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPortal;
