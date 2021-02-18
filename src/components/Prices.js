import React from "react";
import Pizza1 from "./img/pizza1.png";
import Pizza2 from "./img/pizza2.png";
import Pizza3 from "./img/pizza3.png";


const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza1} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a
              </p>
              <p className="price_rs">$50.00</p>
  
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza2} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a
              </p>
              <p className="price_rs">$25.00</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza3} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">
                Nullam nibh sem, imperdiet ultrices commodo a
              </p>
              <p className="price_rs">$150.00</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Prices;