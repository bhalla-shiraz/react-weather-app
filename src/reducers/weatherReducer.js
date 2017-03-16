const weatherReducer = (state = {}, action) => {
  const FETCH_WEATHER = 'FETCH_WEATHER';
  switch (action.type) {
    case FETCH_WEATHER:
      console.log(action.payload);
      console.log([ action.payload.data, ...state ]);
      return [ action.payload.data, ...state ]
    default:
      return state
  }
}

export default weatherReducer
