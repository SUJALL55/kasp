import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroIndustrialSolutions, heroIotDashboard } from '@/assets/images';

const slides = [
  {
    image: heroIndustrialSolutions,
    tag: 'Industrial Solutions',
    title: 'Industrial Solutions That Move Forward',
    desc: 'Professional mobile maintenance service vans and illumination tower designed for the demands of modern industrial operations.',
  },
  {
    image: heroIotDashboard,
    tag: 'KASP IOT — Smart Monitoring',
    title: 'Real-Time Equipment Intelligence',
    desc: 'KASP IOT sensors track fuel, temperature, runtime, and vibration — all in one live dashboard.',
  },
];

export default function HeroSection() {
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

  const variants = {
    enter: (dir) => ({ opacity: 0, scale: 1.04, x: dir > 0 ? 40 : -40 }),
    center: { opacity: 1, scale: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, scale: 0.97, x: dir > 0 ? -40 : 40 }),
  };

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sliding Background */}
      <AnimatePresence custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/65 to-foreground/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center min-h-screen py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 backdrop-blur-sm border border-secondary/30">
                <Zap className="w-4 h-4" />
                {slide.tag}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                {slide.title.split(' ').slice(0, -2).join(' ')}{' '}
                <span className="text-secondary">{slide.title.split(' ').slice(-2).join(' ')}</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
                {slide.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl px-8 h-12 text-base">
                    View Products
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-xl px-8 h-12 text-base backdrop-blur-sm"
                  onClick={() => {
                    const subject = encodeURIComponent(`Quote Inquiry: ${slide.title}`);
                    const body = encodeURIComponent(`Hello KASP Team,\n\nI am interested in learning more about "${slide.title}" as seen on your website.\n\nCould you please provide a quote or more information?\n\nThank you.`);
                    window.location.href = `mailto:Sales@kasp.co.in?subject=${subject}&body=${body}`;
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-4 sm:left-6 lg:left-8 flex items-center gap-4 z-10">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`transition-all duration-300 rounded-full ${
                  i === current ? 'w-8 h-2.5 bg-secondary' : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          {/* Arrows */}
          <div className="flex gap-2 ml-2">
            <button
              onClick={() => go(-1)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => go(1)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-10 right-4 sm:right-6 lg:right-8 text-white/40 text-sm font-mono tabular-nums">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  );
}
