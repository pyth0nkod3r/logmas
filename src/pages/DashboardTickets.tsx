import { useState } from "react";
import { MessageSquare, Plus, Send, ArrowLeft, Clock, CheckCircle, AlertCircle, Paperclip } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import DashboardLayout from "@/components/DashboardLayout";
import { useToast } from "@/hooks/use-toast";

interface Message {
  sender: "user" | "admin";
  text: string;
  date: string;
}

interface Ticket {
  id: string;
  subject: string;
  category: string;
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  date: string;
  messages: Message[];
}

const initialTickets: Ticket[] = [
  {
    id: "TKT-001",
    subject: "Payment not reflecting",
    category: "Payment Issue",
    status: "In Progress",
    date: "Feb 24, 2026",
    messages: [
      { sender: "user", text: "I made a payment of ₦15,000 for Shop Levy but it's not reflecting on my dashboard.", date: "Feb 24, 2026 – 10:00 AM" },
      { sender: "admin", text: "Thank you for reaching out. We are currently verifying your payment with our payment provider. Please allow 24-48 hours.", date: "Feb 24, 2026 – 2:30 PM" },
    ],
  },
  {
    id: "TKT-002",
    subject: "Birth Certificate delayed",
    category: "Certificate Issue",
    status: "Open",
    date: "Feb 22, 2026",
    messages: [
      { sender: "user", text: "My Birth Certificate application was submitted two weeks ago but I haven't received any update.", date: "Feb 22, 2026 – 9:00 AM" },
    ],
  },
  {
    id: "TKT-003",
    subject: "How to update business details",
    category: "General Question",
    status: "Resolved",
    date: "Feb 18, 2026",
    messages: [
      { sender: "user", text: "How do I update my business details for the Demand Notice?", date: "Feb 18, 2026 – 11:00 AM" },
      { sender: "admin", text: "You can update your business details from the Company Demand Notice section in your dashboard. Click on 'Edit Business Info'.", date: "Feb 18, 2026 – 1:00 PM" },
      { sender: "user", text: "Thank you, I found it!", date: "Feb 18, 2026 – 3:00 PM" },
    ],
  },
];

const statusConfig: Record<string, { icon: React.ElementType; class: string }> = {
  Open: { icon: AlertCircle, class: "text-primary bg-primary/10" },
  "In Progress": { icon: Clock, class: "text-accent-foreground bg-accent/10" },
  Resolved: { icon: CheckCircle, class: "text-secondary bg-secondary/10" },
  Closed: { icon: CheckCircle, class: "text-muted-foreground bg-muted" },
};

const categories = ["Certificate Issue", "Payment Issue", "Shop Levy Inquiry", "Demand Notice Inquiry", "General Question"];

type View = "list" | "new" | "detail";

