import Book from '../models/books.model.js'

const BookController = {
	async getAllBooks(req, res) {
		const books = await Book.getAllBooks();
		res.send(books);
	},
	async getBookByAuthorYear(req, res) {
		const {
			params: { author, year },
		} = req;
		const book = await Book.getBookByAuthorYear(author, year);

		if (!book) {
			res.status(404).send({
				error: 'There are not such books.',
			});
		}
		res.send(book);
	},
	async createBook(req, res) {
		// const body = req.body
		const { body } = req;

        console.log(body)

		const book = await Book.createBook(body);

		res.status(201).send(book);
	},
};

export default BookController;