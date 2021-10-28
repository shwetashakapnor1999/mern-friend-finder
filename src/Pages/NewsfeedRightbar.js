import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { getFriendsRecommendations } from "../actions/actions";

export default function NewsfeedRightbar() {
  const { id } = useSelector((state) => state.data);
  const { recommendedFriends } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const addFriend = async (friendId) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/webapi/addNewFriend",
        {
          userId: id,
          friendId,
        }
      );
      console.log(res.data);
      if (res.data.response === "success") {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getFriendsRecommendations(id));
  }, []);

  const UserToFollow = ({ user, id }) => {
    return (
      <div className="follow-user" id={id}>
        <img
          src={`http://localhost:3000/${user.user_photo}`}
          alt={user.name}
          className="profile-photo-sm pull-left"
        />
        <div>
          <h5>
            <a href="timeline.html">{user.name}</a>
          </h5>
          <a
            className="text-green"
            onClick={() => {
              addFriend(user._id);
            }}
          >
            Add friend
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="col-md-2 static">
        <div className="suggestions" id="sticky-sidebar">
          <h4 className="grey">Who to Follow</h4>
          {recommendedFriends &&
            recommendedFriends.map((user) => {
              // console.log(user);
              return <UserToFollow user={user} id={user._id} />;
            })}
        </div>
      </div>
    </div>
  );
}
