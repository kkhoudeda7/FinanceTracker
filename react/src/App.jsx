import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [entries, setEntries] = useState([
    { id: 1, category: 'Food', description: 'Groceries', amount: 50 },
    { id: 2, category: 'Transport', description: 'Bus Ticket', amount: 2.5 },
    { id: 3, category: 'Entertainment', description: 'Movie', amount: 12 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('');

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

  return (
    <>
      <h1>Finance Budget Tracker</h1>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Form onAddEntry={addEntry} />
      <List entries={filteredEntries} />
    </>
  );
}

export default App;