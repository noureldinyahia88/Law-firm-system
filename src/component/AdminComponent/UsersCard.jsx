import React, { useState } from "react";
import styled from "styled-components";
import { TfiMoreAlt } from "react-icons/tfi";
import theme from "../../variables";
import useImage from "../../assets/Rectangle 25.png";
import { NavLink } from "react-router-dom";

const CardWrapper = styled.div`
  border: 2px solid ${theme.blueColor};
  border-radius: 32px;
  width: 300px;
  padding: 15px;
  margin-top: 12px;

  /* &:last-child {
    margin-bottom: 50px;
  } */
`;

const CardHeader = styled.div`
  display: flex;
  align-items: self-start;
  justify-content: space-between;
`;
const StatueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5fd94b;
  border-radius: 8px;
  padding: 1px 3px;
`;

const Statue = styled.p`
  font-size: 8px;
  font-weight: 700;
`;

const ImageWrapper = styled.div`
  margin-top: -15px;
  width: 100px;
  height: 130px;
  border-radius: 0 0 116px 116px;
  background-color: #ccd1ff;
  position: relative;
`;

const ImageBorder = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
`;

const Image = styled.img``;

const BtsCard = styled.div`
  cursor: pointer;
  position: relative;
`;

const OptionsWrapper = styled.div`
  position: absolute;
  right: -55%;
  display: none;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #ccd1ff;
  padding: 10px;
  border-radius: 8px;
  gap: 10px;
  transition: display 0.5s ease;
  &.show {
    display: flex;
  }
`;

const Btn = styled.button`
  transition: color 0.5s ease;
  font-weight: 600;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${theme.blueColor};
  }
`;

const Btn2 = styled(NavLink)`
  transition: color 0.5s ease;
  font-weight: 600;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: ${theme.blueColor};
  }
`;

const Deatails = styled.div`
  /* Your styles for Deatails */
`;

const H2 = styled.h2`
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  margin: 10px;
`;

const P = styled.p`
  padding: 0;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const Span = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
const BoxSWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const Box = styled.div`
  padding: 15px;
  max-width: 80px;
  border-radius: 15px;
  background-color: #ccd1ff;
  text-align: center;
  display: grid;
  place-items: center;
`;

const H3 = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const UsersCard = ({
  id,
  firstName,
  lastName,
  email,
  role,
  active,
  global,
  phoneNo,
  createdAt,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const showOptionsWrapper = () => {
    setShowOptions(!showOptions);
  };
  return (
    <CardWrapper>
      <CardHeader>
        <StatueWrapper>
          <Statue>ACTIVE</Statue>
        </StatueWrapper>

        <ImageWrapper>
          <ImageBorder>
            <Image src={useImage} alt="Union" />
          </ImageBorder>
        </ImageWrapper>

        <BtsCard onClick={showOptionsWrapper}>
          <TfiMoreAlt style={{ color: "#D9D9D9", fontSize: "24px" }} />
          <OptionsWrapper className={`${showOptions ? "show" : ""}`}>
            <Btn2 to="/EditAdmin">Edit</Btn2>
            <Btn>Delete</Btn>
          </OptionsWrapper>
        </BtsCard>
      </CardHeader>

      <Deatails>
        <H2>{firstName}</H2>
        <P>
          Aduting <Span>({role})</Span>
        </P>
        <P>
          <Span>ID:</Span> {id}
        </P>
        <P>
          <Span>Phone:</Span> {phoneNo}
        </P>
        <P>
          <Span>Creation Date:</Span> {createdAt}
        </P>
        <P>
          <Span>Email:</Span> {email}
        </P>

        <BoxSWrapper>
          <Box>
            <H3>
              6 Years
              <br />
              experience
            </H3>
          </Box>

          <Box>
            <H3>
              10 Closed
              <br />
              cases
            </H3>
          </Box>

          <Box>
            {active ? (
              <H3>
                Current
                <br />
                available
              </H3>
            ) : (
              <H3>
                Not
                <br />
                available
              </H3>
            )}
          </Box>
        </BoxSWrapper>
      </Deatails>
    </CardWrapper>
  );
};

export default UsersCard;
