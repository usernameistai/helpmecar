import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../ScrollToTop';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import Reg from '../reg/Reg';
import RegForm from '../reg/RegForm';
import SearchReg from '../reg/SearchReg';
import ShowReg from '../reg/ShowReg';
import RegRules from '../reg/RegRules';
import RegHelp from '../reg/RegHelp';
import RegSafety from '../reg/RegSafety';
import NotFound from '../layout/NotFound'
import PrivateRoute from '../routing/PrivateRoute';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <ScrollToTop />
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
        <Route exact path='/reg-rules' component={ RegRules } />
        <Route exact path='/reg-help' component={ RegHelp } />
        <Route exact path='/reg-safety' component={ RegSafety } />
        <Route component={NotFound} />
      </Switch>
  </section>
  )
}

export default Routes
