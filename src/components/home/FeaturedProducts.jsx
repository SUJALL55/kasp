import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ['All Products', 'Service Vans', 'Light Towers', 'Power Storage'];

const products = [
  {
    name: 'Hybrid Towers',
    category: 'Light Towers',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/65740e8ec_image.png',
    description: '200W x 6 LEDs, 50,000h life, CPCB-II compliant.',
    tags: ['Hybrid Power', '6h Backup'],
  },
  {
    name: 'Solar Towers',
    category: 'Light Towers',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/c7c771079_image.png',
    description: '100W x 4 LEDs, solar-powered, 10–11h battery backup.',
    tags: ['Solar', 'Eco-Friendly'],
  },
  {
    name: 'Power House Towers',
    category: 'Light Towers',
    image: 'https://i.ibb.co/84N3gNRF/Power-House-Towers.png',
    description: '200W x 4 LEDs with 15KVA Cummins engine.',
    tags: ['High Power', 'CPCB-IV+'],
  },
  {
    name: 'Diesel Towers',
    category: 'Light Towers',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/e222e8437_image.png',
    description: '200W x 4 LEDs with 5KVA Mahindra engine, CPCB-II.',
    tags: ['Diesel', 'CPCB-II'],
  },
  {
    name: 'BESS 3750VA',
    category: 'Power Storage',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/59ecfe920_image.png',
    description: 'Portable industrial battery storage with 4x output ports and IP67 rugged design.',
    tags: ['4x Industrial Ports', 'IP67 Rugged'],
  },
  {
    name: 'Mobile Bowsers',
    category: 'Service Vans',
    image: 'https://media.base44.com/images/public/69c2b4faa43513949a2b9d58/e46c28d22_image.png',
    description: 'High-capacity fuel dispensing unit with 2.4KL tank and integrated precision metering.',
    tags: ['2.4KL Capacity', 'Fuel Dispensing'],
  },
  {
    name: 'Service Vans',
    category: 'Service Vans',
    image: 'https://i.ibb.co/whDZW11z/service-van.png',
    description: 'Mobile Maintenance & repair without travel to workshops.',
    tags: ['Mobile Maintenance', 'Customizable'],
  },
];

const tagColors = [
  'bg-primary text-primary-foreground',
  'bg-secondary text-secondary-foreground',
  'bg-accent text-accent-foreground',
];

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState('All Products');
  const [expandedProduct, setExpandedProduct] = useState(null);

  const filtered = activeCategory === 'All Products'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleCardClick = (productName) => {
    setExpandedProduct(expandedProduct === productName ? null : productName);
  };

  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Our Products
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Professional industrial solutions engineered for maximum performance and reliability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                  : 'bg-card text-foreground border-border hover:border-primary/40 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid — one surface per card (image + copy) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="h-full"
              >
                <Link
                  to="/products"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCardClick(product.name);
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-shadow hover:border-primary/25 hover:shadow-md cursor-pointer"
                >
                  <div className="relative flex aspect-[4/3] shrink-0 items-center justify-center bg-white p-6 sm:p-8 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-contain transition-transform duration-500 mix-blend-multiply ${
                        expandedProduct === product.name ? 'scale-110 blur-[2px] opacity-20' : 'group-hover:scale-[1.05]'
                      } ${
                        product.name === 'Power House Towers' ? 'scale-[1.8] translate-x-[20%]' : ''
                      }`}
                      loading="lazy"
                    />
                    
                    {/* Overlay Details in the Picture */}
                    <AnimatePresence>
                      {expandedProduct === product.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-white/40 backdrop-blur-[2px]"
                        >
                          <p className="text-sm font-medium leading-relaxed text-foreground sm:text-base mb-4 drop-shadow-sm">
                            {product.description}
                          </p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {product.tags.map((tag, ti) => (
                              <span
                                key={tag}
                                className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-sm ${tagColors[ti % tagColors.length]}`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div
                      className={`absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/95 text-primary shadow-sm backdrop-blur-sm transition-transform ${
                        expandedProduct === product.name ? 'rotate-90' : ''
                      }`}
                      aria-hidden
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 pt-4">
                    <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                      {product.name}
                    </h3>
                    <AnimatePresence>
                      {expandedProduct === product.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4">
                            <Link to="/contact">
                              <Button size="sm" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-lg flex items-center justify-center gap-2">
                                <MessageSquareQuote className="w-4 h-4" />
                                Get Quote
                              </Button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}