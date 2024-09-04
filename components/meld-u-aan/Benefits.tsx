import { FaEye, FaPiggyBank, FaChartLine, FaClipboardList, FaMedal } from 'react-icons/fa';

const Benefits = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">De voordelen van myFunus</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          <div className="flex items-start">
            <FaEye className="text-red-500 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-bold">Zichtbaarheid</h3>
              <p>Verhoog uw online zichtbaarheid</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaPiggyBank className="text-red-500 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-bold">Besparingen</h3>
              <p>Bespaar tijd en geld aan online marketing</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaClipboardList className="text-red-500 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-bold">Uitvaarten</h3>
              <p>Word beter gevonden en verhoog uw kans op het verzorgen van meer uitvaarten</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-bold">Inzicht</h3>
              <p>Krijg inzicht in uw prestaties en de prijzen t.o.v. uw concurrentie en uw online conversie</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaMedal className="text-red-500 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-bold">Flexibiliteit</h3>
              <p>Bepaal zelf uw abonnement met bijkomende voordelen</p>
            </div>
          </div>
          <div className="flex items-start">
            <FaChartLine className="text-red-500 text-3xl mr-4" />
            <div>
              <h3 className="text-lg font-bold">Nieuwe inkomstenbronnen</h3>
              <p>Nieuwe verdienmodellen zorgen voor extra inkomsten</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
