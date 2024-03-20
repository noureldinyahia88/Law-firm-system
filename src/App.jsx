import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./Pages/Admin/DashboardPage";
import ManageLawyers from "./Pages/Admin/manageLawyers";
import ManageAdmins from "./Pages/Admin/ManageAdmins";
import AddAdminPage from "./Pages/Admin/AddAdminPage";
import EditAdminPage from "./Pages/Admin/EditAdminPage";
import AddLawerPage from "./Pages/Admin/AddLawerPage";
import EditLawerPage from "./Pages/Admin/EditLawerPage";
import MyProfile from "./Pages/Admin/MyProfile";
import ManageClients from "./Pages/Admin/ManageClients";
import AddNewClientPage from "./Pages/Admin/AddNewClientPage";
import ManageCases from "./Pages/Admin/ManageCases";
import AddCasePage from "./Pages/Admin/AddCasePage";
import Login from "./Pages/Login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manageLawyers" element={<ManageLawyers />} />
          <Route path="/manageAdmins" element={<ManageAdmins />} />
          <Route path="/AddAdminPage" element={<AddAdminPage />} />
          <Route path="/EditAdmin" element={<EditAdminPage />} />
          <Route path="/AddLawer" element={<AddLawerPage />} />
          <Route path="/EditLawer" element={<EditLawerPage />} />
          <Route path="/MyProfile" element={<MyProfile />} />
          <Route path="/manageClients" element={<ManageClients />} />
          <Route path="/addNewClient" element={<AddNewClientPage />} />
          <Route path="/ManageCase" element={<ManageCases />} />
          <Route path="/AddCase" element={<AddCasePage />} />
        </Routes>
      </BrowserRouter>

    </QueryClientProvider>
  );
}

export default App;
