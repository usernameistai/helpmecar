import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux'; // connects the two
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []); // extra brackets means it only runs once, like componentDidMount

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch >
            <Route exact={true} path='/' component={ Landing } /> {/* added exact={true} */}
            <Route component={ Routes} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}
// Provider means all the components that we create can access our 
// app level state 

// Redux working mechanism. In essence, the action is 
// called on a component will then dispatch the action with its type and 
// payload to the reducer, the reducer will then match that action's type 
// with the predefined case pertain to that action and make changes to the 
// state accordingly.

export default App;
