type Feature = {
  icon?: string;
  title: string;
  description: string;
};

const FeaturesSection = ({ features }: { features: Feature[] }) => {
  return (
    <div className=" py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white  p-6 flex flex-col items-left">
            {feature.icon && (
              <div className="text-4xl mb-4 text-black">{feature.icon}</div>
            )}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
