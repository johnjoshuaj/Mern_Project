// import React from 'react';
import Login from "./login"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./user.css";
import { Reg } from "./index";
import Upload from "./upload";
import ShowData from "./fetchdata";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Reg/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/upload" element={<Upload/>}></Route>
        <Route path="/fetchdata" element={<ShowData/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
