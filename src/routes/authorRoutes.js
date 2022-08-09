const express = require("express");

const authorsRouter = express.Router();

function router(nav) {
  // Array of Books
  var authors = [
    {
      name: "Leo Tolstoy",
      desc: "Born to an aristocratic Russian family in 1828,[3] Tolstoy's notable works include the novels War and Peace (1869) and Anna Karenina (1878),[8] often cited as pinnacles of realist fiction.[3] He first achieved literary acclaim in his twenties with his semi-autobiographical trilogy, Childhood, Boyhood, and Youth (1852–1856), and Sevastopol Sketches (1855), based upon his experiences in the Crimean War. His fiction includes dozens of short stories and several novellas such as The Death of Ivan Ilyich (1886),",
      genre: "Cartoon",
      img: "leo.jpg",
    },
    {
      name: "William Shakespeare",
      desc: "William Shakespeare (bapt. 26 April 1564 – 23 April 1616)[a] was an English playwright, poet and actor. He is widely regarded as the greatest writer in the English language and the world's greatest dramatist.[2][3][4] He is often called England's national poet and the Bard of Avon (or simply the Bard). His extant works, including collaborations, consist of some 39 plays,[c] 154 sonnets, three long narrative poems, and a few other verses, some of uncertain authorship.",
      genre: "Fantasy",
      img: "Shakespeare.jpg",
    },
    {
      name: "James Joyce",
      desc: "James Augustine Aloysius Joyce (2 February 1882 – 13 January 1941) was an Irish novelist, poet and literary critic. He contributed to the modernist avant-garde movement and is regarded as one of the most influential and important writers of the 20th century. Joyce's novel Ulysses (1922) is a landmark in which the episodes of Homer's Odyssey are paralleled in a variety of literary styles, particularly stream of consciousness. Other well-known works are the short-story collection Dubliners (1914), and the novels A Portrait of the Artist as a Young Man (1916) and Finnegans Wake (1939). His other writings include three books of poetry, a play, letters, and occasional journalism.",
      genre: "Novel",
      img: "joyce.jpg",
    },
  ];

  // books page
  authorsRouter.get("/", function (req, res) {
    res.render("authors", {
      nav,
      title: "Library",
      authors,
    });
  });

  authorsRouter.get("/:id", function (req, res) {
    const id = req.params.id;
    res.render("author", {
      nav,
      title: "Library",
      author: authors[id],
    });
  });
  return authorsRouter;
}

// Exporting the BookRoute to Main file
module.exports = router;
