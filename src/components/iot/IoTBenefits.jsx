import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, TrendingUp, Timer, Leaf } from 'lucide-react';

const benefits = [
  { icon: TrendingDown, value: '50%', label: 'Reduction in Downtime', desc: 'Predictive maintenance prevents unexpected failures', color: 'from-primary to-accent' },
  { icon: TrendingUp, value: '30%', label: 'Increase in Efficiency', desc: 'Optimized operations through data-driven decisions', color: 'from-secondary to-primary' },
  { icon: Timer, value: '2x', label: 'Faster Response Time', desc: 'Real-time alerts enable immediate action', color: 'from-accent to-secondary' },
  { icon: Leaf, value: '40%', label: 'Lower Carbon Footprint', desc: 'Smart energy management reduces emissions', color: 'from-primary to-secondary' },
];

export default function IoTBenefits() {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-background">
            Measurable Impact
          </h2>
          <p className="mt-4 text-background/60 max-w-xl mx-auto">
            KASPIoT delivers tangible results that directly impact your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative overflow-hidden rounded-2xl bg-background/5 border border-background/10 p-6 hover:bg-background/10 transition-colors group h-full flex flex-col"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${b.color}`} />
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform">
                <b.icon className="w-6 h-6 text-secondary" />
              </div>
              <p className="font-heading text-4xl font-bold text-background tabular-nums">{b.value}</p>
              <p className="font-semibold text-background/90 mt-2">{b.label}</p>
              <p className="text-sm text-background/50 mt-1 flex-1">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}