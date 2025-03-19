import { Router } from "express";
import BookController from '../controllers/books.controller.js';

const router = Router();

router.get('/all', BookController.getAllBooks);
router.get('/qsearch', BookController.getBooksByAuthorYear);
router.post('/create', BookController.createBook);
router.delete('/delete/:id', BookController.deleteBook);
router.get('/stats', BookController.booksStats);
router.get('/dsearch/:id', BookController.getBookById);
router.put('/update/:id', BookController.updateBookById);
router.post('/review/:id', BookController.reviewBookById);

export default router;