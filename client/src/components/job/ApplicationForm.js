import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { JobContext } from '../../context/jobs/JobState';
import Spinner from '../layout/Spinner';

const ApplicationForm = ({ match }) => {
  const { job, loading, getJob } = useContext(JobContext);

  useEffect(() => {
    getJob(match.params.jobId);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className='container mt-3 application-form'>
      <Link
        to={`/jobs/${job._id}`}
        className='btn btn-outline-danger text-capitalize'
      >
        Back
      </Link>
      <h2 className='text-center text-warning'>Job Applications</h2>
      <form>
        <div className='row'>
          <div className='col-lg-7'>
            <input
              className='form-control form-control-lg mb-3'
              type='text'
              placeholder='Search job title or location'
            />
          </div>
          <div className='col-lg-4'>
            <input
              className='form-control form-control-lg mb-3'
              type='text'
              placeholder='Search location'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
