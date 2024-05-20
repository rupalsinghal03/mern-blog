import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export default function SignUp() {
  const logoStyle = {
    background: 'linear-gradient(to right, rgb(108 96 211), rgb(219 73 173))',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Please fill all the details!')
    }
    try {
      setLoading(true)
      const res = await axios.post('/api/auth/signup', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.data;
      if (data.success === false) {
        return setErrorMessage(data.message)
      }
      setLoading(false)
      navigate('/sign-in')
    } catch (error) {
      setErrorMessage(error.message)
      // Handle error
      console.error(error);
      setLoading(false)
    }
  }


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
          <form >
            <div className="mb-3">
              <label className="form-label">Your Username</label>
              <input type="text" className="form-control" placeholder='Username' id='username' onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" placeholder='name@company.com' id='email' onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Password</label>
              <input type="password" className="form-control" placeholder='Password' id='password' onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2" style={logoStyle} onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <>
                  <div>Loading...</div>
                </>
              ) : 'Sign Up'}
            </button>
          </form>
          <div className="signin mt-2">
            <span>Have an account? <Link to="#">Sign in</Link></span>
          </div>
          {errorMessage && (
            <div className="error_field bg-red p-2 mt-4 text-danger border border-danger rounded ">
              <p className='fw-bold'>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
