module.exports = (err, req, res, next) => {
    const {type, code} = err;
    if (type === 'FeathersError') {
      res.status(code).json(err.toJSON())
    }
  }