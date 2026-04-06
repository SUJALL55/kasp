import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'IoT Solutions', path: '/iot-solutions' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-card/90 backdrop-blur-xl shadow-lg shadow-primary/5' : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - full left corner */}
          <Link
            to="/"
            className="flex items-center group"
          >
            <img 
              src="/images/logo.png" 
              alt="KASP Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-105 mix-blend-multiply" 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              className="ml-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl px-6"
              onClick={() => {
                const subject = encodeURIComponent('General Quote Inquiry');
                const body = encodeURIComponent('Hello KASP Team,\n\nI am interested in your industrial solutions and would like to request a quote.\n\nPlease contact me to discuss my requirements.\n\nThank you.');
                window.location.href = `mailto:Sales@kasp.co.in?subject=${subject}&body=${body}`;
              }}
            >
              Get Quote
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl"
                onClick={() => {
                  const subject = encodeURIComponent('General Quote Inquiry');
                  const body = encodeURIComponent('Hello KASP Team,\n\nI am interested in your industrial solutions and would like to request a quote.\n\nPlease contact me to discuss my requirements.\n\nThank you.');
                  window.location.href = `mailto:Sales@kasp.co.in?subject=${subject}&body=${body}`;
                  setIsOpen(false);
                }}
              >
                Get Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}