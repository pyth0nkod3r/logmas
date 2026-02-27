import { useState } from "react";
import { FileText, Search, Eye, Check, X, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import AdminLayout from "@/components/AdminLayout";

const applications = [
  { id: "APP-001", name: "Adebayo Ogundimu", type: "Birth Certificate", lga: "Abeokuta South", date: "Feb 20, 2026", status: "Pending" },
  { id: "APP-002", name: "Funke Adeyemi", type: "Marriage Certificate", lga: "Ijebu Ode", date: "Feb 19, 2026", status: "Pending" },
  { id: "APP-003", name: "Chidi Okafor", type: "State of Origin", lga: "Sagamu", date: "Feb 18, 2026", status: "Approved" },
  { id: "APP-004", name: "Amina Bello", type: "Death Certificate", lga: "Ado-Odo/Ota", date: "Feb 17, 2026", status: "Rejected" },
  { id: "APP-005", name: "Tunde Bakare", type: "Birth Certificate", lga: "Abeokuta North", date: "Feb 16, 2026", status: "Approved" },
];

const statusStyle: Record<string, string> = {
  Pending: "bg-accent/10 text-accent-foreground",
  Approved: "bg-secondary/10 text-secondary",
  Rejected: "bg-destructive/10 text-destructive",
};

const AdminApplications = () => {
  const [search, setSearch] = useState("");

  const filtered = applications.filter(
    (a) => a.name.toLowerCase().includes(search.toLowerCase()) || a.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Application Management</h1>
          <p className="text-muted-foreground">Review and manage citizen applications</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by name or ID..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 h-11" />
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">ID</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Applicant</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden sm:table-cell">Type</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden md:table-cell">LGA</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden md:table-cell">Date</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Status</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((app) => (
                    <tr key={app.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-primary">{app.id}</td>
                      <td className="px-4 py-3 text-sm text-foreground">{app.name}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground hidden sm:table-cell">{app.type}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{app.lga}</td>
                      <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{app.date}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyle[app.status]}`}>{app.status}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm"><Eye className="w-4 h-4" /></Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle className="font-heading">Application {app.id}</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                                  {[
                                    ["Applicant", app.name],
                                    ["Certificate Type", app.type],
                                    ["LGA", app.lga],
                                    ["Submitted", app.date],
                                    ["Status", app.status],
                                  ].map(([l, v]) => (
                                    <div key={l} className="flex justify-between text-sm">
                                      <span className="text-muted-foreground">{l}</span>
                                      <span className="font-medium text-foreground">{v}</span>
                                    </div>
                                  ))}
                                </div>
                                <div className="space-y-2">
                                  <label className="text-sm font-medium text-foreground">Admin Comment</label>
                                  <Textarea placeholder="Add a comment..." />
                                </div>
                                <div className="flex gap-2">
                                  <Button className="flex-1 gap-1"><Check className="w-4 h-4" /> Approve</Button>
                                  <Button variant="destructive" className="flex-1 gap-1"><X className="w-4 h-4" /> Reject</Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminApplications;
