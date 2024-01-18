"use client";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TestimonialCard from './testimonialCard';

export default function TestimonialsSection() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const items = [
    <TestimonialCard />,
    <TestimonialCard />,
    <TestimonialCard />,
    <TestimonialCard />,
  ];

  return (
    <div className='py-24 sm:py-32'>
      <AliceCarousel 
        mouseTracking 
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={2000}
        animationDuration={1000}
      />
    </div>
  )
}
