import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import FileUpload from "./FileUpload";
import NewsfeedLeftbar from "./NewsfeedLeftbar";
import "./FileUpload.css";
import NewsfeedRightbar from "./NewsfeedRightbar";
import { useSelector, useDispatch } from "react-redux";

import { getAllFriends } from "../actions/actions";
export default function Newsfeedfriends() {
  const { id } = useSelector((state) => state.data);
  const { friends } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFriends(id));
  }, []);

  const GetALLFriends = ({ user, id }) => {
    return (
      <div className="col-md-6 col-sm-6">
        <div className="friend-card">
          <img
            src="images/covers/1.jpg"
            alt="profile-cover"
            className="img-responsive cover"
          />
          <div className="card-info">
            <img
              src={`http://localhost:3000/${user.user_photo}`}
              alt={user.name}
              className="profile-photo-lg"
            />
            <div className="friend-info">
              <a href="#" className="pull-right text-green">
                My Friend
              </a>
              <h5>
                <a href="timeline.html" className="profile-link">
                  {user.name}
                </a>
              </h5>
              <p>{user.username}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <UserNavbar />
      <div id="page-contents">
        <div className="container">
          <div className="row">
            <NewsfeedLeftbar />
            <div className="col-md-7">
              <FileUpload />
              <div className="friend-list">
                <div className="row">
                  {friends &&
                    friends.map((user) => {
                      // console.log(user);
                      return <GetALLFriends user={user} id={user._id} />;
                    })}
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
