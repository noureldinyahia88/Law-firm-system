import './App.css'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from './component/ui/sidebar';
import DashboardPage from './Pages/Admin/DashboardPage';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
