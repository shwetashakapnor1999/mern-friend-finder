import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function NewsfeedLeftbar() {
  const { name } = useSelector((state) => state.data);
  return (
    <div>
      <div className="col-md-3 static">
        <div className="profile-card">
          <img
            src="images/users/img_avatar.png"
            alt="user"
            className="profile-photo"
          />
          <h5>
            <a href="timeline.html" className="text-white">
              {name}
            </a>
          </h5>
          <a href="#" className="text-white">
            <i className="ion ion-android-person-add"></i> 1,299 followers
          </a>
        </div>
        <ul className="nav-news-feed">
          <li>
            <i className="icon ion-ios-paper"></i>
            <div>
              <Link to="/newsfeed">My Newsfeed</Link>
            </div>
          </li>
          <li>
            <i className="icon ion-ios-people-outline"></i>
            <div>
              <Link to="/newsfeedfriends">Friends</Link>
            </div>
          </li>
          <li>
            <i className="icon ion-chatboxes"></i>
            <div>
              <Link to="/newsfeedmessages">Messages</Link>
            </div>
          </li>
          <li>
            <i className="icon ion-images"></i>
            <div>
              <Link to="/newsfeedimages">Images</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
