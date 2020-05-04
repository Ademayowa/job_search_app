import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('register submit');
  };

  return (
    <div className='container col-md-6 mx-auto mt-5 mb-5 card bg-white p-5'>
      <h2 className='text-center mb-3'>Register</h2>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            className='form-control form-control-lg mb-3'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            className='form-control form-control-lg mb-3'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            className='form-control form-control-lg mb-3'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            className='form-control form-control-lg mb-3'
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type='submit' value='Register' className='btn btn-primary' />
        <p className='pt-3'>
          Already have an account? <Link to='/login'>Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
