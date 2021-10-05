const mongoose = require('mongoose');
const logger = require('./logger')
const { MONGO_URL, MONGO_PORT, MONGO_DB } = require('../config/server');

const url = `mongodb://${MONGO_URL}:${MONGO_PORT}/${MONGO_DB}`
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.once('error',() => logger.error(`Can't connect to database`));
db.once('open', () => logger.info(`Able to connect to the database successfully`));
