import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Locations from "./pages/Locations";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Reservations from "./pages/Reservations";
import Footer from "./components/Footer";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
        <Footer/>
    </Router>
  
  );
}

export default App;
