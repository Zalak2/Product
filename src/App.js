
import './App.css';
import Product1 from './Components/Product1';

import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';



function App() {
  
  return (
    <div>
      <Navbar/>
      
      <Router>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/Product1" element={<Product1 />} />
      
      </Routes>
      </Router>
      <Footer/>

    
    </div>
  );
}

export default App;
