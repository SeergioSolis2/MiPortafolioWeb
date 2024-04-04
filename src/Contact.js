import React from 'react';
import backgroundImage from './Background1.jpg'; // Cambia la imagen de fondo según sea necesario
import { useAppContext } from './AppContext';
import CV from './CV_SESH.pdf';
import CV_ESP from './CV_SESH_ESP.pdf'

const Contact = () => {
  const contactContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '92vh',
    top: '2vh',
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const contactContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'black',
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const contactInfoStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    color: 'white',
    wordWrap: 'break-word',
    margin: '10px',
    textShadow: '2px 2px 4px black',
    wordWrap: 'break-word',
  };

  const fontP = {
    color: 'white',
    margin: '10px',
    fontSize: '20px',
    textShadow: '1px 1px 2px black',
    wordWrap: 'break-word',
  };

  const downloadLinkStyle = {
    display: 'block',
    margin: '20px auto',
    padding: '10px 20px',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '18px',
  };

  const { state } = useAppContext();

  return (
    <div style={contactContainerStyle}>
      <div style={contactContentStyle}>
        <h1 style={titleStyle}>{state.language === 'en' ? 'Contact Information' : 'Información de Contacto'}</h1>
        <div style={contactInfoStyle}>
          <p style={fontP}>{state.language === 'en' ? 'Email: sergioeduardosolishernandez@gmail.com' : 'Correo Electrónico: sergioeduardosolishernandez@gmail.com'}</p>
          <p style={fontP}>{state.language === 'en' ? 'Phone: 449 375 04 92' : 'Teléfono: 449 375 04 92'}</p>
          {/* Otros detalles de contacto según sea necesario */}
          <a
            style={downloadLinkStyle}
            href={state.language === 'en' ? CV : CV_ESP} 
            download= {state.language === 'en' ? 'CV_SESH.pdf' : 'CV_SESH_ESP.pdf'}
          >
            {state.language === 'en' ? 'Download CV' : 'Descargar CV'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
