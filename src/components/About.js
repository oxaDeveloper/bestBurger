import React from "react";
import "./MediaCss/Media.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>Biz haqimizda</h3>
            <h1>BIZNING MANZILLARIMIZ</h1>
            <p>"BestBurger" G'ijduvon Tibbiyot kolleji ro'parasida.</p>
            <br />
            <p>
              "GARDEN Family-Restaurant" korzinka.uz'ning
              <br />
              2-qavatida.
            </p>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/pizza.jpg" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
