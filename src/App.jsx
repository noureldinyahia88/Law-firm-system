import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./component/ui/sidebar";
import DashboardPage from "./Pages/Admin/DashboardPage";
import ManageLawyers from "./Pages/Admin/manageLawyers";
import ManageAdmins from "./Pages/Admin/ManageAdmins";
import AddAdminPage from "./Pages/Admin/AddAdminPage";
import EditAdminPage from "./Pages/Admin/EditAdminPage";
import AddLawerPage from "./Pages/Admin/AddLawerPage";
import EditLawerPage from "./Pages/Admin/EditLawerPage";
import MyProfile from "./Pages/Admin/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/manageLawyers" element={<ManageLawyers />} />
        <Route path="/manageAdmins" element={<ManageAdmins />} />
        <Route path="/AddAdminPage" element={<AddAdminPage />} />
        <Route path="/EditAdmin" element={<EditAdminPage />} />
        <Route path="/AddLawer" element={<AddLawerPage />} />
        <Route path="/EditLawer" element={<EditLawerPage />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
