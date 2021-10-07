const { Service } = require('feathers-mongoose');
const { GeneralError, NotFound, BadRequest, PaymentError } = require("@feathersjs/errors")

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
    
    
    async create (data, params) {
        const result = super.create(data).catch(err => {
                throw new BadRequest(err.errors.title.properties.message);
                if (err.code === 400) {
                    throw new BadRequest(err.errors.title.properties.message);
                }
                throw new GeneralError(err);
        });
        
        return result;
    }
    

};