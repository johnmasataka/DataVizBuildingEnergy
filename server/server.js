const express = require('express');
const cors = require('cors'); 
require('dotenv').config(); 

const app = express();
const PORT = 3000;

const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

app.use(cors());

app.get('/get-mapbox-token', (req, res) => {
  res.json({ token: MAPBOX_TOKEN });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
