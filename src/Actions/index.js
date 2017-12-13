import axios from 'axios';
import {TEST_ACTION, GET_RESTS, RSVP, ERROR} from './types';

const root_url= process.env.REACT_APP_DB_PATH;
//const root_url = "http://localhost:3091/nightlife";
if (!root_url){
  console.log("Difficulty finding database path in environment");
  console.log("root_url");
}

export function testAction(){
  return {type: TEST_ACTION};
}
export function getRestaurants(city){
  return function(dispatch){
    axios.get(`${root_url}/getcity`, {headers:{city:city}}).then(response => {
          if(!response.data){
            console.log("Bad city name");
            dispatch({type: ERROR, payload: "bad_city"});
          }
          console.log("Received city data for ", city);
          dispatch({type: GET_RESTS, payload: response.data});
      }).catch(
        (error) => { console.error(error);
      });
  }
}

export function rsvp(restaurant, newRSVPList){
  var restaurantID = restaurant._id;
  var city = restaurant.city;
  return function(dispatch){
    axios.post(`${root_url}/rsvp`, {id: restaurantID, rsvps: newRSVPList}).then(response => {
      axios.get(`${root_url}/getcity`, {headers:{city:city}}).then(response => {
            dispatch({type: RSVP, payload: response.data});
        }).catch(
          (error) => { console.error(error);
        });
    }).catch((error) => {
      console.error(error);
    });
  }
}
