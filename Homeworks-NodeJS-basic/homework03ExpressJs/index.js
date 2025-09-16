import express from 'express';
import fs from 'fs/promises';

const app = express();
const PORT = 3000;
const HOSTNAME = 'localhost';
app.use(express.json());

const BOOKS_FILE_PATH = './data/books.json';
console.log(BOOKS_FILE_PATH )

// basic requirements
// create book
app.post('/books', async (req, res) => {
    console.log(req.body);

    const books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
    const parsedBooks = JSON.parse(books);
    console.log(parsedBooks);

    const newBook = {
        ...req.body,
        id: parsedBooks.length + 1,
    };

    parsedBooks.push(newBook);

    await fs.writeFile(BOOKS_FILE_PATH, JSON.stringify(parsedBooks, null, 2));

    res.status(201).send(newBook);
});
// delete book
app.delete('/books/:id', async (req, res) => {
    const { id } = req.params;

    const books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
    const parsedBooks = JSON.parse(books);

    const filteredBooks = parsedBooks.filter(book => book.id !== parseInt(id));

    await fs.writeFile(BOOKS_FILE_PATH, JSON.stringify(filteredBooks, null, 2));

    res.sendStatus(204);
});
// advanced requirements
// get all books
app.get('/books/all', async (req, res) => {
    const books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
    const parsedBooks = JSON.parse(books);
    console.log(parsedBooks);
    res.json(parsedBooks);
});
// search book
app.get('/books', async (req, res) => {
    const {year, author} = req.query;
    const books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
    const parsedBooks = JSON.parse(books);
    console.log(parsedBooks);
    let filteredBooks = [];

    if (author) {
        filteredBooks = parsedBooks.filter(book => ((book.author === author)&&(book.year === year)));
    }
    res.json(filteredBooks);
});
// get stats
app.get('/books/stats', async (req, res) => {
    const books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
    const parsedBooks = JSON.parse(books);
    console.log(parsedBooks);

    const totalNumberOfBooks = parsedBooks.length

    const booksPerAuthor = parsedBooks.reduce((acc, book) => {
        acc[book.author] = acc[book.author] ? acc[book.author] + 1 : 1;
        return acc;
    }, {});

    const oldestBook = parsedBooks.reduce((oldest, book) => {
        return !oldest || book.year < oldest.year ? book : oldest;
    }, null);

    const newestBook = parsedBooks.reduce((newest, book) => {
        return !newest || book.year > newest.year ? book : newest;
    }, null);

    res.json({
        totalNumberOfBooks,
        booksPerAuthor,
        oldestBook,
        newestBook,
    });
});



app.listen(PORT, HOSTNAME, () => {
	console.log(`Server is now listening at: http://${HOSTNAME}:${PORT}`);
});