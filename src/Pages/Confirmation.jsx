import React from "react";
import { Link } from "react-router-dom";
import Background from "../assets/restaurant.jpg";

export default function Confirmation() {
  return (
    <>
      <section
        className="Confirmation_Container"
        style={{ backgroundImage: `url(${Background})`, backgroundSize: `cover` }}
      >
        <div className="content">
          <div className="title">
            {" "}
            <h2>Confirmation</h2>
            <p className="description">
              Confirm Your reservation details before proceeding{" "}
            </p>
          </div>

          <div className="customer-details">
            <h5>Customer Details</h5>
            <span className="name">
              <p className="label">Name:</p>
              <p className="data">Jamie Ade</p>
            </span>
            <span className="email">
              <p className="label">Email:</p>
              <p className="data">example@gmail.com</p>
            </span>
            <span className="phoneno">
              <p className="label">Phone Number:</p>
              <p className="data">+234560987654</p>
            </span>
            <span className="special offer">
              <p className="label">Special Offer:</p>
              <p className="data">Reservation Theme</p>
            </span>
          </div>
          <div className="reservation">
            <h5>Table Reservation</h5>
            <span className="diner-section">
              <p className="label">Dinner Section:</p>
              <p className="data">Indoor</p>
            </span>
            <span className="diner-no">
              <p className="label">Diner Number:</p>
              <p className="data">2</p>
            </span>
            <span className="date">
              <p className="label">Date:</p>
              <p className="data">06/02/2024</p>
            </span>
          </div>

          <button >
          <Link to="/sucess">Confirm</Link>
            
          </button>
        </div>
      </section>
    </>
  );
}
