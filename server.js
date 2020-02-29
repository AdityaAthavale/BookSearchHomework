const express = require("express");

const mongoose = require("mongoose");
const routes = require("./server/routes/routes");
const app = express();
const db = require("./server/booksController")
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("booksearch/build"));
}
// Add routes, both API and view
app.use(routes);

app.get("/allBooks", function(req, res) {
  console.log(db.findAll(req, res))
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// db.findAll(null, null)
