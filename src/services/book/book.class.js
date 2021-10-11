const { Service } = require('feathers-mongoose');
const { GeneralError, BadRequest, NotFound } = require('@feathersjs/errors');

exports.Book = class Book extends Service {
  constructor(options, app){
    super(options, app);
    // super.options = options || {} ;
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

  async patch(id, data, params) {
    try {
      const doc = await super._get(id);
      const dataUpdate = {...doc, ...data}; // replace data
      return await super._update(id, dataUpdate); //{id, data};      
    } catch (error) {
      console.log('error -->', error.code);
      if (error.code === 400) {
        throw new BadRequest('Bad Request');
      }else if(error.code === 404){
        throw new NotFound();
      } else {
        throw new GeneralError();
      }
    }
  }

  async remove (id, params) {
    return { id };
  }

};
