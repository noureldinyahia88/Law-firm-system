import React, { useState } from "react";
import Sidebar from "../../component/ui/sidebar";
import Header from "../../component/ui/Header";
import styled from "styled-components";
import Insights from "../../component/AdminComponent/Insights";
import theme from "../../variables";

import plusImg from "../../assets/plus-square-fill.png";
import UserCardV2 from "../../component/AdminComponent/UserCardV2";
import { NavLink } from "react-router-dom";

const PageWrapper = styled.div`
  display: flex;
  background-color: #f7f6f9;
  width: 100%;
  border-radius: 12px;
`;

const DasdboardContent = styled.div`
  border-left: 1px solid ${theme.grayColor};
  width: 85%;
  margin: 0 auto;
`;

const Content = styled.div`
  height: 90vh;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const Container = styled.div`
  max-width: 1550px;
  margin: 0 auto;
`;

const ManageUserWrapper = styled.div`
  background-color: ${theme.whiteColor};
  width: 100%;
  border-radius: 15px;
`;

const Wrapper = styled.div`
  margin-top: 60px;
  padding: 20px;
`;

const H2 = styled.h2`
  font-weight: 700;
  color: ${theme.blueColor};
  font-size: 24px;
  line-height: 24px;
  text-align: start;
  margin-bottom: 20px;
`;

// manage users style
const HeaderMange = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d1d5db;
  padding: 35px 35px 8px 35px;
`;
const TapsWrapper = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 0;
`;
const Li = styled.li`
  position: relative;
  font-size: 16px;
  font-weight: 600;
  color: ${theme.gray700};
  cursor: pointer;
  &.active {
    color: ${theme.blueColor};
  }
`;
const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme.blueColor};
  display: ${(props) => (props.isActive ? "block" : "none")};
  position: absolute;
  bottom: -125%;
`;
const Button = styled(NavLink)`
  background-color: ${theme.blueColor};
  color: ${theme.whiteColor};
  font-size: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
`;
const PlusIcon = styled.img``;
const TabContent = styled.div`
  padding: 20px;
`;

const UserWrapper = styled.div``;
const PaginationWrapper = styled.div`
  margin-top: 40px;
`;
const ResultP = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.gray700};
  text-align: start;
`;

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <PageWrapper>
      <Sidebar />
      <DasdboardContent>
        <Header />
        <Content>
          <Container>
            <Insights />
            <Wrapper>
              <H2>MANAGE USERS</H2>

              <ManageUserWrapper>
                <HeaderMange>
                  <TapsWrapper>
                    <Li
                      className={activeTab === 1 ? "active" : ""}
                      onClick={() => handleTabClick(1)}
                    >
                      Admins
                      <Border isActive={activeTab === 1} />
                    </Li>
                    <Li
                      className={activeTab === 2 ? "active" : ""}
                      onClick={() => handleTabClick(2)}
                    >
                      Lawyers
                      <Border isActive={activeTab === 2} />
                    </Li>
                    <Li
                      className={activeTab === 3 ? "active" : ""}
                      onClick={() => handleTabClick(3)}
                    >
                      Clints
                      <Border isActive={activeTab === 3} />
                    </Li>
                  </TapsWrapper>
                  {activeTab === 1 && (
                    <Button to="/AddAdminPage">
                      Add New Admin
                      <PlusIcon src={plusImg} alt="" />
                    </Button>
                  )}

                  {activeTab === 2 && (
                    <Button to="/AddLawer">
                      Add New Lawyer
                      <PlusIcon src={plusImg} alt="" />
                    </Button>
                  )}

                  {activeTab === 3 && (
                    <Button to="/addNewClient">
                      Add New Clint
                      <PlusIcon src={plusImg} alt="" />
                    </Button>
                  )}
                </HeaderMange>

                <TabContent>
                  {activeTab === 1 && (
                    <UserWrapper>
                      <UserCardV2 />
                      <UserCardV2 />
                      <UserCardV2 />
                      <UserCardV2 />
                      <UserCardV2 />
                      <UserCardV2 />

                      <PaginationWrapper>
                        <ResultP>Showing 1 to 813 entries</ResultP>
                      </PaginationWrapper>
                    </UserWrapper>
                  )}

                  {activeTab === 2 && (
                    <UserWrapper>
                      <UserCardV2 />

                      <PaginationWrapper>
                        <ResultP>Showing 1 to 813 entries</ResultP>
                      </PaginationWrapper>
                    </UserWrapper>
                  )}

                  {activeTab === 3 && (
                    <UserWrapper>
                      <UserCardV2 />
                      <UserCardV2 />

                      <PaginationWrapper>
                        <ResultP>Showing 1 to 813 entries</ResultP>
                      </PaginationWrapper>
                    </UserWrapper>
                  )}
                </TabContent>
              </ManageUserWrapper>
            </Wrapper>
          </Container>
        </Content>
      </DasdboardContent>
    </PageWrapper>
  );
};

export default DashboardPage;
