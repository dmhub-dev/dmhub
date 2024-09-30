const featuresDefault = [
  {
    title: "Zichtbaarheid",
    description: "Verhoog uw online zichtbaarheid",
    icon: "/icons/features-1.svg",
  },
  {
    title: "Besparingen",
    description: "Bespaar tijd en geld aan online marketing",
    icon: "/icons/features-5.svg",
  },
  {
    title: "Uitvaarten",
    description:
      "Word beter gevonden en verhoog uw kans op het verzorgen van meer uitvaarten",
    icon: "/icons/features-6.svg",
  },
  {
    title: "Inzicht",
    description:
      "Krijg inzicht in uw prestaties en de prijzen t.o.v. uw concurrentie en uw online conversie",
    icon: "/icons/features-4.svg",
  },
  {
    title: "Flexibiliteit",
    description: "Bepaal zelf uw abonnement met bijkomende voordelen",
    icon: "/icons/features-2.svg",
  },
  {
    title: "Nieuwe inkomstenbronnen",
    description: "Nieuwe verdienmodellen zorgen voor extra inkomsten",
    icon: "/icons/features-3.svg",
  },
];

const Benefits = ({ benefits = featuresDefault }) => {
  return (
    <section className="py-16">
      <div className="container w-full">
        <h2 className="text-3xl font-bold mb-12 text-darktext">
          De voordelen van myFunus
        </h2>
        <div className="w-full grid md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-start text-darktext p-2"
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
