import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../context/jobs/JobState';
import { Link } from 'react-router-dom';
import Img from '../../img/company4.png';
import Spinner from '../layout/Spinner';
import { MdLocationOn } from 'react-icons/md';
import {
  FaRegMoneyBillAlt,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

// import { numberWithCommas } from '../../utils/format';

const SingleJob = ({ match }) => {
  const { job, loading, getJob } = useContext(JobContext);

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
          <p className='mb-5'>
            <span className='icons'>
              <MdLocationOn size={21} color='#ff6633' /> {job.location}{' '}
              &nbsp;&nbsp;
              <FaRegMoneyBillAlt /> Salary : ${job.salary}
              &nbsp;&nbsp;
              <FaCalendarAlt size={18} color='#ff6633' /> Expires In : 10days
            </span>
          </p>
          <hr />

          <h4 className='mt-5 mb-3'>Job Description</h4>
          <p>{job.jobSummary}</p>
          <h4 className='mt-5 mb-3'>Required Skills</h4>
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
            <h4 className='mb-3 text-capitalize'>{job.name}</h4>
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
