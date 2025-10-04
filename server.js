const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory rooms array
let rooms = [
  { id: 1, name: 'Deluxe Room' },
  { id: 2, name: 'Suite Room' },
  { id: 3, name: 'Standard Room' }
];

// GET all rooms
app.get('/api/rooms', (req, res) => {
  res.json(rooms);
});

// POST a new room (from admin page)
app.post('/api/rooms', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Room name is required' });

  const newRoom = { id: rooms.length + 1, name };
  rooms.push(newRoom);
  res.json(newRoom);
});

// Start server
app.listen(port, () => {
  console.log(`Render backend running on port ${port}`);
});