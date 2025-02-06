const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const db = new sqlite3.Database('./finance_tracker.db');

// Endpoint to handle user signup
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function(err) {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(201).send({ message: 'Signup successful' });
    }
  });
});

// Endpoint to handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ?', [username], async (err, row) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else if (row && await bcrypt.compare(password, row.password)) {
      res.status(200).send({ message: 'Login successful' });
    } else {
      res.status(401).send({ message: 'Invalid credentials' });
    }
  });
});

// Add a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Finance Tracker API');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});