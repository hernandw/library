const express = require("express");
require("dotenv").config();

const { getBooks, addBooks } = require("./consultas");

const app = express();

//middleware
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Welcome al servidor");
});

app.get("/books", async (req, res) => {
  const books = await getBooks();
  res.json(books);
});

app.post("/books", async (req, res) => {
  const { title, author } = req.body;
  await addBooks(title, author);
  res.send("books added successfully");
});

app.listen(PORT, () => {
  console.log(`Servidor listening on port ${PORT}`);
});
