import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { MapPin, Mail, Globe, CheckCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const reasons = [
  'Industry-leading mobile maintenance solutions',
  'Advanced illumination technology',
  'Customizable equipment for specific needs',
  'Professional after-sales support',
  'CPCB compliant and eco-friendly options',
  'Cutting-edge IoT monitoring solutions',
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    const message = formData.get('message');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      
      const subject = encodeURIComponent(`Inquiry from ${name} (${company || 'No Company'})`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`);
      
      window.location.href = `mailto:Sales@kasp.co.in?subject=${subject}&body=${body}`;
      
      toast.success('Message drafted! Please send the email to complete your inquiry.');
      e.target.reset();
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none px-4 py-1.5 text-sm font-medium mb-4">
            Contact Us
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Get in Touch
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Get in touch with our team for inquiries about our industrial solutions and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all flex flex-col items-start">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">Office Address</h3>
                    <p className="text-muted-foreground mt-1">
                      Office no 818, Eros Corporate Tower,
                      <br />
                      Sector-2, IMT Manesar
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all flex flex-col items-start">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">Contact Information</h3>
                    <a href="mailto:Sales@kasp.co.in" className="text-primary hover:text-primary/80 transition-colors mt-1 block">
                      Sales@kasp.co.in
                    </a>
                    <a href="https://www.kasp.co.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors mt-1 block">
                      www.kasp.co.in
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-lg transition-all flex flex-col items-start">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground">Why Choose KASP?</h3>
                    <div className="mt-3 space-y-2.5">
                      {reasons.map((r) => (
                        <div key={r} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-sm text-muted-foreground">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Card className="p-8 rounded-2xl border border-border flex flex-col">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-6">Send us a message</h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-all outline-none resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}