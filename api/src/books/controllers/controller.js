import mongoose from "mongoose";
import { BookSchema } from "../models/model";

const Book = mongoose.model("Books", BookSchema);

export const addBook = (req, res) => {
  let newBook = new Book(req.body);

  newBook.save((err, Book) => {
    if (err) res.send(err);
    res.json(Book);
  });
};

export const getBook = (req, res) => {
  Book.find({}, (err, Book) => {
    if (err) res.send(err);
    res.json(Book);
  });
};

export const getBookWithID = (req, res) => {
  Book.findById(req.params.BookId, (err, Book) => {
    if (err) res.send(err);
    res.json(Book);
  });
};

export const updateBook = (req, res) => {
  Book.findOneAndUpdate(
    { _id: req.params.BookId },
    req.body,
    { new: true },
    (err, Book) => {
      if (err) {
        res.send(err);
      }
      res.json(Book);
    }
  );
};

// export const deleteBook = (req, res) => {
//   Book.deleteOne({ _id: req.params.BookId }, (err, Book) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json({ message: "Successfully deleted Book" });
//   });
// };
