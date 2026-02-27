import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: Shield, title: "Integrity", description: "We uphold the highest standards of transparency and accountability in all government services." },
  { icon: Target, title: "Efficiency", description: "We leverage technology to streamline processes and reduce bureaucratic delays for citizens." },
  { icon: Eye, title: "Transparency", description: "Every transaction and application is tracked and visible, ensuring trust between government and citizens." },
  { icon: Heart, title: "Service", description: "We are committed to serving the people of Ogun State with dedication and excellence." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-24 pb-16 gradient-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">About LOGMAS</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Empowering local government services through digital innovation for the people of Ogun State.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                LOGMAS — the Local Government Management System — was created to modernize and simplify the way citizens and businesses interact with local government services in Ogun State, Nigeria. Our mission is to make government services accessible, efficient, and transparent for every citizen through cutting-edge digital technology.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading digital platform for local government services in Nigeria, setting the standard for how government and citizens connect. We envision a future where every government service is just a click away — no long queues, no paperwork, no delays.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We are committed to delivering world-class government services that rival the best digital platforms globally. From business registration to levy payments, every service on LOGMAS is designed with the citizen in mind — simple, secure, and fast.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-xl border border-border p-6 text-center"
                >
                  <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                    <v.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
