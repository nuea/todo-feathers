const bookStore = require('./book-store/book-store.service')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(bookStore)
}