import React from "react";
import styled from "styled-components";
import userImg from "../../assets/Frame 11664.png";
import edit from "../../assets/edit-2-fill.png";
import trash from "../../assets/trash-fill.png";
import theme from "../../variables";

const UserCardV2Wrapper = styled.div`
  background-color: #f0f4fa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border-radius: 15px;
  text-align: start;
  padding: 15px 10px;
`;
const UserDeatailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Wrapper = styled.div``;
const Img = styled.img``;
const UserName = styled.div``;
const H3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
  color: #6b7280;
`;
const P = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  color: #6b7280;
`;
const UserBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${theme.blueColor};
  border: none;
  color: ${theme.whiteColor};
  font-family: 600;
  font-size: 18px;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  &.delete {
    background-color: #ffd8d8;
    color: #ff1616;
  }
`;

const UserCardV2 = ({firstName, lastName, email, role, active, global}) => {
  return (
    <UserCardV2Wrapper>
      <UserDeatailsWrapper>
        <Wrapper>
          <Img src={userImg} alt="" />
        </Wrapper>
        <UserName>
          <H3>{firstName}</H3>
          <P>{role}</P>
        </UserName>
      </UserDeatailsWrapper>

      <UserBtns>
        <Button>
          Edit <Img src={edit} alt="" />
        </Button>
        <Button className="delete">
          Delete <Img src={trash} alt="" />
        </Button>
      </UserBtns>
    </UserCardV2Wrapper>
  );
};

export default UserCardV2;
