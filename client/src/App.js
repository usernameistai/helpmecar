import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import Reg from './components/reg/Reg';
import RegForm from './components/reg/RegForm';
import SearchReg from './components/reg/SearchReg';
import ShowReg from './components/reg/ShowReg';
import PrivateRoute from './components/routing/PrivateRoute';
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
          <Route exact path='/' component={ Landing } />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path='/register' component={ Register } />
              <Route exact path='/login' component={ Login } />
              <Route exact path='/profiles' component={ Profiles } />
              <Route exact path='/profile/:id' component={ Profile } />
              <PrivateRoute exact path='/dashboard' component={ Dashboard } />
              <PrivateRoute exact path='/create-profile' component={ CreateProfile } />
              <PrivateRoute exact path='/edit-profile' component={ EditProfile } />
              <PrivateRoute exact path='/add-experience' component={ AddExperience } />
              <PrivateRoute exact path='/add-education' component={ AddEducation } />
              <PrivateRoute exact path='/posts' component={ Posts } />
              <PrivateRoute exact path='/posts/:id' component={ Post } />
              <Route exact path='/reg' component={ Reg } />
              <Route exact path='/reg-form' component={ RegForm } />
              <Route exact path='/reg-search' component={ SearchReg } />
              <Route exact path='/reg-search/:id' component={ ShowReg } />
            </Switch>
          </section>
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
