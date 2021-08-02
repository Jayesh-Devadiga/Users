import { BACK_TO_HOME, FETCH_USERS, SHOW_USER_DETAILS } from "../actions/types";

const initialState = {
  usersList: [],
  user: {},
  showingUserDetails: false,
  page: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        usersList: [...state.usersList, ...action.payload],
        page: state.page + 1,
      };
    case SHOW_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
        showingUserDetails: true,
      };
    case BACK_TO_HOME:
      return {
        ...state,
        user: {},
        showingUserDetails: false,
      };
    default:
      return state;
  }
};
