import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT,
} from "../actions/auth"

const initialState = {
  token: null,
  error: null,
  loading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        loading: false,
        error: null,
      };

    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        token: null
      };

    default:
      return state
  }
}

export default authReducer