import React from "react";
import styled from "styled-components";
import clientimg from "../../assets/Frame 11664.png";
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
  /* gap: 20px; */
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
  font-weight: 500;
  color: #374151;
`;
const ImgWrapper = styled.div``;
const Img = styled.img``;
const DetailsWrapper = styled.div``;

const H3 = styled.h3`
  text-align: start;
  font-size: 20px;
  font-weight: 500;
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

const ClientCard = () => {
  return (
    <ClientCardWrapper>
      <H3Wrapper className="width-100">
        <P>#23168000</P>
      </H3Wrapper>
      <H3Wrapper className="width-250 content">
        <ImgWrapper>
          <Img src={clientimg} alt="" />
        </ImgWrapper>
        <DetailsWrapper>
          <H3>Jacob Jones</H3>
          <P>#15683</P>
        </DetailsWrapper>
      </H3Wrapper>
      <H3Wrapper className="width-100">
        <P>25</P>
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
          Show Comment
          <Eyecon src={eye} alt="" />
        </Button>
      </H3Wrapper>
    </ClientCardWrapper>
  );
};

export default ClientCard;
