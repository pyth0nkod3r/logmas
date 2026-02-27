export interface CertificateRecord {
  id: string;
  certNumber: string;
  type: "birth" | "death" | "marriage" | "origin";
  status: "Approved" | "Pending" | "In Review" | "Rejected";
  appliedDate: string;
  issuedDate?: string;
  fullName: string;
  gender?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  dateOfDeath?: string;
  placeOfDeath?: string;
  causeOfDeath?: string;
  dateOfMarriage?: string;
  placeOfMarriage?: string;
  spouse1?: string;
  spouse2?: string;
  fatherName?: string;
  motherName?: string;
  townOfOrigin?: string;
  lga: string;
}

export const certTypeLabels: Record<string, string> = {
  birth: "Birth Certificate",
  death: "Death Certificate",
  marriage: "Marriage Certificate",
  origin: "State of Origin Certificate",
};

export const approvedCertificates: CertificateRecord[] = [
  {
    id: "1",
    certNumber: "OG/BC/2026/000123",
    type: "birth",
    status: "Approved",
    appliedDate: "Feb 10, 2026",
    issuedDate: "Feb 15, 2026",
    fullName: "Adebayo Ogundimu",
    gender: "Male",
    dateOfBirth: "March 15, 1995",
    placeOfBirth: "General Hospital, Abeokuta",
    fatherName: "Chief Adeniyi Ogundimu",
    motherName: "Mrs. Folake Ogundimu",
    lga: "Abeokuta South",
  },
  {
    id: "2",
    certNumber: "OG/MC/2026/000245",
    type: "marriage",
    status: "Approved",
    appliedDate: "Jan 28, 2026",
    issuedDate: "Feb 5, 2026",
    fullName: "Adebayo & Aisha Ogundimu",
    spouse1: "Adebayo Ogundimu",
    spouse2: "Aisha Balogun",
    dateOfMarriage: "December 20, 2025",
    placeOfMarriage: "Ogun State Registry, Abeokuta",
    lga: "Abeokuta South",
  },
];

export const pendingCertificates: CertificateRecord[] = [
  {
    id: "3",
    certNumber: "CERT-003",
    type: "origin",
    status: "In Review",
    appliedDate: "Feb 24, 2026",
    fullName: "Adebayo Ogundimu",
    townOfOrigin: "Ijebu-Ode",
    lga: "Ijebu Ode",
  },
  {
    id: "4",
    certNumber: "CERT-002",
    type: "death",
    status: "Pending",
    appliedDate: "Feb 22, 2026",
    fullName: "Late Chief Adekunle Ogundimu",
    dateOfDeath: "January 10, 2026",
    placeOfDeath: "Federal Medical Centre, Abeokuta",
    causeOfDeath: "Natural Causes",
    lga: "Abeokuta North",
  },
];

export function getVerificationUrl(certNumber: string): string {
  return `${window.location.origin}/verify/${encodeURIComponent(certNumber)}`;
}

export function getFileNameForCert(cert: CertificateRecord): string {
  const typeMap: Record<string, string> = {
    birth: "Birth_Certificate",
    death: "Death_Certificate",
    marriage: "Marriage_Certificate",
    origin: "State_of_Origin_Certificate",
  };
  return `${typeMap[cert.type]}_${cert.certNumber.replace(/\//g, "_")}.pdf`;
}
