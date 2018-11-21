import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import BuildBook from './BuildBook'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

  state = {
    query: '',
    showingBooks: []
  }

  SearchQuery = (query) => {
    this.setState({ query: query, showingBooks:[]})

    if (query !=='' ){
      BooksAPI.search(query).then((newBooks) => {
        if( newBooks.length > 0){
          this.setState({showingBooks:newBooks})
        }
      })
    }
  }

  render() {

    const { showingBooks } = this.state
    const { moveBook, books } = this.props

    showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>

          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.SearchQuery(event.target.value)}
              />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
              {showingBooks.length > 0 && showingBooks.map(book => {
                let selectShelf = 'none'
                books.map(selected =>
                    (selected.id === book.id) ? selectShelf = selected.shelf : ''
                )
                if (selectShelf === 'none') {
                    return  <BuildBook
                             book={book}
                             key={book.id}
                             moveBook={moveBook}
                             currentShelf = 'none'
                             />
                    }else{
                      return null
                    }
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
