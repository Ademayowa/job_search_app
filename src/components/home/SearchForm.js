import React from 'react';
import { FaRegKeyboard } from 'react-icons/fa';
import { MdLocationOn, MdSearch } from 'react-icons/md';

const SearchForm = () => {
  return (
    <div className='container job-search'>
      <form>
        <div className='row'>
          <div className='col-lg-7'>
            <div className='job-field'>
              <input
                className='form-control form-control-lg mb-3'
                type='text'
                placeholder='Job title, keywords or company name'
              />
              <span>
                {' '}
                <FaRegKeyboard size={28} />
              </span>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='job-field'>
              <select
                data-placeholder='City, province or region'
                className='form-control form-control-lg mb-3'
              >
                <option>Instambul</option>
                <option>New York</option>
                <option>London</option>
                <option>Russia</option>
              </select>
              <span>
                {' '}
                <MdLocationOn size={28} />
              </span>
            </div>
          </div>
          <div className='col-lg-1'>
            <button type='submit'>
              <span className='search'>
                {' '}
                <MdSearch size={28} />
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
