import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../context/jobs/JobState';
import JobList from './JobList';
import Spinner from '../layout/Spinner';

const AllJobs = () => {
  const { jobs, loading, getJobs } = useContext(JobContext);

  console.log(jobs);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container mt-5 mb-5 text-center'>
        <h2 className='mt-4 mb-4'>Featured Jobs</h2>
        <div style={grid}>
          {jobs.map((job) => (
            <JobList key={job._id} job={job} />
          ))}
        </div>
      </div>
    );
  }
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gridGap: '2rem',
};

export default AllJobs;
