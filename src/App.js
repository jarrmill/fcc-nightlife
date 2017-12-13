import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';
import { Header, HeaderButton } from './container_styling';

import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.history.push("/search");
  }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const AuthBool = this.props.reduxAuth.authenticated;
    const RestsBool = (this.props.restaurants) ? true : false;
    return (
      <div>
        <Header>
          <div>
            <HeaderButton
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </HeaderButton>
            {
              !AuthBool && (
                  <HeaderButton
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </HeaderButton>
                )
            }
            {
              (AuthBool) && (
                  <HeaderButton
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </HeaderButton>
                )
            }
            {
              (RestsBool) && (
                  <HeaderButton
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'results')}
                  >
                    Results
                  </HeaderButton>
                )
            }
          </div>
        </Header>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    reduxAuth: state.auth,
    restaurants: state.restaurants.restaurants
  }
}
export default withRouter(connect(mapStateToProps, null)(App));
