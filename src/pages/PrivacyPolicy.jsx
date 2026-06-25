import React from 'react';
import { Badge } from '@/components/ui/badge';

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none px-4 py-1.5 text-sm font-medium mb-4">
            Legal
          </Badge>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to KASP Solutions ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Company information and job title</li>
              <li>Contact preferences</li>
              <li>Messages and inquiries you send to us</li>
              <li>Information about your equipment and service requirements</li>
              <li>Office address: 393, Phase III, Udyog Vihar, Sector 19, Gurugram, Haryana 122016</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our products and services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraud and unauthorized access</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies to enhance user experience, analyze site usage, and enable certain functionality. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted rounded-xl">
              <p className="text-foreground font-medium">KASP Solutions</p>
              <p className="text-muted-foreground">Email: Sales@kasp.co.in</p>
              <p className="text-muted-foreground">Address: 393, Phase III, Udyog Vihar, Sector 19, Gurugram, Haryana 122016</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
