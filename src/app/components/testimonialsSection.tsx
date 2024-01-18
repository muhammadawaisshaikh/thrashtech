"use client";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TestimonialCard from './testimonialCard';
import { testimonials } from '@/utils/mock-data/testimonials';
import { Testimonial } from '../types/testimonial';

export default function TestimonialsSection() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const data = testimonials.map((t: Testimonial) => <TestimonialCard testimonial={t} />);

  return (
    <div className='py-24 sm:py-32'>
      <AliceCarousel 
        mouseTracking 
        items={data}
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
