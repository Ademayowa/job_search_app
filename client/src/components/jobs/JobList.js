import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { GiNetworkBars } from 'react-icons/gi';
import Img from '../../img/company1.png';
import { Link } from 'react-router-dom';

const JobList = ({ job }) => {
  return (
    <article className='card card-body py-4'>
      <img
        src={Img}
        alt='jobs'
        className='img-fluid mx-auto'
        style={{ width: '60px' }}
      />
      <div>
        <h5 className='mt-4 mb-4'>{job.title}</h5>
        <span className='text-gray'>
          <GiNetworkBars size={14} /> {job.skillLevel}{' '}
          <MdLocationOn size={14} /> {job.location} ${job.salary}
        </span>
      </div>

      <div className='card-footer mt-5'>
        <span className='float-left mt-2'>Full time</span>
        <Link
          to={`/jobs/${job._id}`}
          className='btn btn-outline-danger btn-sm float-right'
        >
          Apply Now
        </Link>
      </div>
    </article>
  );
};

export default JobList;
