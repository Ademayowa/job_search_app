import React, { useContext, useEffect, Fragment } from 'react';
import { CompanyContext } from '../../context/company/CompanyState';
import Img from '../../img/company4.png';
import Spinner from '../layout/Spinner';

const CompanyInfo = () => {
  const { companies, loading, getCompanies } = useContext(CompanyContext);

  useEffect(() => {
    getCompanies();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <div className='col-lg-4 pl-lg-5 mt-5 py-4'>
        <img
          src={Img}
          alt='company'
          className='img-fluid z-depth-5 mb-5'
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'cover',
            borderRadius: '60px',
          }}
        />

        <article>
          {companies.map((company) => (
            <ul>
              <li>{company.name}</li>
              <li>{company.website}</li>
            </ul>
          ))}
        </article>
      </div>
    </Fragment>
  );
};

export default CompanyInfo;
