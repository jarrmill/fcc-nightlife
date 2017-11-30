import * as types from '../Actions/types';
export default function (state = {}, action){
  switch(action.type){
    case types.PERSIST:
      if (action.payload.auth){
        return {...state, authenticated: action.payload.auth.authenticated, user: action.payload.auth.user};
      } else {
        console.log("Uh oh, either no rests or something went wrong.");
      }
    case types.SET_USER:
      return {...state, authenticated: true, user: action.payload};
    case types.DEAUTH_USER:
      return {...state, authenticated: false, user: {}};
    default:
      return state;
  }
}
