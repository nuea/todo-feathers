const { NotFound, GeneralError, BadRequest } = require('@feathersjs/errors');
const { BOOK_STATUS } = require('../../../../config/default.json');

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [
            async context => {
                console.log(`Hook Before --> Method: ${context.method}, Path: /${context.path}`)
                context.data.status = BOOK_STATUS.PENDING
                if (context.data.book_id.trim() === '') {
                    throw new NotFound('Book ID is empty');
                } else if (context.data.book_name.trim() === ''){
                    throw new NotFound('Book Name is empty');
                }
            }
        ],
        update: [],
        patch: [],
        remove: []
    },
    
    after: {
        all: [
            async context => {
                // console.log(context);
                console.log(`Hook After --> Method: ${context.method}, Path: /${context.path}`)
            } 
        ],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    
    error: {
        all: [
            // async context => {
            //     // console.error(`Error in ${context.path} calling ${context.method}  method`, context.error);
            //     // console.log('context.error ---> ', context.error)
            //     context.error = {
            //         name: context.error.name,
            //         code: context.error.code,
            //         message: context.error.message

            //     }
            //     return context.error;
            // }
        ],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    } 
}