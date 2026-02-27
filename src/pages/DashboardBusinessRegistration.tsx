import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, CheckCircle, Clock } from "lucide-react";

const applications = [
  { id: "BIZ-001", name: "Ade's Trading Enterprise", status: "Approved", date: "Feb 20, 2026" },
  { id: "BIZ-002", name: "Ogundimu & Sons Ltd", status: "In Review", date: "Feb 22, 2026" },
];

const statusColor: Record<string, string> = {
  Approved: "bg-secondary/10 text-secondary",
  "In Review": "bg-primary/10 text-primary",
  Pending: "bg-accent/10 text-accent-foreground",
};

const DashboardBusinessRegistration = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Business Registration</h1>
          <p className="text-muted-foreground">Register a new business or manage existing registrations.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card><CardContent className="pt-6 text-center"><Building2 className="w-8 h-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">2</p><p className="text-sm text-muted-foreground">Total Registrations</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">1</p><p className="text-sm text-muted-foreground">Approved</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><Clock className="w-8 h-8 text-accent mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">1</p><p className="text-sm text-muted-foreground">Pending</p></CardContent></Card>
        </div>

        <Card>
          <CardHeader><CardTitle className="font-heading text-lg">Register New Business</CardTitle></CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2"><Label>Business Name</Label><Input placeholder="Enter business name" className="h-11" maxLength={200} /></div>
              <div className="space-y-2"><Label>Business Type</Label><Input placeholder="e.g. Trading, Services" className="h-11" maxLength={100} /></div>
              <div className="space-y-2"><Label>Owner Name</Label><Input placeholder="Full name" className="h-11" maxLength={100} /></div>
              <div className="space-y-2"><Label>Phone Number</Label><Input type="tel" placeholder="+234..." className="h-11" maxLength={20} /></div>
              <div className="space-y-2 sm:col-span-2"><Label>Business Address</Label><Input placeholder="Full address" className="h-11" maxLength={300} /></div>
              <div className="sm:col-span-2"><Button type="submit" className="gap-2"><Building2 className="w-4 h-4" /> Submit Registration</Button></div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="font-heading text-lg">My Registrations</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {applications.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div><p className="text-sm font-medium text-foreground">{app.name}</p><p className="text-xs text-muted-foreground">{app.id}</p></div>
                  <div className="text-right">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[app.status]}`}>{app.status}</span>
                    <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
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

export default DashboardBusinessRegistration;
