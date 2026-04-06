import React from 'react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const IOT_SENSOR = 'https://media.base44.com/images/public/69d1e8aaf5271d945522e9a8/01f37833b_generated_10937a6e.png';
const IOT_DASHBOARD = 'https://media.base44.com/images/public/69d1e8aaf5271d945522e9a8/ef9c431e4_generated_e1db13bd.png';
const IOT_REMOTE = 'https://media.base44.com/images/public/69d1e8aaf5271d945522e9a8/6fa3bdc8a_generated_53812489.png';
const IOT_ENERGY = 'https://media.base44.com/images/public/69d1e8aaf5271d945522e9a8/d5728cb38_generated_92de5c66.png';

const useCases = [
  {
    title: 'Smart Equipment Monitoring',
    desc: 'Attach KASPIoT sensors to your service vans and light towers to track real-time operational data — engine health, fuel consumption, GPS location, and runtime metrics all in one dashboard.',
    image: IOT_SENSOR,
    tag: 'Monitoring',
  },
  {
    title: 'Predictive Maintenance Dashboard',
    desc: 'Our AI-powered analytics platform analyzes historical data patterns to predict equipment failures up to 2 weeks in advance, enabling proactive maintenance scheduling and zero unplanned downtime.',
    image: IOT_DASHBOARD,
    tag: 'Analytics',
  },
  {
    title: 'Remote Fleet Management',
    desc: 'Manage your entire fleet of service vans and illumination towers from anywhere in the world. Start/stop equipment remotely, track asset locations, and receive instant alerts for any anomalies.',
    image: IOT_REMOTE,
    tag: 'Management',
  },
  {
    title: 'Energy & Sustainability Insights',
    desc: 'Track and optimize energy consumption across your fleet. Monitor solar panel efficiency, battery health, fuel usage patterns, and carbon footprint with detailed sustainability reports.',
    image: IOT_ENERGY,
    tag: 'Sustainability',
  },
];

export default function IoTUseCases() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-none px-4 py-1.5 text-sm font-medium mb-4">
            Use Cases
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            How KASPIoT Transforms Operations
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Real-world applications of our IoT platform across industrial operations.
          </p>
        </div>

        <div className="space-y-20">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                i % 2 !== 0 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={`relative group ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                  <img
                    src={uc.image}
                    alt={uc.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className={`min-w-0 text-left ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Badge className="bg-accent/10 text-accent border-none mb-3">{uc.tag}</Badge>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{uc.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{uc.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}