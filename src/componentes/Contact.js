import React from "react";
import { useAppContext } from "./AppContext";
import { Layout, Typography, Card } from "antd";

import CV from "../CV_SESH.pdf";
import CV_ESP from "../CV_SESH_ESP.pdf";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const divStyle = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "transparent",
  margin: "20px",
};

const Contact = () => {
  const { state } = useAppContext();

  return (
    <div style={divStyle}>
      <Card
        style={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
          border:"0px"
        }}
      >
        <Title
          level={2}
          style={{
            color: "white",
            textShadow: "2px 2px 4px black",
            textAlign: "center",
          }}
        >
          {state.language === "en"
            ? "Contact Information"
            : "Información de Contacto"}
        </Title>
        <div style={{ textAlign: "center" }}>
          <Paragraph
            style={{
              color: "white",
              textShadow: "1px 1px 2px black",
              fontSize: "20px",
            }}
          >
            {state.language === "en"
              ? "Email: sergioeduardosolishernandez@gmail.com"
              : "Correo Electrónico: sergioeduardosolishernandez@gmail.com"}
          </Paragraph>
          <Paragraph
            style={{
              color: "white",
              textShadow: "1px 1px 2px black",
              fontSize: "20px",
            }}
          >
            {state.language === "en"
              ? "Phone: 449 375 04 92"
              : "Teléfono: 449 375 04 92"}
          </Paragraph>
          <a
            href={state.language === "en" ? CV : CV_ESP}
            download={
              state.language === "en" ? "CV_SESH.pdf" : "CV_SESH_ESP.pdf"
            }
            style={{
              display: "inline-block",
              marginTop: "20px",
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            {state.language === "en" ? "Download CV" : "Descargar CV"}
          </a>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
