import React, { useReducer, createContext } from 'react';
import CompanyReducer from './CompanyReducer';
import axios from 'axios';

const initialState = {
  companies: [],
  loading: true,
};

// Create context
export const CompanyContext = createContext(initialState);

// Component provider
export const CompanyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CompanyReducer, initialState);

  // Actions
  async function getCompanies() {
    try {
      const res = await axios.get('/api/v1/companies');

      // console.log(res);
      dispatch({
        type: 'GET_COMPANIES',
        payload: res.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <CompanyContext.Provider
      value={{
        companies: state.companies,
        loading: state.loading,
        getCompanies,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
