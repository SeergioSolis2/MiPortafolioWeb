// Layout.js
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Presentation from './Presentation';

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
`;


const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
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
  return (
    <LayoutWrapper>
        <Navbar/>
      <ContentWrapper>
        <ContentArea1>
          <Presentation/>
        </ContentArea1>
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export default Layout;
