import * as types from '../Actions/types';
export default function (state = {}, action){
  switch(action.type){
    case types.GET_RESTS:
    case types.RSVP:
      return {...state, restaurants: action.payload};
    case types.PERSIST:
      if (action.payload.restaurants){
        return {...state, restaurants: action.payload.restaurants.restaurants};
      } else {
        console.log("Uh oh, either no rests or something went wrong.");
      }
    default:
      return state;
  }
}
