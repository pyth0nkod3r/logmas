import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Check, ChevronRight, ChevronLeft, Upload, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";

const certTitles: Record<string, string> = {
  birth: "Birth Certificate",
  death: "Death Certificate",
  marriage: "Marriage Certificate",
  origin: "State of Origin Certificate",
};

const certFees: Record<string, string> = {
  birth: "₦5,000",
  death: "₦5,000",
  marriage: "₦10,000",
  origin: "₦3,000",
};

const steps = ["Personal Details", "Certificate Details", "Upload Documents", "Review & Submit", "Payment", "Confirmation"];

const lgas = ["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ewekoro", "Ifo", "Ijebu East", "Ijebu North", "Ijebu Ode", "Ikenne", "Imeko Afon", "Ipokia", "Obafemi Owode", "Odeda", "Odogbolu", "Ogun Waterside", "Remo North", "Sagamu", "Yewa North", "Yewa South"];

const CertificateApply = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const title = certTitles[type || ""] || "Certificate";
  const fee = certFees[type || ""] || "₦5,000";

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Apply for {title}</h1>
          <p className="text-muted-foreground">Complete the form below to submit your application.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-1 overflow-x-auto pb-2">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center flex-1 min-w-0">
              <div className={`flex items-center gap-1.5 ${i <= currentStep ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                  i < currentStep ? "gradient-primary text-primary-foreground" : i === currentStep ? "border-2 border-primary text-primary" : "border-2 border-border text-muted-foreground"
                }`}>
                  {i < currentStep ? <Check className="w-3.5 h-3.5" /> : i + 1}
                </div>
                <span className="hidden md:block text-xs font-medium truncate">{step}</span>
              </div>
              {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-1.5 ${i < currentStep ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle className="font-heading">{steps[currentStep]}</CardTitle></CardHeader>
          <CardContent>
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>First Name</Label><Input placeholder="Adebayo" className="h-11" /></div>
                  <div className="space-y-2"><Label>Last Name</Label><Input placeholder="Ogundimu" className="h-11" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Date of Birth</Label><Input type="date" className="h-11" /></div>
                  <div className="space-y-2"><Label>Gender</Label>
                    <Select><SelectTrigger className="h-11"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent><SelectItem value="male">Male</SelectItem><SelectItem value="female">Female</SelectItem></SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2"><Label>Phone Number</Label><Input type="tel" placeholder="+234..." className="h-11" /></div>
                <div className="space-y-2"><Label>Address</Label><Textarea placeholder="Enter your address" /></div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2"><Label>Certificate Type</Label>
                  <Input value={title} readOnly className="h-11 bg-muted/50" />
                </div>
                <div className="space-y-2"><Label>Local Government Area</Label>
                  <Select><SelectTrigger className="h-11"><SelectValue placeholder="Select LGA" /></SelectTrigger>
                    <SelectContent>
                      {lgas.map((lga) => (
                        <SelectItem key={lga} value={lga.toLowerCase().replace(/\s/g, "-")}>{lga}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {type === "birth" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2"><Label>Child's Full Name</Label><Input placeholder="Full name of child" className="h-11" /></div>
                      <div className="space-y-2"><Label>Date of Birth</Label><Input type="date" className="h-11" /></div>
                    </div>
                    <div className="space-y-2"><Label>Place of Birth</Label><Input placeholder="Hospital or location" className="h-11" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2"><Label>Father's Name</Label><Input placeholder="Full name" className="h-11" /></div>
                      <div className="space-y-2"><Label>Mother's Name</Label><Input placeholder="Full name" className="h-11" /></div>
                    </div>
                  </>
                )}
                {type === "death" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2"><Label>Deceased Full Name</Label><Input placeholder="Full name" className="h-11" /></div>
                      <div className="space-y-2"><Label>Date of Death</Label><Input type="date" className="h-11" /></div>
                    </div>
                    <div className="space-y-2"><Label>Cause of Death</Label><Input placeholder="As stated by physician" className="h-11" /></div>
                    <div className="space-y-2"><Label>Place of Death</Label><Input placeholder="Hospital or location" className="h-11" /></div>
                  </>
                )}
                {type === "marriage" && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2"><Label>Spouse 1 Full Name</Label><Input placeholder="Full name" className="h-11" /></div>
                      <div className="space-y-2"><Label>Spouse 2 Full Name</Label><Input placeholder="Full name" className="h-11" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2"><Label>Date of Marriage</Label><Input type="date" className="h-11" /></div>
                      <div className="space-y-2"><Label>Place of Marriage</Label><Input placeholder="Venue or location" className="h-11" /></div>
                    </div>
                    <div className="space-y-2"><Label>Witnesses (comma-separated)</Label><Input placeholder="Name 1, Name 2" className="h-11" /></div>
                  </>
                )}
                {type === "origin" && (
                  <>
                    <div className="space-y-2"><Label>Town of Origin</Label><Input placeholder="Your town" className="h-11" /></div>
                    <div className="space-y-2"><Label>Father's Place of Origin</Label><Input placeholder="Town/Village" className="h-11" /></div>
                    <div className="space-y-2"><Label>Purpose</Label><Textarea placeholder="Why do you need this certificate?" /></div>
                  </>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Upload supporting documents for your application. Accepted formats: PDF, JPG, PNG (max 5MB each).</p>
                <div className="space-y-4">
                  {[
                    type === "birth" ? "Birth notification from hospital" : type === "death" ? "Death notification" : type === "marriage" ? "Court affidavit" : "Sworn affidavit",
                    "Valid ID (NIN, Voter's Card, Passport)",
                    "Passport photograph",
                  ].map((doc) => (
                    <div key={doc} className="border-2 border-dashed border-border rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Upload className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{doc}</p>
                          <p className="text-xs text-muted-foreground">PDF, JPG, PNG — Max 5MB</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Choose File</Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <h4 className="font-heading font-semibold text-foreground">Application Summary</h4>
                  {[
                    ["Certificate Type", title],
                    ["Name", "Adebayo Ogundimu"],
                    ["LGA", "Abeokuta South"],
                    ["Documents", "3 files uploaded"],
                    ["Processing Fee", fee],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">Please review your application details before proceeding to payment.</p>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4 text-center py-8">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-foreground">₦</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Payment Required</h3>
                <p className="text-3xl font-bold text-primary">{fee}</p>
                <p className="text-sm text-muted-foreground">Processing fee for {title}</p>
                <Button size="lg" className="mt-4 px-12">Proceed to Pay</Button>
              </div>
            )}

            {currentStep === 5 && (
              <div className="text-center py-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Check className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Application Submitted!</h3>
                <p className="text-muted-foreground">Your application reference is <span className="font-bold text-primary">CERT-2026-{Math.floor(Math.random() * 9000 + 1000)}</span></p>
                <p className="text-sm text-muted-foreground">You will be notified once your certificate is ready for download.</p>
                <Button variant="outline" className="mt-2" onClick={() => navigate("/dashboard/certificates")}>
                  Back to Certificates
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {currentStep < 5 && (
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className="gap-1">
              <ChevronLeft className="w-4 h-4" /> Previous
            </Button>
            <Button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} className="gap-1">
              {currentStep === 4 ? "Submit" : "Next"} <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default CertificateApply;
