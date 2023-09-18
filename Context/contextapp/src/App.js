import React from 'react'
import Navbar from "./components/Navbar";
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider, { BookContext } from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
