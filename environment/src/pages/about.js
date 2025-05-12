import React from 'react';
import AboutHero from '../components/about/AboutHero';
import Image from '../components/about/image';
import VisionImpact from '../components/about/VisionImpact';
import CallToAction from '../components/about/CallToAction';

function About() {
  return (
    <div>
      <AboutHero />
      <Image />
      <VisionImpact />
      <CallToAction />
    </div>
  );
}

export default About;