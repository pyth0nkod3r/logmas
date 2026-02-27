import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Store, FileText, Award, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileText,
    title: "Company Demand Notice",
    description: "View and respond to company demand notices issued by the local government. Make payments and track your compliance status in real-time.",
    features: [
      "View demand notices online",
      "Make payments directly from dashboard",
      "Download official receipts",
      "Track compliance status in real-time",
    ],
    process: ["Log in to your dashboard", "View issued demand notices", "Review amount and details", "Make payment online", "Download receipt"],
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Store,
    title: "Shop Levy Payment",
    description: "Pay your shop levy online quickly and securely. Stay compliant with local government regulations and avoid penalties.",
    features: [
      "Secure online payment processing",
      "Instant digital receipts",
      "Payment history and tracking",
      "Automated reminders for due dates",
    ],
    process: ["Register your shop", "View levy amount", "Make payment online", "Receive instant receipt", "Track payment history"],
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Apply for Birth, Death, Marriage, and State of Origin certificates. Complete the application, upload documents, pay fees, and track your status.",
    features: [
      "Birth, Death, Marriage, State of Origin certificates",
      "Step-by-step application process",
      "Document upload support",
      "Status tracking from dashboard",
    ],
    process: ["Select certificate type", "Fill application form", "Upload supporting documents", "Pay processing fee", "Track and download certificate"],
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-24 pb-16 gradient-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              LOGMAS provides essential government services to citizens and businesses in Ogun State, Nigeria.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-7xl mx-auto space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col lg:flex-row gap-10 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1 space-y-5">
                  <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center`}>
                    <service.icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  
                  <div>
                    <h4 className="font-heading font-semibold text-foreground mb-2">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="gap-2 mt-2" asChild>
                    <Link to="/dashboard">
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className="flex-1 w-full">
                  <div className={`rounded-2xl ${service.bg} p-6`}>
                    <h4 className="font-heading font-semibold text-foreground mb-4">How It Works</h4>
                    <div className="space-y-3">
                      {service.process.map((step, si) => (
                        <div key={si} className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">{si + 1}</div>
                          <span className="text-sm text-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
