import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (

    <div
    contentEditable="true"
    style={{
      border: '1px solid #ccc',
      padding: '10px',
      minHeight: '100px',
      width: '600px',
      float: 'right',
      boxShadow: '0 0 5px 1px rgb(209, 209, 209)',
      marginRight: '30rem',
    }}
  >
    <h1 style={{ fontFamily: 'Arial', color: '#fff' }}>De kracht van MyFunus</h1>
    <p>
      Een slecht geregelde uitvaart of een onvolledig afscheid: een nachtmerrie voor iedere nabestaande. Een uitvaart
      vindt maar één keer plaats en maakt een belangrijk deel uit van het rouwproces van de nabestaanden, het is dus
      van immens belang dat een uitvaart perfect geregeld wordt.
    </p>
    <p>
      De nummer één reden voor een slechte uitvaart is de mismatch tussen nabestaanden en de uitvaartverzorger. Om deze
      reden heeft Funus zich tot doel gesteld om opdrachtgevers in staat te stellen om de uitvaartverzorger te vinden
      die bij hun past zodat uitvaarten met een nare bijsmaak voor de nabestaanden tot het verleden gaan behoren.
    </p>
    <p>
      Door vooraf uitvaartverzorgers te vergelijken op basis van verschillende onderdelen en gemakkelijk en snel
      contact te leggen met de gekozen uitvaartverzorger wordt de kans vergroot dat nabestaanden en de
      uitvaartverzorger een klik hebben en samen voor een perfecte uitvaart kunnen zorgen. Door middel van het bieden
      van een optimale service aan zowel opdrachtgevers als uitvaartverzorgers wil Funus haar missie nastreven:
      opdrachtgevers vinden de uitvaartverzorger die bij hun past.taanden tot het verleden gaan behoren.
    </p>
  </div>
  
  );
};

export default About;
