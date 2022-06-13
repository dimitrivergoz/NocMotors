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
      <Home/>

    </Router>
  );
}

export default App;
