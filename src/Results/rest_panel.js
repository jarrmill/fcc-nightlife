import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {PanelContainer, PicContainer, Pic, TextContainer, Title, Body, Button, NullButton} from './results_styling';

const Panel = ({restaurant, key, rsvp, auth}) => {
  const { isAuthenticated } = auth;
  return (
    <PanelContainer key={key}>
      <PicContainer>
       <Pic src={restaurant.image_url} alt={restaurant.name} />
      </PicContainer>
      <TextContainer>
        <Title>{restaurant.name}</Title>
        <Body>{restaurant.rsvps.length} RSVPs</Body>
      </TextContainer>
      {renderButton(rsvp, restaurant, restaurant.rsvps, auth)}
    </PanelContainer>
  )
}

function renderButton(rsvpAction, rest, rsvps, auth) {
  if (auth.authenticated && auth.user.nickname){
    var rsvpIndex = rsvps.indexOf(auth.user.nickname);
    if(rsvpIndex == -1){
      return (
        <Button onClick={() => rsvpAction(rest, auth, rsvps, rsvpIndex)}>RSVP</Button>
      )
    }
    else {
      var message = "I'm going!";
      return (
        <Button rsvped onClick={() => rsvpAction(rest, auth, rsvps, rsvpIndex)}>{message}</Button>
      )
    }
  } else {
    return (
      <NullButton></NullButton>
    )
  }
}
Panel.propTypes = {
  restaurant: PropTypes.object.isRequired,
  key: PropTypes.number,
  auth: PropTypes.object.isRequired
}

export default Panel;
