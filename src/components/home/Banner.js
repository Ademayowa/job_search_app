import React from 'react';

const Banner = ({ title, subtitle, children }) => {
  return (
    <section className='banner'>
      <div className='container text-white text-capitalize text-center'>
        <div className='row'>
          <div className='col-sm-10 m-auto'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
