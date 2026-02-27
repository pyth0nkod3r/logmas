import { useState } from "react";
import { HelpCircle, Search, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  { category: "Certificates", question: "How do I apply for a Birth Certificate?", answer: "Navigate to the Certificates section in your dashboard, select 'Birth Certificate', fill in the required details, upload supporting documents, make the payment, and submit your application." },
  { category: "Certificates", question: "How long does certificate processing take?", answer: "Certificate applications are typically processed within 5-10 business days. You will receive notifications at each stage of the process." },
  { category: "Certificates", question: "What documents are required for a Marriage Certificate?", answer: "You will need: valid ID cards of both parties, passport photographs, sworn affidavit, birth certificates, and evidence of parental consent (if applicable)." },
  { category: "Certificates", question: "Can I track my certificate application?", answer: "Yes, you can track all your applications from the Certificates section of your dashboard. Each application shows its current status: Pending, In Review, Approved, or Rejected." },
  { category: "Payments", question: "What payment methods are accepted?", answer: "We accept bank transfers, debit/credit cards, and USSD payments through our secure payment gateway." },
  { category: "Payments", question: "My payment was deducted but not reflecting. What do I do?", answer: "Please wait for 30 minutes as payments may take time to process. If it still doesn't reflect, raise a support ticket under 'Payment Issue' category." },
  { category: "Payments", question: "Can I get a refund for a failed payment?", answer: "Yes, failed payments are automatically reversed within 24-48 hours. If you don't receive your refund, please contact support." },
  { category: "Shop Levy", question: "How do I pay my Shop Levy?", answer: "Go to the Shop Levy section in your dashboard, view your outstanding balance, and click 'Pay Now' to make your payment." },
  { category: "Shop Levy", question: "What happens if I miss my Shop Levy deadline?", answer: "Late payments may attract a penalty. Please ensure you pay before the deadline shown on your dashboard." },
  { category: "Demand Notice", question: "What is a Company Demand Notice?", answer: "A Company Demand Notice is an official document issued to businesses operating within the Local Government Area, requiring payment of specified levies and taxes." },
  { category: "Demand Notice", question: "How do I respond to a Demand Notice?", answer: "Navigate to the Company Demand Notice section, review the notice details, and make the required payment before the deadline." },
  { category: "Account Issues", question: "How do I reset my password?", answer: "Click on 'Forgot Password' on the login page, enter your registered email address, and follow the instructions sent to your email." },
  { category: "Account Issues", question: "How do I update my profile information?", answer: "Go to Profile Settings in your dashboard where you can update your personal details, contact information, and address." },
];

const categories = ["All", "Certificates", "Payments", "Shop Levy", "Demand Notice", "Account Issues"];

const DashboardFAQ = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = faqs.filter((f) => {
    const matchesCategory = activeCategory === "All" || f.category === activeCategory;
    const matchesSearch = !search || f.question.toLowerCase().includes(search.toLowerCase()) || f.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-heading text-2xl font-bold text-foreground">Help Center</h1>
            <p className="text-muted-foreground">Find answers to common questions or raise a ticket.</p>
          </div>
          <Button className="gap-2" asChild>
            <Link to="/dashboard/tickets"><MessageSquare className="w-4 h-4" /> Raise Ticket</Link>
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input className="pl-10 h-12" placeholder="Search for answers..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map((c) => (
            <Button key={c} size="sm" variant={activeCategory === c ? "default" : "outline"} onClick={() => { setActiveCategory(c); setOpenIndex(null); }}>
              {c}
            </Button>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle className="font-heading text-lg flex items-center gap-2"><HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Questions</CardTitle></CardHeader>
          <CardContent className="space-y-0 p-0">
            {filtered.length === 0 && (
              <div className="p-8 text-center text-muted-foreground">
                <p>No results found. Try a different search or <Link to="/dashboard/tickets" className="text-primary underline">raise a ticket</Link>.</p>
              </div>
            )}
            {filtered.map((f, i) => (
              <div key={i} className="border-b border-border last:border-0">
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">{f.category}</span>
                    <span className="text-sm font-medium text-foreground">{f.question}</span>
                  </div>
                  {openIndex === i ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                </button>
                {openIndex === i && (
                  <div className="px-4 pb-4 pl-[calc(1rem+3.5rem)]">
                    <p className="text-sm text-muted-foreground">{f.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardFAQ;
