import * as actionTypes from "../actions";

const initialState = {
  token: "",
  username: "",
  name: "",
  id: "",
  isLoggedIn: false,
  isAdmin: false,
  errorMessage: "",
  recommendedFriends: [],
  friends: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...initialState,
        token: action.token,
        username: action.username,
        name: action.name,
        id: action.id,
        isLoggedIn: true,
        isAdmin: action.isAdmin,
      };
    case actionTypes.SET_ERROR:
      return {
        ...initialState,
        errorMessage: action.errorMessage,
        isLoggedIn: false,
      };
    case actionTypes.FRIEND_LISTS:
      return { ...state, friends: action.friends };
    case actionTypes.ADD_RECOMMENDATIONS:
      return { ...state, recommendedFriends: action.recommendedFriends };
    case actionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
