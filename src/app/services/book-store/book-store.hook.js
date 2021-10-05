
module.exports = {
    before: {
        all: [],
        find: [],
        get: [
                async context => {
                // console.log(context);
                console.log('Hook Before Get: ',context.method, `/${context.path}`, `id: ${context.id}`)
            }
        ],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    
    after: {
        all: [
            async context => {
                // console.log(context);
                console.log('Hook After: ',context.method, `/${context.path}`)
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