// import React, { useReducer, createContext, useContext } from 'react';
// import JobReducer from './JobReducer';
// import axios from 'axios';

// const initialState = {
//   job: [],
//   loading: true,
// };

// // Create context
// export const JobContext = useContext(initialState);

// // Provider component
// export const JobProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(JobReducer, initialState);

//   // Actions
//   async function getJob(jobId) {
//     try {
//       const res = await axios.get(`/api/v1/jobs/${jobId}`);

//       dispatch({
//         type: 'GET_JOB',
//         payload: res.data.data,
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <JobContext.JobProvider
//       value={{
//         job: state.job,
//         loading: state.loading,
//       }}
//     >
//       {children}
//     </JobContext.JobProvider>
//   );
// };
