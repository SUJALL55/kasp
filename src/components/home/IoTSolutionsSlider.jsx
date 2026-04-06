import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    tag: 'Real-Time Monitoring',
    title: 'Smart Equipment Monitoring',
    desc: 'KASPIoT sensors track fuel levels, temperature, runtime, and vibration — all displayed on one live dashboard.',
    image: 'https://media.base44.com/images/public/69d1e8aaf5271d945522e9a8/b8c904d6e_generated_3b71796e.png',
    accent: 'from-primary/80 to-accent/60',
    badge: 'bg-primary/20 text-primary',
  },
  {
    tag: 'Predictive Analytics',
    title: 'Prevent Failures Before They Happen',
    desc: 'AI-powered analytics predicts equipment faults up to 2 weeks in advance, slashing maintenance costs by 50%.',
    image: 'https://media.base44.com/images/public/69d1e8aaf5271d945522e9a8/ef9c431e4_generated_e1db13bd.png',
    accent: 'from-secondary/80 to-primary/60',
    badge: 'bg-secondary/20 text-secondary',
  },
  {
    tag: 'Remote Fleet Management',
    title: 'Control Your Fleet From Anywhere',
    desc: 'Remotely manage every service van and illumination tower — start/stop, GPS tracking, and instant alerts.',
    image: 'https://media.base44.com/images/public/69d1e8aaf5271d945522e9a8/6fa3bdc8a_generated_53812489.png',
    accent: 'from-accent/80 to-secondary/60',
    badge: 'bg-accent/20 text-accent',
  },
  {
    tag: 'Energy Management',
    title: 'Smart Energy Optimization',
    desc: 'Monitor solar efficiency, battery health, and fuel usage in real time. Cut your carbon footprint by up to 40%.',
    image: 'https://media.base44.com/images/public/69d1e8aaf5271d945522e9a8/d5728cb38_generated_92de5c66.png',
    accent: 'from-primary/70 to-secondary/70',
    badge: 'bg-primary/20 text-primary',
  },
];

export default function IoTSolutionsSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [go]);

  const slide = slides[current];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <section className="py-24 bg-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Badge className="bg-secondary/20 text-secondary border-none px-4 py-1.5 text-sm font-medium mb-4">
            🚀 KASPIoT Solutions
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-background">
            Hot IoT Solutions
          </h2>
          <p className="mt-3 text-background/50 max-w-xl mx-auto">
            Discover how KASPIoT is revolutionizing industrial operations with connected intelligence.
          </p>
        </div>

        {/* Slider */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Background Image */}
              <div className="relative h-[420px] sm:h-[500px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.accent} mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl px-8 sm:px-14">
                    <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${slide.badge} border border-white/10 mb-4`}>
                      {slide.tag}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-4xl font-bold text-white leading-tight">
                      {slide.title}
                    </h3>
                    <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
                      {slide.desc}
                    </p>
                    <Link to="/iot-solutions">
                      <Button className="mt-8 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl px-7 h-11">
                        Explore This Solution
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all z-10"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2.5 bg-secondary' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Slide counter */}
        <p className="text-center text-background/30 text-sm mt-5">
          {current + 1} / {slides.length}
        </p>
      </div>
    </section>
  );
}