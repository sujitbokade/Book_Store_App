import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const NoteSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  isPin: {
    type: Boolean,
  },
  isArchive: {
    type: Boolean,
  },
  isTrash: {
    type: Boolean,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  bgColor: {
    type: String,
  },
});

