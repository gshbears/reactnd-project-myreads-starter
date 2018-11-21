import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import BuildBook from './BuildBook'

class BookShelves extends Component {


  render() {
    const { books, moveBook } = this.props

    books.sort(sortBy('title'))

    let currentlyReading = books.filter((book) => book.shelf === 'currentlyReading')
    let wantToRead = books.filter((book) => book.shelf === 'wantToRead')
    let read = books.filter((book) => book.shelf === 'read')

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map(currentlyReading => {
                   return  <BuildBook
                   book={currentlyReading}
                   key={currentlyReading.id}
                   moveBook={moveBook}
                   currentShelf = 'currentlyReading'
                   />
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {wantToRead.map(wantToRead => {
                  return  <BuildBook
                  book={wantToRead}
                  key={wantToRead.id}
                  moveBook={moveBook}
                  currentShelf = 'wantToRead'
                  />
                })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {read.map(read => {
                  return  <BuildBook
                  book={read}
                  key={read.id}
                  moveBook={moveBook}
                  currentShelf = 'read'
                  />
                })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default BookShelves
