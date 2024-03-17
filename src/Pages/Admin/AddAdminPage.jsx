import React from "react";
import styled from "styled-components";
import Sidebar from "../../component/ui/sidebar";
import Header from "../../component/ui/Header";
import theme from "../../variables";
import arrow from "../../assets/arrowhead-left.png";
import { NavLink } from "react-router-dom";

const AdminFormWrapper = styled.div`
  display: flex;
  background-color: #f7f6f9;
  width: 100%;
  border-radius: 12px;
`;
const PageContent = styled.div`
  border-left: 1px solid ${theme.grayColor};
  width: 85%;
`;
const Wrapper = styled.div`
  padding: 20px;
`;
const Container = styled.div`
  max-width: 1550px;
  margin: 0 auto;
`;
const Button = styled(NavLink)`
  background-color: ${theme.blueColor};
  color: ${theme.whiteColor};
  max-width: 216px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
`;

const ArrowIcon = styled.img``;

const AddAdminPage = () => {
  return (
    <AdminFormWrapper>
      <Sidebar />
      <PageContent>
        <Header />
        <Wrapper>
          <Container>
            <Button to="/manageAdmins">
              <ArrowIcon src={arrow} alt="" />
              Back to Manage Admins
            </Button>

            <Form>
                
            </Form>
          </Container>
        </Wrapper>
      </PageContent>
    </AdminFormWrapper>
  );
};

export default AddAdminPage;
