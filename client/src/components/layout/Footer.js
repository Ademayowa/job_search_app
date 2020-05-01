import React from 'react';
import Hero from '../../components/home/Hero';

const Footer = () => {
  return (
    <Hero>
      <div className='footer-banner text-dark'>
        <div className='container text-white mb-4'>
          <div className='row'>
            <div className='col-md-6 col-sm-8'>
              <h5>About</h5>
              <p className='pt-3'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dignissimos dolorum, nulla voluptatem iure beatae optio est
                itaque magni saepe perspiciatis repudiandae numquam officiis
                tenetur.
              </p>
            </div>
            <div className='col-md-3 col-sm-8'>
              <h5>Candidate</h5>
              <ul className='pt-3'>
                <li>Job alerts</li>
                <li>Past Application</li>
                <li>Job alerts</li>
              </ul>
            </div>

            <div className='col-md-3 col-sm-8'>
              <h5>Employers</h5>
              <ul className='pt-3'>
                <li>Add job</li>
                <li>My account</li>
                <li>Job packages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
};

export default Footer;
