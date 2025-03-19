import BookModel from '../models/books.model.js'

const BookController = {
	async getAllBooks(req, res) {
		const books = await BookModel.getAllBooks();
		if (books.length > 0) {
			res.send(books);
		} else {
			res.status(404).send({
				error: 'The library is empty.',
			});
		}
	},
	async getBooksByAuthorYear(req, res) {
		const {year, author} = req.query;
		const filteredBooks = await BookModel.getBooksByAuthorYear(author, year);
		if (filteredBooks.length > 0) {
			res.send(filteredBooks);
		} else {
			res.status(404).send({
				error: 'There are no such books.',
			});
		}
	},
	async createBook(req, res) {
		const { body } = req;
        console.log(body)
		const book = await BookModel.createBook(body);
		if (!book) {
			res.status(404).send({
				error: 'Can not create book without knowing title, author, and year.',
			});
		} 
		res.status(201).send(book);
		
	},
	async deleteBook(req, res) {
		const {id} = req.params;
		const bookToDelete = await BookModel.deleteBook(id);
		if (!bookToDelete) {
			res.status(404).send({
				error: 'There are not such book.',
			});
		}
		res.sendStatus(204);
	},
	async booksStats(req, res) {
		const stats = await BookModel.booksStats();
		res.send(stats);
	},
	async getBookById(req, res) {
		const {id} = req.params;
		const book = await BookModel.getBookById(id);
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
		const book = await BookModel.updateBookById(id, body);
		if (!book) {
			res.status(404).send({
				error: 'There are not such book.',
			});
		}
		res.status(201).send(book);
	},
	async reviewBookById(req, res) {
		const {id} = req.params;
		const { body } = req;
		const book = await BookModel.reviewBookById(id, body);
		if (!book) {
			res.status(404).send({
				error: 'There are not such book.',
			});
		}
		res.status(201).send(book);
	},
};

export default BookController;