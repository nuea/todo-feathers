const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const configuration = require('@feathersjs/configuration')
const helmet = require('helmet')
const cors = require('cors')
const mongoose = require('./lib/mongoose')
const { LIMIT } = require('../config/default');
const logger = require('./lib/logger');
const channels = require('./channels')
const appHooks = require('./app.hooks')
const services = require('./app/services');
const errorHandler = require('./middleware/error-handler')

// Creates an ExpressJS compatible Feathers application
const app = express(feathers());

// Load app configuration
app.configure(configuration())

// Parse HTTP JSON bodies
app.use(express.json({ limit: LIMIT }));
// Parse URL-encoded params
app.use(express.urlencoded({ extended: true }))
//Add REST API support
app.configure(express.rest())
// Configure Socket.io real-time APIs
app.configure(socketio());
app.configure(channels);

app.use(express.errorHandler({logger}));

// This disables the `contentSecurityPolicy` middleware but keeps the rest.
app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
app.use(cors());

// Set up our services (see `services/index.js`)
app.configure(services)

// Configure a middleware for 404s and the error handler
app.use(express.notFound())

app.hooks(appHooks)

app.use(errorHandler);

module.exports = app