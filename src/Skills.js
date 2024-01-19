import React from 'react';
import { useAppContext } from './AppContext';
import backgroundImage from './Background1.jpg';
import logoReact from './logos/logoReact.png';
import logoJS from './logos/logoJS.png';
import logoC from './logos/logoC.png';
import logoCmas from './logos/logoCmas.png';
import logoJava from './logos/logoJava.png';
import logoAngular from './logos/logoAngular.png';
import logoHTML from './logos/logoHTML.png';
import logoNodejs from './logos/logoNodejs.png';
import logoNextjs from './logos/logoNextjs.png';
import logoPHP from './logos/logoPHP.png';
import logoSQL from './logos/logoSQL.png';


const Skills = () => {
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
    position: 'absolute',
    overflowY: 'auto', // Añadido scroll vertical
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'black',
    width: '100%',
  };

  const skillsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const skillStyle = {
    width: '18%', // Ajusta el ancho del div del lenguaje
    padding: '10px', // Ajusta el padding del div del lenguaje
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    boxSizing: 'border-box',
  };

  const barContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '5px',
    height: '20px',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
  };

  const progressBarStyle = {
    backgroundColor: '#4CAF50',
    borderRadius: '5px',
    height: '100%',
  };

  const logoStyle = {
    width: '40px', // Ajusta el tamaño del logo
    marginRight: '10px',
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

  const programmingSkills = [
    { language: 'React', proficiency: 60, logo: logoReact },
    { language: 'JavaScript', proficiency: 60, logo: logoJS },
    { language: 'C#', proficiency: 65, logo: logoC },
    { language: 'C/C++', proficiency: 55, logo: logoCmas },
    { language: 'Java', proficiency: 55, logo: logoJava },
    { language: 'Angular', proficiency: 45, logo: logoAngular },
    { language: 'HTML5', proficiency: 70, logo: logoHTML },
    { language: 'Node.JS', proficiency: 45, logo: logoNodejs },
    { language: 'Next.JS', proficiency: 45, logo: logoNextjs },
    { language: 'PHP', proficiency: 55, logo: logoPHP },
    { language: 'SQL', proficiency: 45, logo: logoSQL },
  ];

  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  const chunkedSkills = chunkArray(programmingSkills, 4);

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <div style={skillsContainerStyle}>
          {chunkedSkills.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
              {row.map((skill, index) => (
                <div key={index} style={skillStyle}>
                  <img src={skill.logo} alt={`${skill.language} Logo`} style={logoStyle} />
                  <h2 style={fontH1}>{skill.language}</h2>
                  <div style={barContainerStyle}>
                    <div style={{ ...progressBarStyle, width: `${skill.proficiency}%` }}></div>
                  </div>
                  <p style={fontP}>{state.language==="en"?"Proficiency:":"Eficiencia:"} {skill.proficiency}%</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
