const SET_LOCATION = 'SET_LOCATION';

const initialState = {
  location: '',

};

export default function setLocation(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION:
      return Object.assign({}, state);
    default:
      return state;
  }
}
