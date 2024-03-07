import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from './component/ui/sidebar';
import DashboardPage from './Pages/Admin/DashboardPage';
import ManageLawyers from './Pages/Admin/manageLawyers';
import ManageAdmins from './Pages/Admin/ManageAdmins';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/manageLawyers" element={<ManageLawyers />} />
        <Route path="/manageAdmins" element={<ManageAdmins />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
