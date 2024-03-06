import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../variables";
import logo from "../../assets/logo.png";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { RiStockFill } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { LuMessagesSquare } from "react-icons/lu";
import UnionImage from "../../assets/Union.png";
import lamp from "../../assets/Icon Image.png";
import { IoIosLogOut } from "react-icons/io";

const SidebarWrapper = styled.div`
  width: 307px;
  height: 100%;
  background-color: ${theme.whiteColor};
  padding: 26px;
  border-radius: 15px;
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SidebarH2 = styled.h2`
  font-weight: 600;
  color: ${theme.blackColor};
  font-size: 24px;
  line-height: 24px;
`;

const Sidebarh3 = styled.h3`
  font-weight: 600;
  color: ${theme.grayColor};
  font-size: 13px;
`;

const Logo = styled.img`
  max-width: 100%;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
`;

const SidebarTaps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const TapsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Welcome = styled.div`
  background-image: url(${UnionImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 237px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const Lamp = styled.img`
  /* Add styles for the lamp image */
`;

const SidebarP = styled.p`
  color: ${theme.blackColor};
  font-size: 14px;
  line-height: 136%;
  font-weight: 500;
`;

const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 16px;
  color: ${theme.grayColor};
  padding: 16px 20px 16px 20px;
  width: 100%;
  transition: color 0.3s ease;
  &.dashboard {
    background-color: ${theme.primaryColor};
    border-radius: 8px;
  }
  &:hover {
    color: ${theme.blueColor};
  }
  /* &.active{
    color: ${theme.blueColor};
  } */
`;
const Warrper = styled.div``;
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <SidebarH2>Law System</SidebarH2>
        <Logo src={logo} alt="" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarTaps>
          <Sidebarh3>Admin Panel</Sidebarh3>
          <TapsWrapper>
            <Button
              className="dashboard"
              to="/"
              style={{ textDecoration: "none" }}
            >
              <BsFillGrid1X2Fill style={{ fontSize: "24px" }} />
              Dashboard
            </Button>

            <Button to="/" style={{ textDecoration: "none" }}>
              <RiStockFill style={{ fontSize: "24px" }} />
              ManageAdmins
            </Button>

            <Button to="/" style={{ textDecoration: "none" }}>
              <GoLaw style={{ fontSize: "24px" }} />
              Manage Lawers
            </Button>

            <Button to="/" style={{ textDecoration: "none" }}>
              <LuMessagesSquare style={{ fontSize: "24px" }} />
              Manage Lawers Assistants
            </Button>
          </TapsWrapper>
        </SidebarTaps>

        <Welcome>
          <Warrper>
            <Lamp src={lamp} alt="/" />
          </Warrper>
          <Sidebarh3>How is your day today!</Sidebarh3>
          <SidebarP>
            Hope you donig
            <br />
            well today.
          </SidebarP>
        </Welcome>

        <Button className="navLink" to="/" style={{ textDecoration: "none" }}>
          <IoIosLogOut style={{ fontSize: "24px" }} />
          logout
        </Button>
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default Sidebar;
