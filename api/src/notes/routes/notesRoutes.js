import {
  addNote,
  deleteNote,
  getNote,
  getNoteWithID,
  updateNote,
} from "../controllers/notesController";

const routes = (app) => {
  app
    .route("/note")
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getNote)

    // POST endpoint
    .post(addNote);

  app
    .route("/note/:noteId")
    // get specific contact
    .get(getNoteWithID)

    // put request
    .put(updateNote)

    // delete request
    .delete(deleteNote);
};

export default routes;
