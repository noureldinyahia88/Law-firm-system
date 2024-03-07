import React from "react";
import styled from "styled-components";
import theme from "../../variables";
import adminvector from "../../assets/Vector.png";

const InsightsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 67px;
`;

const InsightsrH2 = styled.h2`
  font-weight: 600;
  color: ${theme.blackColor};
  font-size: 24px;
  line-height: 24px;
  text-align: start;
`;

const Vector = styled.img``;

const BoxWrapper = styled.div`
  background-color: ${theme.whiteColor};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
  padding: 15px;
  border-radius: 8px;
`;

const Box = styled.div`
  background-color: #a6daf7;
  padding: 16px 24px;
  border-radius: 8px;
  height: 116px;
  width: 209px;
  &.seniorLawyer {
    background-color: #b79bff;
  }
  &.lawyer {
    background-color: #ffe5a5;
  }
  &.lawyerAssis {
    background-color: #c7ffa5;
  }
`;

const BoxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H2 = styled.h2`
  font-size: 12px;
  font-weight: 600;
`;

const BoxContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

const P = styled.p`
  font-size: 12px;
  color: ${theme.blackColor};
  font-weight: 600;
  margin-top: 17px;
`;

const H1Num = styled.h2`
  font-size: 18px;
  color: ${theme.blackColor};
  font-weight: 600;
`;

const Wrapper = styled.div``;
const Container = styled.div`
  /* max-width: 1060px;
margin: 0 auto; */
`;

const Insights = () => {
  return (
    <InsightsWrapper>
      <Container>
        <InsightsrH2>INSIGHTS</InsightsrH2>

        <BoxWrapper>
          <Box>
            <BoxHeader>
              <H2>Total Admins</H2>
              <Wrapper>
                <Vector src={adminvector} alt="" />
              </Wrapper>
            </BoxHeader>

            <BoxContent>
              <P>Current Value</P>
              <H1Num>10</H1Num>
            </BoxContent>
          </Box>

          <Box className="seniorLawyer">
            <BoxHeader>
              <H2>Total Admins</H2>
              <Wrapper>
                <Vector src={adminvector} alt="" />
              </Wrapper>
            </BoxHeader>

            <BoxContent>
              <P>Current Value</P>
              <H1Num>10</H1Num>
            </BoxContent>
          </Box>

          <Box className="lawyer">
            <BoxHeader>
              <H2>Total Admins</H2>
              <Wrapper>
                <Vector src={adminvector} alt="" />
              </Wrapper>
            </BoxHeader>

            <BoxContent>
              <P>Current Value</P>
              <H1Num>10</H1Num>
            </BoxContent>
          </Box>

          <Box className="lawyerAssis">
            <BoxHeader>
              <H2>Total Admins</H2>
              <Wrapper>
                <Vector src={adminvector} alt="" />
              </Wrapper>
            </BoxHeader>

            <BoxContent>
              <P>Current Value</P>
              <H1Num>10</H1Num>
            </BoxContent>
          </Box>
        </BoxWrapper>
      </Container>
    </InsightsWrapper>
  );
};

export default Insights;
