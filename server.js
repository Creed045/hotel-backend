const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Allow requests from frontend
app.use(cors());
app.use(express.json());

// Example API route
app.get('/api/rooms', (req, res) => {
  res.json([
    { id: 1, name: 'Deluxe Room' },
    { id: 2, name: 'Suite Room' },
    { id: 3, name: 'Standard Room' }
  ]);
});

app.listen(port, () => {
  console.log(`Render backend running on port ${port}`);
});