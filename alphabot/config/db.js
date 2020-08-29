require('dotenv').config();
const mongoose = require("mongoose");
const logger = require("./logger");

const URI = process.env.DB_CONNECTION;
mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection
  .once('open', () => {logger.info("Connected to Database.")});

// Bind connection to error event (to get notification of connection errors)
db.on('error', err => logger.error('MongoDB connection error: ', err));


module.exports = db;
