import React from "react";
import UserNavbar from "./UserNavbar";
export default function Timelineabout() {
  return (
    <div>
      <UserNavbar />
      <div className="container">
        <div className="timeline">
          <div className="timeline-cover">
            <div className="timeline-nav-bar hidden-sm hidden-xs">
              <div className="row">
                <div className="col-md-3">
                  <div className="profile-info">
                    <img
                      src="images/users/user-1.jpg"
                      alt=""
                      className="img-responsive profile-photo"
                    />
                    <h3>Sarah Cruiz</h3>
                    <p className="text-muted">Creative Director</p>
                  </div>
                </div>
                <div className="col-md-9">
                  <ul className="list-inline profile-menu">
                    <li>
                      <a href="timeline.html">Timeline</a>
                    </li>
                    <li>
                      <a href="timeline-about.html" className="active">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="timeline-album.html">Album</a>
                    </li>
                    <li>
                      <a href="timeline-friends.html">Friends</a>
                    </li>
                  </ul>
                  <ul className="follow-me list-inline">
                    <li>1,299 people following her</li>
                    <li>
                      <button className="btn-primary">Add Friend</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="navbar-mobile hidden-lg hidden-md">
              <div className="profile-info">
                <img
                  src="images/users/user-1.jpg"
                  alt=""
                  className="img-responsive profile-photo"
                />
                <h4>Sarah Cruiz</h4>
                <p className="text-muted">Creative Director</p>
              </div>
              <div className="mobile-menu">
                <ul className="list-inline">
                  <li>
                    <a href="timline.html">Timeline</a>
                  </li>
                  <li>
                    <a href="timeline-about.html" className="active">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="timeline-album.html">Album</a>
                  </li>
                  <li>
                    <a href="timeline-friends.html">Friends</a>
                  </li>
                </ul>
                <button className="btn-primary">Add Friend</button>
              </div>
            </div>
          </div>
          <div id="page-contents">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-7">
                <div className="about-profile">
                  <div className="about-content-block">
                    <h4 className="grey">
                      <i className="ion-ios-information-outline icon-in-title"></i>
                      Personal Information
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    </p>
                  </div>
                  <div className="about-content-block">
                    <h4 className="grey">
                      <i className="ion-ios-briefcase-outline icon-in-title"></i>
                      Work Experiences
                    </h4>
                    <div className="organization">
                      <img
                        src="images/envato.png"
                        alt=""
                        className="pull-left img-org"
                      />
                      <div className="work-info">
                        <h5>Envato</h5>
                        <p>
                          Seller -{" "}
                          <span className="text-grey">
                            1 February 2013 to present
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="organization">
                      <img
                        src="images/envato.png"
                        alt=""
                        className="pull-left img-org"
                      />
                      <div className="work-info">
                        <h5>Envato</h5>
                        <p>
                          Seller -{" "}
                          <span className="text-grey">
                            1 February 2013 to present
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="organization">
                      <img
                        src="images/envato.png"
                        alt=""
                        className="pull-left img-org"
                      />
                      <div className="work-info">
                        <h5>Envato</h5>
                        <p>
                          Seller -{" "}
                          <span className="text-grey">
                            1 February 2013 to present
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="about-content-block">
                    <h4 className="grey">
                      <i className="ion-ios-heart-outline icon-in-title"></i>
                      Interests
                    </h4>
                    <ul className="interests list-inline">
                      <li>
                        <span className="int-icons" title="Bycycle riding">
                          <i className="icon ion-android-bicycle"></i>
                        </span>
                      </li>
                      <li>
                        <span className="int-icons" title="Photography">
                          <i className="icon ion-ios-camera"></i>
                        </span>
                      </li>
                      <li>
                        <span className="int-icons" title="Shopping">
                          <i className="icon ion-android-cart"></i>
                        </span>
                      </li>
                      <li>
                        <span className="int-icons" title="Traveling">
                          <i className="icon ion-android-plane"></i>
                        </span>
                      </li>
                      <li>
                        <span className="int-icons" title="Eating">
                          <i className="icon ion-android-restaurant"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="about-content-block">
                    <h4 className="grey">
                      <i className="ion-ios-chatbubble-outline icon-in-title"></i>
                      Language
                    </h4>
                    <ul>
                      <li>
                        <a href="">Russian</a>
                      </li>
                      <li>
                        <a href="">English</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 static">
                <div id="sticky-sidebar">
                  <h4 className="grey">Sarah's activity</h4>
                  <div className="feed-item">
                    <div className="live-activity">
                      <p>
                        <a href="#" className="profile-link">
                          Sarah
                        </a>{" "}
                        Commended on a Photo
                      </p>
                      <p className="text-muted">5 mins ago</p>
                    </div>
                  </div>
                  <div className="feed-item">
                    <div className="live-activity">
                      <p>
                        <a href="#" className="profile-link">
                          Sarah
                        </a>{" "}
                        Has posted a photo
                      </p>
                      <p className="text-muted">an hour ago</p>
                    </div>
                  </div>
                  <div className="feed-item">
                    <div className="live-activity">
                      <p>
                        <a href="#" className="profile-link">
                          Sarah
                        </a>{" "}
                        Liked her friend's post
                      </p>
                      <p className="text-muted">4 hours ago</p>
                    </div>
                  </div>
                  <div className="feed-item">
                    <div className="live-activity">
                      <p>
                        <a href="#" className="profile-link">
                          Sarah
                        </a>{" "}
                        has shared an album
                      </p>
                      <p className="text-muted">a day ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
