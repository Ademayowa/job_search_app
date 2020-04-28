import React, { useReducer, createContext } from 'react';
import JobsReducer from './JobsReducer';
import axios from 'axios';

// Initial state
const initialState = {
  jobs: [],
  job: [],
  loading: true,
};

// Create context
export const JobsContext = createContext(initialState);

// Component provider
export const JobsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JobsReducer, initialState);

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

      console.log(res);

      dispatch({
        type: 'GET_JOB',
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <JobsContext.Provider
      value={{
        jobs: state.jobs,
        job: state.job,
        loading: state.loading,
        getJobs,
        getJob,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};
