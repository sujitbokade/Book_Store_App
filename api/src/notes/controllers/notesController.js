import mongoose from "mongoose";
import { NoteSchema } from "../models/notesModel";

const Note = mongoose.model("Notes", NoteSchema);

export const addNote = (req, res) => {
  let newNote = new Note(req.body);

  newNote.save((err, Note) => {
    if (err) {
      res.send(err);
    }
    res.json(Note);
  });
};

export const getNote = (req, res) => {
  Note.find({}, (err, Note) => {
    if (err) {
      res.send(err);
    }
    res.json(Note);
  });
};

export const getNoteWithID = (req, res) => {
  Note.findById(req.params.noteId, (err, Note) => {
    if (err) {
      res.send(err);
    }
    res.json(Note);
  });
};

export const updateNote = (req, res) => {
  Note.findOneAndUpdate(
    { _id: req.params.noteId },
    req.body,
    { new: true },
    (err, Note) => {
      if (err) {
        res.send(err);
      }
      res.json(Note);
    }
  );
};

export const deleteNote = (req, res) => {
  Note.deleteOne({ _id: req.params.noteId }, (err, Note) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "Successfully deleted Note" });
  });
};
