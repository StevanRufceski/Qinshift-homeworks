import { useEffect } from 'react';
import stilovi from './BookList.module.css';

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  isRead: boolean;
};

interface BooksProps {
  handleBooks: (library: Book[]) => void;
}

export function BookList(props: BooksProps) {
  const books: Book[] = [
    { id: 1, title: 'Book 1', author: 'Author One', year: 1985, isRead: false },
    { id: 2, title: 'Book 2', author: 'Author Two', year: 1990, isRead: true },
    { id: 3, title: 'Book 3', author: 'Author Three', year: 1995, isRead: true },
    { id: 4, title: 'Book 4', author: 'Author Two', year: 2000, isRead: true },
    { id: 5, title: 'Book 5', author: 'Author Three', year: 2005, isRead: false },
  ];

  useEffect(() => {
    props.handleBooks(books);
  }, []);

  return (
<ul>
  {books.map((book) => (
    <li key={book.id} className={book.isRead ? stilovi.read : stilovi.unread}>
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Read: {book.isRead ? 'Yes' : 'No'}</p>
    </li>
  ))}
</ul>

  );
}
