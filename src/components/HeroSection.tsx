import { Link } from "react-router-dom";
import { ArrowRight, FileText, Store, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="space-y-6">
          <div className="inline-flex items-center gap-2 gradient-gold text-gold-foreground px-4 py-1.5 rounded-full text-sm font-medium">
            <span>🇳🇬</span> Ogun State Government
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
            Welcome to <span className="text-accent">LOGMAS</span>
            <br />
            Local Government Management System
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
            Apply for certificates, pay levies, and manage your government services online — fast, secure, and transparent.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="gap-2 text-base px-8 gradient-gold text-gold-foreground border-0 hover:opacity-90" asChild>
              <Link to="/dashboard">
                <FileText className="w-5 h-5" />
                Company Demand Notice
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
              <Link to="/dashboard">
                <Store className="w-5 h-5" />
                Shop Levy
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent" asChild>
              <Link to="/dashboard">
                <Award className="w-5 h-5" />
                Certificates
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Certificates Issued", value: "50,000+" },
            { label: "Citizens Served", value: "120,000+" },
            { label: "Local Govts", value: "20" },
            { label: "Uptime", value: "99.9%" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
