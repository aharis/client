import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <>
    <Header />
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  );
}

export default App;
