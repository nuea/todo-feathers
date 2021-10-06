const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : { type: String, required: true },
    description : String,
    image : String,
    price : Number,
  },{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, versionKey : false });

const Book = mongoose.model('Book', bookSchema)

module.exports = Book