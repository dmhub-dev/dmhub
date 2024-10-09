import React, { useState, useEffect } from 'react';
interface CarouselProps {
  images: { src: string; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div id="default-carousel" className="relative w-2/3 h-40">
      {/* Carousel wrapper */}
      <div className="relative flex items-center space-x-4 overflow-hidden">
        <button
          type="button"
          className="absolute left-0 z-10 p-1 rounded-full bg-white shadow-md focus:outline-none"
          onClick={handlePrev}
        >
          <svg
            className="w-4 h-4 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </button>
        
        <div className="flex w-full overflow-hidden gap-5">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-transform duration-700 ease-in-out transform ${
                index === currentIndex ? 'scale-100' : 'scale-95 opacity-50'
              }`}
              style={{ display: index >= currentIndex && index < currentIndex + 3 ? 'block' : 'none' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-32 h-32 object-cover rounded-md shadow-sm"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="absolute right-0 z-10 p-1 rounded-full bg-white shadow-md focus:outline-none"
          onClick={handleNext}
        >
          <svg
            className="w-4 h-4 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
