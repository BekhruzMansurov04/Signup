import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
    </Routes>
  );
}

export default App;

