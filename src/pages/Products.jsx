import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const products = [
  {
    name: 'Hybrid Towers',
    category: 'Light Towers',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/65740e8ec_image.png',
    description: 'Offering 200 W x 6 LEDs with a life span of 50000 hours. Combined with CPCB-II compliant Diesel Genset with a high service interval of 500 hrs and 6-sections 7m Galvanised iron mast with 340-degree rotation.',
    features: [
      'Efficient and high Performance of 200-Watt x 6 IP 66 LED light with longer service life',
      '6 Hours of Battery Backup with 6hrs of Charging',
      'Compacted and high performance 7.5KVA Cummins engine with Stamford Alternator',
    ],
    optionalFeatures: [
      'Solar hybrid integration',
      'Remote monitoring & control',
      'Automatic dusk-to-dawn sensors',
    ],
    specs: {
      lights: '200W x 6 LEDs',
      lifeSpan: '50,000 Hours',
      engine: '7.5KVA Cummins',
      mast: '7m Galvanised',
    }
  },
  {
    name: 'Solar Towers',
    category: 'Light Towers',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/c7c771079_image.png',
    description: 'Offering 100 W x 4 LEDs with a life span of 30000 hours. Combined With 1.8 KW of solar Panel a high service interval and 6-sections 7m Powder Coated iron mast with 340-degree rotation.',
    features: [
      'Efficient and high Performance of 100-Watt x 4 IP 66 LED light with longer service life',
      '10-11 Hours of Battery Backup with single solar day charging',
      'Compacted and High performance 550+ watts Solar panels',
    ],
    optionalFeatures: [
      'Extended battery banks',
      'GPS tracking system',
      'High-wind stability kit',
    ],
    specs: {
      lights: '100W x 4 LEDs',
      solarPanel: '1.8 KW',
      backup: '10-11 Hours',
      mast: '7m Powder Coated',
    }
  },
  {
    name: 'Power House Towers',
    category: 'Light Towers',
    image: 'https://i.ibb.co/84N3gNRF/Power-House-Towers.png',
    description: 'Offering 200 W x 4 LEDs with a span of 50000 hours. Combined with CPCB-IV+ compliant Diesel Genset with a high service interval of 500 hrs and 5-sections 7m Galvanised iron mast with 340-degree rotation.',
    features: [
      'Efficient and high Performance of 200-Watt x 4 IP 66 LED light with longer service life',
      'Compacted and high performance 15KVA Cummins engine with Stamford Alternator',
      'CPCB-II Compliant canopy designed',
    ],
    optionalFeatures: [
      'Soundproof acoustic enclosure',
      'Automatic transfer switch',
      'Extended fuel tank',
    ],
    specs: {
      lights: '200W x 4 LEDs',
      engine: '15KVA Cummins',
      compliance: 'CPCB-IV+',
      mast: '7m Galvanised',
    }
  },
  {
    name: 'Diesel Towers',
    category: 'Light Towers',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/e222e8437_image.png',
    description: 'Offering 200 W x 4 LEDs with a life span of 50000 hours. Combined with CPCB-II compliant Diesel Genset with a high service interval of 500 hrs and 6-sections 7m Galvanised iron mast with 340-degree rotation.',
    features: [
      'Efficient and high Performance of 200-Watt x 4 IP 66 LED light with longer service life',
      'Compacted and high performance 5-KVA Mahindra engine with Alternator',
      'CPCB-II Compliant canopy designed',
    ],
    optionalFeatures: [
      'Road-towable trailer',
      'Engine protection system',
      'Custom color options',
    ],
    specs: {
      lights: '200W x 4 LEDs',
      engine: '5KVA Mahindra',
      compliance: 'CPCB-II',
      mast: '7m Galvanised',
    }
  },
  {
    name: 'BESS 3750VA',
    category: 'Power Storage',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/59ecfe920_image.png',
    description: 'Powering Construction, Redefined. Designed robust Battery Energy Storage System delivers 3.0 KW output, with 5 hours of charging for 2.5 hours of reliable backup. Designed for the demands of construction, it\'s easily transportable, aesthetically pleasing, and built for inductive loads, ensuring your operations run smoothly and efficiently.',
    features: [
      'Rugged IP67-rated portable enclosure with industrial-grade sockets',
      'High-performance Lithium Battery LFP for extreme environments',
      '4x Industrial output ports for multi-machine operation',
      'Integrated digital display for real-time load and operation monitoring',
      'Heavy-duty wheels and ergonomic handles for site mobility',
    ],
    optionalFeatures: [
      'Capacity as per requirement',
      'Trolley Mounted for eas of operation',
      'Remote Level indicators for Load Parameters',
      'Arrangements to run poker and other moter load.',
    ],
    specs: {
      output: '3.0 KW',
      backup: '2.5 Hours',
      charging: '5 Hours',
      batteryType: 'Lithium Battery LFP',
      design: 'IP67 Weatherproof',
    }
  },
  {
    name: 'Mobile Bowsers',
    category: 'Mobile Maintenance',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/e46c28d22_image.png',
    description: 'High-capacity fuel dispensing solution built for industrial sites. These mobile units are engineered for efficient fuel transport and on-site dispensing, featuring high-precision metering and robust safety systems.',
    features: [
      'Heavy-duty chassis with 2.4KL fuel dispensing capacity',
      'Integrated digital meter with slip generation for precise record keeping',
      'Rear-mounted 15m retractable hose reel for easy access',
      'Double-partitioned tank design with integrated pumping system',
      'Mechanical shutoff valves and comprehensive safety labeling',
    ],
    optionalFeatures: [
      'Capacity as per requirement',
      'Double Pumping system for Faster Fueling',
      'Remote Level indicators for battery Monitoring',
    ],
    specs: {
      capacity: 'Up to 2.4 KL',
      hoseLength: '15 Meters',
      meterType: 'Digital with Slip Generation',
      pumpSystem: 'Integrated Double Pumping',
    }
  },
  {
    name: 'Service Vans',
    category: 'Mobile Maintenance',
    image: 'https://i.ibb.co/whDZW11z/service-van.png',
    description: 'Multipurpose vehicle used for Mobile Maintenance and repair of heavy machinery, equipments without hassle of travel to workshops. Service vans are fully customisable depending on the site requirements with self sufficient Power and Air Backup.',
    features: [
      'Ergonomic Open type cabin design for better ventilation, Good visibility and easy access',
      'Individual storage spaces for all type of lubes and spares for better 5S',
      'Digital dispensing guns for all lubes for record and usage',
    ],
    optionalFeatures: [
      'Custom cabinet configurations',
      'Heavy-duty air compressor options',
      'Integrated power generator',
    ],
    specs: {
      type: 'Fully Customizable',
      storage: 'Modular 5S Design',
      dispensing: 'Digital High-Precision',
    }
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <Badge variant="secondary" className="bg-primary/10 text-primary border-none px-4 py-1.5 text-sm font-medium mb-4">
          Our Products
        </Badge>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
          Industrial Solutions
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          Discover our comprehensive range of industrial solutions designed for mobile maintenance and professional illumination needs.
        </p>
      </div>

      {/* Product List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
              i % 2 !== 0 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            <div className={`relative group ${i % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative bg-white rounded-3xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-3/4 h-3/4 object-contain group-hover:scale-105 transition-transform duration-700 mix-blend-multiply"
                />
              </div>
            </div>

            <div className={`min-w-0 text-left ${i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <Badge variant="secondary" className="bg-secondary/10 text-secondary border-none mb-3">{product.category}</Badge>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">{product.name}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">{product.description}</p>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Button 
                  onClick={() => setSelectedProduct(product)}
                  variant="outline" 
                  className="border-primary/20 hover:border-primary/50 text-primary rounded-xl px-6 h-10 flex items-center justify-center"
                >
                  <Info className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-8 h-10 flex items-center justify-center"
                  onClick={() => {
                    const subject = encodeURIComponent(`Quote Request: ${product.name}`);
                    const body = encodeURIComponent(`Hello KASP Team,\n\nI would like to request a formal quote for the ${product.name}.\n\nCategory: ${product.category}\n\nPlease let me know the pricing and lead time.\n\nThank you.`);
                    window.location.href = `mailto:Sales@kasp.co.in?subject=${subject}&body=${body}`;
                  }}
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Details Dialog */}
      <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProduct && (
            <div className="space-y-8 py-4">
              <DialogHeader className="">
                <div className="flex items-center gap-3 mb-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none">
                    {selectedProduct.category}
                  </Badge>
                </div>
                <DialogTitle className="text-3xl font-bold text-foreground">
                  {selectedProduct.name}
                </DialogTitle>
                <DialogDescription className="text-base mt-4 leading-relaxed">
                  {selectedProduct.description}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Features & Optional */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <div className="w-1.5 h-6 bg-primary rounded-full" />
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-muted-foreground text-sm">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedProduct.optionalFeatures && (
                    <div>
                      <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-secondary rounded-full" />
                        Optional Features
                      </h4>
                      <ul className="space-y-3">
                        {selectedProduct.optionalFeatures.map((feat) => (
                          <li key={feat} className="flex items-start gap-3 text-muted-foreground text-sm">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0 mt-1.5" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Specs & Image */}
                <div className="space-y-6">
                  <div className="bg-muted/50 rounded-2xl p-6 border border-border">
                    <h4 className="font-bold text-foreground mb-4">Technical Specifications</h4>
                    <div className="space-y-4">
                      {Object.entries(selectedProduct.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="text-sm font-medium text-foreground">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="aspect-video rounded-2xl bg-white border border-border overflow-hidden flex items-center justify-center p-6">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 rounded-xl flex items-center justify-center"
                  onClick={() => {
                    const subject = encodeURIComponent(`Pricing Inquiry: ${selectedProduct.name}`);
                    const body = encodeURIComponent(`Hello KASP Team,\n\nI am interested in getting a price quote for the ${selectedProduct.name}.\n\nProduct Category: ${selectedProduct.category}\n\nPlease provide more details regarding pricing and availability.\n\nThank you.`);
                    window.location.href = `mailto:Sales@kasp.co.in?subject=${subject}&body=${body}`;
                    setSelectedProduct(null);
                  }}
                >
                  Request Pricing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedProduct(null)}
                  className="rounded-xl h-12 px-8 flex items-center justify-center"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
