import React, { Fragment } from 'react';
import Hero from './Hero';
import Banner from './Banner';
import SearchForm from './SearchForm';
import AllJobs from '../jobs/AllJobs';

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title='find your dream job'
          subtitle='find jobs employmemt & career opportunities'
        >
          <SearchForm />
        </Banner>
      </Hero>
      <AllJobs />
    </Fragment>
  );
};

export default Home;
