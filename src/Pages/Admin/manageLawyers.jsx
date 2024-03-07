import React from "react";
import Header from "../../component/ui/Header";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { CiFilter } from "react-icons/ci";
import Sidebar from "../../component/ui/sidebar";
import theme from "../../variables";

import UsersCard from "../../component/AdminComponent/UsersCard";

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
`;

const PageWrapper = styled.div`
  display: flex;
  background-color: #f7f6f9;
  width: 100%;
  border-radius: 12px;

`;

const ContentHeader = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid ${theme.blueColor};
  padding: 10px 15px;
  border-radius: 10px;
`;

const SearchWrapper = styled.div`
  display: flex;
  border: 2px solid ${theme.blueColor};
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
    color: ${theme.blueColor};
  }
  &:focus {
    outline: none;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap:wrap ;
`;

const Btn = styled.button`
  background-color: ${theme.blueColor};
  border: none;
  padding: 5px 20px;
  border-radius: 4px;
  color: ${theme.whiteColor};
  cursor: pointer;
`;

const ManageLawyersWrapper = styled.div`
  border-left: 1px solid ${theme.grayColor};
  width: 85%;
`;
const ManageLawyerContent = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  overflow: scroll;
  height: 800px;

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

const ManageLawyers = () => {
  return (
    <PageWrapper>
      <Sidebar />
      <ManageLawyersWrapper>
        <Header />
        <Container>
          <ContentHeader>
            <SearchWrapper>
              <IoSearch />
              <SearchInput
                type="text"
                placeholder="Search for a lawyer 'id or email' ?"
              />
            </SearchWrapper>
            <BtnsWrapper>
              <Btn>
                Filter <CiFilter />
              </Btn>
              <Btn>Add new +</Btn>
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
          </ManageLawyerContent>
        </Container>
      </ManageLawyersWrapper>
    </PageWrapper>
  );
};

export default ManageLawyers;
