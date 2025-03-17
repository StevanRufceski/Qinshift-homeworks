import Book from '../models/books.model.js'

const BookController = {
	async getAllBooks(req, res) {
		const books = await Book.getAllBooks();
		res.send(books);
	},
	async getBookByAuthorYear(req, res) {
		const {year, author} = req.query;
		const book = await Book.getBookByAuthorYear(author, year);
		if (!book) {
			res.status(404).send({
				error: 'There are not such books.',
			});
		}
		res.send(book);
	},
	async createBook(req, res) {
		const { body } = req;
        console.log(body)
		const book = await Book.createBook(body);
		res.status(201).send(book);
	},
	async deleteBook(req, res) {
		const {id} = req.query;
		const book = await Book.deleteBook(id);
		if (!book) {
			res.status(404).send({
				error: 'There are not such book.',
			});
		}
		res.sendStatus(204);
	},
	async booksStats(req, res) {
		const stats = await Book.booksStats();
		res.send(stats);
	},
	async getBookById(req, res) {
		const {id} = req.params;
		const book = await Book.getBookById(id);
		if (!book) {
			res.status(404).send({
				error: 'There are not such book.',
			});
		}
		res.send(book);
	},
	async updateBookById(req, res) {
		const {id} = req.params;
		const { body } = req;
		const book = await Book.updateBookById(id, body);
		res.status(201).send(book);
	},
	async reviewBookById(req, res) {
		const {id} = req.params;
		const { body } = req;
		const book = await Book.updateBookById(id, body);
		res.status(201).send(book);
	},
};

export default BookController;