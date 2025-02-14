import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import List from './components/List';
import Form from './components/Form';
import Filter from './components/Filter';
import LoginSignup from './components/LoginSignup';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {


  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem('entries');
    return savedEntries ? JSON.parse(savedEntries) : [];
  });



  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'

  );

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);

  }, [isAuthenticated]);


  const addEntry = (entry) => {
    setEntries([...entries, { id: entries.length + 1, ...entry }]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEntries = selectedCategory
    ? entries.filter((entry) => entry.category === selectedCategory)
    : entries;

  const categories = [...new Set(entries.map((entry) => entry.category))];

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginSignup onLogin={handleLogin} />} />
        <Route path="/signup" element={<LoginSignup onLogin={handleLogin} />} />
        {isAuthenticated && (
          <Route
            path="/dashboard"
            element={
              <Dashboard
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
                addEntry={addEntry}
                filteredEntries={filteredEntries}
                onLogout={handleLogout}
              />
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;