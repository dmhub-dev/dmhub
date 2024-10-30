const featuresDefault = [
  {
    title: "Zichtbaarheid",
    description: "Verhoog uw (online) zichtbaarheid! Via myFunus bent u nog prominenter aanwezig via diverse media (radio, TV, online, social, etc.)",
    icon: "/icons/features-1.svg",
  },
  {
    title: "Besparingen",
    description: "Bespaar tijd en geld aan online marketing. Vanuit myFunus kunnen we via onze partners scherper en gezamenlijk inkopen waardoor u daar als uitvaartverzorger direct van profiteert.",
    icon: "/icons/features-5.svg",
  },
  {
    title: "Extra uitvaarten",
    description: "Word beter gevonden en verhoog zodoende uw kans op het verzorgen van meer uitvaarten.",
    icon: "/icons/features-6.svg",
  },
  {
    title: "Inzicht",
    description: "Krijg via ons dashboard direct inzicht in uw prestaties, onderneem actie op aanvragen van consumenten of plan eenvoudig extra promoties in.",
    icon: "/icons/features-4.svg",
  },
  {
    title: "Flexibiliteit",
    description: "myFunus is in eerste instantie gratis voor u als uitvaartverzorger. Wilt u extra opvallen en meer zichtbaarheid genieten, dan kunt u dat eenvoudig aangeven via ons dashboard.",
    icon: "/icons/features-2.svg",
  },
  {
    title: "Nieuwe businessmodellen",
    description: "myFunus biedt u als uitvaartverzorger nieuwe businessmodellen en daarmee extra inkomstenbronnen. Deze kunt u eenvoudig zelf aanzetten en promoten.",
    icon: "/icons/features-3.svg",
  },
];


const Benefits = ({ benefits = featuresDefault }) => {
  return (
    <section className="py-16">
      <div className="container w-full">
        <h2 className="text-3xl font-bold mb-12 text-darktext">
        Welke voordelen bieden wij vanuit myFunus
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
