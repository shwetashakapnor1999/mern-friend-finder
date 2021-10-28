import React from "react";
import { Link } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import NewsfeedLeftbar from "./NewsfeedLeftbar";
import NewsfeedRightbar from "./NewsfeedRightbar";
import FileUpload from "./FileUpload";
import "./FileUpload.css";
export default function Newsfeedmessages() {
  return (
    <div>
      <UserNavbar />
      <div id="page-contents">
        <div class="container">
          <div class="row">
            {/* <!-- Newsfeed Common Side Bar Left
            ================================================= --> */}
            <NewsfeedLeftbar />
            <div className="col-md-7">
              <FileUpload />
              <div className="chat-room">
                <div className="row">
                  <div className="col-md-5">
                    <ul className="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer">
                      <li className="active">
                        <a href="#contact-1" data-toggle="tab">
                          <div className="contact">
                            <img
                              src="images/users/user-2.jpg"
                              alt=""
                              className="profile-photo-sm pull-left"
                            />
                            <div className="msg-preview">
                              <h6>Linda Lohan</h6>
                              <p className="text-muted">
                                Hi there, how are you
                              </p>
                              <small className="text-muted">a min ago</small>
                              <div className="chat-alert">1</div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#contact-2" data-toggle="tab">
                          <div className="contact">
                            <img
                              src="images/users/user-10.jpg"
                              alt=""
                              className="profile-photo-sm pull-left"
                            />
                            <div className="msg-preview">
                              <h6>Julia Cox</h6>
                              <p className="text-muted">see you soon</p>
                              <small className="text-muted">an hour ago</small>
                              <div className="seen">
                                <i className="icon ion-checkmark-round"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#contact-3" data-toggle="tab">
                          <div className="contact">
                            <img
                              src="images/users/user-3.jpg"
                              alt=""
                              className="profile-photo-sm pull-left"
                            />
                            <div className="msg-preview">
                              <h6>Sophia Lee</h6>
                              <p className="text-muted">Okay fine. thank you</p>
                              <small className="text-muted">13 hour ago</small>
                              <div className="replied">
                                <i className="icon ion-reply"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#contact-4" data-toggle="tab">
                          <div className="contact">
                            <img
                              src="images/users/user-4.jpg"
                              alt=""
                              className="profile-photo-sm pull-left"
                            />
                            <div className="msg-preview">
                              <h6>John Doe</h6>
                              <p className="text-muted">hey anybody there</p>
                              <small className="text-muted">Yesterday</small>
                              <div className="chat-alert">1</div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#contact-5" data-toggle="tab">
                          <div className="contact">
                            <img
                              src="images/users/user-9.jpg"
                              alt=""
                              className="profile-photo-sm pull-left"
                            />
                            <div className="msg-preview">
                              <h6>Anna Young</h6>
                              <p className="text-muted">I gotta go</p>
                              <small className="text-muted">2 days ago</small>
                              <div className="seen">
                                <i className="icon ion-checkmark-round"></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#contact-6" data-toggle="tab">
                          <div className="contact">
                            <img
                              src="images/users/user-8.jpg"
                              alt=""
                              className="profile-photo-sm pull-left"
                            />
                            <div className="msg-preview">
                              <h6>Richard Bell</h6>
                              <p className="text-muted">Hey there?</p>
                              <small className="text-muted">2 days ago</small>
                              <div className="chat-alert">1</div>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-7">
                    <div className="tab-content scrollbar-wrapper wrapper scrollbar-outer">
                      <div className="tab-pane active" id="contact-1">
                        <div className="chat-body">
                          <ul className="chat-message">
                            <li className="left">
                              <img
                                src="images/users/user-2.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Linda Lohan</h5>
                                  <small className="text-muted">
                                    3 days ago
                                  </small>
                                </div>
                                <p>
                                  Hi honey, how are you doing???? Long time no
                                  see. Where have you been?
                                </p>
                              </div>
                            </li>
                            <li className="right">
                              <img
                                src="images/users/user-1.jpg"
                                alt=""
                                className="profile-photo-sm pull-right"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sarah Cruiz</h5>
                                  <small className="text-muted">
                                    3 days ago
                                  </small>
                                </div>
                                <p>I have been on vacation</p>
                              </div>
                            </li>
                            <li className="right">
                              <img
                                src="images/users/user-1.jpg"
                                alt=""
                                className="profile-photo-sm pull-right"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sarah Cruiz</h5>
                                  <small className="text-muted">
                                    3 days ago
                                  </small>
                                </div>
                                <p>
                                  it was a great time for me. we had a lot of
                                  fun <i className="em em-blush"></i>
                                </p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-2.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Linda Lohan</h5>
                                  <small className="text-muted">
                                    3 days ago
                                  </small>
                                </div>
                                <p>
                                  that's cool I wish I were you{" "}
                                  <i className="em em-expressionless"></i>
                                </p>
                              </div>
                            </li>
                            <li className="right">
                              <img
                                src="images/users/user-1.jpg"
                                alt=""
                                className="profile-photo-sm pull-right"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sarah Cruiz</h5>
                                  <small className="text-muted">
                                    3 days ago
                                  </small>
                                </div>
                                <p>
                                  <i className="em em-hand"></i>
                                </p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-2.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Linda Lohan</h5>
                                  <small className="text-muted">
                                    a min ago
                                  </small>
                                </div>
                                <p>Hi there, how are you</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane" id="contact-2">
                        <div className="chat-body">
                          <ul className="chat-message">
                            <li className="left">
                              <img
                                src="images/users/user-10.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Julia Cox</h5>
                                  <small className="text-muted">
                                    a day ago
                                  </small>
                                </div>
                                <p>Hi</p>
                              </div>
                            </li>
                            <li className="right">
                              <img
                                src="images/users/user-1.jpg"
                                alt=""
                                className="profile-photo-sm pull-right"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sarah Cruiz</h5>
                                  <small className="text-muted">
                                    a day ago
                                  </small>
                                </div>
                                <p>hellow</p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-10.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Julia Cox</h5>
                                  <small className="text-muted">
                                    an hour ago
                                  </small>
                                </div>
                                <p>good</p>
                              </div>
                            </li>
                            <li className="right">
                              <img
                                src="images/users/user-1.jpg"
                                alt=""
                                className="profile-photo-sm pull-right"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sarah Cruiz</h5>
                                  <small className="text-muted">
                                    an hour ago
                                  </small>
                                </div>
                                <p>see you soon</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane" id="contact-3">
                        <div className="chat-body">
                          <ul className="chat-message">
                            <li className="right">
                              <img
                                src="images/users/user-1.jpg"
                                alt=""
                                className="profile-photo-sm pull-right"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sarah</h5>
                                  <small className="text-muted">
                                    2 days ago
                                  </small>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.{" "}
                                </p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-3.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sophia Lee</h5>
                                  <small className="text-muted">
                                    a day ago
                                  </small>
                                </div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt
                                </p>
                              </div>
                            </li>
                            <li className="right">
                              <img
                                src="images/users/user-1.jpg"
                                alt=""
                                className="profile-photo-sm pull-right"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sarah Cruiz</h5>
                                  <small className="text-muted">
                                    13 hours ago
                                  </small>
                                </div>
                                <p>Okay fine. thank you</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane" id="contact-4">
                        <div className="chat-body">
                          <ul className="chat-message">
                            <li className="left">
                              <img
                                src="images/users/user-4.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>John Doe</h5>
                                  <small className="text-muted">
                                    a day ago
                                  </small>
                                </div>
                                <p>
                                  At vero eos et accusamus et iusto odio
                                  dignissimos ducimus qui blanditiis praesentium
                                  voluptatum deleniti atque corrupti quos
                                  dolores et quas molestias excepturi sint
                                  occaecati cupiditate non provident, similique
                                  sunt in culpa qui officia deserunt mollitia
                                  animi, id est laborum et dolorum fuga. Et
                                  harum quidem rerum facilis est et expedita
                                  distinctio. Nam libero tempore, cum soluta
                                  nobis est eligendi optio cumque nihil impedit
                                  quo minus id quod maxime placeat facere
                                  possimus, omnis voluptas assumenda est, omnis
                                  dolor repellendus. Temporibus autem quibusdam
                                  et aut officiis debitis aut rerum
                                  necessitatibus saepe eveniet ut et voluptates
                                  repudiandae sint et molestiae non recusandae.
                                </p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-4.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>John Doe</h5>
                                  <small className="text-muted">
                                    a day ago
                                  </small>
                                </div>
                                <p>hey anybody there</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane" id="contact-5">
                        <div className="chat-body">
                          <ul className="chat-message">
                            <li className="left">
                              <img
                                src="images/users/user-9.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Anna Young</h5>
                                  <small className="text-muted">
                                    2 days ago
                                  </small>
                                </div>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
                                  Nemo enim ipsam voluptatem quia voluptas sit
                                  aspernatur aut odit aut fugit, sed quia
                                  consequuntur magni dolores
                                </p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-9.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Anna Young</h5>
                                  <small className="text-muted">
                                    2 days ago
                                  </small>
                                </div>
                                <p>
                                  Sed ut perspiciatis unde omnis iste natus
                                  error sit voluptatem accusantium doloremque
                                  laudantium, totam rem aperiam, eaque ipsa quae
                                  ab illo inventore veritatis et quasi
                                  architecto beatae vitae dicta sunt explicabo.
                                </p>
                              </div>
                            </li>
                            <li className="right">
                              <img
                                src="images/users/user-1.jpg"
                                alt=""
                                className="profile-photo-sm pull-right"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Sarah Cruiz</h5>
                                  <small className="text-muted">
                                    2 days ago
                                  </small>
                                </div>
                                <p>I gotta go</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="tab-pane" id="contact-6">
                        <div className="chat-body">
                          <ul className="chat-message">
                            <li className="left">
                              <img
                                src="images/users/user-8.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Richard Bell</h5>
                                  <small className="text-muted">
                                    2 days ago
                                  </small>
                                </div>
                                <p>Hello</p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-8.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Richard Bell</h5>
                                  <small className="text-muted">
                                    2 days ago
                                  </small>
                                </div>
                                <p>Hi</p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-8.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Richard Bell</h5>
                                  <small className="text-muted">
                                    2 days ago
                                  </small>
                                </div>
                                <p>Hey</p>
                              </div>
                            </li>
                            <li className="left">
                              <img
                                src="images/users/user-8.jpg"
                                alt=""
                                className="profile-photo-sm pull-left"
                              />
                              <div className="chat-item">
                                <div className="chat-item-header">
                                  <h5>Richard Bell</h5>
                                  <small className="text-muted">
                                    2 days ago
                                  </small>
                                </div>
                                <p>Hey there</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="send-message">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Type your message"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">
                            Send
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>

            <NewsfeedRightbar />
          </div>
        </div>
      </div>
    </div>
  );
}
