import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from './component/ui/sidebar';
import DashboardPage from './Pages/Admin/DashboardPage';
import ManageLawyers from './Pages/Admin/manageLawyers';
import ManageAdmins from './Pages/Admin/ManageAdmins';
import AddAdminPage from './Pages/Admin/AddAdminPage';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/manageLawyers" element={<ManageLawyers />} />
        <Route path="/manageAdmins" element={<ManageAdmins />} />
        <Route path="/AddAdminPage" element={<AddAdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
