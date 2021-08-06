import * as actionTypes from "../actions/actionTypes";

const initialState = {
  users: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_START:
      return { ...state };
    case actionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        users: action.users.reduce((acc, cur) => {
          return { ...acc, [cur.id]: cur };
        }, {}),
      };
    case actionTypes.GET_USER_FAIL:
      return { ...state };
    case actionTypes.DELETE_USER_START:
      return { ...state };
    case actionTypes.DELETE_USER_SUCCESS:
      const { [action.userId]: xyz, ...rest } = state.users;
      return { ...state, users: { ...rest } };
    case actionTypes.DELETE_USER_FAIL:
      return { ...state };
    case actionTypes.EDIT_USER_START:
      return { ...state };
    case actionTypes.EDIT_USER_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          [action.userId]: {
            ...state.users[action.userId],
            name: action.name,
            avatar: action.avatar,
            email: action.email,
          },
        },
      };
    case actionTypes.EDIT_USER_FAIL:
      return { ...state };
    default:
      return state;
  }
};

export default usersReducer;
