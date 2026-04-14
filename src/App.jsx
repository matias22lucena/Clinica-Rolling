  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import './App.css'
  import NavbarC from "./components/navbar/NavbarC";

  function App() {


    return (
      <>
      <NavbarC/>
      <Router>
        <Routes>
        </Routes>
      </Router>
        
      </>
    )
  }

  export default App
