import React from 'react';
import IoTHero from '../components/iot/IoTHero';
import IoTFeatures from '../components/iot/IoTFeatures';
import IoTUseCases from '../components/iot/IoTUseCases';
import IoTBenefits from '../components/iot/IoTBenefits';
import CTASection from '../components/home/CTASection';

export default function IoTSolutions() {
  return (
    <div>
      <IoTHero />
      <IoTFeatures />
      <IoTUseCases />
      <IoTBenefits />
      <CTASection />
    </div>
  );
}