import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img
                src="https://i.ytimg.com/vi/eiTYUsSTrCs/maxresdefault.jpg"
                alt="Pizza"
              />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Tandir Lavash</h3>
            <h1>25,000 UZS</h1>
            <p>
              Tandirda pishirilgan yupqa lavash noni, bodring, pomidor, chips,
              mol go'shti, qizil sous, mayonez, kunjut.
            </p>
            <div className="about__btn">
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

export default Menu;
