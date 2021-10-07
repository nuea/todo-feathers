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
        return super._find(params);
    }

    async get(id, params) {
        return super.Model.aggregate([
            { $match: { _id:  mongoose.Types.ObjectId(`${id}`) } },
            { $project: {
                    _id: 1,
                    title : 1,
                    description: 1,
                    image: 1,
                    price: 1
                }
            },
        ])
        // return super._get(id);
    }
    
    async create (data, params) {
        return super.create(data).catch(err => {
                throw new BadRequest(err.errors.title.properties.message);
                if (err.code === 400) {
                    throw new BadRequest(err.errors.title.properties.message);
                }
                throw new GeneralError(err);
        }).then(d => super.get(d._id, params));
    }
    
};