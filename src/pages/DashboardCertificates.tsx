import { FileText, CheckCircle, Clock, ArrowRight, Award, Download, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { approvedCertificates, pendingCertificates, certTypeLabels } from "@/lib/certificateData";

const certificateTypes = [
  { id: "birth", title: "Birth Certificate", desc: "Register a new birth and obtain an official birth certificate.", icon: "👶", path: "/dashboard/certificates/birth" },
  { id: "death", title: "Death Certificate", desc: "Register a death and obtain an official death certificate.", icon: "📜", path: "/dashboard/certificates/death" },
  { id: "marriage", title: "Marriage Certificate", desc: "Register your marriage and receive an official certificate.", icon: "💍", path: "/dashboard/certificates/marriage" },
  { id: "origin", title: "State of Origin", desc: "Obtain your state of origin certificate for Ogun State.", icon: "🏛️", path: "/dashboard/certificates/origin" },
];

const statusColor: Record<string, string> = {
  Approved: "bg-secondary/10 text-secondary",
  Pending: "bg-accent/10 text-accent-foreground",
  "In Review": "bg-primary/10 text-primary",
  Rejected: "bg-destructive/10 text-destructive",
};

const allApps = [...approvedCertificates, ...pendingCertificates];

const DashboardCertificates = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Certificates</h1>
          <p className="text-muted-foreground">Apply for certificates, preview approved ones, or track applications.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card><CardContent className="pt-6 text-center"><Award className="w-8 h-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">{allApps.length}</p><p className="text-sm text-muted-foreground">Total Applications</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">{approvedCertificates.length}</p><p className="text-sm text-muted-foreground">Approved</p></CardContent></Card>
          <Card><CardContent className="pt-6 text-center"><Clock className="w-8 h-8 text-accent mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">{pendingCertificates.length}</p><p className="text-sm text-muted-foreground">Pending</p></CardContent></Card>
        </div>

        {/* Approved Certificates */}
        {approvedCertificates.length > 0 && (
          <Card>
            <CardHeader><CardTitle className="font-heading text-lg text-secondary">Approved Certificates</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {approvedCertificates.map((cert) => (
                <div key={cert.id} className="flex items-center justify-between p-4 rounded-lg border border-secondary/20 bg-secondary/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{certTypeLabels[cert.type]}</p>
                      <p className="text-xs text-muted-foreground">{cert.certNumber} · Issued {cert.issuedDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-1" asChild>
                      <Link to={`/dashboard/certificates/preview/${cert.id}`}><Eye className="w-3.5 h-3.5" /> Preview</Link>
                    </Button>
                    <Button size="sm" className="gap-1" asChild>
                      <Link to={`/dashboard/certificates/preview/${cert.id}`}><Download className="w-3.5 h-3.5" /> Download</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Apply */}
        <div>
          <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Apply for a Certificate</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificateTypes.map((cert) => (
              <Card key={cert.id} className="hover-lift cursor-pointer group">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.desc}</p>
                  <Button size="sm" variant="ghost" className="gap-1 text-primary p-0 h-auto" asChild>
                    <Link to={cert.path}>Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pending */}
        {pendingCertificates.length > 0 && (
          <Card>
            <CardHeader><CardTitle className="font-heading text-lg">Pending Applications</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {pendingCertificates.map((app) => (
                <div key={app.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{certTypeLabels[app.type]}</p>
                      <p className="text-xs text-muted-foreground">{app.certNumber}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusColor[app.status]}`}>{app.status}</span>
                    <p className="text-xs text-muted-foreground mt-1">{app.appliedDate}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardCertificates;
