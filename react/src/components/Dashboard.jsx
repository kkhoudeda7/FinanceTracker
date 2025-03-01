import React from 'react';
import Filter from './Filter';
import Form from './Form';
import List from './List';

function Dashboard({ categories, selectedCategory, onCategoryChange, addEntry, filteredEntries, onDelete, onLogout }) {
  return (
    <div>
      <button onClick={onLogout} className="btn btn-danger">Logout</button>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />
      <Form onAddEntry={addEntry} />
      <List entries={filteredEntries} onDelete={onDelete} />
    </div>
  );
}

export default Dashboard;c