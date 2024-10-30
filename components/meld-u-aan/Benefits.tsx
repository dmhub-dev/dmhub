// Define the type for each benefit item
type BenefitItem = {
  icon: string;
  title: string;
  description: string;
};

// Define the props type for the Benefits component
type BenefitsProps = {
  benefits?: BenefitItem[];
  title?: string;
};

const Benefits: React.FC<BenefitsProps> = ({ benefits, title }) => {
  // Check if benefits array or title is missing or if benefits array is empty
  if (!benefits || benefits.length === 0 || !title) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="container w-full">
        <h2 className="text-3xl font-bold mb-12 text-darktext">
          {title}
        </h2>
        <div className="w-full grid md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="block items-center gap-4 text-start text-darktext p-2"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-[40px] w-auto"
              />
              <div>
                <h3 className="text-base font-bold text-darktext leading-[19px] mb-[3px]">
                  {item.title}
                </h3>
                <p className="text-base text-darktext leading-[19px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;



