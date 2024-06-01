/* import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' */

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../src/Components/Layout";
import Home from "../src/Pages/Home";
import Reserveform from "../src/Pages/Reserveform";
import Confirmation from "../src/Pages/Confirmation";
import Sucess from "../src/Pages/Sucess";
import "./index.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="reserveform" element={<Reserveform />} />
            <Route path="confirmation" element={<Confirmation />} />
            <Route path="sucess" element={<Sucess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
