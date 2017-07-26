const initialState = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false,
  fetched: false,
  error: null,
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_USER': {
      return { ...state, fetching: true };
    }
    case 'GET_CURRENT_USER': {
      return { ...state, currentUser: action.currentUser };
    }
    default: break;
  }

  return state;
}
