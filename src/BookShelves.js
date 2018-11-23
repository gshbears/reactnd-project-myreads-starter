import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import BuildShelf from './BuildShelf'
import PropTypes from 'prop-types'

class BookShelves extends PureComponent {
  static propTypes =  {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  render() {

    const { books, moveBook } = this.props
    const shelves = [
        {
          title: 'Currently Reading',
          shelf: 'currentlyReading',
        },
        {
          title: 'Want to Read',
          shelf: 'wantToRead',
        },
        {
          title: 'Read',
          shelf: 'read',
        },
      ];

    books.sort(sortBy('title'))

    return (

      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => {
           return  <BuildShelf
            shelfBooks={books.filter((book) => book.shelf === shelf.shelf)}
            key={shelf.shelf}
            moveBook={moveBook}
            shelf = {shelf.shelf}
            shelfTitle = {shelf.title}
            />
          })}
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
