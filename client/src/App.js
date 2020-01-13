import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux'; // connects the two
import store from './store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={ Landing } />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path='/register' component={ Register } />
              <Route exact path='/login' component={ Login } />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}
// Provider means all the components that we create can access our 
// app level state 

export default App;
