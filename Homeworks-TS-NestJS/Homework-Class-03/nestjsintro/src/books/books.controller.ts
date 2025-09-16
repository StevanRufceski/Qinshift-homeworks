import { Controller, Get, Param, Post, Body, Put, Patch, Delete, Query, HttpCode, HttpStatus, NotFoundException } from '@nestjs/common';
import { error } from 'console';
import { NotFoundError } from 'rxjs';

interface Book {
    id: number;
    title: string;
    price: number;
    author: string;
}

type UpsertBook = Omit<Book, 'id'>;

interface searchBooksParams {
    minPrice: number;
    author: string;
}

@Controller('books')
export class BooksController {
    private books: Book[] = [
        { id: 1, title: 'Zoki Poki', price: 10, author: 'Olivera Nikolova' },
    ];
    @Get()
    @HttpCode(HttpStatus.FOUND)
    filterBooks(@Query() searchParams: searchBooksParams): Book[] {
        let filteredBooks = [...this.books];
        if (!searchParams){
            return this.books;
        } else {
            if (searchParams.minPrice){
                filteredBooks = filteredBooks.filter((book) => book.price > Number(searchParams.minPrice),);
            }
            if (searchParams.author){
                filteredBooks = filteredBooks.filter((book) => book.author === searchParams.author,);
            }
            return filteredBooks;
        }
    }

    @Get('/:id')
    @HttpCode(HttpStatus.FOUND)
    getBookById(@Param('id') id: string): Book | undefined{
        const bookIndex = this.books.findIndex((book) => book.id === Number(id))
        if (bookIndex === -1) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        return this.books.find((book) => book.id === Number(id));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createBook(@Body() bodyBook: UpsertBook) {
        if (!bodyBook.title || bodyBook.title.trim().length === 0) {
            throw new Error('Title is required');
        }
        
        if (!bodyBook.author || bodyBook.author.trim().length === 0) {
            throw new Error('Author is required');
        }
    
        if (typeof bodyBook.price !== 'number' || bodyBook.price <= 0) {
            throw new Error('Price must be a positive number');
        }
        const newBook = {
            ... bodyBook,
            id: Date.now(),
        } satisfies Book;
        this.books.push(newBook);
        return newBook;
    }
    @Put('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    changeBook(@Body() changeBookData: UpsertBook, @Param('id') id: string){
        const bookIndex = this.books.findIndex((book) => book.id === Number(id));
        if (bookIndex === -1) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        if (!changeBookData.title || changeBookData.title.trim().length === 0) {
            throw new Error('Title is required');
        }
        
        if (!changeBookData.author || changeBookData.author.trim().length === 0) {
            throw new Error('Author is required');
        }
    
        if (typeof changeBookData.price !== 'number' || changeBookData.price <= 0) {
            throw new Error('Price must be a positive number');
        }
        const changedBook = {
            ... changeBookData,
            id: Number(id),
        } satisfies Book;
        this.books[bookIndex] = changedBook;
        return changedBook
    }
    @Patch('/:id')
    @HttpCode(HttpStatus.ACCEPTED)
    updateBook(@Body() updateBookData: Partial<UpsertBook>, @Param('id') id:string){
        const bookIndex = this.books.findIndex((book) => book.id === Number(id));
        if (bookIndex === -1) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        if (updateBookData.title && updateBookData.title.trim().length === 0) {
            throw new Error('Title is required');
        }
        
        if (updateBookData.author && updateBookData.author.trim().length === 0) {
            throw new Error('Author is required');
        }
        if (updateBookData.price !== undefined) {
            if ((updateBookData.author && typeof updateBookData.price !== 'number') || (updateBookData.author && updateBookData.price <= 0)) {
                throw new Error('Price must be a positive number');
            }
        }
        const updatedBook = {
            ...this.books[bookIndex],
            ...updateBookData,
            id: Number(id),
        } satisfies Book;
        this.books[bookIndex] = updatedBook;
        return updatedBook
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteBook(@Param('id') id:string){
        const bookIndex = this.books.findIndex((book) => book.id === Number(id))
        if (bookIndex === -1) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        this.books = this.books.filter((book) => book.id !== Number(id));
        return this.books;
    }

}
