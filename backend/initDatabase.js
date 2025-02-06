const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./finance_tracker.db');

db.serialize(() => {
  // Create users table
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )`);

  // Create entries table
  db.run(`CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    category TEXT,
    description TEXT,
    amount REAL,
    FOREIGN KEY (user_id) REFERENCES users(id)
  )`);
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Database initialized.');
});