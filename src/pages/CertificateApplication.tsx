import { useState } from "react";
import { Check, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardLayout from "@/components/DashboardLayout";

const steps = ["Personal Details", "Certificate Details", "Preview", "Payment", "Complete"];

const CertificateApplication = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Apply for Certificate</h1>
          <p className="text-muted-foreground">Complete the form below to submit your application.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-1">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center flex-1">
              <div className={`flex items-center gap-2 ${i <= currentStep ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  i < currentStep ? "gradient-primary text-primary-foreground" : i === currentStep ? "border-2 border-primary text-primary" : "border-2 border-border text-muted-foreground"
                }`}>
                  {i < currentStep ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span className="hidden sm:block text-xs font-medium">{step}</span>
              </div>
              {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < currentStep ? "bg-primary" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading">{steps[currentStep]}</CardTitle>
          </CardHeader>
          <CardContent>
            {currentStep === 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>First Name</Label><Input placeholder="Adebayo" className="h-11" /></div>
                  <div className="space-y-2"><Label>Last Name</Label><Input placeholder="Ogundimu" className="h-11" /></div>
                </div>
                <div className="space-y-2"><Label>Date of Birth</Label><Input type="date" className="h-11" /></div>
                <div className="space-y-2"><Label>Gender</Label>
                  <Select><SelectTrigger className="h-11"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent><SelectItem value="male">Male</SelectItem><SelectItem value="female">Female</SelectItem></SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Address</Label><Textarea placeholder="Enter your address" /></div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2"><Label>Certificate Type</Label>
                  <Select><SelectTrigger className="h-11"><SelectValue placeholder="Select certificate" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="birth">Birth Certificate</SelectItem>
                      <SelectItem value="death">Death Certificate</SelectItem>
                      <SelectItem value="marriage">Marriage Certificate</SelectItem>
                      <SelectItem value="origin">State of Origin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Local Government Area</Label>
                  <Select><SelectTrigger className="h-11"><SelectValue placeholder="Select LGA" /></SelectTrigger>
                    <SelectContent>
                      {["Abeokuta North", "Abeokuta South", "Ado-Odo/Ota", "Ijebu Ode", "Sagamu"].map((lga) => (
                        <SelectItem key={lga} value={lga.toLowerCase().replace(/\s/g, "-")}>{lga}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2"><Label>Purpose</Label><Textarea placeholder="Why do you need this certificate?" /></div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                  <h4 className="font-heading font-semibold text-foreground">Application Summary</h4>
                  {[
                    ["Name", "Adebayo Ogundimu"],
                    ["Certificate Type", "Birth Certificate"],
                    ["LGA", "Abeokuta South"],
                    ["Processing Fee", "₦5,000"],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {currentStep === 3 && (
              <div className="space-y-4 text-center py-8">
                <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gold-foreground">₦</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Payment Required</h3>
                <p className="text-3xl font-bold text-primary">₦5,000</p>
                <p className="text-sm text-muted-foreground">Processing fee for Birth Certificate</p>
                <Button size="lg" className="mt-4 px-12">Proceed to Pay</Button>
              </div>
            )}
            {currentStep === 4 && (
              <div className="text-center py-8 space-y-4">
                <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Check className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">Application Submitted!</h3>
                <p className="text-muted-foreground">Your application reference is <span className="font-bold text-primary">APP-2026-0042</span></p>
                <p className="text-sm text-muted-foreground">You will be notified once your certificate is ready.</p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} className="gap-1">
            <ChevronLeft className="w-4 h-4" /> Previous
          </Button>
          <Button onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))} disabled={currentStep === steps.length - 1} className="gap-1">
            {currentStep === steps.length - 2 ? "Submit" : "Next"} <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CertificateApplication;
