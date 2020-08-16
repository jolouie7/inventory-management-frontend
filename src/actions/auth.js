import axios from "axios"
export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export const authStart = () => {
  return {
    type: AUTH_START
  }
}

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    token: token
  }
}

export const authFailure = (error) => {
  return {
    type: AUTH_FAILURE,
    error: error
  }
}

export const logout = () => {
  localStorage.removeItem("user"); //remove user or token?
  return {
    type: AUTH_LOGOUT
  }
}

export const authLogin = (username, password) => {
  return dispatch => {
    dispatch(authStart());
    axios.post("http://127.0.0.1:8000/rest-auth/login/", {
      username: username,
      password: password
    })
    .then(res => {
      const token = res.data.key;
      // Below is a expiration date for 1 hour
      // const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
      localStorage.setItem("token", token)
      // localStorage.setItem("expirationDate", expirationDate)
      dispatch(authSuccess(token));
    })
    .catch(err => {
      dispatch(authFailure(err))
    })
  }
}

export const authSignup = (username, email, password1, password2) => {
  return dispatch => {
    dispatch(authStart());
    axios.post("http://127.0.0.1:8000/rest-auth/registration/", {
      username: username,
      email: email,
      password1: password1,
      password2: password2
    })
    .then(res => {
      const token = res.data.key;
      // Below is a expiration date for 1 hour
      // const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
      localStorage.setItem("token", token)
      // localStorage.setItem("expirationDate", expirationDate)
      dispatch(authSuccess(token));
    })
    .catch(err => {
      dispatch(authFailure(err))
    })
  }
}