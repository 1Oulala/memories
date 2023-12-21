const dotenv = require('dotenv').config({ path: './.env' });
const path = require('path');
const express = require('express');
const db = require('../db');
const controllers = require('./controllers/memory');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.post('/memories', controllers.add);
// app.get('/memories', controllers.getAll);
app.get('/memories/search', controllers.getByTerms);
app.delete('/memories/:id', controllers.deleteByID);

const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
  console.log(`memories Web server running on: http://localhost:${PORT}`);
});
