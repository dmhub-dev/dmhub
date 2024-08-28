import React from 'react';

const UitvaartverzorgerSection = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      {/* Bent u uitvaartverzorger Section */}
      <div
        style={{
          backgroundColor: '#4A4A4A',
          color: 'white',
          padding: '1.5rem',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Bent u uitvaartverzorger</h2>
        <p style={{ fontSize: '14px', marginBottom: '1rem' }}>
          Check onze pagina met veelgestelde vragen en ontdek hoe u via myFunus in contact komt met uw doelgroep
        </p>
        <button
          style={{
            backgroundColor: '#E53935',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
        >
          Naar pagina
        </button>
      </div>

      {/* Blijf ook op de hoogte Section */}
      <div
        style={{
          backgroundColor: '#32A899',
          color: 'white',
          padding: '1.5rem',
          textAlign: 'center',
          borderRadius: '8px',
        }}
      >
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem' }}>Blijf ook op de hoogte</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <a href="#" style={{ color: 'white', fontSize: '24px' }}> 
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" style={{ color: 'white', fontSize: '24px' }}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" style={{ color: 'white', fontSize: '24px' }}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UitvaartverzorgerSection;
