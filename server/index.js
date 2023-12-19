const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
// const db = require('../db');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

// app.get('/api/memories', controllers.getAll);


const PORT = process.env.PORT || 9500;

app.listen(PORT, () => {
  console.log(`memories Web server running on : http:localhost:${PORT}`)
});