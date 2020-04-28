import React, { useContext, useEffect } from 'react';
import { JobsContext } from '../../context/jobs/JobsState';

const SingleJob = ({ match }) => {
  const { job, jobs, getJob } = useContext(JobsContext);

  console.log(job);

  useEffect(() => {
    getJob(match.params._id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='container mt-5 mb-5'>
      <h2>Get Single Job Details</h2>
      {job.jobSummary}
    </div>
  );
};

export default SingleJob;
