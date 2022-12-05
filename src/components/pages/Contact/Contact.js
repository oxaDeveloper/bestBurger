import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../img/bestBurger_logo.png";

function Contact() {
  const showAlert = () => {
    document.getElementById("alert").style.display = "block";
  };

  const [name1, setName1] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name1 === "" || email === "" || message === "") {
      alert("Iltimos barcha maydonlarni to'ldiring!");
    } else {
      alert("Xabar muvaffaqiyatli yuborildi!");
    }
  };

  return (
    <div className="contact">
      <div className="back-filter">
        <div className="alert-success" id="alert">
          <span>
            Xabaringiz Yuborildi! Bizga xat yuborganingiz uchun raxmat.
          </span>
        </div>

        <div className="logo_contact">
          <a href="/">
            <img src={logo} alt="BestBurger" />
          </a>
        </div>
        <div className="contact-section">
          <div className="contact-info">
            <div className="img_box">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              G'ijduvon Tibbiyot kolleji Ro'parasida
            </div>
            <div className="img_box">
              <FontAwesomeIcon icon={faEnvelope} />
              bestburgger@gmail.com
            </div>
            <div className="img_box">
              <FontAwesomeIcon icon={faPhoneFlip} />
              +998 (65) 572-16-66
            </div>
          </div>

          <div className="contact-form">
            <h2>Taklif va Murojaatlar</h2>
            <form method="post" action="" className="contact_text">
              <input
                type="text"
                name="name"
                onChange={(e) => setName1(e.target.value)}
                className="text-box"
                placeholder="Ismingizni kiriting"
                required
              />
              <input
                type="text"
                name="name"
                onChange={(e) => setEmail(e.target.value)}
                className="text-box"
                placeholder="Emailingizni kiriting"
                required
              />

              <textarea
                name="message"
                placeholder="Xabaringizni kiriting"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button onClick={handleSubmit} className="send-btn">
                jo'natish!
              </button>

              <input
                type="text"
                name="name"
                className="text-box box-2"
                placeholder="Emailingizni kiriting"
                required
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
