import React from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/circle-check.svg";
import Background from "../assets/MarioandAdrianA.jpg";

export default function sucess() {
  return (
    <>
      <section
        className="Sucess"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: `cover`,
          height: `600px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        <div
          className="content"
          style={{
            backgroundColor: `#fff`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
          }}
        >
          <div className="icon">
            <img src={Icon} alt="" style={{ height: `80px`, width: `80px` }} />
          </div>
          <div className="textContent">
            <div className="title" style={{ color: `#495e57` }}>
              {" "}
              <h2>Success!!</h2>
              <p className="description">
                You've successfully made a reservation, kindly check your mail
                for more details{" "}
              </p>
            </div>
          </div>
          <button className="home" style={{marginTop: `20px`}}>
            <Link to="/">Back to home</Link>
          </button>
        </div>
      </section>
    </>
  );
}
