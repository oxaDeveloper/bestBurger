import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/bestBurger_logo.png";
import "./MediaCss/Media.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHome,
  faList,
  faPhone,
  faPhotoFilm,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="BestBurger" />
          </a>
        </div>
        <ul className="navbar__ul">
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <li>
              <a href="">Menu</a>
            </li>
          </Link>
          <Link to="/aksiya" style={{ textDecoration: "none" }}>
            <li>
              <a href="">Aksiyalar</a>
            </li>
          </Link>
          <Link to="/galereya" style={{ textDecoration: "none" }}>
            <li>
              <a href="">Galereya</a>
            </li>
          </Link>
          <Link to="/aloqa" style={{ textDecoration: "none" }}>
            <li>
              <a href="">Aloqa</a>
            </li>
          </Link>
        </ul>
        {/* <div className="miniNav">
          <ul>
            <li className="list">
              <a href="/">
                <span className="icon"></span>
                <span className="text">Asosiy</span>
              </a>
            </li>
            <li className="list">
              <a href="/menu">
                <span className="icon"></span>
                <span className="text">Menu</span>
              </a>
            </li>
            <li className="list">
              <a href="/aksiya">
                <span className="icon"></span>
                <span className="text">Aksiyalar</span>
              </a>
            </li>
            <li className="list">
              <a href="/gallery">
                <span className="icon"></span>
                <span className="text">Galereya</span>
              </a>
            </li>
            <li className="list">
              <a href="/contact">
                <span className="icon"></span>
                <span className="text">Aloqa</span>
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
