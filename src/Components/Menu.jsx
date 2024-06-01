import React from "react";
import Salad from "../assets/greek salad.jpg";
import Lemondessert from "../assets/lemon dessert.jpg";
import Bruchetta from "../assets/Vector.png";

export default function Menu() {
  return (
    <>
      <section className="Menu-wrapper">
        <div className="Menu">
          <div className="Menu-header">
            <h3>This weeks specials!</h3> <button>Online Menu</button>
          </div>
          
         <div className="Menu-items">
          <div className="Menu-card">
            <div className="card-img">
              <img src={Salad} alt="Salad" />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h4>Greek salad</h4> <span>$12.99</span>
              </div>
              <div className="card-text">
                <p>
                  The famous greek salad of crispy lettuce, peppers, olives and
                  our Chicago style feta cheese, garnished with crunchy garlic
                  and rosemary croutons.
                </p>
                <div className="option">
                  Order a delivery{" "}
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                    >
                      <path
                        d="M14.471 1.72713C14.471 0.8993 13.7207 0.221985 12.8038 0.221985H10.303V1.72713H12.8038V3.72145L9.90285 6.99513H6.96859V3.23227H3.63419C1.79194 3.23227 0.299805 4.57938 0.299805 6.24256V8.50028H1.967C1.967 9.74955 3.08402 10.758 4.46779 10.758C5.85156 10.758 6.96859 9.74955 6.96859 8.50028H10.7031L14.471 4.24825V1.72713ZM4.46779 9.25285C4.00931 9.25285 3.63419 8.91419 3.63419 8.50028H5.30139C5.30139 8.91419 4.92627 9.25285 4.46779 9.25285Z"
                        fill="black"
                      />
                      <path
                        d="M6.96854 0.974548H2.80054V2.47968H6.96854V0.974548Z"
                        fill="black"
                      />
                      <path
                        d="M14.471 6.24255C13.0872 6.24255 11.9702 7.251 11.9702 8.50026C11.9702 9.74952 13.0872 10.758 14.471 10.758C15.8548 10.758 16.9718 9.74952 16.9718 8.50026C16.9718 7.251 15.8548 6.24255 14.471 6.24255ZM14.471 9.25283C14.0125 9.25283 13.6374 8.91417 13.6374 8.50026C13.6374 8.08635 14.0125 7.74769 14.471 7.74769C14.9295 7.74769 15.3046 8.08635 15.3046 8.50026C15.3046 8.91417 14.9295 9.25283 14.471 9.25283Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Menu-card">
            <div className="card-img">
              <img src={Bruchetta} alt="Bruchetta" />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h4>Bruchetta</h4> <span>$5.99</span>
              </div>
              <div className="card-text">
                <p>
                  Our Bruschetta is made from grilled bread that has been
                  smeared with garlic and seasoned with salt and olive oil.{" "}
                </p>
                <div className="option">
                  Order a delivery{" "}
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                    >
                      <path
                        d="M14.471 1.72713C14.471 0.8993 13.7207 0.221985 12.8038 0.221985H10.303V1.72713H12.8038V3.72145L9.90285 6.99513H6.96859V3.23227H3.63419C1.79194 3.23227 0.299805 4.57938 0.299805 6.24256V8.50028H1.967C1.967 9.74955 3.08402 10.758 4.46779 10.758C5.85156 10.758 6.96859 9.74955 6.96859 8.50028H10.7031L14.471 4.24825V1.72713ZM4.46779 9.25285C4.00931 9.25285 3.63419 8.91419 3.63419 8.50028H5.30139C5.30139 8.91419 4.92627 9.25285 4.46779 9.25285Z"
                        fill="black"
                      />
                      <path
                        d="M6.96854 0.974548H2.80054V2.47968H6.96854V0.974548Z"
                        fill="black"
                      />
                      <path
                        d="M14.471 6.24255C13.0872 6.24255 11.9702 7.251 11.9702 8.50026C11.9702 9.74952 13.0872 10.758 14.471 10.758C15.8548 10.758 16.9718 9.74952 16.9718 8.50026C16.9718 7.251 15.8548 6.24255 14.471 6.24255ZM14.471 9.25283C14.0125 9.25283 13.6374 8.91417 13.6374 8.50026C13.6374 8.08635 14.0125 7.74769 14.471 7.74769C14.9295 7.74769 15.3046 8.08635 15.3046 8.50026C15.3046 8.91417 14.9295 9.25283 14.471 9.25283Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Menu-card">
            <div className="card-img">
              <img src={Lemondessert} alt="Lemon dessert" />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h4>Lemon Dessert</h4> <span>$5.00</span>
              </div>
              <div className="card-text">
                <p>
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
                <div className="option">
                  Order a delivery{" "}
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                    >
                      <path
                        d="M14.471 1.72713C14.471 0.8993 13.7207 0.221985 12.8038 0.221985H10.303V1.72713H12.8038V3.72145L9.90285 6.99513H6.96859V3.23227H3.63419C1.79194 3.23227 0.299805 4.57938 0.299805 6.24256V8.50028H1.967C1.967 9.74955 3.08402 10.758 4.46779 10.758C5.85156 10.758 6.96859 9.74955 6.96859 8.50028H10.7031L14.471 4.24825V1.72713ZM4.46779 9.25285C4.00931 9.25285 3.63419 8.91419 3.63419 8.50028H5.30139C5.30139 8.91419 4.92627 9.25285 4.46779 9.25285Z"
                        fill="black"
                      />
                      <path
                        d="M6.96854 0.974548H2.80054V2.47968H6.96854V0.974548Z"
                        fill="black"
                      />
                      <path
                        d="M14.471 6.24255C13.0872 6.24255 11.9702 7.251 11.9702 8.50026C11.9702 9.74952 13.0872 10.758 14.471 10.758C15.8548 10.758 16.9718 9.74952 16.9718 8.50026C16.9718 7.251 15.8548 6.24255 14.471 6.24255ZM14.471 9.25283C14.0125 9.25283 13.6374 8.91417 13.6374 8.50026C13.6374 8.08635 14.0125 7.74769 14.471 7.74769C14.9295 7.74769 15.3046 8.08635 15.3046 8.50026C15.3046 8.91417 14.9295 9.25283 14.471 9.25283Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
