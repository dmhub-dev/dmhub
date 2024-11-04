import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Cookie Statement</h1>
      <p className="mb-4">
        myFunus maakt op haar website(s) gebruik van cookies. In dit cookie statement leest u meer over de cookies en op welke manier myFunus de cookies toepast op haar website(s).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Wat is een cookie?</h2>
      <p className="mb-4">
        Cookies zijn kleine tekstbestanden die door een internetpagina op een pc, tablet of mobiele telefoon worden geplaatst. Sommige van deze cookies zijn nodig om de site te laten werken; andere helpen ons de website te verbeteren of maken het mogelijk u een betere gebruikservaring aan te bieden.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Waarom gebruikt myFunus cookies?</h2>
      <p className="mb-4">
        De cookies die myFunus plaatst bevatten geen persoonsgegevens en zijn niet aan u als individu te koppelen. Er bestaan verschillende soorten cookies die elk gebruikt worden voor een bepaald doel of specifieke functionaliteit. Concreet gebruiken de websites van myFunus cookies voor de volgende doeleinden:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Om onze websites te laten functioneren (“functionele cookies”);</li>
        <li>Om het algemene gebruik van onze websites in kaart te brengen (“statistische cookies”);</li>
        <li>Om onze websites te personaliseren (“personalisatie cookies”);</li>
        <li>Om onze eigen diensten en producten te promoten en te verbeteren (“marketing cookies”);</li>
        <li>Om te integreren met sociale media platformen (“social media cookies”);</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Functionele cookies</h2>
      <p className="mb-4">
        Functionele cookies worden gebruikt om de websites te doen werken. Deze cookies zijn noodzakelijk om de websites en apps goed te laten functioneren. Je kan ze daarom niet weigeren of uitzetten.
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Het doorgeven van informatie van de ene pagina aan de volgende pagina, bijvoorbeeld bij lange enquêtes of veel gegevensinvoer.</li>
        <li>Het opslaan van voorkeuren, zoals de taal, locatie, aantal zoekresultaten.</li>
        <li>Het opslaan van instellingen voor videoweergave, zoals buffergrootte en resolutie.</li>
        <li>Het uitlezen van browserinstellingen om de website optimaal weer te geven.</li>
        <li>Het opsporen van misbruik van de website en diensten, zoals mislukte inlogpogingen.</li>
        <li>Het gelijkmatig belasten van de website voor beschikbaarheid.</li>
        <li>Inloggegevens opslaan zodat u niet telkens hoeft in te loggen.</li>
        <li>Het mogelijk maken om te reageren op de website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Statistische cookies</h2>
      <p className="mb-4">
        Met statistische cookies brengen we het algemeen gebruik van onze websites en apps in kaart. Dit gebeurt op basis van anonieme gegevens.
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Het bijhouden van het aantal bezoekers op onze webpagina’s;</li>
        <li>Het bijhouden van de tijdsduur op onze webpagina’s;</li>
        <li>Het bepalen van de volgorde waarin pagina’s worden bezocht;</li>
        <li>Het beoordelen welke delen van onze websites aanpassing behoeven;</li>
        <li>Het optimaliseren van websites.</li>
      </ul>

      {/* Add additional sections for other cookie types here... */}
      
      <h2 className="text-2xl font-semibold mt-6 mb-2">Hoe kan ik cookies handmatig verwijderen of uitzetten?</h2>
      <p className="mb-4">
        U kunt in elke browser kiezen om alle cookies die reeds op uw computer staan te verwijderen. Let er wel op dat je deze instellingen voor elke browser op elk toestel dat je gebruikt apart moet aanpassen. Indien u ervoor kiest om in je browser geen enkele soort cookies meer toe te laten, inclusief functionele cookies, kan dit een negatieve impact hebben op de werking van websites.
      </p>
      <p className="mb-4">
        Hieronder vind u terug hoe u cookies van uw browser kunt verwijderen:
      </p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>Google Chrome: hoe u reeds geplaatste cookies kunt verwijderen en hoe u nieuwe cookies kunt weigeren staat hier beschreven (web & mobiel).</li>
        <li>Firefox/Mozilla: hoe u reeds geplaatste cookies kunt verwijderen en hoe u nieuwe cookies kunt weigeren kunt u hier terugvinden (web & mobiel).</li>
        <li>Safari: hoe u reeds geplaatste cookies kunt verwijderen en hoe u nieuwe cookies kunt weigeren staat hier beschreven (web & mobiel).</li>
        <li>Internet Explorer: hoe u reeds geplaatste cookies kunt verwijderen en hoe nieuwe cookies kunt weigeren staat hier beschreven.</li>
        <li>Opera: Hoe u reeds geplaatste cookies kunt verwijderen en hoe u nieuwe cookies kunt weigeren staat hier beschreven.</li>
      </ul>

      <p className="mt-6 text-sm text-gray-500">Deze pagina is het laatst gewijzigd op 3 juli februari 2024.</p>
    </div>
  );
};

export default Cookies;
