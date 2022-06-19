import './App.css';
import Navbar from './Components/Nav/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/home/Home';
import Contact from './Components/ContactPage/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/react-CompactGyan1" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
