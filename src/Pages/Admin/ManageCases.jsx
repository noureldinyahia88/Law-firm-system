import React from "react";
import Header from "../../component/ui/Header";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Sidebar from "../../component/ui/sidebar";
import theme from "../../variables";
import plusImg from "../../assets/plus-square-fill.png";
import { NavLink } from "react-router-dom";
import ClientCard from "../../component/AdminComponent/ClientCard";
import CaseCard from "../../component/AdminComponent/CaseCard";
import LawerSidebar from "../../component/ui/LawerSidebar";

const Container = styled.div`
  max-width: 1550px;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  padding: 20px;
  overflow-y: scroll;
  height: 85vh;

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
const PageWrapper = styled.div`
  display: flex;
  background-color: #f7f6f9;
  width: 100%;
  border-radius: 12px;
`;
const H2 = styled.h2`
  font-weight: 700;
  color: ${theme.blueColor};
  font-size: 24px;
  line-height: 24px;
  text-align: start;
  margin-bottom: 20px;
`;

const ContentHeader = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.whiteColor};
  padding: 20px 15px;
  border-radius: 10px;
`;

const SearchWrapper = styled.div`
  display: flex;
  border: 2px solid #0b65e3;
  padding: 10px;
  width: 100%;
  max-width: 327px;
  border-radius: 8px;
  color: ${theme.blueColor};
`;

const SearchInput = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  &::placeholder {
    color: #0b65e3;
  }
  &:focus {
    outline: none;
  }
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
  text-decoration: none;
  cursor: pointer;
`;
const PlusIcon = styled.img``;
const BtnsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ManageLawyersWrapper = styled.div`
  border-left: 1px solid ${theme.grayColor};
  width: 85%;
`;

const ManageUserWrapper = styled.div`
  background-color: ${theme.whiteColor};
  width: 100%;
  border-radius: 15px;
  margin-top: 30px;
  padding-bottom: 20px;
`;

// const Wrapper = styled.div`
//   margin-top: 60px;
//   padding: 20px;
// `;

// const H2 = styled.h2`
//   font-weight: 700;
//   color: ${theme.blueColor};
//   font-size: 24px;
//   line-height: 24px;
//   text-align: start;
//   margin-bottom: 20px;
// `;

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

// const ContentHeader = styled.div`
//   margin-top: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background-color: ${theme.whiteColor};
//   padding: 20px 15px;
//   border-radius: 10px;
// `;

// table style
const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 35px;
`;
const H3Wrapper = styled.div`
  /* display: block; */
  &.width-100 {
    width: 100px;
  }
  &.width-200 {
    width: 200px;
  }
  &.width-250 {
    width: 250px;
  }
  &.width-150 {
    width: 250px;
  }
  &.width-220 {
    width: 250px;
  }
`;
const H3 = styled.h3`
  text-align: start;
  font-size: 15px;
  font-weight: 700;
  color: #374151;
`;
const WrapperContent = styled.div`
  padding: 0 20px;
`;

const ManageCases = () => {
  return (
    <PageWrapper>
      <LawerSidebar />
      <ManageLawyersWrapper>
        <Header />
        <Container>
          <Wrapper>
            <H2>Manage Cases</H2>
            <ContentHeader>
              <SearchWrapper>
                <IoSearch />
                <SearchInput
                  type="text"
                  placeholder="Search for a case 'id or email' ?"
                />
              </SearchWrapper>
              <BtnsWrapper>
                <Button to="/AddCase">
                  Add New Case
                  <PlusIcon src={plusImg} alt="" />
                </Button>
              </BtnsWrapper>
            </ContentHeader>

            <ManageUserWrapper>
              <HeaderMange>
                <TapsWrapper>
                  <Li>Cases</Li>
                </TapsWrapper>
              </HeaderMange>

              <TableHeader>
                <H3Wrapper className="width-100">
                  <H3>Case ID</H3>
                </H3Wrapper>
                <H3Wrapper className="width-200">
                  <H3>Title</H3>
                </H3Wrapper>
                <H3Wrapper className="width-250">
                  <H3>Case Ctegory</H3>
                </H3Wrapper>
                <H3Wrapper className="width-150">
                  <H3>Created At</H3>
                </H3Wrapper>
                <H3Wrapper className="width-150">
                  <H3>Case State</H3>
                </H3Wrapper>
                <H3Wrapper className="width-220">
                  <H3>Description</H3>
                </H3Wrapper>
              </TableHeader>

              <WrapperContent>
                <CaseCard />
                <CaseCard />
                <CaseCard />
                <CaseCard />
              </WrapperContent>
            </ManageUserWrapper>
          </Wrapper>
        </Container>
      </ManageLawyersWrapper>
    </PageWrapper>
  );
};

export default ManageCases;
