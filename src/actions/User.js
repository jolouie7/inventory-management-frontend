export const FETCH_USER_BEGIN = "FETCH_USER_BEGIN";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const fetchUserBegin = () => ({
  type: FETCH_USER_BEGIN,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  // ! I'm not sure if i need to user object in braces
  payload: { user },
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: { error },
});

// An Example of Fetching Data with Redux
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchUserBegin());
    return fetch("/products") // ! Endpoint to get the single user
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchUserSuccess(json.user)); // dispatch fetchUserSuccess to the reducer to update state
        return json.user;
      })
      .catch((error) => dispatch(fetchUserFailure(error)));
  };
};
