import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookShelves from './BookShelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     *List of books array.
     */
    books: []
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    console.log(shelf)
      BooksAPI.update(book, shelf).then(
          this.getAllBooks()
      )
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() =>(
          <BookShelves
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )}/>
        <Route path='/search' render={({ history }) =>(
          <SearchBooks
            books={this.state.books}
            moveBook={this.moveBook}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
