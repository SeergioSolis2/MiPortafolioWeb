// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Presentation from './Presentation';
import { useAppContext } from './AppContext';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import '../css/Layout.css'
import SeparatorComponent from './SeparatorComponent';
import {
  UserOutlined,
  TrophyOutlined,
  PhoneOutlined,
  RocketOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import Contact from './Contact';


const Layout = ({ children }) => {
  const { state, dispatch } = useAppContext();
  
  return (
    <div className="container">
      <div className='content'>
        <Navbar/>
        <div id="about-me">
        <SeparatorComponent icon={UserOutlined} title=  {state.language === "en" ? "About me" : "Acerca de mi"} /> 
        <Presentation/>
        </div>
        <div id="experience">
        <SeparatorComponent icon={TrophyOutlined} title=  {state.language === "en" ? "Work Experience" : "Experiencia"} /> 
        <Experience/>
        </div>
        <div id="skills">
        <SeparatorComponent icon={CodeOutlined} title=  {state.language === "en" ? "Skills" : "Habilidades"} /> 
        <Skills/>
        </div>
        <div id="projects">
        <SeparatorComponent icon={RocketOutlined} title=  {state.language === "en" ? "Projects" : "Proyectos"} /> 
        <Projects/>
        </div>
        <div id="contact">
        <SeparatorComponent icon={PhoneOutlined} title=  {state.language === "en" ? "Contact" : "Contacto"} /> 
        <Contact/>
        </div>
        </div>
    </div>
  );
};

export default Layout;
