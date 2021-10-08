const { Service } = require('feathers-mongoose');
const mongoose = require('mongoose');
const { GeneralError, NotFound, BadRequest, PaymentError } = require("@feathersjs/errors");
const app = require('../../../app');

exports.BookStore = class BookStore extends Service {
    constructor(options, app){
        super(options, app)
        super.options = options || {}
    }

    async find (params){
        return super.Model.aggregate([
            {   $project: {
                    _id: 1,
                    book_id: 1,
                    book_name: 1,
                    title: 1,
                    description: 1,
                    image: 1,
                    price: 1,
                    status: 1
                }
            }
        ]);
    }

    async get(id, params) {
        return super._get(id);
    }
    
    async create (data, params) {
        return super.create(data).catch(err => {
            if (err.code == 400) {
                throw new BadRequest('Bad Request')
            }
            throw new GeneralError()
        });
    }

    async update (id, data, params) {
        return data;
    }
    
    async patch (id, data, params) {
        return data;
    }
    
    async remove (id, params) {
        return  {id};
    }
    
};