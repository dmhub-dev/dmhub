import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/layout/Hero';

const About = () => {
  return (
    <>    
            <Hero/>

      {/* Main Content Section */}
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '100px',
          width: '650px',
          float: 'right',
          boxShadow: '0 0 5px 1px rgb(209, 209, 209)',
          marginRight: '20rem',
          marginTop: '-5rem',
          backgroundColor: 'white',
        }}
      >
        <h1 style={{ fontSize: 30, fontFamily: 'Arial', color: 'teal', fontWeight: 'bold' }}>De kracht van MyFunus</h1>

        <p style={{ marginBottom: '10px', color: 'dimgray', fontSize: 16 }}>
          Een slecht geregelde uitvaart of een onvolledig afscheid: een nachtmerrie voor iedere nabestaande. Een uitvaart
          vindt maar één keer plaats en maakt een belangrijk deel uit van het rouwproces van de nabestaanden, het is dus
          van immens belang dat een uitvaart perfect geregeld wordt.
        </p>

        <p style={{ marginBottom: '10px', color: 'dimgray', fontSize: 16 }}>
          De nummer één reden voor een slechte uitvaart is de mismatch tussen nabestaanden en de uitvaartverzorger. Om deze
          reden heeft Funus zich tot doel gesteld om opdrachtgevers in staat te stellen om de uitvaartverzorger te vinden
          die bij hun past zodat uitvaarten met een nare bijsmaak voor de nabestaanden tot het verleden gaan behoren.
        </p>

        <p style={{ marginBottom: '10px', color: 'dimgray', fontSize: 16 }}>
          Door vooraf uitvaartverzorgers te vergelijken op basis van verschillende onderdelen en gemakkelijk en snel
          contact te leggen met de gekozen uitvaartverzorger wordt de kans vergroot dat nabestaanden en de
          uitvaartverzorger een klik hebben en samen voor een perfecte uitvaart kunnen zorgen. Door middel van het bieden
          van een optimale service aan zowel opdrachtgevers als uitvaartverzorgers wil Funus haar missie nastreven:
          opdrachtgevers vinden de uitvaartverzorger die bij hun past.taanden tot het verleden gaan behoren.
        </p>
      </div>

      <div style={{ clear: 'both' }}></div>

      {/* Columns Section */}
      <div style={{ marginTop: '80px', }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20rem', marginRight: '20rem' }}>
          {/* Column 1 */}
          <div style={{ width: '30%', padding: '1rem', borderLeft: '3px solid teal' }}>
            <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#333', fontSize: 20}}>Missie</h2>
            <p style={{ color: 'dimgray'}}>
              De missie van Funus is om consumenten te helpen in de zoektocht naar de uitvaartverzorger die bij hun past op
              basis van persoonlijke voorkeuren. Dit komt ook terug in de slogan van Funus: “Vind de uitvaartverzorger die bij u past”.
            </p>
          </div>

          {/* Column 2 */}
          <div style={{ width: '30%', padding: '1rem', borderLeft: '3px solid teal'}}>
            <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#333', fontSize: 20}}>Visie</h2>
            <p style={{ color: 'dimgray'}}>
              Funus wil ervoor zorgen dat consumenten (mogelijke opdrachtgevers) op basis van zo volledig mogelijke
              informatie een keuze kunnen maken voor een uitvaartverzorger. Het doel is het creëren van een optimale match
              tussen beiden zodat er een perfecte uitvaart geregeld wordt in de ogen van de klant.
            </p>
          </div>

          {/* Column 3 */}
          <div style={{ width: '30%', padding: '1rem', borderLeft: '3px solid teal'}}>
            <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', color: '#333', fontSize: 20}}>Persoonlijke betrokkenheid</h2>
            <p style={{ color: 'dimgray'}}>
              Het persoonlijke aspect speelt een steeds grotere rol bij het regelen van een uitvaart. Consumenten willen
              een uitvaartverzorger kiezen die bij hun past. Vanuit onze werkervaring in de uitvaartbranche merken wij dit
              ook. We weten hierdoor wat er speelt in deze markt en spelen daar met Funus op in.
            </p>
          </div>
        </div>

        <div style={{ width: '100vw !important', marginTop: '60px', backgroundColor: 'teal', padding: '7rem 10rem', justifyContent: 'center', alignItems: 'center'}}>
            <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold', color: 'white', fontSize: 40, textAlign: 'center'}}>Waarom de naam Funus?</h2>
          <p style={{ color: 'white', textAlign: 'center', display: 'inline-block'}}>
            De naam Funus komt uit het Latijns en betekent 'begrafenis' or 'uitvaart'. Funus helpt consumenten in de 
            zoektocht naar de uitvaartverzorger die bij hun past.
          </p>
        </div>
      </div>
      
    </>
  );
};

export default About;
