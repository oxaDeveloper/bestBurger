import React from "react";
import Navbar from "./Navbar";
import "./MediaCss/Media.css";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>PITSA</h3>
            <h1>biz bilan yaxshiroq</h1>
            <p>
              Buyurtma bering va 30daqiqadan so'ng haqiqiy PITSA ta'midan
              zavqlaning! Bizda arzon va sifatli.
            </p>
            <div className="banner__btn">
              <a href="/menu" className="btn btn-smart">
                BUYURTMA BERISH!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
