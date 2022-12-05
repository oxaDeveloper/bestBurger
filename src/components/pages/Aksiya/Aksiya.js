import React from "react";
import "./Aksiya.css";
import logo from "../../../img/bestBurger_logo.png";

const Aksiya = () => {
  return (
    <div className="aksiya">
      <div className="logo_ak">
        <a href="/">
          <img src={logo} alt="BestBurger" />
        </a>
      </div>

      <div className="aksiya_container">
        <div className="aksiya_row">
          <div className="aksiya_col-6 aksiya_p-25">
            <h3>"2x Pitsa" Aksiyasi</h3>
            <h1>BIZNING PITSALARIMIZDAN 2TA XARID QILING!</h1>
            <p>Va Bepul Coca-Cola'ga ega bo'ling.</p>
            <br />
            <p>Yoki Tekin Dastavka xizmatidan foydalaning.</p>
            <br />
            <div className="banner__btn">
              <a href="/menu" className="btn btn-smart">
                BUYURTMA BERISH!
              </a>
            </div>
          </div>
          <div className="aksiya_col-6">
            <div className="aksiya__img">
              <img
                src="https://www.freepnglogos.com/uploads/pizza-png/pizza-images-download-8.png"
                alt="Pizza"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aksiya;
