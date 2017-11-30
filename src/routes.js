import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Ping from './Ping/Ping';
import Callback from './Callback/Callback';
import {MainContainer} from './container_styling.js';
import Auth from './Auth/Auth';
import Search from './Search/search';
import Results from './Results/results';
import history from './history';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist';
import reducers from './Reducers';

//const createStoreWithMiddleware = applyMiddleware(reduxThunk, reduxPromise)(createStore);
//export const store = createStoreWithMiddleware(reducers);
export const store = compose(
  applyMiddleware(reduxThunk, reduxPromise),
  autoRehydrate()
)(createStore)(reducers);

persistStore(store);
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history} component={App}>
          <MainContainer>
            <Route path="/" render={(props) => <App auth={auth} {...props} />} />
            <Route path="/home" render={(props) => <Search auth={auth} {...props} />} />
            <Route path="/search" render={(props) => <Search auth={auth} {...props} />} />
            <Route path="/results" render={(props) => <Results auth={auth} {...props} />} />
            <Route path="/profile" render={(props) => (
              !auth.isAuthenticated() ? (
                <Redirect to="/home"/>
              ) : (
                <Profile auth={auth} {...props} />
              )
            )} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }}/>
          </MainContainer>
        </Router>
      </Provider>
  );
}
