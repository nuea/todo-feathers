const { BookStore } = require('./book-store.class')
const model = require('../../../model/book.model')
const hook = require('./book-store.hook')
const { PAGINATE } = require('../../../config/server');

module.exports = app => {
    const options = {
        Model: model,
        paginate: PAGINATE
    };

    app.use('/book-store', new BookStore(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('book-store');

    service.hooks(hook);

}