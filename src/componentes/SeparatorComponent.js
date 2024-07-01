import React from "react";
import { Row, Col } from "antd";
import {
  UserOutlined,
  TrophyOutlined,
  PhoneOutlined,
  RocketOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const fontH1 = {
  color: "white",
  margin: "10px",
  textShadow: "2px 2px 4px black", // Agrega contorno negro al texto
};

const SeparatorComponent = ({ icon, title }) => (
  <Row
    justify="center"
    align="middle"
    style={{ marginBottom: "20px", textAlign: "center" }}
  >
    <Col span={12}>
      <div
        style={{
          borderBottom: "1px solid white",
          lineHeight: "0.1em",
          margin: "10px 10px 10px 10px",
          width: "100%",
        }}
      />
      <h1
        style={fontH1}
      >
        {React.createElement(icon, {
          style: { marginRight: "8px"},
        })}{" "}
        {/* Renderiza el ícono */}
        {title}
      </h1>
    </Col>
  </Row>
);

export default SeparatorComponent;
