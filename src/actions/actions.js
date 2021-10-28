import * as actionTypes from "./index";
import axios from "axios";

let hostAddress = "http://localhost:3000";

export const reset = () => (dispatch) => {
  dispatch({ type: actionTypes.RESET });
};

export const login = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post(`${hostAddress}/webapi/userlogin`, {
      username,
      password,
    });

    if (res.data.isError === true) {
      return dispatch({
        type: actionTypes.SET_ERROR,
        errorMessage: res.data.errorMessage,
      });
    } else {
      return dispatch({
        type: actionTypes.LOGIN,
        token: res.data.token,
        username: res.data.user.username,
        name: res.data.user.name,
        id: res.data.user.id,
        isAdmin: res.data.isAdmin,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.SET_ERROR,
      errorMessage: "Incorrect Email or Password!",
    });
  }
};

export const getFriendsRecommendations = (userId) => async (dispatch) => {
  try {
    const res = await axios.post(`${hostAddress}/webapi/getRecommendations`, {
      userId,
    });

    if (res.data.response === "failed") {
      return dispatch({
        type: actionTypes.SET_ERROR,
        errorMessage: "No Recommendation Found",
      });
    } else {
      // console.log(res.data);
      return dispatch({
        type: actionTypes.ADD_RECOMMENDATIONS,
        recommendedFriends: res.data.result,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.SET_ERROR,
      errorMessage: "Error Occured",
    });
  }
};

export const getAllFriends = (userId) => async (dispatch) => {
  try {
    const res = await axios.post(`${hostAddress}/webapi/getAllFriends`, {
      userId,
    });

    if (res.data.response === "failed") {
      return dispatch({
        type: actionTypes.SET_ERROR,
        errorMessage: "No Friends Found",
      });
    } else {
      console.log(res.data);
      return dispatch({
        type: actionTypes.FRIEND_LISTS,
        friends: res.data.result,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.SET_ERROR,
      errorMessage: "Error Occured",
    });
  }
};
