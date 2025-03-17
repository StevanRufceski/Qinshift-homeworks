import { Router } from "express";
import BookController from '../controllers/books.controller.js';

const router = Router();

router.get('/books/all', BookController.getAllBooks);
router.get('/books/qsearch', BookController.getBookByAuthorYear);
router.post('/books/create', BookController.createBook);
router.delete('/books/delete', BookController.deleteBook);
router.get('/books/stats', BookController.booksStats);
router.get('/books/dsearch/:id', BookController.getBookById);
router.put('/books/update/:id', BookController.updateBookById);
router.post('/books/reviews/:id', BookController.reviewBookById);

export default router;