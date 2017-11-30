import * as types from '../Actions/types';
export default function (state = {}, action){
  switch(action.type){
    case types.ERROR:
      if (action.payload === "bad_city"){
        console.log("Bad city! Setting city error");
        return {...state, cityError: true}
      }
    case types.GET_RESTS:
      return {...state, cityError: false}
    default:
      return state;
  }
}
