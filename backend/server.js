const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const users = [];

app.use(cors());
app.use(express.json());

app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'All fields required' });
  if (users.find(u => u.username === username)) return res.status(409).json({ message: 'Username taken' });
  users.push({ username, password });
  res.status(201).json({ message: 'Signup successful' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.status(200).json({ message: 'Login successful' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Backend API running at http://localhost:${PORT}`);
});