const DashboardTickets = () => {
  const [tickets, setTickets] = useState(initialTickets);
  const [view, setView] = useState<View>("list");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [newCategory, setNewCategory] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [replyText, setReplyText] = useState("");
  const { toast } = useToast();

  const selectedTicket = tickets.find((t) => t.id === selectedId);

  const handleSubmitTicket = () => {
    if (!newCategory || !newSubject || !newMessage) {
      toast({ title: "Please fill all fields", variant: "destructive" });
      return;
    }
    const id = `TKT-${String(tickets.length + 1).padStart(3, "0")}`;
    const ticket: Ticket = {
      id,
      subject: newSubject,
      category: newCategory,
      status: "Open",
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      messages: [{ sender: "user", text: newMessage, date: new Date().toLocaleString() }],
    };
    setTickets((prev) => [ticket, ...prev]);
    setNewCategory("");
    setNewSubject("");
    setNewMessage("");
    setView("list");
    toast({ title: "Ticket Submitted", description: `Your ticket ${id} has been created. We'll respond shortly.` });
  };

  const handleReply = () => {
    if (!replyText.trim() || !selectedId) return;
    setTickets((prev) =>
      prev.map((t) =>
        t.id === selectedId
          ? { ...t, messages: [...t.messages, { sender: "user" as const, text: replyText, date: new Date().toLocaleString() }] }
          : t
      )
    );
    setReplyText("");
    toast({ title: "Reply Sent" });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {view === "list" && (
          <>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div>
                <h1 className="font-heading text-2xl font-bold text-foreground">Support Tickets</h1>
                <p className="text-muted-foreground">Raise and track your support requests.</p>
              </div>
              <Button className="gap-2" onClick={() => setView("new")}><Plus className="w-4 h-4" /> Raise Ticket</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card><CardContent className="pt-6 text-center"><MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">{tickets.length}</p><p className="text-sm text-muted-foreground">Total Tickets</p></CardContent></Card>
              <Card><CardContent className="pt-6 text-center"><AlertCircle className="w-8 h-8 text-accent mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">{tickets.filter((t) => t.status === "Open" || t.status === "In Progress").length}</p><p className="text-sm text-muted-foreground">Active</p></CardContent></Card>
              <Card><CardContent className="pt-6 text-center"><CheckCircle className="w-8 h-8 text-secondary mx-auto mb-2" /><p className="text-2xl font-bold font-heading text-foreground">{tickets.filter((t) => t.status === "Resolved" || t.status === "Closed").length}</p><p className="text-sm text-muted-foreground">Resolved</p></CardContent></Card>
            </div>

            <Card>
              <CardHeader><CardTitle className="font-heading text-lg">My Tickets</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {tickets.map((t) => {
                  const sc = statusConfig[t.status];
                  const Icon = sc.icon;
                  return (
                    <div
                      key={t.id}
                      onClick={() => { setSelectedId(t.id); setView("detail"); }}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{t.subject}</p>
                          <p className="text-xs text-muted-foreground">{t.id} · {t.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${sc.class}`}><Icon className="w-3 h-3" />{t.status}</span>
                        <p className="text-xs text-muted-foreground mt-1">{t.date}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </>
        )}

        {view === "new" && (
          <>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setView("list")}><ArrowLeft className="w-5 h-5" /></Button>
              <div>
                <h1 className="font-heading text-2xl font-bold text-foreground">Raise a Ticket</h1>
                <p className="text-muted-foreground">Describe your issue and we'll get back to you.</p>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Category</label>
                  <Select value={newCategory} onValueChange={setNewCategory}>
                    <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                    <SelectContent>
                      {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <Input placeholder="Brief subject of your issue" value={newSubject} onChange={(e) => setNewSubject(e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Detailed Message</label>
                  <Textarea placeholder="Describe your issue in detail..." rows={5} value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
                </div>
                <div className="flex gap-3">
                  <Button onClick={handleSubmitTicket} className="gap-2"><Send className="w-4 h-4" /> Submit Ticket</Button>
                  <Button variant="outline" onClick={() => setView("list")}>Cancel</Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {view === "detail" && selectedTicket && (
          <>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={() => setView("list")}><ArrowLeft className="w-5 h-5" /></Button>
              <div>
                <h1 className="font-heading text-xl font-bold text-foreground">{selectedTicket.subject}</h1>
                <p className="text-muted-foreground text-sm">{selectedTicket.id} · {selectedTicket.category} · {selectedTicket.date}</p>
              </div>
              <span className={`ml-auto inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${statusConfig[selectedTicket.status].class}`}>
                {selectedTicket.status}
              </span>
            </div>
            <Card>
              <CardContent className="pt-6 space-y-4">
                {selectedTicket.messages.map((m, i) => (
                  <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-3 rounded-lg ${m.sender === "user" ? "bg-primary/10 text-foreground" : "bg-muted text-foreground"}`}>
                      <p className="text-xs font-medium mb-1 text-muted-foreground">{m.sender === "user" ? "You" : "Support Agent"}</p>
                      <p className="text-sm">{m.text}</p>
                      <p className="text-xs text-muted-foreground mt-1">{m.date}</p>
                    </div>
                  </div>
                ))}
                {(selectedTicket.status === "Open" || selectedTicket.status === "In Progress") && (
                  <div className="flex gap-2 pt-3 border-t border-border">
                    <Input placeholder="Type your reply..." value={replyText} onChange={(e) => setReplyText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleReply()} />
                    <Button onClick={handleReply} size="icon"><Send className="w-4 h-4" /></Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardTickets;
