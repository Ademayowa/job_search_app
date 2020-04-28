import React, { useReducer, createContext } from 'react';
import JobReducer from './JobReducer';
import axios from 'axios';

// Initial state
const initialState = {
  jobs: [],
  job: [],
  loading: true,
};

// Create context
export const JobContext = createContext(initialState);

// Component provider
export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JobReducer, initialState);

  // Actions
  async function getJobs() {
    try {
      const res = await axios.get('api/v1/jobs');

      dispatch({
        type: 'GET_JOBS',
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function getJob(_id) {
    try {
      const res = await axios.get(`/api/v1/jobs/${_id}`);

      dispatch({
        type: 'GET_JOB',
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        job: state.job,
        loading: state.loading,
        getJobs,
        getJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
