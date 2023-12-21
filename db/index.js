const path = require('path');
const dotenv = require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');

const mongoURI = `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`;
// console.log(process.env.DB_HOST , ':::X:::', process.env.DB_NAME)
const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(() => console.log(`Mongoose connected to: ${mongoURI}`))
  .catch((err) => {
    console.log(`there was a problem connecting to ${mongoURI}`);
    console.log(err);
  });

module.exports = db;
