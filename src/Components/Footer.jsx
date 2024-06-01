import React from "react";
import footerLogo from "../assets/footer-logo.png"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-logo">
            <img src={footerLogo} alt="footer logo" />
          </div>
          <div className="footer-links">
            <ul className="footer-link">
              <h4>Navigation</h4>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
            <ul className="footer-link">
              <h4>Contact</h4>
              <li>Address</li>
              <li>Phone No</li>
              <li>Email</li>
            </ul>
            <ul className="footer-link">
              <h4>Socials</h4>
              <li>Address</li>
              <li>Phone No</li>
              <li>Email</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
