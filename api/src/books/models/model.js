import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const BookSchema = new Schema({
  bookName: {
    type: String,
  },
  author: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number
  },
});

