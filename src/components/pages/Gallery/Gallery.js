import React from "react";
import "./Gallery.css";
import logo from "../../../img/bestBurger_logo.png";

function Gallery() {
  return (
    <div className="gallery">
      <a href="/">
        <img src={logo} alt="BestBurger" />
      </a>
      <div class="div">
        <div class="grid com1"></div>
        <div class="grid com2"></div>
        <div class="grid com3"></div>
        <div class="grid com4"></div>
        <div class="grid com5"></div>
        <div class="grid com6"></div>
        <div class="grid com7"></div>
        <div class="grid com8"></div>
      </div>
    </div>
  );
}

export default Gallery;
