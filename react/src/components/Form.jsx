import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form({ onAddEntry }) {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount <= 0) {
      alert('Amount must be a positive number');
      return;
    }
    onAddEntry({ category, description, amount: parseFloat(amount) });
    setCategory('');
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="form-select"
          required
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          placeholder="Enter a description"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-control"
          placeholder="Enter the amount"
          required
        />
        <div className="form-text">Amount must be a positive number</div>
      </div>
      <button type="submit" className="btn btn-primary w-100">Add Entry</button>
    </form>
  );
}

export default Form;