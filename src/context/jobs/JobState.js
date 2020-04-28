import React, { useReducer, createContext } from 'react';
import JobReducer from './JobReducer';
import axios from 'axios';

// Initial state
const initialState = {
  jobs: [],
  companies: [],
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

  return (
    <JobContext.Provider
      value={{
        jobs: state.jobs,
        companies: state.companies,
        loading: state.loading,
        getJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
