// Layout.js
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Presentation from './Presentation';
import { useAppContext } from './AppContext';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;


const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #838383
`;

const ContentArea1 = styled.div`
  padding: 10px;
  margin-bottom: 20px;

`;

const ContentArea2 = styled.div`
  background-color: #e0e0e0;
  padding: 10px;
`;

const Layout = ({ children }) => {
  const { state, dispatch } = useAppContext();
  
  return (
    <LayoutWrapper>
        <Navbar/>
      <ContentWrapper>
        <ContentArea1>
          {state.selectedOption==="Option1" && (
            <Presentation/>
          )}
          {state.selectedOption==="Option2" && (
            <Experience/>
          )}
          {state.selectedOption==="Option3" && (
            <Skills/>
          )}
           {state.selectedOption==="Option4" && (
            <Projects/>
          )}
          {state.selectedOption==="Option5" && (
            <Contact/>
          )}
        </ContentArea1>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
