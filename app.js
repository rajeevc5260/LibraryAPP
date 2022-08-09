const express = require("express");

//init express
const app = new express();

// nav Array is declared globaly
const nav = [
  { link: "/books", name: "BOOKS" },
  { link: "/authors", name: "AUTHOR" },
];

// importing the booksRouter
const booksRouter = require("./src/routes/bookRoutes")(nav);
const authorsRouter = require("./src/routes/authorRoutes")(nav);

//Init for use static files
app.use(express.static("./public"));
app.set("view engine", "ejs");

//Path to the index.js which is saved as ejs
app.set("views", "./src/views");
app.use("/books", booksRouter);
app.use("/authors", authorsRouter);

//All the functions and Route handlers
app.get("/", function (req, res) {
  res.render("index", {
    nav,
    title: "Library",
  });
});

//Port listen
app.listen(3000);
