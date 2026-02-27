import { UserPlus, FileEdit, CreditCard, Download } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: UserPlus, title: "Register", description: "Create your citizen account in minutes" },
  { icon: FileEdit, title: "Apply", description: "Fill out your application online" },
  { icon: CreditCard, title: "Pay", description: "Make secure payment for processing fees" },
  { icon: Download, title: "Download", description: "Receive and download your certificate" },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">Process</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            How It Works
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Four simple steps to access your government services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-foreground shadow-lg">
                <step.icon className="w-7 h-7" />
              </div>
              <div className="absolute top-8 left-[60%] right-[-40%] h-px bg-border hidden lg:block last:hidden" />
              <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-2.5 py-0.5 rounded-full mb-2">
                Step {i + 1}
              </span>
              <h3 className="font-heading font-semibold text-lg text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
