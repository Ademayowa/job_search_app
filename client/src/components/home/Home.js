import React, { Fragment } from 'react';
import Hero from './Hero';
import Navbar from '../layout/Navbar';
import Banner from './Banner';
import SearchForm from './SearchForm';
import FeaturedJobs from '../jobs/FeaturedJobs';
import Testimonials from '../candidate/Testimonials';
import HowItworks from './HowItworks';

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Navbar title='Dev Portal' />
        <Banner
          title='find your dream job'
          subtitle='find jobs employmemt & career opportunities'
        >
          <SearchForm />
        </Banner>
      </Hero>
      <FeaturedJobs />
      <Testimonials />
      <HowItworks />
    </Fragment>
  );
};

export default Home;
