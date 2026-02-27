import { FileText, Store, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const services = [
  {
    icon: FileText,
    title: "Company Demand Notice",
    description: "View and respond to company demand notices. Make payments and track your compliance status with local government.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Store,
    title: "Shop Levy",
    description: "Pay your shop levy online quickly and securely. Keep your business compliant with local regulations and avoid penalties.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Apply for Birth, Death, Marriage, and State of Origin certificates. Upload documents, pay fees, and track your application.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Services</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mt-2">
            Government Services Made Simple
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Access essential government services from the comfort of your home.
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full px-4">
          <CarouselContent className="-ml-4">
            {services.map((service, i) => (
              <CarouselItem key={service.title} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-card rounded-xl border border-border p-6 hover-lift group h-full flex flex-col"
                >
                  <div className={`w-12 h-12 rounded-lg ${service.bg} flex items-center justify-center mb-4`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">{service.description}</p>
                  <Button variant="ghost" size="sm" className="gap-1 text-primary p-0 h-auto self-start" asChild>
                    <Link to="/dashboard">
                      Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;
