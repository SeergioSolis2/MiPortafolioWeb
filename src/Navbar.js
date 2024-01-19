// Navbar.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Switch from 'react-switch';
import { useAppContext } from './AppContext';
import { FaBars } from 'react-icons/fa';


const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-width:300px;
  max-width:300px;
`;

const ProfileImageWrapper = styled.div`
  width: 200px; 
  height: 200px; 
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
  border:5px solid white;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align:center;
  margin-bottom:5px;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align:center;
`;

const NavLink = styled.a`
color: white;
  text-decoration: none;
  margin: 10px 0px;
  transition: color 0.3s ease;
  padding: 10px;
  border: 2px solid white;
  border-radius: 20px;

  &:hover {
    color: #ffc107;
  }
`;

const Subtitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const DividerLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin: 10px 0;
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 10px;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffc107;
  }
`;

const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const SwitchLabel = styled.label`
  color: white;
  margin-right: 5px;
`;

const Navbar = () => {

  const { state, dispatch } = useAppContext();
  const [isNavbarVisible, setNavbarVisibility] = React.useState(true);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };

  const handleLanguageChange = () => {
    const newLanguage = state.language === 'es' ? 'en' : 'es';
    console.info(newLanguage);
    dispatch({ type: 'CHANGE_LANGUAGE', payload: newLanguage });
  };

  return (
    <>
    <FaBars style={{ color: isNavbarVisible ?'white' : 'black' , fontSize: '2rem' , cursor: 'pointer' ,marginTop: '10px' ,position: 'absolute' , marginLeft: '10px' }} onClick={toggleNavbar} />
    {isNavbarVisible && (
      <NavbarWrapper>
      <ProfileImageWrapper>
        <ProfileImage src="https://i.pinimg.com/236x/a9/44/5d/a9445d4435222d7f4783609714b99fb3.jpg" alt="Foto de perfil" />
      </ProfileImageWrapper>
      <Logo>Sergio Eduardo Solis Hernandez</Logo>
      <Subtitle>Desarrollador Jr</Subtitle>
      <DividerLine/>
      <NavLinks>
        <NavLink href="#inicio">Acerca de Mi</NavLink>
        <NavLink href="#proyectos">Experiencia</NavLink>
        <NavLink href="#habilidades">Habilidades</NavLink>
        <NavLink href="#proyectos">Proyectos</NavLink>
        <NavLink href="#contacto">Contacto</NavLink>
      </NavLinks>
      <SocialIcons>
        <SocialIcon href="https://facebook.com"><FaFacebook /></SocialIcon>
        <SocialIcon href="https://twitter.com"><FaTwitter /></SocialIcon>
        <SocialIcon href="https://linkedin.com"><FaLinkedin /></SocialIcon>
        <SocialIcon href="https://instagram.com"><FaInstagram /></SocialIcon>
    </SocialIcons>
    {/* <DividerLine /> */}
    <LanguageSwitch>
    <SwitchLabel>Modo en Inglés:</SwitchLabel>
    <Switch
        onColor="#ffc107" // Color cuando está en posición "on"
        offColor="#333"    // Color cuando está en posición "off"
        onChange={handleLanguageChange}
        checked={state.language === 'en'}  
    />
</LanguageSwitch>
    </NavbarWrapper>
    )}
    </>
  );
};

export default Navbar;
