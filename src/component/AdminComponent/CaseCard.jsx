import React from "react";
import styled from "styled-components";
import theme from "../../variables";
import eye from "../../assets/eye.png";

const ClientCardWrapper = styled.div`
  background-color: #f0f4fa;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin-bottom: 14px;

`;
const H3Wrapper = styled.div`
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
  &.content {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
const P = styled.p`
  text-align: start;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
`;

const Button = styled.button`
  background-color: ${theme.blueColor};
  color: ${theme.whiteColor};
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
`;
const Eyecon = styled.img``;

const CaseCard = () => {
  return (
    <ClientCardWrapper>
      <H3Wrapper className="width-100">
        <P>#23168000</P>
      </H3Wrapper>

      <H3Wrapper className="width-200">
          <P>Content distribute distribute stroke</P>
      </H3Wrapper>

      <H3Wrapper className="width-250">
        <P>JacobJonesw326@gmail.com</P>
      </H3Wrapper>

      <H3Wrapper className="width-150">
        <P>01234161683</P>
      </H3Wrapper>

      <H3Wrapper className="width-150">
        <P>Corporate Lawyer</P>
      </H3Wrapper>

      <H3Wrapper className="width-220">
        <Button>
        Show Description
          <Eyecon src={eye} alt="" />
        </Button>
      </H3Wrapper>
    </ClientCardWrapper>
  );
};

export default CaseCard;
