import React, { useContext, useEffect } from 'react';
import { JobContext } from '../../context/jobs/JobState';
import FeaturedJobList from './FeaturedJobList';
import Spinner from '../layout/Spinner';

const AllJobs = () => {
  const { jobs, loading, getJobs, filtered } = useContext(JobContext);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className='container featured-jobs mb-5 text-center'>
      <h2 className='mt-5 mb-5'>Featured Jobs</h2>
      <div style={grid}>
        {filtered !== null
          ? filtered.map((job) => <FeaturedJobList key={job._id} job={job} />)
          : jobs.map((job) => <FeaturedJobList key={job._id} job={job} />)}
      </div>
    </div>
  );
};

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gridGap: '2rem',
};

export default AllJobs;
