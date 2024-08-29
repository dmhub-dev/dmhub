import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/layout/Hero';
import ContactForm from '@/components/layout/ContactForm';
import SideBar from '@/components/layout/SideBar';

const Contact = () => {
    return (
        <>    
            <Hero/>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '100px',
          width: '900px',
          float: 'right',
          boxShadow: '0 0 5px 1px rgb(209, 209, 209)',
          marginRight: '30rem',
          marginTop: '-5rem',
          marginBottom: '5rem',
          backgroundColor: 'white',
        }}
      >
        <h1 style={{ fontSize: 40, fontFamily: 'Arial', color: 'teal', fontWeight: 'bold'}}>Vraggen of suggesties?</h1>

        <p style={{ marginBottom: '10px', color: 'dimgray', fontSize: 16 }}>
                    Bij myFunus stellen we alle informatie zorgvuldig samen en verbeteren we continu. 
                    We krijgen dan ook graag feedback van u als consument of als uitvaartverzorger. 
                    Wij stellen uw mening enorm op prijs!
        </p>

        <ContactForm/>

      </div>
      
      <div style={{ width: '20%', marginLeft: 'auto', marginBottom: '5rem'}}> 
        <SideBar/> 
      </div>
            
      <div style={{ clear: 'both' }}></div>
      </>
    )

};

export default Contact;