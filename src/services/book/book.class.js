const { Service } = require('feathers-mongoose');
const { GeneralError, BadRequest, NotFound } = require('@feathersjs/errors');

exports.Book = class Book extends Service {
  constructor(options, app){
    super(options, app);
    super.options = options || {} ;
  }

  async find(params) {
    try {
      params.query.$sort = {
        book_name: 1
      };
      return super.find(params);
    } catch (error) {
      if (error.code === 400) {
        throw new BadRequest('Invalid query parameters');
      }else{
        throw new GeneralError();
      }
    }
  }

  async get(id, params) {
    return super._get(id);
  }

  async create (data, params) {
    return super.create(data).catch(err => {
      if (err.code == 400) {
        throw new BadRequest('Bad Request');
      }
      throw new GeneralError();
    });
  }

};
