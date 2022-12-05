import React from "react";
import firebase from "./firebase";
import "./SignIn.css";
import logo1 from "../../../img/bestBurger_logo.png";
import logo2 from "../../../img/garden_logo.png";

class SignIn extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          this.onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };

  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+998" + this.state.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("SMS yuborildi!");
      })
      .catch((error) => {
        console.log("SMS yuborilmadi");
      });
  };

  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!");
      })
      .catch((error) => {});
  };
  render() {
    const showIt = () => {
      document.getElementById("show").style.display = "block";
    };

    return (
      <div className="signin">
        <div className="center_section">
          <div className="top">
            <img src={logo1} alt="BestBurger" className="firstImg" />
            <img src={logo2} alt="Garden FR" />
          </div>

          <div className="left">
            <img src="https://icons.veryicon.com/png/o/miscellaneous/simple-line-icon/authentication-16.png" />
          </div>

          <div className="right">
            <h2>Ro'yhatdan o'ting!</h2>
            <form onSubmit={this.onSignInSubmit}>
              <div id="sign-in-button"></div>
              <input
                className="phoneInput"
                type="number"
                name="mobile"
                placeholder="Telefon raqam: 912345678"
                required
                onChange={this.handleChange}
              />
              <button className="submit" type="submit" onClick={showIt}>
                KEYINGISI
              </button>
            </form>

            <div className="otp_part" id="show">
              <form onSubmit={this.onSubmitOTP}>
                <input
                  className="otpInput"
                  type="number"
                  name="otp"
                  placeholder="Kodni kiriting: 123456"
                  required
                  onChange={this.handleChange}
                />
                <button type="submit" className="submit">
                  YUBORISH
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
