import {filePath, readFile, writeFile} from '../services/file.service.js';

const Book = {
    async getAllBooks() {
        const books = await readFile('books.json');
        return books;
    },

    async getBookByAuthorYear(author, year) {
        const books = await readFile('books.json');
        const filteredBooks = books.filter(book => (book.author === parseInt(author))&&(book.year === parseInt(year)));
        return filteredBooks;
    },

    async createBook(body) {
        const books = await readFile('books.json');
        const newBook = {
            // author: body.author,
			// year: body.year,
            // title: body.title,
            ...body,
            id: books.length + 1,
            createdAt: new Date().toISOString(),
        };
        books.push(newBook);
        await writeFile('books.json', books);
        return newBook;
    },
};

export default Book;