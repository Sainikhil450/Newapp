import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Import the CSS file

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    
    navigate('/login');
  };

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center gradient-custom-3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card card-custom">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create</h2>

                  <form onSubmit={handleRegister} className="form">
                    <div className="formGroup form-outline mb-4">
                      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="input form-control form-control-lg" />
                      <label className="form-label">Your Name</label>
                    </div>

                    <div className="formGroup form-outline mb-4">
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input form-control form-control-lg" />
                      <label className="form-label">Your Email</label>
                    </div>

                    <div className="formGroup form-outline mb-4">
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input form-control form-control-lg" />
                      <label className="form-label">Password</label>
                    </div>

                    <div className="formGroup form-outline mb-4">
                      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="input form-control form-control-lg" />
                      <label className="form-label">Repeat your password</label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" required />
                      <label className="form-check-label">
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">Have already an account? 
                      <span onClick={() => navigate('/login')} className="link"><u>Login here</u></span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
