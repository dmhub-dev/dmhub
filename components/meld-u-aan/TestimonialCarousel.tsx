"use client";

import React, { useState } from 'react';

interface Testimonial {
  text: string;
  author: string;
  title: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full  p-20 bg-secondary bg-opacity-30  flex items-center justify-between h-[250px]">
      
      {/* Left Arrow */}
      <button
        type="button"
        className="absolute left-10 p-2 rounded-full bg-white shadow-md focus:outline-none"
        onClick={handlePrev}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1L1 5l4 4" />
        </svg>
      </button>

      {/* Testimonial Content */}
      <div className="text-center flex px-10 w-full justify-between items-center space-x-6">
        <div className="flex flex-col items-start w-3/4">
            <p className="text-xl font-medium text-gray-800 italic mb-6 text-left">
                 &ldquo;{currentTestimonial.text}&rdquo;
            </p>
            <h3 className="font-bold text-gray-900">{currentTestimonial.author}</h3>
            <p className="text-sm font-semibold text-gray-600">{currentTestimonial.title}</p>
        </div>
        <div className="w-1/4 flex justify-center">
            <img
            src={currentTestimonial.image}
            alt={`${currentTestimonial.author}'s picture`}
            className="w-40 h-40 object-cover rounded-full border-1 border-gray-100 shadow-md shadow-dark"
            />
        </div>
        </div>


      {/* Right Arrow */}
      <button
        type="button"
        className="absolute right-10 p-2 rounded-full bg-white shadow-md focus:outline-none"
        onClick={handleNext}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
        </svg>
      </button>
    </div>
  );
};

export default TestimonialCarousel;
