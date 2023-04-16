import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CustomerSchema = new Schema({
  name: {
    type: String,
  },
  phoneNo: {
    type: String,
  },
  pinCode: {
    type: String,
  },
  locality: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  landmark: {
    type: String,
  },
});