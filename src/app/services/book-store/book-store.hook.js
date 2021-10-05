
module.exports = {
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    
    after: {
        all: [
            async context => {
                // console.log(context);
                console.log(context.method, `/${context.path}`)
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
        all: [async context => {
            console.error(`Error in ${context.path} calling ${context.method}  method`, context.error);
            return context;
          }],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    } 
}