import React from 'react';

interface HelpSectionProps {
  title: string;
  imageUrl: string;
  contentTitle: string;
  points: string[];
  description: string;
}

const HelpSection: React.FC<HelpSectionProps> = ({
  title,
  imageUrl,
  contentTitle,
  points,
  description,
}) => {
  return (
    <section className="flex flex-col md:flex-row items-center p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
        <img
          src={imageUrl}
          alt="Help Illustration"
          className="w-32 h-32 rounded-md object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <h3 className="mt-2 text-lg font-semibold text-gray-700">{contentTitle}</h3>
        <ul className="mt-2 space-y-2 text-gray-600">
          {points.map((point, index) => (
            <li key={index} className="list-disc list-inside">
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
      </div>
    </section>
  );
};

export default HelpSection;
