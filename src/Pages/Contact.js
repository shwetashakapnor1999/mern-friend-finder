import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import validator from "validator";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [enteredname, setEnteredName] = useState("");
  const [enteredemail, setEnteredEmail] = useState("");
  const [enteredphone, setEnteredPhone] = useState("");
  const [enteredmessage, setEnteredMessage] = useState("");
  const history = useHistory();
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const nameChangeHandler = (e) => {
    let name = e.target.value;
    if (validator.isAlpha(name, "en-US", { ignore: " " })) {
      setNameError("Valid Name :)");
      setIsValid(true);
    } else {
      setIsValid(false);
      setNameError("Enter valid Name!");
    }
    setEnteredName(name);
  };
  const emailChangeHandler = (e) => {
    let email = e.target.value;
    if (validator.isEmail(email)) {
      setIsValid(true);
      setEmailError("Valid Email :)");
    } else {
      setIsValid(false);
      setEmailError("Enter valid Email!");
    }
    setEnteredEmail(email);
  };
  const phoneChangeHandler = (e) => {
    let phoneno = e.target.value;
    if (validator.isMobilePhone(phoneno, "en-IN")) {
      setIsValid(true);
      setPhoneError("Valid Phone no. :)");
    } else {
      setIsValid(false);
      setPhoneError("Enter valid Phone no.!");
    }
    setEnteredPhone(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const contactusDetails = {
      name: enteredname,
      email: enteredemail,
      phone: enteredphone,
      message: enteredmessage,
    };
    // console.log(contactusDetails);
    let res = await axios.post(
      "http://localhost:3000/webapi/usercontact",
      contactusDetails
    );
    console.log(res.data);
    history.push("/login");
    // event.target.reset();
  };
  return (
    <div>
      <Header />

      <div className="google-maps">
        <div id="map" className="map contact-map">
          {/*<iframe
          title="This is a maps title"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.108321509627!2d-73.99087408522627!3d40.73764194398449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a189d93c29%3A0x300099f29cad7a9!2s228%20Park%20Ave%20S%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sin!4v1621149948454!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
        style="border:0;"*/}
        </div>
      </div>
      <div id="page-contents">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="contact-us">
                <div className="row">
                  <div className="col-md-8 col-sm-7">
                    <h4 className="grey" data-testid="header">
                      Leave a Message
                    </h4>
                    <form
                      className="contact-form"
                      id="contact-form"
                      onSubmit={submitHandler}
                    >
                      <div className="form-group">
                        <i className="icon ion-person"></i>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          className="form-control"
                          required
                          placeholder="Enter your name *"
                          data-error="Name is required."
                          value={enteredname}
                          onChange={nameChangeHandler}
                        />
                        <span>{nameError}</span>
                      </div>
                      <div className="form-group">
                        <i className="icon ion-email"></i>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter your email *"
                          data-error="Email is required."
                          required
                          value={enteredemail}
                          onChange={emailChangeHandler}
                        />
                        <span>{emailError}</span>
                      </div>
                      <div className="form-group">
                        <i className="icon ion-android-call"></i>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          className="form-control"
                          placeholder="Enter your phone *"
                          required
                          data-error="Phone is required."
                          value={enteredphone}
                          onChange={phoneChangeHandler}
                        />
                        <span>{phoneError}</span>
                      </div>
                      <div className="form-group">
                        <textarea
                          id="message"
                          name="message"
                          className="form-control"
                          placeholder="Leave a message for us *"
                          rows="4"
                          data-error="Please,leave us a message."
                          required
                          value={enteredmessage}
                          onChange={messageChangeHandler}
                        ></textarea>
                      </div>
                      <button
                        data-testid="name_checker"
                        disabled={!isValid}
                        className="btn-primary"
                      >
                        Send a Message
                      </button>
                    </form>
                  </div>
                  <div className="col-md-4 col-sm-5">
                    <h4 className="grey">Reach Us</h4>
                    <div className="reach">
                      <span className="phone-icon">
                        <i className="icon ion-android-call"></i>
                      </span>
                      <p>+1 (234) 222 0754</p>
                    </div>
                    <div className="reach">
                      <span className="phone-icon">
                        <i className="icon ion-email"></i>
                      </span>
                      <p>info@thunder-team.com</p>
                    </div>
                    <div className="reach">
                      <span className="phone-icon">
                        <i className="icon ion-ios-location"></i>
                      </span>
                      <p>228 Park Ave S NY, USA</p>
                    </div>
                    <ul className="list-inline social-icons">
                      <li>
                        <a href="#">
                          <i className="icon ion-social-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon ion-social-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon ion-social-googleplus"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon ion-social-pinterest"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon ion-social-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
