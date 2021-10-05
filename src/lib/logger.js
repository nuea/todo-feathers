const { createLogger, format, transports } = require('winston');
const path = require('path');
const env = require('../config/server');

const logger = createLogger({
    // change level if in dev environment versus production
    level: env === 'development' ? 'debug' : 'info',
    //can also comment out the line above and uncomment the line below for JSON format
    //format: format.json(),
    format: format.combine(
        format.colorize(),
        format.splat(),
        format.label({ label: path.basename(process.mainModule.filename) }),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        format.printf(info => `${[info.timestamp]} => ${info.level}: [${info.label}] { message: ${info.message} }`),
      ),
    
    transports: [
        new transports.Console(),
    ]
});

module.exports = logger