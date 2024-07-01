import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Typography } from "antd";
import { useAppContext } from "./AppContext";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/SeergioSolis2/repos"
        );
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching GitHub projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    margin: "20px",
  };

  const cardStyle = {
    width: "100%",
    backgroundColor: "transparent",
    border: "0px",
    color: "white",
    wordBreak: "break-word",
    border: "1px solid white",
    lineHeight: "0.1em",
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)"
  };

  const fontH1 = {
    color: "white",
    textShadow: "2px 2px 4px black",
  };

  const fontP = {
    color: "white",
    //margin: "10px",
    fontSize: "20px",
    textShadow: "1px 1px 2px black",
  };

  
  const fontUrl = {
    color: "aqua",
    //margin: "10px",
    fontSize: "20px",
  };

  const image = {
    width: "40px",
  };

  const { Title, Text } = Typography;
  const { state } = useAppContext();


  return (
    <div style={divStyle}>
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card style={cardStyle}>
              <Title level={4} style={fontH1}>
                {project.name}
              </Title>
              <Text style={fontP}>
                {project.description}
                <br />
                <hr/>
                <a
                  style={fontUrl}
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {state.language === "en" ? "View on GitHub" : "Ver en GitHub"}
                </a>
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
