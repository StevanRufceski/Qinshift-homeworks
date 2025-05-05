import { Controller, Get, Param, Post, Body, Put, Patch, Delete, Query } from '@nestjs/common';

interface Book {
    id: number;
    title: string;
    price: number;
    author: string;
}

type UpsertBook = Omit<Book, 'id'>;

interface searchBooksParams {
    minPrice: string;
    author: string;
}

@Controller('books')
export class BooksController {
    private books: Book[] = [
        { id: 1, title: 'Zoki Poki', price: 10, author: 'Olivera Nikolova' },
    ];
    @Get('/filter')
    filterBooks(@Query() searchParams: searchBooksParams): Book[] {
        let filteredBooks = [...this.books];
        if (searchParams.minPrice){
            filteredBooks = filteredBooks.filter((book) => book.price > Number(searchParams.minPrice),);
        }
        if (searchParams.author){
            filteredBooks = filteredBooks.filter((book) => book.author === searchParams.author,);
        }
        return filteredBooks;
    }

    @Get()
    getAllBooks(): Book[]{
        return this.books;
    }

    @Get('/:id')
    getBookById(@Param('id') id: string): Book | undefined{
        return this.books.find((book) => book.id === Number(id));
    }

    @Post()
    createBook(@Body() bodyBook: UpsertBook) {
        const newBook = {
            ... bodyBook,
            id: Date.now(),
        } satisfies Book;
        this.books.push(newBook);
        return newBook;
    }
    @Put('/:id')
    changeBook(@Body() changeBookData: UpsertBook, @Param('id') id: string){
        const bookIndex = this.books.findIndex((book) => book.id === Number(id));
        const changedBook = {
            ... changeBookData,
            id: Number(id),
        } satisfies Book;
        this.books[bookIndex] = changedBook;
        return changedBook
    }
    @Patch('/:id')
    updateBook(@Body() updateBookData: Partial<UpsertBook>, @Param('id') id:string){
        const bookIndex = this.books.findIndex((book) => book.id === Number(id));
        const updatedBook = {
            ...this.books[bookIndex],
            ...updateBookData,
            id: Number(id),
        } satisfies Book;
        this.books[bookIndex] = updatedBook;
        return updatedBook
    }
    @Delete('/:id')
    deleteBook(@Param('id') id:string){
        this.books = this.books.filter((book) => book.id !== Number(id));
        return this.books;
    }

}
