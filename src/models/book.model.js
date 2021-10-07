const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    // book_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   default: ,
    //   index: true
    // },
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