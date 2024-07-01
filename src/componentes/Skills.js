import React from 'react';
import { useAppContext } from './AppContext';
import logoReact from '../logos/logoReact.png';
import logoJS from '../logos/logoJS.png';
import logoC from '../logos/logoC.png';
import logoCmas from '../logos/logoCmas.png';
import logoJava from '../logos/logoJava.png';
import logoAngular from '../logos/logoAngular.png';
import logoHTML from '../logos/logoHTML.png';
import logoNodejs from '../logos/logoNodejs.png';
import logoNextjs from '../logos/logoNextjs.png';
import logoPHP from '../logos/logoPHP.png';
import logoSQL from '../logos/logoSQL.png';
import { Card, Row, Col, Typography } from "antd";


const Skills = () => {
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
  };

  const fontH1 = {
    color: "white",
    margin: "10px",
    textShadow: "2px 2px 4px black",
  };

  const fontP = {
    color: "white",
    //margin: "10px",
    fontSize: "20px",
    textShadow: "1px 1px 2px black",
  };

  const image={
    width:"40px",
  }

  const { Title, Text } = Typography;
  const { state } = useAppContext();


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



  return (
    <div style={divStyle}>
      <Row gutter={[16, 16]} justify="center">
        {programmingSkills.map((skill, index) => (
          <Col
            key={index}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            style={{ display: "flex", justifyContent: "center" ,textAlign:"center" }}
          >
            <Card style={cardStyle}>
              <Title level={4} style={fontH1}>
                {skill.language}
              </Title>
              <Text style={fontP}><img src={skill.logo} style={image}/></Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Skills;
