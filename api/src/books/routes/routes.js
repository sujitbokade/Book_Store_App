import { addBook, getBook, getBookWithID, updateBook } from "../controllers/controller";

const routes = (app) => {
  app.route("/book").get(getBook).post(addBook);
  app.route("/book/:bookId").get(getBookWithID).put(updateBook);
};

export default routes;
