import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { GiNetworkBars } from 'react-icons/gi';
import Img from '../../img/company1.png';

const JobList = ({ job }) => {
  return (
    <article className='card card-body py-3'>
      <h5>{job.title}</h5>
      <img
        src={Img}
        alt='jobs'
        className='img-fluid'
        style={{ width: '50px', marginTop: '-20px' }}
      />
      <h6>
        <MdLocationOn size={14} /> {job.location}, <GiNetworkBars size={14} />{' '}
        {job.skillLevel}, ${job.salary}
      </h6>
    </article>
  );
};

export default JobList;
