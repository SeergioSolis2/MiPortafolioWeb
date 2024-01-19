import React from 'react';
import { useAppContext } from './AppContext';

const Presentation = () => {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '95vh',
    border: '5px solid black',
    boxSizing: 'border-box',
    overflow: 'hidden',
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

  const Name_es = "Hola soy Sergio Eduardo Solis Hernandez, Desarrollador Jr";
  const Name_en= "Hi I'm Sergio Eduardo Solis Hernandez, Developer Jr";

  const { state, dispatch } = useAppContext();

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>{state.language === 'en'? Name_en : Name_es}</h1>
        <p>Descripción breve sobre quién soy y lo que hago.</p>
      </div>
    </div>
  );
}

export default Presentation;
