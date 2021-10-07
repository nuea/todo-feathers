const { NotFound, GeneralError, BadRequest } = require('@feathersjs/errors');

module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [
            async context => {
                console.log(`Hook Before --> Method: ${context.method}, Path: /${context.path}`)
                if(context.data.title.trim() === '' || context.data.price.trim() === '') {
                    throw new BadRequest('Title or Price is empty');
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