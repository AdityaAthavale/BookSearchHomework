const path = require("path");
const router = require("express").Router();
const booksController = require("./../booksController")

router.route("/api/books/:id")
  .get(booksController.findById)    /* get books by id API */
  .put(booksController.update)      /* update books by id API */
  .delete(booksController.remove);  /* Delete books by id API */
  
  // Matches with "/api/books"
router.route("/api/books")
.get(booksController.findAll)
.post(booksController.create);

  // If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "./../../booksearch/public/index.html"));
});

module.exports = router;