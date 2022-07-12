import "./App.css";
import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Services from "./components/Services";
import VoituresVedettes from "./components/VoituresVedettes";
import SectionContact from "./components/SectionContact";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Events from "./components/Events";
import { Routes, Route } from "react-router-dom";
import VehiculesDetail from "./components/VoituresVedettes/VehiculesDetail";
import EventsDetail from "./components/Events/EventsDetail";
import Footer from "./components/Footer"
import MentionsLegales from "./components/MentionsLegales";
import Credits from "./components/Credits"
function App() {
  return (
    <>
      <Navbar />
      
        <Routes>
          <Route exact path="/NocMotors" element={<Accueil />} />
          <Route exact path="/NocMotors/services" element={<Services />} />
          <Route exact path="/NocMotors/vehicules" element={<VoituresVedettes />} />
          <Route exact path="/NocMotors/events" element={<Events />} />
          <Route exact path="/NocMotors/contact" element={<SectionContact />} />
          <Route path="/NocMotors/vehicules/:id" element={<VehiculesDetail/>}/>
          <Route path="/NocMotors/events/:id" element={<EventsDetail/>}/>
          <Route path="/NocMotors/infos" element={<MentionsLegales/>}/>
          <Route path="/NocMotors/credits" element={<Credits/>}/>
        </Routes>
        <ScrollButton />
        <Footer/>
      
    </>
  );
}

export default App;
