import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getUsersStart = () => ({
  type: actionTypes.GET_USER_START,
});

export const getUsersSuccess = (users) => ({
  type: actionTypes.GET_USER_SUCCESS,
  users,
});
export const getUsersFail = () => ({
  type: actionTypes.GET_USER_FAIL,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(getUsersStart());
  axios
    .get("https://6103057679ed680017482413.mockapi.io/users")
    .then((response) => {
      const users = response.data;
      dispatch(getUsersSuccess(users));
    })
    .catch((err) => {
      dispatch(getUsersFail(err));
    });
};

export const deleteUserStart = () => ({
  type: actionTypes.DELETE_USER_START,
});

export const deleteUserSuccess = (res) => ({
  type: actionTypes.DELETE_USER_SUCCESS,
  userId: res.id,
});

export const deleteUserFail = () => ({
  type: actionTypes.DELETE_USER_FAIL,
});

export const deleteUser = (userId) => (dispatch) => {
  dispatch(deleteUserStart());
  axios
    .delete(`https://6103057679ed680017482413.mockapi.io/users/${userId}`)
    .then((res) => {
      dispatch(deleteUserSuccess(res.data));
    })
    .catch(() => dispatch(deleteUserFail()));
};

export const editUserStart = () => ({
  type: actionTypes.EDIT_USER_START,
});

export const editUserSuccess = (res) => ({
  type: actionTypes.EDIT_USER_SUCCESS,
  userId: res.id,
  name: res.name,
  avatar: res.avatar,
  email: res.email,
});

export const editUserFail = () => ({
  type: actionTypes.EDIT_USER_FAIL,
});

export const editUser = (userId, email, avatar, name) => (dispatch) => {
  dispatch(editUserStart());
  axios
    .put(`https://6103057679ed680017482413.mockapi.io/users/${userId}`, {
      name,
      avatar,
      email,
    })
    .then((res) => {
      dispatch(editUserSuccess(res.data));
    })
    .catch(() => dispatch(editUserFail()));
};
