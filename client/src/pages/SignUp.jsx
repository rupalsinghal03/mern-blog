import React from 'react'
import { Link } from 'react-router-dom';
export default function SignUp() {
  const logoStyle = {
    background: 'linear-gradient(to right, rgb(108 96 211), rgb(219 73 173))',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
  };
  const buttonStyle = {
    background: 'linear-gradient(to right, #630a63, #6565ed)',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
};
  return (
    <div className='container'>
    <div className="row align-items-center justify-content-center m-5 mt-sm-5 mb-5 mt-5 md-flex-row">
      <div className="col-md-6">
        <div className="fw-bold fs-3">
          <span className='text-white p-2 fs-2' style={logoStyle}>Rupal's</span>
          Blog
        </div>
        <p className='pt-4'>This is a demo project. You can sign up with your email and password or with Google.</p>
      </div>
      <div className="col-md-6">
        <form>
          <div className="mb-3">
            <label className="form-label">Your Username</label>
            <input type="text" className="form-control" placeholder='Username'/>
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input type="email" className="form-control" placeholder='name@company.com' />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Password</label>
            <input type="password" className="form-control" placeholder='Password'/>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2" style={logoStyle}>Sign Up</button>
          {/* <button className="btn btn-secondary w-100">Continue with Google</button> */}
        </form>
        <div className="signin mt-2">
          <span>Have an account? <Link to="#">Sign in</Link></span>
        </div>
      </div>
    </div>
  </div>
  )
}
