// Load and start the application here.

const app = require('./app');
const { HOST, PORT } = require('../config/default');
const logger = require('./lib/logger');

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
)

app.listen(PORT, () => logger.info(`Server is running at http://${HOST}:${PORT}`))