import {filePath, readFile, writeFile} from '../services/file.service.js';

const BookModel = {
    async getAllBooks() {
        const books = await readFile('books.json');
        return books;
    },

    async getBooksByAuthorYear(author, year) {
        const books = await readFile('books.json');
        const filteredBooks = books.filter(book => ((book.author === author)&&(book.year === year)));
        return filteredBooks;
    },

    async createBook(body) {
        if ((body.title) && (body.author) && (body.year)) {
            const books = await readFile('books.json');
            const newBook = {
                ...body,
                reviews: [],
                id: books.length + 1,
                createdAt: new Date().toISOString(),
            };
            books.push(newBook);
            await writeFile('books.json', books);
            return newBook;
        }
        
    },
    async deleteBook(id) {
        const books = await readFile('books.json');
        const bookToDelete = books.find(book => book.id === parseInt(id));
        const filteredBooks = books.filter(book => book.id !== parseInt(id));
        await writeFile('books.json', filteredBooks);
        return bookToDelete
    },
    async booksStats() {
        const books = await readFile('books.json');
        const totalNumberOfBooks = books.length
        const booksPerAuthor = books.reduce((acc, book) => {
            acc[book.author] = acc[book.author] ? acc[book.author] + 1 : 1;
            return acc;
        }, {});
        const oldestBook = books.reduce((oldest, book) => {
            return !oldest || book.year < oldest.year ? book : oldest;
        }, null);
        const newestBook = books.reduce((newest, book) => {
            return !newest || book.year > newest.year ? book : newest;
        }, null);
        const stats = {
            totalNumberOfBooks: totalNumberOfBooks,
            booksPerAuthor: booksPerAuthor,
            oldestBook: oldestBook,
            newestBook: newestBook
        }
        return stats;
    },
    async getBookById(id) {
        const books = await readFile('books.json');
        const book = books.find(book => book.id === parseInt(id));
        return book;
    },
    async updateBookById(id, body) {
        const books = await readFile('books.json');
        const bookToUpdate = books.find(book => book.id === parseInt(id))
        if (bookToUpdate) {
            if (body.title){
                bookToUpdate.title = body.title;
            }
            if (body.author){
                bookToUpdate.author = body.author;
            }
            if (body.year){
                bookToUpdate.year = body.year;
            }
            if (body.genre){
                bookToUpdate.genre = body.genre;
            }
            await writeFile('books.json', books);
		}
        return bookToUpdate;
    },
    async reviewBookById(id, body) {
        const books = await readFile('books.json');
        const bookToReview = books.find(book => book.id === parseInt(id))
        if (bookToReview){
            bookToReview.reviews.push(body);
            await writeFile('books.json', books);
        }
        return bookToReview;
    },
    
};

export default BookModel;