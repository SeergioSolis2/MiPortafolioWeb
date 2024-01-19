import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBars } from 'react-icons/fa';
import Switch from 'react-switch';
import { useAppContext } from './AppContext';
import Perfil from './Perfil.jpg'

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-width: 300px;
  max-width: 300px;

  @media screen and (max-width: 768px) {
    min-width: auto;
    max-width: 100%;
  }
`;

const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
  border: 5px solid white;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
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

  const handleOptionClick = (option) => {
    dispatch({ type: 'SELECT_NAVBAR_OPTION', payload: option });
    setNavbarVisibility(!isNavbarVisible);
  };

  return (
    <>
      <FaBars
        style={{
          color: isNavbarVisible ? 'white' : 'black',
          fontSize: '2rem',
          cursor: 'pointer',
          marginTop: '10px',
          position: 'absolute',
          marginLeft: '10px',
        }}
        onClick={toggleNavbar}
      />
      {isNavbarVisible && (
        <NavbarWrapper>
          <ProfileImageWrapper>
            <ProfileImage src={Perfil} alt="Foto de perfil" />
          </ProfileImageWrapper>
          <Logo>Sergio Eduardo Solis Hernandez</Logo>
          <Subtitle>{state.language === 'en' ? 'Developer Jr' : 'Desarrollador Jr'}</Subtitle>
          <DividerLine />
          <NavLinks>
            <NavLink onClick={() => handleOptionClick('Option1')}>
              {state.language === 'en' ? 'About me' : 'Acerca de mi'}
            </NavLink>
            <NavLink onClick={() => handleOptionClick('Option2')}>
              {state.language === 'en' ? 'Work Experience' : 'Experiencia'}
            </NavLink>
            <NavLink onClick={() => handleOptionClick('Option3')}>
              {state.language === 'en' ? 'Skills' : 'Habilidades'}
            </NavLink>
            <NavLink onClick={() => handleOptionClick('Option4')}>
              {state.language === 'en' ? 'Projects' : 'Proyectos'}
            </NavLink>
            <NavLink onClick={() => handleOptionClick('Option5')}>
              {state.language === 'en' ? 'Contact' : 'Contacto'}
            </NavLink>
          </NavLinks>
          <SocialIcons>
            {/* <SocialIcon href="https://www.facebook.com/sergio.solis.9843/">
              <FaFacebook />
            </SocialIcon> */}
            <SocialIcon href="https://twitter.com/sergiosolis750/">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/sergio-eduardo-solis-hernandez-508028240/">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/seergiosolis/">
              <FaInstagram />
            </SocialIcon>
          </SocialIcons>
          <LanguageSwitch>
            <SwitchLabel>
              {state.language === 'en' ? 'Inglés / English' : 'Español / Spanish'}
            </SwitchLabel>
            <Switch
              onColor="#ffc107" // Color cuando está en posición "on"
              offColor="#333" // Color cuando está en posición "off"
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
