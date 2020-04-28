import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import 'mdbootstrap/css/bootstrap.min.css';
import 'mdbootstrap/css/mdb.min.css';
import Home from './components/home/Home';
import Navbar from './components/layout/Navbar';
import { JobProvider } from './context/jobs/JobState';

const App = () => {
  return (
    <Fragment>
      <JobProvider>
        <Router>
          <Navbar />
          <div className='App'>
            <Route exact path='/' component={Home} />
          </div>
        </Router>
      </JobProvider>
    </Fragment>
  );
};

export default App;
