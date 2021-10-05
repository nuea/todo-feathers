const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('./lib/mongoose')
const { HOST, PORT, LIMIT } = require('../config/default');
const logger = require('./lib/logger');
const services = require('./app/services');

// Creates an ExpressJS compatible Feathers application
const app = express(feathers());

// Parse HTTP JSON bodies
app.use(express.json({ limit: LIMIT }));
app.use(express.urlencoded({ extended: true }))
app.use(express.errorHandler(logger));

// This disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
app.use(cors());
// app.use(express.notFound())
app.configure(express.rest())

// Set up our services (see `services/index.js`)
app.configure(services)

app.listen(PORT, () => logger.info(`Server is running at http://${HOST}:${PORT}`))