import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './components/Sidebar';
import Home from './pages'
import Vehicules from './pages/vehicules';
function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/vehicules" element={<Vehicules/>} exact />

        </Routes>

    </Router>
  );
}

export default App;
