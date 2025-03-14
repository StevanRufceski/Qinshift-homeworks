import { Router } from "express";
import BookController from '../controllers/books.controller.js';

const router = Router();

router.get('/all', BookController.getAllBooks);
router.get('/:author/:year', BookController.getBookByAuthorYear);
router.post('/', BookController.createBook);

export default router;