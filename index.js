//to run any project of Node modules
///1.npm init -y(for JSON files only)
//2.npm i express
//3.npm start
//4.Then GO to thunder bolt and get a new request and type the URL of assigned port number e.g,http://localhost:3000

const express = require("express");
const app = express();
const port = 3000;
let books = [
  {
    id: 1234,
    title: "My First Book",
    author: "Me and You",
    publication: "Never",
    price: 500,
    publication_year: 2025,
  },
];
app.use(express.json());
//fetch all books

app.get("/", (req, res) => res.json(books));
// to add new book

app.post("/", (req, res) => {
  const { id, title, author, publication, price, publication_year } = req.body;
  books = [
    ...books,
    { id, title, author, publication, price, publication_year },
  ];
  res.json(books);
});
//update info of books

app.put("/:id", (req, res) => {
    const id=req.params.id;
    const {title, author, publication, price, publication_year } = req.body;
    books=books.map((books) =>
    books.id == id
     ? {id, title, author, publication, price, publication_year }
     : book
    )
    books = [
      ...books,
      { id, title, author, publication, price, publication_year },
    ];
    res.json(books);
  });


//delete book

app.delete("/:id", (req, res) => {
  const id = (req.params.id); // Convert the id to a number
  books = books.filter((book) => book.id !== id); // Remove the book with the matching id
  res.json(books); // Return the updated list of books
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
