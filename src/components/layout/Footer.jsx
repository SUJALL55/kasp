import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/images/logo.png" alt="KASP Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Professional industrial solutions — mobile maintenance service vans, illumination towers, and IoT-enabled smart monitoring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Products', path: '/products' },
                { label: 'IoT Solutions', path: '/iot-solutions' },
                { label: 'Contact', path: '/contact' },
                { label: 'Privacy Policy', path: '/privacy-policy' },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block text-sm text-background/60 hover:text-secondary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Products</h4>
            <div className="space-y-3">
              {['Service Vans', 'Hybrid Towers', 'Solar Towers', 'Power House Towers', 'Diesel Towers'].map((product) => (
                <Link key={product} to="/products" className="block text-sm text-background/60 hover:text-secondary transition-colors">
                  {product}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-4 text-background/80">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                <p className="text-sm text-background/60">Office no 818, Eros Corporate Tower, Sector-2, IMT Manesar</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <a href="mailto:Sales@kasp.co.in" className="text-sm text-background/60 hover:text-secondary transition-colors">Sales@kasp.co.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-secondary shrink-0" />
                <a href="https://www.kasp.co.in" target="_blank" rel="noopener noreferrer" className="text-sm text-background/60 hover:text-secondary transition-colors">www.kasp.co.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">© {new Date().getFullYear()} KASP Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-sm text-background/40 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <a
              href="https://www.kasp.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-background/40 hover:text-secondary transition-colors"
            >
              Visit Website <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}