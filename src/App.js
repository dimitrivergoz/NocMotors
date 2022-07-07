import "./App.css";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Services from "./components/Services";
import VoituresVedettes from "./components/VoituresVedettes";
import SectionContact from "./components/SectionContact";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Events from "./components/Events";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/NocMotors" element={<Accueil />} />
          <Route path="/NocMotors/services" element={<Services />} />
          <Route path="/NocMotors/voitures" element={<VoituresVedettes />} />
          <Route path="/NocMotors/events" element={<Events />} />
          <Route path="/NocMotors/contact" element={<SectionContact />} />
        </Routes>
        <ScrollButton />
      
      <div className="border-t-2 border-gray-300 flex flex-col md:flex-row md:justify-between text-center px-5 py-2 text-sm text-gray-100">
        <div className="mb-4 space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
          <a href="#" className="mx-2.5">
            Mentions légales
          </a>
          <a href="#" className="mx-2.5">
            Credits
          </a>
        </div>
        <p>&copy; Noc Motors 2022</p>
      </div>
    </>
  );
}

export default App;
