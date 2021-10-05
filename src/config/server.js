const DEFAULT = {
    HOST: 'localhost',
    PORT: 3030,
    LIMIT: '50mb',
  
    MONGO_URL: 'localhost',
    MONGO_PORT: 27017,
    MONGO_DB: 'store',
    PAGINATE: {
      default: 10,
      max: 50,
    },
  
    NODE_ENV: 'development'
  };
  
  module.exports = {
    HOST: process.env.HOST || DEFAULT.HOST,
    PORT: process.env.PORT || DEFAULT.PORT,
    LIMIT: process.env.LIMIT || DEFAULT.LIMIT,
    MONGO_URL: process.env.MONGO_URL || DEFAULT.MONGO_URL,
    MONGO_PORT: process.env.MONGO_PORT || DEFAULT.MONGO_PORT,
    MONGO_DB: process.env.MONGO_DB || DEFAULT.MONGO_DB,
    PAGINATE: process.env.PAGINATE || DEFAULT.PAGINATE,
    NODE_ENV: process.env.NODE_ENV || DEFAULT.NODE_ENV,
  };