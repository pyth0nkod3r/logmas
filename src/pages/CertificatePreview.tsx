import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import CertificateDocument from "@/components/CertificateDocument";
import { approvedCertificates, getFileNameForCert } from "@/lib/certificateData";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

const CertificatePreview = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [downloading, setDownloading] = useState(false);
  const cert = approvedCertificates.find((c) => c.id === id);

  if (!cert) {
    return (
      <DashboardLayout>
        <div className="text-center py-20">
          <h2 className="text-xl font-heading font-bold text-foreground">Certificate Not Found</h2>
          <Button variant="outline" className="mt-4" onClick={() => navigate("/dashboard/certificates")}>
            Back to Certificates
          </Button>
        </div>
      </DashboardLayout>
    );
  }

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const el = document.getElementById("cert-doc");
      if (!el) return;
      const canvas = await html2canvas(el, { scale: 2, useCORS: true, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const w = pdf.internal.pageSize.getWidth();
      const h = (canvas.height * w) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, w, h);
      pdf.save(getFileNameForCert(cert));
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => window.print();

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <Button variant="ghost" className="gap-1" onClick={() => navigate("/dashboard/certificates")}>
            <ArrowLeft className="w-4 h-4" /> Back
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-1" onClick={handlePrint}>
              <Printer className="w-4 h-4" /> Print
            </Button>
            <Button className="gap-1" onClick={handleDownload} disabled={downloading}>
              <Download className="w-4 h-4" /> {downloading ? "Generating…" : "Download PDF"}
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto pb-8">
          <CertificateDocument cert={cert} id="cert-doc" />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CertificatePreview;
