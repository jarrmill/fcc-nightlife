import { connect } from 'react-redux';
import * as actions from '../Actions';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {ResultsContainer, MainTitle} from './results_styling';
import Panel from './rest_panel';
import _ from 'lodash';

class Results extends Component {
  constructor(props){
    super(props);
    this.rsvp = this.rsvp.bind(this);
  }
  renderTitle(){
    if(this.props.restaurants){
      return <MainTitle>Results for {this.props.restaurants[0].city}</MainTitle>
    }else{
      if(this.props.errors.cityError){
        return <MainTitle>No city found under that name.</MainTitle>
      } else {
        return (
          <div>
            <MainTitle>Uh oh! No search has been made</MainTitle>
            <h1>Search for a new city</h1>
          </div>
        );
      }
    }
  }
  renderList(){
    /*return _.map(this.props.restaurants[0], restaurant => {
      console.log(restaurant);
      return (<div>
          <h1>Restaurant</h1>
          {restaurant.name}
        </div>)
    });*/
    if(this.props.restaurants){
      var restList = this.props.restaurants.map((restaurant, i) => {
        return (
          <Panel restaurant={restaurant} key={i} rsvp={this.rsvp} auth={this.props.auth}/>
      )
      })
      return restList;
    }else {
      return [];
    }
  }
  //guestIndex will be -1 if guest has not rsvp'ed
  rsvp(rest, guestProfile, rsvps, guestIndex){
    var rsvpList = rsvps.slice();
    var newRSVPS;
    if(guestIndex !== -1){
      rsvpList.splice(guestIndex, 1);
      newRSVPS = rsvpList;
    }
    else{
      rsvpList.push(guestProfile.user.nickname);
      newRSVPS = rsvpList;
    }
    this.props.rsvp(rest, newRSVPS);
  }
  render() {
    return(
      <ResultsContainer>
      {this.renderTitle()}
      {this.renderList()}
      </ResultsContainer>
    )
  }
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    restaurants: state.restaurants.restaurants,
    errors: state.errors
  }
}
export default withRouter(connect(mapStateToProps, actions)(Results));
