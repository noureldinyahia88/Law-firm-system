import React from "react";
import styled from "styled-components";
import theme from "../../variables";
import adminvector from "../../assets/vectoradmin.png";
import sinvector from "../../assets/Frame 12262.png";
import lawvector from "../../assets/Vector3.png";
import lawAssvector from "../../assets/carbon_ibm-watson-assistant.png";

const InsightsWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 67px;
`;

const InsightsrH2 = styled.h2`
  font-weight: 600;
  color: ${theme.blueColor};
  font-size: 24px;
  line-height: 24px;
  text-align: start;
`;

const Vector = styled.img``;

const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const Box = styled.div`
  display: flex;
  background-color: #a6daf7;
  padding: 16px 24px;
  border-radius: 8px;
  height: 140px;
  width: 300px;
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
  gap: 20px;
`;

const H2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: ${theme.gray700};
  text-align: start;
`;

const BoxContent = styled.div``;

const H1Num = styled.h2`
  font-size: 22px;
  color: ${theme.gray700};
  font-weight: 600;
  margin: 0;
  text-align: start;
`;

const Wrapper = styled.div``;
const Container = styled.div`

`;

const Insights = () => {
  return (
    <InsightsWrapper>
      <Container>
        <InsightsrH2>Dashboard</InsightsrH2>

        <BoxWrapper>
          <Box>
            <BoxHeader>
              <Wrapper>
                <Vector src={adminvector} alt="" />
              </Wrapper>
              <BoxContent>
                <H2>Total Admins</H2>
                <H1Num>10</H1Num>
              </BoxContent>
            </BoxHeader>
          </Box>

          <Box className="seniorLawyer">
            <BoxHeader>
              <Wrapper>
                <Vector src={sinvector} alt="" />
              </Wrapper>
              <BoxContent>
                <H2>Total Senior Lawyers</H2>
                <H1Num>10</H1Num>
              </BoxContent>
            </BoxHeader>
          </Box>

          <Box className="lawyer">
            <BoxHeader>
              <Wrapper>
                <Vector src={lawvector} alt="" />
              </Wrapper>
              <BoxContent>
                <H2>Total Lawyers</H2>
                <H1Num>10</H1Num>
              </BoxContent>
            </BoxHeader>
          </Box>

          <Box className="lawyerAssis">
            <BoxHeader>
              <Wrapper>
                <Vector src={lawAssvector} alt="" />
              </Wrapper>
              <BoxContent>
                <H2>Total Lawyers Assistatns</H2>
                <H1Num>10</H1Num>
              </BoxContent>
            </BoxHeader>
          </Box>
        </BoxWrapper>
      </Container>
    </InsightsWrapper>
  );
};

export default Insights;
