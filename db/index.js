const mongoose = require('mongoose');
const dotenv = require('dotenv');

const mongoURI = `mongodb://localhost:27017/${process.env.DB_NAME}`

const db = mongoose.connect(mongoURI, { useNewUrlParser: true} );

db
  .then(db => console.log(`connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`there was a problem connecting to ${mongoURI}`);
    console.log(err);
  })

  module.exports = db;