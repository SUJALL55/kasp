import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Wifi, BarChart3, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { machineMonitoring } from '@/assets/images';

const highlights = [
  { icon: Cpu, label: 'Smart Sensors', desc: 'Real-time equipment monitoring' },
  { icon: Wifi, label: 'Connected Fleet', desc: 'Remote access & control' },
  { icon: BarChart3, label: 'Analytics', desc: 'Predictive maintenance insights' },
  { icon: Shield, label: 'Secure', desc: 'Enterprise-grade security' },
];

export default function IoTPreview() {
  return (
    <section className="py-24 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-secondary/20 text-secondary border-none mb-4 text-sm px-4 py-1.5">
                NEW — KASP IOT Solutions
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-background">
                Smart Industrial{' '}
                <span className="text-secondary">IoT Solutions</span>
              </h2>
              <p className="mt-4 text-background/60 text-lg leading-relaxed max-w-lg">
                Take your operations to the next level with our cutting-edge IoT platform. 
                Monitor, analyze, and optimize your entire fleet from a single dashboard.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-background/5 border border-background/10"
                  >
                    <div className="w-9 h-9 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                      <h.icon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-background">{h.label}</p>
                      <p className="text-xs text-background/50">{h.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/iot-solutions">
                <Button size="lg" className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl px-8 h-12">
                  Explore IoT Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/30 via-accent/20 to-primary/30 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-secondary/10">
              <img
                src={machineMonitoring}
                alt="KASPIoT Smart Factory Dashboard"
                className="w-full aspect-video object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
