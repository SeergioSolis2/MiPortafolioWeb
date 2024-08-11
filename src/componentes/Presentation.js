import React from "react";
import { useAppContext } from "./AppContext";
import { Card, Avatar, Row, Col } from "antd";
import {
  GithubOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import perfilPhoto from "../images/Perfil.jpg";
import "../css/Presentation.css";

const Presentation = () => {
  const { state } = useAppContext();

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "transparent",
    border: "0px",
    margin: "20px,20px,20px,20px",
  };

  const cardStyle = {
    width: "100%",
    backgroundColor: "transparent",
    border: "0px",
    color: "white", // Cambiado a negro para mejor visibilidad en fondo claro
    wordBreak: "break-word", 
  };

  const fontH1 = {
    color: "white",
    margin: "10px",
    textShadow: "2px 2px 4px black", // Agrega contorno negro al texto
  };

  const fontP = {
    color: "white",
    margin: "10px",
    fontSize: "20px",
    textShadow: "1px 1px 2px black", // Agrega contorno negro al texto
  };


  const avatarStyle = {
    width: "100%",
    maxWidth: 200,
    borderRadius: "50%",
  };

  const Name_es = "Sergio Eduardo Solis Hernandez , Desarrollador";
  const Name_en = "Sergio Eduardo Solis Hernandez , Developer";
  const Description_es = `
    Con dos años de experiencia en el ámbito de la Ingeniería en Sistemas Computacionales, 
    he desarrollado una sólida formación práctica y teórica, aplicando mis conocimientos en proyectos reales y desafiantes. 
    Mi trayectoria profesional me ha permitido contribuir significativamente a diversas iniciativas, mejorando mis habilidades y adaptándome rápidamente 
    a las necesidades del entorno laboral. Estoy entusiasmado por seguir evolucionando y tener un impacto positivo en la industria, aportando soluciones innovadoras y eficientes.
  `;
  const Description_en = `
   With two years of experience in the field of Computer Systems Engineering, 
   I have developed a solid practical and theoretical foundation, applying my knowledge to real 
   and challenging projects. My professional journey has allowed me to make significant contributions 
   to various initiatives, enhancing my skills and quickly adapting to the demands of the work environment. 
   I am eager to continue evolving and making a positive impact in the industry by delivering innovative and efficient solutions.
  `;

  return (
    <div style={divStyle}>
      <Card style={cardStyle}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={16}>
            <h1 style={fontH1}>
              {state.language === "en" ? Name_en : Name_es}
            </h1>
            <p style={fontP}>
              {state.language === "en" ? Description_en : Description_es}
            </p>
          </Col>
          <Col xs={24} sm={8} style={{ textAlign: "center" }}>
            <Avatar src={perfilPhoto} size={200} style={avatarStyle} />
          </Col>
          <Col span={24} style={{ marginRight: "20px" }}>
            <a href="https://github.com/SeergioSolis2" className="icon">
              <GithubOutlined key="Github"  className="icon"></GithubOutlined>
            </a>
            <a href="https://www.linkedin.com/in/sergio-eduardo-solis-hernandez-508028240/" className="icon">
              <LinkedinOutlined
                key="Linkedin"
                className="icon"
              ></LinkedinOutlined>
            </a>
            <a href="https://x.com/sergiosolis750/" className="icon">
              <TwitterOutlined
                key="twitter"
                className="icon"
              ></TwitterOutlined>{" "}
            </a>
            <a href="https://www.instagram.com/seergiosolis/" className="icon">
              <InstagramOutlined
                key="instagram"
                className="icon"
              ></InstagramOutlined>{" "}
            </a>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Presentation;
