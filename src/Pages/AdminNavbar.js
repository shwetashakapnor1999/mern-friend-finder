import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { reset } from "../actions/actions";

export default function AdminNavbar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const logout = () => {
    alert("Successfully logged out!!!");
    dispatch(reset());
    history.push("/login");
  };
  return (
    <div>
      <header id="header">
        <nav className="navbar navbar-default navbar-fixed-top menu">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to="/" className="navbar-brand">
                <img src="images/logo.png" alt="logo" />
              </Link>
            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right main-menu">
                <li className="dropdown">
                  <Link to="/adminhome">Home</Link>
                </li>
                <li className="dropdown">
                  <Link to="/manageuser">Manage Users</Link>
                </li>
                {/*<li className="dropdown">
                  <Link
                    to="/newsfeed"
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Newsfeed{" "}
                    <span>
                      <img src="images/down-arrow.png" alt="" />
                    </span>
                  </Link>
                  <ul className="dropdown-menu newsfeed-home">
                    <li>
                      <Link to="/newsfeed">Newsfeed</Link>
                    </li>
                    <li>
                      <Link to="/newsfeedfriends">My friends</Link>
                    </li>
                    <li>
                      <Link to="/newsfeedmessages">Chatroom</Link>
                    </li>
                    <li>
                      <Link to="/newsfeedimages">Images</Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <Link
                    to="/timeline"
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Timeline{" "}
                    <span>
                      <img src="images/down-arrow.png" alt="" />
                    </span>
                  </Link>
                  <ul className="dropdown-menu login">
                    <li>
                      <Link to="/timeline">Timeline</Link>
                    </li>
                    <li>
                      <Link to="/timelineabout">Timeline About</Link>
                    </li>
                    <li>
                      <Link to="/timelinealbum">Timeline Album</Link>
                    </li>
                    <li>
                      <Link to="/timelinefriends">Timeline Friends</Link>
                    </li>
                  </ul>
  </li>*/}

                <li className="dropdown">
                  <Link to="/login" onClick={logout}>
                    Logout
                  </Link>
                </li>
                {/*<li className="dropdown">
                <Link to="/contact">Contact</Link>
</li>*/}
              </ul>
              {/*<form className="navbar-form navbar-right hidden-sm">
              <div className="form-group">
                <i className="icon ion-android-search"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search friends, photos"
                />
              </div>
</form>*/}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
