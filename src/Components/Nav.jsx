import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li className="logo">
            <img src={Logo} alt="Little lemon Logo" srcSet="" />
          </li>
          <li className="Links">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Menu</Link>
            <Link to="/reserveform">Reservations</Link>
            <Link to="/">Order online</Link>
          </li>
        </ul>
      </nav>

     {/*<Outlet/>*/}
    </>
  );
}
