import React, { useState } from 'react';

function LoginSignup({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (username === 'user' && password === 'password') {
        onLogin();
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Signup successful');
      setIsLogin(true);
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