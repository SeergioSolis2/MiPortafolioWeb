import React from "react";
import { Card, Row, Col, Typography } from "antd";
import { useAppContext } from "./AppContext";
import { border } from "@chakra-ui/react";

const Experience = () => {
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
    border: "0px solid white",
    lineHeight: "0.1em",
    backdropFilter: "blur(10px)",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)"
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

  const { Title, Text } = Typography;
  const { state } = useAppContext();

  const workExperiences = [
    {
      title: state.language === "en" ? "C# DEVELOPER" : "DESARROLLADOR C#",
      company: "FLEXTRONICS AGUASCALIENTES (JANUARY 2022 - JUNE 2023)",
      description:
        state.language === "en"
          ? `During my time at Flex, I helped create dashboards and programs of various types using C#, .Net Framework, 
          and several programming libraries. Additionally, I worked with SQL Server databases. 
          In some important projects, I also used additional libraries for specific functions, such as generating PDF files and QR codes.
          The most significant projects I was involved in focused on tracking packages, metrics, and assembly and production time in different areas. 
          This involved developing systems that allowed tracking the movement of packages along the supply chain, analyzing data to assess the performance 
          and efficiency of different processes, and optimizing production and assembly times in various areas of the company.`
          : `Durante mi tiempo en Flex, ayudé a crear paneles de control y
            programas de diversos tipos, utilizando C#, .Net Framework y
            varias bibliotecas de programación. Además, utilicé bases de
            datos SQL Server. En algunos proyectos importantes, también
            trabajé con bibliotecas adicionales para funciones específicas,
            como la generación de archivos PDF y códigos QR.
            Los proyectos más significativos en los que estuve involucrado
            se centraron en el seguimiento de paquetes, métricas y el tiempo
            de ensamblaje y producción en diferentes áreas. Esto implicó
            desarrollar sistemas que permitieran rastrear el movimiento de
            paquetes a lo largo de la cadena de suministro, analizar datos
            para evaluar el rendimiento y la eficiencia de diferentes procesos,
            y optimizar los tiempos de producción y ensamblaje en diversas
            áreas de la empresa.`,
    },
    {
      title:
        state.language === "en"
          ? "REACT DEVELOPER JR"
          : "DESARROLLADOR JR REACT",
      company: "INCOTECH SYSTEM (JULY 2023 - MARCH 2024) ",
      description:
        state.language === "en"
          ? `During my time as a React Developer from July 2023 to the present, 
          I have played a crucial role in translating design concepts into functional code. 
          This involves not only understanding the aesthetics and usability of the design but also implementing them effectively in the application. 
          I have worked on creating highly reusable React components, which means these elements can be easily adapted and reused in different parts of the application, 
          thereby enhancing development efficiency and maintaining consistency in the user interface.
          To further improve the quality and functionality of my projects, I have integrated technologies such as Node.js
          , Next.js, and NX. In addition to working on the frontend, I have been responsible for cohesively integrating these components with backend services. 
          This involves designing and consuming APIs that provide the necessary data for the application. During this process, 
          I have gained experience using APIs such as SUPABASE and STRIPE.
      `
          : `Durante mi tiempo como Desarrollador de React desde julio de
            2023 hasta la fecha actual, he desempeñado un papel crucial en
            la traducción de los conceptos de diseño en código funcional.
            Esto implica no solo comprender la estética y la usabilidad del
            diseño, sino también implementarlos de manera efectiva en la
            aplicación. He trabajado en la creación de componentes de React
            altamente reutilizables, lo que significa que estos elementos
            pueden ser fácilmente adaptados y reutilizados en diferentes
            partes de la aplicación, lo que a su vez mejora la eficiencia del
            desarrollo y mantiene la coherencia en la interfaz de usuario.
            Para mejorar aún más la calidad y la funcionalidad de mis
            proyectos, he integrado tecnologías como Node JS, Next JS y
            NX. Además de trabajar en el frontend, he sido responsable de
            integrar estos componentes de manera cohesiva con los
            servicios backend. Esto implica diseñar y consumir API's que
            proporcionen los datos necesarios para la aplicación. Durante
            este proceso, he adquirido experiencia en el uso de API's como
            SUPABASE y STRIPE.
      `,
    },
    {
      title:
        state.language === "en"
          ? "FULL STACK DEVELOPER"
          : "DESARROLLADOR FULL STACK",
      company: "HAT MEDIA SERVICES (APRIL 2024 - JULY 2024)",
      description:
        state.language === "en"
          ? `As a Full Stack Developer at HAT Media Services, I have played a pivotal role in designing and developing advanced web applications
           for internal processes related to subtitling films and series. My work has involved using technologies such as Laravel for backend development,
           Node.js for scalable service implementation, and React for creating dynamic and responsive user interfaces. Additionally, 
           I have effectively managed cloud services using AWS and its APIs, including utilizing AWS buckets for storage and data management. 
           My comprehensive experience has enabled me to contribute across the entire software development lifecycle, ensuring innovative, 
           high-quality solutions that meet the requirements and expectations of our clients.`
          : 
          `Como Desarrollador Full Stack en HAT Media Services, he desempeñado un papel fundamental en el diseño 
          y desarrollo de aplicaciones web avanzadas para el proceso interno de subtitulación de películas y series. 
          Mi trabajo ha involucrado el uso de tecnologías como Laravel para el desarrollo backend, Node.js para la implementación de servicios escalables, 
          y React para la creación de interfaces de usuario dinámicas y responsivas. 
          Además, he gestionado eficazmente servicios en la nube utilizando AWS y sus APIs, incluyendo el uso de buckets de AWS para el almacenamiento y gestión de datos críticos.
          Mi experiencia integral me ha permitido contribuir en todas las etapas del ciclo de vida del desarrollo de software, asegurando soluciones innovadoras y de alta calidad
          que cumplen con los requisitos y expectativas de nuestros clientes.`,
    },
    {
      title:
        state.language === "en"
          ? "JAVA DEVELOPER"
          : "DESARROLLADOR JAVA",
      company: "INEGI (JUNE 2024 - NOW)",
      description:
        state.language === "en"
          ? `In my role as a Java Developer at INEGI, I am working the 2025 census project,
           utilizing Oracle, PrimeFaces, and Java technologies for 
           the development of a critical website for data collection and analysis. 
           I specialize in designing and implementing robust solutions that ensure accuracy and efficiency in handling large volumes of data. 
           My work involves close collaboration with multidisciplinary teams to ensure the website meets the quality and security standards required by INEGI, 
           providing tools that facilitate the capture, validation, and visualization of critical data for the national census.`
          : 
          `En mi rol como Desarrollador Java en el INEGI, estoy trabajando el proyecto intercensal 2025, 
          donde mi responsabilidad principal es utilizar tecnologías como Oracle, PrimeFaces y Java 
          para el desarrollo de un sitio web crucial para la recolección y análisis de datos estadísticos. 
          Me especializo en el diseño e implementación de soluciones robustas que garantizan la precisión 
          y la eficiencia en la manipulación de grandes volúmenes de datos. 
          Mi trabajo implica colaborar estrechamente con equipos multidisciplinarios para asegurar que el sitio web cumpla con los estándares de calidad 
          y seguridad requeridos por el INEGI, proporcionando herramientas que faciliten la captura, validación 
          y visualización de datos críticos para el censo nacional.`,
    },
  ];

  return (
    <div style={divStyle}>
      <Row gutter={[16, 16]} justify="center">
        {workExperiences.map((experience, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card style={cardStyle}>
              <Title level={4} style={fontH1}>
                {experience.title}
                <br />
                {experience.company}
              </Title>
              <Text style={fontP}>{experience.description}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Experience;
