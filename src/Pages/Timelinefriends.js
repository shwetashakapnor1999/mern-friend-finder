import React from "react";
import UserNavbar from "./UserNavbar";
export default function Timelinefriends() {
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
                      <a href="timeline-about.html">About</a>
                    </li>
                    <li>
                      <a href="timeline-album.html">Album</a>
                    </li>
                    <li>
                      <a href="timeline-friends.html" className="active">
                        Friends
                      </a>
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
                    <a href="timeline-about.html">About</a>
                  </li>
                  <li>
                    <a href="timeline-album.html">Album</a>
                  </li>
                  <li>
                    <a href="timeline-friends.html" className="active">
                      Friends
                    </a>
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
                <div className="friend-list">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/1.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-3.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a href="#" className="pull-right text-green">
                              My Friend
                            </a>
                            <h5>
                              <a href="timeline.html" className="profile-link">
                                Sophia Lee
                              </a>
                            </h5>
                            <p>Student at Harvard</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/3.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-4.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a href="#" className="pull-right text-green">
                              My Friend
                            </a>
                            <h5>
                              <a href="timeline.html" className="profile-link">
                                John Doe
                              </a>
                            </h5>
                            <p>Traveler</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/4.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-10.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a
                              href="timeline.html"
                              className="pull-right text-green"
                            >
                              My Friend
                            </a>
                            <h5>
                              <a href="#" className="profile-link">
                                Julia Cox
                              </a>
                            </h5>
                            <p>Art Designer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/5.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-7.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a href="#" className="pull-right text-green">
                              My Friend
                            </a>
                            <h5>
                              <a href="timelime.html" className="profile-link">
                                Robert Cook
                              </a>
                            </h5>
                            <p>Photographer at Photography</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/6.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-8.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a href="#" className="pull-right text-green">
                              My Friend
                            </a>
                            <h5>
                              <a href="timeline.html" className="profile-link">
                                Richard Bell
                              </a>
                            </h5>
                            <p>Graphic Designer at Envato</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/7.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-2.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a href="#" className="pull-right text-green">
                              My Friend
                            </a>
                            <h5>
                              <a href="timeline.html" className="profile-link">
                                Linda Lohan
                              </a>
                            </h5>
                            <p>Software Engineer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/8.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-9.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a href="#" className="pull-right text-green">
                              My Friend
                            </a>
                            <h5>
                              <a href="timeline.html" className="profile-link">
                                Anna Young
                              </a>
                            </h5>
                            <p>Musician</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/9.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-6.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a href="#" className="pull-right text-green">
                              My Friend
                            </a>
                            <h5>
                              <a href="timeline.html" className="profile-link">
                                James Carter
                              </a>
                            </h5>
                            <p>CEO at IT Farm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="friend-card">
                        <img
                          src="images/covers/10.jpg"
                          alt="profile-cover"
                          className="img-responsive cover"
                        />
                        <div className="card-info">
                          <img
                            src="images/users/user-5.jpg"
                            alt="user"
                            className="profile-photo-lg"
                          />
                          <div className="friend-info">
                            <a href="#" className="pull-right text-green">
                              My Friend
                            </a>
                            <h5>
                              <a href="timeline.html" className="profile-link">
                                Alexis Clark
                              </a>
                            </h5>
                            <p>Traveler</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
