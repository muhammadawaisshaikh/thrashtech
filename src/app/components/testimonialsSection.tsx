"use client";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TestimonialCard from './testimonialCard';
import { testimonials } from '@/utils/mock-data/testimonials';
import { Testimonial } from '../../types/testimonial';

export default function TestimonialsSection() {
  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };

  const data = testimonials.map((t: Testimonial) => (
    <TestimonialCard key={t.id} testimonial={t} />
  ));

  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              clients say
            </span>
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <AliceCarousel
        mouseTracking
        items={data}
        responsive={responsive}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        infinite
        autoPlayInterval={4000}
        animationDuration={800}
      />
    </div>
  );
}
