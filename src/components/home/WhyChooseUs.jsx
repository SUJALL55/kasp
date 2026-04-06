import React from 'react';
import { Shield, Settings, Sun, Clock, Award, HeadphonesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  { icon: Shield, title: 'CPCB Compliant', desc: 'All equipment meets environmental compliance standards for sustainable operations.' },
  { icon: Settings, title: 'Customizable Solutions', desc: 'Fully customizable equipment tailored to your specific site requirements.' },
  { icon: Sun, title: 'Eco-Friendly Options', desc: 'Solar and hybrid power solutions that reduce carbon footprint.' },
  { icon: Clock, title: '24/7 Operations', desc: 'Designed for continuous operation with extended service intervals.' },
  { icon: Award, title: 'Premium Quality', desc: 'International and Indian brand components ensuring durability.' },
  { icon: HeadphonesIcon, title: 'Expert Support', desc: 'Professional after-sales service and technical support.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose KASP Solutions?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We deliver industrial-grade equipment with advanced features and reliable performance for your critical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}