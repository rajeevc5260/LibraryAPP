const express = require("express");

const booksRouter = express.Router();

function router(nav) {
  // Array of Books
  var books = [
    {
      title: "Tom and Jerry",
      author: "Joseph Barbera",
      genre: "Cartoon",
      img: "TomAndJerry.jpg",
    },
    {
      title: "Harry Potter",
      author: "J K Rowling",
      genre: "Fantasy",
      img: "harry.jpg",
    },
    {
      title: "The Secret",
      author: "Rondhe Byren",
      genre: "Novel",
      img: "secret.jpg",
    },
  ];

  // books page
  booksRouter.get("/", function (req, res) {
    res.render("books", {
      nav,
      title: "Library",
      books,
    });
  });

  booksRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("book", {
      nav,
      title: "Library",
      book: books[id],
    });
  });
  return booksRouter;
}

// Exporting the BookRoute to Main file
module.exports = router;
