import React from "react";
import img1 from "../imgProd/img19.png";
import img2 from "../imgProd/img6.png";
import xaggi from "../img/xaggi.png";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={img1} alt="pizza" />
              </div>
              <h1 className="price__heading">Sezar Pitsa</h1>
              <div className="banner__btn margin_bm">
                <a href="/menu" className="btn btn-smart">
                  BUYURTMA BERISH!
                </a>
              </div>
              <p className="price_rs">50,000 UZS</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={xaggi} alt="pizza" />
              </div>
              <h1 className="price__heading">Xaggi (Mol go'shtli)</h1>
              <div className="banner__btn margin_bm">
                <a href="/menu" className="btn btn-smart">
                  BUYURTMA BERISH!
                </a>
              </div>
              <p className="price_rs">25,000 UZS</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img
                  src="https://www.pngarts.com/files/8/Kebab-PNG-Image-Transparent-Background.png"
                  alt="pizza"
                />
              </div>
              <h1 className="price__heading">Best burger</h1>
              <div className="banner__btn margin_bm">
                <a href="/menu" className="btn btn-smart">
                  BUYURTMA BERISH!
                </a>
              </div>
              <p className="price_rs">28,000 UZS</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img
                  src="https://www.seekpng.com/png/full/304-3045915_italian-club-sandwich-milios-sandwiches.png"
                  alt="pizza"
                />
              </div>
              <h1 className="price__heading">Longer Xaggi</h1>
              <div className="banner__btn margin_bm">
                <a href="/menu" className="btn btn-smart">
                  BUYURTMA BERISH!
                </a>
              </div>
              <p className="price_rs">23,000 UZS</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img
                  src="https://pngpress.com/wp-content/uploads/2020/09/uploads_kfc_food_kfc_food_PNG7.png"
                  alt="pizza"
                />
              </div>
              <h1 className="price__heading">KFC (5dona)</h1>
              <div className="banner__btn margin_bm">
                <a href="/menu" className="btn btn-smart">
                  BUYURTMA BERISH!
                </a>
              </div>
              <p className="price_rs">20,000 UZS</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={img2} alt="pizza" />
              </div>
              <h1 className="price__heading">Doner kattasi</h1>
              <div className="banner__btn margin_bm">
                <a href="/menu" className="btn btn-smart">
                  BUYURTMA BERISH!
                </a>
              </div>
              <p className="price_rs">22,000 UZS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
