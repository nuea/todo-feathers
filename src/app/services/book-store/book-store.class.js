const { Service } = require('feathers-mongoose');
const { BookStoreRepository } = require('../../repository/book-store.repository')
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
        // console.log(id)
        // super._get(id).then(a => setTimeout(() => {  console.log(a, "async") }, 2000)) // async
        // console.log(await super._get(id), "sync") // sync

        return super._get(id);
    }
    
    // async get (id, params) {
    //     try {
    //         console.log("id -> ", id)
    //         console.log("params -> ", params)
    //         return this.options.Model.findById(id).catch(err => {
    //             console.log('error', err)
    //             throw InternalServerError(err)
    //         })
    //     } catch (err) {
    //         if(err.code) {
    //             if(err.code === "404"){
    //                 throw new NotFound(err.message)
    //             }
    //             throw err
    //         }
    //         throw new GeneralError(err)
    //     }
    //     try {
    //         const todo = await todoRepository.getById(id);
    //         if(todo == null) throw NotFound(err);
    //         return todo.toObject();
    //     } catch(err) { throw BadRequest(err); }
    //     // console.log('This get');
    //     // console.log(dateRecivePro)
    //     // return {
    //     //     id, text: `A new message with ID: ${id}!`
    //     // };
    // }
    
    // async create (data, params) {
    //     console.log('This create');
    //     if (Array.isArray(data)) {
    //       return Promise.all(data.map(current => this.create(current, params)));
    //     }
    //     return data;
    // }
    
    // async update (id, data, params) {
    //     console.log('This update');
    //     return data;
    // }
    
    // async patch (id, data, params) {
    //     console.log('This patch');
    //     return data;
    // }
    
    // async remove (id, params) {
    //     console.log('This remove');
    //     return { id };
    // }

};