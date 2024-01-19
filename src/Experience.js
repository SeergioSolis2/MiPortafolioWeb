import React from 'react';
import { useAppContext } from './AppContext';
import backgroundImage from './Background1.jpg';

const Experience = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '92vh',
    top: '2vh',
    // border: '5px solid black',
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const contentStyle = {
    overflow: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'black',
    width: '80%', // Ajuste del ancho para pantallas más grandes
    maxWidth: '1200px', // Ancho máximo para pantallas más pequeñas
    margin: '0 auto', // Centrar en pantallas más grandes
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Permite que los elementos se envuelvan en pantallas más pequeñas
    justifyContent: 'space-around',
    marginTop: '20px',
  };

  const cardStyle = {
    width: '30%', // Ancho ajustado para pantallas más grandes
    minWidth: '300px', // Ancho mínimo para pantallas más pequeñas
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    flex: '1 0 30%', // Distribuir espacio de manera uniforme en pantallas más grandes
  };

  const fontH1 = {
    color: 'white',
    margin: '10px',
    textShadow: '2px 2px 4px black', // Agrega contorno negro al texto
  };
  
  const fontP = {
    color: 'white',
    margin: '10px',
    fontSize: '20px',
    textShadow: '1px 1px 2px black', // Agrega contorno negro al texto
  };
  const { state, dispatch } = useAppContext();

  const workExperiences = [
    {
      title: state.language === 'en' ? 'ACCOUNTIGS SERVICES' : 'SERVICIOS CONTABLES',
      company: 'ESMAR APRIL 2018 – MAY 2022',
      description: state.language === 'en' ? `
      In this job I acquired a lot of knowledge about what it means to lead an active working 
      life, because I complied with certain hours and days to beefficient in the jobs assigned
      to me and deliver them on time.
      I learned to make a more effective use of the office package as well as toknow the
      basics about accounting.
      ` : 
      `En este trabajo adquirí demasiados conocimientos sobre lo que significa seguir una vida laboral activa, debido a que cumplía con ciertas horas y días para ser
      eficiente en los trabajos asignados y entregarlos a tiempo. Aprendi a hacer un uso mas efectivo del paquete de office
      asi como conocimientos basicos de la contabilidad.
      `,
    },
    {
      title: state.language === 'en' ? 'INTERN AT FLEXTRONICS' : 'BECARIO EN FLEXTRONICS',
      company: 'FLEX AUGUST 2022 – JAN 2023',
      description: state.language === 'en' ? `
      During my stay at Flex, I helped make Dashboards and programs of different kinds,
      with the use of C#, Net Framework, several programminglibraries, and the use of
      SQL Server databases.
      ` : 
      `Durante mi estancia en Flex, Ayude a crear Dashboards y programas de diferentes tipos,
      con el uso de C#, Net Framework, varias librerias de programación, y el uso de bases de datos en SQL.
      `,
    },
    {
      title: state.language === 'en' ? 'REACT DEVELOPER JR' : 'DESARROLLADOR REACT JR',
      company: 'INCOTECH SYSTEM JUL 2023 – NOW',
      description: state.language === 'en' ? `
        From July 2023 to the present, I have been working as a React Developer. During this time, 
        my role has involved translating design concepts into functional code, creating reusable 
        React components to build dynamic and responsive user interfaces. I have been responsible 
        for seamlessly integrating these components with backend services to ensure a cohesive 
        user experience.
      ` : 
      `
        Desde Julio 2023 hasta el presente, He estado trabajando como Desarrollador en React.Durante este tiempo,
        Mi rol ha involucrado la traducción de diseños conceptuales en codigo funcional, creando componentes React reusables
        para la creacion de interfaces dinamicas y responsivas.He tenido la responsabilidad de integrar los componentes con servicios de backend garantizando
        la coherencia y experiencia del usuario.
      `,
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={cardsContainerStyle}>
          {workExperiences.map((experience, index) => (
            <div key={index} style={cardStyle}>
              <h2 style={fontH1}>{experience.title}</h2>
              <p style={fontP}>{experience.company}</p>
              <p style={fontP}>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
