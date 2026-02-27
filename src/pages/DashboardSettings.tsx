import { useState } from "react";
import { User, Mail, Phone, MapPin, Save } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

const DashboardSettings = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstName: "Adebayo",
    lastName: "Ogunlesi",
    email: "adebayo@email.com",
    phone: "+234 801 234 5678",
    address: "12 Abiola Way, Abeokuta, Ogun State",
    lga: "Abeokuta South",
  });

  const handleChange = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSave = () => {
    toast({ title: "Profile Updated", description: "Your profile settings have been saved successfully." });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your personal information.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1">
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl font-bold mb-4">
                {form.firstName[0]}{form.lastName[0]}
              </div>
              <h3 className="font-heading font-semibold text-foreground">{form.firstName} {form.lastName}</h3>
              <p className="text-sm text-muted-foreground">{form.email}</p>
              <p className="text-xs text-muted-foreground mt-1">{form.lga}, Ogun State</p>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader><CardTitle className="font-heading text-lg">Personal Information</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input className="pl-10" value={form.firstName} onChange={(e) => handleChange("firstName", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input className="pl-10" value={form.lastName} onChange={(e) => handleChange("lastName", e.target.value)} />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input className="pl-10" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input className="pl-10" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input className="pl-10" value={form.address} onChange={(e) => handleChange("address", e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Local Government Area</label>
                <Input value={form.lga} onChange={(e) => handleChange("lga", e.target.value)} />
              </div>
              <Button onClick={handleSave} className="gap-2"><Save className="w-4 h-4" /> Save Changes</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardSettings;
