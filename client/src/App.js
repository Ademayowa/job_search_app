import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import Home from './components/home/Home';
import { JobProvider } from './context/jobs/JobState';
import SingleJob from './components/job/SingleJob';
// import { CompanyProvider } from './context/company/CompanyState';
import Footer from './components/layout/Footer';
import { AuthProvider } from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import { AlertProvider } from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';

const App = () => {
  return (
    <Fragment>
      <AuthProvider>
        <JobProvider>
          <AlertProvider>
            <Router>
              <div className='App'>
                <Alerts>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/jobs/:jobId' component={SingleJob} />
                  </Switch>
                </Alerts>
              </div>
            </Router>
            <Footer />
          </AlertProvider>
        </JobProvider>
      </AuthProvider>
    </Fragment>
  );
};

export default App;
