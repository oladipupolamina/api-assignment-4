// authorRouter.js

const express = require("express");
const router = express.Router();

// Sample data (replace with database operations in real application)
let authors = [];

// CRUD endpoints for Authors
router.get("/", (req, res) => {
  res.json(authors);
});

router.post("/", (req, res) => {
  const { name, age, genre } = req.body;
  const newAuthor = { id: authors.length + 1, name, age, genre };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

router.get("/:id", (req, res) => {
  const author = authors.find(
    (author) => author.id === parseInt(req.params.id)
  );
  if (!author) return res.status(404).send("Author not found");
  res.json(author);
});

router.put("/:id", (req, res) => {
  const author = authors.find(
    (author) => author.id === parseInt(req.params.id)
  );
  if (!author) return res.status(404).send("Author not found");
  author.name = req.body.name;
  author.age = req.body.age;
  author.genre = req.body.genre;
  res.json(author);
});

router.delete("/:id", (req, res) => {
  const authorIndex = authors.findIndex(
    (author) => author.id === parseInt(req.params.id)
  );
  if (authorIndex === -1) return res.status(404).send("Author not found");
  authors.splice(authorIndex, 1);
  res.send("Author deleted successfully");
});

module.exports = router;
