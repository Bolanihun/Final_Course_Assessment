import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  phoneNo: "",
  type: "",
  date: "",
  number: ""
  
};
export default function form() {
  useFormik(initialValues, onsubmit);
  return (
    <>
      <section className="FORM">
        <section className="Form-wrapper">
          <div className="customer-details">
            <h3>Customer Details</h3>
            <form action="">
              <div className="form">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Jamie Ade" />
              </div>
              <div className="form">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="form">
                <label htmlFor="Phoneno">Phone No:</label>
                <input type="text" name="phoneNo" placeholder="+234560987654" />
              </div>
              <div className="form">
                <label htmlFor="Special offer">Special Offer:</label>
                <input
                  type="type"
                  name="type"
                  placeholder="Reservation Theme"
                />
              </div>
            </form>
          </div>
          <div className="reservation">
            <h3>Table Reservation</h3>
            <form action="">
              <div className="form dinner">
                <label htmlFor="Dinner section">Dinner Section:</label>
                <div className="radio-btns">
                  <div className="radio-btn">
                    {" "}
                    <input type="radio" name="Indoor" id="" />
                    <label htmlFor="radio">Indoor</label>
                  </div>
                  <div className="radio-btn">
                    {" "}
                    <input type="radio" name="Outdoor" id="" />
                    <label htmlFor="radio">Outdoor</label>
                  </div>
                  <div className="radio-btn">
                    <input type="radio" name="Private" id="" />
                    <label htmlFor="radio">Private</label>
                  </div>
                </div>
              </div>

              <div className="form">
                <label htmlFor="DinerNo">Diner Number:</label>
                <input type="text" name="dinerNo" placeholder="2" />
              </div>

              <div className="form">
                <label htmlFor="Date">Date:</label>
                <input type="date" name="date" />
              </div>
            </form>
          </div>
        </section>
        <button className="proceed" style={{marginRight: `60px`}}>
          <Link to="/confirmation">Proceed</Link>
        </button>
      </section>
    </>
  );
}
