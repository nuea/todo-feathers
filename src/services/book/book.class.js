const { Service } = require('feathers-mongoose');
const { GeneralError, BadRequest } = require('@feathersjs/errors');

exports.Book = class Book extends Service {
  constructor(options, app){
    super(options, app);
    super.options = options || {} ;
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
