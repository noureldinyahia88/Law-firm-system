import React from "react";
import Sidebar from "../../component/ui/sidebar";
import Header from "../../component/ui/Header";
import styled from "styled-components";
import Insights from "../../component/AdminComponent/Insights";
import theme from "../../variables";
import UserCard from "../../component/AdminComponent/UserCard";
import arrow from "../../assets/V.png";

const DashboardWrapper = styled.div`
  display: flex;
  background-color: #f7f6f9;
  width: 1442px;
  border-radius: 12px;
`;

const DasdboardContent = styled.div`
  border-left: 1px solid ${theme.grayColor};
`;

const Content = styled.div``;

const Container = styled.div`
  width: 1058px;
  max-width: 100%;
  margin: 0 auto;
`;

const ManageUserWrapper = styled.div`
  display: flex;
  padding: 20px;
  gap: 20px;
  margin-bottom: 20px;
`;
const UsersWrapper = styled.div`
  position: relative;
  background-color: ${theme.whiteColor};
  width: 325px;
  height: 435px;
  border-radius: 12px;
  padding: 12px;
  /* overflow: scroll; */
`;
const UsersWrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const H3 = styled.h3`
  font-weight: 600;
  color: ${theme.blackColor};
  font-size: 14px;
`;
const Addbtn = styled.button`
  background-color: ${theme.blueColor};
  color: ${theme.whiteColor};
  font-weight: 400;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Arrowrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #e8e9ff;
  display: grid;
  place-items: center;
  position: absolute;
  bottom: 10px;
  left: 45%;
  right: 50%;
  cursor: pointer;
`;

const Wrapper = styled.div`
margin-top: 60px;
`;

const H2 = styled.h2`
  font-weight: 700;
  color: ${theme.blackColor};
  font-size: 24px;
  line-height: 24px;
  text-align: center;
`;
const ArrowImg = styled.img``;
const DashboardPage = () => {
  return (
    <DashboardWrapper>
      <Sidebar />
      <DasdboardContent>
        <Header />
        <Content>
          <Container>
            <Insights />
            <Wrapper>
              <H2>MANAGE USERS</H2>
              <ManageUserWrapper>
                <UsersWrapper>
                  <UsersWrapperHeader>
                    <H3>Admins</H3>
                    <Addbtn>+</Addbtn>
                  </UsersWrapperHeader>
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />

                  <Arrowrapper>
                    <ArrowImg src={arrow} alt="" />
                  </Arrowrapper>
                </UsersWrapper>

                <UsersWrapper>
                  <UsersWrapperHeader>
                    <H3>Lawyers</H3>
                    <Addbtn>+</Addbtn>
                  </UsersWrapperHeader>
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />

                  <Arrowrapper>
                    <ArrowImg src={arrow} alt="" />
                  </Arrowrapper>
                </UsersWrapper>

                <UsersWrapper>
                  <UsersWrapperHeader>
                    <H3>Lawers Assistants</H3>
                    <Addbtn>+</Addbtn>
                  </UsersWrapperHeader>
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />
                  <UserCard />

                  <Arrowrapper>
                    <ArrowImg src={arrow} alt="" />
                  </Arrowrapper>
                </UsersWrapper>
              </ManageUserWrapper>
            </Wrapper>
          </Container>
        </Content>
      </DasdboardContent>
    </DashboardWrapper>
  );
};

export default DashboardPage;
