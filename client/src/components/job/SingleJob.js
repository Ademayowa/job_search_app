import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../context/jobs/JobState';
import Spinner from '../layout/Spinner';

const SingleJob = ({ match }) => {
  const { job, loading, getJob } = useContext(JobContext);

  useEffect(() => {
    getJob(match.params.jobId);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className='container mt-5 mb-5'>
      <h2>{job.title}</h2>
      <p>{job.jobSummary}</p>
    </div>
  );
};

export default SingleJob;
