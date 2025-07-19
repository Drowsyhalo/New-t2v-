const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

const PORT = process.env.PORT || 3000;

// Basic health check route
app.get('/api/health', (req, res) => {
  res.send({ status: 'T2V backend running successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
