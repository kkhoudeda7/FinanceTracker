import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import Filter from './components/Filter';
import LoginSignup from './components/LoginSignup';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  return (
    <>
      <h1 style={{ fontFamily: 'inherit', fontWeight: 'bold' }}>Finance Budget Tracker</h1>
      {isAuthenticated ? (
        <>
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <Form onAddEntry={addEntry} />
          <List entries={filteredEntries} />
        </>
      ) : (
        <LoginSignup onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;