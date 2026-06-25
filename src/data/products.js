import {
  anprSystem,
  bess,
  dieselTower,
  fuelMonitoringSystem,
  hybridTower,
  machineMonitoring,
  mobileBowsers,
  powerHouseTower,
  serviceVans,
  solarTower,
  tailoredMonitoringSolution,
  tailoredVisionSystem,
} from '@/assets/images';

export const categories = ['All Products', 'Mobile Maintenance', 'Light Tower', 'Power Storage', 'Vision', 'Monitoring'];

export const products = [
  {
    name: 'Hybrid Tower',
    category: 'Light Tower',
    image: hybridTower,
    description: 'Illuminate smarter, pollute less. Our Hybrid LED Light Tower — 4 × 200W LEDs covering 4,000 m², 50,000-hour lifespan, CPCP-II compliant — drastically cutting diesel consumption and carbon footprint for world-class, sustainable job-site illumination.',
    tags: ['Hybrid Power', '6h Backup'],
    features: [
      'Efficient and high Performance of 200-Watt x 4 Nos Covering 4000 SQM  IP 66 LED light with longer service life',
      '7 Hours of Battery Backup with 5 hrs of Charging(2 Cycles)',
      'Compacted and high performance 7.5KVA Cummins engine with Stamford Alternator',
      'Sustainable job-site illumination with lower carbon footprint',
    ],
    optionalFeatures: [
      'Solar hybrid integration',
      'Remote monitoring & control',
      'Automatic dusk-to-dawn sensors',
    ],
    specs: {
      lights: '4 × 200W LEDs',
      coverage: '4,000 m²',
      lifeSpan: '50,000 Hours',
      compliance: 'CPCP-II',
      mast: '7m Galvanised',
    }
  },
  {
    name: 'Solar Tower',
    category: 'Light Tower',
    image: solarTower,
    description: 'Go fully off-grid, zero emissions. Our Solar Light Tower - 4 × 100W IP66 LEDs, 30,000-hour lifespan, 1.8KW solar-powered, 10-11 hours battery backup - delivering zero diesel, zero carbon, pure sustainable brilliance.',
    tags: ['Solar', 'Eco-Friendly'],
    features: [
      '4 × 100W IP66 LEDs for optimal illumination',
      '30,000-hour LED lifespan for durability',
      '1.8KW solar-powered system',
      '10-11 hours battery backup on single charge',
      'Zero diesel, zero carbon operation',
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
    name: 'Power House Tower',
    category: 'Light Tower',
    image: powerHouseTower,
    description: 'Unleash unstoppable power. Our Power House Light Tower - 4 × 200W IP66 LEDs covering 3,500 m², integrated welding machine, CPCB-IV+ compliant 15KVA Cummins, 500-hour service intervals - built for relentless, all-in-one performance on the toughest job sites.',
    tags: ['High Power', 'CPCB-IV+'],
    features: [
      '4 × 200W IP66 LEDs covering 3,500 m² area',
      'Integrated welding machine for versatile operations',
      'CPCB-IV+ compliant 15KVA Cummins engine',
      '500-hour service intervals for reduced downtime',
      'All-in-one performance for toughest job sites',
    ],
    optionalFeatures: [
      'Remote monitoring system and industry 4.0 complaint',
      'Automatic transfer switch',
      'Extended fuel tank',
    ],
    specs: {
      lights: '4 × 200W IP66 LEDs',
      coverage: '3,500 m²',
      welding: 'Integrated Machine',
      engine: '15KVA Cummins',
      compliance: 'CPCB-IV+',
      serviceInterval: '500 Hours',
      mast: '7m Galvanised',
    }
  },
  {
    name: 'Diesel Tower',
    category: 'Light Tower',
    image: dieselTower,
    description: 'Built to blaze, night after night. Our Diesel Light Tower - 4 × 200W IP66 LEDs covering 3,500 m², CPCB-IV+ compliant 5KVA high-performance engine, 500-hour service intervals - delivering unmatched, rugged illumination wherever power meets demand.',
    tags: ['Diesel', 'CPCB-II'],
    features: [
      '4 × 200W IP66 LEDs covering 3,500 m² area',
      'CPCB-IV+ compliant 5KVA high-performance engine',
      '500-hour service intervals for reduced maintenance',
      'Unmatched rugged illumination performance',
      'Built for night-after-night reliability',
    ],
    optionalFeatures: [
      'Road-towable trailer',
      'Engine protection system',
      'Custom color options',
    ],
    specs: {
      lights: '4 × 200W IP66 LEDs',
      coverage: '3,500 m²',
      engine: '5KVA High-Performance',
      compliance: 'CPCB-IV+',
      serviceInterval: '500 Hours',
      mast: '7m Galvanised',
    }
  },
  {
    name: 'BESS',
    category: 'Power Storage',
    image: bess,
    description: 'Power construction, unplugged. KASP\'s BESS - 3.0KW robust Lithium LFP battery storage, 2.5 hours reliable backup, IP67 all-weather ready, solar & AC charging - redefining clean, silent, uninterrupted power for the most demanding job sites.',
    tags: ['4x Industrial Ports', 'IP67 Rugged'],
    features: [
      '3.0KW robust Lithium LFP battery storage system',
      '2.5 hours reliable backup power for demanding operations',
      'IP67 all-weather ready for extreme job site conditions',
      'Solar & AC charging flexibility for versatile power sources',
      'Clean, silent, uninterrupted power operation',
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
      batteryType: 'Lithium LFP',
      weatherRating: 'IP67 All-Weather',
      charging: 'Solar & AC',
      design: 'Clean & Silent Operation',
    }
  },
  {
    name: 'Mobile Bowsers',
    category: 'Mobile Maintenance',
    image: mobileBowsers,
    description: 'Fuel smarter, track everything. ANORA\'s Mobile Bowser - customised 2.4KL to 6KL capacity, Industry 4.0 enabled with real-time fuel monitoring, GPS tracking and dispensing intelligence - delivering precision, accountability and self-sufficient fuel management across every job site.',
    tags: ['2.4KL Capacity', 'Fuel Dispensing'],
    features: [
      'Customised 2.4KL to 6KL fuel capacity options',
      'Industry 4.0 enabled with real-time fuel monitoring',
      'GPS tracking for fleet management and accountability',
      'Dispensing intelligence for precise fuel management',
      'Self-sufficient fuel management across job sites',
    ],
    optionalFeatures: [
      'Capacity as per requirement',
      'Double Pumping system for Faster Fueling',
      'Remote Level indicators for battery Monitoring',
    ],
    specs: {
      capacity: '2.4KL to 6KL Customised',
      technology: 'Industry 4.0 Enabled',
      monitoring: 'Real-time Fuel Monitoring',
      tracking: 'GPS Tracking',
      dispensing: 'Intelligent Dispensing',
      management: 'Self-sufficient Operation',
    }
  },
  {
    name: 'Service Vans',
    category: 'Mobile Maintenance',
    image: serviceVans,
    description: 'Your workshop, delivered on wheels. KASP\'s Service Van - self-sufficient 15KVA Cummins powered, complete pneumatic tooling, digital lube dispensing, GPS-enabled remote monitoring - eliminating workshop downtime and bringing world-class heavy machinery maintenance directly to your job site.',
    tags: ['Mobile Maintenance', 'Customizable'],
    features: [
      'Self-sufficient 15KVA Cummins powered mobile workshop',
      'Complete pneumatic tooling for heavy machinery maintenance',
      'Digital lube dispensing with precise measurement tracking',
      'GPS-enabled remote monitoring for fleet management',
      'World-class maintenance directly at job site',
    ],
    optionalFeatures: [
      'Custom cabinet configurations',
      'Heavy-duty air compressor options',
      'Integrated power generator',
    ],
    specs: {
      power: '15KVA Cummins',
      tooling: 'Complete Pneumatic',
      dispensing: 'Digital Lube System',
      monitoring: 'GPS-Enabled Remote',
      capability: 'Workshop-on-Wheels',
      maintenance: 'World-Class Service',
    }
  },
  {
    name: 'ANPR System',
    category: 'Vision',
    hidden: true,
    image: anprSystem,
    pdfLink: 'https://media.base44.com/files/public/69e868c8f1dd8bfe3be0028e/6915bfabf_ANPR_System.pdf',
    description: 'Advanced License Plate Recognition system for industrial facilities. Automate entry/exit, track vehicle movements, and enhance security with 99%+ recognition accuracy even in low-light conditions.',
    tags: ['Vision', '99% Accuracy'],
    features: [
      '99%+ recognition accuracy in all lighting conditions',
      'Automated entry/exit management for industrial sites',
      'Real-time vehicle tracking and logging',
      'Instant alerts for unauthorized or blacklisted vehicles',
      'Integration with existing security and gate systems',
    ],
    optionalFeatures: [
      'Facial recognition integration',
      'Speed detection capabilities',
      'Cloud-based analytics dashboard',
    ],
    specs: {
      accuracy: '99%+',
      recognitionTime: '< 1 Second',
      nightVision: 'Advanced IR',
      connectivity: 'PoE / WiFi',
      integration: 'API / ONVIF',
    }
  },
  {
    name: 'Tailored Vision System',
    category: 'Vision',
    hidden: true,
    image: tailoredVisionSystem,
    pdfLink: 'https://media.base44.com/files/public/69e868c8f1dd8bfe3be0028e/5531d4626_Tailored_Vision_System.pdf',
    description: 'Custom-built computer vision solutions designed for your unique industrial requirements. From defect detection to specialized object tracking.',
    tags: ['Vision', 'Customized'],
    features: [
      'Custom algorithm development',
      'Integration with existing camera hardware',
      'Specific object/defect recognition',
      'Scalable edge or cloud processing',
    ],
    optionalFeatures: [
      'Custom API development',
      'On-site hardware consultation',
    ],
    specs: {
      type: 'Custom Development',
      platform: 'KASP IOT Vision',
      delivery: 'Project Based',
    }
  },
  {
    name: 'Fuel Monitoring System',
    category: 'Monitoring',
    hidden: true,
    image: fuelMonitoringSystem,
    pdfLink: 'https://media.base44.com/files/public/69e868c8f1dd8bfe3be0028e/079d63966_Fuel_Monitoring_System.pdf',
    description: 'High-precision fuel monitoring for industrial tanks and equipment. Real-time consumption tracking, theft detection alerts, and detailed refueling reports to optimize your fuel economy.',
    tags: ['Monitoring', 'Anti-Theft'],
    features: [
      'Real-time fuel level and consumption tracking',
      'Automated theft detection and drainage alerts',
      'Automated refueling reports and history',
      'High-precision ultrasonic or capacitive sensors',
      'Integration with GPS tracking for mobile assets',
    ],
    optionalFeatures: [
      'Multi-tank management',
      'Fuel quality sensors',
      'Remote shut-off capability',
    ],
    specs: {
      precision: '0.1%',
      sensorType: 'Ultrasonic / Capacitive',
      alertType: 'SMS / Email / Push',
      batteryLife: 'Up to 5 Years',
      connectivity: 'LoRaWAN / GSM',
    }
  },
  {
    name: 'Machine Monitoring',
    category: 'Monitoring',
    hidden: true,
    image: machineMonitoring,
    pdfLink: 'https://media.base44.com/files/public/69e868c8f1dd8bfe3be0028e/b6da303dc_Machine_Monitoring_System.pdf',
    description: 'Comprehensive industrial machine monitoring system. Track performance, health, and operational status of your heavy machinery in real-time to prevent breakdown and optimize output.',
    tags: ['Industry 4.0', 'Predictive'],
    features: [
      'Real-time vibration and temperature monitoring',
      'Operational hour tracking and maintenance scheduling',
      'Power consumption and efficiency analytics',
      'Customizable threshold alerts for critical parameters',
      'Seamless integration with SCADA and ERP systems',
    ],
    optionalFeatures: [
      'Edge AI for anomaly detection',
      'Wireless sensor networking',
      'Remote machine shut-down control',
    ],
    specs: {
      sensors: 'Vibration / Temp / Load',
      connectivity: '4G / LTE / Satellite',
      alerting: 'Real-time Push/SMS',
      mounting: 'Non-invasive Magnetic',
      compliance: 'Industry 4.0 Ready',
    }
  },
  {
    name: 'Tailored Monitoring Solution',
    category: 'Monitoring',
    hidden: true,
    image: tailoredMonitoringSolution,
    pdfLink: 'https://media.base44.com/files/public/69e868c8f1dd8bfe3be0028e/aa3d8467b_Tailored_Monitoring_Solution.pdf',
    description: 'Bespoke monitoring solutions for specialized industrial equipment. Track the exact parameters you need with custom sensor integration.',
    tags: ['Monitoring', 'Customized'],
    features: [
      'Custom sensor integration (Temp, Pressure, etc.)',
      'Bespoke dashboard design',
      'Specialized alert logic',
      'Historical data analytics',
    ],
    optionalFeatures: [
      'Remote control integration',
      'Custom reporting modules',
    ],
    specs: {
      type: 'Custom Development',
      platform: 'KASP IOT Monitoring',
      delivery: 'Project Based',
    }
  },
];
