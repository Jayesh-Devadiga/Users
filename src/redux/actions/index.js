import API from "../../utils/API";
import { BACK_TO_HOME, FETCH_USERS, SHOW_USER_DETAILS } from "./types";

export const fetchUsers = (page) => async (dispatch) => {
  const users = await API.get(`?page=${page}&results=10`);
  console.log(users.data.results);
  dispatch({ type: FETCH_USERS, payload: users.data.results });
};

export const showUserDetails = (user) => {
  return { type: SHOW_USER_DETAILS, payload: user };
};

export const backToHome = () => {
  return { type: BACK_TO_HOME };
};
