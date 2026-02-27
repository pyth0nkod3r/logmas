import { Building2, CreditCard, Receipt, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BusinessPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Business Demand Notice Portal</h1>
          <p className="text-muted-foreground">View and pay your business demand notices</p>
        </div>

        <Card className="border-2 border-accent/30">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 gradient-gold rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-gold-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground">Ogun Farms Limited</h3>
                <p className="text-sm text-muted-foreground">BIZ-0089 • Sagamu LGA • Agriculture</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-lg">Current Demand Notice</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              {[
                ["Business Name", "Ogun Farms Limited"],
                ["Assessment Year", "2026"],
                ["Category", "Medium Enterprise"],
                ["Amount Due", "₦150,000"],
                ["Due Date", "March 31, 2026"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
            <Button size="lg" className="w-full sm:w-auto gap-2 mt-6">
              <CreditCard className="w-5 h-5" /> Pay ₦150,000
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-lg">Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { id: "DN-2025", amount: "₦120,000", date: "Dec 2025", status: "Paid" },
                { id: "DN-2024", amount: "₦100,000", date: "Dec 2024", status: "Paid" },
              ].map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <Receipt className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{p.amount}</p>
                      <p className="text-xs text-muted-foreground">{p.id} • {p.date}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-secondary/10 text-secondary">{p.status}</span>
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

export default BusinessPortal;
