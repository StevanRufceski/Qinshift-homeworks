import './App.css';
import { Header } from './components/Header';
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { Counter } from './components/Counter';
import { useState } from 'react';
// type, potreben za da moze da primi i prepoznae Book - start
type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  isRead: boolean;
};

function App() {
// funkcija koja treba da gi prevzeme books od BookList.tsx - start
  const [numberOfBooks, setNumberOfBooks] = useState(0);
  const handleBooks = (library: Book[]) => {
    console.log(`Number of books received in parent is ${library.length}`);
    setNumberOfBooks(library.length);
  };
// funkcija koja treba da gi prevzeme books od BookList.tsx - end
  return (
    <main>
      <Header title="Book Library" username="Stevan Rufceski" />
      <hr />
      <BookList handleBooks={handleBooks} />
      <hr />
      <Counter numberOfBooks={numberOfBooks} />
      <hr />
      <Footer />
    </main>
  );
}

export default App;
