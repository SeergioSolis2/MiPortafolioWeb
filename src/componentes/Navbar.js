import Switch from "react-switch";
import { useAppContext } from "./AppContext";
import {
  UserOutlined,
  TrophyOutlined,
  PhoneOutlined,
  RocketOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "../css/Navbar.css";
import "flag-icons/css/flag-icons.css";
import { hover } from "@testing-library/user-event/dist/hover";
const { Item } = Menu;

const Navbar = () => {
  const { state, dispatch } = useAppContext();
  const [isNavbarVisible, setNavbarVisibility] = React.useState(true);

  // const toggleNavbar = () => {
  //   setNavbarVisibility(!isNavbarVisible);
  // };

  const handleLanguageChange = () => {
    const newLanguage = state.language === "es" ? "en" : "es";
    console.info(newLanguage);
    dispatch({ type: "CHANGE_LANGUAGE", payload: newLanguage });
  };

  // const handleOptionClick = (option) => {
  //   dispatch({ type: "SELECT_NAVBAR_OPTION", payload: option });
  //   setNavbarVisibility(!isNavbarVisible);
  // };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="menu">
          <Menu mode="horizontal" style={{ backgroundColor: "transparent" }}>
            <Item key="1" className="items" onClick={() => handleMenuClick("about-me")}>
              <UserOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "About me" : "Acerca de mi"}
            </Item>
            <Item key="2" className="items" onClick={() => handleMenuClick("experience")}>
              <TrophyOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "Work Experience" : " Experiencia"}
            </Item>
            <Item key="3" className="items" onClick={() => handleMenuClick("skills")}>
              {" "}
              <CodeOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "Skills" : "Habilidades"}
            </Item>
            <Item key="4" className="items" onClick={() => handleMenuClick("projects")}>
              {" "}
              <RocketOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "Projects" : "Proyectos"}
            </Item>
            <Item key="5" className="items" onClick={() => handleMenuClick("contact")}>
              {" "}
              <PhoneOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "Contact" : "Contacto"}
            </Item>
            <Item key="6" className="items" onClick={handleLanguageChange}>
              {" "}
              {state.language === "en" ? (
                <>
                <span
                  className="fi fi-us"
                  style={{ color: "white", fontSize: "25px" }}
                /> Inglés/English </>
              ) : (
                <>
                <span
                  className="fi fi-mx"
                  style={{ color: "white", fontSize: "25px" }}
                /> Español/Spanish </>
              )}
            </Item>
          </Menu>
        </div>
        <Button className="menu-button" type="primary" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer
          style={{ backgroundColor: "black", color: "white" }}
          title="Menú"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Menu
            mode="vertical"
            style={{ backgroundColor: "transparent" }}
            theme="dark"
          >
            <Item key="1" className="items" onClick={() => handleMenuClick("about-me")}>
              <UserOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "About me" : "Acerca de mi"}
            </Item>
            <Item key="2" className="items" onClick={() => handleMenuClick("experience")}>
              <TrophyOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "Work Experience" : " Experiencia"}
            </Item>
            <Item key="3" className="items" onClick={() => handleMenuClick("skills")}>
              {" "}
              <CodeOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "Skills" : "Habilidades"}
            </Item>
            <Item key="4" className="items" onClick={() => handleMenuClick("projects")}>
              {" "}
              <RocketOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "Projects" : "Proyectos"}
            </Item>
            <Item key="5" className="items" onClick={() => handleMenuClick("contact")}>
              {" "}
              <PhoneOutlined style={{ fontSize: "25px" }} />
              {state.language === "en" ? "Contact" : "Contacto"}
            </Item>
            <Item key="6" className="items" onClick={handleLanguageChange}>
              {" "}
              {state.language === "en" ? (
                <>
                <span
                  className="fi fi-us"
                  style={{ color: "white", fontSize: "25px" }}
                /> Inglés/English </>
              ) : (
                <>
                <span
                  className="fi fi-mx"
                  style={{ color: "white", fontSize: "25px" }}
                /> Español/Spanish </>
              )}
            </Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
