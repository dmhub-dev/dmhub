import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

function TextBox() {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm">
      <h3 className="text-lg font-semibold">De kracht van MyFunus</h3>
      <input
        type="text"
        className="w-full px-3 py-2"
        placeholder="Een slecht geregelde uitvaart of een onvolledig afscheid: een nachtmerrie voor iedere nabestaande..." />
    </div>
  );
}

function Column(): React.JSX.Element {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-bold">Missie</h2>
          <p>De missie van Funus is om consumenten te helpen in de zoektocht naar de uitvaartverzorger die bij hun past op basis van persoonlijke voorkeuren. Dit komt ook terug in de slogan van Funus: “Vind de uitvaartverzorger die bij u past”.</p>
        </div>

        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-bold">Visie</h2>
          <p>Funus wil ervoor zorgen dat consumenten (mogelijke opdrachtgevers) op basis van zo volledig mogelijke informatie een keuze kunnen maken voor een uitvaartverzorger. Het doel is het creëren van een optimale match tussen beiden zodat er een perfecte uitvaart geregeld wordt in de ogen van de klant.</p>
        </div>

        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-bold">Persoonlijke betrokkenheid</h2>
          <p>Het persoonlijke aspect speelt een steeds grotere rol bij het regelen van een uitvaart. Consumenten willen een uitvaartverzorger kiezen die bij hun past. Vanuit onze werkervaring in de uitvaartbranche merken wij dit ook. We weten hierdoor wat er speelt in deze markt en spelen daar met Funus op in.</p>
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-bold">Waarom de naam Funus?</h2>
          <p>De naam Funus komt uit het Latijns en betekent ‘begrafenis’ of ‘uitvaart’. Funus helpt consumenten in de zoektocht naar de uitvaartverzorger die bij hun past.</p>
        </div>
      </div>
    </div>
  );
}
