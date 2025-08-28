import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsError(false);

    try {
      const res = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      // Save JWT token
      localStorage.setItem('token', res.data.token);
setMessage('Login successful! Redirecting...');

      // Redirect to dashboard after brief confirmation
   // Redirect to blog after brief confirmation
setTimeout(() => {
  navigate('/blog');
}, 1500);
    } catch (err) {
      const msg = err.response?.data?.message || 'Invalid username or password';
      setMessage(msg);
      setIsError(true);
    }
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card p-4 shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {message && (
            <div className={`alert ${isError ? 'alert-danger' : 'alert-success'}`}>
              {message}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p className="mt-3 text-center">
            Don't have an account?{' '}
            <button
              type="button"
              className="btn btn-link p-0"
              onClick={() => navigate('/signup')}
            >
              Signup
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
