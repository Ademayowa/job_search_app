import React, { Fragment } from 'react';
import Hero from './Hero';
import Banner from './Banner';
import SearchForm from './SearchForm';
import FeaturedJobs from '../jobs/FeaturedJobs';

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
      <FeaturedJobs />
    </Fragment>
  );
};

export default Home;
