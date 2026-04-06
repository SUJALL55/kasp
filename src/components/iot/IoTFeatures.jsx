import React from 'react';
import { Cpu, Wifi, BarChart3, Shield, Bell, Gauge, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Cpu, title: 'Smart Sensors', desc: 'Industrial-grade IoT sensors that monitor temperature, vibration, fuel levels, runtime hours, and operational parameters in real-time.', color: 'bg-primary/10 text-primary' },
  { icon: Wifi, title: 'Wireless Connectivity', desc: 'Reliable 4G/LTE and satellite connectivity options ensuring seamless data transmission even in remote industrial locations.', color: 'bg-secondary/10 text-secondary' },
  { icon: BarChart3, title: 'Predictive Analytics', desc: 'AI-powered analytics engine that predicts equipment failures before they happen, reducing downtime by up to 50%.', color: 'bg-accent/10 text-accent' },
  { icon: Shield, title: 'Enterprise Security', desc: 'End-to-end encryption with role-based access control. SOC2 compliant infrastructure protecting your operational data.', color: 'bg-primary/10 text-primary' },
  { icon: Bell, title: 'Smart Alerts', desc: 'Configurable threshold-based alerts via SMS, email, and push notifications for immediate response to critical events.', color: 'bg-secondary/10 text-secondary' },
  { icon: Gauge, title: 'Performance Dashboard', desc: 'Intuitive real-time dashboards with customizable KPIs, fleet tracking, and operational efficiency metrics.', color: 'bg-accent/10 text-accent' },
  { icon: Globe, title: 'Remote Management', desc: 'Control and manage your entire fleet remotely — start/stop equipment, adjust settings, and schedule maintenance from anywhere.', color: 'bg-primary/10 text-primary' },
  { icon: Zap, title: 'Energy Optimization', desc: 'Intelligent energy management system that optimizes fuel consumption and battery usage across your equipment fleet.', color: 'bg-secondary/10 text-secondary' },
];

export default function IoTFeatures() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Powerful IoT Capabilities
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to transform your industrial operations with intelligent, connected technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-default h-full flex flex-col"
            >
              <div className={`w-11 h-11 rounded-xl ${f.color.split(' ')[0]} flex items-center justify-center mb-4 shrink-0 group-hover:scale-110 transition-transform`}>
                <f.icon className={`w-5 h-5 ${f.color.split(' ')[1]}`} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}