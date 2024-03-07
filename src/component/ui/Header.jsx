import React from "react";
import styled from "styled-components";
import theme from "../../variables";
import { IoMdNotificationsOutline } from "react-icons/io";

import userImage from "../../assets/Ellipse 40.png";
const HeaderWrapper = styled.div`
  width: 100%;
  /* width: 1082px; */
  background-color: ${theme.whiteColor};
  border-radius: 0 12px 0 0;
`;
const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
`;
const HeaderH2 = styled.h2`
  font-weight: 600;
  color: ${theme.blackColor};
  font-size: 20px;
`;
const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const SearchInput = styled.input`
  background-color: #f7f6f9;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 10px;
  width: 344px;
`;
const Img = styled.img``;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <HeaderH2>Hello Mattio,</HeaderH2>

          <RightContent>
            <SearchInput placeholder="Search within system..." />

            <IoMdNotificationsOutline
              style={{ fontSize: "24px", cursor: "pointer" }}
            />

            <Img src={userImage} alt />
          </RightContent>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
