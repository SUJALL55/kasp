import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroIotDashboard, iotLaunch1, iotLaunch2 } from '@/assets/images';

export default function IoTHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroIotDashboard} alt="KASPIoT Smart Factory" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/80 to-primary/60" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="outline" className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 Introducing KASP IOT
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The intelligent eyes behind
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary">
                the world's most efficient industries
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              KASP IOT brings intelligent monitoring, predictive analytics, and seamless connectivity to your industrial equipment — 
              transforming raw data into actionable insights for maximum uptime and efficiency.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl px-8 h-14 text-base">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-xl px-8 h-14 text-base backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: '99.9%', label: 'Uptime' },
                { value: '50%', label: 'Cost Reduction' },
                { value: '24/7', label: 'Monitoring' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-secondary">{stat.value}</p>
                  <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Launch Images for IoT Solutions - Rectangular glassmorphism boxes */}
        <div className="hidden lg:flex flex-row gap-6 items-end min-w-[360px] max-w-[480px] w-full pr-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-4 aspect-[3/2] hover:bg-white/20 transition-all duration-500 hover:scale-105" 
            style={{maxWidth:'220px'}}
          >
            <img src={iotLaunch1} alt="IoT Launch 1" className="w-full h-full object-contain brightness-110 contrast-110" loading="lazy" decoding="async" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl p-4 aspect-[3/2] hover:bg-white/20 transition-all duration-500 hover:scale-105" 
            style={{maxWidth:'220px'}}
          >
            <img src={iotLaunch2} alt="IoT Launch 2" className="w-full h-full object-contain brightness-110 contrast-110" loading="lazy" decoding="async" />
          </motion.div>
        </div>
        {/* Mobile: Rectangular glassmorphism boxes */}
        <div className="flex flex-row gap-4 w-full mt-12 lg:hidden justify-center px-4">
          <div className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl p-2 aspect-[3/2]" style={{maxWidth:'140px'}}>
            <img src={iotLaunch1} alt="IoT Launch 1" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>
          <div className="flex-1 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl p-2 aspect-[3/2]" style={{maxWidth:'140px'}}>
            <img src={iotLaunch2} alt="IoT Launch 2" className="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
