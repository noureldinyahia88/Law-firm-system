import React from "react";
import { Navigate, Outlet } from "react-router";

const AdminRoutes = () => {
  const hasToken = localStorage.getItem("profileType") === "ROLE_ADMIN";

  return hasToken ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoutes;
