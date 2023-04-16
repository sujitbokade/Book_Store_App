import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import noteRoutes from "./src/notes/routes/notesRoutes";
import customerRoutes from "./src/customers/routes/customerRoutes"
import bookRoutes from "./src/books/routes/routes";

const app = express();
const PORT = 4003;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true");

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// noteRoutes(app);

bookRoutes(app)
customerRoutes(app)

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) => res.send("Backend is running"));

app.listen(PORT, () => {
  console.log(`your server is running on port ${PORT}`);
});
