import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/navbar.jsx";
import Inicio from "./components/pages/inicio.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      </Router>
    </div>
  );
}

export default App;
