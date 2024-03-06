import React from 'react'
import Sidebar from '../../component/ui/sidebar'
import Header from '../../component/ui/Header'
import styled from 'styled-components';
import Insights from '../../component/AdminComponent/Insights';
import theme from '../../variables';


const DashboardWrapper = styled.div`
  display: flex;
  background-color: #F7F6F9;
  width: 1442px;
  border-radius: 12px;

`;

const DasdboardContent = styled.div`
   border-left:1px solid  ${theme.grayColor};
   
`;

const Content = styled.div`
  
`

const Container = styled.div`
  width: 1058px;
  max-width: 100%;
`;

const DashboardPage = () => {
  return (
    <DashboardWrapper>
        <Sidebar />
        <DasdboardContent>
            <Header />
            <Content>

            <Container>
            <Insights />
            </Container>
        
            </Content>
            
        </DasdboardContent>
    </DashboardWrapper>
  )
}

export default DashboardPage