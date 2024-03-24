import React from "react";
import styled from "styled-components";
import userImg from "../../assets/Frame 11664.png";
import edit from "../../assets/edit-2-fill.png";
import trash from "../../assets/trash-fill.png";
import theme from "../../variables";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteAdmin, deleteLawer, queryClient } from "../Https/dashboard";

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

const UserCardLawyerV2 = ({
  id,
  firstName,
  lastName,
  email,
  role,
  active,
  global,
  onClick,
}) => {
  const handleEdit = () => {
    onClick(id);
    localStorage.setItem("ClickedAdminIdToDelete", id);
  };

  // *******************************delete Admin*********************************************
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteLawer,
    // onMutate:()=>{
    //   queryClient.invalidateQueries({
    //     queryKey: ["admins"],
    //   });
    // },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lawyers"],
      });
      console.log("suc");
    },
  });

  function handleDelete() {
    onClick(id);
    localStorage.setItem("ClickedLawyerIdToDelete", id);
    deleteMutate({ id: localStorage.getItem("ClickedLawyerIdToDelete") });
  }

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
        <Button onClick={handleEdit}>
          Edit <Img src={edit} alt="" />
        </Button>
        <Button className="delete" onClick={handleDelete}>
          Delete <Img src={trash} alt="" />
        </Button>
      </UserBtns>
    </UserCardV2Wrapper>
  );
};

export default UserCardLawyerV2;
