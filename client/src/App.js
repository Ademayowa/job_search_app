import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import Home from './components/home/Home';
import { JobProvider } from './context/jobs/JobState';
import SingleJob from './components/job/SingleJob';
import { CompanyProvider } from './context/company/CompanyState';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <Fragment>
      <JobProvider>
        <CompanyProvider>
          <Router>
            <div className='App'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/jobs/:jobId' component={SingleJob} />
              </Switch>
            </div>
          </Router>
          <Footer />
        </CompanyProvider>
      </JobProvider>
    </Fragment>
  );
};

export default App;
