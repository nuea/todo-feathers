const { Service } = require('feathers-mongoose');
const { GeneralError, BadRequest, NotFound } = require('@feathersjs/errors');
const { query } = require('express');

exports.Book = class Book extends Service {
  constructor(options, app){
    super(options, app);
    // super.options = options || {} ;
  }

  // find by Feathers
  // async find(params) {
  //   try {
  //     params.query.$sort = {
  //       book_name: 1
  //     };
  //     return super.find(params);
  //   } catch (error) {
  //     if (error.code === 400) {
  //       throw new BadRequest('Invalid query parameters');
  //     }else{
  //       throw new GeneralError();
  //     }
  //   }
  // }

  //find by aggregation
  async find(params) {
    const query = [
      {$match: params.query},
      { $sort: { book_name : 1 } },
      { $project: { 
        _id: 1,
        book_id: 1,
        book_name: 1,
        title: 1,
        description: 1,
        image: 1,
        price: 1,
        status: 1
      }},
      { $group: { _id: '$book_name', total: { $sum: '$price' } } }
    ];
    return super.Model.aggregate(query);
  }

  async get(id, params) {
    return super._get(id, params);
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
      return await super._patch(id, dataUpdate); //{id, data};      
    } catch (error) {
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
