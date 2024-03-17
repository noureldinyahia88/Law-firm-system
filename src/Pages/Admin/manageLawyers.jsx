import React from "react";
import Header from "../../component/ui/Header";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import Sidebar from "../../component/ui/sidebar";
import theme from "../../variables";
import plusImg from "../../assets/plus-square-fill.png";
import UsersCard from "../../component/AdminComponent/UsersCard";

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
const Button = styled.button`
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
const ManageLawyerContent = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const PaginationWrapper = styled.div`
  margin-top: 40px;
`;
const ResultP = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${theme.gray700};
  text-align: start;
`;

const ManageLawyers = () => {
  return (
    <PageWrapper>
    <Sidebar />
    <ManageLawyersWrapper>
      <Header />
      <Container>
        <Wrapper>
          <H2>Manage Lawers</H2>
          <ContentHeader>
            <SearchWrapper>
              <IoSearch />
              <SearchInput
                type="text"
                placeholder="Search for a lawer 'id or email' ?"
              />
            </SearchWrapper>
            <BtnsWrapper>
              <Button>
                Add New Lawer
                <PlusIcon src={plusImg} alt="" />
              </Button>
            </BtnsWrapper>
          </ContentHeader>

          <ManageLawyerContent>
            <UsersCard />
            <UsersCard />
            <UsersCard />
            <UsersCard />
            <UsersCard />
            <UsersCard />
            <UsersCard />
            <UsersCard />

            <PaginationWrapper>
              <ResultP>Showing 1 to 813 entries</ResultP>
            </PaginationWrapper>
          </ManageLawyerContent>
        </Wrapper>
      </Container>
    </ManageLawyersWrapper>
  </PageWrapper>
  );
};

export default ManageLawyers;
