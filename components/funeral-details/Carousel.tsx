import React, { useState } from 'react';

interface CarouselProps {
  images: { src: string; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  // Determine the visible images (4 images at a time)
  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  // Wrap around if fewer than 4 images are at the end of the array
  if (visibleImages.length < 3) {
    visibleImages.push(...images.slice(0, 3 - visibleImages.length));
  }

  return (
    <div className="relative w-full py-2  flex items-center justify-between">
      {/* Left Arrow */}
      <button
        type="button"
        className="absolute left-5 p-2 rounded-full bg-white shadow-md focus:outline-none"
        onClick={handlePrev}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 1L1 5l4 4"
          />
        </svg>
      </button>

      {/* Carousel Content */}
      <div className="flex space-x-4 w-full justify-center">
        {visibleImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-40 transition-transform duration-700 ease-in-out transform"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-md shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        type="button"
        className="absolute right-5 p-2 rounded-full bg-white shadow-md focus:outline-none"
        onClick={handleNext}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 9l4-4-4-4"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
