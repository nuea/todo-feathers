// book-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const modelName = 'book';
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const schema = new Schema({
    book_id: {
      type: String,
      required: true,
      index: true
    },
    book_name : {
      type: String,
      required: true
    },
    title : { 
      type: String,
      required: true
    },
    description : String,
    image : String,
    price : Number,
    status : {
      type: String,
      required: true
    }
  }, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey : false
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    mongooseClient.deleteModel(modelName);
  }
  return mongooseClient.model(modelName, schema);
  
};
