const { BookStore } = require('./book-store.class')
const model = require('../../../models/book.model')
const hook = require('./book-store.hook')
const { PAGINATE } = require('../../../../config/default');

module.exports = app => {
    const options = {
        Model: model,
        paginate: PAGINATE,
        id: '_id'
    };

    app.use('/book-store', new BookStore(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('book-store');

    service.hooks(hook);
    
    app.service('book-store').on('created', data => {
        console.log("Book store created !!!!")
    })

    app.service('book-store').on('removed', data => {
        console.log("Book store removed !!!!")
    })

}