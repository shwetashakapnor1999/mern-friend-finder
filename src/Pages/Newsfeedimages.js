import React from "react";
import UserNavbar from "./UserNavbar";
import NewsfeedLeftbar from "./NewsfeedLeftbar";
import NewsfeedRightbar from "./NewsfeedRightbar";
import FileUpload from "./FileUpload";
import "./FileUpload.css";
export default function Newsfeedimages() {
  return (
    <div>
      <UserNavbar />
      <div id="page-contents">
        <div class="container">
          <div class="row">
            {/* <!-- Newsfeed Common Side Bar Left
            ================================================= --> */}
            <NewsfeedLeftbar />
            <div class="col-md-7">
              <FileUpload />

              <div class="media">
                <div
                  class="row js-masonry"
                  data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'
                >
                  <div class="grid-sizer col-md-6 col-sm-6"></div>
                  <div class="grid-item col-md-6 col-sm-6">
                    <div class="media-grid">
                      <div
                        class="img-wrapper"
                        data-toggle="modal"
                        data-target=".modal-1"
                      >
                        <img
                          src="images/post-images/6.jpg"
                          alt=""
                          class="img-responsive post-image"
                        />
                      </div>
                      <div class="media-info">
                        <div class="reaction">
                          <a class="btn text-green">
                            <i class="fa fa-thumbs-up"></i> 63
                          </a>
                          <a class="btn text-red">
                            <i class="fa fa-thumbs-down"></i> 12
                          </a>
                        </div>
                        <div class="user-info">
                          <img
                            src="images/users/user-8.jpg"
                            alt=""
                            class="profile-photo-sm pull-left"
                          />
                          <div class="user">
                            <h6>
                              <a href="#" class="profile-link">
                                Richard Bell
                              </a>
                            </h6>
                            <a class="text-green" href="#">
                              Friend
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-item col-md-6 col-sm-6">
                    <div class="media-grid">
                      <div
                        class="img-wrapper"
                        data-toggle="modal"
                        data-target=".modal-2"
                      >
                        <img
                          src="images/post-images/3.jpg"
                          alt=""
                          class="img-responsive post-image"
                        />
                      </div>
                      <div class="media-info">
                        <div class="reaction">
                          <a class="btn text-green">
                            <i class="fa fa-thumbs-up"></i> 100
                          </a>
                          <a class="btn text-red">
                            <i class="fa fa-thumbs-down"></i> 99
                          </a>
                        </div>
                        <div class="user-info">
                          <img
                            src="images/users/user-5.jpg"
                            alt=""
                            class="profile-photo-sm pull-left"
                          />
                          <div class="user">
                            <h6>
                              <a href="#" class="profile-link">
                                Sarah Cruiz
                              </a>
                            </h6>
                            <a class="text-green" href="#">
                              Friend
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-item col-md-6 col-sm-6">
                    <div class="media-grid">
                      <div
                        class="img-wrapper"
                        data-toggle="modal"
                        data-target=".modal-5"
                      >
                        <img
                          src="images/post-images/4.jpg"
                          alt=""
                          class="img-responsive post-image"
                        />
                      </div>
                      <div class="media-info">
                        <div class="reaction">
                          <a class="btn text-green">
                            <i class="fa fa-thumbs-up"></i> 34
                          </a>
                          <a class="btn text-red">
                            <i class="fa fa-thumbs-down"></i> 2
                          </a>
                        </div>
                        <div class="user-info">
                          <img
                            src="images/users/user-3.jpg"
                            alt=""
                            class="profile-photo-sm pull-left"
                          />
                          <div class="user">
                            <h6>
                              <a href="#" class="profile-link">
                                Sophia Lee
                              </a>
                            </h6>
                            <a class="text-green" href="#">
                              Friend
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-item col-md-6 col-sm-6">
                    <div class="media-grid">
                      <div
                        class="img-wrapper"
                        data-toggle="modal"
                        data-target=".modal-6"
                      >
                        <img
                          src="images/post-images/7.jpg"
                          alt=""
                          class="img-responsive post-image"
                        />
                      </div>
                      <div class="media-info">
                        <div class="reaction">
                          <a class="btn text-green">
                            <i class="fa fa-thumbs-up"></i> 71
                          </a>
                          <a class="btn text-red">
                            <i class="fa fa-thumbs-down"></i> 0
                          </a>
                        </div>
                        <div class="user-info">
                          <img
                            src="images/users/user-4.jpg"
                            alt=""
                            class="profile-photo-sm pull-left"
                          />
                          <div class="user">
                            <h6>
                              <a href="#" class="profile-link">
                                John Doe
                              </a>
                            </h6>
                            <a class="text-green" href="#">
                              Friend
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-item col-md-6 col-sm-6">
                    <div class="media-grid">
                      <div
                        class="img-wrapper"
                        data-toggle="modal"
                        data-target=".modal-7"
                      >
                        <img
                          src="images/post-images/1.jpg"
                          alt=""
                          class="img-responsive post-image"
                        />
                      </div>
                      <div class="media-info">
                        <div class="reaction">
                          <a class="btn text-green">
                            <i class="fa fa-thumbs-up"></i> 55
                          </a>
                          <a class="btn text-red">
                            <i class="fa fa-thumbs-down"></i> 2
                          </a>
                        </div>
                        <div class="user-info">
                          <img
                            src="images/users/user-5.jpg"
                            alt=""
                            class="profile-photo-sm pull-left"
                          />
                          <div class="user">
                            <h6>
                              <a href="#" class="profile-link">
                                Alexis Clark
                              </a>
                            </h6>
                            <a class="text-green" href="#">
                              Friend
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-item col-md-6 col-sm-6">
                    <div class="media-grid">
                      <div
                        class="img-wrapper"
                        data-toggle="modal"
                        data-target=".modal-8"
                      >
                        <img
                          src="images/post-images/9.jpg"
                          alt=""
                          class="img-responsive post-image"
                        />
                      </div>
                      <div class="media-info">
                        <div class="reaction">
                          <a class="btn text-green">
                            <i class="fa fa-thumbs-up"></i> 81
                          </a>
                          <a class="btn text-red">
                            <i class="fa fa-thumbs-down"></i> 1
                          </a>
                        </div>
                        <div class="user-info">
                          <img
                            src="images/users/user-2.jpg"
                            alt=""
                            class="profile-photo-sm pull-left"
                          />
                          <div class="user">
                            <h6>
                              <a href="#" class="profile-link">
                                Linda Lohan
                              </a>
                            </h6>
                            <a class="text-green" href="#">
                              Friend
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-item col-md-6 col-sm-6">
                    <div class="media-grid">
                      <div
                        class="img-wrapper"
                        data-toggle="modal"
                        data-target=".modal-9"
                      >
                        <img
                          src="images/post-images/8.jpg"
                          alt=""
                          class="img-responsive post-image"
                        />
                      </div>
                      <div class="media-info">
                        <div class="reaction">
                          <a class="btn text-green">
                            <i class="fa fa-thumbs-up"></i> 47
                          </a>
                          <a class="btn text-red">
                            <i class="fa fa-thumbs-down"></i> 9
                          </a>
                        </div>
                        <div class="user-info">
                          <img
                            src="images/users/user-5.jpg"
                            alt=""
                            class="profile-photo-sm pull-left"
                          />
                          <div class="user">
                            <h6>
                              <a href="#" class="profile-link">
                                Julia Cox
                              </a>
                            </h6>
                            <a class="text-green" href="#">
                              Friend
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
