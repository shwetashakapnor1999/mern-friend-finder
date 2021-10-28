import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { login } from "../actions/actions";

function Login(props) {
  const history = useHistory();

  const { isLoggedIn } = useSelector((state) => state.data);
  const { errorMessage } = useSelector((state) => state.data);
  const { isAdmin } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    dispatch(login(email, password));

    if (isLoggedIn) {
      if (isAdmin) {
        history.push("/adminhome");
      } else {
        history.push("/newsfeed");
      }
    } else {
      // console.log(errorMessage);
      history.push("/login");
    }
    // event.target.reset();
  };

  return (
    <div>
      <Header />
      {/* <!-- Top Banner
    ================================================= --> */}
      <section id="banner">
        <div className="container">
          {/* <!-- Login Form
        ================================================= --> */}
          <div className="login-form">
            <div className="line-divider"></div>
            <div className="form-wrapper">
              <p className="Login-text">
                Login now and meet awesome people around the world
              </p>
              <form onSubmit={submitHandler}>
                <fieldset className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={emailHandler}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    value={password}
                    placeholder="Enter a password"
                    onChange={passwordHandler}
                  />
                  <span>{errorMessage}</span>
                </fieldset>
                <button type="submit" className="btn-secondary">
                  Login
                </button>
              </form>
            </div>
          </div>
          {/* <!-- Sign Up Form End --> */}

          <svg className="arrows hidden-xs hidden-sm">
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Login;
