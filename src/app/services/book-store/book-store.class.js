const { Service } = require('feathers-mongoose');
// const { GeneralError, NotFound, BadRequest, PaymentError } = require("@feathersjs/errors")

exports.BookStore = class BookStore extends Service {
    constructor(options, app){
        super(options, app)
        this.options = options || {}
    }

};