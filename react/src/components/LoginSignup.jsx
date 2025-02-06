import React, { useState } from 'react';
import axios from 'axios';

function LoginSignup({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const response = await axios.post('http://localhost:3001/login', { username, password });
        if (response.status === 200) {
          onLogin();
        }
      } else {
        const response = await axios.post('http://localhost:3001/signup', { username, password });
        if (response.status === 201) {
          alert('Signup successful');
          setIsLogin(true);
        }
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isLogin ? 'Login' : 'Signup'}
        </button>
      </form>
      <button
        type="button"
        className="btn btn-link w-100 mt-3"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default LoginSignup;