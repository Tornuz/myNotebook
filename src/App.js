import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarHome from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
import AlertTop from "./Components/Alert";

function App() {
  return (
    <>
      <BrowserRouter>
        <NoteState>
          <NavbarHome />
          <AlertTop message="This is awesome"/>
          <div className="container">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="*" element={<Navigate to="/" />} />
          </Routes>
          </div>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
