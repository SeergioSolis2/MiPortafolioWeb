import React, { useEffect, useState } from 'react';
import axios from 'axios';
import backgroundImage from './Background1.jpg';
import { useAppContext } from './AppContext';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/SeergioSolis2/repos');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '92vh',
    top: '2vh',
    boxSizing: 'border-box',
    overflow: 'auto',
    backgroundImage: `url(${backgroundImage})`,
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
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    overflowX: 'auto',
    overflowY: 'auto', // Añadido para permitir el desplazamiento vertical
  };

  const projectsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(20em, 1fr))', // Ajuste para pantallas grandes
  
    gap: '20px',
    marginTop: '20px',
  
    '@media screen and (max-width: 600px)': {
      gridTemplateColumns: '1fr', // Cambio para pantallas más pequeñas
    },
    '@media screen and (min-width: 601px) and (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(15em, 1fr))', // Ajuste para pantallas medianas
    },
  };

  const projectStyle = {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    color: 'white',
    wordWrap: 'break-word',
    margin: '10px',
    textShadow: '2px 2px 4px black',
  };

  const fontP = {
    color: 'white',
    margin: '10px',
    fontSize: '20px',
    textShadow: '1px 1px 2px black',
    wordWrap: 'break-word',
  };

  const { state, dispatch } = useAppContext();

  return (
    <div style={containerStyle}>
      
        <h1 style={titleStyle}>{state.language === "en" ? "GitHub Repositories" : "Repositorios de Github"}</h1>
        <div style={projectsContainerStyle}>
          {projects.map((project) => (
            <div key={project.id} style={projectStyle}>
              <h2 style={titleStyle}>{project.name}</h2>
              <p style={fontP}>{project.description}</p>
              <a style={fontP} href={project.html_url} target="_blank" rel="noopener noreferrer">
                {state.language === "en" ? "View on GitHub" : "Ver en GitHub"}
              </a>
            </div>
          ))}
        </div>
      </div>

  );
};

export default Projects;
