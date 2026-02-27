import { QRCodeSVG } from "qrcode.react";
import { CertificateRecord, certTypeLabels, getVerificationUrl } from "@/lib/certificateData";

interface Props {
  cert: CertificateRecord;
  id?: string;
}

const CertificateDocument = ({ cert, id }: Props) => {
  const verifyUrl = getVerificationUrl(cert.certNumber);

  return (
    <div
      id={id}
      className="bg-white text-gray-900 w-[794px] min-h-[1123px] mx-auto border-[3px] border-primary/60 relative overflow-hidden"
      style={{ fontFamily: "'Inter', 'Times New Roman', serif" }}
    >
      {/* Decorative border */}
      <div className="absolute inset-3 border-2 border-primary/30 pointer-events-none" />
      <div className="absolute inset-5 border border-primary/15 pointer-events-none" />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
        <span className="text-[120px] font-bold tracking-widest rotate-[-30deg] text-primary">OGUN STATE</span>
      </div>

      <div className="relative z-10 p-12 flex flex-col min-h-[1100px]">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
            <span className="text-3xl">🏛️</span>
          </div>
          <h2 className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-1">Federal Republic of Nigeria</h2>
          <h1 className="text-xl font-bold tracking-[0.15em] uppercase text-primary">Ogun State Government</h1>
          <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-1">
            Local Government Management Authority Service
          </p>
          <div className="w-32 h-[2px] bg-primary/40 mx-auto mt-4" />
        </div>

        {/* Certificate Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary tracking-wide">{certTypeLabels[cert.type]}</h2>
          <p className="text-xs text-gray-400 mt-2">Certificate No: <span className="font-semibold text-gray-600">{cert.certNumber}</span></p>
        </div>

        {/* Body */}
        <div className="flex-1">
          <p className="text-center text-sm text-gray-600 mb-8 italic">
            This is to certify that the following information has been duly registered
            {cert.type === "birth" && " in the Birth Registry"}
            {cert.type === "death" && " in the Death Registry"}
            {cert.type === "marriage" && " in the Marriage Registry"}
            {cert.type === "origin" && " for State of Origin verification"}
            {" "}of Ogun State, Nigeria.
          </p>

          <div className="max-w-lg mx-auto space-y-4 text-sm">
            {cert.type === "birth" && (
              <>
                <CertField label="Full Name" value={cert.fullName} />
                <CertField label="Gender" value={cert.gender} />
                <CertField label="Date of Birth" value={cert.dateOfBirth} />
                <CertField label="Place of Birth" value={cert.placeOfBirth} />
                <CertField label="Father's Name" value={cert.fatherName} />
                <CertField label="Mother's Name" value={cert.motherName} />
                <CertField label="Local Government Area" value={cert.lga} />
              </>
            )}
            {cert.type === "death" && (
              <>
                <CertField label="Full Name of Deceased" value={cert.fullName} />
                <CertField label="Date of Death" value={cert.dateOfDeath} />
                <CertField label="Place of Death" value={cert.placeOfDeath} />
                <CertField label="Cause of Death" value={cert.causeOfDeath} />
                <CertField label="Local Government Area" value={cert.lga} />
              </>
            )}
            {cert.type === "marriage" && (
              <>
                <CertField label="Spouse 1" value={cert.spouse1} />
                <CertField label="Spouse 2" value={cert.spouse2} />
                <CertField label="Date of Marriage" value={cert.dateOfMarriage} />
                <CertField label="Place of Marriage" value={cert.placeOfMarriage} />
                <CertField label="Local Government Area" value={cert.lga} />
              </>
            )}
            {cert.type === "origin" && (
              <>
                <CertField label="Full Name" value={cert.fullName} />
                <CertField label="Town of Origin" value={cert.townOfOrigin} />
                <CertField label="Local Government Area" value={cert.lga} />
                <CertField label="State" value="Ogun State" />
              </>
            )}
            <CertField label="Date of Issue" value={cert.issuedDate} />
          </div>
        </div>

        {/* Footer: QR + Signature */}
        <div className="mt-12 flex items-end justify-between">
          <div className="text-center">
            <QRCodeSVG value={verifyUrl} size={90} level="H" />
            <p className="text-[9px] text-gray-400 mt-1 max-w-[100px]">Scan to verify</p>
          </div>

          <div className="text-center">
            <div className="w-40 border-b-2 border-gray-400 mb-1" />
            <p className="text-xs font-semibold text-gray-600">Authorized Officer</p>
            <p className="text-[10px] text-gray-400">LOGMAS, Ogun State</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center opacity-40">
              <span className="text-[10px] text-primary font-bold">OFFICIAL SEAL</span>
            </div>
          </div>
        </div>

        <p className="text-[8px] text-gray-300 text-center mt-6">
          Verify this certificate at: {verifyUrl}
        </p>
      </div>
    </div>
  );
};

const CertField = ({ label, value }: { label: string; value?: string }) => (
  <div className="flex justify-between border-b border-gray-100 pb-2">
    <span className="text-gray-500">{label}:</span>
    <span className="font-semibold text-gray-800">{value || "—"}</span>
  </div>
);

export default CertificateDocument;
