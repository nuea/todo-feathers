const { Service } = require('feathers-mongoose');
const { GeneralError, NotFound, BadRequest, PaymentError } = require("@feathersjs/errors")
// const { NotFoundRequest } = require('../../../helper/failure')

exports.BookStore = class BookStore extends Service {
    constructor(options, app){
        super(options, app)
        super.options = options || {}
    }

    async find (params){
        return super._find(params);
    }

    async get(id, params) {
        return super._get(id);
    }
    
    
    // async create (data, params) {
    //     console.log('This create');
    //     if (Array.isArray(data)) {
    //       return Promise.all(data.map(current => this.create(current, params)));
    //     }
    //     return data;
    // }
    

};