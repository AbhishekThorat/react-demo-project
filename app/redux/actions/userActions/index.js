function register(data) {
  return (dispatch) => {
    dispatch({
      type: 'FETCH_USER',
      payload: data,
    });
  };
}

const userData = {
  name: 'abhishek'
};

const getCurrentUser = () => (dispatch) => {
  dispatch({
    type: 'GET_CURRENT_USER',
    currentUser: userData,
  });
};

export { register, getCurrentUser };
