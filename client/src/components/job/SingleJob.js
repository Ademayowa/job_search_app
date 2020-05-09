import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../context/jobs/JobState';
import { Link } from 'react-router-dom';
import Img from '../../img/company4.png';
import Spinner from '../layout/Spinner';
import { MdLocationOn } from 'react-icons/md';
import {
  FaRegMoneyBillAlt,
  FaTools,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

// import { numberWithCommas } from '../../utils/format';

const SingleJob = ({ match }) => {
  let { job, loading, getJob } = useContext(JobContext);

  // let jobs = job;

  // jobs = job.join(',');

  useEffect(() => {
    getJob(match.params.jobId);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className='container job-info mb-5'>
      <div className='row'>
        <div className='col-lg-8 margin p-4'>
          <Link to='/' className='btn btn-outline-danger text-capitalize'>
            Back
          </Link>
          <h3 className='mt-4 mb-4'>{job.title}</h3>
          <p className='mb-4'>
            <span className='icons'>
              <MdLocationOn size={20} color='#ff6633' /> {job.location}{' '}
              <FaRegMoneyBillAlt size={20} color='#ff6633' /> Salary :{' '}
              {job.salary}
              <FaTools size={20} color='#ff6633' /> Role : {job.skillLevel}
            </span>
          </p>
          <hr />

          <h4 className='mt-5 mb-3'>Job description</h4>
          <p>{job.description}</p>

          <h4 className='mt-5 mb-3'>Responsibilities</h4>
          <p>{job.responsibilities}</p>

          <h4 className='mt-5  mb-3'>Skills and qualification</h4>
          <p>{job.skills}</p>
        </div>

        <div className='col-lg-4 mt-5 p-4'>
          <img
            src={Img}
            alt='company'
            className='img-fluid z-depth-5 mb-5 ml-4'
            style={{
              width: '120px',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '60px',
            }}
          />
          <article className='ml-4 company-details'>
            <h4 className='mb-3 mt-4 text-capitalize'>{job.name}</h4>
            <p>
              <span>
                <IoMdGlobe size={16} color='#ff6633' />{' '}
              </span>
              <Link to='#'>{job.website}</Link>
            </p>
            <p>
              <span>
                <FaEnvelope size={16} color='#ff6633' />{' '}
              </span>
              {job.email}
            </p>
            <p>
              <span>
                <FaPhone size={16} color='#ff6633' />{' '}
              </span>
              {job.phone}
            </p>

            <Link
              to={`/jobs/apply/${job._id}`}
              className='btn btn-outline-danger btn-lg text-capitalize'
            >
              Apply
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
