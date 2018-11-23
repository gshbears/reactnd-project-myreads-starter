import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import BuildBook from './BuildBook'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes =  {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    showingBooks: []
  }

  searchQuery = (query) => {
    this.setState({ query: query, showingBooks:[]})

    if (query !=='' ){
      BooksAPI.search(query).then((newBooks) => {
        if( newBooks.length > 0){
          this.setState({showingBooks:newBooks})
        }
      })
    }
  }

  getRibbonName(shelf){
    switch (shelf) {
      case 'currentlyReading':
        return 'Currently'

      case 'wantToRead':
        return 'Want'

      case 'read':
        return 'Read'

      default:
        return 'none'
    }
  }

  render() {

    const { showingBooks } = this.state
    const { moveBook, books } = this.props
    let selectShelf

    showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>

          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.searchQuery(event.target.value)}
              />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
              {showingBooks.length > 0 && showingBooks.map(book => {
                selectShelf = 'none'
                books.map(selected =>
                    (selected.id === book.id) ? selectShelf = selected.shelf : ''
                )
                return  <BuildBook
                         book={book}
                         key={book.id}
                         moveBook={moveBook}
                         currentShelf ={selectShelf}
                         ribbonName = {this.getRibbonName(selectShelf)}
                         />
                  }
                )
             }
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
