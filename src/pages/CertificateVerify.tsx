import { useParams, Link } from "react-router-dom";
import { ShieldCheck, ShieldX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { approvedCertificates, certTypeLabels } from "@/lib/certificateData";

const CertificateVerify = () => {
  const { certNumber } = useParams<{ certNumber: string }>();
  const decoded = decodeURIComponent(certNumber || "");
  const cert = approvedCertificates.find((c) => c.certNumber === decoded);
  const now = new Date().toLocaleString();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="pt-8 pb-6 text-center space-y-4">
          {cert ? (
            <>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-8 h-8 text-secondary" />
              </div>
              <h1 className="font-heading text-xl font-bold text-foreground">Certificate Verified</h1>
              <div className="text-left bg-muted/50 rounded-lg p-4 space-y-2 text-sm">
                {[
                  ["Certificate No.", cert.certNumber],
                  ["Type", certTypeLabels[cert.type]],
                  ["Full Name", cert.fullName],
                  ["Date Issued", cert.issuedDate],
                  ["Status", "✅ Valid"],
                  ["Verified At", now],
                ].map(([l, v]) => (
                  <div key={l} className="flex justify-between">
                    <span className="text-muted-foreground">{l}</span>
                    <span className="font-medium text-foreground">{v}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">This certificate was issued by LOGMAS, Ogun State Government.</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
                <ShieldX className="w-8 h-8 text-destructive" />
              </div>
              <h1 className="font-heading text-xl font-bold text-foreground">Invalid Certificate</h1>
              <p className="text-muted-foreground text-sm">
                The certificate number <span className="font-mono font-bold">{decoded}</span> could not be verified. It may be invalid or tampered with.
              </p>
              <p className="text-xs text-muted-foreground">Checked at: {now}</p>
            </>
          )}
          <Button variant="outline" asChild className="mt-2">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificateVerify;
