import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import validator from "validator";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const nameChangeHandler = (e) => {
    if (validator.isAlpha(e.target.value, "en-US", { ignore: " " })) {
      setNameError("Valid Name :)");
      setIsValid(true);
    } else {
      setIsValid(false);
      setNameError("Enter valid Name!");
    }
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    if (validator.isEmail(e.target.value)) {
      setIsValid(true);
      setEmailError("Valid Email :)");
    } else {
      setIsValid(false);
      setEmailError("Enter valid Email!");
    }
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    if (
      validator.isStrongPassword(e.target.value, {
        minLength: 8,
        minSymbols: 1,
        minNumbers: 1,
      })
    ) {
      setIsValid(true);
      setPasswordError("Valid Password :)");
    } else {
      setIsValid(false);
      setPasswordError("Enter Valid Password!");
    }
    setPassword(e.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const signUpDetails = { name, username: email, password };
    // console.log(signUpDetails);
    let res = await axios.post(
      "http://localhost:3000/webapi/usersignup",
      signUpDetails
    );
    console.log(res.data);
    history.push("/login");
    // event.target.reset();
  };

  return (
    <div>
      <Header />
      {/* <!-- Top Banner
 ================================================= --> */}
      <section id="banner">
        <div className="container">
          {/* <!-- Sign Up Form
     ================================================= --> */}
          <div className="sign-up-form">
            <a href="index.html" className="logo">
              <img src="images/logo.png" alt="Friend Finder" />
            </a>
            <h2 className="text-white">Find My Friends</h2>
            <div className="line-divider"></div>
            <div className="form-wrapper">
              <p className="signup-text">
                Signup now and meet awesome people around the world
              </p>
              <form onSubmit={submitHandler}>
                <fieldset className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    data-error="Name is required."
                    value={name}
                    onChange={nameChangeHandler}
                  />
                  <span>{nameError}</span>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    data-error="Email is required."
                    value={email}
                    onChange={emailChangeHandler}
                  />
                  <span>{emailError}</span>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter a password"
                    data-error="Password is required."
                    value={password}
                    onChange={passwordChangeHandler}
                  />
                </fieldset>
                <span>{passwordError}</span>
                <p>By signning up you agree to the terms</p>
                <button disabled={!isValid} className="btn-secondary">
                  Signup
                </button>
              </form>
            </div>
            <a href="login.html">Already have an account?</a>
            <img
              className="form-shadow"
              src="images/bottom-shadow.png"
              alt=""
            />
          </div>
          {/* <!-- Sign Up Form End --> */}

          <svg className="arrows hidden-xs hidden-sm">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </section>

      {/* <!-- Features Section
 ================================================= --> */}
      <section id="features">
        <div className="container wrapper">
          <h1 className="section-title slideDown">social herd</h1>
          <div className="row slideUp">
            <div className="feature-item col-md-2 col-sm-6 col-xs-6 col-md-offset-2">
              <div className="feature-icon">
                <i className="icon ion-person-add"></i>
              </div>
              <h3>Make Friends</h3>
            </div>
            <div className="feature-item col-md-2 col-sm-6 col-xs-6">
              <div className="feature-icon">
                <i className="icon ion-images"></i>
              </div>
              <h3>Publish Posts</h3>
            </div>
            <div className="feature-item col-md-2 col-sm-6 col-xs-6">
              <div className="feature-icon">
                <i className="icon ion-chatbox-working"></i>
              </div>
              <h3>Private Chats</h3>
            </div>
            <div className="feature-item col-md-2 col-sm-6 col-xs-6">
              <div className="feature-icon">
                <i className="icon ion-compose"></i>
              </div>
              <h3>Create Polls</h3>
            </div>
          </div>
          <h2 className="sub-title">find awesome people like you</h2>
          <div id="incremental-counter" data-value="101242"></div>
          <p>People Already Signed Up</p>
          <img
            src="images/face-map.png"
            alt=""
            className="img-responsive face-map slideUp hidden-sm hidden-xs"
          />
        </div>
      </section>

      {/* <!-- Download Section
 ================================================= --> */}
      <section id="app-download">
        <div className="container wrapper">
          <h1 className="section-title slideDown">download</h1>
          <ul className="app-btn list-inline slideUp">
            <li>
              <button className="btn-secondary">
                <img src="images/app-store.png" alt="App Store" />
              </button>
            </li>
            <li>
              <button className="btn-secondary">
                <img src="images/google-play.png" alt="Google Play" />
              </button>
            </li>
          </ul>
          <h2 className="sub-title">stay connected anytime, anywhere</h2>
          <img
            src="images/iPhone.png"
            alt="iPhone"
            className="img-responsive"
          />
        </div>
      </section>

      {/* <!-- Image Divider
 ================================================= --> */}
      <div className="img-divider hidden-sm hidden-xs"></div>

      {/* <!-- Facts Section
 ================================================= --> */}
      <section id="site-facts">
        <div className="container wrapper">
          <div className="circle">
            <ul className="facts-list">
              <li>
                <div className="fact-icon">
                  <i className="icon ion-ios-people-outline"></i>
                </div>
                <h3 className="text-white">1,01,242</h3>
                <p>People registered</p>
              </li>
              <li>
                <div className="fact-icon">
                  <i className="icon ion-images"></i>
                </div>
                <h3 className="text-white">21,01,242</h3>
                <p>Posts published</p>
              </li>
              <li>
                <div className="fact-icon">
                  <i className="icon ion-checkmark-round"></i>
                </div>
                <h3 className="text-white">41,242</h3>
                <p>People online</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
