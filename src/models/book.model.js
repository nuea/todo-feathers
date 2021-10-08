const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
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
  },{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey : false });

const Book = mongoose.model('Book', bookSchema)

module.exports = Book