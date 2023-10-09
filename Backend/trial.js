const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/trial', async (req, res) => {
  try {
    const { type } = req.body;
    console.log(type)
    res.json({ message: 'Login successful.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
