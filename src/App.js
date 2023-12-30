import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavbarHome from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
import AlertTop from "./Components/Alert";
import { useState } from "react";

function App() {
  
  const [alert, setAlert] = useState(null)
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  return (
    <>
      <BrowserRouter>
        <NoteState>
          <NavbarHome />
          <AlertTop alert={alert}/>
          <div className="container">
          <Routes>
            <Route exact path="/home" element={<Home showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<SignUp showAlert={showAlert} />} />
            <Route exact path="*" element={<Navigate to="/" />} />
          </Routes>
          </div>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
