import React from 'react';
import { useAppContext } from './AppContext';
import backgroundImage from './Background1.jpg'

const Presentation = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '92vh',
    top: '2vh',
    // border: '5px solid black',
    boxSizing: 'border-box',
    overflow: 'hidden',
    backgroundImage:  `url(${backgroundImage})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center', 
  };

  const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'black',
    width: '100%',
  };

  const mobileContentStyle = {
    width: '80%',
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

  const Name_es = "Hola soy Sergio Eduardo Solis Hernandez, Desarrollador Jr";
  const Name_en= "Hi I'm Sergio Eduardo Solis Hernandez, Developer Jr";
  const Description_es=`
  Ingeniero en sistemas computacionales recien graduado con una formacion academica adecuada y
  con entusiasmo para aplicar mis conocimientos en un ambiente profesional. Con ganas de contribuir,
  evolucionar y crear un impacto positivo.
  `;
  const Description_en=`
  Recent Computer Systems Engineering graduate 
  with a strong academic background and 
  enthusiasm for applying knowledge in a 
  professional setting. Eager to contribute, evolve, 
  and make a positive impact.
  `;


  const { state, dispatch } = useAppContext();

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={fontH1}>{state.language === 'en'? Name_en : Name_es}</h1>
        <p style={fontP}>{state.language === 'en'? Description_en : Description_es}</p>
      </div>
    </div>
  );
}

export default Presentation;
