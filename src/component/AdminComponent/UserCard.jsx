import React from "react";
import styled from "styled-components";
import { CgMoreVertical } from "react-icons/cg";
import userImg from "../../assets/amazon-icon-1 1.png";
import theme from "../../variables";

const UserCardWrapper = styled.div`

  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #83838344;
  padding-bottom: 10px;
`;
const UserDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
const Wrapper = styled.div``;
const UserImage = styled.img``;
const UserName = styled.div``;
const H3 = styled.h3`
  font-weight: 700;
  font-size: 12px;
  color: ${theme.blackColor};
  margin: 0;
`;
const P = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 10px;
  color: ${theme.grayColor};
  text-align: start;
`;
const UserBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 14%;
`;
const Edit = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: ${theme.blackColor};
  font-weight: 500;
`;
const Btn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const UserCard = () => {
  return (
    <UserCardWrapper>
      <UserDetailsWrapper>
        <Wrapper>
          <UserImage src={userImg} alt="" />
        </Wrapper>
        <UserName>
          <H3>Devon Lane</H3>
          <P>Admin</P>
        </UserName>
      </UserDetailsWrapper>

      <UserBtns>
        <Edit href="">Edit</Edit>
        <Btn>
          <CgMoreVertical style={{ fontSize: "18px" }} />
        </Btn>
      </UserBtns>

      
    </UserCardWrapper>
  );
};

export default UserCard;
