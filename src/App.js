import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";

import NavbarC from "./componentes/NavbarC";
import Footer from "./componentes/Footer";



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavbarC/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
