import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../context/jobs/JobState';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import { MdLocationOn } from 'react-icons/md';
import { FaRegMoneyBillAlt, FaCalendarAlt } from 'react-icons/fa';
import CompanyInfo from './CompanyInfo';

const SingleJob = ({ match }) => {
  const { job, loading, getJob } = useContext(JobContext);

  useEffect(() => {
    getJob(match.params.jobId);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className='container single-job mt-5 mb-5'>
      <div className='row'>
        <div className='col-lg-8 margin py-4'>
          <Link to='/' className='btn btn-outline-danger'>
            Back
          </Link>
          <h3 className='mt-4 mb-4'>{job.title}</h3>
          <p className='mb-5'>
            <span className='icons'>
              <MdLocationOn size={21} color='#8089C7' /> {job.location}{' '}
              &nbsp;&nbsp;
              <FaRegMoneyBillAlt size={21} color='#8089C7' /> Salary : $
              {job.salary}
              &nbsp;&nbsp;
              <FaCalendarAlt size={18} color='#8089C7' /> Expires In : 10days
            </span>
          </p>
          <hr />

          <h4 className='mt-5 mb-3'>Job Description</h4>
          <p>{job.jobSummary}</p>
          <h4 className='mt-5 mb-3'>Required Skills</h4>
          <p>{job.skills}</p>
        </div>
        <CompanyInfo />
      </div>
    </div>
  );
};

export default SingleJob;
