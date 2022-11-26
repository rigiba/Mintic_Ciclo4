import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.scss';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Servicios from './pages/Servicios';
import Usuarios from "./pages/Usuarios";
import Carros from "./pages/Carros";


function App() {
  return (
    <Router>
       <Navbar />
       <div className="flex">
          <Sidebar />
          <div className="content p-4">
            <Routes>
                <Route exact path="/" element={<Servicios/>}/>                
                <Route exact path="/usuarios" element={<Usuarios/>}/>
                <Route exact path="/Carros" element={<Carros/>}/>

            </Routes>
          </div>
        </div> 
    </Router>

  );
}

export default App;
